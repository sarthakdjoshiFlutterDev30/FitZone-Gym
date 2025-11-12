import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "FitZone Gym - Transform Your Body & Mind | Best Gym in Mumbai",
  description = "Join FitZone Gym, Mumbai's premier fitness destination. Expert trainers, modern equipment, group classes, and affordable membership plans. Transform your life today!",
  keywords = "gym Mumbai, fitness center, personal training, yoga classes, zumba, crossfit, strength training, cardio, membership plans, FitZone",
  image = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  url = "https://fitzonegym.com",
  type = "website"
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Gym",
    "name": "FitZone Gym",
    "description": description,
    "url": url,
    "logo": "https://fitzonegym.com/logo.png",
    "image": image,
    "telephone": "+91-98765-43210",
    "email": "info@fitzonegym.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Fitness Street, Andheri West",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "postalCode": "400058",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "19.1136",
      "longitude": "72.8697"
    },
    "openingHours": [
      "Mo-Fr 05:00-23:00",
      "Sa-Su 06:00-22:00"
    ],
    "priceRange": "₹999-₹3499",
    "paymentAccepted": "Cash, Credit Card, Debit Card, UPI",
    "currenciesAccepted": "INR",
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Personal Training",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification", 
        "name": "Group Classes",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Locker Rooms",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "24/7 Access",
        "value": true
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "500"
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="FitZone Gym" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="FitZone Gym" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@FitZoneGym" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#dc143c" />
      <meta name="msapplication-TileColor" content="#dc143c" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link rel="preconnect" href="https://images.unsplash.com" />
    </Helmet>
  );
};

export default SEO;
