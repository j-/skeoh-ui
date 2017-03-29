import * as React from 'react';
import * as classNames from 'classnames';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {

}

const Fill = ({ className, ...props }: IProps) => (
	<div className={ classNames('skeoh-ui-fill', className) } { ...props } />
);

export default Fill;
