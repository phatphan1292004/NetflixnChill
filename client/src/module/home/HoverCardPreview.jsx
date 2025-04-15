import Button from "../../components/button/Button";

const HoverCardPreview = ({
  
  height,
  alignRight = false,
  showPreview = false,
  movie,
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
      {/* <video
        src={""}
        autoPlay
        muted
        loop
        className="w-full h-[200px] object-cover rounded-t-lg"
      /> */}
      <img
         src={movie.poster_url?.includes("https://img.phimapi.com/")
                                ? movie.poster_url
                                : `https://img.phimapi.com/${movie.poster_url}`
                        }
                                            alt={movie.name}
          
          className={`rounded-lg mb-4 object-cover w-full max-h-[400px] ${
            height || "h-auto"
          }`}
        />
      <div className="p-4 text-white">
        <h3 className="text-lg font-semibold">{movie.name}</h3>
        <p className="mt-2 text-sm text-gray-400">
          {movie.year} · {movie.time} · {movie.type}
        </p>
        <div className="flex gap-2 mt-3 text-sm">
          {movie.category.map((g, i) => (
            <span key={i} className="px-2 py-1 rounded bg-white/10">
              {g.name}
            </span>
          ))}
        </div>
        <Button className="mt-10 h-[56px]">View Details</Button>
      </div>
    </div>
  );
};

export default HoverCardPreview;
