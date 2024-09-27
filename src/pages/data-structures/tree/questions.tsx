import React from "react";
import { H1, QuestionListItem } from "../../../components";
import { Question } from "../../../types";

const questions: Question[] = [
  {
    name: "590. N-ary Tree Postorder Traversal",
    url: "https://leetcode.com/problems/n-ary-tree-postorder-traversal/description/",
    isRecommended: true,
    topics: ["stack", "tree", "dfs"],
    level: "easy",
  },
];

export const Questions: React.FC = () => {
  return (
    <div className="mt-8 flex flex-col gap-4">
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
    </div>
  );
};
