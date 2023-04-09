import { sponsors } from '../../constants/sponsors';
import { StyledSponsorsContainer, StyledSponsorsImg } from './styles';

const SponsorsImgs = () => {
	return (
		<StyledSponsorsContainer>
			{sponsors.map(element => (
				<StyledSponsorsImg key={element.id} src={element.img} alt='' />
			))}
		</StyledSponsorsContainer>
	);
};

export default SponsorsImgs;
