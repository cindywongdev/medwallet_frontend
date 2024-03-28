import { FaMagnifyingGlass } from "react-icons/fa6";
import TypaheadMatchesDisplay from "./TypaheadMatchesDisplay";

const SearchBar = ({ onRecipTypeQChange, handleSearch, setRecipTypeQ, typaheadMatches }) => {
    const input = document.querySelector("input")

    const handleMatchClick = (e) => {
        input.value = e.target.innerHTML
        setRecipTypeQ(e.target.innerHTML)
    }

    return <div className="flex items-center gap-6 px-4 relative">
        <FaMagnifyingGlass size={25} />
        <label htmlFor="search_form" className="text-lg font-medium">Search:</label>
        <form data-test="search-form" onSubmit={handleSearch} method="GET" id="search_form" className="flex gap-4">
            <input onChange={onRecipTypeQChange} type="text" id="recipTypeQ" name="recipTypeQ" required minLength="1" placeholder="search by recipient type..." autoComplete="off" className="
                peer
                border-2
                border-gray-600
                bg-white
                rounded-lg
                p-2
                w-72
                z-10
            "/>

            <TypaheadMatchesDisplay typaheadMatches={typaheadMatches} handleMatchClick={handleMatchClick}/>

            <button data-test="submit-button" type="submit" form="search_form" value="Submit" className="hover:text-white hover:bg-gray-600 hover:border-gray-600 transition-colors">Submit</button>
        </form>
    </div>
}

export default SearchBar