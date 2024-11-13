import Resume from "./resume-template";
import en_data from "./data/en.json";
import tr_data from "./data/tr.json";
import type { ResumeData } from "./types/resume";
import { useState } from "react";

function App() {
	const [language, setLanguage] = useState<"tr" | "en">("tr");

	const resumeData: ResumeData = language === "tr" ? tr_data : en_data;

	return (
		<div className=" bg-gray-100 print:bg-white py-8">
			{/* Dil seçim butonu */}
			<div className="container mx-auto mb-4 flex justify-between print:hidden">
				<button
					type="button"
					onClick={() => window.print()}
					className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
				>
					PDF olarak kaydet
				</button>

				<select
					value={language}
					onChange={(e) => setLanguage(e.target.value as "tr" | "en")}
					className="px-4 py-2 border rounded-md"
				>
					<option value="tr">Türkçe</option>
					<option value="en">English</option>
				</select>
			</div>
			{/* CV Bileşeni */}
			<div className="print:p-0 print:m-0">
				<Resume data={resumeData} language={language} />
			</div>
		</div>
	);
}

export default App;
