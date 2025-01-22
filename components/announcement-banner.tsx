'use client'

import * as React from 'react'
import Marquee from 'react-fast-marquee'
import { cn } from '@/libs/ui'

const announcements = [
  {
    id: '1',
    text: 'Bukit Merah Family Store is open! Visit Us from Monday-Saturday 9am - 6pm',
  },
  {
    id: '2',
    text: 'Permanent Closure of the i12 Katong Salvation Army Donation Booth from 22nd Jan 2024',
  },
]

export function AnnouncementBanner() {
  return (
    <div
      className={
        'overflow-hidden whitespace-nowrap bg-black py-1 text-sm text-white'
      }
    >
      <Marquee>
        {announcements.map((announcement, index) => (
          <span
            key={announcement.id}
            className={cn(index === announcements.length - 1 && 'pr-8')}
          >
            {announcement.text}
            {index !== announcements.length - 1 && (
              <span className="mx-4">•</span>
            )}
          </span>
        ))}
      </Marquee>
    </div>
  )
}
