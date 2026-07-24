type ProjectCardProps = {
  title: string;
  category: string;
  image: string;
  description: string;
  large?: boolean;
};

export function ProjectCard({
  title,
  category,
  image,
  description,
  large = false,
}: ProjectCardProps) {
  return (
    <article
      className={`projectCard ${large ? "projectLarge" : ""}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="projectShade" />
      <div className="projectContent">
        <span>{category}</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}
