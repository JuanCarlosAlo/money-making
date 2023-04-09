import styled from 'styled-components';
import { colors } from '../../constants/colors';

const StyledListItem = styled.p`
	padding-left: 2rem;
`;

const StyledChecked = styled(StyledListItem)`
	position: relative;
	color: ${colors.secondary.blue};
	&::before {
		content: '';
		position: absolute;
		left: 0;
		height: 1rem;
		width: 1rem;
		background-image: url('assets/shared/desktop/icon-check.svg');
		background-size: contain;
		background-position: center;
		background-repeat: no-repeat;
	}
`;

const StyledUnchecked = styled(StyledListItem)`
	color: ${colors.secondary.lightblue};
`;

export { StyledChecked, StyledUnchecked };
