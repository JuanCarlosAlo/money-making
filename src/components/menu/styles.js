import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../constants/colors';

const StyledMenu = styled.ul`
	position: absolute;
	right: 0;
	top: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
	height: 100vh;
	width: 70vw;
	padding-top: 8rem;
	z-index: 10;
	color: ${colors.primary.white};
	background-color: ${colors.secondary.black};
	transition: transform 0.6s ease-in-out;
	transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
	&::after {
		content: '';
		position: absolute;
		height: 1px;
		width: 80%;
		left: 10%;
		top: 6rem;
		background-color: ${colors.primary.white};
		@media screen and (min-width: 768px) {
			display: none;
		}
	}
	@media screen and (min-width: 768px) {
		position: static;
		flex-direction: row;
		transform: translateX(0);
		height: auto;
		width: 100%;
		justify-content: flex-end;
		gap: 8rem;
		padding-top: 0;
		color: ${colors.secondary.black};
		background-color: transparent;
	}
	@media screen and (min-width: 1024px) {
		justify-content: space-between;
		gap: unset;
	}
`;

const StyledNav = styled.nav`
	@media screen and (min-width: 768px) {
		width: 100%;
	}
`;

const StyledLink = styled(Link)`
	display: block;
`;

const StyledMenuContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
	@media screen and (min-width: 768px) {
		flex-direction: row;
	}
`;

const StyledMenuIcon = styled.img`
	position: absolute;
	top: 3rem;
	right: 1rem;
	@media screen and (min-width: 768px) {
		display: none;
	}
`;

export {
	StyledMenu,
	StyledMenuIcon,
	StyledMenuContainer,
	StyledNav,
	StyledLink
};
