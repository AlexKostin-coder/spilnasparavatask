import axios from "axios";

export const api = async (method, url) => {
	const res = await axios({
		method,
		url,
	});
	return res;
}
