import { CodeBlock, H2 } from "../../../components";

const init = `s = {10, 20}
s = set([10, 20])
s = set() # creates empty set`;

const insert = `s.add(30)
s.update([40, 50]) # adds 40 and 50`;

const del = `s.discard(30) # no error if not present
s.remove(30) # error when not present
s.clear()`;

const others = `len(s)
if 20 in s

#union
s1 | s2
s1.union(s2)

# intersection
s1 & s2
s1.intersection(s2)

# difference
s1 - s2
s1.difference(s2)

# symmetric difference
# elements in s1 and s2 but not common
s1 ^ s2
s1.symmetricdifference(s2)

s1.isdisjoint(s2)

# subset
s1 <= s2
s1.issubset(s2)`;

export const Intro = () => {
  return (
    <div className="flex flex-col gap-4">
      <ul className="text-xl list-disc list-inside">
        <li>distinct elements</li>
        <li>unordered</li>
        <li>O(1) for search, insert, delete</li>
      </ul>
      <H2>Init</H2>
      <CodeBlock>{init}</CodeBlock>
      <H2>Insert</H2>
      <CodeBlock>{insert}</CodeBlock>
      <H2>Delete</H2>
      <CodeBlock>{del}</CodeBlock>
      <H2>Others</H2>
      <CodeBlock>{others}</CodeBlock>
    </div>
  );
};