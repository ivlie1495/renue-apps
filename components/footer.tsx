import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <>
      <div className="relative h-12 bg-[#FFD700]">
        <Image src="/images/shape.png" fill alt="shape" />
      </div>
      <footer className="bg-[#000000] text-[#ffffff]">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {/* Column 1 - Logo and Description */}
            <div className="space-y-6">
              <Link href="/" className="inline-block">
                <Image
                  width={200}
                  height={35}
                  src="/images/renue-white.png"
                  alt="Re:Nue Logo"
                />
              </Link>
              <p className="text-sm leading-relaxed opacity-90">
                Re:Nue, a social enterprise under The Salvation Army, is
                passionate about sustainability and community impact since 1996.
                By re-purposing and reselling your generous donations, we
                generate funds to support vital programs for the community,
                including children, youth, the elderly, migrant workers, and
                ex-offenders.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="hover:opacity-80">
                  <Facebook className="h-6 w-6" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="hover:opacity-80">
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>
            {/* Column 2 - Company */}
            <div>
              <h2 className="mb-4 text-xl font-medium">Company</h2>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="hover:opacity-80">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:opacity-80">
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:opacity-80">
                    The Salvation Army
                  </Link>
                </li>
              </ul>
            </div>
            {/* Column 3 - Join us */}
            <div>
              <h2 className="mb-4 text-xl font-medium">Join us</h2>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="hover:opacity-80">
                    Volunteer
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:opacity-80">
                    Corporate partnerships
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:opacity-80">
                    Join as staff
                  </Link>
                </li>
              </ul>
            </div>
            {/* Column 4 - Contact */}
            <div>
              <h2 className="mb-4 text-xl font-medium">Contact</h2>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="mailto:customercare@smm.salvationarmy.org"
                    className="flex items-start hover:opacity-80"
                  >
                    <Mail className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span className="underline">
                      customercare@smm.salvationarmy.org
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="tel:+6562885438"
                    className="flex items-center hover:opacity-80"
                  >
                    <Phone className="mr-2 h-5 w-5 flex-shrink-0" />
                    +65 6288 5438
                  </Link>
                </li>
                <li className="flex items-start">
                  <MapPin className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p>356 Tanglin Road, Singapore 247674</p>
                    <p className="mt-1">
                      Operation Hours: 8:30 am - 5:30 pm (Mon-Sat)
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-[#3d3d3d]">
          <div className="container mx-auto flex flex-col items-center justify-between px-6 py-4 text-sm text-[#3d3d3d] md:flex-row">
            <div className="mb-2 flex space-x-4 md:mb-0">
              <Link href="#" className="text-white">
                Privacy policy
              </Link>
              <span>|</span>
              <Link href="#" className="text-white">
                Terms & conditions
              </Link>
            </div>
            <div className="text-white">
              © 2025 Re:Nue. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
