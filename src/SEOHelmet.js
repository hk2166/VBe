import React from 'react';
import { Helmet } from 'react-helmet-async';

const defaultTitle = "VB Enterprises - Quality Safety Nets for Every Need.";
const defaultDescription = "VB Enterprises offers premium safety nets for residential, commercial, and industrial purposes. Protect your spaces from birds and ensure safety with our reliable solutions.";
const defaultImage = "https://www.vbsafetynets.in/VBE-Emblem.png";
const defaultUrl = "https://www.vbsafetynets.in";

const SEOHelmet = ({
  title = defaultTitle,
  description = defaultDescription,
  image = defaultImage,
  url = defaultUrl,
}) => (
  <Helmet>
    {/* Basic SEO */}
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content="VB Enterprises, Safety Nets, Bird Net Installation, Balcony Safety, Anti-bird Mesh, Child Safety Nets, Industrial Safety" />

    {/* Open Graph (Facebook, LinkedIn, etc.) */}
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:url" content={url} />
    <meta property="og:site_name" content="VB Enterprises" />

    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />

    {/* Canonical */}
    <link rel="canonical" href={url} />
  </Helmet>
);

export default SEOHelmet;
