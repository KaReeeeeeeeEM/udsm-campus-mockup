import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from "@heroui/react";
import { SuggestionProps } from "../../types";
import { MdVerified } from "react-icons/md";
import { CgUserAdd } from "react-icons/cg";
import { BiCheck } from "react-icons/bi";

const AlumniCard: React.FC<SuggestionProps> = ({
  username,
  title,
  description,
  avatarSrc,
  followers,
  following,
}) => {
  const [isFollowed, setIsFollowed] = React.useState(false);

  return (
    <Card className="w-[290px] p-2 shrink-0 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-all ease-in-out duration-300">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src={avatarSrc} />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              {title}
            </h4>
            <h5 className="text-small tracking-tight text-default-400 flex items-center gap-1">
              {" "}
              <MdVerified className="text-blue-400" /> @{username}
            </h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>{description}</p>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small text-blue-400">
            {following}
          </p>
          <p className=" text-default-400 text-small">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small text-blue-400">
            {followers}
          </p>
          <p className="text-default-400 text-small">Connections</p>
        </div>
      </CardFooter>
      <Button
          className={
            isFollowed
              ? "bg-neutral-400 text-foreground border-default-200 rounded-lg flex items-center gap-2"
              : "bg-blue-400 rounded-lg flex items-center gap-2" 
          }
          color="primary"
          size="sm"
          variant={isFollowed ? "bordered" : "solid"}
          onPress={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? "Request Sent" : "Connect"}
          {isFollowed ? <BiCheck /> : <CgUserAdd />}
        </Button>
    </Card>
  );
};

export default AlumniCard;
