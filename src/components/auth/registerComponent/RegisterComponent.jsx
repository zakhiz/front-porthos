import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RegisterService } from "../../../services/auth.service";
import EyeOpen from "../../../assets/icons/eyeOpen";
import EyeClose from "../../../assets/icons/eyeClose";
import { useAuth } from "../../../context/authContext";
import { showToast } from "../../../utils/notification";

const RegisterComponent = () => {
    const { dataUser } = useAuth();

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };
    
    
    const [registerData, setRegisterData] = useState({
        fullName:"",
        email: "".trim(),
        password:""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegisterData((prev) => ({ ...prev, [name]: value }));
    };
    

    const handleSubmitRegister = async (e) => {
        e.preventDefault(); 
        e.stopPropagation();

         try {
                
                if (!registerData.fullName || !registerData.email || !registerData.password) {
                    showToast('Todos los campos son obligatorios','error')
                    return;
                }
           
                const response = await RegisterService({fullName: registerData.fullName, email: registerData.email, password: registerData.password});
                
                if (response) {
                    navigate("/login");
                    showToast('Se creo correctamente la cuenta, inicie sesión', 'success')
                }

        } catch (err) {
                showToast('Ocurrio un error al crear tu cuenta', 'error')

        }


    }

    return (
        <>
            <div className="w-3/5 h-full bg-white flex flex-col justify-center items-center m-auto">
                    <h1 className="font-extrabold text-3xl text-black xl:hidden sm:w-[400px] w-[300px] mb-6 cursor-none">¡Bienvenido a <span className="text-[#68FF02] xl:hidden">TaskApp</span>!</h1>
                    <h2 className="text-2xl font-semibold xl:w-[400px] sm:w-[400px] w-[300px] cursor-none">¡Únete y empieza a organizar tu día!</h2>
                    <form className="flex flex-col items-center justify-center mt-6 gap-6 xl:w-[400px] sm:w-[400px] w-[300px]" onSubmit={handleSubmitRegister}>
                        <div className="flex flex-col w-full border-b-2 border-[#68FF02]">
                            <input type="text" className="outline-none" autoComplete="off" name="fullName" placeholder="Nombre completo" id="fullName" value={registerData.fullName} onChange={handleChange}/>
                        </div>
                        <div className="flex flex-col w-full border-b-2 border-[#68FF02]">
                            <input type="email" className="outline-none" autoComplete="off" name="email" placeholder="Email" id="email" value={registerData.email} onChange={handleChange}/>
                        </div>
                        <div className="flex flex-col w-full border-b-2 border-[#68FF02] relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            className="outline-none w-full pr-10"
                            autoComplete="off"
                            name="password"
                            placeholder="Contraseña"
                            id="password"
                            value={registerData.password}
                            onChange={handleChange}
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-[#68FF02]"
                        >
                            {showPassword ? <EyeClose/> : <EyeOpen/>}
                        </button>
                        </div>
                        <input type="submit" value="CREAR CUENTA" className="bg-[#68FF02] w-full pt-2 pb-2 font-medium rounded-lg cursor-pointer"/>
                    </form>
                    <p className="xl:w-[400px] sm:w-[400px] w-[300px] font-light mt-4 cursor-none"> 
                        ¿Ya tienes una cuenta? 
                        <Link className="font-semibold hover:text-[#68FF02]" to={'/'}> Inicia sesión</Link>
                    </p>
            </div>
        </>
    )
}

export default RegisterComponent;