import React from 'react';
import { storiesOf } from '@storybook/react';
import '@skeoh-ui/common-styles/dist/styles.css';

const DummyParagraph1 = () => (
	<p>
		Eiusmod dolor reprehenderit duis sint ut anim culpa irure commodo
		nostrud sint adipisicing laborum aute. Tempor magna deserunt non quis
		mollit excepteur. Laboris est anim eu laborum velit. Nulla ex veniam ut
		labore duis dolor aliqua ullamco. Cillum elit proident id pariatur et
		duis quis anim ut commodo amet. Do duis culpa cillum ipsum adipisicing
		lorem duis enim aute officia pariatur consequat sunt deserunt.
	</p>
);

const DummyParagraph2 = () => (
	<p>
		Sunt duis sunt adipisicing laboris occaecat ut. Magna eu ut fugiat quis
		cupidatat officia. Tempor laborum minim sint sit eu ad velit sit nisi
		qui ullamco. Deserunt sint excepteur exercitation deserunt anim est anim
		duis aliquip pariatur in qui ad. Est do adipisicing reprehenderit irure
		esse esse laborum. Excepteur pariatur aliquip est voluptate duis irure
		cupidatat occaecat nostrud dolor consequat laboris duis culpa.
	</p>
);

storiesOf('typography', module)
	.add('without grid', () => (
		<div className="typography-demo">
			<h1>Heading<br />One</h1>
			<DummyParagraph1 />
			<DummyParagraph2 />

			<h2>Heading<br />Two</h2>
			<DummyParagraph1 />
			<DummyParagraph2 />

			<h3>Heading<br />Three</h3>
			<DummyParagraph1 />
			<DummyParagraph2 />

			<h4>Heading<br />Four</h4>
			<DummyParagraph1 />
			<DummyParagraph2 />

			<h5>Heading<br />Five</h5>
			<DummyParagraph1 />
			<DummyParagraph2 />

			<h6>Heading<br />Six</h6>
			<DummyParagraph1 />
			<DummyParagraph2 />
		</div>
	))
	.add('with grid', () => (
		<div className="typography-demo with-grid">
			<h1>Heading<br />One</h1>
			<DummyParagraph1 />
			<DummyParagraph2 />

			<h2>Heading<br />Two</h2>
			<DummyParagraph1 />
			<DummyParagraph2 />

			<h3>Heading<br />Three</h3>
			<DummyParagraph1 />
			<DummyParagraph2 />

			<h4>Heading<br />Four</h4>
			<DummyParagraph1 />
			<DummyParagraph2 />

			<h5>Heading<br />Five</h5>
			<DummyParagraph1 />
			<DummyParagraph2 />

			<h6>Heading<br />Six</h6>
			<DummyParagraph1 />
			<DummyParagraph2 />
		</div>
	));
