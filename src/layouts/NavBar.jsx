import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { FormGet } from "../components/FormGet";
export const NavBar = () => {
	return (
		<>
			<Navbar bg='red' expand='lg'>
				<Container>
					<FormGet />
				</Container>
			</Navbar>
		</>
	);
};
