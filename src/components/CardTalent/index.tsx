import CardTalentInsc, { CardTalentInscProps } from "./CardTalentInsc";
import CardTalentShpr, { CardTalentShprProps } from "./CardTalentShpr";

type CardTalentProps = (CardTalentInscProps | CardTalentShprProps) & {
  app: "insc" | "shpr";
};

export default function CardTalent({ app, ...props }: CardTalentProps) {
  if (app === "insc") {
    return <CardTalentInsc {...(props as CardTalentInscProps)} />;
  }

  return <CardTalentShpr {...(props as CardTalentShprProps)} />;
}
