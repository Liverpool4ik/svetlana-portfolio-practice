// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./layout/header/Header";
import { Main } from "./layout/sections/main/Main";
import { Contacts } from "./layout/sections/contacts/Contacts";
import { Projects } from "./layout/sections/projects/Projects";
import { Skills } from "./layout/sections/skills/Skills";
import { Slogan } from "./layout/sections/slogan/Slogan";
import { Testimony } from "./layout/sections/testimony/Testimony";
import { GlobalStyles } from "./styles/GlobalProjectStyles";
import { Footer } from "./layout/footer/Footer";

function App() {
	return (
		<div className="App">
			<GlobalStyles />
			<Header />
			<Main />
			<Skills />
			<Projects />
			<Testimony />
			<Contacts />
			<Slogan />
			<Footer />
		</div>
	);
}

export default App;
