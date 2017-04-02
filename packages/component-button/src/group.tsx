import * as React from 'react';
import * as classNames from 'classnames';
import { FlexContainer, FlexItem } from '@skeoh-ui/component-flex';
import { Fill } from '@skeoh-ui/component-fill';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	vertical?: boolean;
}

const flexItem = (child: React.ReactElement<void>) => (
	<FlexItem grow={ 1 }>
		<Fill>{ child }</Fill>
	</FlexItem>
);

const ButtonGroup = ({ vertical, className, ...props }: IProps) => (
	<div
		{ ...props }
		className={ classNames({
			'skeoh-ui-button-group-horizontal': !vertical,
			'skeoh-ui-button-group-vertical': vertical,
		}, className) }
	>
		<FlexContainer>
			{ React.Children.map(props.children, flexItem) }
		</FlexContainer>
	</div>
);

export default ButtonGroup;
