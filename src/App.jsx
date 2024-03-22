import { useState } from 'react'
import { Outlet, useNavigate } from "react-router-dom"
import Header from "./components/Header"

const App = () => {
  const navigate = useNavigate()

  const [recipTypeQ, setRecipTypeQ] = useState("")
  const [isValidQuery, setIsValidQuery] = useState(true)
  const [searchResults, setSearchResults] = useState([])

  const validRecipTypes = ["medical doctor", "doctor of osteopathy", "doctor of podiatric medicine", "physician assistant", "nurse practitioner", "certified registered nurse anesthetist", "doctor of dentistry"]

  const handleSearch = (e) => {
    e.preventDefault()
    e.target.reset()

    if (validRecipTypes.indexOf(recipTypeQ.toLowerCase()) === -1) {
      alert('Oops! No results found. Please enter one of the following valid recipient types: medical doctor, doctor of osteopathy, doctor of podiatric medicine, physician assistant, nurse practitioner, certified registered nurse anesthetist, or doctor of dentistry.')

      useNavigate('/')
    }

    fetch(`/api/search/${recipTypeQ}`
    // fetch(`http://127.0.0.1:5000/search/${recipTypeQ}`
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
      <Header onRecipTypeQChange={onRecipTypeQChange} handleSearch={handleSearch} />
      <Outlet context={[
        searchResults, setSearchResults,
        isValidQuery, setIsValidQuery
      ]} />
    </div>
  </>
}

export default App