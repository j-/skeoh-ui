import * as React from 'react';
import * as classNames from 'classnames';
import Button, { Props as ButtonProps } from './button';

export interface Props extends ButtonProps {

}

const Submit = ({ children, className, ...props }: Props) => (
	<Button
		type="submit"
		className={ classNames('skeoh-ui-button-submit', className) }
		{ ...props }
	>
		{ children || 'Submit' }
	</Button>
);

export default Submit;
