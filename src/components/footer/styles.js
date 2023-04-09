import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../constants/colors';
import { padding } from '../../constants/variables';

const StyledFooter = styled.footer`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
	padding-top: 3rem;
	padding-bottom: 3rem;
	color: ${colors.primary.white};
	background: url('/assets/shared/desktop/bg-pattern-circle.svg')
		${colors.secondary.black};
	background-position: center 180px;
	background-repeat: no-repeat;
	@media screen and (min-width: 768px) {
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		padding-left: 2rem;
		padding-right: 2rem;
	}
	@media screen and (min-width: 1024px) {
		padding-left: ${padding.desktop};
		padding-right: ${padding.desktop};
	}
`;

const StyledFooterMenu = styled.ul`
	display: flex;
	flex-direction: column;
	text-align: center;
	gap: 2rem;
	@media screen and (min-width: 768px) {
		flex-direction: row;
	}
`;
const StyledLink = styled(Link)`
	display: block;
`;
const StyledFooterContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	@media screen and (min-width: 768px) {
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
	}
`;

const StyledSocialsContainer = styled.div`
	display: flex;
	gap: 1rem;
`;

export {
	StyledFooter,
	StyledFooterMenu,
	StyledSocialsContainer,
	StyledFooterContainer,
	StyledLink
};
