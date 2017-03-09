import * as React from 'react';
import * as classNames from 'classnames';
import Input, { IProps as IInputProps } from './input';

export interface IProps extends IInputProps {
	hideSpinner?: boolean;
}

const NumberInput = ({ hideSpinner, className, ...props }: IProps) => (
	<Input
		type="number"
		{ ...props }
		className={ classNames('skeoh-ui-input-number', {
			'skeoh-ui-hide-number-spinner': hideSpinner,
		}, className) }
	/>
);

export default NumberInput;
