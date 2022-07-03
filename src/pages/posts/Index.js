import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom";
import ListPosts from "../../components/posts/List";

const IndexPost = () => {
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => {
                setPosts(data);
                setLoading(false)
                setError(null)
            }).catch(err => {
                setError(err.message)
                setLoading(false)
            })

    }, []);

    return (
        <>
            <h2>Posts :</h2>
            <div>
                <NavLink className="btn btn-dark" to="/posts/create">Create Post</NavLink>
            </div>
            {error && <div>{error}</div>}
            {loading && <div className="spinner-border"></div>}
            {posts && <ListPosts posts={posts} />}
        </>
    )
}

export default IndexPost