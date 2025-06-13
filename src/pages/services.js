import  { lazy, Suspense } from 'react';
const LazyComponent7 = lazy(() => import('../components/content.js'));
const LazyComponent8 = lazy(() => import('../components/front-image-services.js'));
const LazyComponent13 = lazy(() => import('../components/cards.js'));

function ServicePage() {
   
    return (
        <>
         <Suspense fallback={<div>Loading...</div>}>
            <LazyComponent8 />
            <LazyComponent13 />
            <LazyComponent7 />
            
         </Suspense>
        </>
    )
}
export default ServicePage;