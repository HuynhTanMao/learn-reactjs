import axiosClient from "./axiosClient";

const userApi = {

    getAll(params) {
        const url = '/users';
        return axiosClient.get(url, { params });
    },

    get(id) {
        const url = `/users/${id}`;
        return axiosClient.get(url);
    },

    add(data) {
        const url = '/auth/local/register';
        return axiosClient.post(url, { data });
    },

    register(data) {
        const url = '/auth/local/register';
        return axiosClient.post(url, { data });
    },

    update(id, data) {
        const url = '/users';
        return axiosClient.patch(url, { data });
    },

    remove(id) {
        const url = `/users/${id}`;
        return axiosClient.delete(url);
    }

}

export default userApi;