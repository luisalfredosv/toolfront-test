import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Form } from "../components/Form";
export const NavBar = () => {
	return (
		<>
			<Navbar bg='red' expand='lg'>
				<Container>
					<Form />
				</Container>
			</Navbar>
		</>
	);
};
