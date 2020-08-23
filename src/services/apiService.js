import axios from "axios";

class ApiService {
    constructor () {
        this.api = axios.create({
            baseURL: "http://localhost:4000"
        });
    }

    // sendFormData = async (title, description) => {

    //     return this.api.post(`/api/projects`, {title, description}) 
    // }

    getAllPendingJobs = async () => {
        return this.api.get('/user/pending')
    }

    getAllCompletedJobs = async () => {
        return this.api.get('/user/completed')
    }

    getAllPortfolioItems = async () => {
        return this.api.get('/user/portfolio')
    }

   

    
}

const apiService = new ApiService ()

export default apiService