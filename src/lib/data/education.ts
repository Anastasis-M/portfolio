import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Bachelor of Informatics',
		description: 'Completed comprehensive studies in computer science, software development, and information systems, with hands-on experience in programming, databases, and algorithms. Special emphasis on web development projects.',
		location: 'Piraeus, Greece',
		logo: Assets.Unipi_logo, 
		name: 'Bachelor\'s in Informatics',
		organization: 'University of Piraeus',
		period: { from: new Date('2020-10'), to: new Date('2024-09-30')},
		shortDescription: '',
		slug: 'informatics-bcs',
		subjects: ['JavaScript', 'Svelte', 'Tailwind', 'HTML', 'CSS', 'Databases', 'Algorithms', 'Data Structures', 'Java', 'Python', 'C++', 'C#', 'Unity'] // Replace or add more relevant subjects
	},
	{
		degree: 'Music High School Diploma',
		description: 'Completed a well-rounded education combining traditional academic subjects with specialized music training, including music theory, performance, and ensemble work.',
		location: 'Chios, Greece',
		logo: Assets.MusicSchoolLogo, 
		name: 'Music High School Diploma',
		organization: 'Music School of Chios',
		period: { from: new Date('2014-01-02'), to: new Date('2020')},
		shortDescription: 'Completed a well-rounded education combining traditional academic subjects with specialized music training, including music theory, performance, and ensemble work.',
		slug: 'music-high-school',
		subjects: [] // Replace or add more relevant subjects
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
