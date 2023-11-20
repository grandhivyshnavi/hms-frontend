import Axios from "axios";
import { useEffect, useState } from "react";
import AppointmentListRow from "./AppointmentListRow";
import './AppointmentList.css';
import Nav from './Nav';

function AppointmentList() {
    const [arr, setArr] = useState([]);
    useEffect(() => {
        Axios.get("https://hms-deployment-backend.onrender.com/appointmentRoute")
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
            return <AppointmentListRow key={ind} obj={val} />
        })
    }
    return (
        <div>
            <Nav/>
            <h1 className="text-center my-2">All Patient Details</h1>
            <table style={{ margin: "0px auto", maxWidth: "100%" }} class="table table-striped table-bodered table-secondary table-hover">
                <thead>
                    <tr>
                        <th className="text-center">ID</th>
                        <th className="text-center">Name</th>
                        <th className="text-center">Email</th>
                        <th className="text-center">Age</th>
                        <th className="text-center">Gender</th>
                        <th className="text-center">Problem</th>
                        <th className="text-center">Date of Joining</th>
                        <th className="text-center">Blood Group</th>
                    </tr>
                </thead>
                <tbody>
                    {ListItems()}
                </tbody>
            </table>
        </div>
    )
}
export default AppointmentList;
