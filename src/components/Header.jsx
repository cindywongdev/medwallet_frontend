import SearchBar from "./SearchBar"

const Header = (props) => {
    return <header className="flex justify-between items-center">
        <h1 className="font-bold text-7xl" >medwallet</h1>

        <nav>
            <SearchBar/>
        </nav>
    </header>
}

export default Header