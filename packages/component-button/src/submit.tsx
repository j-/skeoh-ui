import * as React from 'react';
import * as classNames from 'classnames';
import Button, { IProps as IButtonProps } from './button';

export interface IProps extends IButtonProps {

}

const Submit = ({ children, className, ...props }: IProps) => (
	<Button
		type="submit"
		className={ classNames('skeoh-ui-button-submit', className) }
		{ ...props }
	>
		{ children || 'Submit' }
	</Button>
);

export default Submit;
