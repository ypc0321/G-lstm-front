import React from "react";
import Classification from "./classification";
import FeatureSelect from "./feature";

interface DescriptionProps {
  content: string;
}
const Description: React.FC<DescriptionProps> = ({ content }) => {
  return content === "First-content" ? <FeatureSelect /> : <Classification />;
};

export default Description;
