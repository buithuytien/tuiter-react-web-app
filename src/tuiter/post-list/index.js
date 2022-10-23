import PostItem from "./post-item";
import posts from "./posts.json";

const PostList = () => {
    return(
        <ul className="list-group">
            {
                posts.map(post => {
                    return (<PostItem key={post._id} post={post}/>);
                })
            }
        </ul>
    );
}
export default PostList;