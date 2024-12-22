import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHelmet = () => (
  <Helmet>
    <title>VB Enterprises </title>
    <meta name="description" content="VB Enterprises offers premium safety nets for residential, commercial, and industrial purposes. Protect your spaces from birds and ensure safety with our reliable solutions." />
    <meta name="keywords" content="Safety Nets, Bird Nets, Industrial Safety, Residential Safety, VB Enterprises" />

    {/* Open Graph Metadata */}
    <meta property="og:title" content="VB Enterprises - Quality Safety Nets for Every Need." />
    <meta property="og:description" content="VB Enterprises offers premium safety nets for residential, commercial, and industrial purposes." />
    <meta property="og:url" content="https://www.vbsafetynets.in" />
    <meta property="og:image" content="%PUBLIC_URL%/VBE-Emblem.png" />

    {/* Twitter Metadata */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="VB Enterprises - Quality Safety Nets for Every Need." />
    <meta name="twitter:description" content="VB Enterprises offers premium safety nets for residential, commercial, and industrial purposes." />
    <meta name="twitter:image" content="%PUBLIC_URL%/VBE-Emblem.png" />

    {/* Canonical Link */}
    <link rel="canonical" href="https://www.vbsafetynets.in" />

    {/* Social Media Links */}
    <link rel="alternate" href="https://www.instagram.com/vbenterprises_" type="application/rss+xml" title="Instagram" />
    <link rel="alternate" href="https://www.linkedin.com/company/vbenterprises/" type="application/rss+xml" title="LinkedIn" />
    <link rel="alternate" href="https://www.facebook.com/profile.php?id=61565076555634" type="application/rss+xml" title="Facebook" />
  </Helmet>
);

export default SEOHelmet;
