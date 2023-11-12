import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index"
import './index.css'


import GaLogo from "./assets/projects/ga-logo.png";
import MyLogo from "./assets/logo.svg";
import Pic1Word from "./assets/projects/4pic1word-logo.jpg";
import Poster1 from "./assets/portfolio/1.jpg";
import Poster2 from "./assets/portfolio/2.jpg";
import Poster3 from "./assets/portfolio/3.jpg";
import Poster4 from "./assets/portfolio/4.jpg";
import Poster5 from "./assets/portfolio/5.jpg";
import Poster6 from "./assets/portfolio/6.jpg";

import PosterOriginal1 from "./assets/portfolio/original/1.jpg";
import PosterOriginal2 from "./assets/portfolio/original/2.jpg";
import PosterOriginal3 from "./assets/portfolio/original/3.jpg";
import PosterOriginal4 from "./assets/portfolio/original/4.jpg";
import PosterOriginal5 from "./assets/portfolio/original/5.jpg";
import PosterOriginal6 from "./assets/portfolio/original/6.jpg";


let app = createApp(App)
app.config.globalProperties.projects = {
    websites: [
        {
            title: "Calculators",
            description: "Bunch of useful calculators to improve financial planning and help achieve other goals",
            image: MyLogo,
        },
        {
            title: "My Portfolio",
            description: "This very own website with API from Google AppEngine and frontend from GitHub Pages",
            image: MyLogo,
        },
        {
            title: "Global Avionics",
            description: "A super cool portfolio website for an aviation company Global Avionics.",
            image: GaLogo,
        },
    ],
    tools: [
        {
            title: "4 Pics 1 Word Solver",
            description: "A simple python script built to solve 4Pics1Word game puzzles",
            image: Pic1Word,
        },
        {
            title: "Sudoku Solver",
            description: "A simple python script built to solve given Sudoku puzzles",
            image: MyLogo,
        },
    ],
    openSource: [
        // {title: "Global Avionics", description: "A super cool portfolio website for the aviation company Global Avionics.", image: GaLogo}
        {
            title: "FyneBuilder",
            description: "A Golang GUI application absed on Fyne to help devs in building UIs",
            image: MyLogo,
        },
    ],
    posters: [
        {
            title: "Banner on Cultural Night",
            description: "Banner for Cultural Eve",
            image: Poster1,
            originalImage: PosterOriginal1
        },
        {
            title: "Welcome Poster",
            description: "Banner for welcoming outsiders",
            image: Poster2,
            originalImage: PosterOriginal2
        },
        {
            title: "Certificate",
            description: "Merit cum Participation Certificate for encouraging the participants and the Winners",
            image: Poster3,
            originalImage: PosterOriginal3
        },
        {
            title: "CD Sovenier",
            description: "Sovenier CD Cover designed for distribution over the participants",
            image: Poster4,
            originalImage: PosterOriginal4
        },
        {
            title: "Inaguration Poster",
            description: "Inaguration Banner that was displayed in the Inaguration ceremony of the great Technical Fest Scintillace, 2016",
            image: Poster5,
            originalImage: PosterOriginal5
        },
        {
            title: "Sponsors Banner",
            description: "Banner displaying the list of sponsors for the Technical Fest Scintillace, 2k16",
            image: Poster6,
            originalImage: PosterOriginal6
        },
    ],
};
app.use(router).mount('#app')
