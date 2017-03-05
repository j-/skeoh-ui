import * as React from 'react';
import * as classNames from 'classnames';
import { FlexContainer, FlexItem } from 'skeoh-ui-component-flex/src';
import { Fill } from 'skeoh-ui-component-fill/src';

export interface IProps extends React.Props<HTMLDivElement> {
	vertical?: boolean,
	[prop: string]: any,
}

const flexItem = (child: React.ReactElement<any>) => (
	<FlexItem grow={ 1 }>
		<Fill>{ child }</Fill>
	</FlexItem>
);

const ButtonGroup = (props: IProps) => (
	<div
		{ ...props }
		className={ classNames({
			'skeoh-ui-button-group-horizontal': !props.vertical,
			'skeoh-ui-button-group-vertical': props.vertical,
		}, props.className) }
	>
		<Fill>
			<FlexContainer>
				{ React.Children.map(props.children, flexItem) }
			</FlexContainer>
		</Fill>
	</div>
);

export default ButtonGroup;
