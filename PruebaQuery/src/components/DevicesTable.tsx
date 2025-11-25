import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import {useAndroidDevices} from '../services/useAndroidDevices'
 
const DevicesTable = () => {
    const { data, isPending, error } = useAndroidDevices();

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 130 },
        { field: 'name', headerName: 'name', width: 70 },
        { field: 'locatexApiUrl', headerName: 'locatexApiUrl', width: 160 },
        { field: 'idSociedad', headerName: 'idSociedad', width: 70 },
        { field: 'idPlanta', headerName: 'idPlanta', width: 70 },
        { field: 'updateConfig', headerName: 'updateConfig', width: 100 },
        { field: 'createdAt', headerName: 'createdAt', width: 130 },
        { field: 'updatedAt', headerName: 'updatedAt', width: 130 },
    ]
    
    if (isPending) return <CircularProgress />;
    if (error) return <div>Error: {(error as Error).message}</div>;
    
    return (
        <Paper sx={{ height: 400, width: '100%' }}>
            <DataGrid
                getRowId={(row) => row.id}
                rows={data ?? []}
                columns={columns}
                initialState={{ pagination: { paginationModel: { pageSize: 5, page: 0 } } }}
                pageSizeOptions={[5, 10]}
                sx={{ border: 0 }}
            />
        </Paper>  
    );
}

export default DevicesTable