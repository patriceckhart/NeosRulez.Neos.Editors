import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import SelectBox_Option_MultiLineWithStyle from "./SelectBox_Option_MultiLineWithStyle";

class Option extends PureComponent {
	static propTypes = {
		option: PropTypes.shape({
			label: PropTypes.string.isRequired,
			loaderUri: PropTypes.string.isRequired,
			backgroundColor: PropTypes.string,
			textColor: PropTypes.string,
		}),
	};

	render() {
		const { option } = this.props;

		return (
			<SelectBox_Option_MultiLineWithStyle
				{...this.props}
				label={option.label}
				backgroundColor={option.backgroundColor}
				textColor={option.textColor}
			/>
		);
	}
}

export default Option;
