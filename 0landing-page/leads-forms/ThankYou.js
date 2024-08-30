import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const ThankYou = () => {
  const router = useRouter();
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev > 0) {
          return prev - 100 / 15;
        }
        return 0;
      });
    }, 1000);

    const timeout = setTimeout(() => {
      router.push("/");
    }, 15000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center text-black dark:text-white p-4">
      <img
        src="/assets/landing/thanku.svg"
        alt="Thank You"
        className="w-52 h-52 xl:w-64 xl:h-64 mb-4"
      />
      <h2 className="md:text-2xl text-xl font-bold mb-2 text-[#199C4D]">
        Thank you for filling the form!
      </h2>
      <p className="md:text-lg text-xs font-medium mb-4">
        We will reach out to you as soon as possible.
      </p>
      <div className="w-full max-w-md">
        <div className="h-2 bg-gray-300 rounded-full overflow-hidden">
          <div
            className="h-full bg-green-500"
            style={{ width: `${progress}%`, transition: "width 1s linear" }}
          />
        </div>
      </div>
      <p className="md:text-sm text-xs mt-2 font-semibold">
        Taking you to the main menu...
      </p>
    </div>
  );
};

export default ThankYou;
