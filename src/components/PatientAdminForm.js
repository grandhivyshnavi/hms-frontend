import { useState } from "react";

function PatientAdminForm(props) {
    const [name, setName] = useState(props.nameValue);
    const [email, setEmail] = useState(props.emailValue);
    const [age, setAge] = useState(props.ageValue);
    const [gender, setGender] = useState(props.genderValue);
    const [problem, setProblem] = useState(props.problemValue);
    const [doj, setDoj] = useState(props.dojValue);
    const [bloodGroup, setBloodGroup] = useState(props.bloodGroupValue);

    const arr = [name, email, age, gender, problem, doj, bloodGroup];  //arr= [Raj,raj@gmail.com,1]

    const handleClick = () => {
        props.getState(arr);
    }
    return (
        <div style={{ maxWidth: "60%", margin: "20px auto", padding: "20px", borderRadius: "5px" }}>
            <label style={{ fontWeight: "bold" }}>Name:</label>
            <input defaultValue={props.nameValue} onChange={(event) => setName(event.target.value)} style={{ width: "100%", padding: "10px", margin: "8px 0", borderRadius: "5px", border: "1px solid #ccc" }} placeholder="Enter your name" required />
            <label style={{ fontWeight: "bold" }}>Email:</label>
            <input type="email" defaultValue={props.emailValue} onChange={(event) => setEmail(event.target.value)} style={{ width: "100%", padding: "10px", margin: "8px 0", borderRadius: "5px", border: "1px solid #ccc" }} placeholder="Enter your email" required />
            <label style={{ fontWeight: "bold" }}>Age:</label>
            <input defaultValue={props.ageValue} onChange={(event) => setAge(event.target.value)} style={{ width: "100%", padding: "10px", margin: "8px 0", borderRadius: "5px", border: "1px solid #ccc" }} placeholder="Enter your age" required />
            <label style={{ fontWeight: "bold" }}>Gender:</label>
            <input defaultValue={props.genderValue} onChange={(event) => setGender(event.target.value)} style={{ width: "100%", padding: "10px", margin: "8px 0", borderRadius: "5px", border: "1px solid #ccc" }} placeholder="Enter your gender" required />
            <label style={{ fontWeight: "bold" }}>Problem:</label>
            <input defaultValue={props.problemValue} onChange={(event) => setProblem(event.target.value)} style={{ width: "100%", padding: "10px", margin: "8px 0", borderRadius: "5px", border: "1px solid #ccc" }} placeholder="Enter your problem" required />
            <label style={{ fontWeight: "bold" }}>Date of Joining:</label>
            <input type="date" defaultValue={props.dojValue} onChange={(event) => setDoj(event.target.value)} style={{ width: "100%", padding: "10px", margin: "8px 0", borderRadius: "5px", border: "1px solid #ccc" }} placeholder="Date of Joining" required />
            <label style={{ fontWeight: "bold" }}>Blood Group:</label>
            <select
                value={bloodGroup}
                onChange={(event) => setBloodGroup(event.target.value)}
                className="form-control my-3"
                style={{ width: "100%", padding: "10px", margin: "8px 0", borderRadius: "5px", border: "1px solid #ccc" }}
                required
            >
                <option value="">Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
            </select>
            <button onClick={handleClick} style={{ width: "100%", padding: "12px", backgroundColor: "green", color: "white", border: "none", borderRadius: "20px", cursor: "pointer", margin: "12px 0" }} type="submit">{props.children}</button>
        </div>
    )
}
export default PatientAdminForm;
