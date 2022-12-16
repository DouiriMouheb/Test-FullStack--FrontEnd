
import './App.css';
import {TodoCard} from "../card/TodoCard";
import {useEffect, useState} from "react";
import {getAllTodos} from "../../services/axios-service";
import {Col, Container, Row} from "react-bootstrap";

function App() {

  const [todos,setTodos] = useState([])
  useEffect(()=>{
    async function fetchData(){
      const response = await getAllTodos();
      if(response.success){
        setTodos(response.data)
          console.log(response.data)

      }
    }
    fetchData()
  },[])
  return (
      <>
        <Container>
        <Row>
        {todos.length>0 && (
            todos.map((element)=>{

              const {id,todo,completed,userId}=element
              return(

              <Col sm={8} md={4} key={id}>
                <TodoCard id={id} todo={todo} completed={completed} userId={userId}/>
              </Col>

              )
            })

        )}
        </Row>
          </Container>
      </>
  );
}

export default App;
