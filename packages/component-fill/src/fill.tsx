import * as React from 'react';
import * as classNames from 'classnames';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {

}

const Fill = ({ className, ...props }: Props) => (
	<div className={ classNames('skeoh-ui-fill', className) } { ...props } />
);

export default Fill;
