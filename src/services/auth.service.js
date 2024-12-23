import ApiConfig from "./api.service";


const trimEmail = (email) => email.trim(); 

export const LoginService = async (emailTrim, password) => {
    
    const email = trimEmail(emailTrim)
    
    try {
        const res = await ApiConfig.post('/login',{ email, password });
       
        return res.data
    } catch (error) {
        console.log(error);
        throw error
    }
}

export const RegisterService = async ( data ) => {
    try {
        const res = await ApiConfig.post('/register', data)
        return res.data
        
    } catch (error) {
        console.log(error);
        throw error;
    }


}

export const LogoutUser = async () => {
    try {
        const res = await ApiConfig.get('/logout')
        
        return res
    } catch (error) {

        console.log(error);
        throw error;
    }


}