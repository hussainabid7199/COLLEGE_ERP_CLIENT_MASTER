import React from 'react';
import List from '../Lists/List';
import {AdminData, TeacherData, StudentData} from "../Lists/Data";



const SuperAdmin =()=> {
    const AdminSideBar = AdminData.map((data)=>{
        return(
            <List
                key={data.key}
                linkName={data.linkName}
                icon={data.icon}
                url={data.url}
            />
        )
    })

    return (
        <>
            <aside id="left-panel" className="left-panel">
                <nav className="navbar navbar-expand-sm navbar-default">
                    <div id="main-menu" className="main-menu collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                           {AdminSideBar}
                        </ul>
                    </div>
                </nav>
            </aside>
        </>
    )
}


const SuperTeacher =()=> {
    const TeacherSideBar = TeacherData.map((data)=>{
        return(
            <List
                key={data.key}
                linkName={data.linkName}
                icon={data.icon}
                url={data.url}
            />
        )
    })
    return (
        <>
            <aside id="left-panel" className="left-panel">
                <nav className="navbar navbar-expand-sm navbar-default">
                    <div id="main-menu" className="main-menu collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                           {TeacherSideBar}
                        </ul>
                    </div>
                </nav>
            </aside>
        </>
    )
}


const SuperStudent =()=> {
    const StudentSideBar = StudentData.map((data)=>{
        return(
            <List
                key={data.key}
                linkName={data.linkName}
                icon={data.icon}
                url={data.url}
            />
        )
    })
    
    return (
        <>
            <aside id="left-panel" className="left-panel">
                <nav className="navbar navbar-expand-sm navbar-default">
                    <div id="main-menu" className="main-menu collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                           {StudentSideBar}
                        </ul>
                    </div>
                </nav>
            </aside>
        </>
    )
}


export {SuperAdmin,SuperTeacher, SuperStudent}


 // const ElementRender = (value) => {
    // const [toggle, setToggle] = useState(false);
    // let isDone = toggle;
    // const strikeThrought = { textDecoration: "line-through" };
    // style={isDone ? strikeThrought : null} onClick={() => toggle ? setToggle(false) : setToggle(true)}
    //     return (
    //         <>
    //             <Link to={"/dashboard_profile"} className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
    //                 aria-expanded="false" > <i className=' menu-icon bx bx-user'></i>{value}</Link>

    //         </>
    //     )
    // }

    // const createList = (data)=>{
    //     return <List
    //         linkName={data.}
    //     />
    // }






