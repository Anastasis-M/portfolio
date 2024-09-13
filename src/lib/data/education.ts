import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Bachelor of Informatics',
		description: 'Currently pursuing a Bachelor\'s degree in Informatics with a personal focus on software development and web technologies.',
		location: 'Piraeus, Greece', // Replace with the actual location
		logo: Assets.Unknown, 
		name: 'Bachelor\'s in Informatics',
		organization: 'University of Piraeus',
		period: { from: new Date('2020-10')},
		shortDescription: '',
		slug: 'informatics-degree',
		subjects: ['JavaScript', 'Svelte', 'Tailwind', 'HTML', 'CSS', 'Databases', 'Algorithms', 'Data Structures', 'Java', 'Python', 'C++', 'C#'] // Replace or add more relevant subjects
	}
	// {
	// 	degree: 'Bachelor degree of Computer Science',
	// 	description: '',
	// 	location: 'Tunisia',
	// 	logo: Assets.Unknown,
	// 	name: '',
	// 	organization: 'ISTIC',
	// 	period: { from: new Date(2020, 0, 1), to: new Date(2022, 5, 1) },
	// 	shortDescription: '',
	// 	slug: 'dummy-education-item',
	// 	subjects: ['C', 'Algorithm', 'Algebra', 'Python', 'C++', 'Java', 'English']
	// },
	// {
	// 	degree: 'PhD of Computer Science',
	// 	description: '',
	// 	location: 'USA',
	// 	logo: Assets.Unknown,
	// 	name: '',
	// 	organization: 'MIT',
	// 	period: { from: new Date(2023, 0, 1) },
	// 	shortDescription: '',
	// 	slug: 'dummy-education-item-2',
	// 	subjects: ['Assembly', 'Rust', 'Computer Architecture', 'Algorithms and Data structures']
	// }
];

export const title = 'Education';
