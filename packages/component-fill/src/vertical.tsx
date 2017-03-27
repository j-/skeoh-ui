import * as React from 'react';
import * as classNames from 'classnames';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {

}

const wrapChild = (child: React.ReactElement<any>) => (
	React.cloneElement(
		child,
		{
			...child.props,
			className: classNames('skeoh-ui-fill-vertical', child.props.className),
		},
	)
);

const FillVertical = ({ className, children, ...props }: IProps) => (
	<div className={ classNames('skeoh-ui-fill-vertical', className) } { ...props }>
		{ React.Children.map(children, wrapChild) }
	</div>
);

export default FillVertical;
