import { FaMagnifyingGlass } from "react-icons/fa6";

const SearchBar = (props) => {
    const handleSearch = (e) => {
        console.log("HIIEIJFKSDF")
        e.preventDefault()
        e.isDefaultPrevented()
    }

    return <div className="flex items-center gap-6 px-4">
        <FaMagnifyingGlass size={25}/>
        <label htmlFor="search_query" className="text-lg">Search:</label>
        <form onSubmit={handleSearch} method="GET" id="search_form" className="flex gap-4">
            <input type="text" id="search_query" name="search_query" required minLength="1" placeholder="type here..." className="
                border-2
                border-gray-600
                bg-white
                rounded-lg
                p-2
                w-72
            "/>

            <button type="submit" form="search_form" value="Submit" className="border-1 border-gray-300">Submit</button>
        </form>
    </div>
}

export default SearchBar