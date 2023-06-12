import Details from "@/components/details";
import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <Details
      img="/img/project/mountfuji"
      href="https://mountainfujisite.netlify.app"
      title="Mountain Fuji"
      desc={
        <>
          is the first website that my friend has paid for. He asked me to do
          this website because his teacher gave him the task of making a simple
          website with HTML and CSS. The first element I add is the breadcrumb,
          or navigation bar. For the navigation bar, I use JavaScript to set the
          navigation style when scrolling. Then, I do a homepage with a picture
          of Mount Fuji. After I design the homepage, I start to do the
          undermountain page. Undermountain page is the underside of the
          mountain picture. This page contains a summary of Mount Fuji. I also
          use JavaScript here to set transitions when scrolling the page. Next,
          I start to do the attraction page. This page also uses JavaScript to
          do the transition. I added the top 3 attractions based on{" "}
          <Link href={"https://japan-guide.com/"} className="underline">
            Mountain Fuji Travel Guide by Japan Guide
          </Link>
          . Then, I do the location page. I use from<code>{" <iframe/> "}</code>
          Google Maps to locate Mount Fuji. Then I do a simple footer page with
          my name.
        </>
      }
    />
  );
};

export default Page;
