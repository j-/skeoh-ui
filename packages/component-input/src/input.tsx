import * as React from 'react';
import * as classNames from 'classnames';

export interface Props extends React.HTMLAttributes<HTMLInputElement> {

}

const Input = ({ className, ...props }: Props) => (
	<input
		type="text"
		{ ...props }
		className={ classNames('skeoh-ui-input', className) }
	/>
);

export default Input;
