import Record from "../components/Record"
import FieldName from "../components/FieldName"
import { useLoaderData } from "react-router-dom"

const Index = (props) => {
    const records = useLoaderData()

    const fieldNames = ["Record ID", "Recipient Type", "Full Name", "State", "City", "Paying Entity", "Amount", "Date", "Nature of Payment"]

    return <div className="index-container" class="
                border-2
                border-black
                w-full
                mt-8
                rounded-2xl
            ">

            <div className="field-names" class="
                grid
                grid-cols-11
                w-full
                gap-2
                px-8
                py-4
                rounded-t-2xl
                bg-gray-200
            ">
                {fieldNames.map((fieldName) => 
                    <FieldName fieldName={fieldName} key={fieldName} />
                )}
            </div>

            <div className="records" class="
                flex
                flex-col
            ">
                {records.map((record) => 
            <Record record={record} key={record.record_id}/>
        )}
            </div>

    </div>
    {/* <h1>{records.one}</h1>
        <h1>{records.two}</h1>
        <h1>{records.query}</h1> */}

}

export default Index