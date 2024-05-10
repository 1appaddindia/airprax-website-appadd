import React from "react";
// import { Check } from "lucide-react";

// import { cn } from "/lib/utils";
// import { Button } from "/components/ui/button";
// import { Card, CardContent, CardFooter, CardHeader } from "/components/ui/card";
// import { latestNewsImages } from "../../utils/home/data";
// import Link from "next/link";
import LatestNewsCard from "../latest-news/LatestNewsCard";
import { latestNews } from "../../utils/latest-news/data";

function LatestNews({ className, ...props }) {
  return (
    <div className="p-0 container max-w-9xl">
      <div className="lg:m-10 mt-12 text-center">
        <h6>Latest News</h6>
        <h1 className=" font-bold lg:text-4xl text-lg">
          Catch the Pulse of Progress: Stay Ahead with Our Latest Updates!
        </h1>
      </div>
      {/* <div className="lg:w-full flex items-center justify-center"> */}
      <div className="grid lg:grid-cols-12 lg:gap-6 lg:p-5 h-full w-full container max-w-9xl mt-2 gap-3">
        {latestNews.map((item) => (
          // <Card
          //   key={index}
          //   className={cn(
          //     "w-full lg:w-[95%] border border-[#018CB5]",
          //     className
          //   )}
          //   {...props}
          // >
          //   <CardHeader>
          //     <img src={img.img} alt="img" className="h-52 w-full" />
          //   </CardHeader>
          //   <CardContent>
          //     <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
          //       <span className="flex" />
          //       <div>
          //         <p className=" font-medium leading-none">{img.title}</p>
          //         <p className=" text-muted-foreground space-y-4">
          //           {img.description}
          //         </p>
          //       </div>
          //     </div>
          //   </CardContent>
          //   <CardFooter>
          //     <Link href="/latest-news">
          //       <Button className="w-full button hover:bg-[#018CB5]">
          //         <Check className="mr-2 h-4 w-4" /> Read More
          //       </Button>
          //     </Link>
          //   </CardFooter>
          // </Card>
          <LatestNewsCard item={item} />
        ))}
      </div>
    </div>
    // </div>
  );
}

export default LatestNews;
