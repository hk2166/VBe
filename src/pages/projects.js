import  { lazy, Suspense } from 'react';
const LazyComponent9 = lazy(() => import('../components/front-image-projects.js'));
const LazyComponent10 = lazy(() => import('../components/Projects.js'));

function ProjectsPage() {
    
    return (
        <>
        <Suspense fallback={<div>Loading...</div>}>
 
 <LazyComponent9  />
      <LazyComponent10 />
    
 </Suspense>
        </>
    )
}
export default ProjectsPage;