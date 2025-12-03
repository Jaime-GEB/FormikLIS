//https://en.wikipedia.org/w/api.php?action=query&generator=categorymembers&gcmtitle=Category:{category}&gcmlimit=max&prop=pageimages&piprop=original&format=json&origin=*
import useGetCategories from '../../hooks/useGetBooks'
import { Box, Grid, Pagination } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const ItemsGrid = () => {
    const { category } = useParams<{ category: string }>()
    const { data, isPending, error } = useGetCategories(category || "");
    const [page, setPage] = useState(1);
    const navigate = useNavigate()

    const ITEMS_PER_PAGE = 9
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginatedItems = data?.slice(startIndex, endIndex);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {paginatedItems?.map((item, index) => (
                    <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "center",
                                fontWeight: "bold"
                            }}
                            onClick={() => navigate(`/mediaItems/${item.title}`)}
                        >
                            <h2>{item.title}</h2>
                        </Box>
                    </Grid>
                ))}
            </Grid>

            <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                <Pagination
                    count={Math.ceil((data?.length || 0) / ITEMS_PER_PAGE)}
                    page={page}
                    onChange={handleChange}
                    color="primary"
                />
            </Box>

        </Box>
    );
}
export default ItemsGrid