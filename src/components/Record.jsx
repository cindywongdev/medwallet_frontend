const Record = ({record}) => {
    // the covered_recipient_type field always starts with "Covered Recipient" (e.g. Covered Recipient Physician, Covered Recipient Non-Physician) regardless of the type, so this function shortens the field to only the necessary info
    const shortenRecipientType = (recipientType) => {
        return recipientType.slice(18)
    }

    return <div class="grid grid-cols-11 gap-2 px-8 py-4 items-center border-b-2 border-gray-500 last:border-none">
        <p>{record.record_id}</p>
        <p >{shortenRecipientType(record.covered_recipient_type)}</p>
        <p class="col-span-2">{record.covered_recipient_first_name} {record.covered_recipient_last_name}</p>
        <p>{record.recipient_state}</p>
        <p>{record.recipient_city}</p>
        <p class="col-span-2">{record.applicable_manufacturer_or_applicable_gpo_making_payment_name}</p>
        <p>{record.total_amount_of_payment_usdollars}</p>
        <p>{record.date_of_payment}</p>
        <p>{record.nature_of_payment_or_transfer_of_value}</p>
    </div>
}

export default Record