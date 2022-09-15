import * as queryString from "query-string";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Pagination from "../../features/Pagination";
import PostFiltersForm from "../../features/PostFiltersForm";
import PostList from "../../features/PostList";


function News() {

    const [postList, setPostList] = useState([]);
    const [pagination, setPagination] = useState({
        _page: 1,
        _limit: 10,
        _totalRows: 1,
    });

    let [searchParams] = useSearchParams();

    const [filters, setFilters] = useState({
        _limit: 10,
        _page: 1,
    });

    useEffect(() => {
        console.log("re call useeffect");
        async function fetchPostList() {
            try {
                const paramsString = queryString.stringify(filters);
                const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
                const response = await fetch(requestUrl);
                const responseJSON = await response.json();
                const { data, pagination } = responseJSON;
                // console.log(responseJSON);
                setPostList(data);
                setPagination(pagination);

            } catch (error) {
                console.log("Failed to fetch post list:", error.message);
            }
        }
        fetchPostList();
    }, [filters]);

    const HandleOnPageChange = (page) => {
        setFilters({
            ...filters,
            _page: page,
        });
    }

    const HandleFiltersChange = (newFilters) => {
        let navigate = useNavigate();
        setFilters({
            ...filters,
            _page: 1,
            title_like: newFilters.searchTerm
        })
        navigate('/news' + queryString.stringify(filters));
    }

    return (
        <div className="news">
            <div className="container">
                <h1>React custom hook - <br /> Magicbox random color after 1 second</h1>
                <PostFiltersForm onSubmit={HandleFiltersChange} />
                <PostList posts={postList} />
                <Pagination pagination={pagination} onPageChange={HandleOnPageChange} />
            </div>
        </div>
    );
}

export default News;
