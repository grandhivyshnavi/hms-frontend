function DoctorListRow(props) {
    const { _id, name, email, contact, specialization } = props.obj;  //object destruction
    return (
        <tr>
            <td>{_id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{contact}</td>
            <td>{specialization}</td>
        </tr>
    )
}

export default DoctorListRow;
