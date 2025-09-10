import React, { useState } from 'react'

const HandlingCheckboxes = () => {
    const [form, setForm] = useState({
        radio: "",
        checkbox: [],
        country: ""
    })

    const handleChange = (e) => {
        setForm({ ...form, gender: e.target.value })
    }

    const handleCheckBox = (e) => {
        const { value, checked } = e.target;
        setForm((previous) => ({
            ...previous,
            checkbox: checked ? [...previous.checkbox, value] : previous.checkbox.filter((h) => {
                h !== value
            })
        }))
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(form)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2>gender</h2>
                <label htmlFor="gender">
                    <input type="radio" value="male" onChange={handleChange} />
                    male
                </label>
                <label htmlFor="gender">
                    <input type="radio" value="Female" onChange={handleChange} />
                    female
                </label>
                <h2>Hobbies</h2>
                <label htmlFor="hobbies">
                    <input type="checkbox" value="coding" onChange={handleCheckBox} />
                    coding
                </label>
                <label htmlFor="hobbies">
                    <input type="checkbox" value="gaming" onChange={handleCheckBox} />
                    gaming
                </label>
                <h2>country</h2>
                <select value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })}>
                    <option value="">select</option>
                    <option value="india">India</option>
                    <option value="america">America</option>
                </select>
                <button>Submit</button>
            </form>

        </>
    )
}

export default HandlingCheckboxes