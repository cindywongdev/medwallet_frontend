const TypaheadMatchesDisplay = ({ typaheadMatches }) => {
    const handleMatchClick = (e) => {
        console.log(e.target.innerHTML)
    }

    return <ul className="hidden peer-focus:block hover:block border-2 border-gray-500 rounded-b-lg w-72 absolute top-10 p-2 bg-white">
        {typaheadMatches.map((match) => {
            return <p key={match} onClick={handleMatchClick} className="p-1 hover:text-red-500 hover:cursor-pointer">{match}</p>
        })}
    </ul>
}

export default TypaheadMatchesDisplay