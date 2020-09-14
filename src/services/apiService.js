import axios from "axios";

class ApiService {
    constructor () {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}`
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

    deleteJob = async (jobId) => {
        return this.api.delete(`/user/completed/${jobId}`)
    }

    deletePortfolio = async (portId) => {
        return this.api.delete(`/user/completed/${portId}`)
    }

    
}

const apiService = new ApiService ()

export default apiService

