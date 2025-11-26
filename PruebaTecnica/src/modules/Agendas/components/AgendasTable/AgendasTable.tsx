import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import CircularProgress from '@mui/material/CircularProgress';
import {useAgendaService} from '../../../../services/Agendas/useAgendaService';

const AgendasTable: React.FC = () => {
     const { data, isPending, error } = useAgendaService();

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID'},
        { field: 'slug', headerName: 'slug'},
    ]
    console.log(data);
    if (isPending) return <CircularProgress />;
    if (error) return <div>Error: {(error as Error).message}</div>;
    
    return (
        <DataGrid
            getRowId={(row) => row.id}
            rows={data?.agendas ?? []}
            columns={columns}
            initialState={{ pagination: { paginationModel: { pageSize: 5, page: 0 } } }}
            pageSizeOptions={[5, 10]}
            sx={{ border: 0 }}
        />
    );
}

export default AgendasTable