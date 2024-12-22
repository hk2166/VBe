import React, { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';

const LazyComponent9 = lazy(() => import('../components/front-image-projects.js'));
const LazyComponent10 = lazy(() => import('../components/Projects.js'));

function ProjectsPage() {
  return (
    <>
      <Helmet>
        <title>Our Projects - VB Enterprises</title>
        <meta
          name="description"
          content="Explore our successfully completed projects in safety net installations for residential, commercial, and industrial purposes."
        />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "url": "https://www.vbsafetynets.in/projects/project-1",
                "name": "Bird Safety Nets Installation at XYZ Apartments",
                "description": "Installed durable bird safety nets at XYZ Apartments to prevent bird entry.",
                "image": "https://www.vbsafetynets.in/images/project-1.jpg"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "url": "https://www.vbsafetynets.in/projects/project-2",
                "name": "Industrial Safety Netting for ABC Factory",
                "description": "Installed industrial-grade safety nets at ABC Factory for worker safety.",
                "image": "https://www.vbsafetynets.in/images/project-2.jpg"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "url": "https://www.vbsafetynets.in/projects/project-3",
                "name": "Balcony Bird Nets for Residential Tower",
                "description": "Ensured balcony safety and cleanliness by installing bird nets.",
                "image": "https://www.vbsafetynets.in/images/project-3.jpg"
              }
            ]
          }
          `}
        </script>
      </Helmet>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent9 />
        <LazyComponent10 />
      </Suspense>
    </>
  );
}

export default ProjectsPage;
