import {Badge, Avatar} from "@heroui/react";

export default function Profile() {
  return (
    <Badge color="primary" content="5" className="absolute top-0 right-0 bg-blue-400 text-white border-none">
      <Avatar radius="lg" size="lg" src="https://images.unsplash.com/photo-1531727991582-cfd25ce79613?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJsYWNrJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D" className="rounded-lg" />
    </Badge>
  );
}
