import * as React from 'react';
import * as classNames from 'classnames';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	row?: boolean,
	rowReverse?: boolean,
	columm?: boolean,
	columnReverse?: boolean,
	[prop: string]: any,
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

const FlexContainer = (props: IProps) => (
	<div
		{ ...props }
		className={ classNames('skeoh-ui-flex-container', props.className) }
		style={{
			...props.style,
			flexDirection: getFlexDirection(props),
		}}
	/>
);

export default FlexContainer;
