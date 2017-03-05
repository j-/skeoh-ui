import * as React from 'react';

export interface IProps extends React.Props<HTMLDivElement> {

}

const ButtonGroup = (props: IProps) => (
	<div
		className="skeoh-ui-button-group"
		{ ...props }
	/>
);

export default ButtonGroup;
