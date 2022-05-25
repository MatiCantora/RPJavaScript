import { useState } from "react"
import { useAuth } from "../context/authContext"
import { useNavigate } from "react-router-dom"

function Register() {
	const [user, setUser] = useState({
		email: "",
		password: "",
	})

	const { signup } = useAuth()
	const navigate = useNavigate()

	const handleChange = ({ target: { name, value } }) => {
		setUser({ ...user, [name]: value })
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			await signup(user.email, user.password)
			navigate("/")
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<form className="flex flex-col items-center mt-10" onSubmit={handleSubmit}>
			<label htmlFor="email">Email</label>
			<input
				type="email"
				name="email"
				id="email"
				placeholder="email@gmail.com"
				onChange={handleChange}
				style={{ border: "1px solid", width: 200 }}
			/>

			<label htmlFor="password">Password</label>
			<input
				type="password"
				name="password"
				id="password"
				onChange={handleChange}
				style={{ border: "1px solid", width: 200 }}
			/>

			<button className="mt-5 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
				Register
			</button>
		</form>
	)
}

export default Register
