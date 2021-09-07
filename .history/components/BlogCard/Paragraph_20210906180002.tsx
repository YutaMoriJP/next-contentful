import React from "react";

interface ParagraphProps {
  key: string;
  children: string | React.ReactNode;
}

const Paragraph = ({ key, children }: ParagraphProps): JSX.Element => {
  return <div></div>;
};

export default Paragraph;
