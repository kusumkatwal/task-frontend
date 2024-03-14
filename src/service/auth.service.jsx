import HttpService from "../config/http.service";

class AuthService extends HttpService {
    signup = async (data) => {
        try{
            const signupResponse = await this.postRequest(
                '/Auth/SignUp', data
            )
            return signupResponse
        }catch(exception) {
            throw exception;
        }
    }
    login = async (data) => {
        try{
            const loginResponse = await this.postRequest(
                '/Auth/LogIn', data
            )
            return loginResponse
        }catch(exception) {
            throw exception;
        }
    }
    course = async (data) => {
        try{
            const response = await this.postRequest(
                '/Auth/AddLesson', data
            )
            return response
        }catch(exception){
            throw exception;
        }
    }
    courseDisplay = async() => {
        try{
            const response = await this.getRequest(
                '/Auth/GetLesson'
            )
            return response
        }catch(exception)
        {
            throw exception;
        }
    }
}

const authSvc = new AuthService()
export default authSvc;