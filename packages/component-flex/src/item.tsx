import * as React from 'react';
import * as classNames from 'classnames';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
	grow: number;
}

const FlexItem = ({ className, style, grow, ...props }: Props) => (
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
