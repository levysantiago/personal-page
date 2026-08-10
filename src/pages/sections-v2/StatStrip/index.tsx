import * as React from "react";
import { useLanguage } from "components/contexts/LanguageContext";
import { content } from "./content";
import { Inner, Label, Section, Stat, Value } from "./styles";

const StatStrip: React.FC = () => {
  const { lang } = useLanguage();
  const c = content[lang];

  return (
    <Section>
      <Inner>
        {c.stats.map((stat) => (
          <Stat key={stat.value + stat.labelLine1}>
            <Value>{stat.value}</Value>
            <Label>
              {stat.labelLine1}
              <br />
              {stat.labelLine2}
            </Label>
          </Stat>
        ))}
      </Inner>
    </Section>
  );
};

export default StatStrip;
