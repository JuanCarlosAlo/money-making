import { menu } from '../../constants/menu';
import { socials } from '../../constants/socials';
import Logo from '../logo/Logo';
import {
	StyledFooter,
	StyledFooterContainer,
	StyledFooterMenu,
	StyledLink,
	StyledSocialsContainer
} from './styles';

const Footer = () => {
	return (
		<StyledFooter>
			<Logo position={'footer'} />
			<StyledFooterContainer>
				<StyledFooterMenu>
					{menu.map((element, index) => (
						<StyledLink to={menu[index].route} key={element.id}>
							{element.title}
						</StyledLink>
					))}
				</StyledFooterMenu>
				<StyledSocialsContainer>
					{socials.map(element => (
						<img key={element.id} src={element.img} />
					))}
				</StyledSocialsContainer>
			</StyledFooterContainer>
		</StyledFooter>
	);
};

export default Footer;
