import { useState } from "react"
import type { CSSProperties } from "react"
import "./MasonryGallery.css"

type MasonryItem = {
  image: string
  caption?: string
}

type MasonryGalleryProps = {
  items: MasonryItem[]
  gap?: number
  radius?: number
}

const MasonryGallery = ({ items, gap = 16, radius = 16 }: MasonryGalleryProps) => {
  const [activeItem, setActiveItem] = useState<MasonryItem | null>(null)

  return (
    <>
      <div className="masonry-gallery" style={{ "--masonry-gap": `${gap}px`, "--masonry-radius": `${radius}px` } as CSSProperties}>
        {items.map((item) => (
          <button key={item.image} type="button" className="masonry-item" onClick={() => setActiveItem(item)}>
            <img src={item.image} alt={item.caption || "Portfolio image"} />
            {item.caption && <span className="masonry-caption">{item.caption}</span>}
          </button>
        ))}
      </div>

      {activeItem && (
        <div className="masonry-lightbox" role="dialog" aria-modal="true" aria-label="Expanded portfolio image" onClick={() => setActiveItem(null)}>
          <button type="button" className="masonry-lightbox-close" aria-label="Close expanded image" onClick={() => setActiveItem(null)}>×</button>
          <img src={activeItem.image} alt={activeItem.caption || "Expanded portfolio image"} onClick={(event) => event.stopPropagation()} />
          {activeItem.caption && <p>{activeItem.caption}</p>}
        </div>
      )}
    </>
  )
}

export default MasonryGallery