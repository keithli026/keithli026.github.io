import { NavLink, Outlet, useSearchParams, useLocation } from "react-router-dom";
import { Container } from "../GlobalStyle";
import "./physiotherapists.scss";
import { getPhysiotherapists } from "../PhysiotherapistInfo";
import { getPosts } from "../api/axios";
import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import ListPage from "../components/ListPage";

function PhysiotherapistsOverview() {
    const physiotherapists = getPhysiotherapists();
    const [searchParams, setSearchParams] = useSearchParams();
    const [posts, setPosts] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        getPosts().then(json => {
            setPosts(json);
            return json;
        }).then(json => {
            setSearchResults(json);
            // console.log(posts);
        })
    }, []);

    return (
        <>
            <Container>
                <div>Select a physiotherapist</div>
                <SearchBar posts={posts} setSearchResults={setSearchResults} />
                <ListPage searchResults={searchResults}></ListPage>
                <div className="physiotherapists_list">
                    <div>
                        <div className="members">
                            <img src={process.env.PUBLIC_URL + "image_width_478.png"} alt="Name 1"></img>
                            <h3>Name 1</h3>
                            <p>Physiotherapist</p>
                        </div>
                        <div className="members">
                            <img src={process.env.PUBLIC_URL + "image_width_478.png"} alt="Name 2"></img>
                            <h3>Name 2</h3>
                            <p>Physiotherapist</p>
                        </div>
                        <div className="members">
                            <img src={process.env.PUBLIC_URL + "image_width_478.png"} alt="Name 3"></img>
                            <h3>Name 3</h3>
                            <p>Physiotherapist</p>
                        </div>
                        <div className="members">
                            <img src={process.env.PUBLIC_URL + "image_width_478.png"} alt="Name 4"></img>
                            <h3>Name 4</h3>
                            <p>Senior Physiotherapist</p>
                        </div>
                        <div className="members">
                            <img src={process.env.PUBLIC_URL + "image_width_478.png"} alt="Name 5"></img>
                            <h3>Name 5</h3>
                            <p>Senior Physiotherapist</p>
                        </div>
                        <div className="members">
                            <img src={process.env.PUBLIC_URL + "image_width_478.png"} alt="Name 6"></img>
                            <h3>Name 6</h3>
                            <p>Senior Physiotherapist</p>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default PhysiotherapistsOverview;