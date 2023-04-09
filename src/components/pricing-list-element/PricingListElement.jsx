import { StyledChecked, StyledUnchecked } from './styles';

const PricingListElement = ({ text, checked }) => {
	if (checked) {
		return <StyledChecked>{text}</StyledChecked>;
	} else {
		return <StyledUnchecked>{text}</StyledUnchecked>;
	}
};

export default PricingListElement;
