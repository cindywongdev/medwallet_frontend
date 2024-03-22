// import { useEffect } from "react"
import { useOutletContext, useNavigate } from "react-router-dom"
import RecordsDisplay from "../components/RecordsDisplay"
import ExportButton from "../components/ExportButton";

const SearchResults = () => {
    // const navigate = useNavigate()
    const [searchResults, setSearchResults] = useOutletContext()

    // The following code prevents the user from directly accessing the /search route.
    // if (searchResults.length < 1) { 
    //         console.log("searACH EMPT")
    //         navigate("/")
    // }

    return <div>
        <div className="flex justify-between items-end mt-4">
            <p className="text-lg px-1">Search Results</p>
            <ExportButton searchResults={searchResults}/>
        </div>
        <RecordsDisplay data={searchResults}/>
    </div>
}

export default SearchResults