import { useState, useEffect } from "react"
// import { useLoaderData } from "react-router-dom"
import ReactPaginate from "react-paginate"
import Record from "../components/Record"
import FieldName from "../components/FieldName"

const Index = (props) => {
    // let data = useLoaderData()

    const fieldNames = ["Record ID", "Recipient Type", "Full Name", "State", "City", "Paying Entity", "Amount ($)", "Date", "Nature of Payment"]

    const[data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)

    const recordsPerPage = 50
    // const lastIndex = currentPage * recordsPerPage
    // const firstIndex = lastIndex - recordsPerPage
    // const records = data.slice(firstIndex, lastIndex)
    const numPages = Math.ceil(13151823 / recordsPerPage) // we can grab count property from metadata so it's dynamic


    useEffect(() => {
        // fetch("https://medwallet-backend.onrender.com/data", {
        fetch("http://localhost:5000/data", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                currentPage: currentPage
            })
        }).then((res) => {
            return res.json()
        }).then((data) => {
            console.log(data)
            setData(data)
        }).catch((error) => console.log(error))
    }, [currentPage])

    const handlePageClick = (e) => {
        const page_number = e.selected + 1
        setCurrentPage(page_number)
    }

    return <div className="index-container" class="
                border-2
                border-black
                w-full
                min-h-screen
                mt-8
                rounded-2xl
            ">

        <div className="field-names" class="
                grid
                grid-cols-11
                w-full
                gap-2
                px-8
                py-4
                rounded-t-2xl
                bg-gray-200
            ">
            {fieldNames.map((fieldName) =>
                <FieldName fieldName={fieldName} key={fieldName} />
            )}
        </div>

        <div className="records" class="
                flex
                flex-col
            ">
            {data.map((record) =>
                <Record record={record} key={record.record_id} />
            )}
        </div>

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

    </div>
}

export default Index