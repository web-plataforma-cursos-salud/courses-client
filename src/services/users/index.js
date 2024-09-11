import axios from "axios";

export const registerUserServices = async (values) => {
  try {
    const res = await axios.post(
      "https://course-server-tn9c.onrender.com/api/user",
      values
    );

    return res;
  } catch (error) {
    console.error("ERROR IN registerUser:", error);
  }
};
