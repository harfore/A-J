"use client";
import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import images from "./imports/projects";

export interface ImageData {
  src: string;
  title?: string;
  type: "full" | "side";
  text?: string;
}

export interface ProjectData {
  title?: string;
  images: string;
  description?: string;
}

const Section = ({ image, index }: { image: ImageData; index: number }) => {
  return (
    <div className="section-wrapper">
      {/* single image */}
      {image.type === "full" && (
        <div className="section h-screen flex flex-col md:flex-row items-center justify-center bg-white px-8 gap-4">
          <Image
            width={600}
            height={400}
            src={image.src}
            alt={`Image ${index + 1}`}
            className="h-3/4 max-w-full object-contain p-8 bg-white"
          />
          {/* <h1>{image.title}</h1> */}
          {image.text && (
            <p className="max-w-lg md:ml-8 text-center md:text-left text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
              {image.text}
            </p>
          )}
        </div>
      )}

      {/* side-by-side images */}
      {image.type === "side" && index % 2 === 0 && index < images.length && (
        <div className={`section grid grid-cols-1 ${image.text ? "md:grid-cols-[1fr_auto_1fr]" : "md:grid-cols-2"} place-items-center gap-4 p-8`}>
          <Image
            width={400}
            height={300}
            src={image.src}
            alt=""
            className="h-3/4 object-contain bg-white m-auto"
          />

          {image.text && (
            <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-xs">
              {image.text}
            </p>
          )}

          {images[index + 1]?.type === "side" ? (
            <Image
              width={400}
              height={300}
              src={images[index + 1].src}
              alt=""
              className="h-3/4 object-contain bg-white"
            />
          ) : (
            <div className="h-3/4 p-8 bg-white" />
          )}
        </div>
      )}
    </div>
  );
};

export default function Home() {

  return (
    <div className="bg-white text-black">
      <Header />

      <div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold z-50">
        A - J
      </div>

      {images?.map((image, index) => (
        <Section key={index} image={image} index={index} />
      ))}
      <Footer />
    </div>
  );
}
