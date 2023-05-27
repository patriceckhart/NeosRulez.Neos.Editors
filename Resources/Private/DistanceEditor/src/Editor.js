import React, {Fragment, PureComponent, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {
	IconButton,
	TextInput,
	SelectBox
} from "@neos-project/react-ui-components";
import styles from "./styles.css";

class Editor extends PureComponent {

	static propTypes = {
		value: PropTypes.array,
		commit: PropTypes.func.isRequired,
	};

    constructor(props: any) {
        super(props);
		this.state = {
			desktop: true,
			mobile: false,
			values: {},
			currentValues: {},
			changed: false
		}
		this.setValue = this.setValue.bind(this);
    }

	setValue(newValues) {
		let {values, changed} = this.state;
		if(newValues && newValues.desktop) {
			values.desktop = newValues.desktop;
		}
		if(newValues && newValues.mobile) {
			values.mobile = newValues.mobile;
		}
		this.setState({values: values}, () => {
			if(changed) {
				this.props.commit(JSON.stringify(this.state.values));
			}
		})
	}

	componentDidMount() {
		const {value} = this.props;
		this.setState({currentValues: value});
	}

	render() {

		const {desktop, mobile, currentValues} = this.state;

        return (
            <Fragment>
				<div className={styles.buttons} >
					<div className={styles.flexRow} >
						<IconButton
							icon="fas fa-desktop"
							style={desktop ? 'brand' : 'neutral'}
							hoverStyle="brand"
							onClick={() => this.setState({desktop: true, mobile: false})}
						/>
						<IconButton
							icon="fas fa-mobile-alt"
							style={mobile ? 'brand' : 'neutral'}
							hoverStyle="brand"
							onClick={() => this.setState({desktop: false, mobile: true})}
						/>
					</div>
				</div>
				<div className={!desktop ? styles.hidden : false} >
					<Selector display="desktop" values={currentValues.desktop} setValue={(p) => this.setValue(p)} setChanged={() => this.setState({changed: true})} />
				</div>
				<div className={!mobile ? styles.hidden : false} >
					<Selector display="mobile" values={currentValues.mobile} setValue={(p) => this.setValue(p)} setChanged={() => this.setState({changed: true})} />
				</div>
            </Fragment>
        );
    }
}

export default Editor;

const Selector = (props) => {

	const [unit, setUnit] = useState('px');
	const [top, setTop] = useState('0');
	const [right, setRight] = useState('0');
	const [bottom, setBottom] = useState('0');
	const [left, setLeft] = useState('0');
	const [changed, change] = useState(false);
	const {display, setValue, values, setChanged} = props;

	const handleChange = (value) => {
		setUnit(value);
	}

	const setFirstValue = (value) => {
		setTop(value);
		setRight(value);
		setBottom(value);
		setLeft(value);
	}

	useEffect(() => {
		if(values && values.top && values.right && values.bottom && values.left && values.unit) {
			setTop(values.top);
			setRight(values.right);
			setBottom(values.bottom);
			setLeft(values.left);
			setUnit(values.unit)
		}
	}, [values]);

	useEffect(() => {
		setValue({[display]: {top: top, right: right, bottom: bottom, left: left, unit: unit}});
		if(changed) {
			setChanged();
		} else {
			change(true);
		}
	}, [top, right, bottom, left, unit]);

	return (
		<Fragment>
			<div className={styles.flexRow} >
				<TextInput placeholder={unit} value={top} onChange={(p) => setFirstValue(p)} />
				<TextInput placeholder={unit} value={right} onChange={(p) => setRight(p)} />
				<TextInput placeholder={unit} value={bottom} onChange={(p) => setBottom(p)} />
				<TextInput placeholder={unit} value={left} onChange={(p) => setLeft(p)} />
			</div>
			<div className={styles.unitSelector} >
				<SelectBox
					options={
						[
							{
								label: 'px',
								value: 'px'
							},
							{
								label: '%',
								value: '%'
							},
							{
								label: 'em',
								value: 'em'
							},
							{
								label: 'rem',
								value: 'rem'
							},
						]
					}
					value={unit}
					onValueChange={(p) => handleChange(p)}
				/>
			</div>
		</Fragment>
	);
}
