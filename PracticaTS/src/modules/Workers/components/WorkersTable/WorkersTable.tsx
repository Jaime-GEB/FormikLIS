//import moment from 'moment';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
//import { useTranslation } from 'react-i18next';
import { WorkersModel } from '../../../../models/WorkersModel';
import { WorkersServices } from '../../../../services/WorkersServices/WorkersServices';

export const WorkersTable = () => {
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 130 },
        { field: 'name', headerName: 'name', width: 70 },
        { field: 'locatexApiUrl', headerName: 'locatexApiUrl', width: 160 },
        { field: 'idSociedad', headerName: 'idSociedad', width: 70 },
        { field: 'idPlanta', headerName: 'idPlanta', width: 70 },
        { field: 'updateConfig', headerName: 'updateConfig', width: 100 },
        { field: 'createdAt', headerName: 'createdAt', width: 130 },
        { field: 'updatedAt', headerName: 'updatedAt', width: 130 },
    ];

    const rows: WorkersModel[] = WorkersServices('workers','GET');
    const paginationModel = { page: 0, pageSize: 5 };
    console.log(rows)
    return (
        <Paper sx={{ height: 400, width: '100%' }}>
        <DataGrid
            getRowId={(row) => row.id}
            rows={rows}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10]}
            sx={{ border: 0 }}
        />
        </Paper>
    );
}