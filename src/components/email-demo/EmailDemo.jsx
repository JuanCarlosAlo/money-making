import { colors } from '../../constants/colors';
import ArticleTitle from '../article-title/ArticleTitle';
import Button from '../button/Button';

import {
	StyledButtonContainer,
	StyledForm,
	StyledButtonContainerNoButton,
	StyledInputElement,
	StyledFormNoButton
} from './styles';

const EmailDemo = ({ title }) => {
	if (title) {
		return (
			<StyledForm>
				<ArticleTitle
					text={'Ready to start?'}
					type={'article'}
					color={colors.secondary.blue}
				/>
				<StyledInputElement placeholder='Enter email address' />
				<StyledButtonContainer>
					<Button text={'Schedule a Demo'} type='pink' />
				</StyledButtonContainer>
			</StyledForm>
		);
	} else {
		return (
			<StyledFormNoButton>
				<StyledInputElement placeholder='Enter email address' />
				<StyledButtonContainerNoButton>
					<Button text={'Schedule a Demo'} type='pink' />
				</StyledButtonContainerNoButton>
			</StyledFormNoButton>
		);
	}
};

export default EmailDemo;
