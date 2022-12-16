
import Card from 'react-bootstrap/Card';
import styles from "./todoCard.module.css"

export const TodoCard =({id,userId,todo,completed})=>{
    const background = completed ? "success" : "danger"
    const footerText = completed ? "yes" : "no"

    return (
        <>
            <div className={styles.global}>
            <Card style={{ width: '18rem' }} border={background}>
                <Card.Body>
                    <Card.Title>ID: {id}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">UserID : {userId}</Card.Subtitle>
                    <Card.Text>
                        {todo}
                    </Card.Text>


                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">completed ? : {footerText}</small>
                </Card.Footer>
            </Card>
            </div>
        </>
    )
}