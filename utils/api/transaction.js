import Api from "../Api"

export async function getTransaction({ query }) {
    try {
        const res = await Api.get("/transactions", {
            params: {
                q: query
            },
        })
        return res
    } catch (error) {
        console.error("Error in getTransaction:", error)
        throw error
    }
}