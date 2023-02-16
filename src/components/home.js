import React from "react";
import {Button,Table} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Users from "./users";
import {Link,useNavigate} from "react-router-dom";

const Home=()=>{

    let history = useNavigate();

    const handleEdit=(id,name,age)=>{
        localStorage.setItem("Name",name);
        localStorage.setItem("Age",age);
        localStorage.setItem("Id",id);
    }

    const handleDelete =(id)=>{
     var index = Users.map((e)=>{
        return e.id
     }).indexOf(id);

     Users.splice(index,1);

     history("/");
    }
    return (
        <div>
           <div style={{margin:"10rem"}}>
            <Table striped bordered hover size="lg">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Users && Users.length > 0 ? Users.map((item)=>{
                            return(
                                <tr>
                                    <td>{item.Name}</td>
                                    <td>{item.Age}</td>
                                    <td>
                                    <Link to={"/edit"}>
                                    <Button onClick={()=>handleEdit(item.id,item.Name,item.Age)} >Edit</Button>
                                    </Link>
                                    &nbsp;
                                    <Button onClick={()=>handleDelete(item.id)} >Delete</Button></td>
                                  
                                </tr>
                            )
                        }): "No Data Available"
                    }
                </tbody>
            </Table>
            <br/>
            <Link className="d-grid gap-2" to={"/create"}><Button size="lg">Create</Button></Link>
           </div>
        </div>
    )
}
export default Home;