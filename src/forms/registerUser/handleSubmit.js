import { registerUserServices } from "../../services";

export const handleSubmit = async (values, { setSubmitting }) => {
  const res = await registerUserServices(values);
  console.log(res);
};
