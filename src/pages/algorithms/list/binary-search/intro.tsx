import React from "react";
import { CodeBlock } from "../../../../components";

const binarySearch = `l = 0
r = len(arr) - 1
while l <= r:
    mid = (l + r) // 2
    if arr[mid] == target:
        return mid
    elif arr[mid] > target:
        r = mid - 1
    else:
        l = mid + 1
return -1`;

const Intro: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <ul className="text-xl list-disc list-inside">
        <li>Used for searching in sorted array</li>
        <li>Time: O(log n)</li>
      </ul>
      <CodeBlock>{binarySearch}</CodeBlock>
    </div>
  );
};

export default Intro;
