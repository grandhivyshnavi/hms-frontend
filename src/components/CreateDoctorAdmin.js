import { useState } from "react";
import DoctorAdminForm from "./DoctorAdminForm";
import Axios from "axios";
import Nav3 from './Nav3';

function CreateDoctorAdmin() {
    const [arr, setArr] = useState([]);
    const getState = (childData) => {
        setArr(childData);
    }

    const handleSubmit = () => {
        const data = { name: arr[0], email: arr[1], contact: arr[2], specialization: arr[3] }
        Axios.post("https://hms-deployment-backend.onrender.com/doctoradminRoute/create-doctoradmin", data)
            .then((res) => {
                if (res.status === 200)
                    alert("Record added successfully")
                else
                    Promise.reject();
            })
            .catch((err) => alert(err));
    }
    return (
        <div><Nav3/>
            <form onSubmit={handleSubmit}>
                <DoctorAdminForm getState={getState} nameValue="" emailValue="" contactValue="" specializationValue="">Add Doctor</DoctorAdminForm>
            </form>
        </div>
    )
}
export default CreateDoctorAdmin;



// import { useState } from "react";
// import DoctorAdminForm from "./DoctorAdminForm";
// import Axios from "axios";
// import Nav3 from "./Nav3";

// function CreateDoctorAdmin() {
//     const [arr, setArr] = useState([]);

//     const getState = (childData) => {
//         setArr(childData);
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault(); // Prevent the default form submission behavior

//         const data = {
//             name: arr[0],
//             email: arr[1],
//             contact: arr[2],
//             specialization: arr[3],
//         };

//         Axios.post("https://hms-deployment-backend.onrender.com/doctoradminRoute/create-doctoradmin", data)
//             .then((res) => {
//                 if (res.status === 200) {
//                     alert("Record added successfully");
//                     setArr([]); // Clear the form fields after successful submission
//                 } else {
//                     Promise.reject();
//                 }
//             })
//             .catch((err) => alert(err));
//     };

//     return (
//         <div>
//             <Nav3 />
//             <form onSubmit={handleSubmit}>
//                 <DoctorAdminForm
//                     getState={getState}
//                     nameValue=""
//                     emailValue=""
//                     contactValue=""
//                     specializationValue=""
//                 >
//                     Add Doctor
//                 </DoctorAdminForm>
//             </form>
//         </div>
//     );
// }

// export default CreateDoctorAdmin;
