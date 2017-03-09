import * as React from 'react';
import * as classNames from 'classnames';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	grow: number,
	[prop: string]: any,
}

const FlexItem = (props: IProps) => (
	<div
		{ ...props }
		className={ classNames('skeoh-ui-flex-item', props.className) }
		style={{
			...props.style,
			flexGrow: props.grow || 1,
		}}
	/>
);

export default FlexItem;
