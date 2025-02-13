import {RadioGroup, Radio, Progress} from "@heroui/react";

export default function QuickQuestion() {
  return (
    <RadioGroup defaultValue="10" label="Have you sat for OS Test 1?">
      <Radio className="text-blue-400 mb-1" value="Yes">Yes </Radio>
      <Progress aria-label="Yes Votes" className="bg-blue-400 w-[75%] rounded-full ml-5" size="md" value={75} />
      <Radio className="hover:text-blue-400 mb-1 mt-2" value="No">No</Radio>
      <Progress aria-label="No Votes" className="bg-blue-400 w-[25%] rounded-full ml-5" size="md" value={25} />
    </RadioGroup>
  );
}
