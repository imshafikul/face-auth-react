import { toast } from "react-toastify";

const config = {
  position: "bottom-right",
  autoClose: 5000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export const toastMessage = ({ message, type }) => {
  switch (type) {
    case "info":
      return toast.info(message, config);
    case "success":
      return toast.success(message, config);
    case "warning":
      return toast.warn(message, config);
    case "error":
      return toast.error(message, config);
    default:
      return toast(message, config);
  }
};
