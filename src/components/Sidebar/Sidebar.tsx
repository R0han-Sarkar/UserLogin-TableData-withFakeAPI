import { Card } from "react-bootstrap";

export default function Sidebar() {
  return (
    <>
      <div className="user-details">
        <Card style={{ width: "18rem", marginLeft: "13px", marginTop: "20%" }}>
          <Card.Img
            variant="top"
            src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"
          />
          <Card.Body>
            <Card.Title>Rohan Sarkar</Card.Title>
            <Card.Text>
              Details about <b>Rohan Sarkar</b> ( Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Eum dolorem non fugiat harum
              architecto ea debitis. Laboriosam neque quae praesentium totam
              hic)
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
