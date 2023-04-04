import axios from "axios";

const BASE_URL = "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/";


export default axios.create({
	baseURL: BASE_URL
});