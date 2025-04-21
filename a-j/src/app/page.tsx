"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import projects from "./imports/projects";
import image1 from "../../public/images/page1.png";

export interface ImageData {
  src: string;
  type: "full" | "side" | "carousel";
  typeIfMobile?: "full" | "side" | "carousel";
}

export interface ProjectData {
  index: number;
  title?: string;
  images: ImageData[];
  description?: string;
  photo_format?: string;
}

const Section = ({
  project,
  image,
  index,
}: {
  project: ProjectData;
  image: ImageData;
  index: number;
}) => {
  const isFirstImage = index === 0;
  const [isMobile, setIsMobile] = useState(false);
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    console.log(
      `Rendering Section for image ${index}: type=${image.type}, mobile=${isMobile}`
    );
  }, [index, image.type, isMobile]);

  // skip rendering if this is a secondary side image
  // only rendering the carousel container once using the first image
  if (
    (image.type === "side" && index > 0 && project.images[index - 1]?.type === "side") ||
    (isMobile && image.typeIfMobile === "carousel" && index > 0)
  ) {
    return null;
  }


  const carouselImages = project.images.filter(img => img.typeIfMobile === "carousel");

  const nextImage = () => {
    setCurrentCarouselIndex(prev => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentCarouselIndex(prev => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className="section-wrapper">
      {/* full image */}
      {image.type === "full" && !(isMobile && (image.typeIfMobile === "carousel")) && (
        <div className="section h-screen flex flex-col md:flex-row items-center justify-center bg-white px-8 gap-50">
          <Image
            width={600}
            height={400}
            src={image.src}
            alt={`Image ${index + 1}`}
            className="h-3/4 max-w-full object-contain p-8 bg-white"
          />
          <div>
            {isFirstImage && project.description && (
              <div className="text-center md:text-left overflow-hidden">
                <p className="max-w-lg md:ml-8 overflow-hidden text-ellipsis text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                  {project.description}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* side-by-side images */}
      {image.type === "side" && (
        <div className={`flex flex-col md:flex-row justify-center items-center p-20 mb-30 ${isFirstImage && project.description ? "gap-10" : "gap-80"}`}>
          {/* first image */}
          <Image
            width={300}
            height={175}
            src={image.src}
            alt={`Side Image ${index + 1}`}
            className="bg-white"
          />

          {/* description (if first image) */}
          {isFirstImage && project.description && (
            <div className="text-center md:text-left h-1/2">
              <p className="max-w-lg md:ml-8 text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                {project.description}
              </p>
            </div>
          )}

          {/* second image (if exists) */}
          {project.images[index + 1]?.type === "side" && (
            <div className={`${isFirstImage && project.description ? "ml-10" : ""}`}>
              <Image
                width={300}
                height={175}
                src={project.images[index + 1].src}
                alt={`${project.title}`}
                className="bg-white"
              />
            </div>
          )}
        </div>
      )}

      {/* carousel images for mobiles*/}
      {image.typeIfMobile === "carousel" && index === 0 && (
        <div className="md:hidden p-20 mb-30">
          <div className="relative">
            <Image
              width={300}
              height={175}
              src={carouselImages[currentCarouselIndex].src}
              alt={`Carousel Image ${currentCarouselIndex + 1}`}
              className="bg-white mx-auto"
            />
            <div className="flex justify-center mt-4">
              <button onClick={prevImage} className="px-4 py-2 bg-gray-200 rounded-l">
                ←
              </button>
              <span className="px-4 py-2 bg-gray-100">
                {currentCarouselIndex + 1}/{carouselImages.length}
              </span>
              <button onClick={nextImage} className="px-4 py-2 bg-gray-200 rounded-r">
                →
              </button>
            </div>
          </div>
          <div className="text-center md:text-left overflow-hidden">
            <p className="max-w-lg md:ml-8 overflow-hidden text-ellipsis text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl">
              {project.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default function Home() {
  const [showAJ, setShowAJ] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // get the first project element
      const firstProject = document.getElementById("project-0");
      if (firstProject) {
        // check if the first project is out of view
        const rect = firstProject.getBoundingClientRect();
        if (rect.bottom < 0) {
          setShowAJ(false); // hide "A - J" when the first project is scrolled out of view
        } else {
          setShowAJ(true); // show "A - J" before and when the first project is in view
        }
      }
    };

    // scroll event listener
    window.addEventListener("scroll", handleScroll);

    // cleanup the event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white text-black">
      <Header />

      {/* fixed "A - J" text */}
      <div
        className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold z-50 transition-opacity duration-500 ${showAJ ? "opacity-100" : "opacity-0"
          }`}
      >
        A - J
      </div>

      <div className="flex justify-center">
        <Image
          width={400}
          height={300}
          src={image1}
          alt={`AMJAD JANJOUN`}
          className="pt-20 pb-20"
        />
      </div>

      <div className="m-bottom-1/4">
        {projects?.map((project, projectIndex) => {
          return (
            <div key={projectIndex} id={`project-${projectIndex}`}> {/* ID for scrolling */}
              {project.title && (
                <h1 className="flex justify-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
                  {project.title}
                </h1>
              )}

              {project.images.map((image, imageIndex) => (
                <Section
                  key={`${projectIndex}-${imageIndex}`}
                  project={project as ProjectData}
                  image={image as ImageData}
                  index={imageIndex}
                />
              ))}
            </div>
          );
        })}
      </div>

      <Footer />
    </div>
  );
}