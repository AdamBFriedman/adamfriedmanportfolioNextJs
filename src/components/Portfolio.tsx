// File: Portfolio.tsx

import { useState } from 'react';
import { useSelector } from 'react-redux';
// Import Next.js Link
import Link from 'next/link';

import FilterButtons from './FilterButtons';
import { isDarkModeStore } from './Navbar';
import { Project } from '@/data/interfaces';
import { AwesomeCard } from './AwesomeCard';

let projects = require('../data/projects.json');

const Portfolio = () => {
  // ... (state and handleFilter logic remains the same) ...
  const isDarkMode = useSelector(
    (state: isDarkModeStore) => state.isDarkMode.isDarkMode
  );
  const [filter, setFilter] = useState('all');

  const handleFilter = (filterOption: string) => {
    if (filter === filterOption) {
      setFilter('all');
      return;
    }
    switch (filterOption) {
      case 'all':
        setFilter('all');
        break;
      case 'javascript':
        setFilter('javascript');
        break;
      case 'react':
        setFilter('react');
        break;
      case 'vue':
        setFilter('vue');
        break;
      case 'html':
        setFilter('html');
        break;
      default:
        setFilter('all');
    }
  };

  return (
    <div className={'portfolioCardWrapper'}>
      <div className={'filterButtonWrapper'}>
        <FilterButtons
          setFilter={handleFilter}
          isDarkMode={isDarkMode}
        />
      </div>
      {projects &&
        projects
          .filter((project: Project) => {
            // ... (filter logic remains the same) ...
            return filter === 'all'
              ? project
              : filter === 'javascript'
              ? project.filter === 'javascript'
              : filter === 'react'
              ? project.filter === 'react'
              : filter === 'vue'
              ? project.filter === 'vue'
              : filter === 'html'
              ? project.filter === 'html'
              : '';
          })
          .map((project: Project, index: number) => {
            // Check if the link is an external URL (starts with http or //)
            // This is now clean: if it starts with '/', it's an internal route.
            const isExternalLink =
              project.href.startsWith('http') ||
              project.href.startsWith('//');

            const cardContent = (
              <AwesomeCard
                hoverImage={require(`../images/projects/hoverImages/${project.hoverImage}`)}
                projectImage={require(`../images/projects/project${project.imageID}${project.imageType}`)}
                projectTitle={project.title}
              />
            );

            return (
              <div key={index} className={'projectCardWrapper'}>
                {isExternalLink ? (
                  // 1. FOR EXTERNAL LINKS (opens in new tab)
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {cardContent}
                  </a>
                ) : (
                  // 2. FOR INTERNAL ROUTES (like your new /project-unavailable)
                  // Use the Next.js <Link> component
                  <Link href={project.href} passHref legacyBehavior>
                    <a>{cardContent}</a>
                  </Link>
                )}
              </div>
            );
          })}
    </div>
  );
};

export default Portfolio;
