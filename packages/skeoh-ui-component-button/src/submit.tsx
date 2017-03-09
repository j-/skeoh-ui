import * as React from 'react';
import Button, { IProps as IButtonProps } from './button';

export interface IProps extends IButtonProps {

}

const Submit = (props: IProps) => (
	<Button type="submit">
		{ props.children || 'Submit' }
	</Button>
);

export default Submit;
