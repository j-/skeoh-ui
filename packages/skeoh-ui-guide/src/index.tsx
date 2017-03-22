import * as React from 'react';
import { render } from 'react-dom';
import { App } from './components/App';

import './safe-imports';
import './styles';

render(
	<App />,
	document.getElementById('app'),
);
