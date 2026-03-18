import { Head } from "../composants/Head";
export function Video() {
  return (
    <div className=" h-screen flex flex-col justify-start items-center">
      <Head />
      <iframe
        width="620"
        height="full"
        src="/video.mp4"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        style={{ border: "2px solid transparent", borderRadius: "10px" }}
        className=" h-full w-full"
      ></iframe>
    </div>
  );
}
