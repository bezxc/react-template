import { createLazyFileRoute } from "@tanstack/react-router";
import dayjs from "@/shared/lib/configureDayjs";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "@/entities/user/api";
import { Button } from "@/shared/ui/button";

const Home = () => {
  const [time, setTime] = useState(dayjs().format("YYYY-MM-DD HH:mm:ss"));
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery({ queryKey: ["users"], queryFn: getUsers });
  const [disabledTimer, setDisabledTimer] = useState(5);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (disabledTimer === 0) {
      setDisabled(false);
      return;
    }

    const timer = setTimeout(() => {
      return setDisabledTimer((timer) => --timer);
    }, 1000);

    return () => clearTimeout(timer);
  }, [disabledTimer]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(dayjs().format("YYYY-MM-DD HH:mm:ss"));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col gap-5 justify-center items-center pb-5 h-[calc(100vh-45px)]">
      <h2 className="text-4xl text-white">Home</h2>
      <h3 className="text-3xl text-white">{time}</h3>
      {isLoading && <p className="text-3xl">Loading...</p>}
      <div className="text-white overflow-auto">
        <pre>{JSON.stringify(users, null, 2)}</pre>
      </div>
      <Button
        className="p-2 text-lg"
        variant="secondary"
        onClick={() => {
          refetch();
          setDisabledTimer(5);
          setDisabled(true);
        }}
        disabled={disabled}
      >
        Refetch
      </Button>
    </div>
  );
};

export const Route = createLazyFileRoute("/")({
  component: () => <Home />,
});
