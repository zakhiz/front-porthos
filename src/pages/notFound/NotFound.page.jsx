import { useNavigate } from "react-router-dom";
import IconNotFound from "../../assets/icons/iconNotFound"
const NotFound = () => {

   const handleGoBack = () => {

    const token = localStorage.getItem('tokenApp');
    
        if (!token) {
            window.location.href = '/login'
        }else{
            window.location.href = '/'
        }
    }

   return (
            <div className="w-full h-screen flex flex-col items-center justify-center bg-black">
                <IconNotFound stylesNotFound={" sm:w-[600px] w-[320px]"} />
                <div className="w-[300px] text-center mt-4 bg-[#68FF02] pt-2 pb-2 rounded-md cursor-pointer" onClick={handleGoBack} >
                    <span className="text-black hover:text-white">{"< VOLVER"}</span>
                </div>
            </div>
   ) 
}

export default NotFound