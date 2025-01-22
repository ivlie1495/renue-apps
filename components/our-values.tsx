'use client'

import { Target, Heart, Shield, ShirtIcon } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { cn } from '@/libs/ui'

const values = [
  {
    icon: Target,
    iconColor: 'text-blue-600',
    title: 'Purposeful',
    content:
      'We are committed to making a positive difference to the environment, to supporting and changing lives, and to inspiring change for a brighter future.',
  },
  {
    icon: Heart,
    iconColor: 'text-red-500',
    title: 'Passionate',
    content:
      'We bring energy and enthusiasm to everything we do, driven by our belief in the power of positive change.',
  },
  {
    icon: Heart,
    iconColor: 'text-yellow-400',
    title: 'Caring',
    content:
      'We put people first, fostering an environment of empathy, support, and understanding.',
  },
  {
    icon: Shield,
    iconColor: 'text-blue-600',
    title: 'Authentic',
    content:
      'We stay true to our principles, maintaining transparency and honesty in all our interactions.',
  },
  {
    icon: ShirtIcon,
    iconColor: 'text-red-500',
    title: 'Inclusive',
    content:
      'We celebrate diversity and create an environment where everyone feels welcome and valued.',
  },
]

export default function OurValues() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-4xl font-medium">Our values</h2>
        <p className="text-xl text-muted-foreground">
          Guiding principles behind everything we do
        </p>
      </div>

      <Accordion type="single" collapsible className="space-y-4">
        {values.map(({ icon: Icon, iconColor, title, content }, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="rounded-lg border bg-gray-50/50 px-6"
          >
            <AccordionTrigger className="py-6 hover:no-underline">
              <div className="flex items-center gap-4">
                <Icon className={cn('h-6 w-6', iconColor)} />
                <span className="text-xl font-medium">{title}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-6 text-base text-muted-foreground">
              {content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
