import { useState } from "react"

export default function CommentsForm() {

    let [formData, setFormData] = useState({
        username: "",
        remarks: "",
        rating: 5
    });

    let handleInputChange = (event) => {
        setFormData ((currData) => {
            return { ...currData, [event.target.name]: event.target.value }
        })
    }

    let handleSubmit = (event) => {
        console.log(formData);
        event.preventDefault();
        setFormData({
            username: "",
            remarks: "",
            rating: 5
        })
    }

    return (
        <div>
            <h3>Write your Comment</h3>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" 
                    placeholder="username"
                    value={formData.username}
                    name="username"
                    onChange={handleInputChange}
                    />
                <br /><br />
                
                <textarea name="remarks" 
                    value={formData.remarks} 
                    placeholder="add remarks"
                    onChange={handleInputChange}
                    >
                </textarea>
                <br /><br />
                
                <label htmlFor="rating">Rating: </label>
                <input type="number" 
                    min={1}
                    max={5}
                    id="rating"
                    value={formData.rating}
                    name="rating"
                    onChange={handleInputChange}
                />
                <br /><br />
                <button>Add Comment</button>
            </form>
        </div>
    )
}