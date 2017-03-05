import * as React from 'react';
import * as classNames from 'classnames';

export interface IProps extends React.Props<void> {

}

const wrapChild = (child: JSX.Element, idx: number) => (
	React.cloneElement(
		child,
		{
			...child.props,
			className: classNames('skeoh-ui-fill-horizontal', child.props.className),
		}
	)
);

const FillHorizontal = (props: IProps) => (
	<div className="skeoh-ui-fill-horizontal">
		{ React.Children.map(props.children, wrapChild) }
	</div>
);

export default FillHorizontal;
