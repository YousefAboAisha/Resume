import React from "react";
import SkillCard from "../../Components/UI/Cards/SkillCard";
import { Skills } from "../../Data/Skills";

const SkillsCards = () => {
  return (
    <div className="section grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {Skills.map((elem, index) => {
        return <SkillCard key={index} icon={elem.icon} title={elem.title} />;
      })}
    </div>
  );
};

export default SkillsCards;
