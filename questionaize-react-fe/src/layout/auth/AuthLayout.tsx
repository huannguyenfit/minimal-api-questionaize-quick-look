import React from "react"
import { Outlet } from 'react-router-dom';
import "./AuthLayout.scss"
const AuthLayout = () => {
	return (
		<>
			<Outlet />
		</>
	)
}
export default AuthLayout
