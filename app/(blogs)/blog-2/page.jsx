import BlogsTwo from "@/components/homes/blogs/BlogsTwo";
import HeaderTwo from "@/components/homes/headers/HeaderTwo";

import React from "react";
export const metadata = {
  title: "Blog-2 || Bostami - Professional portfolio NextJS Template",
  description:
    "Discover Botami,the most impressive portfolio template for work showcase, blog",
};
export default function page() {
  return (
    <>
      <div
        className="page-wrapper page-wrapper-2"
        style={{ backgroundImage: "url(/assets/img/bg/page-bg-1.jpg)" }}
      >
        <HeaderTwo />
        <BlogsTwo />
      </div>
    </>
  );
}
