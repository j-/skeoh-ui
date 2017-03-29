import * as React from 'react';
import * as classNames from 'classnames';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {

}

const FillHorizontal = ({ className, ...props }: IProps) => (
	<div className={ classNames('skeoh-ui-fill-horizontal', className) } { ...props } />
);

export default FillHorizontal;
