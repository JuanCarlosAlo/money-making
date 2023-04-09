import styled from 'styled-components';
import { colors } from '../../constants/colors';
import { padding } from '../../constants/variables';

const StyledContactPage = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	padding-left: ${padding.mobile};
	padding-right: ${padding.mobile};
	padding-top: 4rem;
	padding-bottom: 4rem;
	&::before {
		content: '';
		height: 780px;
		width: 780px;
		position: absolute;
		top: -694px;
		left: 40%;
		background-image: url('assets/shared/desktop/bg-pattern-circle.svg');
		pointer-events: none;
		z-index: 20;
		@media screen and (min-width: 768px) {
			left: 70%;
			top: -600px;
		}
		@media screen and (min-width: 1024px) {
			left: 60%;
		}
	}
	@media screen and (min-width: 768px) {
		padding-left: ${padding.tablet};
		padding-right: ${padding.tablet};
	}
`;

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 1rem;
	@media screen and (min-width: 1024px) {
		max-width: 445px;
	}
`;

const StyledContactContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	margin-bottom: 4rem;
	@media screen and (min-width: 1024px) {
		flex-direction: row;
		justify-content: space-between;
		gap: 4rem;
	}
`;

const StyledSponsorsContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	justify-content: center;

	padding-top: 2rem;
	padding-bottom: 2rem;
	@media screen and (min-width: 1024px) {
		max-width: 541px;
	}
`;

const StyledImput = styled.input`
	width: 100%;
	padding: 1rem;
	color: ${colors.secondary.blue};
	background-color: transparent;
	border: transparent;
	opacity: 0.7;
	border-bottom: 1px solid ${colors.secondary.blue};
	::placeholder {
		opacity: 0.5;
		color: ${colors.secondary.blue};
	}
	:focus {
		opacity: 1;
		outline: none;
		border: transparent;
		border-bottom: 2px solid ${colors.secondary.blue};
		::placeholder {
			opacity: 1;
			color: ${colors.secondary.blue};
		}
	}
`;

const StyleImputMessege = styled.textarea`
	width: 100%;
	height: 89px;
	padding: 1rem;
	color: ${colors.secondary.blue};
	background-color: transparent;
	border: transparent;
	opacity: 0.7;
	font-family: 'League Spartan', sans-serif;
	resize: none;
	border-bottom: 1px solid ${colors.secondary.blue};

	::placeholder {
		opacity: 0.5;
		color: ${colors.secondary.blue};
	}
	:focus {
		opacity: 1;
		outline: none;
		border: transparent;
		border-bottom: 2px solid ${colors.secondary.blue};
		overflow-y: scroll;

		::placeholder {
			opacity: 1;
			color: ${colors.secondary.blue};
		}
	}
`;

const StyledCheckContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`;

const SytledCheckInput = styled.input`
	width: 24px;
	height: 24px;
	border-radius: 0%;
	outline: none;
	border: none;

	opacity: 0.7;
	background-color: ${colors.secondary.lightblue};
	&:checked {
		background-color: ${colors.primary.pink};
	}
`;

export {
	StyledImput,
	StyleImputMessege,
	StyledCheckContainer,
	SytledCheckInput,
	StyledContactPage,
	StyledSponsorsContainer,
	StyledContactContent,
	StyledForm
};
