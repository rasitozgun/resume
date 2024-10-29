import type React from "react";
import { Mail, Phone, Globe, Github, Linkedin } from "lucide-react";
import type { ResumeData } from "./types/resume";
import sections from "./data/sections.json";

interface ResumeProps {
	data: ResumeData;
	language: "tr" | "en";
}

const present = {
	tr: "Şu an",
	en: "Present",
};

const Resume: React.FC<ResumeProps> = ({ data, language }) => {
	const { basics, work, projects, skills, languages, volunteer, references } =
		data;
	const main_sections = sections[language]; // Dile göre başlıkları
	return (
		<div className="print-container max-w-[21cm] mx-auto p-6 bg-white text-gray-800 print:p-4 print:mx-0 print:shadow-none">
			{/* Header - Boşlukları azaltıldı */}
			<header className="mb-3">
				<h1 className="text-2xl font-bold text-gray-900 print-text-dark">
					{basics.name}
				</h1>
				<h2 className="text-base text-gray-600 print-text-gray">
					{basics.label}
				</h2>

				<div className="flex flex-wrap gap-3 mt-2 text-xs">
					<a
						href={`mailto:${basics.email}`}
						className="flex items-center gap-1 print-text-dark"
					>
						<Mail className="w-3 h-3" /> {basics.email}
					</a>
					<a
						href={`tel:${basics.phone}`}
						className="flex items-center gap-1 print-text-dark"
					>
						<Phone className="w-3 h-3" /> {basics.phone}
					</a>
					<a
						href={basics.url}
						className="flex items-center gap-1 print-text-dark"
					>
						<Globe className="w-3 h-3" /> {basics.url.replace("https://", "")}
					</a>
					{basics.profiles.map((profile) => (
						<a
							key={profile.network}
							href={profile.url}
							className="flex items-center gap-1 print-text-dark"
						>
							{profile.network === "Github" ? (
								<Github className="w-3 h-3" />
							) : (
								<Linkedin className="w-3 h-3" />
							)}
							{profile.username}
						</a>
					))}
				</div>
			</header>

			{/* Summary - Daha kompakt */}
			<section className="mb-3">
				<p className="text-xs print-text-sm print-text-gray">
					{basics.summary}
				</p>
			</section>

			{/* Work Experience */}
			<section className="mb-3">
				<h3 className="text-sm font-semibold border-b border-gray-300 pb-0.5 mb-2 print-text-dark">
					{main_sections.workExperience}
				</h3>
				<div className="space-y-2">
					{work.map((job, index) => (
						<div key={`${job.name}-${index}`}>
							<div className="flex justify-between items-start">
								<div>
									<h4 className="text-xs font-medium print-text-dark">
										{job.name}
									</h4>
									<p className="text-xs print-text-gray">{job.position}</p>
								</div>
								<span className="text-xs print-text-gray">
									{new Date(job.startDate).toLocaleDateString("en-US", {
										year: "numeric",
										month: "short",
									})}{" "}
									-
									{job.endDate
										? new Date(job.endDate).toLocaleDateString("en-US", {
												year: "numeric",
												month: "short",
											})
										: present[language]}
								</span>
							</div>
							<p className="text-xs mt-0.5 print-text-gray">{job.summary}</p>
						</div>
					))}
				</div>
			</section>

			{/* Projects */}
			<section className="mb-3">
				<h3 className="text-sm font-semibold border-b border-gray-300 pb-0.5 mb-2 print-text-dark">
					{main_sections.projects}
				</h3>
				<div className="space-y-2">
					{projects.map((project, index) => (
						<div key={`${project.name}-${index}`}>
							<h4 className="text-xs font-medium print-text-dark">
								{project.name}
							</h4>
							<p className="text-xs mt-0.5 print-text-gray">
								{project.description}
							</p>
							<p className="text-xs print-text-gray mt-0.5">
								Technologies: {project.tags.filter((tag) => tag).join(", ")}
							</p>
						</div>
					))}
				</div>
			</section>

			{/* Skills & Languages in 2 columns */}
			<div className="grid grid-cols-2 gap-4 mb-3">
				<section>
					<h3 className="text-sm font-semibold border-b border-gray-300 pb-0.5 mb-2 print-text-dark">
						{main_sections.skills}
					</h3>
					<div className="text-xs print-text-gray">
						{skills[0].keywords.join(", ")}
					</div>
				</section>

				<section>
					<h3 className="text-sm font-semibold border-b border-gray-300 pb-0.5 mb-2 print-text-dark">
						{" "}
						{main_sections.languages}
					</h3>
					<div className="text-xs print-text-gray">
						{languages
							.map((lang) => `${lang.language} (${lang.fluency})`)
							.join(", ")}
					</div>
				</section>
			</div>

			{references && references.length > 0 && (
				<section className="mb-3">
					<h3 className="text-sm font-semibold border-b border-gray-300 pb-0.5 mb-2 print-text-dark">
						{main_sections.references}
					</h3>
					<div className="space-y-2">
						{references.map((ref, index) => (
							<div key={`${ref.name}-${index}`}>
								<h4 className="text-xs font-medium print-text-dark">
									{ref.name}
								</h4>
								<p className="text-xs mt-0.5 print-text-gray">
									{ref.reference}
								</p>
							</div>
						))}
					</div>
				</section>
			)}

			{/* Volunteer Work */}
			{volunteer && volunteer.length > 0 && (
				<section>
					<h3 className="text-sm font-semibold border-b border-gray-300 pb-0.5 mb-2 print-text-dark">
						{main_sections.volunteer}
					</h3>
					{volunteer.map((vol, index) => (
						<div key={`${vol.organization}-${index}`}>
							<h4 className="text-xs font-medium print-text-dark">
								{vol.organization}
							</h4>
							<p className="text-xs mt-0.5 print-text-gray">{vol.summary}</p>
						</div>
					))}
				</section>
			)}
		</div>
	);
};

export default Resume;
