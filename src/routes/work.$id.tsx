import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { PROJECTS } from "@/data/portfolio";

type Project = (typeof PROJECTS)[number];

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
  const { project } = Route.useLoaderData() as { project: Project };
  const [idx, setIdx] = useState(0);

  return (
    <div className="min-h-screen bg-cream-100 text-ink">
      {/* Sub-header BELOW the site nav: back button + project title */}
      <div className="border-b border-cream-300 bg-cream-100">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 pt-24 sm:pt-28 pb-6 flex flex-col gap-3">
          <Link to="/" className="text-xs uppercase tracking-[0.25em] hover:text-orange-ascode w-fit">← Back to work</Link>
          <div>
            <h1 className="font-display text-2xl sm:text-4xl md:text-5xl">{project.title}</h1>
            <p className="mt-1 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-ink/60">
              {project.type} · {project.year} · {idx + 1} / {project.images.length}
            </p>
          </div>
        </div>
      </div>

      <main className="max-w-[1600px] mx-auto px-4 sm:px-8 py-6">
        <div className="grid grid-cols-12 gap-4 sm:gap-6">
          {/* Left side — thumbnails */}
          <aside className="col-span-12 md:col-span-2">
            <div className="flex md:flex-col gap-3 md:sticky md:top-24 md:max-h-[calc(100vh-8rem)] md:overflow-y-auto overflow-x-auto pb-2">
              {project.images.map((src, i) => (
                <button
                  key={src + i}
                  onClick={() => setIdx(i)}
                  className={`flex-shrink-0 w-24 md:w-full aspect-[4/3] overflow-hidden border-2 transition-all ${
                    i === idx ? "border-orange-ascode" : "border-cream-300 hover:border-ink/50"
                  }`}
                  aria-label={`Show image ${i + 1}`}
                >
                  <img src={src} alt={`thumb ${i + 1}`} className="w-full h-full object-cover bg-cream-50" loading="lazy" />
                </button>
              ))}
            </div>
          </aside>

          {/* Right side — full-size preview, scrollable, never cropped */}
          <section className="col-span-12 md:col-span-10">
            <div className="w-full bg-cream-200 border border-cream-300 overflow-auto" style={{ maxHeight: "calc(100vh - 10rem)" }}>
              <img
                src={project.images[idx]}
                alt={`${project.title} ${idx + 1}`}
                className="block w-full h-auto"
              />
            </div>
            <p className="mt-3 text-xs text-ink/60">Scroll to see the full image. Use thumbnails on the left to switch.</p>

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
          </section>
        </div>
      </main>
    </div>
  );
}
