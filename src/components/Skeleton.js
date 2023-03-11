import classNames from "classnames";

export default function Skeleton({ times, className }) {
  const outterClassNames = classNames(
    "relative",
    "overflow-hidden",
    "rounded",
    "mb-2.5",
    className
  );
  const innerClassNames = classNames(
    "animate-shimmer",
    "absolute",
    "inset-0",
    "-translate-x-full",
    "bg-gradient-to-r",
    "from-gray-200",
    "via-white",
    "to-gray-200"
  );
  const boxes = Array(times)
    .fill(0)
    .map((_, i) => {
      return (
        <div key={i} className={outterClassNames}>
          <div className={innerClassNames} />
        </div>
      );
    });
  return boxes;
}
