import Image from "next/image";
import type { ProjectMedia } from "@/lib/projects";

/**
 * Responsive album of project media (photos + videos).
 *
 * Each item renders through `GalleryItem`, which is the seam a future lightbox/fullscreen
 * viewer plugs into — it would wrap the same item in a trigger without changing the media
 * data model or this component's public API.
 */
export default function ProjectGallery({ media }: { media: ProjectMedia[] }) {
  if (media.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-border px-6 py-16 text-center">
        <p className="text-sm text-muted">No media has been added to this project yet.</p>
      </div>
    );
  }

  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {media.map((item, i) => (
        <li
          key={`${item.src}-${i}`}
          // First item spans the full width to anchor the album.
          className={i === 0 ? "sm:col-span-2" : undefined}
        >
          <GalleryItem item={item} priority={i === 0} />
        </li>
      ))}
    </ul>
  );
}

function GalleryItem({ item, priority }: { item: ProjectMedia; priority: boolean }) {
  return (
    <figure className="flex flex-col gap-2">
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-border bg-canvas-alt">
        {item.type === "image" ? (
          <Image
            src={item.src}
            alt={item.alt}
            fill
            sizes={priority ? "(min-width: 640px) 100vw, 100vw" : "(min-width: 640px) 50vw, 100vw"}
            className="object-cover"
          />
        ) : (
          <video
            src={item.src}
            poster={item.poster}
            controls
            // Nothing is fetched until the viewer presses play — keeps the page light and
            // avoids a request for videos that haven't been added yet.
            preload="none"
            className="h-full w-full object-cover"
          />
        )}
      </div>
      {item.caption && (
        <figcaption className="text-xs leading-relaxed text-muted">{item.caption}</figcaption>
      )}
    </figure>
  );
}
