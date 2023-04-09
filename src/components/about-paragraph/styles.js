import styled from 'styled-components';
import { padding } from '../../constants/variables';

const StyledParagraphContainer = styled.div`
	@media screen and (min-width: 768px) {
		width: 100%;
	}
`;

const StyledParagraph = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-left: 3rem;
	padding-right: 3rem;
	margin-bottom: 2rem;
	@media screen and (min-width: 768px) {
		flex-direction: row;
		align-items: flex-start;
		justify-content: space-between;
		gap: 2rem;
		width: 100%;
		margin-bottom: 4rem;
	}
	@media screen and (min-width: 1024px) {
		padding-left: ${padding.desktop};
		padding-right: ${padding.desktop};
	}
`;

export { StyledParagraph, StyledParagraphContainer };
