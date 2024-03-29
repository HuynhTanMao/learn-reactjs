import productApi from "api/productApi";
import { useEffect, useState } from "react";

export default function useProductDetail(productId) {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const result = await productApi.get(productId);
                setProduct(result);
                setLoading(false);
            } catch (error) {
                console.log("Failed to fetch product detail: ", error);
            }
            setLoading(false);
        })();
    }, [productId]);

    return { product, loading };
};