'use client'

import { useState } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import profilePic from './public/images/buzz.jpg'
export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }

  return (
    <main className="min-h-screen bg-background text-foreground py-12">
      <div className="container">
        <h1 className="text-center mb-12">My Portfolio</h1>

        {/* Photo Carousel */}
        <section className="mb-16">
          <h2 className="mb-4">Photo Gallery</h2>
          <Slider {...carouselSettings} className="max-w-3xl mx-auto">
            <div>
              <Image src={profilePic} alt="Coding" width={600} height={400} className="rounded-lg" />
            </div>
            <div>
              <Image src={profilePic} alt="Web Development" width={600} height={400} className="rounded-lg" />
            </div>
            <div>
              <Image src={profilePic} alt="Programming" width={600} height={400} className="rounded-lg" />
            </div>
          </Slider>
        </section>

        {/* Resume Image */}
        <section className="mb-16">
          <h2 className="mb-4">Resume</h2>
          <div className="max-w-3xl mx-auto card p-4">
            <Image 
              src="/placeholder.svg?height=800&width=600&text=Your+Resume+Here"
              alt="Resume"
              width={600}
              height={800}
              layout="responsive"
              className="rounded-lg"
            />
          </div>
        </section>

        {/* Scroll Animations */}
        <section className="mb-16">
          <h2 className="mb-4">My Projects</h2>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="card p-6">
                <h3 className="text-xl mb-2">Project {item}</h3>
                <p className="text-muted-foreground">This is a brief description of Project {item}. It showcases my skills in web development.</p>
              </div>
            ))}
          </motion.div>
        </section>
      </div>
    </main>
  )
}