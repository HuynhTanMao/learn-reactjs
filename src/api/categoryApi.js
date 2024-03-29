import axiosClient from "./axiosClient";

const categoryApi = {

    getAll(params) {
        const url = '/categories';
        return axiosClient.get(url, { params });
    },

    get(id) {
        const url = `/categories/${id}`;
        return axiosClient.get(url);
    },

    add(id, data) {
        const url = '/categories';
        return axiosClient.post(url, { data });
    },

    update(id, data) {
        const url = '/categories';
        return axiosClient.patch(url, { data });
    },

    remove(id) {
        const url = `/categories/${id}`;
        return axiosClient.delete(url);
    }

}

export default categoryApi;