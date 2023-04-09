import { v4 } from 'uuid';

const FREE_PLAN = {
	id: v4(),
	plan: 'Free Plan',
	price: '$0.00',
	options: [
		{
			id: v4(),
			text: 'Transactions',
			checked: true
		},
		{
			id: v4(),
			text: 'Auth',
			checked: true
		},
		{
			id: v4(),
			text: 'Identity',
			checked: true
		},
		{
			id: v4(),
			text: 'Investments',
			checked: false
		},
		{
			id: v4(),
			text: 'Assets',
			checked: false
		},
		{
			id: v4(),
			text: 'Liabilities',
			checked: false
		},
		{
			id: v4(),
			text: 'Income',
			checked: false
		}
	]
};
const BASIC_PLAN = {
	id: v4(),
	plan: 'Basic Plan',
	price: '$249.00',
	options: [
		{
			id: v4(),
			text: 'Transactions',
			checked: true
		},
		{
			id: v4(),
			text: 'Auth',
			checked: true
		},
		{
			id: v4(),
			text: 'Identity',
			checked: true
		},
		{
			id: v4(),
			text: 'Investments',
			checked: true
		},
		{
			id: v4(),
			text: 'Assets',
			checked: true
		},
		{
			id: v4(),
			text: 'Liabilities',
			checked: false
		},
		{
			id: v4(),
			text: 'Income',
			checked: false
		}
	]
};

const PREMIUM_PLAN = {
	id: v4(),
	plan: 'Premium Plan',
	price: '$499.00',
	options: [
		{
			id: v4(),
			text: 'Transactions',
			checked: true
		},
		{
			id: v4(),
			text: 'Auth',
			checked: true
		},
		{
			id: v4(),
			text: 'Identity',
			checked: true
		},
		{
			id: v4(),
			text: 'Investments',
			checked: true
		},
		{
			id: v4(),
			text: 'Assets',
			checked: true
		},
		{
			id: v4(),
			text: 'Liabilities',
			checked: true
		},
		{
			id: v4(),
			text: 'Income',
			checked: true
		}
	]
};

const PRICING = {
	free: FREE_PLAN,
	basic: BASIC_PLAN,
	premium: PREMIUM_PLAN
};

export { PRICING };
