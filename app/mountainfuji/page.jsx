import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  const codeIframe = "<iframe>";
  return (
    <>
      <div className="w-[100%] h-80 bg-black">
        <Image
          src="/img/project/mountfuji.png"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            objectPosition: "top",
            opacity: "30%",
          }}
          width={1500}
          height={1500}
          alt="Mountain Fuji"
        />
      </div>
      <div className="mx-20 mt-5">
        <Link href="/">Kembali</Link>
      </div>
      <div className="mx-20 my-5 flex">
        <div className="w-[60%]">
          <h1>Mountain Fuji</h1>
          <p className="my-3 text-lg">
            <b>Mountain Fuji</b> is the first website that my friend have paid.
            He asked me to do this website because of his teacher give him a
            task to make a simple website with HTML and CSS. The first element I
            do is making the breadcrumb / navigation bar. For the navigation
            bar, I use JavaScript to set the navigation style when scrolling.
            Then, I do a Homepage with picture of Mountain Fuji. After I design
            the homepage, I start to do the undermountain page. Undermountain
            page is the under of the mountain pict. This page contains a summary
            of Mountain Fuji. I also use JavaScript in here to set transition
            when scrolling the page. Next, I start to do the attraction page.
            This page also use JavaScript to do the transition. I added top 3
            attractions based on{" "}
            <Link href={"https://japan-guide.com/"}>
              Mountain Fuji Travel Guide by Japan Guide
            </Link>
            . Then, I do location page. I use <code>{codeIframe}</code> from
            Google maps to locate Mountain Fuji. Then I do a simple footer page
            with my name.
          </p>
        </div>
        <div className="w-[40%] flex flex-col justify-around">
          <ul className="bg-neutral-200 rounded-xl w-[35%] mx-auto p-5 font-medium">
            <h2 className="mb-5">Tech I used</h2>
            <li> &#9737; &nbsp; HTML</li>
            <li> &#9737; &nbsp; CSS</li>
            <li> &#9737; &nbsp; JavaScript</li>
          </ul>
          <div className="my-5 mx-auto text-center w-[35%]">
            <Link href="https://mountainfujisite.netlify.app" target={"_blank"}>
              <button className="px-5 py-3 bg-cyan-400 rounded-xl mx-auto">
                Go to page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
