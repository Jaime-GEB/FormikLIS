import { DataGrid, type GridColDef, type GridCellParams  } from '@mui/x-data-grid';
import CircularProgress from '@mui/material/CircularProgress';
import { Toolbar, Button, Box} from '@mui/material';
import {useAgendaService, useDeleteContact} from '../../hooks/Agendas/useAgendas/useAgendaService';
import  { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

const AgendasTable: React.FC = () => {
    const { data, isPending, error } = useAgendaService();
    const navigate = useNavigate();

    const { t } = useTranslation();
    
    const mutation = useDeleteContact();


    const columns: GridColDef[] = [
        { 
            field: 'id', 
            headerName: t('agendas.table.id'),
            flex :1,
            headerAlign: 'center',
            align: 'center'
        },
        { 
            field: 'slug', 
            headerName: t('agendas.table.slug'), 
            flex :1,
            headerAlign: 'center',
            align: 'center'
        },
        {
          field: 'actions', 
          headerName: t('agendas.table.actions'), 
          flex :1,
          sortable: false, 
          headerAlign: 'center',
          align: 'center',
          renderCell: (params) => {
                return (
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => mutation.mutate(params.row.slug)}
                  >
                   {t('agendas.table.delete')}
                  </Button>
                );
            },
        }

    ]

    const buttonHandleClick = () => {
        console.log('Redirecting to /agendas/new');
        return navigate('/agendas/new');
    }
    console.log(data);
    if (isPending) return <CircularProgress />;
    if (error) return <div>Error: {(error as Error).message}</div>;
    
    
    const handleCellDoubleClick = (params: GridCellParams) => {
        const rowId = params.row.slug; 
        navigate(`/agendas/${rowId}`, { state: { row: params.row } });
    }
    return (
        <Box sx={{ display: "flex", justifyContent: "center", flexDirection:"column" }}>
            <Toolbar sx={{ display: "flex", justifyContent: "end", width:"85%" }}>
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
                onCellDoubleClick={handleCellDoubleClick}
                sx={{
                    bgcolor: 'white',
                    width:"75%",
                    alignSelf:"center",
                    borderRadius: 2,
                    boxShadow: 3,
                    '& .MuiDataGrid-columnHeaders': {
                      fontSize: '1rem',
                      fontWeight:'Bold'
                    },
                    '& .MuiDataGrid-cell': {
                      fontSize: '0.9rem'
                    }
                }}

            />
        </Box>
    );
}

export default AgendasTable