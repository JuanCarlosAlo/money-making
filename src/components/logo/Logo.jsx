import { StyledLink } from './styles';

const Logo = ({ position }) => {
	return (
		<StyledLink to={'/'}>
			<img
				src={
					position === 'header'
						? '/assets/shared/desktop/logo.svg'
						: '/assets/shared/desktop/logo-white.svg'
				}
				alt='logo'
			/>
		</StyledLink>
	);
};

export default Logo;
