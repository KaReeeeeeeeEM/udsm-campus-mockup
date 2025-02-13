import {Card, CardFooter, Image, Button} from "@heroui/react";
import { ContactProps } from "../../types";

export default function ContactCard({...props} : ContactProps) {
  return (
    <Card isFooterBlurred className="border-none w-[280px] shrink-0 rounded-lg mx-auto" radius="lg">
      <Image
        alt="Woman listing to music"
        className="w-full object-contain bg-white"
        height={200}
        src="/udsm-logo.png"
        width={500}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-xs text-neutral-800">{props.campus}</p>
        <Button
          className="text-xs text-white bg-blue-400 rounded-lg"
          color="default"
          radius="lg"
          size="sm"
          variant="flat"
          onPress={() => window.location.href = `tel:${props.contact}`}
        >
          Call Now
        </Button>
      </CardFooter>
    </Card>
  );
}
