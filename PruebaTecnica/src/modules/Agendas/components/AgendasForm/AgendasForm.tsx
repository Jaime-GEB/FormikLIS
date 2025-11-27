
import React from "react";
import { Formik, Form, FieldArray, getIn } from "formik";
import * as Yup from "yup";
import { TextField, Button, Box, CircularProgress} from "@mui/material";
import { type Contact } from "../../../../types/agendaTypes";
import { useParams } from "react-router-dom";
import { useAgendasForm } from "../../hooks/Agendas/useAgendasForm/useAgendasForm";

interface FormValues {
  slug: string;
  contacts: Contact[];
}

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

const MyForm: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { data, isPending, error } = useAgendasForm(id);

    
const initialValues: FormValues = {
  slug: data?.slug ?? "",
  contacts:
    data?.contacts?.length
      ? data.contacts.map((c:Contact) => ({
          name: c.name ?? "",
          phone: c.phone ?? "",
          email: c.email ?? "",
          address: c.address ?? "",
          id: typeof c.id === "number" ? c.id : Number(c.id ?? 0),
        }))
      : [
          {
            name: "",
            phone: "",
            email: "",
            address: "",
            id: "" as unknown as number, 
          },
        ],
};


    if (isPending) return <CircularProgress />;
    if (error) return <div>Error: {(error as Error).message}</div>;
    const text = id ? 'Actualizar' : 'Crear';
    console.log(id);

    return (
        <>
            <h1>{text} Contactos</h1>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values) => console.log(values)}
            >
              {({ values, handleChange, handleBlur, errors, touched }) => (
                <Form>
                  <Box mb={2}>
                    <TextField
                      fullWidth
                      id="slug"
                      name="slug"
                      label="Slug"
                      value={values.slug}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.slug && Boolean(errors.slug)}
                      helperText={touched.slug && errors.slug}
                    />
                  </Box>

                  <FieldArray name="contacts">
                        {() => {
                            const { contacts } = values;

                            return (
                                <div>

                                    {contacts.map((contact, index) => (
                                        <div key={index}>
                                            <TextField
                                                fullWidth
                                                id={`contacts.${index}.name`}
                                                name={`contacts.${index}.name`}
                                                label="Nombre Contacto"
                                                value={values.contacts[index].name}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={Boolean(getIn(touched, `contacts.${index}.name`) && getIn(errors, `contacts.${index}.name`))}
                                                helperText={getIn(touched, `contacts.${index}.name`) && getIn(errors, `contacts.${index}.name`) ? String(getIn(errors, `contacts.${index}.name`)) : undefined}
                                                margin="normal"
                                            />
                                            <TextField
                                                fullWidth
                                                id={`contacts.${index}.phone`}
                                                name={`contacts.${index}.phone`}
                                                label="Teléfono"
                                                value={values.contacts[index].phone}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={Boolean(getIn(touched, `contacts.${index}.phone`) && getIn(errors, `contacts.${index}.phone`))}
                                                helperText={getIn(touched, `contacts.${index}.phone`) && getIn(errors, `contacts.${index}.phone`) ? String(getIn(errors, `contacts.${index}.phone`)) : undefined}
                                                margin="normal"
                                            />
                                            <TextField
                                                fullWidth
                                                id={`contacts.${index}.email`}
                                                name={`contacts.${index}.email`}
                                                label="Email"
                                                value={values.contacts[index].email}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={Boolean(getIn(touched, `contacts.${index}.email`) && getIn(errors, `contacts.${index}.email`))}
                                                helperText={getIn(touched, `contacts.${index}.email`) && getIn(errors, `contacts.${index}.email`) ? String(getIn(errors, `contacts.${index}.email`)) : undefined}
                                                margin="normal"
                                            />
                                            <TextField
                                                fullWidth
                                                id={`contacts.${index}.address`}
                                                name={`contacts.${index}.address`}
                                                label="Dirección"
                                                value={values.contacts[index].address}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={Boolean(getIn(touched, `contacts.${index}.address`) && getIn(errors, `contacts.${index}.address`))}
                                                helperText={getIn(touched, `contacts.${index}.address`) && getIn(errors, `contacts.${index}.address`) ? String(getIn(errors, `contacts.${index}.address`)) : undefined}
                                                margin="normal"
                                            />
                                            <TextField
                                                fullWidth
                                                id={`contacts.${index}.id`}
                                                name={`contacts.${index}.id`}
                                                label="ID"
                                                type="number"
                                                value={values.contacts[index].id}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={Boolean(getIn(touched, `contacts.${index}.id`) && getIn(errors, `contacts.${index}.id`))}
                                                helperText={getIn(touched, `contacts.${index}.id`) && getIn(errors, `contacts.${index}.id`) ? String(getIn(errors, `contacts.${index}.id`)) : undefined}
                                                margin="normal"
                                            />
                                        </div>
                                    ))}
                                </div>
                            );
                        }}
                    </FieldArray>

                  <Box mt={3}>
                    <Button type="submit"fullWidth variant="contained" color="success">
                      Enviar
                    </Button>
                  </Box>
                </Form>
              )}
            </Formik>
        </>
    );
};

export default MyForm;
