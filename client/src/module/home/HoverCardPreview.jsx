import Button from "../../components/button/Button";

const HoverCardPreview = ({
  videoSrc,
  title,
  year,
  duration,
  rating,
  alignRight = false,
  showPreview = false,
  genres,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`absolute top-0 ${
        alignRight ? "right-0" : "left-0"
      } -translate-y-6 w-[500px] bg-black rounded-lg shadow-2xl z-50
  transition-opacity transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]
  will-change-[opacity,transform]
  ${
    showPreview 
      ? "opacity-100 scale-100 pointer-events-auto"
      : "opacity-0 scale-95 pointer-events-none"
  }
`}
    >
      <video
        src={videoSrc}
        autoPlay
        muted
        loop
        className="w-full h-[200px] object-cover rounded-t-lg"
      />
      <div className="p-4 text-white">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-400 mt-2">
          {year} · {duration} · {rating}
        </p>
        <div className="flex gap-2 text-sm mt-3">
          {genres.map((g, i) => (
            <span key={i} className="bg-white/10 px-2 py-1 rounded">
              {g}
            </span>
          ))}
        </div>
        <Button className="mt-10 h-[56px]">View Details</Button>
      </div>
    </div>
  );
};

export default HoverCardPreview;
