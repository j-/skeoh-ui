import * as React from 'react';
import * as classNames from 'classnames';

export interface Props extends React.HTMLAttributes<HTMLButtonElement> {

}

const Button = (props: Props) => (
	<button
		type="button"
		{ ...props }
		className={ classNames('skeoh-ui-button', props.className) }
	/>
);

export default Button;
