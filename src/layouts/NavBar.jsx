import React from "react";
import { Navbar } from "react-bootstrap";
import { FormGet } from "../components/FormGet";
export const NavBar = () => {
	return (
		<>
			<Navbar bg='danger' expand='lg' className='justify-content-center'>
				<FormGet />
			</Navbar>
		</>
	);
};
