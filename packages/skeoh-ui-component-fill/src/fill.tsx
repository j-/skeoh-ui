import * as React from 'react';
import * as classNames from 'classnames';

export interface IProps extends React.Props<void> {

}

const wrapChild = (child: React.ReactElement<any>) => (
	React.cloneElement(
		child,
		{
			...child.props,
			className: classNames('skeoh-ui-fill', child.props.className),
		}
	)
);

const Fill = (props: IProps) => (
	<div className="skeoh-ui-fill">
		{ React.Children.map(props.children, wrapChild) }
	</div>
);

export default Fill;
