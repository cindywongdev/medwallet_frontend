// import { useEffect } from "react"
import { useOutletContext, useNavigate } from "react-router-dom"
import RecordsDisplay from "../components/RecordsDisplay"
import ExportButton from "../components/ExportButton";
import { utils, write } from "xlsx";
import { saveAs } from "file-saver";

const SearchResults = () => {
    // const navigate = useNavigate()
    const [searchResults, setSearchResults] = useOutletContext()

    // The following code prevents the user from directly accessing the /search route.
    // if (searchResults.length < 1) { 
    //         console.log("searACH EMPT")
    //         navigate("/")
    // }

    const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const EXCEL_EXTENSION = '.xlsx';

    const exportToExcel = () => {
        const worksheet = utils.json_to_sheet(searchResults)
        const workbook = {
            Sheets: {
                'data': worksheet
            },
            SheetNames: ['data']
        }

        const excelBuffer = write(workbook, {bookType: 'xlsx', type: 'array'})
        saveAsExcel(excelBuffer, 'searchResults')
    }

    const saveAsExcel = (buffer, filename) => {
        const data = new Blob([buffer], { type: EXCEL_TYPE })
        saveAs(data, filename + '_export' + new Date().getTime() + EXCEL_EXTENSION)
    }

    return <div>
        <div className="flex justify-between items-end mt-4">
            <p className="text-lg px-1">Search Results</p>
            <ExportButton exportToExcel={exportToExcel}/>
        </div>
        <RecordsDisplay data={searchResults}/>
    </div>
}

export default SearchResults