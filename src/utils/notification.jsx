import { toast } from "react-toastify";

// Configuración genérica para las notificaciones
const defaultOptions = {
  position: "top-right",
  autoClose: 3000, // Tiempo en milisegundos para cerrar automáticamente
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "colored", // Cambia el tema de las notificaciones
};

// Función genérica para mostrar notificaciones dinámicas
export const showToast = (message, type = "info", customOptions = {}) => {
  const options = { ...defaultOptions, ...customOptions };

  switch (type) {
    case "success":
      toast.success(message, options);
      break;
    case "error":
      toast.error(message, options);
      break;
    case "warning":
      toast.warn(message, options);
      break;
    case "info":
      toast.info(message, options);
      break;
    default:
      toast(message, options);
  }
};
