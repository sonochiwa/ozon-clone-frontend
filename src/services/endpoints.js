import axios from "axios";

const endpoints = {
    getAllCategories: () => axios.get('http://0.0.0.0:8000/api/categories?sort=asc'),
}

export default endpoints;