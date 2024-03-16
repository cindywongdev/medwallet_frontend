const URL = "https://medwallet-backend.onrender.com/"

export const indexLoader = async () => {
    const response = await fetch(URL + "/params/testinggg/ilovecheese?cheese=friedgouda")
    const records = await response.json()
    return records
}