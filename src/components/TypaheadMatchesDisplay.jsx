import TypaheadMatch from "./TypaheadMatch"

const TypaheadMatchesDisplay = ({ typaheadMatches, handleMatchClick }) => {
    return typaheadMatches.length > 0 ?
        <ul className="hidden peer-focus:block hover:block border-2 border-gray-500 rounded-b-lg w-72 absolute top-10 p-2 bg-white">
            {typaheadMatches.map((match) => {
                return <TypaheadMatch text={match} key={match} handleMatchClick={handleMatchClick} />
            })}

        </ul>
        :
        <ul className="hidden peer-focus:block hover:block border-2 border-gray-500 rounded-b-lg w-72 absolute top-10 p-2 bg-white">
            <p className="p-1">No results found.</p>
        </ul>
}

export default TypaheadMatchesDisplay