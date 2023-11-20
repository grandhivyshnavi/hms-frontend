import Axios from "axios";
import { Link } from "react-router-dom";

function PatientListRow(props) {
    const { _id, name, email, age, gender, problem, doj, bloodGroup } = props.obj;  //object destruction
    const handleClick = () => {
        Axios.delete("https://hms-deployment-backend.onrender.com/patientRoute/delete-patient/" + _id)
            .then((res) => {
                if (res.status === 200) {
                    alert("Record deleted successfully");
                    window.location.reload();
                }
                else
                    Promise.reject();
            })
            .catch((err) => alert(err))
    };

    return (
        <tr>
            <td>{_id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{age}</td>
            <td>{gender}</td>
            <td>{problem}</td>
            <td>{doj}</td>
            <td>{bloodGroup}</td>
            <td style={{ display: 'flex', justifyContent: 'center' }}>
                <button style={buttonStyle}>
                    <Link style={linkStyle} to={"/edit-patient/" + _id}>Edit</Link>
                </button>
                <button onClick={handleClick} style={{...buttonStyle, marginLeft: '5px', backgroundColor: '#dc3545'}}>Delete</button>
            </td>
        </tr>
    );
}

const buttonStyle = {
    padding: '5px 10px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
};

const linkStyle = {
    textDecoration: 'none',
    color: '#fff',
};

export default PatientListRow;
