import Card from "react-bootstrap/Card";
import profile from '../assets/profile.jpg';

function AboutMeCard() {
  return (
    <Card style={{ width: "25rem" }}>
      <Card.Body>
        <Card.Title>About Me</Card.Title>
        <Card.Text>
            I'm a busy professional in the midst of transition from an exciting and rewarding recruiting career to an even more thrilling and impactful web development career.
        </Card.Text>
        <Card.Img variant="top" src={profile} alt='profile picture' />
      </Card.Body>
    </Card>
  );
}

export default AboutMeCard;