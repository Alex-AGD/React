import * as axios from "axios";

//DAL
const instance = axios.create ({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { "API-KEY": "14b1bb35-f426-48db-9776-5c30a6fd08c2" }
});

export const usersApi = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get (`users?page=${ currentPage }&count=${ pageSize }`,)
            .then (response => response.data)
    },
    follow (userId) {
        return instance.post (`follow/${ userId }`)
    },
    unfollow (userId) {
        return instance.delete (`follow/${ userId }`)
    },

    getProfile (userId) {
        return instance.get (`profile/` + userId)
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}

