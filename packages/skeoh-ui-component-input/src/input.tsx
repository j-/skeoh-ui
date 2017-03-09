import * as React from 'react';
import * as classNames from 'classnames';

export interface IProps extends React.HTMLAttributes<HTMLInputElement> {

}

const Input = ({ className, ...props }: IProps) => (
	<input
		type="text"
		{ ...props }
		className={ classNames('skeoh-ui-input', className) }
	/>
);

export default Input;
