export default function ItemDescription({ name, description }) {
  return (
    <>
      <h3 className="text-xl font-semibold text-neutral-900 tracking-tight mb-2">{name}</h3>
      <p className="text-sm text-neutral-600 leading-relaxed mb-4">{description}</p>
    </>
  )
}
