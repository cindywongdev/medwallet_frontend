import Record from "../components/Record"
import FieldName from "../components/FieldName"
import { useLoaderData } from "react-router-dom"

const Index = (props) => {
    const records = useLoaderData()

    const fieldNames = ["Record ID", "Recipient Type", "Full Name", "State", "City", "Paying Entity", "Amount", "Date", "Nature of Payment"]

    return <div className="index-container" class="
                border-red-500 
                border-4
                mt-8
                p-8
                w-screen
            ">

            <div className="field-names" class="
                flex
                gap-2
            ">
                {fieldNames.map((fieldName) => 
                    <FieldName fieldName={fieldName} key={fieldName}/>
                )}
            </div>

        {records.map((record) => 
            <Record record={record} key={record.record_id} />
        )}
    </div>
    {/* <h1>{records.one}</h1>
        <h1>{records.two}</h1>
        <h1>{records.query}</h1> */}

}

export default Index