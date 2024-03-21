import { useState } from 'react'
import { Outlet } from "react-router-dom"
import Header from "./components/Header"

const App = () => {
  // Create search query state variable here so that we can pass the function down to SearchBar and Index components to update state.
  const [recipTypeQ, setRecipTypeQ] = useState("")
  const [searchResults, setSearchResults] = useState([])

  const handleSearch = (e) => {
    e.preventDefault()

    // const form = e.target
    // console.log(form)
    // const formData = new FormData(form)
    // console.log(formData)

    fetch(`http://localhost:5000/search/${recipTypeQ}` // CHANGE URL!!
    ).then((res) => {
        return res.json()
    }).then((data) => {
        setSearchResults(data)
    }).catch((error) => console.log(error))
  }

  const onRecipTypeQChange = (e) => {
    setRecipTypeQ(e.target.value)
    console.log(e.target.value)
  }

  return <>
    <div className="App w-screen p-8">
      <Header onRecipTypeQChange={onRecipTypeQChange} handleSearch={handleSearch} />
      <Outlet />
    </div>
  </>
}

export default App