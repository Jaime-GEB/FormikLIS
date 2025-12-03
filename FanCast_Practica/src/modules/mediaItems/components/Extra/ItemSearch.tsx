import { Box, TextField, Button } from '@mui/material'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'

const ItemSearch: React.FC = () => {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            search: ""
        },
        onSubmit: (values) => {
            navigate(`/mediaItems/${values.search}`)
        }
    })
    return (
        <Box>
            <TextField
                label="Search"
                variant="outlined"
                value={formik.values.search}
                onChange={formik.handleChange}
            />
            <Button type="submit">Search</Button>
        </Box>
    )
}
export default ItemSearch

