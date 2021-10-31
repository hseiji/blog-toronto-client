import { useLocation } from "react-router";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./viewpost.css";
import { Context } from "../context/Context";
import Multiselect from "multiselect-react-dropdown";
import { axiosInstance } from "../../config";

export default function ViewPost() {
    const location = useLocation();
    const pathId = location.pathname.split("/")[2];
    const [post, setPost] = useState({});
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [cat, setCat] = useState([]);
    const [cats, setCats] = useState([]);
    const [updateMode, setUpdateMode] = useState(false);
    const { user } = useContext(Context);

    useEffect(() => {
        const getPost = async () => {
            const res  = await axiosInstance.get("/posts/" + pathId); //http://localhost:8000/posts/
            setPost(res.data);
            setTitle(res.data.title);
            setDesc(res.data.desc);
            setCat(res.data.categories);
        }
        const getCats = async () => {
            const res  = await axiosInstance.get("/categories/"); //http://localhost:8000/categories/
            setCats(res.data);
        }
        getPost();
        getCats();
    }, [pathId])

    const handleDelete = async () => {
        try {
            await axiosInstance.delete("/posts/" + pathId); //http://localhost:8000/posts
            window.location.replace("/");
        } catch (err) {

        }
    }

    const handleUpdate = async () => {
        try {
            await axiosInstance.put("/posts/" + pathId, { //http://localhost:8000/posts/
                title,
                desc,
                categories: cat,
            });
            setUpdateMode(false);
        } catch (err) {

        }
    }

    const PF = "https://blog-toronto.herokuapp.com/images/";
    return (
        <div className="viewpost">
            <div className="viewPostWrapper">
                {/* Display the post photo */}
                {post.photo && <img className="viewPostImg" src={PF + post.photo} alt=""/>}

                {/* Allow user to edit post. It creates input to edit the title */}
                {
                    updateMode ? 
                    (
                        <input type="text" value={title} className="viewPostTitleInput" autoFocus onChange={(e) => setTitle(e.target.value)}/>
                    ) : 
                    (
                    <h1 className="viewPostTitle">
                        {title}
                        {post.username === user?.username && (
                                <div className="viewPostEdit">
                                    <i className="viewPostIcon far fa-edit" onClick={() => setUpdateMode(true)}></i>
                                    <i class="viewPostIcon far fa-trash-alt" onClick={handleDelete}></i>
                                </div>
                            )
                        }
                    </h1>
                    )
                }   
                {/* Author and Created at information */}
                <div className="viewPostInfo">
                    <span className="viewPostAuthor">
                        Author:&nbsp;
                        <Link to={`/?user=${post.username}`} className="link">
                            <b>{post.username}</b>
                        </Link>
                    </span>
                    <span className="viewPostDate">{new Date(post.createdAt).toDateString()}</span>
                </div> 

                {/* Categories */}
                {
                    updateMode ? 
                    (
                        <div className="viewPostCat">
                            Categories:&nbsp;
                            <Multiselect
                                isObject={false}
                                onRemove={function noRefCheck(){}}
                                onSearch={function noRefCheck(){}}
                                options={cats.map(c => c.name)}
                                onSelect={e => (setCat(e))}
                            />
                        </div>
                    ) : 
                    (
                        <div className="viewPostCat">
                            Categories:&nbsp;
                            {cat.map(c => (<span>{c}&nbsp;</span>))}
                        </div>
                    )
                }

                {/* Description */}
                {
                    updateMode ? 
                    (<textarea className="viewPostDescInput" value={desc}  onChange={(e) => setDesc(e.target.value)}/>) : 
                    (                
                        <p className="viewPostDesc">
                            {desc}
                        </p>
                    )
                }
                {updateMode && (
                    <button className="postButton" onClick={handleUpdate}>Update</button>
                )}
            </div>
        </div>
    )
}
