import { createBrowserRouter, createRoutesFromElements, Route, Routes } from "react-router-dom";
import App from "./App"
import Index from "./pages/Index"
import SearchResults from "./pages/SearchResults";
import Show from "./pages/Show"

const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<App/>}>
            <Route path="" element={<Index/>}/>
            <Route path="search" element={<SearchResults/>}/>
            {/* <Route path="post/:id" element={<Show/>}/> */}
        </Route>
    </>
))

export default router