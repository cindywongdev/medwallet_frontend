import { useOutletContext } from "react-router-dom"
import RecordsDisplay from "../components/RecordsDisplay"

const SearchResults = () => {
    const [searchResults, setSearchResults] = useOutletContext()
    console.log(searchResults)

    return <RecordsDisplay data={searchResults}/>
}

export default SearchResults