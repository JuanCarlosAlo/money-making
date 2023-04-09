import ArticleTitle from '../../components/article-title/ArticleTitle';
import Button from '../../components/button/Button';
import EmailDemo from '../../components/email-demo/EmailDemo';
import SponsorsImgs from '../../components/sponsors-imgs/SponsorsImgs';
import TextElement from '../../components/text/TextElement';
import { colors } from '../../constants/colors';
import { homeList } from '../../constants/homeList';

import { text } from '../../constants/text';
import { fontAlign } from '../../constants/variables';
import {
	StyledHome,
	StyledHomeArticleRow,
	StyledHomeArticleRowReverse,
	StyledHomeDemo,
	StyledHomeImg,
	StyledHomeInfo,
	StyledHomeListContainer,
	StyledHomeListElement,
	StyledHomeSponsors,
	StyledHomeStart,
	StyledHomeStartImg,
	StyledSponsorsInfo
} from './styles';

const Home = () => {
	return (
		<StyledHome>
			<StyledHomeStart>
				<StyledHomeStartImg
					src='/assets/home/desktop/illustration-phone-mockup.svg'
					alt=''
				/>
				<StyledHomeInfo>
					<ArticleTitle
						text={'Start building with our APIs for absolutely free.'}
						type={'main'}
						color={colors.secondary.blue}
					/>
					<EmailDemo />
					<p>Have any questions? Contact Us</p>
				</StyledHomeInfo>
			</StyledHomeStart>
			<StyledHomeSponsors>
				<SponsorsImgs />

				<StyledSponsorsInfo>
					<ArticleTitle
						text={'Who we work with'}
						type={'article'}
						color={colors.primary.white}
					/>
					<TextElement
						text={text.home.sponsors}
						color={colors.secondary.lightblue}
						align={fontAlign.center}
					/>
					<Button
						text={'About Us'}
						type={'transparent'}
						color={colors.primary.white}
						route={'/about'}
						bgcolor={colors.primary.white}
					/>
				</StyledSponsorsInfo>
			</StyledHomeSponsors>
			<StyledHomeArticleRow>
				<StyledHomeImg
					src='/assets/home/desktop/illustration-easy-to-implement.svg'
					alt=''
				/>
				<div>
					<ArticleTitle
						text={'Easy to implement'}
						type={'article'}
						color={colors.secondary.blue}
					/>
					<TextElement
						text={text.home.implement}
						color={colors.secondary.blue}
						align={fontAlign.center}
					/>
				</div>
			</StyledHomeArticleRow>
			<StyledHomeArticleRowReverse>
				<StyledHomeImg
					src='/assets/home/desktop/illustration-simple-ui.svg'
					alt=''
				/>
				<div>
					<ArticleTitle
						text={'Simple UI & UX'}
						type={'article'}
						color={colors.secondary.blue}
					/>
					<TextElement
						text={text.home.ux.subtext}
						color={colors.secondary.blue}
						align={fontAlign.center}
					/>
				</div>
			</StyledHomeArticleRowReverse>
			<StyledHomeListContainer>
				{homeList.map(element => (
					<StyledHomeListElement key={element.id}>
						<img src={element.img} alt='' />
						<ArticleTitle
							text={element.title}
							type={'small'}
							color={colors.secondary.blue}
						/>
						<TextElement
							text={element.text}
							color={colors.secondary.blue}
							align={fontAlign.center}
						/>
					</StyledHomeListElement>
				))}
			</StyledHomeListContainer>
			<StyledHomeDemo>
				<EmailDemo title={true} />
			</StyledHomeDemo>
		</StyledHome>
	);
};

export default Home;
