"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import projects from "./imports/projects";
import image1 from "../../public/images/page1.png";

export interface ImageData {
  type: "full" | "side";
  src: string;
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
  afterPack,
}: {
  project: ProjectData;
  image: ImageData;
  index: number;
  afterPack: boolean;
}) => {
  const isFirstImage = index === 0;

  if (image.type === "side" && index > 0 && project.images[index - 1]?.type === "side") {
    return null;
  }

  return (
    <div className="section-wrapper">
      {/* full image */}
      {image.type === "full" && (
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
      {/* side-by-side images */}
      {image.type === "side" && (
        <div className={`flex flex-col md:flex-row justify-center items-center p-20 mb-30 ${isFirstImage && project.description ? "gap-10" : "gap-80"}`}>
          {/* First Image */}
          <Image
            width={300}
            height={175}
            src={image.src}
            alt={`Side Image ${index + 1}`}
            className="bg-white"
          />

          {/* Description (if first image) */}
          {isFirstImage && project.description && (
            <div className="text-center md:text-left h-1/2">
              <p className="max-w-lg md:ml-8" style={{ fontSize: "clamp(0.75rem, 2vw, 1.25rem)" }}>
                {project.description}
              </p>
            </div>
          )}

          {/* Second Image (if exists) */}
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
    </div>
  );
};

export default function Home() {
  const [showAJ, setShowAJ] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Get the first project element
      const firstProject = document.getElementById("project-0");
      if (firstProject) {
        // Check if the first project is out of view
        const rect = firstProject.getBoundingClientRect();
        if (rect.bottom < 0) {
          setShowAJ(false); // Hide "A - J" when the first project is scrolled out of view
        } else {
          setShowAJ(true); // Show "A - J" when the first project is in view
        }
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
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
          const afterPack = projectIndex >= 1;
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
                  afterPack={afterPack}
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