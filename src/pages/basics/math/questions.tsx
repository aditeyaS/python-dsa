import React from "react";
import {
  H1,
  PageSectionContainer,
  QuestionListItem,
} from "../../../components";
import { Question } from "../../../types";

const questions: Question[] = [
  {
    name: "2028. Find Missing Observations",
    url: "https://leetcode.com/problems/find-missing-observations/",
    isRecommended: true,
    level: "medium",
    topics: ["array", "math", "simulation"],
  },
];

export const Questions: React.FC = () => {
  return (
    <PageSectionContainer>
      <H1>Related Questions</H1>
      <div className="flex flex-col gap-2">
        {questions.map((question, index) => (
          <QuestionListItem
            key={`btq-${index}}`}
            index={index}
            url={question.url}
            name={question.name}
            level={question.level}
            isRecommended={question.isRecommended}
            topics={question.topics}
          />
        ))}
      </div>
    </PageSectionContainer>
  );
};
