import React,{useState} from "react";
import {Button,Form, FormControl} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Users from "./users";
import {v4 as uuid} from "uuid";
import {useNavigate} from "react-router-dom";

const Create=()=>{
 
    const [name,setName]=useState("");
    const [age,setAge]=useState("");

    let history = useNavigate();

    const handleSubmit=(e)=>{
       e.preventDefault();

       const ids = uuid();
       let uniqueId = ids.slice(0,8);

       let a =name,
       b=age; 

       Users.push({id:uniqueId,Name:a,Age:b})

       history("/")
    }

    return(
       <div>
        <Form className="d-grid gap-2" style={{margin:"15rem"}}>
            <Form.Group className="mb-3" controlId="formName">
                <FormControl type="text" placeholder="Enter Name" required onChange={(e)=>setName(e.target.value)}>
                 </FormControl>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formAge">
                <FormControl type="text" placeholder="Enter Agee" required onChange={(e)=>setAge(e.target.value)}>
                 </FormControl>
            </Form.Group>
            <Button onClick={(e)=>handleSubmit(e)} type="submit">Submit</Button>
        </Form>
       </div>
    )
}
export default Create;
