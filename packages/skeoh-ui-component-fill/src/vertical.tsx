import * as React from 'react';
import * as classNames from 'classnames';

export interface IProps extends React.Props<void> {

}

const wrapChild = (child: JSX.Element, idx: number) => (
	React.cloneElement(
		child,
		{
			...child.props,
			className: classNames('skeoh-ui-fill-vertical', child.props.className),
		}
	)
);

const FillVertical = (props: IProps) => (
	<div className="skeoh-ui-fill-vertical">
		{ React.Children.map(props.children, wrapChild) }
	</div>
);

export default FillVertical;
