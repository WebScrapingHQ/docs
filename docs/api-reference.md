---
title: API Reference
description: Interactive API documentation with live testing capabilities
sidebar_position: 5
---

import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

# Interactive API Reference

This page provides complete interactive documentation for the WebscrapingHQ API. You can explore all endpoints, see detailed parameter descriptions, and test API calls directly from this page.

## About the API

The WebscrapingHQ API provides a powerful, unified interface for web scraping with advanced features including:

- **JavaScript Rendering** - Full browser automation with Chromium
- **AI-Powered Extraction** - Smart content extraction using machine learning
- **Screenshot Capture** - High-quality page screenshots and visual monitoring
- **Anti-Bot Protection** - Advanced techniques to bypass detection systems
- **Global Infrastructure** - Fast, reliable scraping from multiple locations

## Authentication

All API requests require authentication using an API key. Include your API key in the request headers:

```
X-API-KEY: your-api-key-here
```


## Interactive Documentation

Use the interactive documentation below to explore endpoints, see request/response examples, and test API calls:

<SwaggerUI 
  url="../swagger.json" 
  docExpansion="full"
  defaultModelExpandDepth={3}
  defaultModelsExpandDepth={3}
  deepLinking={true}
  displayOperationId={false}
  defaultModelRendering="example"
  displayRequestDuration={true}
  operationsSorter="alpha"
  showExtensions={true}
  showCommonExtensions={true}
/>

## Quick Start Examples

After exploring the API documentation above, you can get started quickly with these examples:

### Basic Scraping

```bash
curl -X POST https://your-domain.com/api/v1/scrape \
  -H "X-API-KEY: your-api-key" \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://example.com"
  }'
```

### JavaScript Rendering

```bash
curl -X POST https://your-domain.com/api/v1/scrape \
  -H "X-API-KEY: your-api-key" \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://example.com",
    "renderJs": true,
    "waitFor": 3000
  }'
```

### Screenshot Capture

```bash
curl -X POST https://your-domain.com/api/v1/scrape \
  -H "X-API-KEY: your-api-key" \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://example.com",
    "screenshot": true,
    "renderJs": true
  }'
```

## Error Codes

Common error responses you might encounter:

| Status Code | Error | Description |
|-------------|-------|-------------|
| 400 | Bad Request | Invalid request parameters |
| 401 | Unauthorized | Invalid or missing API key |
| 429 | Too Many Requests | Rate limit exceeded |
| 500 | Internal Server Error | Server error, please retry |

## Need Help?

- Check our [Quick Start Guide](/quick-start) for step-by-step instructions
- Review [Authentication](/authentication) for API key setup
- Explore [JavaScript Instructions](/javascript-instructions) for advanced automation
- View [Basic Scraping](/basic-scraping) concepts and examples

---

**Next Steps**: Start with the [Quick Start Guide](/quick-start) or test the API using the interactive documentation above. 
