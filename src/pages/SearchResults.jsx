// import { useEffect } from "react"
import { useOutletContext, useNavigate } from "react-router-dom"
import RecordsDisplay from "../components/RecordsDisplay"
import { TbDownload } from "react-icons/tb";

const SearchResults = () => {
    // const navigate = useNavigate()
    const [searchResults, setSearchResults] = useOutletContext()

    // The following code prevents the user from directly accessing the /search route.
    // if (searchResults.length < 1) { 
    //         console.log("searACH EMPT")
    //         navigate("/")
    // }

    return <div>
        <div className="flex justify-between items-center mt-4">
            <p className="text-lg px-1">Search Results</p>

            
            <button className="hover:bg-blue-600 hover:text-white transition-colors">
                <div className="flex items-center gap-2">
                    Export to Excel <TbDownload size={20}/>
                </div>
            </button>
        </div>
        <RecordsDisplay data={searchResults}/>
    </div>
}

export default SearchResults