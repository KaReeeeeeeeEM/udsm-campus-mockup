import {RadioGroup, Radio} from "@heroui/react";

export default function PopQuestion() {
  return (
    <RadioGroup label="What time should we have our Linux Test?">
      <Radio value="10">Today at 10:00AM</Radio>
      <Radio value="11">Today at 11:00AM</Radio>
      <Radio value="12">Today at 12:00PM</Radio>
      <Radio value="13">Tommorrow at 1:00PM</Radio>
    </RadioGroup>
  );
}
