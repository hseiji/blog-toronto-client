import "./post.css";
import Sidebar from "../../sidebar/Sidebar";
import ViewPost from "../../viewpost/ViewPost";

export default function Post() {
    return (
        <div className="post">
            <ViewPost/>
            <Sidebar/>
        </div>
    )
}
