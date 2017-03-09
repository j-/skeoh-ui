import * as React from 'react';
import * as classNames from 'classnames';

export interface IProps extends React.HTMLAttributes<HTMLInputElement> {

}

const Input = (props: IProps) => (
	<input
		type="text"
		{ ...props }
		className={ classNames('skeoh-ui-input', props.className) }
	/>
);

export default Input;
