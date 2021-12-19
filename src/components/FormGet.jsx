import React, { useState } from "react";
import {
	InputGroup,
	FormControl,
	Button,
	Container,
	Form,
} from "react-bootstrap";
import { useDispatch } from "react-redux";

import { send } from "../actions/responsesActions";

export const FormGet = () => {
	const handleChange = (e) => {
		const input = e.target.value;
		setInput(input);
	};

	const dispatch = useDispatch();
	const [input, setInput] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		petition(input);
	};

	const petition = async (text) => {
		dispatch(send(text));
	};

	return (
		<>
			<Form onSubmit={handleSubmit} className='justify-content-center'>
				<Container>
					<InputGroup className='mb-3'>
						<FormControl
							placeholder='Insert Text'
							aria-label='Insert Text'
							aria-describedby='basic-addon2'
							onChange={handleChange}
							value={input}
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
