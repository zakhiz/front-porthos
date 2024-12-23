import RegisterComponent from "../../components/auth/registerComponent/RegisterComponent"
import RegisterText from "../../components/auth/registerText/RegisterComponentText"

const Register = () => {
    return (
        <>
            <div className="w-full h-screen flex">
                <RegisterComponent/>
                <RegisterText/>
            </div>
        </>    
    )
}

export default Register