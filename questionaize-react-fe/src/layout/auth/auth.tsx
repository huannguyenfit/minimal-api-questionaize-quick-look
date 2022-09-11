import React from "react"
import "./auth.scss"
// import LoginImage from '../../../../assets/images/login-screen.png';

const AuthLayout = ({ children }: any) => {
	React.useEffect(() => {
		window.scrollTo(0, 0)
	}, [children])

	return (
		<></>
	)
}

export default AuthLayout
