import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	
	{
		id: 'mathlessons',
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
		id: 'campstaff',
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
	
	
	
];

export const title = 'Experience';
