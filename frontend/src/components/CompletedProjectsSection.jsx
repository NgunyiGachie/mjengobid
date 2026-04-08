import ProjectCard from "./ProjectCard";

function CompletedProjectsSection() {
  const projects = [
    {
      title: "Modern Residential House",
      location: "Karen, Nairobi",
      tag: "Residential",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
    {
      title: "Commercial Office Complex",
      location: "Westlands, Nairobi",
      tag: "Commercial",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
    },
    {
      title: "Luxury Interior Fit-out",
      location: "Kilimani, Nairobi",
      tag: "Interior",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    },
    {
      title: "Corporate Headquarters",
      location: "Upper Hill, Nairobi",
      tag: "Commercial",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
    },
    {
      title: "Industrial Warehouse",
      location: "Mombasa Road",
      tag: "Industrial",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
    },
    {
      title: "Contemporary Villa",
      location: "Runda, Nairobi",
      tag: "Residential",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    },
  ];

  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-neutral-900">
            Completed Projects
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Trusted by contractors and developers across Kenya
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CompletedProjectsSection;