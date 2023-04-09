import Menu from '../menu/Menu';
import { StyledHeader, StyledHeaderIcon } from './styles';
import { useState } from 'react';
import Logo from '../logo/Logo';

const Header = () => {
	const [open, setOpen] = useState(false);

	return (
		<StyledHeader>
			<Logo position={'header'} />
			<Menu open={open} setOpen={setOpen} />
			<StyledHeaderIcon
				onClick={() => {
					setOpen(!open);
				}}
				src='/assets/shared/mobile/menu.svg'
				alt=''
			/>
		</StyledHeader>
	);
};

export default Header;
