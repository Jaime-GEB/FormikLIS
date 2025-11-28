
import React from "react";
import { Formik, Form, FieldArray, getIn } from "formik";
import * as Yup from "yup";
import { TextField, Button, Box, CircularProgress } from "@mui/material";
import { type AgendasContacts, type Contact } from "../../../../types/agendaTypes";
import { useParams } from "react-router-dom";
import { useGetAgendasForm, useCreateContact } from '../../hooks/Agendas/useAgendasForm/useAgendasForm';
import { useTranslation } from 'react-i18next';


const MyForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const mutation = useCreateContact(id || '');
  const { data, isPending, error } = useGetAgendasForm(id ? id : '');
  const { t } = useTranslation();

  const validationSchema = Yup.object({
    contacts: Yup.array().of(
      Yup.object({
        name: Yup.string().required(t('agendas.form.validation.nameRequired')),
        phone: Yup.string().required(t('agendas.form.validation.phoneRequired')),
        email: Yup.string().email(t('agendas.form.validation.emailInvalid')).required(t('agendas.form.validation.emailRequired')),
        address: Yup.string().required(t('agendas.form.validation.addressRequired')),
        id: Yup.number().required(t('agendas.form.validation.idRequired')),
      })
    ),
  });

  const initialValues: AgendasContacts = {
    contacts:
      data?.contacts?.length
        ? data.contacts.map((c: Contact) => ({
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
  const text = id ? t('agendas.form.titleUpdate') : t('agendas.form.titleCreate');

  if (isPending) return <CircularProgress />;
  if (error) return <div>Error: {(error as Error).message}</div>;

  return (
    <>
      <h1>{text} {t('agendas.form.contacts')}</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        enableReinitialize
        onSubmit={(values) => mutation.mutate(values)}
      >
        {({ values, handleChange, handleBlur, errors, touched }) => (
          <Form>
            <Box mb={2}>
              <TextField
                defaultValue={data?.slug}
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
            <h3>{t('agendas.form.contacts')}</h3>
            <FieldArray name="contacts">
              {({ push, remove }) => {
                const { contacts } = values;
                return (
                  <div>
                    {contacts.map((contact, index) => (
                      <Box key={index}>
                        <Box>
                          <Box>
                            <TextField
                              fullWidth
                              id={`contacts.${index}.name`}
                              name={`contacts.${index}.name`}
                              label={t('agendas.form.inputs.name')}
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
                              label={t('agendas.form.inputs.telf')}
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
                              label={t('agendas.form.inputs.address')}
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
                          </Box>

                          <Button
                            variant="outlined"
                            color="error"
                            onClick={() => remove(index)}
                            style={{ marginTop: '10px' }}
                          >
                            {t('agendas.form.deleteContact')}
                          </Button>
                        </Box>

                        <Button
                          variant="outlined"
                          color="primary"
                          onClick={() =>
                            push({ name: '', phone: '', email: '', address: '', id: 0 })
                          }
                        >
                          {t('agendas.form.addContact')}
                        </Button>
                      </Box>
                    ))}
                  </div>
                );
              }}
            </FieldArray>
            <Box mt={3}>
              <Button type="submit" fullWidth variant="contained" color="success">
                {t('agendas.form.submit')}
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default MyForm;
