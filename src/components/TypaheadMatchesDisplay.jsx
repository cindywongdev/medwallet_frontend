const TypaheadMatchesDisplay = ({typaheadMatches}) => {
    // console.log("we in here: ", typaheadMatches)

    return <ul className="border-2 border-red-500">
        {typaheadMatches.map((match) => {
            return <p>{match}</p>
        })}
    </ul>
}

export default TypaheadMatchesDisplay