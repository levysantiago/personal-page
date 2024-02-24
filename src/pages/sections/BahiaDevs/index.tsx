import { withTheme } from "styled-components";
import { BahiaDevsLogo, PalmTreeShadow, Container, Description, DiscordButton, DiscordIcon, ImageContainer, SunShadow, Title, TitleContinuation, BadgeTitle, Badge, OnlineCircle, BadgeValue } from "./styles"
import { useEffect, useState } from "react";
import axios from "axios";

const BahiaDevs: React.FC = ()=>{
  const [onlineMembers, setOnlineMembers] = useState<number>(0)

  useEffect(()=>{
    const getDiscordContent= async ()=>{
      const discordContent = await axios.get("https://discord.com/api/guilds/1065717246988656742/widget.json")
      if(discordContent.data && discordContent.data.presence_count){
        setOnlineMembers(discordContent.data.presence_count)
      }
    }

    getDiscordContent()
  }, [])

  return (
    <Container>

      <Title>
        Comunidade <TitleContinuation>Bahia devs</TitleContinuation>
      </Title>

      <Description>
        Na minha jornada eu descobri que não vale a pena evoluir sozinho, por isso, criei a comunidade Bahia devs, uma comunidade que começou na Bahia-BR (minha origem) e se expande para o mundo.
        Isso significa que qualquer pessoa pode participar e começar a interagir com a gente. Fique à vontade para entrar na comunidade e mandar um "Oi!".
      </Description>

      <ImageContainer>
        <BahiaDevsLogo/>
      </ImageContainer>

      <Badge>
        <OnlineCircle/>
        <BadgeValue>{onlineMembers}</BadgeValue>
        <BadgeTitle>devs online</BadgeTitle>
      </Badge>

      <DiscordButton href="https://discord.gg/XMWfZKPvZ3">
        <DiscordIcon/>
        Entrar na comunidade
      </DiscordButton>
      
      <SunShadow/>
      <PalmTreeShadow/>
    </Container>
  )
}

export default withTheme(BahiaDevs);