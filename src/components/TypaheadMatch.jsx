const TypaheadMatch = ({text, handleMatchClick}) => {
    return <p onClick={handleMatchClick} className="px-2 py-1 hover:cursor-pointer hover:bg-gray-200 hover:rounded-md">{text}</p>
}

export default TypaheadMatch