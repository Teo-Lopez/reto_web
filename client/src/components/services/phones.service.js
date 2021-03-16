import axios from 'axios'

class PhoneService {
	constructor() {
		this.api = axios.create({
			baseURL: `http://localhost:5000/api/phones`,
			withCredentials: true,
		})
	}

	getAll = () => this.api.get('/')
	getOne = (id) => this.api.get(`/${id}`)
}

export default PhoneService
