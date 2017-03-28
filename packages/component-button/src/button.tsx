import * as React from 'react';
import * as classNames from 'classnames';

export interface IProps extends React.HTMLAttributes<HTMLInputElement> {

}

const Button = (props: IProps) => (
	<button
		type="button"
		{ ...props }
		className={ classNames('skeoh-ui-button', props.className) }
	/>
);

export default Button;
