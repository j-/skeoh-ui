import * as React from 'react';
import * as classNames from 'classnames';
import { FlexContainer, FlexItem } from 'skeoh-ui-component-flex/src';

export interface IProps extends React.Props<HTMLDivElement> {
	[prop: string]: any,
}

const flexItem = (child: JSX.Element, idx: number) => (
	<FlexItem grow={ 1 } key="idx">{ child }</FlexItem>
);

const ButtonGroup = (props: IProps) => (
	<div
		{ ...props }
		className={ classNames("skeoh-ui-button-group", props.className) }
	>
		<FlexContainer>
			{ React.Children.map(props.children, flexItem) }
		</FlexContainer>
	</div>
);

export default ButtonGroup;
