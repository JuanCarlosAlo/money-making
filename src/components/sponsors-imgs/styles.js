import styled from 'styled-components';
import { colors } from '../../constants/colors';

const StyledSponsorsContainer = styled.div`
	display: grid;
	gap: 2rem;
	grid-template-columns: 1fr 1fr;
	@media screen and (min-width: 768px) {
		grid-template-columns: 1fr 1fr 1fr;
	}
`;

const StyledSponsorsImg = styled.img`
	fill: ${colors.primary.white};
	margin-left: auto;
	margin-right: auto;
`;

export { StyledSponsorsContainer, StyledSponsorsImg };
