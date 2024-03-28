const TypaheadMatchesDisplay = ({typaheadMatches}) => {
    // console.log("we in here: ", typaheadMatches)

    return <ul className="border-2 border-red-500 absolute top-10 p-2 bg-blue-500">
        {typaheadMatches.map((match) => {
            return <p key={match} onClick={() => {
                //
            }} className="p-1 hover:text-red-500 hover:cursor-pointer">{match}</p>
        })}
    </ul>
}

export default TypaheadMatchesDisplay