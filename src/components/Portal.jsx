import { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

// Get the portal div from index.html
const portalRoot = document.getElementById('portal');

class Portal extends Component {
	constructor() {
		super();

		/* create a div that will be attached to the portal element which is
		   where the children of this component will be attached */
		this.el = document.createElement('div');
	}

	componentDidMount = () => {
		// Attach the div created in the constructor
		portalRoot.appendChild(this.el);
	}

	componentWillUnmount = () => {
		// Dettach the div created in the constructor
		portalRoot.removeChild(this.el);
	}

	render() {
		const { children } = this.props;
		return ReactDOM.createPortal(children, this.el);
	}
}

/* Children of this component must resolve to elements */
Portal.propTypes = {
	children: PropTypes.element.isRequired,
};

export default Portal;
