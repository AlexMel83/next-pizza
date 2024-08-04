import { Container, Categories, SortPopup } from "@/components/shared";
import React from "react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const TopBar: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "sticky top-0 z-10 bg-white py-5 shadow-lg shadow-black/5",
        className
      )}
    >
      <Container className="flex items-center justify-between">
        <Categories className="w-full" />
        <SortPopup className="w-full" />
      </Container>
    </div>
  );
};