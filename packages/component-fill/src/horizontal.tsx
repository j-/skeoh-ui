import * as React from 'react';
import * as classNames from 'classnames';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {

}

const wrapChild = (child: React.ReactElement<any>) => (
	React.cloneElement(
		child,
		{
			...child.props,
			className: classNames('skeoh-ui-fill-horizontal', child.props.className),
		},
	)
);

const FillHorizontal = ({ className, children, ...props }: IProps) => (
	<div className={ classNames('skeoh-ui-fill-horizontal', className) } { ...props }>
		{ React.Children.map(children, wrapChild) }
	</div>
);

export default FillHorizontal;
