import axios from "axios";
import { display } from './displayData'

async function handleSubmit(event) {
	event.preventDefault();

	let url = document.getElementById('url').value;
	try {
		const { data } = await axios.post('http://localhost:8000', { url });
		display(data)
	} catch (e) {
		console.log(e)
	}
}


export { handleSubmit }