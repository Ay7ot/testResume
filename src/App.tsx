import { useState, useRef } from "react"
import html2pdf from 'html2pdf.js';



function App() {

  const [textState, setTextState] = useState('Click to download')
  const itemref = useRef<HTMLDivElement | null>(null)
  
  async function generatePdf(){
    setTextState('Document is downloading')
    const toDownload = itemref.current
    
    if(toDownload){

      const opt = {
        margin:       0.1,
        filename:     'myfile.pdf',
        image:        { type: 'png', quality: 0.98 },
        // html2canvas:  { scale: 1 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
      };

      html2pdf().from(toDownload).set(opt).save('document.pdf')

    }

    setTextState('Click to download');
  }

  return (
    <div className="m-6">
      <div>
        <button onClick={generatePdf} className="bg-blue-300 rounded-md p-2 mb-6 text-white font-semibold">{textState}</button>
      </div>
      <div className='flex justify-between rounded-md min-h-[1030px] bg-[#f4f5fd]' ref={itemref}>
       <div className="px-[2.5rem] py-[3rem] w-[70%]">
        
        <div className="flex gap-4 items-center">
          <img src="Aydot.jpg" className="rounded-full w-[60px] h-[60px]"/>
          <div className="flex flex-col gap-2">
            <h1 className="font-sans text-3xl font-semibold">Ayomide Ibiteye</h1>
            <h2 className="font-serif text-sm">FRONTEND ENGINEER</h2>
          </div>
        </div>

        <section>
          <h2>Profile</h2>
          <p className="text-xs font-poppins mt-2">
            Results-driven and self-taught Frontend Engineer with 1 year of experience seeking an entry-level position to leverage technical expertise and passion for creating seamless user experiences. Seeking an opportunity to contribute to the development and enhancement of user-facing applications. Committed to delivering high-quality, responsive, and visually appealing web experiences while continuously learning and growing in a collaborative environment.
          </p>
        </section>

        <section>
          <h2>Employment History</h2>
          <div className="mt-2">
            <h3 className="mt-2 font-semibold text-sm font-sans">Junior Frontend Engineer, Some Company INC, Dallas</h3>
            <p className="mt-1 text-xs font-semibold text-[#b4b4b9]">OCTOBER 2022 - PRESENT</p>
            <ul className="mx-4 mt-2">
              <li>Assisted in the development and maintenance of responsive and user-friendly interfaces across multiple projects.</li>
              <li>Participated in code reviews, ensuring adherence to coding standards, best practices, and scalability.</li>
              <li>Worked closely with senior developers to troubleshoot and resolve frontend bugs and issues.</li>
              <li>Contributed to the optimization of web applications for improved performance and user experience.</li>
              <li>Actively participated in sprint planning meetings and provided input on project requirements and timelines.</li>
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold text-sm font-sans">Frontend Engineer Intern, Some Company INC, Dallas</h3>
            <p className="mt-1 text-xs font-semibold text-[#b4b4b9]">OCTOBER 2022 - PRESENT</p>
            <ul className="mx-4 mt-2">
              <li>Collaborated with the development team to build and enhance user interfaces for web applications using HTML, CSS, and JavaScript.</li>
              <li>Implemented responsive designs and optimized web pages for performance and cross-browser compatibility.</li>
              <li>Utilized React.js to create interactive components and enhance the user experience.</li>
              <li>Conducted code reviews and provided constructive feedback to improve code quality and maintainability.</li>
              <li>Actively participated in sprint planning meetings and provided input on project requirements and timelines.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2>Education</h2>
          <div className="mt-2">
            <h3 className="font-semibold text-sm font-sans">B.Tech, Federal University of Technology Akure</h3>
            <p className="mt-1 text-xs font-semibold text-[#b4b4b9]">DECEMBER 2018 - DECEMBER 2023</p>
            <p className="text-xs mt-2">Graduated with High Honours</p>
          </div>
        </section>
       </div>
       <div className="px-[2rem] text-white py-[8rem] w-[30%] bg-blue-500 rounded-r-md">
          
          <div className="text-xs flex flex-col gap-2">
            <h2 className="text-lg font-semibold">Details</h2>
            <p>Nigeria</p>
            <p>+2348075200170</p>
            <a href='mailto:' >ayomidotzee@gmail.com</a>
          </div>

          <div className="mt-6 flex flex-col gap-2">
            <h2 className="text-lg font-semibold">Links</h2>
            <p className=" text-xs">Portfolio</p>
            <p className=" text-xs">GitHub</p>
          </div>
          
          <div className="mt-6 ">
            <h2 className="text-lg font-semibold">Skills</h2>
            <ul className="list-none flex flex-col gap-2 mt-2">
              <li className="text-xs">React</li>
              <li className="text-xs">TypeScript</li>
              <li className="text-xs">Git</li>
              <li className="text-xs">Nodejs</li>
              <li className="text-xs">Javascript</li>
            </ul>
          </div>
       </div>
      </div>
    </div>

  )
}

export default App
