import styled from 'styled-components';
import { colors } from '../../constants/colors';
import { padding } from '../../constants/variables';

const StyledAboutPage = styled.div`
	position: relative;
	padding-bottom: 4rem;
	padding-top: 4rem;

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
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;

const StyledPicture = styled.picture`
	width: 100%;
	margin-bottom: 2rem;
`;

const StyledSource = styled.source`
	width: 100%;
	margin-bottom: 2rem;
`;

const StyledImg = styled.img`
	width: 100%;
	margin-bottom: 2rem;
`;

const StyledSpecs = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 1rem;
	border-top: 1px solid ${colors.secondary.lightblue};
	border-bottom: 1px solid ${colors.secondary.lightblue};
	@media screen and (min-width: 768px) {
		flex-direction: row;
		justify-content: space-evenly;
		width: 100%;
		padding-left: 3rem;
		padding-right: 3rem;
		border: none;
		gap: 1rem;
	}
	@media screen and (min-width: 1024px) {
		padding-left: ${padding.desktop};
		padding-right: ${padding.desktop};
	}
`;
const StyledTitleContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	@media screen and (min-width: 768px) {
		padding-left: 3rem;
		padding-right: 3rem;
	}
	@media screen and (min-width: 1024px) {
		padding-left: ${padding.desktop};
		padding-right: ${padding.desktop};
	}
`;

const StyledSpecContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 1rem;
	@media screen and (min-width: 768px) {
		width: 100%;
		align-items: flex-start;
		border-top: 1px solid ${colors.secondary.lightblue};
		border-bottom: 1px solid ${colors.secondary.lightblue};
	}
`;
const StyledSpecTitle = styled.p`
	text-align: center;
	color: ${colors.secondary.lightblue};
	margin: 0;
`;

const StyledSpecData = styled.p`
	text-align: center;
	font-family: 'DM Serif Display', serif;
	font-size: 3.5rem;
	color: ${colors.primary.pink};
	margin: 0;
	padding-bottom: 1rem;
`;

export {
	StyledAboutPage,
	StyledSpecTitle,
	StyledSpecData,
	StyledSpecContainer,
	StyledSpecs,
	StyledPicture,
	StyledSource,
	StyledImg,
	StyledTitleContainer
};
