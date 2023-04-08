import { NavLink } from "react-router-dom"
const List = (props) => {
    return (
        <>
            <li>
                <NavLink to={props.url}><i className={props.icon}></i>{props.linkName} </NavLink>
            </li>


        </>
    )
}




export default List;



