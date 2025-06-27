---
title: AI-Powered Data Extraction
description: Extract structured data from web pages using artificial intelligence
sidebar_position: 4
---

# AI-Powered Data Extraction

WebscrapingHQ's AI extraction feature uses advanced machine learning models to intelligently identify and extract structured data from web pages. Instead of writing complex CSS selectors or XPath expressions, simply describe what data you want to extract in natural language.

## How AI Extraction Works

The AI extraction system:

1. **Analyzes** the entire page content after rendering
2. **Understands** your data requirements through natural language descriptions
3. **Identifies** relevant content using advanced pattern recognition
4. **Extracts** structured data in JSON format
5. **Returns** clean, formatted results ready for your application

## Basic AI Extraction

To use AI extraction, include the `aiScraping` parameter in your request:

```bash
curl -X POST https://your-domain.com/api/v1/scrape \
  -H "X-API-KEY: your-api-key" \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://example-store.com/product",
    "renderJs": true,
    "aiScraping": [
      {
        "name": "title",
        "value": "The main product title"
      },
      {
        "name": "price", 
        "value": "Current product price"
      },
      {
        "name": "availability",
        "value": "Whether the product is in stock"
      }
    ]
  }'
```

## Field Configuration

Each AI extraction field supports these properties:

### `name` (required)
The field name for the extracted data in the response.

### `value` (optional)
A natural language description of what to extract. The more specific, the better the results.

### `context` (optional)
Additional context to help the AI understand the data location or format.

## Advanced Examples

### E-commerce Product Extraction

```json
{
  "url": "https://store.example.com/product/123",
  "renderJs": true,
  "aiScraping": [
    {
      "name": "product_name",
      "value": "The main product title or name"
    },
    {
      "name": "price",
      "value": "Current selling price in any currency"
    },
    {
      "name": "original_price",
      "value": "Original price before discount, if available"
    },
    {
      "name": "availability",
      "value": "Stock status - in stock, out of stock, limited quantity"
    },
    {
      "name": "rating",
      "value": "Customer rating or review score"
    },
    {
      "name": "review_count",
      "value": "Number of customer reviews"
    },
    {
      "name": "description",
      "value": "Product description or key features"
    },
    {
      "name": "category",
      "value": "Product category or department"
    },
    {
      "name": "brand",
      "value": "Brand or manufacturer name"
    },
    {
      "name": "images",
      "value": "Product image URLs as a list"
    }
  ]
}
```

### News Article Extraction

```json
{
  "url": "https://news.example.com/article/123",
  "renderJs": true,
  "aiScraping": [
    {
      "name": "headline",
      "value": "Main article headline or title"
    },
    {
      "name": "author",
      "value": "Article author name"
    },
    {
      "name": "publish_date",
      "value": "When the article was published"
    },
    {
      "name": "summary",
      "value": "Article summary or excerpt"
    },
    {
      "name": "content",
      "value": "Full article text content"
    },
    {
      "name": "tags",
      "value": "Article tags or categories as a list"
    },
    {
      "name": "read_time",
      "value": "Estimated reading time"
    }
  ]
}
```

### Job Listing Extraction

```json
{
  "url": "https://jobs.example.com/posting/123",
  "renderJs": true,
  "aiScraping": [
    {
      "name": "job_title",
      "value": "Job position title"
    },
    {
      "name": "company",
      "value": "Company name"
    },
    {
      "name": "location",
      "value": "Job location - city, state, country"
    },
    {
      "name": "salary_range",
      "value": "Salary or compensation range"
    },
    {
      "name": "employment_type",
      "value": "Full-time, part-time, contract, etc."
    },
    {
      "name": "requirements",
      "value": "Required skills and qualifications as a list"
    },
    {
      "name": "benefits",
      "value": "Job benefits and perks as a list"
    },
    {
      "name": "description",
      "value": "Full job description"
    },
    {
      "name": "posted_date",
      "value": "When the job was posted"
    }
  ]
}
```

## Response Format

AI extraction results are returned in the `aiResponse` field:

```json
{
  "cost": 6,
  "creditsLeft": 994,
  "aiResponse": {
    "title": "Premium Wireless Headphones",
    "price": "$199.99",
    "availability": "In Stock",
    "rating": "4.5",
    "review_count": "1,247",
    "category": "Electronics > Audio"
  },
  "initial-status-code": 200,
  "resolved-url": "https://store.example.com/product/123",
  "type": "html",
  "body": "<!DOCTYPE html>..."
}
```

## Best Practices

### 1. Be Specific in Descriptions
```json
// ❌ Too vague
{"name": "data", "value": "important information"}

// ✅ Specific and clear
{"name": "product_price", "value": "Current selling price including currency symbol"}
```

### 2. Use Context for Complex Scenarios
```json
{
  "name": "discount_percentage",
  "value": "Percentage discount from original price",
  "context": "Look for text like '20% off' or 'Save 25%'"
}
```

### 3. Handle Lists and Arrays
```json
{
  "name": "features",
  "value": "Product features and specifications as a list",
  "context": "Return as JSON array format ['feature1', 'feature2']"
}
```

### 4. Combine with JavaScript Rendering
AI extraction works best with fully rendered pages:

```json
{
  "url": "https://spa-app.com/data",
  "renderJs": true,
  "waitFor": 3000,
  "aiScraping": [...]
}
```

## Error Handling

If AI extraction fails to find specific data:

```json
{
  "aiResponse": {
    "title": "Product Name Found",
    "price": null,
    "availability": "Could not determine"
  }
}
```

The AI will return `null` or descriptive text when data cannot be found.

## Credit Costs

AI extraction adds **5 credits** to your base request cost:

- Basic scraping: 1 credit
- JavaScript rendering: +3 credits  
- AI extraction: +5 credits
- **Total: 9 credits**

## Combining with Other Features

AI extraction works seamlessly with other features:

```json
{
  "url": "https://example.com/page",
  "renderJs": true,
  "screenshot": true,
  "aiScraping": [...],
  "javascriptInstruction": [
    {
      "action": "clickElement",
      "selector": {"type": "css", "value": ".load-more"}
    }
  ]
}
```

## Language Support

The AI extraction system supports content in multiple languages and can extract data from:

- English websites
- International e-commerce sites
- Multi-language news sources
- Global job boards
- Social media platforms

## Limitations

- Maximum 20 fields per request
- Best results with well-structured HTML
- Requires JavaScript rendering for dynamic content
- May have difficulty with heavily obfuscated content

## Programming Language Examples

### Python
```python
import requests

response = requests.post(
    'https://your-domain.com/api/v1/scrape',
    headers={'X-API-KEY': 'your-api-key'},
    json={
        'url': 'https://example.com/product',
        'renderJs': True,
        'aiScraping': [
            {'name': 'title', 'value': 'Product title'},
            {'name': 'price', 'value': 'Current price'}
        ]
    }
)

data = response.json()
extracted = data['aiResponse']
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
    renderJs: true,
    aiScraping: [
      {name: 'title', value: 'Product title'},
      {name: 'price', value: 'Current price'}
    ]
  })
});

const data = await response.json();
console.log('Extracted data:', data.aiResponse);
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
            'renderJs' => true,
            'aiScraping' => [
                ['name' => 'title', 'value' => 'Product title'],
                ['name' => 'price', 'value' => 'Current price']
            ]
        ])
    ]
]));

$data = json_decode($response, true);
echo "Title: " . $data['aiResponse']['title'];
```

## Next Steps

- Learn about [Extraction Rules](/extraction-rules) for CSS-based extraction
- Explore [JavaScript Instructions](/javascript-instructions) for complex interactions
- Check out [SERP Scraping](/serp-scraping) for search engine results
- See [API Reference](/api-reference) for complete parameter details 
