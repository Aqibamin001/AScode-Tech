import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { PROJECTS } from "@/data/portfolio";

export const Route = createFileRoute("/work/$id")({
  component: WorkPreview,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center bg-cream-100 text-ink">
      <div className="text-center">
        <h1 className="font-display text-4xl mb-4">Project not found</h1>
        <Link to="/" className="underline">Back home</Link>
      </div>
    </div>
  ),
  loader: ({ params }) => {
    const project = PROJECTS.find((p) => p.id === params.id);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData?.project ? `${loaderData.project.title} — AScode Tech` : "Project" },
      { name: "description", content: loaderData?.project?.summary ?? "" },
    ],
  }),
});

function WorkPreview() {
  const { project } = Route.useLoaderData();
  const [idx, setIdx] = useState(0);
  const [zoom, setZoom] = useState(false);

  return (
    <div className="min-h-screen bg-cream-100 text-ink">
      <header className="sticky top-0 z-30 bg-cream-100/90 backdrop-blur border-b border-cream-300">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 py-4 flex items-center justify-between gap-4">
          <Link to="/" className="text-xs uppercase tracking-[0.25em] hover:text-orange-ascode">← Back</Link>
          <div className="text-center min-w-0">
            <h1 className="font-display text-lg sm:text-2xl truncate">{project.title}</h1>
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-ink/60">{project.type} · {project.year}</p>
          </div>
          <div className="text-xs text-ink/60 whitespace-nowrap">{idx + 1} / {project.images.length}</div>
        </div>
      </header>

      <main className="max-w-[1600px] mx-auto px-2 sm:px-6 py-6">
        <div
          className="relative w-full bg-cream-200 border border-cream-300 overflow-auto flex items-center justify-center"
          style={{ height: "calc(100vh - 220px)", minHeight: 400 }}
          onClick={() => setZoom((z) => !z)}
          data-cursor-hover="true"
        >
          <img
            src={project.images[idx]}
            alt={`${project.title} ${idx + 1}`}
            className={`block transition-all duration-500 cursor-zoom-${zoom ? "out" : "in"} ${
              zoom
                ? "max-w-none w-auto h-auto scale-100"
                : "w-full h-full object-contain"
            }`}
          />
        </div>

        <div className="mt-4 flex gap-2 sm:gap-3 overflow-x-auto pb-2">
          {project.images.map((src, i) => (
            <button
              key={src + i}
              onClick={() => { setIdx(i); setZoom(false); }}
              className={`flex-shrink-0 w-24 sm:w-32 aspect-[4/3] overflow-hidden border-2 transition-all ${
                i === idx ? "border-orange-ascode" : "border-cream-300 hover:border-ink/50"
              }`}
              aria-label={`Show image ${i + 1}`}
            >
              <img src={src} alt={`thumb ${i + 1}`} className="w-full h-full object-cover bg-cream-50" loading="lazy" />
            </button>
          ))}
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6 pb-16">
          <div className="md:col-span-2">
            <p className="text-base sm:text-lg text-ink/80 leading-relaxed">{project.summary}</p>
          </div>
          <div className="flex flex-wrap gap-2 h-fit">
            {project.stack.map((t) => (
              <span key={t} className="px-3 py-1 text-xs border border-ink/30 rounded-full text-ink/80">{t}</span>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
