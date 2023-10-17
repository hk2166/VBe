import  { lazy, Suspense } from 'react';
const LazyComponent14 = lazy(() => import('../components/front-image-about.js'));
const LazyComponent15 = lazy(() => import('../components/about-desc.js'));
const LazyComponent16 = lazy(() => import('../components/about.js'));
const LazyComponent17 = lazy(()  => import("../components/services2.js"));
function AboutPage() {
 
    return (
        <>
         <Suspense fallback={<div>Loading...</div>}>
 <LazyComponent14 />
 <div className="cont">
      <LazyComponent15 />
      <LazyComponent16 />
      <LazyComponent17 />
      </div>
 </Suspense>
       
      
        </>
    )
}
export default AboutPage;