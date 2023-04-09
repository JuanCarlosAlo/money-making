import {
	StyledButtonPink,
	StyledButtonTransparent,
	StyledSubmit
} from './styles';

const Button = ({ text, type, color, bgcolor, route }) => {
	if (type === 'pink') {
		return <StyledButtonPink to={route}>{text}</StyledButtonPink>;
	}
	if (type === 'transparent') {
		return (
			<StyledButtonTransparent to={route} color={color} bgcolor={bgcolor}>
				{text}
			</StyledButtonTransparent>
		);
	}
	if (type === 'submit') {
		return <StyledSubmit color={color} bgcolor={bgcolor} type='submit' />;
	}
};

export default Button;
