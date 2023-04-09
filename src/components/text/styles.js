import styled from 'styled-components';

const StyledText = styled.p`
	text-align: center;
	color: ${({ color }) => color};
	line-height: 1.75rem;

	@media screen and (min-width: 768px) {
		text-align: ${({ align }) => align};
		max-width: 457px;
	}
	@media screen and (min-width: 1024px) {
		text-align: left;
	}
`;

export { StyledText };
