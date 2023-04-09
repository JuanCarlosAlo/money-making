import styled from 'styled-components';
import { colors } from '../../constants/colors';
import { padding } from '../../constants/variables';

const StyledPricingPage = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
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
		padding-left: 3rem;
		padding-right: 3rem;
	}
	@media screen and (min-width: 1024px) {
		padding-left: ${padding.desktop};
		padding-right: ${padding.desktop};
	}
`;

const StyledCardsContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	width: 100%;
	@media screen and (min-width: 768px) {
		flex-direction: row;
	}
`;

export { StyledPricingPage, StyledCardsContainer };
