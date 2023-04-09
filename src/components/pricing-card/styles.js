import styled from 'styled-components';
import { colors } from '../../constants/colors';

const StyledPricingCard = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;

	padding-bottom: 2rem;
	&::after {
		content: '';
		position: absolute;
		top: 30%;
		height: 1px;
		width: 100%;
		background-color: ${colors.secondary.lightblue};
	}
	&::before {
		content: '';
		position: absolute;
		bottom: 20%;
		height: 1px;
		width: 100%;
		background-color: ${colors.secondary.lightblue};
	}
`;

const StyledPricingPlan = styled.p`
	font-family: 'DM Serif Display', serif;
	color: ${colors.primary.pink};
	font-size: 1.5rem;
`;

const StyledPricingAmount = styled.p`
	font-family: 'DM Serif Display', serif;
	color: ${colors.secondary.blue};
	font-size: 3.5rem;
	margin: 0;
	padding-bottom: 2rem;
`;

const StyledPricingList = styled.div`
	padding-bottom: 2rem;
`;

export {
	StyledPricingCard,
	StyledPricingAmount,
	StyledPricingPlan,
	StyledPricingList
};
