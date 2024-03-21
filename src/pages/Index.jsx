import { useState, useEffect } from "react"
import { useOutletContext } from "react-router-dom"
// import { useLoaderData } from "react-router-dom"
import ReactPaginate from "react-paginate"
import RecordsDisplay from "../components/RecordsDisplay"

const Index = (props) => {
    // let data = useLoaderData()

    const [data, setData] = useState([])
    const [searchResults, setSearchResults] = useOutletContext()
    console.log("INDEX PAGE SEARCH RESULTS: ", searchResults)
    const [currentPage, setCurrentPage] = useState(1)

    const recordsPerPage = 50
    const numPages = Math.ceil(13151823 / recordsPerPage) // we can grab count property from metadata so it's dynamic


    useEffect(() => {
        fetch(`https://medwallet-backend.onrender.com/data/${currentPage}`
        ).then((res) => {
            return res.json()
        }).then((data) => {
            setData(data)
        }).catch((error) => console.log(error))
    }, [currentPage])

    const handlePageClick = (e) => {
        const page_number = e.selected + 1
        setCurrentPage(page_number)
    }

    return <>

        <RecordsDisplay data={data}/>

        <ReactPaginate
            previousLabel={"Prev"}
            nextLabel={"Next"}
            breakLabel={"..."}
            pageCount={numPages}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={"pagination justify-content-center"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
        />

    </>
}

export default Index