import React from "react";
import { InputGroup, FormControl, Button, Container } from "react-bootstrap";
export const Form = () => {
	return (
		<>
			<Container>
				<InputGroup className='mb-3'>
					<FormControl
						placeholder='Insert Text'
						aria-label='Insert Text'
						aria-describedby='basic-addon2'
					/>
					<Button variant='outline-secondary' id='button-addon2'>
						Send
					</Button>
				</InputGroup>
			</Container>
		</>
	);
};
