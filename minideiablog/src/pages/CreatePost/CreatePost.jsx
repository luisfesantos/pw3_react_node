import { useState } from "react";
import banner from '/banner_home.png'
import style  from '../CreatePost/CreatePost.module.css'

const CreatePost = () => {
    const [title, setTitle] = useState();
    const [image, setImage] = useState();
    const [body, setBody] = useState();
    const [tags, setTags] = useState();
    const [formError, setFormError] = useState();

    return (
        <>
        <div>
            <h1>Crie suas novas Ideias</h1>
            <img src={banner} alt="Logo IdeiaApp" />
        </div>
        </>
    )
}

export default CreatePost