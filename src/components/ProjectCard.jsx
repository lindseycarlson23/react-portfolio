function ProjectCard({ title, image, alt, gitHubUrl, deployedUrl }) {
    <div>
        <h1>{title}</h1>
        <img src={image} alt={alt} />
        <a href={gitHubUrl}></a>
        <a href={deployedUrl}></a>
    </div>
}

export default ProjectCard;