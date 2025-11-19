import * as Yup from 'yup' 
import "yup-phone"
import MuiForm from './MuiForm'
import FormikFormTypes from '../constants/formTypes'
type validationTypes= typeof FormikFormTypes

const ValidatedForm =()=>{

  const validationSchema= Yup.object({
    name: Yup
      .string()
      .max(15, 'Debe tener 15 letras o menos')
      .min(2, "Debe tener al menos 2 caracteres")
      .required('Required'),
    lastName: Yup
      .string()
      .max(20, 'Debe tener 20 letras o menos')
      .min(2, "Debe tener al menos 2 caracteres")
      .required('Required'),
    telfNumber: Yup
      .number()
      .max(12, 'Debe tener 15 letras o menos')
      .min(9, "Debe tener al menos 2 caracteres")
      .required('required'),
    email: Yup
      .string()
      .email('Correo invalido')
      .required('Required'),
  });  

  return (
    <MuiForm validationSchema={validationSchema}/>
    
  )  
};

export default ValidatedForm;