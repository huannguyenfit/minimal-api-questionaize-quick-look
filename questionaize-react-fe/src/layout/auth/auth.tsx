import React from "react"
import { Link, Outlet } from 'react-router-dom';
import "./auth.scss"
// import LoginImage from '../../../../assets/images/login-screen.png';

const AuthLayout = ({ children }: any) => {
	React.useEffect(() => {
		window.scrollTo(0, 0)
	}, [children])

	return (
		<>
        <Outlet />
		</>
	)
}

export default AuthLayout
