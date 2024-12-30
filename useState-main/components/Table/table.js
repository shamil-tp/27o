export default Table = (props)=>{
    return <>
        <tr>
            <th scope="row">{props.data.id}</th>
            <td>{props.data.name}</td>
            <td>{props.data.age}</td>
            <td>{props.data.role}</td>
        </tr>
    </>
}