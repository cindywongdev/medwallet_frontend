// import { useEffect } from "react"
import { useOutletContext, useNavigate } from "react-router-dom"
import RecordsDisplay from "../components/RecordsDisplay"

const SearchResults = () => {
    // const navigate = useNavigate()
    const [searchResults, setSearchResults] = useOutletContext()

    // The following code prevents the user from directly accessing the /search route.
    // if (searchResults.length < 1) { 
    //         console.log("searACH EMPT")
    //         navigate("/")
    // }

    return <RecordsDisplay data={searchResults}/>
}

export default SearchResults