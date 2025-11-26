import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import CircularProgress from '@mui/material/CircularProgress';
import { Toolbar, Button} from '@mui/material';
import {useAgendaService} from '../../../../services/Agendas/useAgendaService';
import  { useNavigate } from 'react-router-dom'

const AgendasTable: React.FC = () => {
    const { data, isPending, error } = useAgendaService();
    const navigate = useNavigate();

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID'},
        { field: 'slug', headerName: 'slug'},
    ]

    const buttonHandleClick = () => {
        console.log('Redirecting to /agendas/new');
        return navigate('/agendas/new');
    }
    console.log(data);
    if (isPending) return <CircularProgress />;
    if (error) return <div>Error: {(error as Error).message}</div>;
    
    return (
        <>
            <Toolbar sx={{ display: "flex", justifyContent: "end" }}>
                <Button
                    size='medium'
                    onClick={buttonHandleClick}
                >
                  +
                </Button>
            </Toolbar>

            <DataGrid
                getRowId={(row) => row.id}
                rows={data?.agendas ?? []}
                columns={columns}
                initialState={{ pagination: { paginationModel: { pageSize: 5, page: 0 } } }}
                pageSizeOptions={[5, 10]}
            />
        </>
    );
}

export default AgendasTable