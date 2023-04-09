import ArticleTitle from '../../components/article-title/ArticleTitle';
import Button from '../../components/button/Button';
import EmailDemo from '../../components/email-demo/EmailDemo';
import SponsorsImgs from '../../components/sponsors-imgs/SponsorsImgs';
import { colors } from '../../constants/colors';
import { Titles } from '../../constants/titles';
import {
	StyledCheckContainer,
	StyledContactPage,
	StyledImput,
	StyleImputMessege,
	SytledCheckInput,
	StyledSponsorsContainer,
	StyledContactContent,
	StyledForm
} from './styles';

const Contact = () => {
	return (
		<StyledContactPage>
			<ArticleTitle
				text={Titles.contact.main}
				type={'main'}
				color={colors.secondary.blue}
			/>
			<StyledContactContent>
				<StyledForm>
					<StyledImput type='text' placeholder='Name' />

					<StyledImput type='text' placeholder='Email Address' />

					<StyledImput type='text' placeholder='Company Name' />

					<StyledImput type='text' placeholder='Title' />

					<StyleImputMessege type='text' placeholder='Message' />

					<StyledCheckContainer>
						<SytledCheckInput type='checkbox' />
						<p>
							Stay up-to-date with company announcements and updates to our API
						</p>
					</StyledCheckContainer>
					<Button
						type={'submit'}
						color={`${colors.secondary.blue}`}
						bgcolor={'colors.secondary.blue'}
					/>
				</StyledForm>
				<StyledSponsorsContainer>
					<ArticleTitle
						text={Titles.contact.article}
						type={'article'}
						color={colors.secondary.blue}
					/>
					<SponsorsImgs />
				</StyledSponsorsContainer>
			</StyledContactContent>
			<EmailDemo title={true} />
		</StyledContactPage>
	);
};

export default Contact;
