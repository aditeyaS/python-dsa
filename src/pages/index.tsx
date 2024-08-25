import React from "react";
import { Link } from "react-router-dom";
import {
  AnalysisIcon,
  BitMagicIcon,
  DictionaryIcon,
  HeapIcon,
  LinkedListIcon,
  ListIcon,
  MatrixIcon,
  QueueIcon,
  RecursionIcon,
  SetIcon,
  SortingIcon,
  StackIcon,
  StringIcon,
} from "../icons";

type Topic = {
  url: string;
  name: string;
  icon: React.ReactNode;
};

const topicList: Topic[] = [
  {
    url: "analysis",
    name: "Analysis",
    icon: <AnalysisIcon />,
  },
  {
    url: "dictionary",
    name: "Dictionary",
    icon: <DictionaryIcon />,
  },
  {
    url: "list",
    name: "List",
    icon: <ListIcon />,
  },
  {
    url: "stack",
    name: "Stack",
    icon: <StackIcon />,
  },

  {
    url: "set",
    name: "Set",
    icon: <SetIcon />,
  },
  {
    url: "queue",
    name: "Queue",
    icon: <QueueIcon />,
  },
  {
    url: "linked-list",
    name: "Linked List",
    icon: <LinkedListIcon />,
  },
  {
    url: "heap",
    name: "Heap",
    icon: <HeapIcon />,
  },
  {
    url: "bit-magic",
    name: "Bit Magic",
    icon: <BitMagicIcon />,
  },
  {
    url: "recursion",
    name: "Recursion",
    icon: <RecursionIcon />,
  },
  {
    url: "string",
    name: "String",
    icon: <StringIcon />,
  },
  {
    url: "sorting",
    name: "Sorting",
    icon: <SortingIcon />,
  },
  {
    url: "matrix",
    name: "Matrix",
    icon: <MatrixIcon />,
  },
];

export const Home: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-2 justify-items-stretch	">
      {topicList.map((topic) => (
        <Link to={topic.url} key={topic.url}>
          <div className="bg-primary p-2 rounded hover:bg-primary/50 flex flex-col items-center">
            {topic.icon}
            <span className="text-primary-content text-xl">{topic.name}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};
