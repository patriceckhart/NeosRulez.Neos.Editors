import React, {Fragment, PureComponent} from 'react';
import PropTypes from 'prop-types';
import styles from "./styles.css";
import {Button, Icon, IconButton} from "@neos-project/react-ui-components";

class Editor extends PureComponent {

    static propTypes = {
        value: PropTypes.array,
        commit: PropTypes.func.isRequired,
        options: PropTypes.shape({
            allowEmpty: PropTypes.bool,
            values: PropTypes.objectOf(
                PropTypes.shape({
                    label: PropTypes.string,
                    icon: PropTypes.string,
                })
            ),
        }).isRequired,
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
        const {options} = this.props;

        return <Selector value={value} options={options} setValue={(p) => this.setValue(p)} />
    }
}

export default Editor;

const Selector = (props) => {

    const {value, options, setValue} = props;

    const handleClick = (keyValue) => {
        setValue(keyValue);
    }

    return (
        <Fragment>
            {options && options.values && Object.keys(options.values).length > 0 &&
                <div className={styles.toggleEditor}>
                    {Object.entries(options.values).map(([key, item]) => (
                        <Fragment>
                            {item.icon && !item.both &&
                                <IconButton icon={item.icon} title={item.label} style={value === key ? 'brand' : 'light'} hoverStyle="brand" onClick={(p) => handleClick(key)} />
                            }
                            {item.icon && item.both &&
                                <Button style={value === key ? 'brand' : 'light'} hoverStyle="brand" onClick={(p) => handleClick(key)}>
                                    <Icon icon={item.icon} /> <span>{item.label}</span>
                                </Button>
                            }
                            {!item.icon && !item.both &&
                                <Button style={value === key ? 'brand' : 'light'} hoverStyle="brand" onClick={(p) => handleClick(key)}>{item.label}</Button>
                            }
                        </Fragment>
                    ))}
                    {options.allowEmpty && (value !== '') &&
                        <IconButton icon="fas fa-times" title="" style="light" hoverStyle="brand" className={styles.allowEmpty} onClick={(p) => handleClick('')} />
                    }
                </div>
            }
        </Fragment>
    )
}
