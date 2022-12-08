import { NavLink, Outlet, useSearchParams, useLocation } from "react-router-dom";
import { Container } from "../GlobalStyle";
import "./physiotherapists.scss";
import { getPhysiotherapists } from "../PhysiotherapistInfo";
import { getPosts } from "../api/axios";
import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import ListPage from "../components/ListPage";

const PhysiotherapistsOverview = () => {
    const physiotherapists = getPhysiotherapists();
    const [searchParams, setSearchParams] = useSearchParams();
    const [posts, setPosts] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    
    useEffect(() => {
        // getPosts().then(json => {
        //     setPosts(json);
        //     return json;
        // }).then(json => {
        //     setSearchResults(json);
        // })
        setPosts(physiotherapists);
        setSearchResults(physiotherapists);
    }, []);
    return (
        <>
            <Container>
                <SearchBar posts={posts} setSearchResults={setSearchResults} searchResults={searchResults} />
                {/* <ListPage searchResults={searchResults} /> */}
            </Container>
        </>
    );
}

export default PhysiotherapistsOverview;