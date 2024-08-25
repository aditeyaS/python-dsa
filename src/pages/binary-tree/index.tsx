import React from "react";
import { PageContainer } from "../../components";
import { BinaryTreeIcon } from "../../icons";
import { Intro } from "./intro";
import { Questions } from "./questions";

export const BinaryTree: React.FC = () => {
  return (
    <PageContainer title="Binary Tree" icon={<BinaryTreeIcon />}>
      <Intro />
      <Questions />
    </PageContainer>
  );
};
