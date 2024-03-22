import { useState } from 'react'
import { Outlet, useNavigate } from "react-router-dom"
import Header from "./components/Header"

const App = () => {
  const navigate = useNavigate()

  const [recipTypeQ, setRecipTypeQ] = useState("")
  const [searchResults, setSearchResults] = useState([])

  const handleSearch = (e) => {
    e.preventDefault()
    e.target.reset()

    // const form = e.target
    // console.log(form)
    // const formData = new FormData(form)
    // console.log(formData)

    fetch(`http://localhost:5000/search/${recipTypeQ}`
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
      <Outlet context={[searchResults, setSearchResults]} />
    </div>
  </>
}

export default App