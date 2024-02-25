import { withTheme } from "styled-components";
import {
  BahiaDevsLogo,
  PalmTreeShadow,
  Container,
  Description,
  DiscordButton,
  DiscordIcon,
  ImageContainer,
  SunShadow,
  Title,
  TitleContinuation,
  BadgeTitle,
  Badge,
  OnlineCircle,
  BadgeValue,
} from "./styles";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLanguage } from "components/contexts/LanguageContext";
import { content } from "./content";
import { formatContent } from "util/content-formatter";

const BahiaDevs: React.FC = () => {
  const { lang } = useLanguage();
  const [onlineMembers, setOnlineMembers] = useState<number>(0);

  useEffect(() => {
    const getDiscordContent = async () => {
      const discordContent = await axios.get(
        "https://discord.com/api/guilds/1065717246988656742/widget.json"
      );
      if (discordContent.data && discordContent.data.presence_count) {
        setOnlineMembers(discordContent.data.presence_count);
      }
    };

    getDiscordContent();
  }, []);

  return (
    <Container>
      <Title>
        {formatContent({
          message: content[lang].title,
          components: {
            HighlightComponent: TitleContinuation,
          },
        })}
      </Title>

      <Description>{content[lang].description}</Description>

      <ImageContainer>
        <BahiaDevsLogo />
      </ImageContainer>

      <Badge>
        <OnlineCircle />
        <BadgeValue>{onlineMembers}</BadgeValue>
        <BadgeTitle>{content[lang].membersAvailableText}</BadgeTitle>
      </Badge>

      <DiscordButton href="https://discord.gg/XMWfZKPvZ3">
        <DiscordIcon />
        {content[lang].buttonName}
      </DiscordButton>

      <SunShadow />
      <PalmTreeShadow />
    </Container>
  );
};

export default withTheme(BahiaDevs);
