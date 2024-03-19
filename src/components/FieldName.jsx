const FieldName = ({fieldName}) => {
    // if the field is "Full Name" or "Paying Entity", set the grid-column span to 2 units to create more space for text and to match the spacing of the records below.
    return <>
         {fieldName == "Full Name" || fieldName == "Paying Entity" ?  <h1 class="font-medium text-lg col-span-2" >{fieldName}</h1> : <h1 class="font-medium text-lg" >{fieldName}</h1>}
    </>
}

export default FieldName