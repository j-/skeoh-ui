import * as React from 'react';
import * as classNames from 'classnames';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	row?: boolean,
	rowReverse?: boolean,
	column?: boolean,
	columnReverse?: boolean,
}

const getFlexDirection = (props: IProps) => {
	if (props.row) {
		return 'row';
	} else if (props.rowReverse) {
		return 'row-reverse';
	} else if (props.column) {
		return 'column';
	} else if (props.columnReverse) {
		return 'column-reverse';
	} else {
		return 'auto';
	}
};

const FlexContainer = ({ className, style, ...props }: IProps) => (
	<div
		{ ...props }
		className={ classNames('skeoh-ui-flex-container', className) }
		style={{
			...style,
			flexDirection: getFlexDirection(props),
		}}
	/>
);

export default FlexContainer;
