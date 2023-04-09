import { v4 } from 'uuid';

const homeList = [
	{
		id: v4(),
		img: 'assets/home/desktop/icon-personal-finances.svg',
		title: 'Personal Finances',
		text: 'Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account.'
	},
	{
		id: v4(),
		img: 'assets/home/desktop/icon-banking-and-coverage.svg',
		title: 'Banking & Coverage',
		text: 'With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts.'
	},
	{
		id: v4(),
		img: 'assets/home/desktop/icon-consumer-payments.svg',
		title: 'Consumer Payments',
		text: 'It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account.'
	}
];

export { homeList };
