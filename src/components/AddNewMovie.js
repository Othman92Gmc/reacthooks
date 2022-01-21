import React, { useState } from 'react'
import {Form,Button} from 'react-bootstrap'
function AddNewMovie({fun}) {
    const [newMovie, setNewMovie] = useState({})
    console.log(newMovie)
    return (
        <div>
            <Form>
            <Form.Group className="mb-3" >
                <Form.Label>Movie Title</Form.Label>
                <Form.Control type="text" placeholder="Enter title" onChange={(e)=>setNewMovie({...newMovie,title:e.target.value})}/>
                <Form.Label>Movie rate</Form.Label>
                <Form.Control type="number" placeholder="Enter rate" onChange={(e)=>setNewMovie({...newMovie,rate:e.target.value})}/>
                <Form.Label>Movie description</Form.Label>
                <Form.Control type="text" placeholder="Enter description" onChange={(e)=>setNewMovie({...newMovie,description:e.target.value})} />
                <Form.Label>Movie image url</Form.Label>
                <Form.Control type="text" placeholder="Enter url" onChange={(e)=>setNewMovie({...newMovie,posterUrl:e.target.value})} />
            </Form.Group>

            <Button onClick={()=>fun(newMovie)} variant="primary" >
                Submit
            </Button>
            </Form>
        </div>
    )
}

export default AddNewMovie