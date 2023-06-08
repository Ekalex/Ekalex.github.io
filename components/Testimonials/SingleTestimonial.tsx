import { Testimonial } from "@/types/testimonial";
import Image from "next/image";
const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
); 

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { star, name, image, content, designation } = testimonial;

  let ratingIcons = [];
  for (let index = 0; index < star; index++) {
    ratingIcons.push(
      <span key={index} className="text-yellow">
       
      </span>
    );
  }

  return (
    <div className="w-full">
      <div
        className="invisible rounded-md bg-primary p-8 shadow-one lg:px-5 xl:px-8"        
      >
        <div className="mb-5 flex items-center space-x-1">{ratingIcons}</div>
        <p className="mb-8 border-b border-body-color border-opacity-10 pb-8 text-base leading-relaxed text-body-color text-Charcoal dark:border-Gray dark:border-opacity-10">
          “{content}
        </p>
        <div className="flex items-center">          
          <div className="w-full">
            <h5 className="mb-1 text-lg font-semibold lg:text-base text-Charcoal xl:text-lg">
              {name}
            </h5>             
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
