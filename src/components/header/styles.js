import styled from 'styled-components';
import { padding } from '../../constants/variables';

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-top: 2rem;
	padding-left: 1rem;
	padding-right: 1rem;

	@media screen and (min-width: 768px) {
		margin-bottom: 2rem;
		justify-content: flex-start;
		gap: 4rem;
		padding-left: 2rem;
		padding-right: 2rem;
	}
`;

const StyledHeaderIcon = styled.img`
	@media screen and (min-width: 768px) {
		display: none;
	}
`;

export { StyledHeader, StyledHeaderIcon };
