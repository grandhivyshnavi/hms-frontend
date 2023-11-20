import Axios from "axios";
import { useEffect, useState } from "react";
import PatientAdminListRow from "./PatientAdminListRow"
import Nav3 from './Nav3';

function PatientAdminList() {
    const [arr, setArr] = useState([]);
    useEffect(() => {
        Axios.get("https://hms-deployment-backend.onrender.com/patientadminRoute")
            .then((res) => {
                if (res.status === 200)
                    setArr(res.data)
                else
                    Promise.reject();
            })
            .catch((err) => alert(err))
    }, [])
    const ListItems = () => {
        return arr.map((val, ind) => {
            return <PatientAdminListRow key={ind} obj={val} />
        })
    }
    return (
        <div>
            <Nav3/>
            <h1 class="text-center my-2">All Patient Details</h1>
            <table style={{ margin: "0px auto", maxWidth: "100%" }} class="table table-striped table-bodered table-secondary table-hover">
                <thead>
                    <tr>
                        <th class="text-center">ID</th>
                        <th class="text-center">Name</th>
                        <th class="text-center">Email</th>
                        <th class="text-center">Age</th>
                        <th class="text-center">Gender</th>
                        <th class="text-center">Problem</th>
                        <th class="text-center" style={{ width: "20%" }}>Date of Joining</th>
                        <th class="text-center" style={{ width: "5%" }}>Blood Group</th>
                        <th class="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {ListItems()}
                </tbody>
            </table>
        </div>
    )
}
export default PatientAdminList;
