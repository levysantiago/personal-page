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
  let i = 0;
  let j = 0;

  for (i = 0; i < message.length; i++) {
    if (message[i] === "<") {
      // saving undecorated text before tag
      listOfComponents.push(
        <Fragment key={`formatted-text-${i}`}>{undecoratedText}</Fragment>
      );
      undecoratedText = "";

      let tagName = "";
      j = i + 1;

      // Read tag name
      while (message[j] !== ">" && message[j] !== " ") {
        tagName += message[j++];
      }
      j++;
      console.log(tagName);

      switch (tagName) {
        case "highlight": {
          let textToFormat = "";
          // read text to be formatted
          while (message[j] !== "<") {
            textToFormat += message[j++];
          }

          // jumping j to end of tag
          while (message[j] !== ">") j++;

          if (components.HighlightComponent) {
            listOfComponents.push(
              <components.HighlightComponent key={`formatted-text-${j}`}>
                {textToFormat}
              </components.HighlightComponent>
            );
          }
          break;
        }

        case "link": {
          // jumping j to href link
          while (message[j] !== '"') j++;
          //jump the quotes
          j++;

          // Read link
          let linkText = "";
          while (message[j] !== '"') {
            linkText += message[j++];
          }
          // jump quotes and '>'
          j += 2;

          // read text to be formatted
          let textToFormat = "";
          while (message[j] !== "<") {
            textToFormat += message[j++];
          }

          // jumping j to end of tag
          while (message[j] !== ">") j++;

          if (components.LinkComponent) {
            listOfComponents.push(
              <components.LinkComponent
                href={`${linkText}`}
                key={`formatted-text-${j}`}
              >
                {textToFormat}
              </components.LinkComponent>
            );
          }
          break;
        }
      }

      // starting i from j stopped
      i = j;
    } else {
      undecoratedText += message[i];
    }
  }

  listOfComponents.push(
    <Fragment key={`formatted-text-${i}`}>{undecoratedText}</Fragment>
  );

  return <>{listOfComponents.map((component) => component)}</>;
}
