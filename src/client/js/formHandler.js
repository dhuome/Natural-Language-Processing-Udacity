import { display } from './displayData';
import axios from 'axios';

export async function handleSubmit(event) {
	event.preventDefault();

	let url = document.getElementById('url').value;
	const data = await getData(url);
	display(data)
}

export async function getData(url) {
	try {
		const { data } = await axios.post('http://localhost:8000', { url });
		return data;
	} catch (error) {
		console.log(error)
	}
}
