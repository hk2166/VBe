import * as React from 'react';
import { BrowserRouter as Router , Switch,Route } from "react-router-dom";
import home from "./pages/home.js";
import about from "./pages/about.js";
import services from "./pages/services.js";
import projects from "./pages/projects.js";
import  { lazy, Suspense } from 'react';
const LazyComponent1 = lazy(() => import('./components/contact.js'));
const LazyComponent2 = lazy(() => import('./components/navbar.js'));
const LazyComponent3 = lazy(() => import('./components/testimonial.js'));
const LazyComponent4 = lazy(()  => import("./components/location-img.js"));
const LazyComponent5 = lazy(() => import("./components/footer.js"));
function App() {
  return (
   <>
   <Router>
   <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent1 />
        <LazyComponent2 />
   </Suspense>
<Switch>
  <Route path="/" exact component={home}/>
  <Route path="/about" exact component={about}/>
  <Route path="/services" exact component={services}/>
  <Route path="/projects" exact component={projects}/>
</Switch>
<Suspense fallback={<div>Loading...</div>}>
 <LazyComponent3 />
      <LazyComponent4 />
      <LazyComponent5 />
 </Suspense>
  </Router>
  </>
  );
}
export default App;