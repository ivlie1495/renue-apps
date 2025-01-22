import Image from 'next/image'

export default function OurPillar() {
  return (
    <div className="flex min-h-screen items-center bg-[#21409c] p-4 md:p-8 lg:p-12">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Left Content */}
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-medium text-white/80">
              Re:Nue pillars
            </h2>
            <h1 className="mt-2 text-5xl font-bold text-white md:text-6xl lg:text-7xl">
              Store
            </h1>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-white/90 md:text-xl">
            Creating a fun and interesting thrifting experience, targeted at
            current customers and reaching out to younger, new generations who
            are interested in thrifting and repurposing.
          </p>
          <button className="rounded-full bg-white px-8 py-3 font-medium text-[#21409c] transition-colors">
            Donate your items
          </button>
        </div>
        {/* Right Image */}
        <div className="relative h-[300px] overflow-hidden rounded-3xl md:h-[400px] lg:h-[500px]">
          <Image
            fill
            src="/images/pillar.jpeg"
            alt="Modern Salvation Army store building with distinctive curved roof"
            className="h-full w-full rounded-3xl object-cover"
          />
        </div>
      </div>
    </div>
  )
}
