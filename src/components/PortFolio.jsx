import React from "react";
import sortingVisualizerImg from "./sorting-visualizer.png"; // Corrected the import path
import CodepenClone from "./Screenshot (281).png";
import Newsnexus from "./Screenshot (280).png";

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      name: "Interactive Code Editor",
      description:
        "Built using React and Material-UI, featuring syntax highlighting and real-time preview.",
      image: CodepenClone, // Image path for CodepenClone
      videoLink: "#", // Add the video link if available
      sourceCodeLink: "#", // Add the source code repository link if available
    },
    {
      id: 2,
      name: "Sorting Visualizer",
      description:
        "An engaging visualization tool to demonstrate sorting algorithms using HTML, CSS, and JavaScript.",
      image: sortingVisualizerImg, // Image path for Sorting Visualizer
      videoLink: "#", // Add the video link if available
      sourceCodeLink: "#", // Add the source code repository link if available
    },
    {
      id: 3,
      name: "NewsNexus",
      description:
        "A news website with dynamic content fetched via the News API and interactive navigation.",
      image: Newsnexus, // Image path for NewsNexus
      videoLink: "#", // Add the video link if available
      sourceCodeLink: "#", // Add the source code repository link if available
    },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        {/* Portfolio Title */}
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className="underline font-semibold">Featured Projects</span>

        {/* Grid Layout for Projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-5">
          {cardItem.map(({ id, name, description, image, videoLink, sourceCodeLink }) => (
            <div
              className="md:w-[300px] md:h-[400px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              {/* Image Section */}
              <img
                src={image}
                className="w-full h-[200px] object-cover rounded-t-lg"
                alt={name}
              />

              {/* Project Information Section */}
              <div>
                <div className="px-2 font-bold text-xl my-2">{name}</div>
                <p className="px-2 text-gray-700">{description}</p>
              </div>

              {/* Action Buttons Section */}
              <div className="px-6 py-4 space-x-3 justify-around">
                <a
                  href={videoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"
                >
                  Video
                </a>
                <a
                  href={sourceCodeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"
                >
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
