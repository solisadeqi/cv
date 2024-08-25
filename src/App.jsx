import logo from './logo.svg';
import styles from './App.module.css';
import Nav from './Nav';
import Cv from './Cv';
import { AiFillInfoCircle } from 'solid-icons/ai'

// db
import exp_data from './data.json'

const educations = [
  {
      cert: "Bachelor of IT Engineer",
      uni: "Tehran Virtual University",
      loc: "Tehran, Iran",
      start: "",
      end: ""
  },
  {
    cert: "Associate of Electronic Circuits",
    uni: "University of Science and Culture",
    loc: "Tehran, Iran",
    start: "",
    end: ""
  },
  {
      cert: "Diploma of Mathematics and Physics",
      uni: "Razi High School",
      loc: "Tehran, Iran",
      start: "",
      end: ""
  },
]

const languages = [
    {
        en_name: "Japanese",
        name: "日本語",
        level: "N3"
    },
    {
        en_name: "English",
        name: "English",
        level: "Business"
    },
    {
        en_name: "Persian",
        name: "فارسی",
        level: "Native"
    },
    {
        en_name: "Azerbaijani",
        name: "Azərbaycan",
        level: "Native"
    },
    {
        en_name: "Spanish",
        name: "Español",
        level: "Conversational"
    }
]

const contact = {
    phone: "+818013564065",
    email: "solisadeqi1@gmail.com",
    web: "https://soli-cv.web.app/",
    linkedin: "https://www.linkedin.com/in/soli-sadeqi"
}

function App() {
  return (
    <div className='h-auto bg-gray-700  text-gray-700'>
      
      <Nav 
        contact={contact}
      />
        <small class='text-gray-900 bg-blue-500 w-full flex justify-center font-semibold' >
        <AiFillInfoCircle class='size-5 mx-5'/> 
        To facilitate the download, you might want to adjust your browser size to better accommodate the PDF.
        </small>

      <div className='m-2 flex justify-center  text-gray-700'>
        <Cv 
          name='Soleiman Sadeghi'
          job='Software Engineer'
          exp_data={exp_data}
          introduction='Proficient in multiple programming languages, advanced data structures, and algorithms. Expertise in software testing (unit, integration), version control, and database management (SQL, NoSQL). Skilled in developing efficient applications across various operating systems and cloud platforms. Strong in effective communication, analytical thinking, and teamwork, facilitating successful collaboration and problem solving in software development projects.'
          educations={educations}
          languages={languages}
        />
      </div>
      <br />
      <br />

    </div>
  );
}

export default App;
