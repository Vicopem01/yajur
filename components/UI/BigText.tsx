import { sixCaps } from "@/utils/fonts";

interface BigTextProps {
  ref: React.Ref<HTMLHeadingElement>;
  hoveredIndex: number;
}

const BigText = ({ ref, hoveredIndex }: BigTextProps) => {
  const nameToAnimate = "YAJUR DHAWAN";

  return (
    <h1
      ref={ref}
      className={`${sixCaps.className} leading-0 font-semibold lg:text-desktop text-phone md:text-tab flex cursor-default`}
      style={{ userSelect: "none" }} // Prevent text selection
    >
      {nameToAnimate.split("").map((char, index) => (
        <span
          key={index}
          className={`letter-animate ${
            hoveredIndex === index ? "hovered" : ""
          }`}
          style={{ display: "inline-block", whiteSpace: "pre" }} // Preserve spaces, allow transform
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
};

export default BigText;
