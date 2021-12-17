import React, { useState } from "react";
import {
	InputGroup,
	FormControl,
	Button,
	Container,
	Form,
} from "react-bootstrap";

export const FormGet = (event) => {
	const input = "";

	const [inputValue, setInputValue] = useState(input);

	const handleChange = (e) => {
		const value = e.target.value;
		setInputValue(value);
	};

	// const body = {
	// 	text: this.state.name,
	// };

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log(this.input);
	};

	return (
		<>
			<Form onSubmit={handleSubmit}>
				<Container>
					<InputGroup className='mb-3'>
						<FormControl
							placeholder='Insert Text'
							aria-label='Insert Text'
							aria-describedby='basic-addon2'
							value={inputValue}
							onChange={handleChange}
						/>
						<Button
							variant='outline-secondary'
							id='button-addon2'
							type='submit'
						>
							Send
						</Button>
					</InputGroup>
				</Container>
			</Form>
		</>
	);
};
