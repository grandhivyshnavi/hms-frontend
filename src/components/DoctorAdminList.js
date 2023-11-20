import Axios from "axios";
import { useEffect, useState } from "react";
import DoctorAdminListRow from "./DoctorAdminListRow"
import Nav3 from './Nav3';

function DoctorAdminList() {
    const [arr, setArr] = useState([]);
    useEffect(() => {
        Axios.get("https://hms-deployment-backend.onrender.com/doctoradminRoute")
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
            return <DoctorAdminListRow key={ind} obj={val} />
        })
    }
    return (
        <div>
            <Nav3/>
            <h1 class="text-center my-2">All Doctor Details</h1>
            <table style={{ margin: "0px auto", maxWidth: "100%" }} class="table table-striped table-bodered table-secondary table-hover">
                <thead>
                    <tr>
                        <th class="text-center">ID</th>
                        <th class="text-center">Name</th>
                        <th class="text-center">Email</th>
                        <th class="text-center">Contact</th>
                        <th class="text-center">Specialization</th>
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
export default DoctorAdminList;
