import { useState } from "react";
import DoctorForm from "./DoctorForm";
import Axios from "axios";
import Nav2 from './Nav2';

function CreateDoctor()
{
    const [arr,setArr] = useState([]); 
    const getState = (childData) => { 
        setArr(childData); 
    }

    const handleSubmit = () => {
        const data = {name: arr[0], email: arr[1], contact: arr[2], specialization: arr[3]}
        Axios.post("https://hms-deployment-backend.onrender.com/doctorRoute/create-doctor",data)
        .then((res)=>{
            if(res.status === 200)
                alert("Record added successfully")
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
    }
    return (
        <div>
            <Nav2/>
        <form onSubmit={handleSubmit}>
            <DoctorForm getState={getState} nameValue="" emailValue="" contactValue="" specializationValue="">Add Doctor</DoctorForm>
        </form>
        </div>
    )
}
export default CreateDoctor;




// import { useState } from "react";
// import DoctorForm from "./DoctorForm";
// import Axios from "axios";
// import Nav2 from "./Nav2";

// function CreateDoctor() {
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

//         Axios.post("https://hms-deployment-backend.onrender.com/doctorRoute/create-doctor", data)
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
//             <Nav2 />
//             <form onSubmit={handleSubmit}>
//                 <DoctorForm
//                     getState={getState}
//                     nameValue=""
//                     emailValue=""
//                     contactValue=""
//                     specializationValue=""
//                 >
//                     Add Doctor
//                 </DoctorForm>
//             </form>
//         </div>
//     );
// }

// export default CreateDoctor;
