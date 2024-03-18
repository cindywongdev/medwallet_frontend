import Record from "../components/Record"
import { useLoaderData } from "react-router-dom"

const Index = (props) => {
    const response_json = useLoaderData()
    const records = response_json["results"]
    console.log("THIS IS RESULTS")
    console.log(records)

    return <>
        {records.map((record) => {
            return <Record record={record} key={record.record_id}/>
        })}
    </>
        {/* <h1>{records.one}</h1>
        <h1>{records.two}</h1>
        <h1>{records.query}</h1> */}
    
}

export default Index