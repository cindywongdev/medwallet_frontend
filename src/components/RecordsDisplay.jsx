import Record from "../components/Record"
import FieldName from "../components/FieldName"

const RecordsDisplay = ({data}) => {
    console.log("RECORDS DISPLAY DATA: ", data)

    const fieldNames = ["Record ID", "Recipient Type", "Full Name", "State", "City", "Paying Entity", "Amount ($)", "Date", "Nature of Payment"]

    return <>
        <div className="
                index-container
                border-2
                border-black
                w-full
                min-h-screen
                my-8
                rounded-2xl
            ">

            <div className="
                field-names
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

            <div className="
                records
                flex
                flex-col
            ">
                {data.map((record) =>
                    <Record record={record} key={record.record_id} />
                )}
            </div>
        </div>
    </>
}

export default RecordsDisplay