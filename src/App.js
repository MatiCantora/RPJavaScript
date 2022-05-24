import React from "react"
import { Routes, Route } from "react-router-dom"
import "./App.css"

import Home from "./components/Home"
import About from "./components/About"
import Upload from "./components/Upload"

import NavBar from "./components/NavBar"
// import Footer from "./components/Footer"

function App() {
	return (
		<div className="App">
			<NavBar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/about" element={<About />} />
				<Route exact path="/upload" element={<Upload />} />
			</Routes>
		</div>
	)
}

export default App
