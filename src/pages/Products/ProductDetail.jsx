import { Box, Grid, Paper } from '@mui/material';
import { addToCart, showMiniCart } from 'features/Cart/cartSlice';
import AddToCartForm from 'features/Products/components/AddToCartForm';
import ProductAdditional from 'features/Products/components/ProductAdditional';
import ProductDescription from 'features/Products/components/ProductDescription';
import ProductInfo from 'features/Products/components/ProductInfo';
import ProductInfoMenu from 'features/Products/components/ProductInfoMenu';
import ProductReviews from 'features/Products/components/ProductReviews';
import ProductThumbnail from 'features/Products/components/ProductThumbnail';
import useProductDetail from 'features/Products/hooks/useProductDetail';
import { useDispatch } from 'react-redux';
import { Outlet, Route, Router, Routes, useParams } from 'react-router-dom';



function ProductDetail() {
    const dispatch = useDispatch();
    const { productId } = useParams();
    const { product, loading } = useProductDetail(productId);
    if (loading) {
        return <Box>Loading...</Box>
    }

    const handleAddToCartForm = ({ quantity }) => {

        const cartItem = {
            id: productId,
            product: {
                name: product.name,
                salePrice: product.salePrice
            },
            quantity
        }

        const actionAddToCart = addToCart(cartItem);
        dispatch(actionAddToCart);

        dispatch(showMiniCart());
    }

    return (
        <Box sx={{
            flexGrow: 1,
            paddingTop: 5,
            paddingBottom: 5,
            ".product-thumbnail-wrap": {
                p: 2,
                borderRight: '1px solid #f6f6f6'
            },
            ".product-info-wrap": {
                p: 2
            }
        }}>
            <Paper elevation={0}>
                <Grid container>
                    <Grid item xs={4} className="product-thumbnail-wrap">
                        <ProductThumbnail product={product} />
                    </Grid>
                    <Grid item xs={8} className="product-info-wrap">
                        <ProductInfo product={product}></ProductInfo>
                        <AddToCartForm onSubmit={handleAddToCartForm} />
                    </Grid>
                </Grid>
            </Paper>
            <ProductInfoMenu />

            <Routes>
                <Route path="" element={<ProductDescription product={product} />} />
                <Route path="additional" element={<ProductAdditional product={product} />} />
                <Route path="reviews" element={<ProductReviews product={product} />} />
            </Routes>

            <Outlet />
        </Box>
    );
}

export default ProductDetail;