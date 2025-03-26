import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Anastasis';

export const lastName = 'Melachroinoudis';

export const description = "Hi there, I'm an aspiring Fullstack Developer with a background in Informatics. I enjoy experimenting with modern web technologies like SvelteKit and Prisma ORM, and have used them in various personal projects. Always eager to learn and grow, I'm excited to continue exploring fullstack development and work on new, innovative challenges.";

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/Anastasis-M' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/anastasios-melachroinoudis'
	},
	{
		platform: Platform.Twitter,
		link: 'https://x.com/anastasis_ms'
	},
	// {
	// 	platform: Platform.StackOverflow,
	// 	link: 'https://stackoverflow.com/'
	// },
	{
		platform: Platform.Email,
		link: 'anastasis.dev.cafiq@slmail.me'
	},
	// {
	// 	platform: Platform.Youtube,
	// 	link: 'https://www.youtube.com'
	// },
	// {
	// 	platform: Platform.Facebook,
	// 	link: 'https://www.facebook.com'
	// }
];

export const skills = getSkills('js', 'css', 'html', 'svelte', 'ts', 'Prisma ORM', 'PostgreSQL');
