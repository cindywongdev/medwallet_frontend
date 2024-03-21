const Record = ({record}) => {
    return <div className="grid grid-cols-11 gap-2 px-8 py-4 items-center border-b-2 border-gray-500 last:border-none">
        <p>{record.record_id}</p>
        <p className="truncate">{record.covered_recipient_primary_type_1}</p>
        <p className="col-span-2">{record.covered_recipient_first_name} {record.covered_recipient_last_name}</p>
        <p>{record.recipient_state}</p>
        <p>{record.recipient_city}</p>
        <p className="col-span-2">{record.applicable_manufacturer_or_applicable_gpo_making_payment_name}</p>
        <p>{record.total_amount_of_payment_usdollars}</p>
        <p>{record.date_of_payment}</p>
        <p className="truncate">{record.nature_of_payment_or_transfer_of_value}</p>
    </div>
}

export default Record