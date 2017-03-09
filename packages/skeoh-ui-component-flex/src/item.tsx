import * as React from 'react';
import * as classNames from 'classnames';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	grow: number,
	[prop: string]: any,
}

const FlexItem = ({ className, style, grow, ...props }: IProps) => (
	<div
		{ ...props }
		className={ classNames('skeoh-ui-flex-item', className) }
		style={{
			...style,
			flexGrow: grow || 1,
		}}
	/>
);

export default FlexItem;
