import Card from "react-bootstrap/Card";

function ProjectCard({ title, image, alt, gitHubUrl, deployedUrl }) {
  return (
    <Card style={{ width: "25rem" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="bottom" src={image} alt={alt} />
        <Card.Link href={gitHubUrl}>GitHub Repo</Card.Link>
        <Card.Link href={deployedUrl}>Deployed URL</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
