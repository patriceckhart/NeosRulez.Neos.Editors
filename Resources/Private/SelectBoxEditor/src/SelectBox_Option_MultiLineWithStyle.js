import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import styles from "./styles.css";

class SelectBox_Option_MultiLineWithStyle extends PureComponent {
	static propTypes = {
		label: PropTypes.string.isRequired,
		style: PropTypes.string,
		onClick: PropTypes.func,
		isHighlighted: PropTypes.bool,
		onMouseEnter: PropTypes.func,
	}

	render() {

		const {
			label,
			backgroundColor,
			textColor,
			onClick,
			onMouseEnter
		} = this.props;

		return (
			<div
				onMouseEnter={onMouseEnter}
				onClick={onClick}
				role="button"
				style={{backgroundColor: backgroundColor, color: textColor}}
				className={styles.option}
			>
				<div className={styles.preview} style={{backgroundColor: backgroundColor}} />
				<span>{label}</span>
			</div>
		);
	}
}

export default SelectBox_Option_MultiLineWithStyle;
