import React, { useState } from "react";
import { FormControl, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { send } from "../actions/responsesActions";

export const FormGet = () => {
	const dispatch = useDispatch();
	const [form, setForm] = useState({
		input: "",
		alert: false,
		msg: "",
	});

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setForm({
			alert: false,
			msg: "",
		});
		petition(form.input);
	};

	const petition = async (text) => {
		dispatch(send(text))
			.then(() => {
				setForm({
					input: "",
					alert: false,
					msg: "",
				});
			})
			.catch((e) => {
				setForm({
					alert: true,
					msg: e.message,
				});
			});
	};

	const showMessage = () => {
		return (
			<div className=''>
				<p>{form.msg}</p>
			</div>
		);
	};

	return (
		<>
			<Form onSubmit={handleSubmit} className='mx-4'>
				<div className='d-flex'>
					<FormControl
						name='input'
						placeholder='Insert Text'
						aria-label='Insert Text'
						aria-describedby='basic-addon2'
						onChange={handleChange}
						value={form.input || ""}
						className='input-send'
					/>
					<Button
						className='btn-purple'
						variant='primary'
						id='button-addon2'
						type='submit'
						name='btn-submit'
					>
						Send
					</Button>
				</div>

				{form.alert && showMessage()}
			</Form>
		</>
	);
};
