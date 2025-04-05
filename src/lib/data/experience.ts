import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	// {
	// 	slug: 'aspiring-fullstack-dev',
	// 	company: 'University of Piraeus',
	// 	description: 'Along with my general CS studies, learning and experimenting with modern web technologies.',
	// 	contract: ContractType.SelfEmployed,
	// 	type: 'Software Development',
	// 	location: 'Piraeus, Greece',
	// 	period: [{ from: new Date('2020-10') }], 
	// 	skills: getSkills('svelte', 'tailwind', 'js', 'html', 'css', 'ts','PostgreSQL', 'Prisma ORM'),
	// 	name: 'Aspiring Fullstack Developer',
	// 	color: 'red',
	// 	links: [ { to: 'https://cs.unipi.gr/en', label: 'University of Piraeus', newTab: true }],
	// 	logo: Assets.Unipi_logo,
	// 	shortDescription: 'Along with my general CS studies, learning and experimenting with modern web technologies.'
	// },
	{
		slug: 'math-lessons',
		company: '',
		description: 'Provided one-on-one math tutoring for Junior High School students.',
		contract: ContractType.SelfEmployed,
		type: 'Maths',
		location: 'Chalandri, Greece',
		period: [{
			from: new Date('2022-02'), 
			to: new Date('2022-05')
		},
		{
			from: new Date('2022-08'),
			to: new Date('2023-05')
		}], 
		skills: getSkills(''),
		name: 'Private Math Lessons',
		color: 'red',
		links: [ ],
		logo: Assets.Unknown,
		shortDescription: 'Provided one-on-one math tutoring for Junior High School students.'
	},
	{
		slug: 'camp-staff',
		company: '',
		description: 'Managed teams, assisted in organization and coordination of camp schedules and led group activities.',
		contract: ContractType.Volunteer,
		type: 'Maths',
		location: 'Chios, Greece',
		period: [{
			from: new Date('2021-07-02'), 
			to: new Date('2024-07')
		}], 
		skills: getSkills(''),
		name: 'Volunteer Camp Staff',
		color: 'red',
		links: [ ],
		logo: Assets.Unknown,
		shortDescription: 'Managed teams, assisted in organization and coordination of camp schedules and led group activities.'
	}
	
	
	// {
	// 	slug: 'open-sourcer',
	// 	company: 'Self-employed',
	// 	description: 'Creating awesome tools for developers.',
	// 	contract: ContractType.SelfEmployed,
	// 	type: 'Software Development',
	// 	location: 'Home',
	// 	period: [{ from: new Date() }],
	// 	skills: getSkills('ts', 'js'),
	// 	name: 'Open Source Developer',
	// 	color: 'red',
	// 	links: [],
	// 	logo: Assets.Unknown,
	// 	shortDescription: 'Creating awesome tools for developers.'
	// },
	// {
	// 	slug: 'software-freelance',
	// 	company: 'Self-employed',
	// 	description: 'Creating awesome applications for customers.',
	// 	contract: ContractType.Freelance,
	// 	type: 'Software Development',
	// 	location: 'Home',
	// 	period: [{ from: new Date() }],
	// 	skills:'blue',
	// 	links: [],
	// 	logo: Assets.Unknown,
	// 	shortDescription: 'Creating awesome applications for customers.'
	// },
	// {
	// 	slug: 'software-freelance-junior',
	// 	company: 'Self-employed',
	// 	description: 'Creating awesome applications for customers.',
	// 	contract: ContractType.Freelance,
	// 	type: 'Software Development',
	// 	location: 'Home',
	// 	period: [{ from: new Date(2022, 0, 1), to: new Date() }],
	// 	skills: getSkills('css', 'html', 'js'),
	// 	name: 'Junior Freelancer',
	// 	color: 'green',
	// 	links: [],
	// 	logo: Assets.Unknown,
	// 	shortDescription: 'Creating awesome applications for customers.'
	// }
];

export const title = 'Experience';
