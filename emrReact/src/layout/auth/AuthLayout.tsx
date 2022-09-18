import { Box } from "@mui/material";
import React from "react"
import { Outlet, useRoutes } from 'react-router-dom';
import authLayoutRoutings from "./AuthLayoutRoutings";
const AuthLayout = () => {
	const authRoutes = useRoutes(authLayoutRoutings)
	return (
		<>
			<Box>
				{/* {authRoutes} */}
				<Outlet />
			</Box>
		</>
	)
}
export default AuthLayout;
