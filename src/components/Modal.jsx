/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Portal from './Portal.jsx';

const Modal = (props) => {
	const { children, toggle, on } = props;
	return (
		<Portal>
			{on
				&& (
					<ModalWrapper>
						<ModalCard>
							<CloseButton onClick={toggle}>Close</CloseButton>
							<div>
								{ children }
							</div>
						</ModalCard>
						<Background onClick={toggle} />
					</ModalWrapper>
				)
			}
		</Portal>
	);
};

/* Children of this component must resolve to elements */
Modal.propTypes = {
	children: PropTypes.element.isRequired,
	toggle: PropTypes.func.isRequired,
	on: PropTypes.bool.isRequired,
};

export default Modal;

const ModalWrapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;

	// Flex layout
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ModalCard = styled.div`
	position: relative;
	background: white;
	border-radius: 5px;
	padding: 30px 10px 10px 10px;
	// min-width: 320px;
	z-index: 10;
	box-shadow: 2px 2px 10px rgba(0,0,0, 0.3);
	margin-bottom: 300px;
	display:inline-block;
`;

const CloseButton = styled.button`
	position: absolute;
	top: 0;
	right: 0;
	border: none;
	background: transparent;
	padding: 10px;
`;

const Background = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background: black;
	opacity: 0.5;
`;
