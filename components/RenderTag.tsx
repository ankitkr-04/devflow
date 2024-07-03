import Link from "next/link";
import React from "react";
import { Badge } from "./ui/badge";

interface RenderTagsProps {
  id: number;
  title: string;
  totalQuestions: number;
  showCount: boolean;
}

const RenderTag = ({
  id,
  title,
  totalQuestions,
  showCount,
}: RenderTagsProps) => {
  return (
    <Link className="flex-between cursor-pointer gap-2" href={`/tag/${id}`}>
      <Badge className="subtle-medium background-light800_dark300 text-light400_light500  rounded-md border-none px-4 py-2 uppercase ">
        {title}
      </Badge>
      {showCount && (
        <p className="small-medium text-dark500_light700">{totalQuestions}</p>
      )}
    </Link>
  );
};

export default RenderTag;
