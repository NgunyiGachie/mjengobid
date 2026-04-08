function ProjectCard({ image, title, location, tag }) {
  return (
    <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition hover:shadow-md">
      <img src={image} alt={title} className="h-48 w-full object-cover" />

      <div className="p-4">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-sm font-semibold text-neutral-900">{title}</h3>
          <span className="rounded-full bg-neutral-100 px-2 py-1 text-xs text-neutral-600">
            {tag}
          </span>
        </div>

        <p className="mt-2 text-sm text-neutral-500">{location}</p>
      </div>
    </div>
  );
}

export default ProjectCard;