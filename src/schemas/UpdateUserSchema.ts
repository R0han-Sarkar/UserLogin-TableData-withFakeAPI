import * as Yup from "yup";
import "yup-phone";

export const UpdateUserSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(3)
    .max(10)
    .required("Please enter your first name!"),
  lastname: Yup.string()
    .min(3)
    .max(10)
    .required("Please enter your last name!"),
  username: Yup.string().min(5).max(10).required("Please enter username!"),
  password: Yup.string().min(5).required("Please enter your password!"),
  email: Yup.string().email().required("Please enter your email!"),
  phone: Yup.string().min(10).required("Please enter a phone number!"),
  city: Yup.string().min(5).max(20).required("Please enter city!"),
});
