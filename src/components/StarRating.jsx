import { useState } from "react";

export default function StarRating({ maxRating = 5 }) {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);
  return (
    <div className="flex items-center gap-3">
      <div className="flex">
        {/* <!-- This example requires Tailwind CSS v3.0+ --> */}
        {[...Array(maxRating)].map((_, i) => (
          <Star
            key={i}
            onClick={() => setRating(i + 1)}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
          />
        ))}
      </div>
      <p className="m-0 leading-none font-bold font-oswald text-[#EFD54A]">
        {tempRating || rating || ""}
      </p>
    </div>
  );
}

function Star({ onClick, full, onHoverIn, onHoverOut }) {
  return (
    <span
      className="cursor-pointer"
      role="button"
      onClick={onClick}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
    >
      {full ? (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.908 0.58103C12.828 0.407566 12.6999 0.26066 12.539 0.157691C12.3781 0.0547218 12.191 0 12 0C11.809 0 11.6219 0.0547218 11.461 0.157691C11.3001 0.26066 11.172 0.407566 11.092 0.58103L8.222 6.80103L1.421 7.60803C1.23125 7.63043 1.05189 7.70673 0.904149 7.82789C0.756407 7.94905 0.646468 8.10999 0.587342 8.29168C0.528217 8.47337 0.522381 8.6682 0.570524 8.8531C0.618668 9.038 0.718776 9.20525 0.859 9.33503L5.889 13.985L4.554 20.705C4.51692 20.8924 4.53425 21.0864 4.60395 21.2642C4.67364 21.442 4.79278 21.5961 4.94729 21.7083C5.10179 21.8205 5.2852 21.8862 5.47582 21.8975C5.66645 21.9087 5.85632 21.8652 6.023 21.772L12 18.426L17.977 21.772C18.1438 21.8656 18.3339 21.9094 18.5248 21.8983C18.7157 21.8871 18.8994 21.8214 19.0542 21.709C19.2089 21.5966 19.3281 21.4422 19.3978 21.264C19.4674 21.0859 19.4845 20.8916 19.447 20.704L18.112 13.986L23.141 9.33503C23.2812 9.20525 23.3813 9.038 23.4295 8.8531C23.4776 8.6682 23.4718 8.47337 23.4127 8.29168C23.3535 8.10999 23.2436 7.94905 23.0959 7.82789C22.9481 7.70673 22.7687 7.63043 22.579 7.60803L15.777 6.80003L12.908 0.58103Z"
            fill="#EFD54A"
          />
        </svg>
      ) : (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2L15.104 8.728L22.462 9.601L17.022 14.631L18.466 21.899L12 18.28L5.534 21.9L6.978 14.632L1.538 9.6L8.897 8.727L12 2Z"
            stroke="#EFD54A"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </span>
  );
}
