import {RadioGroup, Radio} from "@heroui/react";

export default function PopQuestion() {
  return (
    <RadioGroup defaultValue="10" label="What time should we have our Linux Test?">
      <Radio className="text-blue-400" value="10">Today at 10:00AM</Radio>
      <Radio className="hover:text-blue-400" value="11">Today at 11:00AM</Radio>
      <Radio className="hover:text-blue-400" value="12">Today at 12:00PM</Radio>
      <Radio className="hover:text-blue-400" value="13">Tommorrow at 10:00AM</Radio>
    </RadioGroup>
  );
}
