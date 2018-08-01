/* eslint-disable react/jsx-one-expression-per-line,
   react/jsx-indent-props */
import React, { Fragment } from 'react';
import './app.css';

import Toggle from './Toggle.jsx';

const App = () => (
	<div className="App">
		<header className="App-header">
			<h1>
				A simple toggle pattern using React
			</h1>
		</header>
		<Toggle>
			{({ on, toggle }) => (
				<Fragment>
					{
						on
						&& <h1>Toggle Me</h1>
					}
					<button type="submit" onClick={toggle}>
						Show/Hide
					</button>
				</Fragment>
			)}
		</Toggle>

		<br />

		<Toggle
			render={({ on, toggle }) => (
				<Fragment>
					{
						on
						&& <nav>Menu</nav>
					}
					<button type="submit" onClick={toggle}>
						Show menu
					</button>
				</Fragment>
			)}
		/>
	</div>
);

export default App;
