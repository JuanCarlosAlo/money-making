import styled from 'styled-components';

const StyledTitle = styled.p`
	font-family: 'DM Serif Display', serif;
`;

const StyledMainTitle = styled(StyledTitle)`
	text-align: center;
	font-size: 2rem;
	margin: 0;
	padding-top: 2rem;
	font-weight: 500;
	margin-bottom: 2rem;
	color: ${({ color }) => color};
	@media screen and (min-width: 768px) {
		font-size: 3rem;
		max-width: 573px;
		margin-left: auto;
		margin-right: auto;
	}
	@media screen and (min-width: 1024px) {
		font-size: 3.5rem;
		text-align: left;
		max-width: 730px;
		margin-left: 0;
	}
`;
const StyledArticleTitle = styled(StyledTitle)`
	font-size: 2rem;
	text-align: center;
	margin: 0;
	padding-top: 2rem;
	padding-bottom: 2rem;
	color: ${({ color }) => color};
	@media screen and (min-width: 768px) {
		font-size: 3rem;
	}
	@media screen and (min-width: 1024px) {
		font-size: 3rem;
		text-align: left;
	}
`;

const StyledSmallTitle = styled(StyledTitle)`
	font-size: 1.125rem;
	width: fit-content;
	margin-right: auto;
	margin-left: auto;
	padding-top: 1rem;
	padding-bottom: 1rem;
	margin: 0;
	color: ${({ color }) => color};
	@media screen and (min-width: 768px) {
		font-size: 2rem;
	}
	@media screen and (min-width: 1024px) {
		font-size: 3rem;
	}
`;

export { StyledMainTitle, StyledSmallTitle, StyledArticleTitle };
