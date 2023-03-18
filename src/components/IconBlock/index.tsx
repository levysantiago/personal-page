import { BlockContainer, Icon } from "./styles";

interface IIconBlockProps {
  iconSrc: string;
  iconAlt?: string;
  blockColor?: string;
}

export function IconBlock({ iconAlt, iconSrc, blockColor }: IIconBlockProps) {
  return (
    <BlockContainer blockColor={blockColor || "#fff"}>
      <Icon src={iconSrc} alt={iconAlt} />
    </BlockContainer>
  );
}
