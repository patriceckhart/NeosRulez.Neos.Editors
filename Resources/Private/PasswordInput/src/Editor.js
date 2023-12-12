import React, {Fragment, PureComponent, useState} from 'react';
import PropTypes from 'prop-types';
import { TextInput, IconButton } from "@neos-project/react-ui-components";
import styles from "./styles.css";

class Editor extends PureComponent {

	static propTypes = {
		value: PropTypes.array,
		commit: PropTypes.func.isRequired,
	};

    constructor(props) {
        super(props);
		this.state = {
			value: '',
		}
		this.setValue = this.setValue.bind(this);
    }

	setValue(value) {
		this.setState({value: value}, () => {
			this.props.commit(this.state.value);
		})
	}

	componentDidMount() {
		const {value} = this.props;
		this.setState({value: value});
	}

	render() {

		const {value} = this.state;

        return <Selector value={value} setValue={(p) => this.setValue(p)} />
    }
}

export default Editor;

const Selector = (props) => {

	const [type, setType] = useState('password')
	const {value, setValue} = props;

	const handleClick = () => {
		setType(type === 'password' ? 'text' : 'password')
	}

	return (
		<Fragment>
			<div className={styles.PasswordWrapper}>
				<IconButton icon={type === 'password' ? 'fas fa-eye' : 'fas fa-eye-slash'} style="clean" hoverStyle="clean" onClick={() => handleClick()} />
				<TextInput type={type} onChange={(p) => setValue(p)} value={value} />
			</div>
		</Fragment>
	)
}
