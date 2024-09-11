import axios from "axios";

const getToken = () => {
  const localStorageUserData = localStorage.getItem("user-storage");
  const parsedDataUser =
    typeof localStorageUserData === "string"
      ? JSON?.parse(localStorageUserData || "")
      : null;
  return parsedDataUser?.state?.session_token || "";
};

const axiosInstanceCreate = () => {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_API_NAME,
    headers: {
      "Content-Type": "application/json",
    },
  });

  instance.interceptors.request.use(
    (config) => {
      const token = getToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return instance;
};

const axiosInstanceFormDataCreate = () => {
  const instance = axios.create({
    baseURL: "https://course-server-tn9c.onrender.com/api",
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  instance.interceptors.request.use(
    (config) => {
      const token = getToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return instance;
};

export const axiosInstance = axiosInstanceCreate();

export const axiosInstanceFormData = axiosInstanceFormDataCreate();
