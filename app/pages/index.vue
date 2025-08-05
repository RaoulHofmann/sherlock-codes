<script setup lang="ts">
const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://sherlock-codes.dev",
        "name": "Sherlock Codes",
        "alternateName": "Sherlock Codes Software Consulting",
        "description": "Professional software consulting and code cleanup services specializing in PHP, Laravel, Vue.js, Next.js, and Node.js development in Perth, Western Australia.",
        "url": "https://sherlock-codes.dev",
        "telephone": "0487148442",
        "email": "info@sherlock-codes.dev",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Perth",
          "addressRegion": "WA",
          "addressCountry": "AU"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -31.9505,
          "longitude": 115.8605
        },
        "areaServed": [
          {
            "@type": "State",
            "name": "Western Australia"
          },
          {
            "@type": "City",
            "name": "Perth"
          }
        ],
        "serviceType": ["Software Consulting", "Code Refactoring", "Technical Debt Reduction", "Legacy Code Modernization"],
        "priceRange": "$",
        "openingHours": "Mo-Fr 09:00-17:00",
        "sameAs": [
          "https://www.linkedin.com/in/raoul-hofmann-547158127",
          "https://github.com/RaoulHofmann"
        ]
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Sherlock Codes",
        "description": "Expert software consulting services for messy codebases, technical debt reduction, and code refactoring across PHP, Laravel, Vue.js, Next.js, and Node.js technologies.",
        "provider": {
          "@type": "Person",
          "name": "Sherlock Codes",
          "jobTitle": "Software Consultant & Code Detective"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Perth",
          "addressRegion": "WA",
          "addressCountry": "AU"
        },
        "areaServed": "Perth, Western Australia",
        "serviceOutput": "Clean, maintainable, and well-documented code",
        "offers": {
          "@type": "Offer",
          "description": "Professional code cleanup and software consulting services"
        }
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Sherlock Codes",
        "alternateName": "Sherlock Codes - Software Consulting",
        "url": "https://sherlock-codes.dev",
        "description": "Professional software consulting and code cleanup services in Perth, Western Australia",
        "inLanguage": "en-AU",
        "isPartOf": {
          "@type": "WebSite",
          "url": "https://sherlock-codes.dev"
        },
        "about": {
          "@type": "Thing",
          "name": "Software Consulting and Code Refactoring Services"
        },
        "mainEntity": {
          "@type": "LocalBusiness",
          "name": "Sherlock Codes",
          "priceRange": "$",
          "telephone": "0487148442",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Perth",
            "addressRegion": "WA",
            "addressCountry": "AU"
          },
        }
      })
    }
  ]
})

useSeoMeta({
  // Basic Meta Tags
  title: home.value?.title || "Sherlock Codes: Code Detective & Software Consultant | Perth WA",
  description: home.value?.description || "Professional code cleanup and software consulting in Perth, Western Australia. I solve messy codebases, reduce technical debt, and improve maintainability across PHP, Laravel, Vue.js, Next.js, and Node.js projects.",

  // Open Graph Tags
  ogTitle: "Sherlock Codes - Solving Messy Codebases with Precision | Perth WA",
  ogDescription: "Transform your digital crime scene into clean, maintainable software. Expert code consulting for PHP, Laravel, Vue.js, Next.js & Node.js in Perth, Western Australia.",
  ogType: "website",
  ogUrl: "https://sherlock-codes.dev",
  // ogImage: "https://sherlock-codes.dev/images/sherlock-codes-og-image.jpg",
  ogImageAlt: "Sherlock Codes - Professional Software Consulting in Perth",
  ogLocale: "en_AU",
  ogSiteName: "Sherlock Codes",

  // Additional Meta Tags
  keywords: "software consultant Perth, code cleanup Perth WA, technical debt reduction, PHP developer Perth, Laravel consultant Perth, Vue.js developer Perth, Next.js consultant Perth, Node.js developer Perth, code refactoring Perth, software debugging Perth, legacy code modernization, AWS consultant Perth, code documentation services, software maintenance Perth, web developer Perth Western Australia",

  // Robots and Indexing
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  googlebot: "index, follow",

  // Author and Publisher
  author: "Sherlock Codes",
  publisher: "Sherlock Codes",

  // Geographic and Local SEO
  "geo.region": "AU-WA",
  "geo.placename": "Perth",
  "geo.position": "-31.9505;115.8605",
  "ICBM": "-31.9505, 115.8605",

  // Business Information
  "business:contact_data:locality": "Perth",
  "business:contact_data:region": "Western Australia",
  "business:contact_data:country_name": "Australia",
  "business:contact_data:postal_code": "6000",
  "business:contact_data:phone_number": "0487 148 442",
  "business:contact_data:email": "info@sherlock-codes.dev",

  // Content Language
  "content-language": "en-AU",

  // Mobile Optimization
  viewport: "width=device-width, initial-scale=1.0",

  // Theme and Appearance
  themeColor: "#1a1a1a",
  colorScheme: "dark light",

  // Canonical URL
  canonical: "https://sherlock-codes.dev"
})
</script>

<template>
  <ContentRenderer v-if="home" :value="home" style="position: relative" />
  <div v-else>Home not found</div>
</template>