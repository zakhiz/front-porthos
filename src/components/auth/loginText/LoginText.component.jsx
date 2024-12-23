import IconLogin from "../../../assets/icons/IconLogin";

const LoginTextComponent = () => {
    return (
        <>
            <div className="bg-black w-full h-full xl:flex flex-col justify-center items-center rounded-e-3xl hidden">
                <div className="w-3/4 text-center">
                    <h1 className="font-extrabold text-5xl text-white">¡Bienvenido a <span className="text-[#68FF02]">TaskApp</span>!</h1>
                    <p className="mt-4 font-normal text-white">
                        Optimiza tu día con nuestra app de tareas. Crea, organiza y sigue tus actividades de manera rápida y sencilla. 
                        Establece recordatorios y alcanza tus metas con facilidad. ¡Toma el control de tu tiempo ahora!
                    </p>
                </div>
                <IconLogin stylesLogin={"w-1/2"} />
            </div>
        </>
    )
};

export default LoginTextComponent;