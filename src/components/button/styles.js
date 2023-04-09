import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../constants/colors';

const StyledButton = styled(Link)`
	display: block;
	padding: 1rem;
	padding-left: 2rem;
	padding-right: 2rem;
	border-radius: 2rem;
`;

const StyledButtonPink = styled(StyledButton)`
	text-align: center;
	color: ${colors.primary.white};
	background-color: ${colors.primary.pink};
	width: 100%;
	@media screen and (min-width: 768px) {
		width: auto;
		padding-left: 2rem;
		padding-right: 2rem;
	}
`;

const StyledButtonTransparent = styled(StyledButton)`
	color: ${({ color }) => color};
	border-color: ${({ bgcolor }) => bgcolor};
	border-width: 1px;
	border-style: solid;
`;

const StyledSubmit = styled.input`
	display: block;
	padding: 1rem;
	padding-left: 4rem;
	padding-right: 4rem;
	border-radius: 2rem;
	color: ${({ color }) => color};
	border-color: ${({ bgcolor }) => bgcolor};
	background-color: transparent;
	border-width: 1px;
	border-style: solid;
	cursor: pointer;
	&:hover {
		color: ${colors.primary.white};
		background-color: ${({ color }) => color};
	}
`;

export { StyledButtonPink, StyledButtonTransparent, StyledSubmit };
