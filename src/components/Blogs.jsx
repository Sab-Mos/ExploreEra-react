import React from "react";
import { blogData } from "../serviceData";

const Blogs = () => {
  return (
    <section className="mt-16">
      <div className="mx-auto container lg:px-10">
        <h2
          className=" text-[22px] md:text-[40px] font-medium font-[roboto] md:mb-5 lg:mb-10 mb-3 text-[#424244]
        mx-[40px] md:mx-0
        
        "
        >
          Blogs
        </h2>
        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10  justify-items-center 
        mx-[40px] md:mx-0
        "
        >
          {blogData.map((blog) => (
            <div key={blog.id}>
              <img
                src={blog.imgSrc}
                alt="blog-image"
                className="max-w-full h-auto"
              />
              <h3 className="text-2xl lg:text-3xl font-medium font-[roboto] mt-3 text-[#424244]">
                {blog.body}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
