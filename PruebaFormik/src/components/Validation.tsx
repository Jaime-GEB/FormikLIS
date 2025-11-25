import * as Yup from "yup";

const Validation = () => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .max(15, "Debe tener 15 letras o menos")
      .min(2, "Debe tener al menos 2 caracteres")
      .required("Required"),
    lastName: Yup.string()
      .max(20, "Debe tener 20 letras o menos")
      .min(2, "Debe tener al menos 2 caracteres")
      .required("Required"),
    telfNumber: Yup.number().required(),
    email: Yup.string().email("Correo invalido").required("Required"),
  });

    return (validationSchema);
}
export default Validation;