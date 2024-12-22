import React, { lazy, Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home.js';
import About from './pages/about.js';
import Services from './pages/services.js';
import Projects from './pages/projects.js';
import SEOHelmet from './SEOHelmet';

const LazyComponent1 = lazy(() => import('./components/contact.js'));
const LazyComponent2 = lazy(() => import('./components/navbar.js'));
const LazyComponent3 = lazy(() => import('./components/testimonial.js'));
const LazyComponent4 = lazy(() => import('./components/location-img.js'));
const LazyComponent5 = lazy(() => import('./components/footer.js'));



function App() {
  return (
    <HelmetProvider>
      <SEOHelmet />
      <Router>
        <Suspense fallback={<div>Loading Navbar and Contact...</div>}>
          <LazyComponent2 />
          <LazyComponent1 />
        </Suspense>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/services" exact component={Services} />
          <Route path="/projects" exact component={Projects} />
        </Switch>
        <Suspense fallback={<div>Loading Testimonial, Location, and Footer...</div>}>
          <LazyComponent3 />
          <LazyComponent4 />
          <LazyComponent5 />
        </Suspense>
      </Router>
    </HelmetProvider>
  );
}

export default App;
