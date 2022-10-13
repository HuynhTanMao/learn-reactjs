import * as queryString from "query-string";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Pagination from "../../features/Pagination";
import PostFiltersForm from "../../features/PostFiltersForm";
import PostList from "../../features/PostList";


function News() {
    const [postList, setPostList] = useState([]);
    const [pagination, setPagination] = useState({
        _page: 1,
        _limit: 6,
        _totalRows: 1,
    });

    let [searchParams, setSearchParams] = useSearchParams();

    const [filters, setFilters] = useState({
        _page: searchParams.get("_page") || 1,
        _limit: searchParams.get("_limit") || 6
    });

    useEffect(() => {
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
        setSearchParams({
            ...filters,
            _page: page,
        });
    }

    const HandleFiltersChange = (newFilters) => {
        setFilters({
            ...filters,
            _page: 1,
            title_like: newFilters.searchTerm
        });
        setSearchParams({
            ...filters,
            _page: 1,
            title_like: newFilters.searchTerm
        });
    }

    return (
        <div className="news">
            <div className="container">
                <h1>List Post</h1>
                <PostFiltersForm onSubmit={HandleFiltersChange} />
                <PostList posts={postList} />
                <Pagination pagination={pagination} onPageChange={HandleOnPageChange} />
            </div>
        </div>
    );
}

export default News;
