import * as React from 'react';
import * as classNames from 'classnames';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {

}

const FillHorizontal = ({ className, ...props }: Props) => (
	<div className={ classNames('skeoh-ui-fill-horizontal', className) } { ...props } />
);

export default FillHorizontal;
