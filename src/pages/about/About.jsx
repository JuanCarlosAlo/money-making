import AboutParagraph from '../../components/about-paragraph/AboutParagraph';
import ArticleTitle from '../../components/article-title/ArticleTitle';
import EmailDemo from '../../components/email-demo/EmailDemo';
import { aboutStats } from '../../constants/aboutStats';
import { colors } from '../../constants/colors';
import { Titles } from '../../constants/titles';
import {
	StyledAboutPage,
	StyledImg,
	StyledPicture,
	StyledSource,
	StyledSpecContainer,
	StyledSpecData,
	StyledSpecTitle,
	StyledSpecs,
	StyledTitleContainer
} from './styles';

const About = () => {
	return (
		<StyledAboutPage>
			<StyledTitleContainer>
				<ArticleTitle
					text={Titles.about.main}
					type={'main'}
					color={colors.secondary.blue}
				/>
			</StyledTitleContainer>

			<AboutParagraph location={'top'} />

			<StyledPicture>
				<StyledSource
					media='(min-width:1024px)'
					src='assets/about/desktop/image-team-members.jpg'
				/>
				<StyledSource
					media='(min-width:768px)'
					src='assets/about/tablet/image-team-members.jpg'
				/>
				<StyledSource
					media='(max-width:768px)'
					src='assets/about/mobile/image-team-members.jpg'
				/>
				<StyledImg
					src='assets/about/tablet/image-team-members.jpg'
					alt='team members'
				/>
			</StyledPicture>
			<StyledSpecs>
				{aboutStats.map(element => (
					<StyledSpecContainer key={element.id}>
						<StyledSpecTitle>{element.text}</StyledSpecTitle>
						<StyledSpecData>{element.data}</StyledSpecData>
					</StyledSpecContainer>
				))}
			</StyledSpecs>

			<AboutParagraph location={'bottom'} />

			<EmailDemo title={true} />
		</StyledAboutPage>
	);
};

export default About;
