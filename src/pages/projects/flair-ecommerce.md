---
layout: ../../layouts/ProjectLayout.astro
title: Flair - E-commerce
date: 2023-08-12
author: belikedeep
image: ../../../projects/3.jpg
---

## Links

- [GitHub Repository](https://github.com/belikedeep/flair-ecommerce-website)
- [Live Demo](https://ecommerce-app-test.vercel.app/)

## Flair - Ecommerce Store

This project is a Fullstack application, Flair Ecommerce Store, a fully functional online shopping platform.

**Key Technologies:**

- **Frontend:** Next.js (likely in a separate repository)
- **Backend:** Next.js (API routes)
- **Content Management:** Sanity.io with custom studio for product data management
- **Payments:** Stripe integration for secure checkout processing
- **Styling:** Tailwind CSS for a responsive and customizable UI

**Features:**

- Interactive and responsive user interface for a smooth browsing experience (developed in the frontend repository)
- Organized product data management through a dedicated Sanity.io studio
- Seamless integration with Stripe for secure checkout with shipping cost calculation and invoice generation
- Additional functionalities might include user accounts, wishlists, and order history (depending on implementation)

**Getting Started (Developers Only):**

**1. Prerequisites**

- Node.js and npm installed ([https://nodejs.org/en/download](https://nodejs.org/en/download))
- A Stripe account [stripe](https://stripe.com/in)

**2. Clone the Repository**

```
git clone https://github.com/belikedeep/flair-ecommerce-website.git
```

**3. Install Dependencies**

```
cd flair-ecommerce-website
npm install
```

**4. Obtain Stripe API Keys**

- **Create a Stripe account** if you haven't already [stripe](https://stripe.com/in).
- **Log in** to your Stripe dashboard.
- Navigate to **Developers > API keys**.
- **Create two API keys:**
  - **Publishable Key:** Used on the client-side (frontend) to interact with Stripe elements.
  - **Secret Key:** Used on the server-side (backend) to process payments securely.
- **Store these keys securely:**
  - **Never** commit them to your version control system (e.g., Git).
  - Consider using environment variables or a secrets management solution for secure storage and retrieval in your backend environment.

**5. Development Server**

```
npm run dev
```

This will start the development server, allowing you to work on the backend logic. You'll likely need to run the frontend development server (in a separate repository) concurrently for a complete development experience.

**6. Build for Production**

```
npm run build
```

This generates an optimized production build for deployment.

**Additional Considerations:**

- **Test Payments:** Before deploying to production, thoroughly test your Stripe integration using Stripe's test mode.
