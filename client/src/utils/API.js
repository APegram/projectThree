import axios from "axios";

export default {
    createUser: userInfo => {
        axios.post("/users", {
            id: userInfo.email,
            username: userInfo.fullName
        }).then(response => console.log(response))
        .catch(err => console.log("Chat err: ", err))
        return axios.post("/auth/signup", userInfo);
    },
    verifyUser: userInfo => {
        return axios.post("/auth/login", userInfo)
    },
    googleLogin: () => {
        return axios.get("/auth/google")
    }
}