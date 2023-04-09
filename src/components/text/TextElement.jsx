import { StyledText } from './styles';

const TextElement = ({ text, color, align }) => {
	return (
		<StyledText align={align} color={color}>
			{text}
		</StyledText>
	);
};

export default TextElement;
