import { useOutletContext, useNavigate } from "react-router-dom"
import RecordsDisplay from "../components/RecordsDisplay"
import ExportButton from "../components/ExportButton";

const SearchResults = () => {
    const [searchResults, setSearchResults] = useOutletContext()

    return <div>
        <div className="flex justify-between items-end mt-4">
            <p className="text-lg px-1">Search Results</p>
            <ExportButton searchResults={searchResults}/>
        </div>
        <RecordsDisplay data={searchResults}/>
    </div>
}

export default SearchResults