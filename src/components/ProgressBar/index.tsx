import * as React from "react";
import { BaseBar, InsideBar, Title } from "./styles";

interface IProgressBarProps {
  title: string;
  barWidthPercent?: string;
}

const ProgressBar: React.FC<IProgressBarProps> = (props: IProgressBarProps) => {
  const { title, barWidthPercent } = props;

  return (
    <>
      <Title>{title}</Title>
      <BaseBar>
        <InsideBar barWidthPercent={barWidthPercent} />
      </BaseBar>
    </>
  );
};

export default ProgressBar;
