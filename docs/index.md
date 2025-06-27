---
title: WebscrapingHQ API Documentation
description: Fast, reliable web scraping API with advanced features including JavaScript rendering, screenshots, and AI-powered data extraction
slug: /
---

# WebscrapingHQ API Documentation

Welcome to the comprehensive documentation for WebscrapingHQ API - your go-to solution for fast, reliable, and feature-rich web scraping at scale.

## What is WebscrapingHQ API?

WebscrapingHQ API is a powerful web scraping service that provides developers with a simple yet comprehensive solution for extracting data from websites. Our API handles the complexity of modern web scraping challenges, including:

- **JavaScript Rendering** - Full support for dynamic content and SPAs
- **Screenshot Capture** - Visual verification and monitoring capabilities  
- **AI-Powered Extraction** - Smart data extraction using advanced AI models
- **Anti-Bot Protection** - Bypass sophisticated anti-scraping measures
- **Global Infrastructure** - Fast, reliable scraping from multiple locations
- **Advanced Automation** - Complex user interactions and workflows

## Key Features

### 🚀 **High Performance**
- Sub-second response times for most requests
- Concurrent request processing
- Global CDN and edge locations
- Smart caching and optimization

### 🤖 **JavaScript Support**
- Full browser rendering with Chromium
- Wait for dynamic content loading
- Execute custom JavaScript instructions
- Handle complex SPAs and AJAX applications

### 📸 **Screenshot Capabilities**
- High-quality page screenshots
- Mobile and desktop viewports
- Full page or element-specific capture
- Multiple image formats

### 🧠 **AI-Powered Extraction**
- Natural language data extraction
- Structured data parsing
- Content classification and analysis
- Smart field detection

### 🛡️ **Reliability & Security**
- Built-in retry mechanisms
- Proxy rotation and IP management
- Rate limiting and abuse protection
- GDPR and privacy compliance

### 🌍 **Global Reach**
- Multiple geographic locations
- Country-specific IP addresses
- Localized content access
- Regional compliance support

## Credit System

Our API uses a credit-based pricing system. Here's how credits are calculated:

| Feature | Credits |
|---------|---------|
| **Base Request** | 1 credit |
| **JavaScript Rendering** (`renderJs: true`) | +3 credits |
| **SERP Scraping** (`serp: true`) | +5 credits |
| **AI Data Extraction** (`aiScraping`) | +5 credits |
| **Screenshot** (`screenshot: true`) | +4 credits* |

*Screenshot only costs +1 additional credit if JavaScript rendering is already enabled.

### Credit Examples

```json
// Basic request = 1 credit
{ "url": "https://example.com" }

// JavaScript + Screenshot = 1 + 3 + 1 = 5 credits
{ 
  "url": "https://example.com",
  "renderJs": true,
  "screenshot": true 
}

// Full featured request = 1 + 3 + 5 + 5 + 1 = 15 credits
{
  "url": "https://example.com",
  "renderJs": true,
  "serp": true,
  "screenshot": true,
  "aiScraping": [{"name": "title", "context": "page title"}]
}
```

## Getting Started

Ready to start scraping? Here's how to get up and running in minutes:

1. **[Authentication](/authentication)** - Get your API key and learn about authentication
2. **[Quick Start](/quick-start)** - Make your first API call
3. **[Basic Scraping](/basic-scraping)** - Learn the fundamentals
4. **[JavaScript Instructions](/javascript-instructions)** - Explore JavaScript rendering and automation

## API Overview

Our RESTful API provides a single endpoint that handles all scraping operations:

```
POST https://app.webscrapinghq.com/api/v1/scrape
```

### Basic Request Example

```bash
curl -X POST https://app.webscrapinghq.com/api/v1/scrape \
  -H "X-API-KEY: your-api-key" \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://example.com",
    "renderJs": true,
    "screenshot": true
  }'
```

### Response Structure

```json
{
  "creditsLeft": 995,
  "cost": 5,
  "initial-status-code": 200,
  "resolved-url": "https://example.com",
  "type": "html",
  "body": "<html>...</html>",
  "screenshot": "base64-encoded-image",
  "features_used": {
    "javascript": true,
    "screenshot": true
  }
}
```

### AI Response (when using aiScraping)

When you use the `aiScraping` parameter, the response will include an additional `aiResponse` field:

```json
{
  "creditsLeft": 990,
  "cost": 10,
  "aiResponse": {
    "title": "Example Page Title",
    "description": "Extracted page description"
  },
  "initial-status-code": 200,
  "resolved-url": "https://example.com",
  "type": "html",
  "body": "<html>...</html>"
}
```

## Interactive API Documentation

For hands-on exploration of our API, check out our interactive documentation:

- **[Interactive API Reference](/api-reference)** - Complete interactive API documentation with live testing

## Use Cases

WebscrapingHQ API is perfect for a wide range of applications:

### E-commerce & Price Monitoring
- Product information extraction
- Price comparison and tracking
- Inventory monitoring
- Competitor analysis

### Content Aggregation
- News and article collection
- Social media monitoring
- Blog post aggregation
- Review and rating extraction

### Market Research
- Lead generation and contact extraction
- Company information gathering
- Market trend analysis
- Competitive intelligence

### SEO & Marketing
- Search result monitoring
- Backlink analysis
- Content gap analysis
- SERP tracking

### Data Analytics
- Website monitoring and change detection
- Performance tracking
- User behavior analysis
- Conversion optimization

## Available Documentation

Our comprehensive documentation includes:

- **[Authentication](/authentication)** - API key setup and security
- **[Quick Start Guide](/quick-start)** - Get started in minutes
- **[Basic Scraping](/basic-scraping)** - Core concepts and examples
- **[JavaScript Instructions](/javascript-instructions)** - Advanced automation features

## Stay Updated

- **[GitHub](https://github.com/webscrapinghq)** - Open source tools and examples

---

Ready to start scraping? [Get your API key](/authentication) and make your first request in minutes! 
