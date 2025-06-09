import React from "react";
import { HorizontalCard } from "./HorizontalCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col h-auto xl:h-[110vw] items-start px-[5vw] sm:px-[8vw] lg:px-[10vw] bg-[#141516] "
    >
      {/* Section Title */}
      <div className="font-light tracking-[0.3em] uppercase font-sans text-white text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl pb-[5vw]">
        PROJECTS
      </div>

      {/* Description */}
      <div className="text-white text-sm sm:text-md md:text-xl lg:text-3xl xl:text-5xl leading-tight font-serifDisplay">
        Here are some of my favorite projects I have done lately. Feel free to check them out.
      </div>
        
        <HorizontalCard
          image="/plantspecies.webp"
          category="Machine Learning"
          title="Plant-Species-Recognition-CNN-Model"
          description="This project is a Convolutional Neural Network (CNN)-based model designed to identify different plant species from images. Trained on a dataset of 47 plant species with 180 images each, the model achieves an accuracy of 82%. Leveraging deep learning techniques, it extracts complex patterns from leaf and plant structures to make accurate classifications."
          link="https://github.com/Raunaq2102001/Plant-Species-Recognition-CNN-Model"
          number={1}
        />
        <HorizontalCard
          image="/plantspecies.webp"
          category="Startups"
          title="Lyft launching cross-platform service this week"
          description="Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses."
          link="#"
          number={2}
        />
        <HorizontalCard
          image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          category="Startups"
          title="Lyft launching cross-platform service this week"
          description="Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses."
          link="#"
          number={3}
        />
        <HorizontalCard
          image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          category="Startups"
          title="Lyft launching cross-platform service this week"
          description="Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses."
          link="#"
          number={4}
        />
        <div className="mb-[20vw]"></div>
    
    </section>
  );
}
