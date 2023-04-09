import { v4 } from 'uuid';
import { Titles } from './titles';

const text = {
	home: {
		start: 'Have any questions?',
		sponsors:
			'Today, millions of people around the world have successfully connected their accounts to apps they love using our API. We provide developers with the tools they need to create easy and accessible experiences for their users.',
		implement:
			'Our API comes with just a few lines of code. You’ll be up and running in no time. We built our documentation page to integrate payments functionality with ease.',
		ux: {
			subtext:
				'Our pre-built form is easy to integrate in your app or website’s checkout flow and designed to optimize conversion.'
		}
	},
	about: {
		top: [
			{
				title: Titles.about.small.first,

				id: v4(),
				text: `Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. We are deeply focused on democratizing financial services through technology.`
			},
			{
				title: Titles.about.small.second,

				id: v4(),
				text: `At the core of our platform is the technical infrastructure APIs that connect consumers. Our innovative product provides key insights for businesses and individuals, as well as robust reporting for traditional financial institutions and developers.`
			}
		],
		bottom: [
			{
				title: Titles.about.small.third,

				id: v4(),
				text: `We strongly believe there's always an opportunity to learn from each other outside of day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups. We always value cross-team collaboration and diversity of thought, no matter the job title.`
			},
			{
				title: Titles.about.small.fourth,

				id: v4(),
				text: `We're all passionate about building a more efficient and inclusive financial infrastructure together. At PayAPI, we have diverse backgrounds and skills.`
			}
		]
	}
};

export { text };
