// PatientList.js

import Axios from "axios";
import { useEffect, useState } from "react";
import PatientListRow from "./PatientListRow";
import Nav2 from './Nav2';

function PatientList() {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    Axios.get("https://hms-deployment-backend.onrender.com/patientRoute")
      .then((res) => {
        if (res.status === 200) setArr(res.data);
        else Promise.reject();
      })
      .catch((err) => alert(err));
  }, []);

  const ListItems = () => {
    return arr.map((val, ind) => {
      return <PatientListRow key={ind} obj={val} />;
    });
  };

  return (
    <div>
      <Nav2/>
      <h1>All Patient Details</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Problem</th>
            <th style={{ width: "20%" }}>Date of Joining</th>
            <th style={{ width: "5%" }}>Blood Group</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{ListItems()}</tbody>
      </table>
    </div>
  );
}

export default PatientList;
