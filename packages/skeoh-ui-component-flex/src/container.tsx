import * as React from 'react';
import * as classNames from 'classnames';

export interface IProps extends React.Props<HTMLDivElement> {
	[prop: string]: any,
}

const FlexContainer = (props: IProps) => (
	<div
		{ ...props }
		className={ classNames('skeoh-ui-flex-container', props.classNames) }
	/>
);

export default FlexContainer;
