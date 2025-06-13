import  { lazy, Suspense } from 'react';
const LazyComponent11 = lazy(() => import('../components/Home.jsx'));
const LazyComponent12 = lazy(() => import('../components/main-card.js'));
const LazyComponent13 = lazy(() => import('../components/cards.js'));
const LazyComponent14 = lazy(() => import('../components/button.js'));

function homePage() {
    return (
        <>
        <Suspense fallback={<div>Loading...</div>}>
          <LazyComponent11  />
         <LazyComponent12 />
          <LazyComponent13 />
          <LazyComponent14 />
       </Suspense>
        </>
    )
}
export default homePage;