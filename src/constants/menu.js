import { v4 } from 'uuid';

const menu = [
	{
		id: v4(),
		title: 'Pricing',
		route: '/pricing'
	},
	{
		id: v4(),
		title: 'About',
		route: '/about'
	},
	{
		id: v4(),
		title: 'Contact',
		route: '/contact'
	}
];

export { menu };
