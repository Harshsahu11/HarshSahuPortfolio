import type { IconType } from 'react-icons'

type ProjectVisualProps = {
  title: string
  gradient: string
  icon: IconType
  image: string
}

export function ProjectVisual({ title, gradient, icon: Icon, image }: ProjectVisualProps) {
  return (
    <div className={`relative h-44 overflow-hidden rounded-t-lg bg-gradient-to-br ${gradient} sm:h-56`}>
      <img src={image} alt={`${title} project screenshot`} className="size-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/88 via-[#050816]/14 to-transparent" />
      <div className="absolute left-4 top-4 grid size-10 place-items-center rounded-md border border-white/15 bg-[#050816]/80 text-gold backdrop-blur-md">
        <Icon className="text-2xl" />
      </div>
      <div className="absolute bottom-3 left-3 max-w-[calc(100%-1.5rem)] rounded-md border border-white/10 bg-[#050816]/80 px-3 py-2 text-xs font-black text-ice sm:bottom-4 sm:left-5 sm:text-sm">
        {title}
      </div>
    </div>
  )
}
