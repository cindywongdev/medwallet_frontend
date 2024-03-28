import SearchBar from "./SearchBar"

const Header = ({onRecipTypeQChange, handleSearch, setRecipTypeQ, typaheadMatches}) => {
    return <header className="flex justify-between items-center mb-4">
        <a href="/"><h1 className="font-bold text-7xl text-black" >medwallet</h1></a>

        <nav>
            <SearchBar 
                onRecipTypeQChange={onRecipTypeQChange}
                handleSearch={handleSearch}
                setRecipTypeQ={setRecipTypeQ}
                typaheadMatches={typaheadMatches}
                />
        </nav>
    </header>
}

export default Header