import { colors } from '../../constants/colors';
import { text } from '../../constants/text';

import ArticleTitle from '../article-title/ArticleTitle';
import TextElement from '../text/TextElement';
import { StyledParagraph, StyledParagraphContainer } from './styles';

const AboutParagraph = ({ location }) => {
	return (
		<StyledParagraphContainer>
			{text.about[location].map(text => (
				<StyledParagraph key={text.id}>
					<ArticleTitle
						text={text.title}
						type={'small'}
						color={colors.secondary.blue}
					/>
					<TextElement
						text={text.text}
						color={colors.secondary.blue}
						align={'left'}
					/>
				</StyledParagraph>
			))}
		</StyledParagraphContainer>
	);
};

export default AboutParagraph;
