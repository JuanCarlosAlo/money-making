import styled from 'styled-components';
import { colors } from '../../constants/colors';
import { padding } from '../../constants/variables';

const StyledHome = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	&::before {
		content: '';
		height: 780px;

		position: absolute;
		top: -494px;
		left: 0;
		width: 100vw;
		background-repeat: no-repeat;
		background-size: contain;
		background-position: center;
		background-image: url('assets/shared/desktop/bg-pattern-circle.svg');
		pointer-events: none;
		z-index: 10;
		@media screen and (min-width: 768px) {
			top: -594px;
			left: 0;
			width: 100vw;
			background-repeat: no-repeat;
			background-size: contain;
			background-position: center;
		}
		@media screen and (min-width: 1024px) {
			top: -372px;
			left: 40%;
		}
	}
`;

const StyledHomeStart = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-left: ${padding.mobile};
	padding-right: ${padding.mobile};
	margin-bottom: 4rem;
	@media screen and (min-width: 1024px) {
		flex-direction: row-reverse;
		gap: 13rem;
		padding-left: ${padding.desktop};
		padding-right: ${padding.desktop};
	}
`;

const StyledHomeStartImg = styled.img`
	position: relative;
	left: 3%;
	width: 240px;
	@media screen and (min-width: 768px) {
		width: 300px;
	}
`;

const StyledHomeInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	@media screen and (min-width: 1024px) {
		align-items: flex-start;
	}
`;

const StyledHomeSponsors = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	padding-left: ${padding.mobile};
	padding-right: ${padding.mobile};
	padding-top: 4rem;
	padding-bottom: 4rem;
	margin-bottom: 2rem;
	background-color: ${colors.secondary.black};
	@media screen and (min-width: 1024px) {
		padding-left: ${padding.desktop};
		padding-right: ${padding.desktop};
		flex-direction: row-reverse;
		gap: 8.2rem;
	}
`;

const StyledSponsorsInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: auto;
	@media screen and (min-width: 768px) {
		padding-left: ${padding.tablet};
		padding-right: ${padding.tablet};
	}
	@media screen and (min-width: 1024px) {
		justify-content: flex-start;
		align-items: flex-start;
		width: 40%;
		padding: 0;
	}
`;

const StyledHomeArticle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-left: ${padding.mobile};
	padding-right: ${padding.mobile};
	@media screen and (min-width: 768px) {
		padding-left: ${padding.tablet};
		padding-right: ${padding.tablet};
	}
	@media screen and (min-width: 1024px) {
		padding-left: ${padding.desktop};
		padding-right: ${padding.desktop};
	}
`;

const StyledHomeArticleRow = styled(StyledHomeArticle)`
	@media screen and (min-width: 1024px) {
		flex-direction: row;
		justify-content: space-between;
		gap: 4rem;
	}
`;

const StyledHomeArticleRowReverse = styled(StyledHomeArticle)`
	@media screen and (min-width: 1024px) {
		flex-direction: row-reverse;
		gap: 4rem;
	}
`;

const StyledHomeDemo = styled(StyledHomeArticle)`
	margin-bottom: 4rem;
	width: 100%;
	@media screen and (min-width: 1024px) {
		flex-direction: row;
		justify-content: center;
	}
`;

const StyledHomeListContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-left: ${padding.mobile};
	padding-right: ${padding.mobile};
	@media screen and (min-width: 768px) {
		flex-direction: row;
		gap: 2rem;
	}
	@media screen and (min-width: 1024px) {
		padding-left: ${padding.desktop};
		padding-right: ${padding.desktop};
	}
`;

const StyledHomeListElement = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	margin-bottom: 4rem;
	@media screen and (min-width: 768px) {
		width: 30%;
	}
`;

const StyledHomeImg = styled.img`
	position: relative;
	left: 3%;
	width: 100%;

	@media screen and (min-width: 768px) {
		width: 353px;
	}
	@media screen and (min-width: 1024px) {
		width: 445px;
	}
`;

export {
	StyledHome,
	StyledHomeStart,
	StyledHomeStartImg,
	StyledHomeInfo,
	StyledHomeSponsors,
	StyledSponsorsInfo,
	StyledHomeImg,
	StyledHomeArticle,
	StyledHomeArticleRow,
	StyledHomeArticleRowReverse,
	StyledHomeDemo,
	StyledHomeListContainer,
	StyledHomeListElement
};
