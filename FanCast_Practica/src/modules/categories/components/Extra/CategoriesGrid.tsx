import { Box, Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'


const CategoriesGrid = () => {
    const navigate = useNavigate()

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 6, sm: 1, md: 4 }}>

                <Grid key="Videogames" size={{ xs: 2, sm: 4, md: 4 }}>
                    <Box
                        sx={{
                            backgroundColor: "primary.main",
                            padding: 10,
                            borderRadius: 2,
                            textAlign: "center",
                            fontWeight: "bold"
                        }}
                        onClick={() => navigate(`/search_items/Video_Games`)}
                    >
                        <h2>Videogames</h2>
                    </Box>
                </Grid>
                <Grid key="Books" size={{ xs: 2, sm: 4, md: 4 }}>
                    <Box
                        sx={{
                            backgroundColor: "primary.main",
                            padding: 10,
                            borderRadius: 2,
                            textAlign: "center",
                            fontWeight: "bold"
                        }}
                        onClick={() => navigate(`/search_items/Books`)}
                    >
                        <h2>Books</h2>
                    </Box>
                </Grid>
                <Grid key="Films" size={{ xs: 2, sm: 4, md: 4 }}>
                    <Box
                        sx={{
                            backgroundColor: "primary.main",
                            padding: 10,
                            borderRadius: 2,
                            textAlign: "center",
                            fontWeight: "bold"
                        }}
                        onClick={() => navigate(`/search_items/Films`)}
                    >
                        <h2>Films</h2>
                    </Box>
                </Grid>
                <Grid key="TV_Series" size={{ xs: 2, sm: 4, md: 4 }}>
                    <Box
                        sx={{
                            backgroundColor: "primary.main",
                            padding: 10,
                            borderRadius: 2,
                            textAlign: "center",
                            fontWeight: "bold"
                        }}
                        onClick={() => navigate(`/search_items/TV_series`)}
                    >
                        <h2>TV Series</h2>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}
export default CategoriesGrid