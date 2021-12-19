import React from "react";
import { useSelector } from "react-redux";
import { Container, ListGroup } from "react-bootstrap";

export const View = () => {
	const { responses } = useSelector((store) => store.responses);

	return (
		<>
			<Container>
				<h1>Results:</h1>
				<ListGroup>
					{responses.map(({ text, palindrome }, i) => (
						<ListGroup.Item key={i}>{text}</ListGroup.Item>
					))}
				</ListGroup>
			</Container>
		</>
	);
};
