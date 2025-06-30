---
title: SERP Scraping
description: Scrape search engine results pages with advanced optimization
sidebar_position: 6
---

# SERP Scraping

SERP (Search Engine Results Page) scraping allows you to extract search results from Google, Bing, Yahoo, and other search engines. This feature includes specialized handling for search result structures, anti-bot bypassing, and optimized performance for search pages.

## What is SERP Scraping?

SERP scraping extracts data from search engine results pages, including:

- **Organic search results** with titles, URLs, and descriptions
- **Featured snippets** and rich results
- **Local search results** and map listings
- **Shopping results** with prices and reviews
- **News results** and recent articles
- **Image and video results**
- **Related searches** and suggestions

## Basic SERP Scraping

Enable SERP optimization by setting `serp: true`:

```bash
curl -X POST https://your-domain.com/api/v1/scrape \
  -H "X-API-KEY: your-api-key" \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://www.google.com/search?q=web+scraping+tools",
    "serp": true,
    "renderJs": true
  }'
```

## Search Engine URLs

### Google Search
```json
{
  "url": "https://www.google.com/search?q=your+search+terms",
  "serp": true,
  "renderJs": true
}
```

### Bing Search
```json
{
  "url": "https://www.bing.com/search?q=your+search+terms",
  "serp": true,
  "renderJs": true
}
```

### Yahoo Search
```json
{
  "url": "https://search.yahoo.com/search?p=your+search+terms",
  "serp": true,
  "renderJs": true
}
```

### DuckDuckGo
```json
{
  "url": "https://duckduckgo.com/?q=your+search+terms",
  "serp": true,
  "renderJs": true
}
```

## Advanced SERP Examples

### Local Business Search

```json
{
  "url": "https://www.google.com/search?q=pizza+near+me&location=New+York",
  "serp": true,
  "renderJs": true,
  "countryCode": "US",
  "extractRules": {
    "businessNames": ".VkpGBb",
    "ratings": ".MW4etd",
    "addresses": ".rllt__details div:nth-child(2)",
    "phoneNumbers": ".rllt__details div:nth-child(3)"
  }
}
```

### Product Shopping Search

```json
{
  "url": "https://www.google.com/search?q=wireless+headphones&tbm=shop",
  "serp": true,
  "renderJs": true,
  "extractRules": {
    "productTitles": ".rgHvZc",
    "prices": ".T14wmb",
    "stores": ".aULzUe",
    "ratings": ".Fam1ne"
  }
}
```

### News Search Results

```json
{
  "url": "https://www.google.com/search?q=artificial+intelligence&tbm=nws",
  "serp": true,
  "renderJs": true,
  "extractRules": {
    "headlines": ".n0jPhd",
    "sources": ".NUnG9d",
    "publishDates": ".OSrXXb",
    "snippets": ".GI74Re"
  }
}
```

## SERP-Specific Features

### Enhanced Anti-Bot Protection
SERP scraping includes specialized measures to avoid detection:

- **Realistic user agents** that match search engine expectations
- **Proper request headers** for search queries  
- **Rate limiting compliance** to avoid blocking
- **CAPTCHA avoidance** techniques
- **Proxy rotation** when needed

### Search Result Optimization
- **JavaScript rendering** for dynamic content loading
- **Proper wait times** for result loading
- **Scroll handling** for infinite scroll results
- **Location-based results** with geolocation

## Combining SERP with AI Extraction

Extract structured data from search results using AI:

```json
{
  "url": "https://www.google.com/search?q=best+restaurants+nyc",
  "serp": true,
  "renderJs": true,
  "aiScraping": [
    {
      "name": "restaurantNames",
      "value": "Names of restaurants from search results as a list"
    },
    {
      "name": "ratings",
      "value": "Restaurant ratings and review counts as a list"
    },
    {
      "name": "addresses",
      "value": "Restaurant addresses from search results as a list"
    },
    {
      "name": "cuisines",
      "value": "Types of cuisine offered as a list"
    }
  ]
}
```

## Real-World Use Cases

### SEO Monitoring
```json
{
  "url": "https://www.google.com/search?q=web+scraping+api",
  "serp": true,
  "renderJs": true,
  "extractRules": {
    "organicTitles": "h3.LC20lb",
    "organicUrls": ".yuRUbf a",
    "organicDescriptions": ".VwiC3b",
    "positions": ".g"
  }
}
```

### Competitor Analysis
```json
{
  "url": "https://www.google.com/search?q=competitor+brand+name",
  "serp": true,
  "renderJs": true,
  "aiScraping": [
    {
      "name": "competitorAds",
      "value": "Paid advertisement titles and descriptions as a list"
    },
    {
      "name": "organicListings",
      "value": "Organic search result titles for the competitor"
    },
    {
      "name": "featuredSnippets",
      "value": "Any featured snippet content related to the competitor"
    }
  ]
}
```

### Market Research
```json
{
  "url": "https://www.google.com/search?q=industry+trends+2024",
  "serp": true,
  "renderJs": true,
  "aiScraping": [
    {
      "name": "trendingTopics",
      "value": "Trending topics and keywords from search results"
    },
    {
      "name": "industryReports",
      "value": "Links to industry reports and research papers"
    },
    {
      "name": "newsHeadlines",
      "value": "Recent news headlines about industry trends"
    }
  ]
}
```

## Location-Based SERP Scraping

### Specify Geographic Location
```json
{
  "url": "https://www.google.com/search?q=coffee+shops",
  "serp": true,
  "renderJs": true,
  "countryCode": "US",
  "extractRules": {
    "localResults": ".VkpGBb",
    "mapListings": ".rllt__link"
  }
}
```

### Multi-Location Scraping
```bash
# Scrape for different cities
curl -X POST https://your-domain.com/api/v1/scrape \
  -H "X-API-KEY: your-api-key" \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://www.google.com/search?q=dentist+near+me&near=Chicago,IL",
    "serp": true,
    "renderJs": true
  }'
```

## SERP Response Format

```json
{
  "cost": 6,
  "creditsLeft": 994,
  "initialStatusCode": 200,
  "resolvedUrl": "https://www.google.com/search?q=web+scraping+tools",
  "type": "html",
  "body": "<!DOCTYPE html>...",
  "featuresUsed": {
    "javascript": true,
    "serp": true,
    "geolocation": "US"
  }
}
```

## Advanced SERP Techniques

### Infinite Scroll Handling
```json
{
  "url": "https://www.google.com/search?q=long+search+term",
  "serp": true,
  "renderJs": true,
  "javascriptInstruction": [
    {
      "action": "scrollDown"
    },
    {
      "action": "wait",
      "delay": 2000
    },
    {
      "action": "scrollDown"
    }
  ]
}
```

### Load More Results
```json
{
  "url": "https://www.google.com/search?q=search+term",
  "serp": true,
  "renderJs": true,
  "javascriptInstruction": [
    {
      "action": "clickElement",
      "selector": {"type": "css", "value": "#pnnext"}
    },
    {
      "action": "waitForSelector",
      "selector": {"type": "css", "value": ".g"},
      "timeout": 10
    }
  ]
}
```

### Handle Cookie Consent
```json
{
  "url": "https://www.google.com/search?q=search+term",
  "serp": true,
  "renderJs": true,
  "javascriptInstruction": [
    {
      "action": "clickElement",
      "selector": {"type": "css", "value": "#L2AGLb"}
    },
    {
      "action": "wait",
      "delay": 1000
    }
  ]
}
```

## Credit Costs

SERP scraping adds **5 credits** to your base request:

- Basic scraping: 1 credit
- JavaScript rendering: +3 credits
- SERP optimization: +5 credits
- **Total: 9 credits**

Additional features:
- AI extraction: +5 credits
- Screenshots: +1 credit (with renderJs)

## Best Practices

### 1. Always Use JavaScript Rendering
```json
{
  "serp": true,
  "renderJs": true  // Essential for modern search engines
}
```

### 2. Respect Rate Limits
```javascript
// Space out your requests
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

for (const query of searchQueries) {
  await scrapeSerp(query);
  await delay(2000); // Wait 2 seconds between requests
}
```

### 3. Use Proper Search URLs
```json
// ✅ Proper Google search URL
{"url": "https://www.google.com/search?q=your+search+terms"}

// ❌ Avoid direct result URLs
{"url": "https://www.google.com/url?sa=t&url=..."}
```

### 4. Handle Dynamic Content
```json
{
  "serp": true,
  "renderJs": true,
  "waitFor": 3000  // Wait for results to load
}
```

## Common SERP Selectors

### Google Search Results
```json
{
  "extractRules": {
    "organicTitles": "h3.LC20lb",
    "organicUrls": ".yuRUbf a",
    "organicDescriptions": ".VwiC3b",
    "adTitles": ".uEierd",
    "featuredSnippet": ".kp-blk",
    "peopleAlsoAsk": ".related-question-pair",
    "relatedSearches": ".k8XOCe"
  }
}
```

### Bing Search Results
```json
{
  "extractRules": {
    "organicTitles": ".b_lineclamp1",
    "organicUrls": ".b_attribution cite",
    "organicDescriptions": ".b_caption p",
    "ads": ".b_ad .b_adlabel"
  }
}
```

## Error Handling

### Common SERP Issues
- **Rate limiting**: Reduce request frequency
- **CAPTCHA challenges**: Use different IP/user agent
- **Location blocking**: Try different country codes
- **No results**: Check search query formatting

### Response Validation
```python
def validate_serp_response(response):
    if 'blocked' in response.get('body', '').lower():
        print("Request was blocked - reduce rate")
    
    if response.get('initial-status-code') == 429:
        print("Rate limited - wait before retry")
    
    if not response.get('body'):
        print("Empty response - check URL format")
```

## Programming Language Examples

### Python with Multiple Queries
```python
import requests
import time

search_queries = [
    "web scraping tools",
    "data extraction apis", 
    "automated web scraping"
]

for query in search_queries:
    response = requests.post(
        'https://your-domain.com/api/v1/scrape',
        headers={'X-API-KEY': 'your-api-key'},
        json={
            'url': f'https://www.google.com/search?q={query}',
            'serp': True,
            'renderJs': True,
            'extractRules': {
                'titles': 'h3.LC20lb',
                'descriptions': '.VwiC3b'
            }
        }
    )
    
    data = response.json()
    print(f"Query: {query}")
    print(f"Results: {data.get('extracted_data', {})}")
    
    time.sleep(2)  # Rate limiting
```

### JavaScript Bulk SERP Scraping
```javascript
const queries = ['query1', 'query2', 'query3'];

const scrapeSERP = async (query) => {
  const response = await fetch('https://your-domain.com/api/v1/scrape', {
    method: 'POST',
    headers: {
      'X-API-KEY': 'your-api-key',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      url: `https://www.google.com/search?q=${encodeURIComponent(query)}`,
      serp: true,
      renderJs: true,
      aiScraping: [
        {name: 'topResults', value: 'Top 5 search result titles as a list'}
      ]
    })
  });
  
  return response.json();
};

// Process queries with rate limiting
for (const query of queries) {
  const results = await scrapeSERP(query);
  console.log(`Results for "${query}":`, results.aiResponse);
  await new Promise(resolve => setTimeout(resolve, 2000));
}
```

## Limitations

### Search Engine Limitations
- **Daily query limits** imposed by search engines
- **Geographic restrictions** on some content
- **Personalized results** may vary between requests
- **Anti-bot measures** becoming more sophisticated

### Technical Limitations
- JavaScript rendering required for most modern search engines
- Higher credit cost due to complexity
- Slower response times compared to basic scraping

## Next Steps

- Learn about [AI Extraction](/ai-extraction) for intelligent SERP data parsing
- Explore [JavaScript Instructions](/javascript-instructions) for complex SERP interactions
- Check out [Screenshot Capture](/screenshots) for visual SERP monitoring
- See [API Reference](/api-reference) for complete parameter details 
