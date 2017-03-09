import * as React from 'react';
import Button, { IProps as IButtonProps } from './button';

export interface IProps extends IButtonProps {

}

const Submit = ({ children, ...props }: IProps) => (
	<Button type="submit">
		{ children || 'Submit' }
	</Button>
);

export default Submit;
