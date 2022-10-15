import { Pagination, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import productApi from 'api/productApi';
import ProductFilters from 'features/Products/components/ProductFilters';
import ProductList from 'features/Products/components/ProductList';
import ProductSkeletonList from 'features/Products/components/ProductSkeletonList';
import ProductSort from 'features/Products/components/ProductSort';
import FilterViewer from 'features/Products/FilterViewer';
import { useEffect, useMemo, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import * as queryString from "query-string";
function ListPage(props) {

    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const queryParams = useMemo(() => {
        const params = queryString.parse(location.search);
        return {
            ...params,
            _page: Number.parseInt(searchParams.get("_page")) || 1,
            _sort: searchParams.get("_sort") || 'salePrice:ASC',
            _limit: Number.parseInt(searchParams.get("_limit")) || 9,
            isFreeShip: searchParams.get("isFreeShip") === 'true',
            isPromotion: searchParams.get("isPromotion") === 'true',
        }
    }, [location.search]);

    const [productList, setProductList] = useState([]);
    const [pagination, setPagination] = useState({
        total: 10,
        limit: 1,
        page: 1
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const tempFilter = { ...queryParams };
                delete tempFilter.categoryName;
                if (!tempFilter.isPromotion) delete tempFilter.isPromotion;
                if (!tempFilter.isFreeShip) delete tempFilter.isFreeShip;
                const { data, pagination } = await productApi.getAll(tempFilter);
                setProductList(data);
                setPagination(pagination);
                setLoading(false);
            } catch (error) {
                console.log('Failed to fetch product list: ', error);
            }
        })();
    }, [queryParams]);

    const handlePageChange = (e, page) => {
        // setFilters(prevState => ({
        //     ...prevState,
        //     _page: page
        // }))

        const filters = {
            ...queryParams,
            _page: page
        }
        setSearchParams(filters);
    }

    const handleSortChange = (newSortValue) => {
        // setFilters(prevState => ({
        //     ...prevState,
        //     _sort: newSortValue,
        // }))

        const filters = {
            ...queryParams,
            _sort: newSortValue
        }
        setSearchParams(filters);
    }

    const handleProductFilters = (newFilter) => {
        setLoading(true);
        // setFilters(prevState => ({
        //     ...prevState,
        //     _page: 1,
        //     ...newFilter
        // }))

        const filters = {
            ...queryParams,
            _page: 1,
            ...newFilter
        }
        setSearchParams(filters);
    }

    const handleFiltersChange = (newFilter) => {
        // setFilters(newFilter);
        setSearchParams(newFilter);
    }

    return (
        <Box sx={{ flexGrow: 1, paddingTop: 5, paddingBottom: 5 }}>
            <Grid container spacing={2}>
                <Grid item xs={3} className="column-left">
                    <Paper elevation={0} sx={{ p: 2 }}>
                        <ProductFilters filters={queryParams} onChange={handleProductFilters} />
                    </Paper>
                </Grid>
                <Grid item xs={9} className="column-right">
                    <Paper elevation={0} sx={{ p: 1 }}>
                        <Box mb={2}>
                            <ProductSort activeSort={queryParams._sort} onChange={handleSortChange} />
                        </Box>
                        <FilterViewer filters={queryParams} onChange={handleFiltersChange} />
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