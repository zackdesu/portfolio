import Details from "@/components/details";
import React from "react";

const Page = () => {
  return (
    <Details
      img="presensi-osis"
      title="Presensi Osis"
      list={[
        "React",
        "Tailwind",
        "TypeScript",
        "Express",
        "MongoDB",
        "Cloudinary",
      ]}
      desc={
        <>
          This website was made for the presence system for my school council in
          SMKN 1 Dumai. This website also displays the agenda, council members,
          calendar, gallery, and information about us. There&apos;s also a help
          page for the first-time user who is going to use this website. This
          website also features meeting details.
        </>
      }
      href={"https://presensi-osis.vercel.app/"}
    />
  );
};

export default Page;
