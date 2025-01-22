'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  contactMethod: z.enum(['email', 'mobile']),
  contact: z.string().min(1, {
    message: 'Please enter your contact information.',
  }),
  agreement: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the terms.',
  }),
})

export default function Community() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      contactMethod: 'email',
      agreement: false,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  const contactMethod = form.watch('contactMethod')

  return (
    <div className="grid min-h-screen bg-[#FFD700] p-6">
      <div className="flex items-center justify-center">
        <div className="flex flex-col gap-20 p-6 md:flex-row">
          <Image
            src="/images/community.jpeg"
            alt="People shopping"
            width={400}
            height={400}
            className="h-[550] w-[550] rounded-3xl object-cover"
            priority
          />
          <div className="max-w-md space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">
                Be part of the community
              </h1>
              <p className="text-gray-700">
                Join the{' '}
                <Link href="#" className="underline underline-offset-4">
                  Re:Nue community
                </Link>{' '}
                and unlock a world of exclusive perks and discounts when you
                shop with us!
              </p>
            </div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your name"
                          {...field}
                          className="rounded-3xl bg-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="contactMethod"
                  render={({ field }) => (
                    <FormItem className="space-y-1">
                      <FormLabel>Sign up with</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex gap-4"
                        >
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="email" />
                            </FormControl>
                            <FormLabel className="font-normal">Email</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="mobile" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Mobile number
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="contact"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder={
                            contactMethod === 'email'
                              ? 'Enter your email address'
                              : 'Enter your mobile number'
                          }
                          type={contactMethod === 'email' ? 'email' : 'tel'}
                          {...field}
                          className="rounded-3xl bg-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="agreement"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="mt-2"
                        />
                      </FormControl>
                      <div className="space-y-1">
                        <FormLabel>
                          By registering through this membership application
                          form, you agree that The Salvation Army Red Shield
                          Industries Singapore may collect, use and disclose
                          your personal data, as provided in this application
                          form, for the{' '}
                          <Link
                            href="#"
                            className="underline underline-offset-4"
                          >
                            following purposes
                          </Link>{' '}
                          in accordance with the Personal Data Protection Act
                          2012.
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full rounded-3xl bg-black text-white"
                >
                  Join now
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}
