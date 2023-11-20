function AppointmentListRow(props) {
    const { _id, name, email, age, gender, problem, doj, bloodGroup } = props.obj;  //object destruction
    return (
        <tr>
            <td>{_id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{age}</td>
            <td>{gender}</td>
            <td>{problem}</td>
            <td>{doj}</td>
            <td>{bloodGroup}</td>
        </tr>
    )
}

export default AppointmentListRow;
