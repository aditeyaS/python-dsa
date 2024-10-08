import React from "react";
import { PageContainer } from "../../../components";
import { LinkedListIcon } from "../../../icons";
import { Intro } from "./intro";
import { Questions } from "./questions";

const LinkedList: React.FC = () => {
  return (
    <PageContainer title="Linked List" icon={<LinkedListIcon />}>
      <Intro />
      <Questions />
    </PageContainer>
  );
};
export default LinkedList;
