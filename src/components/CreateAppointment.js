// import { useState } from "react";
// import AppointmentForm from "./AppointmentForm";
// import Axios from "axios";
// import Nav from "./Nav";

// function CreateAppointment()
// {
//     const [arr,setArr] = useState([]); //arr= [raj,raj@gmail.com,1]

//     const getState = (childData) => { //childData => [raj,raj@gmail.com,1]
//         setArr(childData); //
//     }

//     const handleSubmit = () => {
//         const data = {name: arr[0], email: arr[1], age: arr[2], gender: arr[3], problem: arr[4], doj: arr[5], bloodGroup: arr[6]}
//         Axios.post("https://hms-deployment-backend.onrender.com/appointmentRoute/create-appointment",data)
//         .then((res)=>{
//             if(res.status === 200)
//                 alert("Record added successfully")
//             else
//                 Promise.reject();
//         })
//         .catch((err)=>alert(err));
//     }
//     return (
//         <div><Nav/>
//         <form onSubmit={handleSubmit}>
//             <AppointmentForm getState={getState} nameValue="" emailValue="" ageValue="" genderValue="" problemValue="" dojValue="" bloodGroupValue="">Book Appointment</AppointmentForm>
//         </form>
//         </div>
//     )
// }
// export default CreateAppointment;



import { useState } from "react";
import AppointmentForm from "./AppointmentForm";
import Axios from "axios";
import Nav from "./Nav";

function CreateAppointment() {
    const [arr, setArr] = useState([]);

    const getState = (childData) => {
        setArr(childData);
    }

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        const data = {
            name: arr[0],
            email: arr[1],
            age: arr[2],
            gender: arr[3],
            problem: arr[4],
            doj: arr[5],
            bloodGroup: arr[6],
        };

        Axios.post("https://hms-deployment-backend.onrender.com/appointmentRoute/create-appointment", data)
            .then((res) => {
                if (res.status === 200) {
                    alert("Record added successfully");
                    setArr([]); // Clear the form fields after successful submission
                } else {
                    Promise.reject();
                }
            })
            .catch((err) => alert(err));
    }

    return (
        <div>
            <Nav />
            <form onSubmit={handleSubmit}>
                <AppointmentForm
                    getState={getState}
                    nameValue=""
                    emailValue=""
                    ageValue=""
                    genderValue=""
                    problemValue=""
                    dojValue=""
                    bloodGroupValue=""
                >
                    Book Appointment
                </AppointmentForm>
            </form>
        </div>
    );
}

export default CreateAppointment;

