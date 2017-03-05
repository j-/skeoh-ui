import * as React from 'react';
import * as classNames from 'classnames';

export interface IProps {
	[prop: string]: any,
}

const Button = (props: IProps) => (
	<button
		{ ...props }
		type="button"
		className={ classNames("skeoh-ui-button", props.className) }
	/>
);

export default Button;
