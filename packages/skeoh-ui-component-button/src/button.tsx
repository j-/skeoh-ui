import * as React from 'react';

export interface IProps {
	[prop: string]: any,
}

const Button = (props: IProps) => (
	<button
		className="skeoh-ui-button"
		{ ...props }
	/>
);

export default Button;
