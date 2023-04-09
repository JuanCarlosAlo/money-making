import ArticleTitle from '../../components/article-title/ArticleTitle';
import EmailDemo from '../../components/email-demo/EmailDemo';
import PricingCard from '../../components/pricing-card/PricingCard';
import { colors } from '../../constants/colors';
import { PRICING } from '../../constants/pricing';
import { StyledPricingPage, StyledCardsContainer } from './styles';

const Pricing = () => {
	return (
		<StyledPricingPage>
			<ArticleTitle
				text={'Pricing'}
				type={'main'}
				color={colors.secondary.blue}
			/>
			<StyledCardsContainer>
				{Object.keys(PRICING).map(name => (
					<PricingCard key={PRICING[name].id} name={name} />
				))}
			</StyledCardsContainer>
			<EmailDemo title={true} />
		</StyledPricingPage>
	);
};

export default Pricing;
