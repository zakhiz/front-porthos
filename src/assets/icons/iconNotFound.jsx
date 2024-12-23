import iconNot from '../icon/notFound.png'

const IconNotFound = ({ stylesNotFound }) => {
    
    return (
        <div className={stylesNotFound}>
            <img  src={iconNot} alt="login" />
        </div>
    )
};

export default IconNotFound;