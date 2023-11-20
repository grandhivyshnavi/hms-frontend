import { useState } from "react";

function DoctorAdminForm(props) {
    const [name, setName] = useState(props.nameValue);
    const [email, setEmail] = useState(props.emailValue);
    const [contact, setContact] = useState(props.contactValue);
    const [specialization, setSpecialization] = useState(props.specializationValue);

    const arr = [name, email, contact, specialization];  //arr= [Raj,raj@gmail.com,1]

    const handleClick = () => {
        props.getState(arr);
    }
    return (
        <div style={{ maxWidth: "60%", margin: "20px auto", padding: "20px", borderRadius: "5px" }}>
            <label style={{ fontWeight: "bold" }}>Name:</label>
            <input defaultValue={props.nameValue} onChange={(event) => setName(event.target.value)} style={{ width: "100%", padding: "10px", margin: "8px 0", borderRadius: "5px", border: "1px solid #ccc" }} placeholder="Enter your name" required />
            <label style={{ fontWeight: "bold" }}>Email:</label>
            <input type="email" defaultValue={props.emailValue} onChange={(event) => setEmail(event.target.value)} style={{ width: "100%", padding: "10px", margin: "8px 0", borderRadius: "5px", border: "1px solid #ccc" }} placeholder="Enter your email" required />
            <label style={{ fontWeight: "bold" }}>Contact:</label>
            <input defaultValue={props.contactValue} onChange={(event) => setContact(event.target.value)} style={{ width: "100%", padding: "10px", margin: "8px 0", borderRadius: "5px", border: "1px solid #ccc" }} placeholder="Enter your contact number" required />
            <label style={{ fontWeight: "bold" }}>Specialization:</label>
            <input defaultValue={props.specializationValue} onChange={(event) => setSpecialization(event.target.value)} style={{ width: "100%", padding: "10px", margin: "8px 0", borderRadius: "5px", border: "1px solid #ccc" }} placeholder="Enter your specialization" required />
            <button onClick={handleClick} style={{ width: "100%", padding: "12px", backgroundColor: "green", color: "white", border: "none", borderRadius: "20px", cursor: "pointer", margin: "12px 0" }} type="submit">{props.children}</button>
        </div>
    )
}
export default DoctorAdminForm;
