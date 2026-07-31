import React from 'react';

export default function SchemaMarkup({ book }) {
  if (!book) return null;

  const bookSchema = {
    "@context": "https://schema.org",
    "@type": "Book",
    "@id": `https://pankajkumar.com/books/${book.id}`,
    "name": book.title,
    "url": `https://pankajkumar.com/books/${book.id}`,
    "image": book.coverImage,
    "author": {
      "@type": "Person",
      "name": "Pankaj Kumar",
      "jobTitle": "Author, Engineer, Systems Specialist",
      "url": "https://pankajkumar.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Pankaj Kumar Author Platform"
    },
    "description": book.description,
    "isbn": book.isbn,
    "inLanguage": book.language || "English",
    "numberOfPages": book.pages,
    "genre": book.category,
    "offers": [
      {
        "@type": "Offer",
        "price": book.prices.pdf,
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "itemOffered": {
          "@type": "EBook",
          "name": `${book.title} (PDF Digital Edition)`
        }
      },
      {
        "@type": "Offer",
        "price": book.prices.paperback,
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "itemOffered": {
          "@type": "Book",
          "name": `${book.title} (Paperback Edition)`
        }
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": book.rating || "4.9",
      "reviewCount": book.reviewsCount || 100,
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const faqSchema = book.faqs && book.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": book.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
}
