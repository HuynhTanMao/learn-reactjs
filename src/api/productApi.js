import axiosClient from "./axiosClient";

const productApi = {

    async getAll(params) {
        // Transform _page to _start
        const newParams = {
            ...params,
            _start: (!params._page || params._page <= 1) ? 0 : (params._page - 1) * (params._limit || 50),
        };
        // Remove un-needed key
        delete newParams._page;

        const productList = await axiosClient.get('/products', { params: newParams });

        const count = await axiosClient.get('/products/count', { params: newParams });

        return {
            data: productList,
            pagination: {
                page: (!params._page || params._page <= 1) ? 1 : params._page,
                limit: params._limit,
                total: count
            }
        }
    },

    get(id) {
        const url = `/products/${id}`;
        return axiosClient.get(url);
    },

    add(id, data) {
        const url = '/products';
        return axiosClient.post(url, { data });
    },

    update(id, data) {
        const url = '/products';
        return axiosClient.patch(url, { data });
    },

    remove(id) {
        const url = `/products/${id}`;
        return axiosClient.delete(url);
    }

}

export default productApi;