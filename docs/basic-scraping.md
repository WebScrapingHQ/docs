---
title: Basic Scraping
description: Learn the fundamentals of web scraping with WebscrapingHQ API
sidebar_position: 3
---

# Basic Scraping

This guide covers the fundamentals of web scraping using WebscrapingHQ API. You'll learn core concepts, basic usage patterns, and how to handle common scenarios.

## Understanding Web Scraping

Web scraping is the process of extracting data from websites programmatically. Modern websites can be challenging to scrape due to:

- **Dynamic Content**: JavaScript-rendered content
- **Anti-Bot Measures**: Rate limiting, CAPTCHAs, IP blocking
- **Complex Interactions**: Forms, authentication, multi-step flows
- **Varying Formats**: Different HTML structures and data patterns

WebscrapingHQ API handles these challenges automatically, providing a simple interface for complex scraping tasks.

## Basic Request Structure

Every scraping request follows this basic structure:

```json
{
  "url": "https://example.com",
  "renderJs": false,
  "screenshot": false,
  "waitFor": 0
}
```

### Required Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `url` | string | The target URL to scrape (must be a valid HTTP/HTTPS URL) |

### Optional Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `renderJs` | boolean | `false` | Enable JavaScript rendering for dynamic content |
| `screenshot` | boolean | `false` | Capture a screenshot of the page |
| `waitFor` | number | `0` | Wait time in milliseconds before capturing content |
| `deviceType` | string | `"desktop"` | Device type: `"desktop"` or `"mobile"` |
| `country_code` | string | - | Country code for geolocation (e.g., "US", "UK") |

## Content Types

### Static HTML Pages

For simple websites with static content, a basic request is sufficient:

```bash
curl -X POST https://app.webscrapinghq.com/api/v1/scrape \
  -H "X-API-KEY: your-api-key" \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://example.com/article"
  }'
```

**Use cases:**
- News articles
- Blog posts
- Product catalogs
- Static content pages

### JavaScript-Rendered Content

Many modern websites require JavaScript to load content. Enable JavaScript rendering:

```json
{
  "url": "https://spa-example.com",
  "renderJs": true,
  "waitFor": 3000
}
```

**Use cases:**
- Single Page Applications (SPAs)
- React/Vue/Angular applications
- Dynamic content loading
- Infinite scroll pages

### Mobile-Optimized Content

Some websites serve different content to mobile devices:

```json
{
  "url": "https://mobile-site.com",
  "deviceType": "mobile",
  "renderJs": true
}
```

## Response Structure

Understanding the response structure helps you extract the data you need:

```json
{
  "creditsLeft": 995,
  "cost": 5,
  "initial-status-code": 200,
  "resolved-url": "https://example.com/final-url",
  "type": "html",
  "body": "<!DOCTYPE html>...",
  "features_used": {
    "javascript": true,
    "screenshot": false,
    "geolocation": null
  }
}
```

### Key Response Fields

#### Status Information
- `initial-status-code`: HTTP status code from the target website
- `resolved-url`: Final URL after any redirects
- `type`: Content type (usually "html")

#### Usage Information
- `creditsLeft`: Remaining credits in your account
- `cost`: Credits consumed by this request
- `features_used`: Object showing which features were used

#### Content
- `body`: The HTML content of the scraped page
- `screenshot`: Base64-encoded screenshot (if requested)

## Common Scraping Patterns

### 1. News Articles

```json
{
  "url": "https://news-site.com/article/123",
  "renderJs": false
}
```

News sites typically use static HTML, so JavaScript rendering is usually unnecessary.

### 2. E-commerce Products

```json
{
  "url": "https://shop.com/product/456",
  "renderJs": true,
  "waitFor": 2000
}
```

Product pages often load prices and availability dynamically.

### 3. Social Media Posts

```json
{
  "url": "https://social-platform.com/post/789",
  "renderJs": true,
  "waitFor": 5000,
  "deviceType": "mobile"
}
```

Social media requires JavaScript and often serves better content to mobile devices.

### 4. Search Results

```json
{
  "url": "https://search-engine.com/search?q=web+scraping",
  "renderJs": true,
  "waitFor": 3000
}
```

Search results are typically JavaScript-rendered and may take time to load.

## Handling Different Scenarios

### Slow-Loading Pages

For pages that take time to load content:

```json
{
  "url": "https://slow-site.com",
  "renderJs": true,
  "waitFor": 10000
}
```

### Geo-Restricted Content

Access content from specific locations:

```json
{
  "url": "https://geo-restricted.com",
  "country_code": "US",
  "renderJs": true
}
```

### Pages with Custom Headers

Send custom headers with your request:

```json
{
  "url": "https://api-like-site.com",
  "headers": [
    {
      "name": "User-Agent",
      "value": "CustomBot/1.0"
    },
    {
      "name": "Accept-Language",
      "value": "en-US,en;q=0.9"
    }
  ]
}
```

### Pages with Cookies

Include cookies for authenticated or personalized content:

```json
{
  "url": "https://personalized-site.com",
  "cookies": [
    {
      "name": "session_id",
      "value": "abc123xyz"
    },
    {
      "name": "user_pref",
      "value": "theme=dark"
    }
  ]
}
```

## Processing the Response

Once you receive the HTML content, you'll typically want to extract specific data. Here are common approaches:

### Python Example with BeautifulSoup

```python
import requests
from bs4 import BeautifulSoup

def scrape_and_parse(url):
    # Make scraping request
    response = requests.post(
        'https://app.webscrapinghq.com/api/v1/scrape',
        headers={'X-API-KEY': 'your-api-key'},
        json={'url': url, 'renderJs': True}
    )
    
    data = response.json()
    html_content = data['body']
    
    # Parse with BeautifulSoup
    soup = BeautifulSoup(html_content, 'html.parser')
    
    # Extract data
    title = soup.find('title').text if soup.find('title') else 'No title'
    paragraphs = [p.text for p in soup.find_all('p')]
    
    return {
        'title': title,
        'paragraphs': paragraphs,
        'credits_left': data['creditsLeft']
    }

# Usage
result = scrape_and_parse('https://example.com/article')
print(f"Title: {result['title']}")
print(f"Credits left: {result['credits_left']}")
```

### JavaScript Example with Cheerio

```javascript
const cheerio = require('cheerio');

async function scrapeAndParse(url) {
    const response = await fetch('https://app.webscrapinghq.com/api/v1/scrape', {
        method: 'POST',
        headers: {
            'X-API-KEY': 'your-api-key',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url, renderJs: true })
    });
    
    const data = await response.json();
    const $ = cheerio.load(data.body);
    
    // Extract data
    const title = $('title').text() || 'No title';
    const paragraphs = $('p').map((i, el) => $(el).text()).get();
    
    return {
        title,
        paragraphs,
        creditsLeft: data.creditsLeft
    };
}

// Usage
scrapeAndParse('https://example.com/article')
    .then(result => {
        console.log(`Title: ${result.title}`);
        console.log(`Credits left: ${result.creditsLeft}`);
    });
```

## Best Practices

### 1. Start Simple
Begin with basic requests and add complexity as needed:

```json
// Start with this
{
  "url": "https://example.com"
}

// Add features if needed
{
  "url": "https://example.com",
  "renderJs": true,
  "waitFor": 3000
}
```

### 2. Optimize for Speed
- Only enable JavaScript rendering when necessary
- Use appropriate wait times (not too long or short)
- Avoid unnecessary features to save credits

### 3. Handle Errors Gracefully
Always check the response status and handle errors:

```python
response = requests.post(url, headers=headers, json=payload)

if response.status_code == 200:
    data = response.json()
    if data.get('initial-status-code') == 200:
        # Process successful scrape
        html_content = data['body']
    else:
        # Handle target site error
        print(f"Target site returned: {data['initial-status-code']}")
else:
    # Handle API error
    print(f"API error: {response.status_code}")
```

### 4. Monitor Your Usage
Keep track of your credit consumption:

```python
def log_usage(response_data):
    print(f"Credits used: {response_data['cost']}")
    print(f"Credits remaining: {response_data['creditsLeft']}")
    print(f"Features used: {response_data['features_used']}")
```

## Common Issues and Solutions

### Issue: Page Returns Empty Content
**Solution**: Enable JavaScript rendering
```json
{
  "url": "https://example.com",
  "renderJs": true,
  "waitFor": 3000
}
```

### Issue: Content Loads Slowly
**Solution**: Increase wait time
```json
{
  "url": "https://example.com",
  "renderJs": true,
  "waitFor": 10000
}
```

### Issue: Getting Blocked by Anti-Bot Measures
**Solution**: Use different device types or geolocation
```json
{
  "url": "https://example.com",
  "renderJs": true,
  "deviceType": "mobile",
  "country_code": "US"
}
```

### Issue: Missing Dynamic Content
**Solution**: Use JavaScript instructions to interact with the page
```json
{
  "url": "https://example.com",
  "renderJs": true,
  "javascriptInstruction": [
    {
      "action": "clickElement",
      "selector": {
        "type": "css",
        "value": ".load-more-button"
      }
    }
  ]
}
```

## Next Steps

Now that you understand basic scraping concepts, explore these features:

1. **[JavaScript Instructions](/javascript-instructions)** - Automate complex interactions
2. **[Authentication](/authentication)** - Learn about API key management
3. **[Quick Start](/quick-start)** - Review the quick start guide

---

**Related**: Continue exploring our documentation to learn more about advanced scraping techniques and optimization strategies. 
