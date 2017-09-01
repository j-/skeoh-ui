import * as React from 'react';
import * as classNames from 'classnames';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
	row?: boolean;
	rowReverse?: boolean;
	column?: boolean;
	columnReverse?: boolean;
}

const getFlexDirection = (props: Props) => {
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

const FlexContainer = ({
	className,
	style,
	row,
	rowReverse,
	column,
	columnReverse,
	...props,
}: Props) => (
	<div
		{ ...props }
		className={ classNames('skeoh-ui-flex-container', className) }
		style={{
			...style,
			flexDirection: getFlexDirection({ ...props, row, rowReverse, column, columnReverse }),
		}}
	/>
);

export default FlexContainer;
