import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	git,
	polban,
	nesas,
	protonema,
	wheater,
	oms,
	tnps,
	movie,
	laravel,
	php,
} from '../assets';

export const navLinks = [
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'work',
		title: 'Work',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
];

const services = [
	{
		title: 'Web Developer',
		icon: web,
	},
	{
		title: '12th Grade Student',
		icon: mobile,
	},
	// {
	// 	title: 'Backend Developer',
	// 	icon: backend,
	// },
	{
		title: 'L2 Apps Support',
		icon: creator,
	},
];

const technologies = [
	{
		name: 'HTML 5',
		icon: html,
	},
	{
		name: 'CSS 3',
		icon: css,
	},
	{
		name: 'JavaScript',
		icon: javascript,
	},
	{
		name: 'TypeScript',
		icon: typescript,
	},
	{
		name: 'React JS',
		icon: reactjs,
	},
	{
		name: 'Redux Toolkit',
		icon: redux,
	},
	{
		name: 'Tailwind CSS',
		icon: tailwind,
	},
	{
		name: 'Node JS',
		icon: nodejs,
	},
	{
		name: 'PHP',
		icon: php,
	},
	{
		name: 'Laravel',
		icon: laravel,
	},
	// {
	// 	name: 'MongoDB',
	// 	icon: mongodb,
	// },
	// {
	// 	name: 'Three JS',
	// 	icon: threejs,
	// },
	{
		name: 'git',
		icon: git,
	},
	// {
	// 	name: 'figma',
	// 	icon: figma,
	// },
	// {
	// 	name: 'docker',
	// 	icon: docker,
	// },
];

const experiences = [
	{
		title: 'Code Igniter Developer',
		company_name: 'Politeknik Negeri Bandung',
		icon: polban,
		iconBg: '#383E56',
		date: 'January 2022 - Maret 2022',
		points: [
			'Developing and maintaining web applications using Code Igniter and other related technologies.',
			'Collaborating with cross-functional teams including network engineering, IT supervisor, and other developers to create high-quality products.',
			'Implementing responsive design and ensuring cross-browser compatibility.',
		],
	},
	{
		title: 'Code Igniter Developer',
		company_name: 'Maintenance Repairing Calibration',
		icon: nesas,
		iconBg: '#383E56',
		date: 'March 2022 - June 2022',
		points: [
			'Developing and maintaining web applications using Code Igniter and other related technologies.',
			"Create some software applications for the team's convenience",
			'Implementing responsive design and ensuring cross-browser compatibility.',
		],
	},
	{
		title: 'Frontend Web Developer',
		company_name: 'Protonema',
		icon: protonema,
		iconBg: '#383E56',
		date: 'August 2022 - Present',
		points: [
			'Developing and maintaining web applications using React.js, Laravel, and other related technologies.',
			'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
			'Implementing responsive design and ensuring cross-browser compatibility.',
		],
	},
];

const testimonials = [
	{
		testimonial:
			'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
		name: 'Sara Lee',
		designation: 'CFO',
		company: 'Acme Co',
		image: 'https://randomuser.me/api/portraits/women/4.jpg',
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: 'Chris Brown',
		designation: 'COO',
		company: 'DEF Corp',
		image: 'https://randomuser.me/api/portraits/men/5.jpg',
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: 'Lisa Wang',
		designation: 'CTO',
		company: '456 Enterprises',
		image: 'https://randomuser.me/api/portraits/women/6.jpg',
	},
];

const projects = [
	{
		name: 'Wether App',
		description:
			'Web-based platform that allows users to check whether condition in their area',
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'restapi',
				color: 'green-text-gradient',
			},
			{
				name: 'css-styling',
				color: 'pink-text-gradient',
			},
		],
		image: wheater,
		isSecure: true,
		source_code_link: 'https://github.com/muhammadHeiwa/axios-whether',
	},
	{
		name: 'Ordering Management System',
		description:
			'Web application that enables users to order our products and monitor their order with super easy interface to use',
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'restapi',
				color: 'green-text-gradient',
			},
			{
				name: 'expressjs',
				color: 'pink-text-gradient',
			},
		],
		image: oms,
		isSecure: false,
		source_code_link: 'https://github.com/',
	},
	{
		name: 'Transactional Network Promoter Score',
		description:
			'Web application that can handle tNPS survey for your microservices application, so you can see what people think about your products',
		tags: [
			{
				name: 'laravel',
				color: 'blue-text-gradient',
			},
			{
				name: 'lumen',
				color: 'green-text-gradient',
			},
			{
				name: 'jquery',
				color: 'pink-text-gradient',
			},
		],
		image: tnps,
		isSecure: false,
		source_code_link: 'https://github.com/',
	},
	// {
	// 	name: 'IMDb List',
	// 	description:
	// 		'Web-based platform that can giving you list of all the movie from time to time',
	// 	tags: [
	// 		{
	// 			name: 'laravel',
	// 			color: 'blue-text-gradient',
	// 		},
	// 		{
	// 			name: 'lumen',
	// 			color: 'green-text-gradient',
	// 		},
	// 		{
	// 			name: 'jquery',
	// 			color: 'pink-text-gradient',
	// 		},
	// 	],
	// 	image: movie,
	// 	isSecure: false,
	// 	source_code_link: 'https://github.com/',
	// },
];

export { services, technologies, experiences, testimonials, projects };
