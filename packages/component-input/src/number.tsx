import * as React from 'react';
import * as classNames from 'classnames';
import Input, { Props as InputProps } from './input';

export interface Props extends InputProps {
	hideSpinner?: boolean;
}

const NumberInput = ({ hideSpinner, className, ...props }: Props) => (
	<Input
		type="number"
		{ ...props }
		className={ classNames('skeoh-ui-input-number', {
			'skeoh-ui-hide-number-spinner': hideSpinner,
		}, className) }
	/>
);

export default NumberInput;
