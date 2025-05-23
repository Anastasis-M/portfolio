import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		id: 'portfoliosite',
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
		skills: getSkills('Svelte', 'Typescript', 'Tailwind CSS'),
		type: 'Personal Project'
	},
	{
		id: 'reforestationplatform',
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
		skills: getSkills('Svelte', 'Typescript', 'Tailwind CSS', 'Prisma ORM', 'PostgreSQL', 'SupaBase', 'OpenLayers'),
		type: 'Personal Project'
	},
	// {
	// 	id: 'mediaconvertertoolkit',
	// 	color: '#5e95e3',
	// 	description: 'Well I wanted to learn a bit more about react so I decided to build a media converter toolkit but with a catch, It\'s offline...oh and Vibe coded 😂',
	// 	shortDescription: 'A simple offline media converter toolkit so I don\'t have to use online or command line tools.',
	// 	links: [],
	// 	logo: Assets.Unknown,
	// 	name: 'Media Converter Toolkit',
	// 	period: [{
	// 		from: new Date('2025-03-31')
	// 	}],
	// 	skills: getSkills('React Js', 'Typescript', 'Tailwind CSS', 'Next Js'),
	// 	type: 'Personal Project'
	// },
	{
		id: 'bscthesis',
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
		skills: getSkills('Svelte', 'Typescript', 'Tailwind CSS', 'Prisma ORM', 'PostgreSQL'),
		type: 'Academic Project'
	},
	// {
	
];

export const title = 'Projects';
