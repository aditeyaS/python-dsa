import React from "react";
import { CodeBlock, H2 } from "../../../../components";

const bubbleSort = `for i in range(n):
  swapped = False
  for j in range(n - i - 1):
    if arr[j] > arr[j + 1]:
      arr[j], arr[j + 1] = arr[j + 1], arr[j]
      swapped = True
  if not swapped:
    break`;

const selectionSort = `for i in range(n):
  minIdx = i
  for j in range(i + 1, n):
    if arr[i] < arr[minIdx]:
      minIdx = i
  arr[minIdx], arr[i] = arr[i], arr[minIdx]`;

const insertionSort = `for i in range(1, n):
  x = arr[i]
  j = i - 1
  while j >= 0 and x < arr[j]:
    arr[j + 1] = arr[j]
    j -= 1
  arr[j + 1] = x`;

const Intro: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <ul className="text-xl list-disc list-inside">
        <li>
          Stability in sorting: Order of occurrence is maintained when values
          are same
        </li>
        <li>sort() and sorted() are stable</li>
      </ul>
      <div className="flex flex-col gap-1">
        <H2>Bubble Sort</H2>
        <ul className="text-xl list-disc list-inside">
          <li>Stable sorting</li>
          <li>Time: O(n^2)</li>
        </ul>
        <CodeBlock>{bubbleSort}</CodeBlock>
      </div>
      <div className="flex flex-col gap-1">
        <H2>Selection Sort</H2>
        <ul className="text-xl list-disc list-inside">
          <li>Not stable</li>
          <li>Time: θ(n^2)</li>
        </ul>
        <CodeBlock>{selectionSort}</CodeBlock>
      </div>
      <div className="flex flex-col gap-1">
        <H2>Insertion Sort</H2>
        <ul className="text-xl list-disc list-inside">
          <li>Stable sorting</li>
          <li>Best: O(n) | Worst: θ(n^2)</li>
        </ul>
        <CodeBlock>{insertionSort}</CodeBlock>
      </div>
    </div>
  );
};

export default Intro;