import { Store, ShoppingBasket, Users, HeartHandshake } from 'lucide-react'

import { Button } from '@/components/ui/button'

export default function AboutUs() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 text-center">
      <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-4">
        {/* Stores */}
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <Store className="h-12 w-12 text-[#21409c]" />
          </div>
          <h3 className="mb-2 text-xl font-medium">Stores</h3>
          <p className="text-5xl font-bold">4</p>
        </div>
        {/* Donation booths */}
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <ShoppingBasket className="h-12 w-12 text-[#ff0000]" />
          </div>
          <h3 className="mb-2 text-xl font-medium">Donation booths</h3>
          <p className="text-5xl font-bold">15</p>
        </div>
        {/* Partners */}
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <HeartHandshake className="h-12 w-12 text-[#f8ca11]" />
          </div>
          <h3 className="mb-2 text-xl font-medium">Partners</h3>
          <p className="text-5xl font-bold">9</p>
        </div>
        {/* Community */}
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <Users className="h-12 w-12 text-[#21409c]" />
          </div>
          <h3 className="mb-2 text-xl font-medium">Community</h3>
          <p className="text-5xl font-bold">10,000+</p>
        </div>
      </div>
      <div className="mx-auto mb-8 max-w-3xl">
        <p className="text-lg">
          As the social enterprise arm of The Salvation Army, Re:Nue aims to
          deliver excellent donation-in-kind service that meets underserved
          needs within our community.
        </p>
      </div>
      <Button className="rounded-full bg-black px-8 text-white">
        About Re:Nue
      </Button>
    </section>
  )
}
