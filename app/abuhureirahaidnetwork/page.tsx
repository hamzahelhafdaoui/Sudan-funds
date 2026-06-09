"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart, Droplets, UtensilsCrossed, Users, ArrowRight, ExternalLink, ChevronDown } from "lucide-react"
import { useState } from "react"

function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/ahan-gaza-water.jpg"
          alt="Abu Hureirah Aid Network distributing water in Gaza"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/60 to-stone-950/90" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6 px-4 py-20 text-center max-w-4xl mx-auto">
        <div className="flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-sm font-medium tracking-wide text-amber-200">Active in Gaza & Sudan</span>
        </div>

        <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl text-balance">
          Abu Hureirah Aid Network
        </h1>

        <p className="text-xl font-semibold text-amber-300 md:text-2xl tracking-wide">
          Direct aid. No middlemen. 100% grassroots.
        </p>

        <p className="max-w-2xl text-base text-stone-300 md:text-lg leading-relaxed text-pretty">
          A volunteer-driven organization providing emergency food, water, and essential supplies directly to families in Gaza and Sudan. Partnered with community kitchens and local initiatives on the ground.
        </p>

        <div className="flex flex-col gap-3 mt-4 w-full max-w-sm sm:flex-row sm:max-w-none sm:justify-center">
          <a
            href="https://tinyurl.com/abuhureirahaidnetwork"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-8 py-4 text-lg font-bold text-stone-950 transition-colors hover:bg-amber-400 min-h-[48px]"
          >
            <Heart className="h-5 w-5" />
            Donate Now
          </a>
          <a
            href="#our-work"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-stone-400/30 bg-stone-800/50 px-8 py-4 text-lg font-medium text-stone-200 transition-colors hover:bg-stone-700/50 min-h-[48px]"
          >
            See Our Work
            <ChevronDown className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

function ImpactNumbers() {
  const stats = [
    { icon: UtensilsCrossed, label: "Meals Distributed", value: "Thousands" },
    { icon: Droplets, label: "Clean Water Deliveries", value: "Ongoing" },
    { icon: Users, label: "Families Reached", value: "Hundreds" },
    { icon: Heart, label: "Volunteer-Powered", value: "100%" },
  ]

  return (
    <section className="bg-stone-900 py-16 px-4">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-2 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/15">
                <stat.icon className="h-6 w-6 text-amber-400" />
              </div>
              <span className="text-xl font-bold text-white md:text-2xl">{stat.value}</span>
              <span className="text-sm text-stone-400">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function OurWorkSection() {
  return (
    <section id="our-work" className="bg-stone-950 py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl text-balance">On the Ground, Where It Matters</h2>
          <p className="mt-4 max-w-2xl mx-auto text-stone-400 text-base md:text-lg leading-relaxed">
            Our teams work directly in Gaza and Sudan, partnering with community kitchens and local initiatives to deliver aid where it is needed most.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="group relative overflow-hidden rounded-xl">
            <div className="aspect-[4/3] relative">
              <Image
                src="/images/ahan-sudan-kitchen.jpg"
                alt="Community kitchen in Sudan where Abu Hureirah Aid Network volunteers prepare and distribute meals to displaced families"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-amber-500/20 px-3 py-1 text-xs font-medium text-amber-300 border border-amber-500/20">
                <UtensilsCrossed className="h-3 w-3" />
                Sudan
              </div>
              <h3 className="text-xl font-bold text-white md:text-2xl">Community Kitchens</h3>
              <p className="mt-2 text-sm text-stone-300 leading-relaxed md:text-base">
                Partnered with multiple community kitchens across Sudan, providing daily meals to displaced families. We help fund and keep these kitchens operational so they can continue feeding those who have lost everything.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl">
            <div className="aspect-[4/3] relative">
              <Image
                src="/images/ahan-gaza-water.jpg"
                alt="Abu Hureirah Aid Network water truck distributing clean water to families and children in Gaza"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-sky-500/20 px-3 py-1 text-xs font-medium text-sky-300 border border-sky-500/20">
                <Droplets className="h-3 w-3" />
                Gaza
              </div>
              <h3 className="text-xl font-bold text-white md:text-2xl">Water Distribution</h3>
              <p className="mt-2 text-sm text-stone-300 leading-relaxed md:text-base">
                Our teams in Gaza distribute clean water directly to families and children. With water infrastructure devastated, every delivery is a lifeline for communities struggling to survive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function MissionSection() {
  return (
    <section className="bg-stone-900 py-20 px-4">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl text-balance">Why We Exist</h2>
        <p className="mt-6 text-base text-stone-300 md:text-lg leading-relaxed max-w-3xl mx-auto">
          When war breaks out, the people who suffer most are the ones who were already vulnerable. Large organizations move slowly. Bureaucracy delays aid. Families cannot wait.
        </p>
        <p className="mt-4 text-base text-stone-300 md:text-lg leading-relaxed max-w-3xl mx-auto">
          Abu Hureirah Aid Network was built to cut through that. We are a grassroots, volunteer-driven network that gets resources directly to the people who need them. Every dollar donated goes toward food, water, medicine, and essential supplies. No overhead. No corporate salaries. Just direct, human-to-human aid.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-stone-700/50 bg-stone-800/50 p-6">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/15">
              <Heart className="h-6 w-6 text-amber-400" />
            </div>
            <h3 className="text-lg font-bold text-white">100% Grassroots</h3>
            <p className="mt-2 text-sm text-stone-400 leading-relaxed">
              No corporate structure. No overhead costs. Every donation goes directly to aid on the ground.
            </p>
          </div>

          <div className="rounded-xl border border-stone-700/50 bg-stone-800/50 p-6">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/15">
              <Users className="h-6 w-6 text-amber-400" />
            </div>
            <h3 className="text-lg font-bold text-white">Local Partners</h3>
            <p className="mt-2 text-sm text-stone-400 leading-relaxed">
              We work with community kitchens and local initiatives already embedded in the communities they serve.
            </p>
          </div>

          <div className="rounded-xl border border-stone-700/50 bg-stone-800/50 p-6">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/15">
              <ExternalLink className="h-6 w-6 text-amber-400" />
            </div>
            <h3 className="text-lg font-bold text-white">Full Transparency</h3>
            <p className="mt-2 text-sm text-stone-400 leading-relaxed">
              We document our work and share proof of every distribution so donors can see exactly where their money goes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhereWeWork() {
  return (
    <section className="bg-stone-950 py-20 px-4">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-white text-center md:text-4xl text-balance">Where We Operate</h2>
        <p className="mt-4 text-center text-stone-400 text-base md:text-lg max-w-2xl mx-auto">
          Active teams on the ground in two of the world's most urgent humanitarian crises.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-stone-700/50 bg-stone-900/50 p-8">
            <div className="mb-4 text-3xl font-bold text-amber-400">Gaza</div>
            <ul className="flex flex-col gap-3 text-stone-300 text-sm md:text-base">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-400 shrink-0" />
                Water truck distribution to families and children
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-400 shrink-0" />
                Emergency food packages
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-400 shrink-0" />
                Medical supply delivery
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-400 shrink-0" />
                Direct aid to displaced communities
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-stone-700/50 bg-stone-900/50 p-8">
            <div className="mb-4 text-3xl font-bold text-amber-400">Sudan</div>
            <ul className="flex flex-col gap-3 text-stone-300 text-sm md:text-base">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-400 shrink-0" />
                Partnered with multiple community kitchens
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-400 shrink-0" />
                Funding and sustaining local food initiatives
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-400 shrink-0" />
                Emergency relief for displaced families
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-400 shrink-0" />
                Essential supplies distribution
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function DonateSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/ahan-sudan-kitchen.jpg"
          alt="Community kitchen operations in Sudan"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-stone-950/85" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-white md:text-5xl text-balance">Every Dollar Reaches a Family</h2>
        <p className="mt-6 text-base text-stone-300 md:text-lg leading-relaxed max-w-2xl mx-auto">
          No admin fees. No overhead. Your donation goes directly to buying food, water, and essential supplies for families in crisis. We are entirely volunteer-run.
        </p>
        <a
          href="https://tinyurl.com/abuhureirahaidnetwork"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-10 py-5 text-xl font-bold text-stone-950 transition-colors hover:bg-amber-400 min-h-[48px]"
        >
          <Heart className="h-6 w-6" />
          Donate Now
          <ArrowRight className="h-5 w-5" />
        </a>
        <p className="mt-4 text-sm text-stone-500">
          All donations processed securely through GoFundMe
        </p>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-stone-950 border-t border-stone-800 py-10 px-4">
      <div className="mx-auto max-w-5xl flex flex-col items-center gap-6">
        <div className="text-center">
          <div className="text-lg font-bold text-white">Abu Hureirah Aid Network</div>
          <p className="mt-1 text-sm text-stone-500">Direct aid. No middlemen. 100% grassroots.</p>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/" className="text-sm text-stone-400 hover:text-amber-400 transition-colors min-h-[44px] flex items-center">
            SudanFunds
          </Link>
          <a
            href="https://tinyurl.com/abuhureirahaidnetwork"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-stone-400 hover:text-amber-400 transition-colors min-h-[44px] flex items-center"
          >
            Donate
          </a>
        </div>
        <p className="text-xs text-stone-600">A SudanFunds verified initiative</p>
      </div>
    </footer>
  )
}

export default function AbuHureirahAidNetwork() {
  return (
    <div className="min-h-screen bg-stone-950">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-950/80 backdrop-blur-md border-b border-stone-800/50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="text-base font-bold text-white md:text-lg">Abu Hureirah Aid Network</div>
          </div>
          <a
            href="https://tinyurl.com/abuhureirahaidnetwork"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-bold text-stone-950 transition-colors hover:bg-amber-400 min-h-[44px]"
          >
            <Heart className="h-4 w-4" />
            Donate
          </a>
        </div>
      </nav>

      <main>
        <HeroSection />
        <ImpactNumbers />
        <OurWorkSection />
        <MissionSection />
        <WhereWeWork />
        <DonateSection />
      </main>

      <Footer />
    </div>
  )
}
