import { useParams } from "react-router-dom";
import DoctorAdminForm from "./DoctorAdminForm";
import Axios from "axios";
import { useEffect, useState } from "react";
import Nav3 from './Nav3';

function EditDoctorAdmin() {
    const { id } = useParams();
    const [data, setData] = useState({ name: "", email: "", contact: "", specialization:"" });
    const [newData, setNewData] = useState([]);
    useEffect(() => {
        Axios.get("https://hms-deployment-backend.onrender.com/doctoradminRoute/update-doctoradmin/" + id)
            .then((res) => {
                if (res.status === 200) {
                    const { name, email, contact, specialization } = res.data;
                    setData({ name, email, contact, specialization });
                }

                else
                    Promise.reject();
            })
            .catch((err) => alert(err))
    }, [id]);

    const getState = (childData) => {
        setNewData(childData);
    }
    const handleSubmit = () => {
        //const data = { name: newData[0], email: newData[1], age: newData[2], gender: newData[3], problem:newData[4], doj:newData[5] }
        const updatedData = {
            name: newData[0] || data.name,
            email: newData[1] || data.email,
            contact: newData[2] || data.contact,
            specialization: newData[3] || data.specialization,
        };
        Axios.put("https://hms-deployment-backend.onrender.com/doctoradminRoute/update-doctoradmin/" + id, updatedData)
            .then((res) => {
                if (res.status === 200)
                    alert("Recorded updated successfully");
                else
                    Promise.reject();
            })
            .catch((err) => alert(err))
    }
    return (
        <div>
            <Nav3/>
        <form onSubmit={handleSubmit}>
            <DoctorAdminForm getState={getState} nameValue={data.name} emailValue={data.email} contactValue={data.contact} specializationValue={data.specialization} >Update Doctor</DoctorAdminForm>
        </form>
        </div>
    )
}
export default EditDoctorAdmin;

