// app/components/Portfolio.tsx
'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { GraduationCap, Code, User, Award, Instagram, Linkedin, Github, Mail } from 'lucide-react';
import GoodreadsWidget from './GoodreadsWidget';
import ProjectCard from './ProjectCard';
import { portfolioData } from '@/lib/data';
import { Section } from './Section';

export default function Portfolio() {
  const [data] = useState(portfolioData);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section 
        className="h-screen bg-cover bg-center relative"
        style={{ backgroundImage: `url(${data.backgroundImage})` }}
      >
        {/* Background Location Text */}
        <div className="absolute bottom-4 left-4 z-20">
          <div className="flex items-center space-x-2 text-white">
            <span className="text-2xl font-light">〔</span>
            <span className="text-base font-semibold font-inter">{data.backgroundLocation}</span>
            <span className="text-2xl font-light">〕</span>
          </div>
        </div>

        {/* Navigation */}
        <div className="absolute top-4 w-full z-50">
          <nav className="max-w-2xl mx-auto bg-black/30 backdrop-blur-sm rounded-xl px-8 py-3 border border-white/70">
            <div className="flex justify-center space-x-10">
              {['About', 'Timeline', 'Education', 'Projects', 'Skills', 'Contact'].map(item => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-50 hover:text-white text-lg tracking-wide transition-colors font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
          </nav>
        </div>

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <div className="mb-6 w-32 h-32 rounded-full overflow-hidden border-4 border-white relative">
            <Image 
              src={data.profilePicture} 
              alt="Profile"
              fill
              className="object-cover"
              sizes="(max-width: 128px) 100vw, 128px"
              priority
            />
          </div>
          <h1 className="text-6xl font-bold text-center font-sans tracking-tight">{data.name}</h1>
          <h2 className="text-2xl mt-4 font-medium tracking-wide">{data.title}</h2>
          <a 
            href={data.resumePath}
            target="_blank" 
            rel="noopener noreferrer" 
            className="mt-8 px-6 py-2 border-2 border-white rounded-full hover:bg-white hover:text-gray-900 transition-colors"
          >
            View Resume
          </a>
        </div>
      </section>

      {/* About Section */}
      <Section id="about" icon={User} title="About Me">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm text-gray-700 border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">What I Do</h3>
              <div className="mb-6" dangerouslySetInnerHTML={{ __html: data.whatIDo }} />

              <h3 className="text-xl font-semibold mb-4">What I Like</h3>
              <p className="mb-6">{data.whatILike}</p>

              <h3 className="text-xl font-semibold mb-4">Check Out My Goodreads</h3>
              <a
                href={data.goodreadsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                See what I'm reading on Goodreads →
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex items-start justify-center">
            <GoodreadsWidget />
          </div>
        </div>
      </Section>

      {/* Timeline Section */}
      <Section id="timeline" icon={GraduationCap} title="Timeline">
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300" />
          
          {data.timeline.map((item, index) => (
            <div
              key={index}
              className={`mb-16 flex w-full mx-auto items-center relative ${
                item.side === 'L' ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              <div className="w-5/12">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-2">{item.date}</p>
                  <p className="text-gray-700 mb-2">{item.description}</p>
                  {item.links?.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors block mb-4"
                    >
                      {link.text || 'View Resource'}
                    </a>
                  ))}
                  {item.media && (
                    <div className="w-full h-48 rounded-lg overflow-hidden relative">
                      {item.media.endsWith('.mp4') ? (
                        <video className="w-full h-full object-cover" controls>
                          <source src={item.media} type="video/mp4" />
                        </video>
                      ) : (
                        <Image
                          src={item.media}
                          alt={item.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      )}
                    </div>
                  )}
                </div>
              </div>

              <div className="w-2/12 flex justify-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full" />
              </div>

              <div className="w-5/12" />
            </div>
          ))}
        </div>
      </Section>

      {/* Education Section */}
      <Section id="education" icon={GraduationCap} title="Education">
        <div className="space-y-8">
          {data.education.map((edu, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{edu.degree}</h3>
              <a 
                href="https://www.cs.queensu.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 mb-2 font-medium hover:text-blue-800 transition-colors"
              >
                {edu.school}
              </a>
              <p className="text-gray-600 leading-relaxed mt-2">{edu.description}</p>
              <p className="text-gray-600 leading-relaxed">{edu.deans_list}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" icon={Code} title="Featured Projects">
        <div className="flex flex-col space-y-8">
          {data.projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              content={project.content}
              media={project.media}
              link={project.link}
              linkText={project.linkText}
            />
          ))}
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" icon={Award} title="Skills">
        <div className="space-y-4">
          {Object.entries(data.skills).map(([category, skills]: [string, string[]]) => (
            <div key={category} className="mb-2">
              <div className="flex flex-wrap justify-center gap-1">
                {skills.map((skill: string, index: number) => (
                  <div 
                    key={index} 
                    className="px-4 py-2 bg-white shadow-sm text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>


      {/* Contact Section */}
      <section id="contact" className="py-12 bg-zinc-800">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6 text-white flex items-center justify-center">
            Contact Me
          </h2>
          <div className="flex justify-center space-x-4">
            {[
              { Icon: Instagram, url: data.socials.instagram },
              { Icon: Linkedin, url: data.socials.linkedin },
              { Icon: Github, url: data.socials.github },
              { Icon: Mail, url: `mailto:${data.socials.email}` }
            ].map(({ Icon, url }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-zinc-700 rounded-lg text-gray-200 hover:bg-zinc-600 transition-colors flex items-center"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}