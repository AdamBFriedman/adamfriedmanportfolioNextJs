import Image from "next/image";
interface AwesomeCardProps {
  hoverImage: string;
  projectImage: string;
  projectTitle: string;
}

export const AwesomeCard = (props: AwesomeCardProps) => {
  const { hoverImage, projectImage, projectTitle } = props;

  return (
    <div className="awesomeCard">
      <div className="awesomeCardWrapper">
        <Image
          alt="Project Image"
          src={projectImage}
          width={300}
          height={300}
        />
        <div className="awesomeCardTitleWrapper">
          <h3>{projectTitle}</h3>
        </div>
      </div>
      <div style={{ width: 300, height: 300 }}>
        <Image
          alt="Project Character Image"
          src={hoverImage}
          className="character"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};
