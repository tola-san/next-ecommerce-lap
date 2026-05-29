import toast from "react-hot-toast";

export const showSuccessToast = (
  message
) => {

  const isMobile =
    window.innerWidth < 640;

  toast.success(message, {
    duration: isMobile
      ? 2000
      : 3000,
  });

};

export const showErrorToast = (
  message
) => {

  const isMobile =
    window.innerWidth < 640;

  toast.error(message, {
    duration: isMobile
      ? 2000
      : 3000,
  });

};