import {Badge, Avatar} from "@heroui/react";

export default function Profile() {
  return (
    <Badge color="primary" content="5" className="absolute top-0 right-0 bg-blue-400 text-white border-none">
      <Avatar radius="lg" size="lg" src="https://i.pravatar.cc/300?u=a042581f4e29026709d" className="rounded-lg" />
    </Badge>
  );
}
