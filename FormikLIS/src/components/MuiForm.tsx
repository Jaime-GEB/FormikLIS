import { useFormik } from "formik";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import * as Yup from "yup";
import type { FormikFormTypes } from "../constants/formTypes";
const MuiForm = () => {
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

  const formik = useFormik<FormikFormTypes>({
    initialValues: {
      name: null,
      lastName: null,
      telfNumber: null,
      email: null,
    },
    validationSchema: validationSchema,
    onSubmit: (values: FormikFormTypes) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Nombre"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          fullWidth
          id="lastName"
          name="lastName"
          label="Apellido"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
        />
        <TextField
          fullWidth
          id="telfNumber"
          name="telfNumber"
          label="Numero de Telefono"
          value={formik.values.telfNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.telfNumber && Boolean(formik.errors.telfNumber)}
          helperText={formik.touched.telfNumber && formik.errors.telfNumber}
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};
export default MuiForm;
