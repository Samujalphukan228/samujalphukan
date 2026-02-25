"use client";

interface Project {
  name: string;
  description: string;
  image: string;
  url: string;
}

const projects: Project[] = [
  {
    name: "Resturent Managment",
    description: "A real-time restaurant management system that streamlines live order processing, table tracking, kitchen coordination, and billing with instant updates across all operations.",
    image: "https://res.cloudinary.com/dzulab559/image/upload/v1771825372/Screenshot_from_2026-02-23_11-12-39_diwla5.png",
    url: "https://resturent-beta-two.vercel.app/",
  },
  {
    name: "Project Origin",
    description: "A comprehensive restaurant management system for handling orders, tables, inventory, and billing with real-time tracking and efficient operations.",
    image: "https://res.cloudinary.com/dzulab559/image/upload/v1771825176/Screenshot_from_2026-02-23_11-09-18_lwydty.png",
    url: "https://project-origin-two.vercel.app/",
  },
  {
    name: "Project Forever",
    description: "A responsive eCommerce platform designed for seamless product browsing, secure checkout, and efficient order management.",
    image: "https://res.cloudinary.com/dzulab559/image/upload/v1771824521/Screenshot_from_2026-02-23_10-57-04_zbbnxn.png",
    url: "https://forever-v2.vercel.app/",
  },
];

export default function Work() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@300;400&display=swap');

        .project-img {
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .project-card:hover .project-img {
          transform: scale(1.05);
        }

        .project-card:hover .view-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        .view-arrow {
          opacity: 0;
          transform: translateX(-4px);
          transition: opacity 0.2s, transform 0.2s;
        }
      `}</style>

      <section className="py-20 px-7 w-full">

        {/* Section header */}
        <div className="flex items-end justify-between mb-14 border-b border-[#e8e8e8] pb-6">
          <p
            className="text-[11px] text-[#999] uppercase tracking-[0.25em]"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Work
          </p>
          <p
            className="text-[10px] text-[#bbb] uppercase tracking-[0.15em]"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            {projects.length} Projects
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {projects.map((project: Project, index: number) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card group block"
            >
              {/* Image */}
              <div className="overflow-hidden mb-5 aspect-[16/10] bg-[#f0f0f0]">
                <img
                  src={project.image}
                  alt={project.name}
                  className="project-img w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3
                    className="text-xl text-[#111] mb-2 leading-tight"
                    style={{ fontFamily: "'DM Serif Display', serif" }}
                  >
                    {project.name}
                  </h3>
                  <p
                    className="text-[12px] text-[#888] leading-relaxed"
                    style={{ fontFamily: "'DM Mono', monospace", fontWeight: 300 }}
                  >
                    {project.description}
                  </p>
                </div>

                <span
                  className="view-arrow text-[11px] text-[#111] shrink-0 mt-1"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  ↗
                </span>
              </div>
            </a>
          ))}
        </div>

      </section>
    </>
  );
}