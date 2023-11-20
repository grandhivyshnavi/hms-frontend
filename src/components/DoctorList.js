import Axios from "axios";
import { useEffect, useState } from "react";
import DoctorListRow from "./DoctorListRow";
import Nav2 from "./Nav2";

function DoctorList() {
    const [arr, setArr] = useState([]);
    useEffect(() => {
        Axios.get("https://hms-deployment-backend.onrender.com/doctorRoute")
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
            return <DoctorListRow key={ind} obj={val} />
        })
    }
    return (
        <div>
            <Nav2/>
            <h1 class="text-center my-2">All Doctor Details</h1>
            <table style={{ margin: "0px auto", maxWidth: "100%" }} class="table table-striped table-bodered table-secondary table-hover">
                <thead>
                    <tr>
                        <th class="text-center">ID</th>
                        <th class="text-center">Name</th>
                        <th class="text-center">Email</th>
                        <th class="text-center">Contact</th>
                        <th class="text-center">Specialization</th>
                    </tr>
                </thead>
                <tbody>
                    {ListItems()}
                </tbody>
            </table>
        </div>
    )
}
export default DoctorList;
