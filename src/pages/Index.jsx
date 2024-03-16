import Record from "../components/Record"
import { useLoaderData } from "react-router-dom"

const Index = (props) => {
    const records = useLoaderData()

    return <>
        {/* <h1>{records.response}</h1> */}
        <h1>{records.one}</h1>
        <h1>{records.two}</h1>
        <h1>{records.query}</h1>
    </>
}

export default Index