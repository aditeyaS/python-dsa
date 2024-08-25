import { Alert, CodeBlock, PageHeading } from "../../components";

const listImplementation = `s = []
s.append(10) # push
s.pop() # pop
s[-1] # peek
len(s) # size
`;

const dequeImplementation = `from collections import deque
s = deque()
s.append(10) # push
s.pop() # pop
s[-1] # peek
len(s) # size
`;

export const Intro = () => {
  return (
    <div className="flex flex-col gap-4">
      <span className="text-xl">Stack is a LIFO data structure</span>
      <PageHeading>Implementation with List</PageHeading>
      <CodeBlock>{listImplementation}</CodeBlock>
      <PageHeading>Implementation with Deque</PageHeading>
      <CodeBlock>{dequeImplementation}</CodeBlock>
      <Alert type="Important">from collections import deque</Alert>
      <Alert type="Tip">Use deque for stack</Alert>
    </div>
  );
};
