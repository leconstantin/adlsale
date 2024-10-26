import React from "react";

const TestimonialCard = (props) => {
  return (
    <div className="">
      <figure className="space-y-6 rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5 transition">
        <blockquote className="text-gray-900">
          <p>{props.body}</p>
        </blockquote>
        <figcaption className="flex items-center gap-x-4">
          <img
            src={props.imgUrl}
            alt={props.name}
            title={props.name}
            loading="lazy"
            className="h-10 w-10 flex-none rounded-full bg-gray-50 object-cover"
          />
          <div className="flex-auto">
            <div className="font-medium">{props.name}</div>
            <div className="text-zinc-500">{props.handle}</div>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default TestimonialCard;
