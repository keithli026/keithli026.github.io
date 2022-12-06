import { NavLink, Outlet, useSearchParams, useLocation } from "react-router-dom";
import { Container } from "../GlobalStyle";
import "./physiotherapists.scss";
import { getPhysiotherapists } from "../PhysiotherapistInfo";
import { getPosts } from "../api/axios";
import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import ListPage from "../components/ListPage";
import { faCommentsDollar } from "@fortawesome/free-solid-svg-icons";

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
    // console.log(posts, physiotherapists, searchResults);
    return (
        <>
            <Container>
                <SearchBar posts={posts} setSearchResults={setSearchResults} searchResults={searchResults} />
                {/* <ListPage searchResults={searchResults} /> */}
                {/* <div className="physiotherapists_list">
                    <div className="members_wrapper">{physiotherapists.map(physiotherapist => (
                        <div className="members" key={physiotherapist.pid}>
                            <img src={physiotherapist.photo} alt={physiotherapist.name}></img>
                            <h3>{physiotherapist.name}</h3>
                            <p>{physiotherapist.title}</p>
                        </div>
                    ))}</div>
                </div> */}
            </Container>
        </>
    );
}

export default PhysiotherapistsOverview;