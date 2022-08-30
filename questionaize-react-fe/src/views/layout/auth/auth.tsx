import React from "react"
import "./auth.scss"
// import LoginImage from '../../../../assets/images/login-screen.png';
import { Col, Row } from 'antd';

const AuthLayout = ({ children }: any) => {
	React.useEffect(() => {
		window.scrollTo(0, 0)
	}, [children])

	return (
		<Row className="default-layout container-fluid">
			<Col span={14}>{children}</Col>
			<Col span={10} className="left-content">
				<Row className="left-background">
					{/* <img className="sign-up-img" src={LoginImage} alt="sign-up-background" /> */}
				</Row>
			</Col>
		</Row>
	)
}

export default AuthLayout
