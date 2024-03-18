const URL = "https://medwallet-backend.onrender.com/"

export const indexLoader = async () => {
    const response = await fetch(URL + "/data")
    // const response = await fetch(URL + "/params/testinggg/ilovecheese?cheese=friedgouda")
    const response_json = await response.json()
    // const records = response2["results"]
    // console.log(records)
    
    return response_json
}