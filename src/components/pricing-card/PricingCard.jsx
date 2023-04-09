import { colors } from '../../constants/colors';
import { PRICING } from '../../constants/pricing';
import Button from '../button/Button';
import PricingListElement from '../pricing-list-element/PricingListElement';
import {
	StyledPricingAmount,
	StyledPricingCard,
	StyledPricingList,
	StyledPricingPlan
} from './styles';

const PricingCard = ({ name }) => {
	const plan = PRICING[name];
	return (
		<StyledPricingCard>
			<StyledPricingPlan>{plan.plan}</StyledPricingPlan>
			<StyledPricingAmount>{plan.price}</StyledPricingAmount>
			<StyledPricingList>
				{plan.options.map(element => (
					<PricingListElement key={element.id} {...element} />
				))}
			</StyledPricingList>
			<Button
				text={'Request Access'}
				type={'transparent'}
				bgcolor={colors.secondary.black}
				color={colors.secondary.black}
				route={'/contact'}
			/>
		</StyledPricingCard>
	);
};

export default PricingCard;
