---
title: Quick Start Guide
description: Get up and running with WebscrapingHQ API in under 5 minutes
sidebar_position: 2
---

# Quick Start Guide

Get up and running with WebscrapingHQ API in under 5 minutes! This guide will walk you through making your first successful scraping request.

## Prerequisites

Before you begin, make sure you have:

1. ✅ A WebscrapingHQ account ([Sign up here](https://app.webscrapinghq.com/login))
2. ✅ Your API key ([Get it from your dashboard](https://app.webscrapinghq.com/dashboard/api-keys))
3. ✅ A tool to make HTTP requests (curl, Postman, or your preferred programming language)

## Your First API Request

Let's start with the simplest possible request - scraping a basic webpage:

### Using cURL

```bash
curl -X POST https://app.webscrapinghq.com/api/v1/scrape \
  -H "X-API-KEY: your-api-key-here" \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://httpbin.org/get"
  }'
```

### Expected Response

```json
{
  "creditsLeft": 999,
  "cost": 1,
  "initial-status-code": 200,
  "resolved-url": "https://httpbin.org/get",
  "type": "html",
  "body": "<!DOCTYPE html>\n<html>...",
  "features_used": {
    "javascript": false,
    "screenshot": false
  }
}
```

🎉 **Congratulations!** You've successfully made your first scraping request.

## Step-by-Step Walkthrough

### Step 1: Set Up Your Environment

Choose your preferred method:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="curl" label="cURL">

```bash
# Set your API key as an environment variable
export WEBSCRAPINGHQ_API_KEY="your-api-key-here"

# Test the connection
curl -X POST https://app.webscrapinghq.com/api/v1/scrape \
  -H "X-API-KEY: $WEBSCRAPINGHQ_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"url": "https://httpbin.org/get"}'
```

</TabItem>
<TabItem value="python" label="Python">

```python
import os
import requests

# Set your API key
API_KEY = os.environ.get('WEBSCRAPINGHQ_API_KEY') or 'your-api-key-here'

# Make your first request
def scrape_url(url):
    headers = {
        'X-API-KEY': API_KEY,
        'Content-Type': 'application/json'
    }

    payload = {'url': url}

    response = requests.post(
        'https://app.webscrapinghq.com/api/v1/scrape',
        headers=headers,
        json=payload
    )

    return response.json()

# Test it out
result = scrape_url('https://httpbin.org/get')
print(f"Credits left: {result['creditsLeft']}")
print(f"Status code: {result['initial-status-code']}")
```

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
const API_KEY = process.env.WEBSCRAPINGHQ_API_KEY || "your-api-key-here";

async function scrapeUrl(url) {
  const response = await fetch("https://app.webscrapinghq.com/api/v1/scrape", {
    method: "POST",
    headers: {
      "X-API-KEY": API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url }),
  });

  return await response.json();
}

// Test it out
scrapeUrl("https://httpbin.org/get").then((result) => {
  console.log(`Credits left: ${result.creditsLeft}`);
  console.log(`Status code: ${result["initial-status-code"]}`);
});
```

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
$apiKey = $_ENV['WEBSCRAPINGHQ_API_KEY'] ?? 'your-api-key-here';

function scrapeUrl($url, $apiKey) {
    $ch = curl_init();

    curl_setopt($ch, CURLOPT_URL, 'https://app.webscrapinghq.com/api/v1/scrape');
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'X-API-KEY: ' . $apiKey,
        'Content-Type: application/json'
    ]);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(['url' => $url]));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    $response = curl_exec($ch);
    curl_close($ch);

    return json_decode($response, true);
}

// Test it out
$result = scrapeUrl('https://httpbin.org/get', $apiKey);
echo "Credits left: " . $result['creditsLeft'] . "\n";
echo "Status code: " . $result['initial-status-code'] . "\n";
?>
```

</TabItem>
</Tabs>

### Step 2: Add JavaScript Rendering

Many modern websites require JavaScript to load content. Enable JavaScript rendering:

```json
{
  "url": "https://example-spa.com",
  "renderJs": true,
  "waitFor": 3000
}
```

<Tabs>
<TabItem value="curl" label="cURL">

```bash
curl -X POST https://app.webscrapinghq.com/api/v1/scrape \
  -H "X-API-KEY: $WEBSCRAPINGHQ_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://example-spa.com",
    "renderJs": true,
    "waitFor": 3000
  }'
```

</TabItem>
<TabItem value="python" label="Python">

```python
result = scrape_url_advanced('https://example-spa.com', {
    'renderJs': True,
    'waitFor': 3000
})
```

</TabItem>
</Tabs>

### Step 3: Capture Screenshots

Add visual verification with screenshots:

```json
{
  "url": "https://example.com",
  "screenshot": true,
  "deviceType": "desktop"
}
```

The response will include a base64-encoded screenshot:

```json
{
  "screenshot": "iVBORw0KGgoAAAANSUhEUgAAA...",
  "body": "<!DOCTYPE html>...",
  "creditsLeft": 995,
  "cost": 5
}
```

### Step 4: AI-Powered Data Extraction

Extract specific data using AI:

```json
{
  "url": "https://news-website.com",
  "aiScraping": [
    {
      "name": "headline",
      "context": "Extract the main news headline"
    },
    {
      "name": "author",
      "context": "Find the article author name"
    },
    {
      "name": "publish_date",
      "context": "When was this article published"
    }
  ]
}
```

Response with extracted data:

```json
{
  "aiResponse": {
    "headline": "Breaking: Major Tech Announcement Today",
    "author": "John Smith",
    "publish_date": "2024-01-15"
  },
  "body": "<!DOCTYPE html>...",
  "creditsLeft": 990,
  "cost": 10
}
```

## Common Use Cases

### E-commerce Product Scraping

```json
{
  "url": "https://shop.example.com/product/123",
  "renderJs": true,
  "aiScraping": [
    {
      "name": "product_name",
      "context": "Extract the product title or name"
    },
    {
      "name": "price",
      "context": "Find the current price"
    },
    {
      "name": "availability",
      "context": "Is the product in stock"
    },
    {
      "name": "rating",
      "context": "Product rating or review score"
    }
  ]
}
```

### News Article Extraction

```json
{
  "url": "https://news.example.com/article/456",
  "renderJs": true,
  "aiScraping": [
    {
      "name": "headline",
      "context": "Main article headline"
    },
    {
      "name": "summary",
      "context": "Article summary or description"
    },
    {
      "name": "content",
      "context": "Full article text content"
    },
    {
      "name": "tags",
      "context": "Article tags or categories"
    }
  ]
}
```

### Social Media Monitoring

```json
{
  "url": "https://social.example.com/post/789",
  "renderJs": true,
  "waitFor": 5000,
  "screenshot": true,
  "aiScraping": [
    {
      "name": "post_content",
      "context": "Extract the main post text"
    },
    {
      "name": "engagement",
      "context": "Likes, shares, comments count"
    },
    {
      "name": "timestamp",
      "context": "When was this posted"
    }
  ]
}
```

## Understanding the Response

Every successful response includes these key fields:

| Field                 | Description                       | Example                     |
| --------------------- | --------------------------------- | --------------------------- |
| `creditsLeft`         | Remaining credits in your account | `995`                       |
| `cost`                | Credits consumed by this request  | `5`                         |
| `initial-status-code` | HTTP status from target site      | `200`                       |
| `resolved-url`        | Final URL after redirects         | `https://example.com/final` |
| `type`                | Content type returned             | `"html"`                    |
| `body`                | HTML content of the page          | `"<!DOCTYPE html>..."`      |
| `features_used`       | Features enabled for this request | `{"javascript": true}`      |
| `screenshot`          | Base64 image (if requested)       | `"iVBORw0K..."`             |
| `aiResponse`          | AI-extracted data (if requested)  | `{"title": "..."}`          |

## Error Handling

Handle common errors gracefully:

<Tabs>
<TabItem value="python" label="Python">

```python
import requests

def scrape_with_error_handling(url, options={}):
    try:
        headers = {
            'X-API-KEY': API_KEY,
            'Content-Type': 'application/json'
        }

        payload = {'url': url, **options}

        response = requests.post(
            'https://app.webscrapinghq.com/api/v1/scrape',
            headers=headers,
            json=payload,
            timeout=30
        )

        if response.status_code == 200:
            return response.json()
        elif response.status_code == 401:
            raise Exception("Invalid API key")
        elif response.status_code == 429:
            raise Exception("Rate limit exceeded")
        elif response.status_code == 500:
            raise Exception("Server error, please try again")
        else:
            raise Exception(f"Request failed: {response.status_code}")

    except requests.exceptions.Timeout:
        raise Exception("Request timed out")
    except requests.exceptions.RequestException as e:
        raise Exception(f"Network error: {str(e)}")
```

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
async function scrapeWithErrorHandling(url, options = {}) {
  try {
    const response = await fetch(
      "https://app.webscrapinghq.com/api/v1/scrape",
      {
        method: "POST",
        headers: {
          "X-API-KEY": API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url, ...options }),
      }
    );

    if (response.ok) {
      return await response.json();
    } else if (response.status === 401) {
      throw new Error("Invalid API key");
    } else if (response.status === 429) {
      throw new Error("Rate limit exceeded");
    } else if (response.status === 500) {
      throw new Error("Server error, please try again");
    } else {
      throw new Error(`Request failed: ${response.status}`);
    }
  } catch (error) {
    if (error.name === "TypeError") {
      throw new Error("Network error or CORS issue");
    }
    throw error;
  }
}
```

</TabItem>
</Tabs>

## Next Steps

Now that you've made your first successful request, explore these features:

1. **[JavaScript Instructions](/javascript-instructions)** - Automate complex interactions
2. **[Basic Scraping](/basic-scraping)** - Learn core concepts and strategies
3. **[Authentication](/authentication)** - Secure API usage

## Need Help?

- 📧 Contact [support](mailto:info@webscrapinghq.com)

---

**Next**: Dive deeper into [Basic Scraping Concepts](/basic-scraping) to learn about different scraping strategies and optimizations.
