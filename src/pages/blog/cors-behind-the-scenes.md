---
layout: ../../layouts/BlogPostLayout.astro
title: "How CORS actually works behind the scenes"
description: "This article aims to demystify CORS, explain why it exists, and provide strategies for dealing with CORS-related issues."
date: "12 Aug, 2024"
---

# CORS Demystified: A Developer's Guide

## Introduction to CORS

Cross-Origin Resource Sharing, commonly known as CORS, is a vital web security protocol that often perplexes developers. This guide aims to shed light on CORS, explaining its purpose and offering practical solutions to common CORS-related challenges.

## The Foundations: Same-Origin Policy

Before diving into CORS, it's crucial to grasp the Same-Origin Policy. This fundamental web security principle restricts web pages from making requests to a different domain than the one serving the web page. An "origin" is defined by three components:

1. Protocol (e.g., `http`, `https`)
2. Domain (e.g., `example.com`)
3. Port number

For instance:

- `https://mysite.com/page1` and `https://mysite.com/page2` share the same origin.
- `https://mysite.com` and `http://mysite.com` have different origins due to differing protocols.
- `https://mysite.com` and `https://api.mysite.com` are considered different origins because of the subdomain difference.

## Enter CORS: Relaxing the Rules

CORS was developed to provide a secure method for relaxing the Same-Origin Policy. It allows servers to specify which origins can access their resources, enabling modern web applications to interact with APIs and services hosted on different domains.

## Identifying CORS Issues

Developers often encounter CORS errors when their web application attempts to fetch resources from a different origin. A typical CORS error in the browser console might look like this:

```
CORS error: Cannot load https://api.externalservice.com/data.
Origin https://myapp.com is not allowed by Access-Control-Allow-Origin.
```

## The CORS Mechanism

When a web application initiates a cross-origin request:

1. The browser automatically adds an `Origin` header to the request.
2. The server can respond with specific CORS headers:
   - `Access-Control-Allow-Origin`: Specifies allowed origins
   - `Access-Control-Allow-Methods`: Indicates permitted HTTP methods
   - `Access-Control-Allow-Headers`: Lists allowed headers
3. If these headers are missing or don't include the requesting origin, the browser blocks the response.

## Strategies for Handling CORS

### 1. Configuring Server-Side CORS

The most recommended approach is to configure your server to send the appropriate CORS headers. Here's an example using a Node.js Express server:

```javascript
const express = require("express");
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: "https://myapp.com",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Your routes here
```

### 2. Implementing a Proxy

When you can't modify the server directly, setting up a proxy can be a viable solution. For instance, in a Create React App project, you can use the built-in proxy feature:

In `package.json`:

```json
{
  "proxy": "https://api.externalservice.com"
}
```

### 3. JSONP for Legacy Support

While not recommended for new projects, JSONP (JSON with Padding) can be used for simple GET requests to bypass CORS:

```javascript
function handleData(data) {
  console.log("Received:", data);
}

const script = document.createElement("script");
script.src = "https://api.externalservice.com/data?callback=handleData";
document.body.appendChild(script);
```

Note: JSONP has security limitations and should be used cautiously.

## Best Practices for CORS Management

1. **Security First**: Always consider the security implications of your CORS configuration.
2. **Specific Origins**: In production, avoid using `*` for `Access-Control-Allow-Origin`. Instead, list specific allowed origins.
3. **Environment-Specific Settings**: Use different CORS configurations for development and production environments.
4. **Handle Preflight Requests**: For complex requests, ensure your server correctly handles OPTIONS requests.
5. **Comprehensive Security**: Remember, CORS is a browser-side security feature. Implement proper server-side security measures as well.

## Conclusion

While CORS can be a source of frustration, it plays a crucial role in web security. By understanding its mechanics and implementing appropriate solutions, developers can create secure, cross-origin capable web applications. When facing CORS issues, first determine if you have server-side control. If so, implementing proper CORS headers is ideal. Otherwise, consider proxy solutions or, as a last resort for simple GET requests, JSONP.
