export interface Profile {
	network: string;
	username: string;
	url: string;
}

export interface WorkExperience {
	name: string;
	position: string;
	url?: string;
	startDate: string;
	endDate: string;
	summary: string;
	highlights?: string[];
}

export interface Project {
	name: string;
	startDate: string;
	endDate: string;
	description: string;
	url?: string;
	tags: string[];
}

export interface Skill {
	name: string;
	level: string;
	keywords: string[];
}

export interface Education {
	institution: string;
	area: string;
	studyType: string;
	startDate: string;
	endDate: string;
	gpa: string;
}

export interface Sections {
	tr: {
		workExperience: string;
		education: string;
		projects: string;
		skills: string;
		languages: string;
		volunteer: string;
		interests: string;
		references: string;
	};
	en: {
		workExperience: string;
		education: string;
		projects: string;
		skills: string;
		languages: string;
		volunteer: string;
		interests: string;
		references: string;
	};
}

export interface Language {
	language: string;
	fluency: string;
}

export interface Reference {
	name: string;
	reference: string;
}

export interface ResumeData {
	basics: {
		name: string;
		label?: string;
		email?: string;
		phone?: string;
		url?: string;
		summary?: string;
		profiles?: Profile[];
	};

	work?: WorkExperience[];
	projects?: Project[];
	skills?: Skill[];
	languages?: Language[];
	references?: Reference[];
	education?: Education[];
	volunteer?: {
		organization: string;
		position: string;
		summary: string;
	}[];
}
