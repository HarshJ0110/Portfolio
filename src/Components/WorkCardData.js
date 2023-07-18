import p1 from '../images/project1.png'
import p2 from "../images/project2.png"
import p3 from "../images/project3.png"


const ProjectCardData =[
    {
        imgsrc: p2,
        title: "KeeperNote Website",
        text: "Project that allows users to easily add, edit and delete notes. The project was built using ReactJs and CSS for front-end, and NodeJS with ExpressJS for the back-end. The application utilizes RESTful API endpoints and a MongoDB database for seamless data management.",
        view: "https://keepernoteappnetlify.netlify.app/",
        source: "https://github.com/HarshJ0110"
    },
    {
        imgsrc: p1, 
        title: "Golds Gym Website",
        text: "Project that allows users to find exercises according to their needs, suggests some videos related to that exercise & also shows some similar exercises. The project was built using ReactJs and Material UI. The application utilizes API endpoints (Rapid api exerciseDB and youtube-search-and-download) for fetching data.",
        view: "https://fitnessappnetlify.netlify.app/",
        source: "https://github.com/HarshJ0110/FIT_APP.git"
    },
    {
        imgsrc: p3,
        title: "PDFx Website",
        text: "A tool use to merge Pdfs and convert word file to pdf. Users can create their profile, converted and merged pdf files are stored on their profile. The Project was built using EJS template and Css for front-end, and NodeJS with ExpressJS for back-end. The application uses MongoDb database for storing user credentials",
        view: "https://pdfx-pgwj.onrender.com",
        source: "https://github.com/HarshJ0110/PDFX-Project.git"
    }
]

export default ProjectCardData;