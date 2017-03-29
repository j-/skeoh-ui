import * as React from 'react';
import * as classNames from 'classnames';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {

}

const FillVertical = ({ className, ...props }: IProps) => (
	<div className={ classNames('skeoh-ui-fill-vertical', className) } { ...props } />
);

export default FillVertical;
