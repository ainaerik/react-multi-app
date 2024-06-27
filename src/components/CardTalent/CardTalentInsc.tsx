export type CardTalentInscProps = {
  jobTitle: string;
  description: "string";
};

export default function CardTalentInsc({
  jobTitle,
  description,
}: CardTalentInscProps) {
  return (
    <div>
      <h4>{jobTitle}</h4>
      <p>{description}</p>
    </div>
  );
}
