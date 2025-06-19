import { Skeleton } from "./ui/skeleton";

function Loading() {
  return (
    <div className="grid gap-4 pt-12 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="flex flex-col space-y-3">
          <Skeleton className="h-[125px] w-full rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="mx-auto h-4 w-[250px]" />
            <Skeleton className="mx-auto h-4 w-[250px]" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Loading;
