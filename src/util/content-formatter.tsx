import React, { Fragment } from "react";

interface IFormatContentProps {
  message: string;
  components: {
    HighlightComponent?: React.ElementType;
    LinkComponent?: React.ElementType;
  };
}

export function formatContent({ message, components }: IFormatContentProps) {
  let undecoratedText = "";
  const listOfComponents: React.JSX.Element[] = [];

  for (let i = 0; i < message.length; i++) {
    if (message[i] === "<") {
      // saving undecorated text before tag
      listOfComponents.push(
        <Fragment key={`formatted-text-${i}`}>{undecoratedText}</Fragment>
      );
      undecoratedText = "";

      let tagName = "";
      // jumping "<"
      i++;

      // Read tag name
      while (message[i] !== ">" && message[i] !== " ") {
        tagName += message[i++];
      }
      // jumping ">" or space
      i++;

      switch (tagName) {
        case "highlight": {
          // read text to be formatted
          let textToFormat = "";
          while (message[i] !== "<") {
            textToFormat += message[i++];
          }

          // jumping j to end of tag
          while (message[i] !== ">") i++;

          if (components.HighlightComponent) {
            listOfComponents.push(
              <components.HighlightComponent key={`formatted-text-${i}`}>
                {textToFormat}
              </components.HighlightComponent>
            );
          }
          break;
        }

        case "link": {
          // jumping j to href link
          while (message[i] !== '"') i++;
          //jump the quotes
          i++;

          // Read link
          let linkText = "";
          while (message[i] !== '"') {
            linkText += message[i++];
          }
          // jump quotes and '>'
          i += 2;

          // read text to be formatted
          let textToFormat = "";
          while (message[i] !== "<") {
            textToFormat += message[i++];
          }

          // jumping j to end of tag
          while (message[i] !== ">") i++;

          if (components.LinkComponent) {
            listOfComponents.push(
              <components.LinkComponent
                href={`${linkText}`}
                key={`formatted-text-${i}`}
              >
                {textToFormat}
              </components.LinkComponent>
            );
          }
          break;
        }
      }
    } else {
      undecoratedText += message[i];
    }
  }

  listOfComponents.push(
    <Fragment key={`formatted-text-${i}`}>{undecoratedText}</Fragment>
  );

  return <>{listOfComponents.map((component) => component)}</>;
}
