import Axios from "axios";
import { Link } from "react-router-dom";

function DoctorAdminListRow(props) {
    const { _id, name, email, contact, specialization } = props.obj;  //object destruction
    const handleClick = () => {
        Axios.delete("https://hms-deployment-backend.onrender.com/doctoradminRoute/delete-doctoradmin/" + _id)
            .then((res) => {
                if (res.status === 200) {
                    alert("Record deleted successfully");
                    window.location.reload();
                } else {
                    Promise.reject();
                }
            })
            .catch((err) => alert(err));
    };

    return (
        <tr>
            <td>{_id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{contact}</td>
            <td>{specialization}</td>
            <td style={{ display: 'flex', justifyContent: 'center' }}>
                <button style={buttonStyle}>
                    <Link style={linkStyle} to={"/edit-doctoradmin/" + _id}>Edit</Link>
                </button>
                <button onClick={handleClick} style={{ ...buttonStyle, marginLeft: '5px', backgroundColor: '#dc3545' }}>Delete</button>
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

export default DoctorAdminListRow;
