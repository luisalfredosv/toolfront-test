import React from "react";
import { Container } from "react-bootstrap";
export const View = () => {
	const data = [
		{
			text: "First text",
		},
		{
			text: "Second text",
		},
		{
			text: "Third text",
		},
	];

	return (
		<>
			<Container>
				<h1>Results:</h1>

				{data.map(({ text }) => (
					<p>{text}</p>
				))}
			</Container>
		</>
	);
};
