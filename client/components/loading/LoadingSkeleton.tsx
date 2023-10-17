export default function LoadingSkeleton() {
  return (
    <div className="w-full">
      {/** POSTS CREATE */}
      <div className="flex mb-6 w-full h-10 ">
        <div className=" bg-zinc-200 shadow-md flex-1 rounded-l-full pl-4 ring-0 focus:ring-0 outline-none animate-pulse" />
        <div className="flex items-center w-48 shadow-md bg-cyan-800 text-white justify-center rounded-r-full animate-pulse delay-200" />
      </div>
      {/** POSTS LIST */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 w-full">
        {Array.from({ length: 5 }, (_, i) => (
          <div
            className="h-64 w-full bg-zinc-200 shadow-md rounded-lg animate-pulse"
            style={{ animationDelay: `${i + 2}s` }}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}
