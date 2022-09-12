import React from "react"
import { Outlet } from 'react-router-dom';
import "./auth.scss"
 import LoginImage from 'assets/images/login.jpeg';

const AuthLayout = ({ children }: any) => {
	return (
		<>
			<div className="row default-layout container-fluid align-items-center">
				<div className="col-6"  >
					<Outlet />
				</div>
				<div className="col-6 left-content"  >
					<div className="left-background">
						<img className="sign-up-img" src={LoginImage} alt="sign-up-background" />
					</div>
				</div>
			</div>
		</>
	)
}
export default AuthLayout
