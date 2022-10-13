import { Pagination, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import productApi from 'api/productApi';
import ProductFilters from 'features/Products/components/ProductFilters';
import ProductList from 'features/Products/components/ProductList';
import ProductSkeletonList from 'features/Products/components/ProductSkeletonList';
import ProductSort from 'features/Products/components/ProductSort';
import { useEffect, useState } from 'react';

function ListPage(props) {

    const [productList, setProductList] = useState([]);
    const [pagination, setPagination] = useState({
        total: 10,
        limit: 1,
        page: 1
    });
    const [filters, setFilters] = useState({
        _page: 1,
        _sort: 'salePrice:ASC',
        _limit: 9
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const { data, pagination } = await productApi.getAll(filters);
                setProductList(data);
                setPagination(pagination);
                setLoading(false);
            } catch (error) {
                console.log('Failed to fetch product list: ', error);
            }
        })();
    }, [filters]);

    const handlePageChange = (e, page) => {
        setFilters(prevState => ({
            ...prevState,
            _page: page
        }))
    }

    const handleSortChange = (newSortValue) => {
        setFilters(prevState => ({
            ...prevState,
            _sort: newSortValue,
        }))
    }

    const handleProductFilters = (newFilter) => {
        setLoading(true);
        setFilters(prevState => ({
            ...prevState,
            _page: 1,
            ...newFilter
        }))
    }

    return (
        <Box sx={{ flexGrow: 1, paddingTop: 5, paddingBottom: 5 }}>
            <Grid container spacing={2}>
                <Grid item xs={3} className="column-left">
                    <Paper elevation={0} sx={{ p: 2 }}>
                        <ProductFilters onChange={handleProductFilters} />
                    </Paper>
                </Grid>
                <Grid item xs={9} className="column-right">
                    <Paper elevation={0} sx={{ p: 1 }}>
                        <Box mb={2}>
                            <ProductSort activeSort={filters._sort} onChange={handleSortChange} />
                        </Box>
                        {loading ? <ProductSkeletonList length={9} /> : <ProductList data={productList} />}
                        <Stack spacing={2}>
                            <Pagination
                                sx={{ marginTop: 2, marginBottom: 2, display: 'flex', justifyContent: 'center' }}
                                count={Math.ceil(pagination.total / pagination.limit)}
                                page={pagination.page}
                                variant="outlined"
                                color="primary"
                                onChange={handlePageChange}
                            />
                        </Stack>
                    </Paper>
                </Grid>
            </Grid>
        </Box >
    );
}

export default ListPage;