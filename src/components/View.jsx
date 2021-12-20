import React from "react";
import { useSelector } from "react-redux";
import { Container, ListGroup } from "react-bootstrap";

export const View = () => {
	const { responses } = useSelector((store) => store.responses);

	const notData = () => {
		return (
			<div>
				<h6>Not results..</h6>
			</div>
		);
	};
	return (
		<>
			<Container className='mt-4 w-50 content px-5 py-5'>
				<h1>Results:</h1>
				<ListGroup>
					{responses.map(({ text, palindrome }, i) => (
						<ListGroup.Item key={i}>
							{text} -{" "}
							{palindrome ? "Is palindrome" : "Not is palindrome"}
						</ListGroup.Item>
					))}
				</ListGroup>

				{responses.length <= 0 && notData()}
			</Container>
		</>
	);
};
