import * as React from 'react';
import * as classNames from 'classnames';

export interface IProps extends React.Props<HTMLDivElement> {
	grow: number,
	[prop: string]: any,
}

const FlexItem = (props: IProps) => (
	<div
		{ ...props }
		className={ classNames('skeoh-ui-flex-item', props.classNames) }
		style={{
			...props.style,
			flexGrow: props.grow || 1,
		}}
	/>
);

export default FlexItem;
