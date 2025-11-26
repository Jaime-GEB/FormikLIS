import { useFormik } from "formik";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import * as Yup from "yup";
import { type AgendasContacts } from "../../../../types/agendaTypes";


const initialValues: AgendasContacts = {
  slug: "",
  contacts: [
    { name: "", phone: "", email: "", address: "", id: 0 }
  ],
};

const validationSchema = Yup.object({
  slug: Yup.string().required("Slug es obligatorio"),
  contacts: Yup.array().of(
    Yup.object({
      name: Yup.string().required("Nombre requerido"),
      phone: Yup.string().required("Teléfono requerido"),
      email: Yup.string().email("Email inválido").required("Email requerido"),
      address: Yup.string().required("Dirección requerida"),
      id: Yup.number().required("ID requerido"),
    })
  ),
});

const AgendasForm: React.FC = () => {
    const formik = useFormik<AgendasContacts>({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log("Form data", values);
        }
    })
    return(
        <form onSubmit={formik.handleSubmit}>
            <TextField
                fullWidth
                id="slug"
                name="slug"
                label="Slug"
                value={formik.values.slug}
                onChange={formik.handleChange}
                error={formik.touched.slug && Boolean(formik.errors.slug)}
                helperText={formik.touched.slug && formik.errors.slug}
            />
            <TextField
                fullWidth
                id="name"
                name="name"
                label="Nombre Contacto"
                value={formik.values.contacts[0].name}
                onChange={formik.handleChange}
            />
            <TextField
                fullWidth
                id="phone"
                name="phone"
                label="Phone"
                value={formik.values.contacts[0].phone}
                onChange={formik.handleChange}
            />
            <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                value={formik.values.contacts[0].email}
                onChange={formik.handleChange}
            />
            <TextField
                fullWidth
                id="address"
                name="address"
                label="Address"
                value={formik.values.contacts[0].address}
                onChange={formik.handleChange}
            />
            <TextField
                fullWidth
                id="id"
                name="id"
                label="ID"
                value={formik.values.contacts[0].id}
                onChange={formik.handleChange}
            />
            <Button color="primary" variant="contained" fullWidth type="submit">
                Submit
            </Button>
        </form>
    )
}
export default AgendasForm;