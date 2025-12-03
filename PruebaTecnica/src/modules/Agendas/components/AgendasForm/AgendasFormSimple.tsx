
import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextField, Button, Box, CircularProgress } from "@mui/material";
import { type AgendasContacts } from "../../../../types/agendaTypes";
import { useParams } from "react-router-dom";
import { useGetAgendasForm, useCreateSlug } from '../../hooks/Agendas/useAgendasForm/useAgendasForm';
import { useTranslation } from 'react-i18next';

const MyForm: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const mutation = useCreateSlug(id || '');
    const { data, isPending, error } = useGetAgendasForm(id ? id : '');
    const { t } = useTranslation();

    const createValidationSchema = Yup.object({
        slug: Yup.string().required(t('agendas.form.validation.slugRequired')),
    });

    const initialValues: AgendasContacts = {
        slug: data?.slug ?? ""
    };
    const text = id ? t('agendas.form.titleUpdate') : t('agendas.form.titleCreate');

    if (isPending) return <CircularProgress />;
    if (error) return <div>Error: {(error as Error).message}</div>;

    return (
        <>
            <h1>{text} {t('agendas.form.contacts')}</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={createValidationSchema}
                enableReinitialize
                onSubmit={(values) => {mutation.mutate(values)}}
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
