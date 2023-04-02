import axios from "axios";

const BASE_URL = "https://sps.ascyteqlgsffkufz.pw/api/v1";


export default axios.create({
			baseURL: BASE_URL,
			headers: {
				"Content-Type": "multipart/form-data",
				Authorization: `Bearer`,
			},
});