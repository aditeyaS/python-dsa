import React from "react";
import { PageContainer } from "../../components";
import { LinkedListIcon } from "../../icons";
import { Intro } from "./intro";

export const LinkedList: React.FC = () => {
  return (
    <PageContainer title="Linked List" icon={<LinkedListIcon />}>
      <Intro />
    </PageContainer>
  );
};
