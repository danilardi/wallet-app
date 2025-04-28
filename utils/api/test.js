import Api from "../Api";

export const testApi = async () => {
    try {
        const res = await Api.get("");

        if (res) {
            console.log("API response:", res);
            return res;
        }
    } catch (error) {
        console.error("Error in testApi:", error)
        throw error
    }
}

export async function getData() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Respoin status: ${response.status}`);
        }

        const json = await response.json();
        console.log("Data fetched:", json);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
    
}

export const postData = async (data) => {
    try {
        const url = "https://jsonplaceholder.typicode.com/posts";
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log("Data posted:", json);
    } catch (error) {
        console.error("Error in postData:", error)
        throw error
    }
}