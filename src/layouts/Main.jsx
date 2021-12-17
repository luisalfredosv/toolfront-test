import React from "react";
import { Container } from "react-bootstrap";

export const Main = ({ children }) => {
	return (
		<>
			<Container>{children}</Container>
		</>
	);
};
