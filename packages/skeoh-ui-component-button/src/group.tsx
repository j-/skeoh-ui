import * as React from 'react';
import * as classNames from 'classnames';

export interface IProps extends React.Props<HTMLDivElement> {
	[prop: string]: any,
}

const ButtonGroup = (props: IProps) => (
	<div
		className={ classNames("skeoh-ui-button-group", props.className) }
		{ ...props }
	/>
);

export default ButtonGroup;
