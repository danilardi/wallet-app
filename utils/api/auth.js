import Api from "../Api";

export async function login({ username, password }) {
    try {
        const res = await Api.get("/users");
        const users = res.data
        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            return user
        } else {
            throw new Error("Invalid username or password");
        }
    } catch (error) {
        console.error("Error in login:", error);
        throw error;
    }
}

export async function getDetailUser() {
    try {
        const res = await Api.get("/user");
        if (res) {
            return res
        }
    } catch (error) {
        console.error("Error in getDetailUser:", error);
        throw error;
    }
}