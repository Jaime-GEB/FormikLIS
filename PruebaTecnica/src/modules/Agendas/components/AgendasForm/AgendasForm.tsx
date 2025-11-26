import { useFormik } from "formik";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import * as Yup from "yup";
import { type AgendasContacts } from "../../../../types/agendaTypes";

interface AgendasFormProps {
  initialValues: AgendasContacts[];
  onSubmit: (values: AgendasContacts[]) => void;
}
const AgendasForm: React.FC<AgendasFormProps[]> = () => {
    const formik = useFormik<AgendasContacts[]>({
        initialValues: {
            slug: '',
        },
    })
}
export default AgendasForm;