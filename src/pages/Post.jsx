import { useLocation } from "react-router";
import { posts } from "../data";

const Post = () => {
    const location = useLocation();

    // при console.log(location) виведе об'єкт з параметрами pathname:"/post/1". Розбити по символу "/" і взяти значення індекса [2]
    const path = location.pathname.split("/")[2];

    // знайти id яке співпадає з індексом path
    const post = posts.find((p) => p.id.toString() === path);

    return (
        <div className="post">
            <img src={post.img} alt="" className="postImg" />
            <h1 className="postTitle">{post.title}</h1>
            <p className="postDesc">{post.desc}</p>
            <p className="postLongDesc">{post.longDesc}</p>
        </div>
    );
};

export default Post;
