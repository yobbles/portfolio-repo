// app/components/ProjectCard.tsx
'use client'

import { ChevronDown, ChevronRight, ExternalLink, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface ProjectCardProps {
  title: string;
  content: string;
  media: {
    type: 'video' | 'image';
    src: string;
  };
  link: string;
  linkText?: string;
}

export default function ProjectCard({ title, content, media, link, linkText }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMediaModalOpen, setIsMediaModalOpen] = useState(false);

  // Prevent modal click from triggering card expansion
  const handleMediaClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMediaModalOpen(true);
  };

  // Modal close handler
  const handleModalClose = () => {
    setIsMediaModalOpen(false);
  };

  return (
    <>
      <div 
        className={`
          bg-white rounded-xl border border-gray-200
          transition-all duration-300 cursor-pointer
          ${isExpanded ? 'shadow-xl' : 'shadow hover:shadow-lg'}
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex flex-col lg:flex-row p-6">
          {/* Content Section */}
          <div className="flex-1 lg:pr-6">
            <div className="flex items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">{title}</h3>
              {isExpanded ? (
                <ChevronDown className="ml-2 w-5 h-5 text-gray-600" />
              ) : (
                <ChevronRight className="ml-2 w-5 h-5 text-gray-600" />
              )}
            </div>
            
            <div 
              className={`
                relative overflow-hidden transition-all duration-300 ease-in-out
                ${isExpanded ? 'max-h-[2000px]' : 'max-h-48'}
              `}
            >
              <div className="text-gray-700 whitespace-pre-line">
                {content}
              </div>
              
              {!isExpanded && (
                <div className={`
                  absolute bottom-0 left-0 right-0 
                  h-24 bg-gradient-to-t from-white to-transparent
                  flex items-end justify-center pb-4
                  ${isHovered ? 'opacity-100' : 'opacity-0'}
                  transition-opacity duration-300
                `}>
                  <span className="text-blue-600 font-medium">
                    Click to read more
                  </span>
                </div>
              )}
            </div>

            <a 
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-800"
              onClick={(e) => e.stopPropagation()}
            >
              {linkText || 'Visit Project'} <ExternalLink className="ml-1 w-4 h-4" />
            </a>
          </div>

          {/* Media Section */}
          <div className="w-full lg:w-72 mt-4 lg:mt-0 flex-shrink-0" onClick={handleMediaClick}>
            {media.type === 'video' ? (
              <video 
                className="w-full rounded-lg object-cover cursor-pointer h-48"
                loop
                muted
                autoPlay={false}
              >
                <source src={media.src} type="video/mp4" />
              </video>
            ) : (
              <div className="relative w-full h-48 rounded-lg overflow-hidden cursor-pointer">
                <Image
                  src={media.src}
                  alt={title}
                  fill
                  className="object-cover hover:opacity-90 transition-opacity"
                  sizes="(max-width: 768px) 100vw, 288px"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Media Modal */}
      {isMediaModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={handleModalClose}
        >
          <div className="relative max-w-4xl w-full">
            <button
              onClick={handleModalClose}
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
            >
              <X className="w-6 h-6" />
            </button>
            
            {media.type === 'video' ? (
              <video 
                className="w-full rounded-lg"
                controls
                autoPlay
              >
                <source src={media.src} type="video/mp4" />
              </video>
            ) : (
              <div className="relative w-full h-[80vh]">
                <Image
                  src={media.src}
                  alt={title}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}