"use client";
import Link from "next/link";
import React from "react";

interface Props {
  href: string;
  onClick: (e: React.MouseEvent) => void;
  scroll: boolean;
  className: string;
  title: string;
}

const Olink = ({ href, onClick, scroll, className, title }: Props) => {
  return (
    <Link
      href={href}
      onClick={(e: React.MouseEvent) => onClick(e)}
      scroll={scroll}
      className={className}
    >
      {title}
    </Link>
  );
};

export default Olink;
