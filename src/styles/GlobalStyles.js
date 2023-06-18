import { createGlobalStyle } from 'styled-components';
import { colors } from '../constants/colors';

const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before{
	box-sizing: border-box;
}
ul{
	list-style: none;
	padding-left: 0;
	margin-top: 0;
	margin-bottom: 0;
}
a{
	text-decoration: none;
	color: inherit;
}
img{
	display: block;
	max-width: 100%;
}


body {
	position: relative;
	font-family: 'League Spartan', sans-serif;
	max-width: 1440px;
	margin-left: auto;
	margin-right: auto;
	background-color: ${colors.primary.lightBlue};
	overflow-x: hidden;
}
`;

export { GlobalStyle };
