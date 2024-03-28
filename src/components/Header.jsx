import SearchBar from "./SearchBar"

const Header = ({onRecipTypeQChange, handleSearch, recipTypeQ, typaheadMatches, setTypaheadMatches}) => {
    return <header className="flex justify-between items-center mb-4">
        <a href="/"><h1 className="font-bold text-7xl text-black" >medwallet</h1></a>

        <nav>
            <SearchBar 
                onRecipTypeQChange={onRecipTypeQChange}
                handleSearch={handleSearch}
                typaheadMatches={typaheadMatches}
                />
        </nav>
    </header>
}

export default Header