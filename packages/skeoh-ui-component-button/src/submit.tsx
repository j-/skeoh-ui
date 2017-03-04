import * as React from 'react';
import Button from './button';

interface IProps {
	children?: JSX.Element,
}

const Submit = (props: IProps) => (
	<Button type="submit">
		{ props.children || 'Submit ' }
	</Button>
);

export default Submit;
