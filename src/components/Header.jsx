import SearchBar from "./SearchBar"

const Header = ({onRecipTypeQChange, handleSearch}) => {
    return <header className="flex justify-between items-center">
        <a href="/"><h1 className="font-bold text-7xl text-black" >medwallet</h1></a>

        <nav>
            <SearchBar onRecipTypeQChange={onRecipTypeQChange} handleSearch={handleSearch}/>
        </nav>
    </header>
}

export default Header