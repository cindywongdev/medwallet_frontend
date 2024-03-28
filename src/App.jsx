import { useEffect, useState } from 'react'
import { Outlet, useNavigate } from "react-router-dom"
import Header from "./components/Header"

const App = () => {
  const navigate = useNavigate()
  const validRecipTypes = ["medical doctor", "doctor of osteopathy", "doctor of podiatric medicine", "physician assistant", "nurse practitioner", "certified registered nurse anesthetist", "doctor of dentistry"]

  const [recipTypeQ, setRecipTypeQ] = useState("")
  const [typaheadMatches, setTypaheadMatches] = useState([])
  const [searchResults, setSearchResults] = useState([])

  const checkTypaheadMatches = () => {
    let matches = []
    for (const recipient_type of validRecipTypes) {
        if (recipient_type.includes(recipTypeQ.toLowerCase())) {
            matches.push(recipient_type)
        }
    }
    setTypaheadMatches(matches)
  }

  useEffect(checkTypaheadMatches, [recipTypeQ])

  const handleSearch = (e) => {
    e.preventDefault()
    e.target.reset()
    setRecipTypeQ("")

    if (validRecipTypes.indexOf(recipTypeQ.toLowerCase()) === -1) {
      alert('Oops! No results found. Please enter a valid recipient type from the dropdown.')

      useNavigate('/')
    }

    fetch(`/api/search/${recipTypeQ}`
    ).then((res) => {
        return res.json()
    }).then((data) => {
        setSearchResults(data)
    }).catch((error) => console.log(error))

    navigate("/search")
  }

  const onRecipTypeQChange = (e) => {
    setRecipTypeQ(e.target.value)
  }

  return <>
    <div className="App w-screen p-8">
      <Header 
        onRecipTypeQChange={onRecipTypeQChange} 
        handleSearch={handleSearch} 
        setRecipTypeQ={setRecipTypeQ}
        typaheadMatches={typaheadMatches}
        />
      <Outlet context={[
        searchResults, setSearchResults,
        validRecipTypes
      ]} />
    </div>
  </>
}

export default App