---
title: Extraction Rules
description: Extract specific data using CSS selectors for precise control
sidebar_position: 5
---

# Extraction Rules

Extraction Rules provide precise control over data extraction using CSS selectors. This feature is perfect when you know exactly which elements contain the data you need and want deterministic, fast extraction without AI overhead.

## How Extraction Rules Work

Extraction Rules allow you to:

1. **Define** CSS selectors for specific data elements
2. **Map** selectors to meaningful field names
3. **Extract** text content directly from matching elements
4. **Receive** structured data in your response

Unlike AI extraction, extraction rules are fast, predictable, and don't consume additional credits.

## Basic Usage

Include the `extractRules` parameter as an object mapping field names to CSS selectors:

```bash
curl -X POST https://your-domain.com/api/v1/scrape \
  -H "X-API-KEY: your-api-key" \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://example-store.com/product",
    "extractRules": {
      "title": "h1.product-title",
      "price": ".price-current",
      "description": ".product-description p"
    }
  }'
```

## CSS Selector Examples

### Basic Selectors

```json
{
  "extractRules": {
    "title": "h1",                    // First h1 element
    "price": ".price",                // Element with class 'price'
    "description": "#description",    // Element with id 'description'
    "category": "nav .breadcrumb li:last-child"  // Last breadcrumb item
  }
}
```

### Advanced Selectors

```json
{
  "extractRules": {
    "product_name": "h1.product-title, h1.item-title",  // Multiple selectors
    "rating": "[data-rating]",                          // Attribute selector
    "reviews": "span:contains('reviews')",              // Text content selector
    "availability": ".stock-status span:first-child",   // Nested selection
    "brand": "meta[property='product:brand']",          // Meta tag content
    "image_url": ".product-image img[src]"              // Image source
  }
}
```

## Real-World Examples

### E-commerce Product Page

```json
{
  "url": "https://store.example.com/product/123",
  "renderJs": true,
  "extractRules": {
    "name": "h1.product-name, .product-title h1",
    "current_price": ".price-now, .current-price, .sale-price",
    "original_price": ".price-was, .original-price, .list-price",
    "discount": ".discount-percent, .savings-percent",
    "availability": ".stock-status, .availability-text",
    "rating": ".rating-value, [data-rating]",
    "review_count": ".review-count, .reviews-total",
    "brand": ".brand-name, .manufacturer",
    "model": ".model-number, .product-code",
    "main_image": ".product-image img",
    "description": ".product-description, .item-details",
    "features": ".product-features li",
    "specifications": ".specs-table td:nth-child(2)",
    "category": ".breadcrumb li:last-child"
  }
}
```

### News Article Extraction

```json
{
  "url": "https://news.example.com/article/123",
  "extractRules": {
    "headline": "h1.article-title, .headline",
    "subtitle": ".article-subtitle, .deck",
    "author": ".author-name, .byline a",
    "publish_date": "time[datetime], .publish-date",
    "content": ".article-body, .content p",
    "category": ".category-link, .section-name",
    "tags": ".tag-list a, .article-tags li",
    "read_time": ".read-time, .estimated-time",
    "image_caption": ".featured-image figcaption"
  }
}
```

### Job Listing Extraction

```json
{
  "url": "https://jobs.example.com/listing/123",
  "extractRules": {
    "job_title": "h1.job-title, .position-title",
    "company": ".company-name, .employer",
    "location": ".job-location, .location-text",
    "salary": ".salary-range, .compensation",
    "job_type": ".employment-type, .job-category",
    "posted_date": ".posted-date, .listing-date",
    "description": ".job-description, .role-summary",
    "requirements": ".requirements li, .qualifications li",
    "benefits": ".benefits li, .perks li",
    "contact_email": ".contact-info [href^='mailto:']",
    "application_url": ".apply-button[href], .application-link"
  }
}
```

## Response Format

Extracted data is returned in the `extracted_data` field:

```json
{
  "cost": 1,
  "creditsLeft": 999,
  "initial-status-code": 200,
  "resolved-url": "https://store.example.com/product/123",
  "type": "html",
  "body": "<!DOCTYPE html>...",
  "extracted_data": {
    "title": "Premium Wireless Headphones",
    "price": "$199.99",
    "description": "High-quality audio with noise cancellation",
    "category": "Electronics"
  }
}
```

## Combining with Other Features

### With JavaScript Rendering

```json
{
  "url": "https://spa-app.com/product",
  "renderJs": true,
  "waitFor": 3000,
  "extractRules": {
    "dynamic_price": ".price-loaded",
    "stock_status": ".stock-dynamic"
  }
}
```

### With JavaScript Instructions

```json
{
  "url": "https://example.com/product",
  "renderJs": true,
  "javascriptInstruction": [
    {
      "action": "clickElement",
      "selector": {"type": "css", "value": ".show-more-details"}
    },
    {
      "action": "wait",
      "delay": 2000
    }
  ],
  "extractRules": {
    "detailed_specs": ".expanded-details li",
    "technical_data": ".tech-specs td"
  }
}
```

### With Screenshots

```json
{
  "url": "https://example.com/page",
  "renderJs": true,
  "screenshot": true,
  "extractRules": {
    "visible_text": ".main-content",
    "sidebar_info": ".sidebar-widget"
  }
}
```

## Advanced Techniques

### Handling Multiple Elements

When a selector matches multiple elements, the API returns the text from the first match:

```json
{
  "extractRules": {
    "first_paragraph": "p",           // Gets first <p> element
    "all_headings": "h2, h3, h4"      // Gets first matching heading
  }
}
```

### Attribute Extraction

Extract attribute values instead of text content:

```json
{
  "extractRules": {
    "image_url": "img.product-image",     // Gets src attribute
    "link_url": "a.product-link",         // Gets href attribute
    "data_id": "[data-product-id]"        // Gets data-product-id attribute
  }
}
```

### Fallback Selectors

Use multiple selectors for better reliability:

```json
{
  "extractRules": {
    "price": ".price-current, .price-now, .current-price, .sale-price"
  }
}
```

## Best Practices

### 1. Use Specific Selectors
```json
// ❌ Too generic - might match unintended elements
{"title": "h1"}

// ✅ Specific and reliable
{"title": "h1.product-title, .main-title h1"}
```

### 2. Handle Dynamic Content
```json
{
  "url": "https://spa-app.com",
  "renderJs": true,
  "waitFor": 3000,
  "extractRules": {
    "loaded_content": ".content-loaded"
  }
}
```

### 3. Test Selectors First
Before implementing, test your CSS selectors in browser dev tools:

```javascript
// Test in browser console
document.querySelector('.price-current')?.textContent
document.querySelectorAll('.product-features li')
```

### 4. Use Fallback Strategies
```json
{
  "extractRules": {
    "price": ".price-sale, .price-current, .price, [data-price]"
  }
}
```

## Error Handling

When extraction rules can't find elements:

```json
{
  "extracted_data": {
    "title": "Found Product Title",
    "price": "",              // Empty string when not found
    "description": "Found Description",
    "missing_field": ""       // Empty string for missing elements
  }
}
```

## Credit Costs

Extraction rules don't add extra credits to your request:

- Basic scraping with extraction: **1 credit**
- With JavaScript rendering: **4 credits total**
- With screenshot: **varies based on rendering**

## Limitations

### CSS Selector Limitations
- Standard CSS3 selectors only
- No CSS4 features or pseudo-selectors
- No JavaScript execution in selectors

### Content Limitations
- Extracts text content only (no HTML)
- First matching element only
- No array/list extraction from multiple elements

### Performance Considerations
- Very fast compared to AI extraction
- No additional API calls or processing
- Minimal impact on response time

## Comparison: Extraction Rules vs AI Extraction

| Feature | Extraction Rules | AI Extraction |
|---------|------------------|---------------|
| **Speed** | Very Fast | Slower |
| **Cost** | No extra credits | +5 credits |
| **Precision** | Exact CSS targeting | Natural language |
| **Flexibility** | Fixed selectors | Adaptive understanding |
| **Setup** | Requires CSS knowledge | Natural descriptions |
| **Reliability** | Breaks if HTML changes | Adapts to changes |

## Programming Language Examples

### Python
```python
import requests

response = requests.post(
    'https://your-domain.com/api/v1/scrape',
    headers={'X-API-KEY': 'your-api-key'},
    json={
        'url': 'https://example.com/product',
        'extractRules': {
            'title': 'h1.product-title',
            'price': '.price-current',
            'availability': '.stock-status'
        }
    }
)

data = response.json()
extracted = data['extracted_data']
print(f"Title: {extracted['title']}")
print(f"Price: {extracted['price']}")
```

### JavaScript/Node.js
```javascript
const response = await fetch('https://your-domain.com/api/v1/scrape', {
  method: 'POST',
  headers: {
    'X-API-KEY': 'your-api-key',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    url: 'https://example.com/product',
    extractRules: {
      title: 'h1.product-title',
      price: '.price-current',
      availability: '.stock-status'
    }
  })
});

const data = await response.json();
console.log('Extracted:', data.extracted_data);
```

### PHP
```php
$response = file_get_contents('https://your-domain.com/api/v1/scrape', false, stream_context_create([
    'http' => [
        'method' => 'POST',
        'header' => [
            'X-API-KEY: your-api-key',
            'Content-Type: application/json'
        ],
        'content' => json_encode([
            'url' => 'https://example.com/product',
            'extractRules' => [
                'title' => 'h1.product-title',
                'price' => '.price-current'
            ]
        ])
    ]
]));

$data = json_decode($response, true);
echo $data['extracted_data']['title'];
```

## Next Steps

- Learn about [AI Extraction](/ai-extraction) for flexible, natural language extraction
- Explore [JavaScript Instructions](/javascript-instructions) for dynamic content
- Check out [Screenshot Capture](/screenshots) for visual monitoring
- See [API Reference](/api-reference) for complete parameter details 
