import React from "react"
import { Routes, Route } from "react-router-dom"
import "./App.css"

import Home from "./components/Home"
import About from "./components/About"
import Upload from "./components/Upload"
import Register from "./components/Register"

import { AuthProvider } from "./context/authContext"

import NavBar from "./components/NavBar"

function App() {
	return (
		<AuthProvider>
			<div className="App">
				<NavBar />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/about" element={<About />} />
					<Route exact path="/upload" element={<Upload />} />
					<Route exact path="/register" element={<Register />} />
				</Routes>
			</div>
		</AuthProvider>
	)
}

export default App
