import * as React from 'react';
import * as classNames from 'classnames';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {

}

const FillVertical = ({ className, ...props }: Props) => (
	<div className={ classNames('skeoh-ui-fill-vertical', className) } { ...props } />
);

export default FillVertical;
