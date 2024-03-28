import SearchBar from "./SearchBar"

const Header = ({onRecipTypeQChange, handleSearch, recipTypeQ, validRecipTypes, typaheadMatches, setTypaheadMatches}) => {
    return <header className="flex justify-between items-center mb-4">
        <a href="/"><h1 className="font-bold text-7xl text-black" >medwallet</h1></a>

        <nav>
            <SearchBar 
                onRecipTypeQChange={onRecipTypeQChange}
                handleSearch={handleSearch}
                recipTypeQ={recipTypeQ}
                validRecipTypes={validRecipTypes}
                typaheadMatches={typaheadMatches}
                setTypaheadMatches={setTypaheadMatches}
                />
        </nav>
    </header>
}

export default Header