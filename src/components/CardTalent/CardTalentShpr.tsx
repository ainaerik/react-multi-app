export type CardTalentShprProps = {
  name: string;
  picture: string;
  jobTitle: string;
};

export default function CardTalentShpr({
  jobTitle,
  name,
  picture,
}: CardTalentShprProps) {
  return (
    <div>
      <img
        alt="avatar"
        src={picture}
        style={{ width: 64, height: 64, borderRadius: "50%" }}
      />
      <h4>{name}</h4>
      <h6>{jobTitle}</h6>
    </div>
  );
}
