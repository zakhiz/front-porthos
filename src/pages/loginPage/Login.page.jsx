import Login from "../../components/auth/login/Login.component";
import LoginTextComponent from "../../components/auth/loginText/LoginText.component";

const LoginPage = () => {
   return (
        <>
            <div className="w-full h-screen flex">
                <LoginTextComponent/>
                <Login/>
            </div>
        </>    
   )
}

export default LoginPage;