/* eslint-disable react/jsx-one-expression-per-line,
   react/jsx-indent-props */
import React, { Fragment } from 'react';
import './app.css';

import Toggle from './Toggle.jsx';
import Modal from './Modal.jsx';

const App = () => (
	<div className="App">
		<header className="App-header">
			<h1>
				A simple modal window example using React
			</h1>
		</header>

		<Toggle>
			{({ on, toggle }) => (
				<Fragment>
					<button type="submit" onClick={toggle}>Open modal window</button>
					<Modal on={on} toggle={toggle}>
						<h1>This is the modal stuff</h1>
						<p>More modal stuff</p>
					</Modal>
				</Fragment>
			)}
		</Toggle>
	</div>
);

export default App;
