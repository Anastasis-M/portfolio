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
		id: 'informaticsbcs',
		subjects: ['JavaScript', 'Svelte', 'Tailwind', 'HTML', 'CSS', 'Databases', 'Algorithms', 'Data Structures', 'Java', 'Python', 'C++', 'C#', 'Unity', '.NET']
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
		id: 'musichighschool',
		subjects: ['Music Theory', 'Performance', 'Ensemble Work', 'General High School Courses']
	}
];

export const title = 'Education';
