import styled from 'styled-components';
import { colors } from '../../constants/colors';

const StyledForm = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	width: 100%;
	max-width: 445px;
	@media screen and (min-width: 1024px) {
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		max-width: 1100px;
	}
`;
const StyledFormNoButton = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	width: 100%;
	max-width: 445px;
	@media screen and (min-width: 1024px) {
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
`;

const StyledButtonContainer = styled.div`
	@media screen and (min-width: 768px) {
		position: absolute;
		right: 0;
		bottom: 0;
	}
	@media screen and (min-width: 1024px) {
		right: 0;
		top: 31%;
	}
`;
const StyledInputElement = styled.input`
	width: 100%;
	padding: 1rem;
	background-color: ${colors.primary.white};
	border-radius: 2rem;
	border: none;
	width: auto;
	height: 50px;

	:focus {
		outline: none;
	}
	@media screen and (min-width: 768px) {
		width: 445px;
	}
`;

const StyledButtonContainerNoButton = styled.div`
	@media screen and (min-width: 768px) {
		position: absolute;
		right: 0;
		bottom: 0;
	}
	@media screen and (min-width: 1024px) {
		right: 0%;
		top: 0;
	}
`;

export {
	StyledForm,
	StyledButtonContainer,
	StyledButtonContainerNoButton,
	StyledInputElement,
	StyledFormNoButton
};
