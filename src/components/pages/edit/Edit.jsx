import "./edit.css";
import { useContext, useState, useEffect } from "react";
import Multiselect from 'multiselect-react-dropdown';
import { Context } from "../../context/Context";
import { axiosInstance } from "../../../config";



export default function Edit() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file,setFile] = useState(null);
    const { user } = useContext(Context);
    const [error, setError] = useState(false);
    const [cats, setCats] = useState([]);
    const [catsP, setCatsP] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axiosInstance.get("/categories/");
            setCats(res.data);
        }    
        getCats();
    }, []);
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            username: user.username,
            title,
            desc,
            categories: catsP
        };

        if(file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name",filename);
            data.append("file", file);
            newPost.photo = filename;       
            try{
                await axiosInstance.post("/upload", data)
            } catch (err) {
                
            }
        }
        try {
            const res = await axiosInstance.post("/posts", newPost); //http://localhost:8000/posts
            window.location.replace("/#/posts/" + res.data._id);
        } catch (err) {
            setError(true);
        }
    }

    return (
        <div className="edit">
            {(file && 
                (<img 
                    // https://images.pexels.com/photos/3570483/pexels-photo-3570483.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260
                    src={URL.createObjectURL(file)} 
                    alt="" 
                    className="editImg"
                />)
            )}
            <form className="editForm" onSubmit={handleSubmit}>
                {/*Image upload (button) + Title*/}
                <div className="editFormGroup">
                    <label htmlFor="fileInput">
                        <i class="far fa-file-image editIcon"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display: "none"}} onChange={
                        (e) => setFile(e.target.files[0])
                    }/>
                    <input type="text" placeholder="Title..." className="editInput" autoFocus={true} onChange={e => setTitle(e.target.value)}/>
                </div>
                {/* Text area for the post */}
                <div className="editFormGroup">
                    <textarea 
                        placeholder="Tell your story..." 
                        type="text" 
                        className="editText" onChange={e => setDesc(e.target.value)}>
                    </textarea>
                </div>
                {/*Multiple selection for categories */}
                <div className="editSelectLabel"><label>Please select the categories:</label></div>
                <div className="editFormGroup">  
                    <div className="editSelect">
                        <Multiselect
                            isObject={false}
                            onRemove={function noRefCheck(){}}
                            onSearch={function noRefCheck(){}}
                            onSelect={e => (setCatsP(e))}
                            options={cats.map(c => c.name)}
                        />
                    </div>
                </div>                
                <button className="editSubmit" type="sutbmit">Publish</button>
                {error && <span>Something went wrong...Please check if there is an existing title.</span>}
            </form>
        </div>
    )
}

