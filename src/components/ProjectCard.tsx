import Image from "next/image";

interface ProjectCardProps {
  href: string;
  filter: string;
  src: string;
  title: string;
}

const ProjectCard = (props: ProjectCardProps) => {
  const { href, filter, src, title } = props;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <figure className={filter}>
        <Image className={"projectImage"} src={src} alt={title} />
        <figcaption className={"projectTitle"}>
          <h3>{title}</h3>
        </figcaption>
        <div className="hover">{title}</div>
      </figure>
    </a>
  );
};

export default ProjectCard;
