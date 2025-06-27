---
title: Screenshot Capture
description: Capture high-quality screenshots of web pages during scraping
sidebar_position: 7
---

# Screenshot Capture

WebscrapingHQ can capture high-quality screenshots of web pages during the scraping process. This feature is perfect for visual monitoring, compliance documentation, testing UI changes, and creating visual records of scraped content.

## Basic Screenshot Capture

Enable screenshots by setting `screenshot: true`:

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

## Screenshot Features

### High-Quality Images
- **Full-page captures** including content below the fold
- **Retina-quality** screenshots for crisp visual details
- **Base64 encoded** images returned directly in the API response
- **JPEG format** optimized for file size and quality

### Browser Automation
- **Real browser rendering** using Chromium engine
- **JavaScript execution** before screenshot capture
- **Dynamic content loading** with customizable wait times
- **Responsive design** testing with mobile/desktop views

## Screenshot Response Format

Screenshots are returned as base64-encoded data URLs:

```json
{
  "cost": 5,
  "creditsLeft": 995,
  "initial-status-code": 200,
  "resolved-url": "https://example.com",
  "type": "html",
  "body": "<!DOCTYPE html>...",
  "screenshot": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=",
  "features_used": {
    "javascript": true,
    "screenshot": true
  }
}
```

## Combining Screenshots with Other Features

### With JavaScript Rendering
```json
{
  "url": "https://spa-application.com",
  "renderJs": true,
  "screenshot": true,
  "waitFor": 5000
}
```

### With JavaScript Instructions
```json
{
  "url": "https://example.com/form",
  "renderJs": true,
  "screenshot": true,
  "javascriptInstruction": [
    {
      "action": "clickElement",
      "selector": {"type": "css", "value": ".expand-details"}
    },
    {
      "action": "wait",
      "delay": 2000
    }
  ]
}
```

### With Data Extraction
```json
{
  "url": "https://dashboard.example.com",
  "renderJs": true,
  "screenshot": true,
  "extractRules": {
    "metrics": ".metric-value",
    "status": ".status-indicator"
  }
}
```

## Real-World Use Cases

### Website Monitoring
Monitor visual changes to your website:

```json
{
  "url": "https://your-website.com",
  "renderJs": true,
  "screenshot": true,
  "waitFor": 3000
}
```

### Competitor Analysis
Capture competitor page layouts:

```json
{
  "url": "https://competitor.com/product",
  "renderJs": true,
  "screenshot": true,
  "deviceType": "desktop"
}
```

### Quality Assurance Testing
Test page rendering across different states:

```json
{
  "url": "https://your-app.com/dashboard",
  "renderJs": true,
  "screenshot": true,
  "javascriptInstruction": [
    {
      "action": "clickElement",
      "selector": {"type": "css", "value": ".login-button"}
    },
    {
      "action": "typeText",
      "selector": {"type": "css", "value": "#username"},
      "text": "testuser"
    },
    {
      "action": "typeText",
      "selector": {"type": "css", "value": "#password"},
      "text": "testpass"
    },
    {
      "action": "clickElement",
      "selector": {"type": "css", "value": ".submit-button"}
    },
    {
      "action": "waitForSelector",
      "selector": {"type": "css", "value": ".dashboard-content"},
      "timeout": 10
    }
  ]
}
```

### Documentation and Reporting
Create visual documentation of web applications:

```json
{
  "url": "https://admin-panel.com",
  "renderJs": true,
  "screenshot": true,
  "aiScraping": [
    {
      "name": "page_title",
      "value": "Main page title or heading"
    },
    {
      "name": "visible_sections",
      "value": "Names of main sections visible on the page as a list"
    }
  ]
}
```

## Mobile Screenshots

Capture mobile views using device type settings:

```json
{
  "url": "https://example.com",
  "renderJs": true,
  "screenshot": true,
  "deviceType": "mobile"
}
```

## Advanced Screenshot Techniques

### Full Page Screenshots
Capture entire page including content below the fold:

```json
{
  "url": "https://long-page.com",
  "renderJs": true,
  "screenshot": true,
  "javascriptInstruction": [
    {
      "action": "scrollDown"
    },
    {
      "action": "wait",
      "delay": 1000
    }
  ]
}
```

### Interactive Element Screenshots
Capture specific UI states:

```json
{
  "url": "https://interactive-site.com",
  "renderJs": true,
  "screenshot": true,
  "javascriptInstruction": [
    {
      "action": "hoverOverElement",
      "selector": {"type": "css", "value": ".hover-menu"}
    },
    {
      "action": "wait",
      "delay": 500
    }
  ]
}
```

### Modal and Popup Screenshots
Capture overlays and modal content:

```json
{
  "url": "https://modal-site.com",
  "renderJs": true,
  "screenshot": true,
  "javascriptInstruction": [
    {
      "action": "clickElement",
      "selector": {"type": "css", "value": ".open-modal"}
    },
    {
      "action": "waitForSelector",
      "selector": {"type": "css", "value": ".modal-content"},
      "timeout": 5
    }
  ]
}
```

## Working with Screenshot Data

### Saving Screenshots (Python)
```python
import requests
import base64
from datetime import datetime

response = requests.post(
    'https://your-domain.com/api/v1/scrape',
    headers={'X-API-KEY': 'your-api-key'},
    json={
        'url': 'https://example.com',
        'renderJs': True,
        'screenshot': True
    }
)

data = response.json()
if 'screenshot' in data:
    # Extract base64 data
    screenshot_data = data['screenshot']
    base64_data = screenshot_data.split(',')[1]  # Remove data:image/jpeg;base64,
    
    # Decode and save
    image_data = base64.b64decode(base64_data)
    filename = f"screenshot_{datetime.now().strftime('%Y%m%d_%H%M%S')}.jpg"
    
    with open(filename, 'wb') as f:
        f.write(image_data)
    
    print(f"Screenshot saved as {filename}")
```

### Displaying Screenshots (JavaScript)
```javascript
const response = await fetch('https://your-domain.com/api/v1/scrape', {
  method: 'POST',
  headers: {
    'X-API-KEY': 'your-api-key',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    url: 'https://example.com',
    renderJs: true,
    screenshot: true
  })
});

const data = await response.json();

if (data.screenshot) {
  // Display in img element
  const img = document.createElement('img');
  img.src = data.screenshot;
  img.style.maxWidth = '100%';
  document.body.appendChild(img);
  
  // Or create download link
  const link = document.createElement('a');
  link.href = data.screenshot;
  link.download = 'screenshot.jpg';
  link.textContent = 'Download Screenshot';
  document.body.appendChild(link);
}
```

### Processing Screenshots (PHP)
```php
$response = file_get_contents('https://your-domain.com/api/v1/scrape', false, stream_context_create([
    'http' => [
        'method' => 'POST',
        'header' => [
            'X-API-KEY: your-api-key',
            'Content-Type: application/json'
        ],
        'content' => json_encode([
            'url' => 'https://example.com',
            'renderJs' => true,
            'screenshot' => true
        ])
    ]
]));

$data = json_decode($response, true);

if (isset($data['screenshot'])) {
    // Extract base64 data
    $screenshot_data = $data['screenshot'];
    $base64_data = explode(',', $screenshot_data)[1];
    
    // Decode and save
    $image_data = base64_decode($base64_data);
    $filename = 'screenshot_' . date('Ymd_His') . '.jpg';
    
    file_put_contents($filename, $image_data);
    echo "Screenshot saved as $filename";
}
```

## Credit Costs

Screenshot pricing depends on JavaScript rendering:

### With JavaScript Rendering (Recommended)
- Basic scraping: 1 credit
- JavaScript rendering: +3 credits
- Screenshot: +1 credit
- **Total: 5 credits**

### Without JavaScript Rendering
- Basic scraping: 1 credit
- Screenshot: +4 credits
- **Total: 5 credits**

*Note: JavaScript rendering is recommended for accurate screenshots of modern websites.*

## Best Practices

### 1. Always Use JavaScript Rendering
```json
{
  "screenshot": true,
  "renderJs": true  // Essential for modern websites
}
```

### 2. Wait for Content to Load
```json
{
  "screenshot": true,
  "renderJs": true,
  "waitFor": 3000  // Wait for dynamic content
}
```

### 3. Handle Responsive Design
```json
// Desktop view
{
  "screenshot": true,
  "renderJs": true,
  "deviceType": "desktop"
}

// Mobile view
{
  "screenshot": true,
  "renderJs": true,
  "deviceType": "mobile"
}
```

### 4. Optimize for File Size
Screenshots are automatically optimized, but you can reduce processing time by:
- Avoiding unnecessary wait times
- Capturing specific elements rather than full pages when possible
- Using appropriate device types for your use case

## Common Screenshot Scenarios

### Before/After Comparisons
```python
# Capture before state
before_response = scrape_with_screenshot("https://site.com")

# Make changes via API or admin panel
make_changes()

# Capture after state
after_response = scrape_with_screenshot("https://site.com")

# Compare screenshots
compare_images(before_response['screenshot'], after_response['screenshot'])
```

### Automated Visual Testing
```javascript
const test_urls = [
  'https://app.com/page1',
  'https://app.com/page2',
  'https://app.com/page3'
];

for (const url of test_urls) {
  const screenshot = await captureScreenshot(url);
  await validateScreenshot(screenshot, url);
}
```

### Monitoring Dashboard Changes
```json
{
  "url": "https://analytics-dashboard.com",
  "renderJs": true,
  "screenshot": true,
  "javascriptInstruction": [
    {
      "action": "clickElement",
      "selector": {"type": "css", "value": ".date-range-selector"}
    },
    {
      "action": "clickElement",
      "selector": {"type": "css", "value": "[data-range='last-7-days']"}
    },
    {
      "action": "waitForSelector",
      "selector": {"type": "css", "value": ".chart-loaded"},
      "timeout": 10
    }
  ]
}
```

## Error Handling

### Common Issues
- **Blank screenshots**: Page not fully loaded - increase `waitFor` time
- **Cut-off content**: Use scroll actions to capture full page
- **Missing elements**: Ensure JavaScript rendering is enabled
- **Low quality**: Screenshots are automatically optimized for web delivery

### Troubleshooting
```python
def validate_screenshot(response):
    if 'screenshot' not in response:
        print("No screenshot captured - check if screenshot=true")
        return False
    
    screenshot_data = response['screenshot']
    if len(screenshot_data) < 1000:  # Very small data suggests blank image
        print("Screenshot appears blank - increase waitFor time")
        return False
    
    return True
```

## Limitations

### Technical Limitations
- Screenshots are JPEG format only
- Maximum file size approximately 2MB per screenshot
- Base64 encoding increases response size by ~33%
- Processing time increases with page complexity

### Browser Limitations
- Only captures visible viewport content (unless scrolling is used)
- Some browser security features may block certain content
- CSS animations may appear static in screenshots

## Integration Examples

### Automated Testing Pipeline
```python
def visual_regression_test(url, baseline_screenshot):
    current = requests.post('https://your-domain.com/api/v1/scrape', {
        'url': url,
        'renderJs': True,
        'screenshot': True
    })
    
    similarity = compare_screenshots(
        baseline_screenshot, 
        current.json()['screenshot']
    )
    
    if similarity < 0.95:  # 95% similarity threshold
        raise Exception(f"Visual regression detected: {similarity}")
```

### Website Change Detection
```javascript
async function detectChanges(urls) {
    const results = [];
    
    for (const url of urls) {
        const current = await captureScreenshot(url);
        const previous = await getPreviousScreenshot(url);
        
        if (screenshotsAreDifferent(current, previous)) {
            results.push({
                url,
                changed: true,
                timestamp: new Date()
            });
        }
        
        await storePreviousScreenshot(url, current);
    }
    
    return results;
}
```

## Next Steps

- Learn about [JavaScript Instructions](/javascript-instructions) for interactive screenshots
- Explore [AI Extraction](/ai-extraction) to analyze screenshot content
- Check out [SERP Scraping](/serp-scraping) for search result screenshots
- See [API Reference](/api-reference) for complete parameter details 
