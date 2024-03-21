import SearchBar from "./SearchBar"

const Header = (props) => {
    return <header className="flex justify-between items-center">
        <a href="/"><h1 className="font-bold text-7xl text-black" >medwallet</h1></a>

        <nav>
            <SearchBar/>
        </nav>
    </header>
}

export default Header