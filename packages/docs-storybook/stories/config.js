import { configure } from '@storybook/react';
import './styles.css';

configure(() => {
	require('./component-button');
	require('./component-input');
	require('./typography');
}, module);
