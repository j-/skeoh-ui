import * as React from 'react';
import * as CodeMirror from 'react-codemirror';
import { Submit } from 'skeoh-ui-component-button/src';
import { FillHorizontal } from 'skeoh-ui-component-fill/src';
import * as ts from 'typescript';
import bootstrap from '../safe-imports';

import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/jsx/jsx';

interface IProps extends React.Props<void> {

};

interface IState {
	value: string;
};

const compilerOptions: ts.CompilerOptions = {
	module: ts.ModuleKind.CommonJS,
	target: ts.ScriptTarget.ES5,
	jsx: ts.JsxEmit.React,
};

const transpileOptions: ts.TranspileOptions = {
	compilerOptions,
};

const example = `
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
  Button,
  ButtonGroup,
} from 'skeoh-ui-component-button';

import {
  FillHorizontal,
} from 'skeoh-ui-component-fill';

ReactDOM.render(
  <div>
    <h1>Hello world</h1>
    <FillHorizontal>
      <ButtonGroup>
        <Button>Foo</Button>
        <Button>Bar</Button>
        <Button>Baz</Button>
      </ButtonGroup>
    </FillHorizontal>
  </div>,
  document.getElementById('app')
);
`.trim() + '\n';

export default class Demo extends React.Component<IProps, IState> {
	constructor (props: IProps) {
		super(props);
		this.state = {
			value: example,
		};
	}

	public componentDidMount () {
		this.transpile();
	}

	public handleSubmit = (e: React.SyntheticEvent<HTMLFormElement> | React.SyntheticEvent<HTMLInputElement>) => {
		e.preventDefault();
		this.transpile();
	}

	public handleChange = (value: string) => {
		this.setState({
			value,
		});
	}

	public renderOutput (source: string) {
		const output = this.refs.output as HTMLIFrameElement;
		output.src = 'about:blank';
		// Defer execution until context is ready
		setTimeout(() => {
			// Set doctype
			const doc = output.contentDocument;
			doc.open();
			doc.write('<!doctype html>');
			doc.close();
			// Add `require` and `exports` globals to window
			const win = output.contentWindow;
			bootstrap(win);
			// Add app root to document
			const container = doc.createElement('div');
			container.id = 'app';
			doc.body.appendChild(container);
			// Add transpiled JS to document
			const script = doc.createElement('script');
			script.textContent = source;
			doc.head.appendChild(script);
			// Add component stylesheet to document
			const style = doc.createElement('link');
			style.rel = 'stylesheet';
			style.href = 'styles.css';
			doc.head.appendChild(style);
		}, 0);
	}

	public transpile () {
		try {
			const { value } = this.state;
			const result = ts.transpileModule(value, transpileOptions);
			const { outputText } = result;
			this.renderOutput(outputText);
		} catch (err) {
			console.error(err.message);
		}
	}

	public render () {
		const { value } = this.state;
		const codeMirrorOptions = {
			lineNumbers: true,
			mode: 'text/typescript-jsx',
		};
		return (
			<form className="demo-container" onSubmit={ this.handleSubmit }>
				<div className="demo-section-editor">
					<CodeMirror
						value={ value }
						onChange={ this.handleChange }
						options={ codeMirrorOptions }
					/>
				</div>
				<div className="demo-section-actions">
					<FillHorizontal>
						<Submit
							className="demo-submit"
							onClick={ this.handleSubmit }
						>Compile</Submit>
					</FillHorizontal>
				</div>
				<div className="demo-section-output">
					<iframe
						className="demo-output"
						ref="output"
					/>
				</div>
			</form>
		);
	}
}
