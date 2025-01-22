'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu } from 'lucide-react'

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { AnnouncementBanner } from '@/components/announcement-banner'

const navigationItems = [
  { name: 'Thrift with us', href: '#' },
  { name: 'Donate', href: '#' },
  { name: 'Impact', href: '#' },
  { name: 'Get involved', href: '#' },
  { name: 'About us', href: '#' },
  { name: 'Contact', href: '#' },
]

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="w-full bg-background">
      <AnnouncementBanner />
      <div className="flex h-16 items-center justify-between gap-8 p-6 md:justify-start md:gap-20">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/renue.png"
            alt="renue Logo"
            width={160}
            height={45}
          />
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:gap-6">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Menu size={32} />
          </SheetTrigger>
          <SheetContent side="right">
            <SheetTitle className="mb-4">Menu</SheetTitle>
            <nav className="flex flex-col gap-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
