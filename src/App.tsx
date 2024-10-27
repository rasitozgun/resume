import Resume from "./resume-template"
import en_data from './data/en.json' 
import tr_data from './data/tr.json'
import { ResumeData } from "./types/resume";
import { useState } from "react";

function App() {
  const [language, setLanguage] = useState<'tr' | 'en'>('tr');
  
  const resumeData: ResumeData = language === 'tr' ? tr_data : en_data;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      {/* Dil seçim butonu */}
      <div className="container mx-auto mb-4 flex justify-end print:hidden">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value as 'tr' | 'en')}
          className="px-4 py-2 border rounded-md"
        >
          <option value="tr">Türkçe</option>
          <option value="en">English</option>
        </select>
      </div>

      {/* CV Bileşeni */}
      <div className="print:p-0 print:m-0">
        <Resume data={resumeData} />
      </div>  
    </div>
  );
}

export default App
