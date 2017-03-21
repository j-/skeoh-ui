import * as React from 'react';
import Demo from './Demo';

const LoadingIndicator = () => (
	<div>
		Loading editor&hellip;
	</div>
);

export interface IProps extends React.Props<void> {

}

interface IState {
	Component?: typeof Demo;
}

declare var require: {
	<T>(path: string): T;
	(paths: string[], callback: (...modules: any[]) => void): void;
	ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
};

export default class DemoContainer extends React.Component<IProps, IState> {
	public state: Partial<IState> = {
		Component: null,
	};

	constructor (props: IProps) {
		super(props);
	}

	public componentDidMount () {
		this.ensureDependency();
	}

	public ensureDependency () {
		require.ensure(['./Demo'], (require) => {
			const demoModule: any = require('./Demo');
			const Component = demoModule.default as typeof Demo;
			this.setState({
				Component,
			});
		});
	}

	public render () {
		const { Component } = this.state;
		return Component ? <Component /> : <LoadingIndicator />;
	}
}
