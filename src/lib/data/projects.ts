import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'portfolio-site',
		color: '#ff3e00',
		description:
			"When I was browsing through various sveltekit projects I found Riadh Adrani's svelte portfolio template. I liked the overall design and the way it was built, so I decided to adjust it to my needs. I updated some packeges added my information and images. In the future I may add more funtionality.",
		shortDescription: "Adjusted Riadh Adrani's svelte portfolio template to my needs.",
		links: [{ to: 'https://github.com/Anastasis-M/portfolio', label: 'GitHub' }],
		logo: Assets.Profile,
		name: 'Portfolio site',
		period: [{
			from: new Date('2024-09-11')
		}],
		skills: getSkills('svelte', 'ts', 'tailwind'),
		type: 'Personal Project'
	},
	{
		slug: 'reforestation-platform',
		color: '#15803d',
		description:
			'I built a reforestation platform from scratch, learning to weave together SvelteKit, Shadcn Svelte, and Open Layers for the front end with a solid backend using Prisma and Supabase. I tackled real challenges like user authentication, data management, and interactive mapping, which was a great learning experience; a way to keep my skills up to date and learn new things.',
		shortDescription:
			'Experimented with building a full-stack platform for dispalying reforestation projects.',
		links: [],
		logo: Assets.Unknown,
		name: 'Reforestation Platform',
		period: [{
			from: new Date('2024-07-21')
		}],
		skills: getSkills('svelte', 'ts', 'tailwind', 'Prisma ORM', 'PostgreSQL', 'SupaBase', 'OpenLayers'),
		type: 'Personal Project'
	},
	{
		slug: 'media-converter-toolkit',
		color: '#5e95e3',
		description: 'Well I wanted to learn a bit more about react so I decided to build a media converter toolkit but with a catch, It\'s offline...oh and Vibe coded 😂',
		shortDescription: 'A simple offline media converter toolkit so I don\'t have to use online or command line tools.',
		links: [],
		logo: Assets.Unknown,
		name: 'Media Converter Toolkit',
		period: [{
			from: new Date('2025-03-31')
		}],
		skills: getSkills('reactjs', 'ts', 'tailwind', 'nextjs'),
		type: 'Personal Project'
	},
	{
		slug: 'bsc-thesis',
		color: '#6E2037',
		description: 'This thesis presents the development of a product review web platform that enables users to submit, edit, and manage reviews for products purchased from any store. The platform allows users to browse reviews by category, with sorting options including price, ratings, alphabetical order, and location. Additionally, users can rate the helpfulness of others\' reviews, promoting the visibility of high-quality content. Each user has a personalized dashboard to oversee their reviews, favorite products, and profile information, enhancing user engagement and experience.',
		shortDescription: 'Online platform for viewing, submitting, and managing reviews for various products.',
		links: [
			{ to: 'https://github.com/Anastasis-M/bsc-thesis', label: 'GitHub' }
		],
		logo: Assets.Unknown,
		name: 'Bsc Thesis',
		period: [{
			from: new Date('2024-11'),
			to: new Date('2025-09')
		}],
		skills: getSkills('svelte', 'ts', 'tailwind', 'Prisma ORM', 'PostgreSQL'),
		type: 'Academic Project'
	},
	// {
	// 	slug: 'slick-portfolio-angular',
	// 	color: '#5e95e3',
	// 	description:
	// 		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
	// 	shortDescription:
	// 		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
	// 	links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
	// 	logo: Assets.Unknown,
	// 	name: 'Slick Portfolio',
	// 	period: {
	// 		from: new Date()
	// 	},
	// 	skills: getSkills('angular', 'ts', 'tailwind'),
	// 	type: 'Website Template'
	// },
	// {
	// 	slug: 'slick-portfolio-svelte',
	// 	color: '#ff3e00',
	// 	description:
	// 		'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
	// 	shortDescription:
	// 		'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
	// 	links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
	// 	logo: Assets.Svelte,
	// 	name: 'Slick Portfolio',
	// 	period: {
	// 		from: new Date()
	// 	},
	// 	skills: getSkills('svelte', 'ts', 'tailwind', 'sass'),
	// 	type: 'Website Template',
	// 	screenshots: [
	// 		{
	// 			label: 'screen 1',
	// 			src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
	// 		},
	// 		{
	// 			label: '2',
	// 			src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
	// 		},
	// 		{
	// 			label: '3',
	// 			src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
	// 		},
	// 		{
	// 			label: '4',
	// 			src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
	// 		},
	// 		{
	// 			label: '5',
	// 			src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
	// 		},
	// 		{
	// 			label: '6',
	// 			src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
	// 		}
	// 	]
	// }
];

export const title = 'Projects';
