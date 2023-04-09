import { menu } from '../../constants/menu';
import Button from '../button/Button';
import {
	StyledLink,
	StyledMenu,
	StyledMenuContainer,
	StyledMenuIcon,
	StyledNav
} from './styles';

const Menu = ({ open, setOpen }) => {
	return (
		<StyledNav>
			<StyledMenu open={open}>
				<StyledMenuIcon
					onClick={() => {
						setOpen(!open);
					}}
					src='/assets/shared/mobile/close.svg'
					alt=''
				/>
				<StyledMenuContainer>
					{menu.map(element => (
						<StyledLink to={element.route} key={element.id}>
							{element.title}
						</StyledLink>
					))}
				</StyledMenuContainer>
				<Button text={'Schedule a Demo'} type='pink' route={'/'} />
			</StyledMenu>
		</StyledNav>
	);
};

export default Menu;
