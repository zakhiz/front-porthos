import IconRegister from "../../../assets/icons/iconRegister";
const RegisterText = () => {
    return (
        <>
            <div className="bg-black w-full h-full xl:flex flex-col justify-center items-center rounded-s-3xl hidden">
                <div className="w-3/4 text-center">
                    <h1 className="font-extrabold text-5xl text-white">¡Bienvenido a <span className="text-[#68FF02]">TaskApp</span>!</h1>
                    <p className="mt-4 font-normal text-white">
                        Maximiza tu productividad organizando y siguiendo tus tareas de manera eficiente. 
                        Configura alertas y alcanza tus objetivos con facilidad.
                    </p>
                </div>
                <IconRegister stylesRegister={"w-1/2"} />
            </div>
        </>
    )
};

export default RegisterText;