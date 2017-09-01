import * as React from 'react';
import * as classNames from 'classnames';
import { FlexContainer, FlexItem } from '@skeoh-ui/component-flex';
import { Fill } from '@skeoh-ui/component-fill';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
	vertical?: boolean;
}

const flexItem = (child: React.ReactNode) => (
	<FlexItem grow={ 1 }>
		<Fill>{ child }</Fill>
	</FlexItem>
);

const ButtonGroup = ({ vertical, className, children, ...props }: Props) => (
	<div
		{ ...props }
		className={ classNames({
			'skeoh-ui-button-group-horizontal': !vertical,
			'skeoh-ui-button-group-vertical': vertical,
		}, className) }
	>
		<FlexContainer>
			{ React.Children.map(children, flexItem) }
		</FlexContainer>
	</div>
);

export default ButtonGroup;
