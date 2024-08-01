import React, { useState } from "react";
import axios from "axios";
import '../compound/Table.css'
const Form = () => {
    const [formData, setFormData] = useState({
        sno: '',
        customer_name: '',
        age: '',
        phone: '',
        location: '',
        data: '',
        time: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        axios.post('http://localhost:4000/adddata', formData)
            .then((result) => console.log(result.data))
            .catch((error) => console.error("Error:", error));
    };

    return (
        <div className="form">
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                <label>Sno:</label>
                <input type="text" name="sno" value={formData.sno} onChange={handleChange} />
                <br />
                <label>Name:</label>
                <input type="text" name="customer_name" value={formData.customer_name} onChange={handleChange} />
                <br />
                <label>Age:</label>
                <input type="text" name="age" value={formData.age} onChange={handleChange} />
                <br />
                <label>Phone:</label>
                <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
                <br />
                <label>Location:</label>
                <input type="text" name="location" value={formData.location} onChange={handleChange} />
                <br />
                <label>Data:</label>
                <input type="text" name="data" value={formData.data} onChange={handleChange} />
                <br />
                <label>Time:</label>
                <input type="text" name="time" value={formData.time} onChange={handleChange} />
                <br />
                < input type="submit" value="Submit"id="Button" className="btn btn-secondary"/>
            </form>
        </div>
    );
};

export default Form;
