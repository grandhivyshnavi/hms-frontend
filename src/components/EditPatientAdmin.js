import { useParams } from "react-router-dom";
import PatientAdminForm from "./PatientAdminForm";
import Axios from "axios";
import { useEffect, useState } from "react";
import Nav3 from './Nav3';

function EditPatientAdmin() {
    const { id } = useParams();
    const [data, setData] = useState({ name: "", email: "", age: "", gender:"", problem:"", doj:"", bloodGroup:"" });
    const [newData, setNewData] = useState([]);
    useEffect(() => {
        Axios.get("https://hms-deployment-backend.onrender.com/patientadminRoute/update-patientadmin/" + id)
            .then((res) => {
                if (res.status === 200) {
                    const { name, email, age, gender, problem, doj, bloodGroup } = res.data;
                    setData({ name, email, age, gender, problem, doj, bloodGroup });
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
            age: newData[2] || data.age,
            gender: newData[3] || data.gender,
            problem: newData[4] || data.problem,
            doj: newData[5] || data.doj,
            bloodGroup: newData[6] ||data.bloodGroup
        };
        Axios.put("https://hms-deployment-backend.onrender.com/patientadminRoute/update-patientadmin/" + id, updatedData)
            .then((res) => {
                if (res.status === 200)
                    alert("Recorded updated successfully");
                else
                    Promise.reject();
            })
            .catch((err) => alert(err))
    }
    return (
        <div><Nav3/>
        <form onSubmit={handleSubmit}>
            <PatientAdminForm getState={getState} nameValue={data.name} emailValue={data.email} ageValue={data.age} genderValue={data.gender} problemValue={data.problem} dojValue={data.doj} >Update Patient</PatientAdminForm>
        </form>
        </div>
    )
}
export default EditPatientAdmin;

