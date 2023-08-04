import axios from "axios";

const endpoints = {
    getAllCategories: () => axios.get('http://0.0.0.0:8000/api/categories?sort=asc'),
    getImage: (id) => axios.get(`http://0.0.0.0:8000/api/images/${id}`),
}

export default endpoints;