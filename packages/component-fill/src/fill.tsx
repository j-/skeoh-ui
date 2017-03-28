import * as React from 'react';
import * as classNames from 'classnames';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {

}

const wrapChild = (child: React.ReactElement<any>) => (
	React.cloneElement(
		child,
		{
			...child.props,
			className: classNames('skeoh-ui-fill', child.props.className),
		},
	)
);

const Fill = ({ className, children, ...props }: IProps) => (
	<div className={ classNames('skeoh-ui-fill', className) } { ...props }>
		{ React.Children.map(children, wrapChild) }
	</div>
);

export default Fill;
