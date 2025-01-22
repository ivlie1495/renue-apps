export default function FAQ() {
  return (
    <section className="relative flex h-[300px] flex-col items-center justify-center">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/images/faq.png")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      {/* Content */}
      <div className="relative z-10 space-y-6 text-center">
        <h2 className="text-4xl font-medium text-white md:text-5xl">
          Questions on your mind?
        </h2>
        <a
          href="#"
          className="inline-block rounded-full bg-white px-8 py-3 font-medium text-black transition-colors"
        >
          See our FAQs
        </a>
      </div>
    </section>
  )
}
