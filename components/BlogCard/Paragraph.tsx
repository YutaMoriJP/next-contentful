import React from "react";

interface ParagraphProps {
  children: string | React.ReactNode;
}

const Paragraph = ({ children }: ParagraphProps): JSX.Element => {
  return <p>{children}</p>;
};

export default Paragraph;
