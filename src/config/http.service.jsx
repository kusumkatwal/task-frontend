import axiosInstance from "./axios.config";

class HttpService{
    #headers;
    getHeader = (config) => {
        if(config && config.auth) {
            let token = null;
            this.headers = {
                ...this.#headers,
                "Authorization": "Bearer" + token
            }
        }
    }
    getRequest = async(url, config = null) => {}

    postRequest = async(url,data=null, config=null) => {
        try{
            this.getHeader(config)
            const response = await axiosInstance.post(url,data, {
                headers: {
                    ...this.#headers
                }
            })
            return response;
        }catch(exception) 
        {
            throw exception
        }
    }
}

export default HttpService;