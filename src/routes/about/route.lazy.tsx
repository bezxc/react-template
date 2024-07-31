import { createLazyFileRoute } from "@tanstack/react-router";
import { useCountStore } from "@/entities/counter/use-counter";
import { Button } from "@/shared/ui/button";

const About = () => {
  const count = useCountStore((state) => state.count);
  const increment = useCountStore((state) => state.increment);

  return (
    <div className="flex flex-col gap-5 justify-center items-center h-[calc(100vh-45px)]">
      <Button className="p-2 text-lg" onClick={() => increment(1)}>
        Add count +1
      </Button>
      <h2 className="text-5xl text-white">{count}</h2>
    </div>
  );
};

export const Route = createLazyFileRoute("/about")({
  component: About,
});
