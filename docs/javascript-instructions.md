---
title: JavaScript Instructions
description: Automate complex web interactions with JavaScript instructions
sidebar_position: 5
---

# JavaScript Instructions

JavaScript Instructions allow you to automate complex interactions with web pages before scraping their content. This powerful feature enables you to click buttons, fill forms, navigate through dynamic content, and perform virtually any action a human user would do.

## Overview

The `javascriptInstruction` parameter accepts an array of actions that will be executed in sequence on the target webpage. Each instruction is executed after the page loads and before the final content is captured.

## Basic Syntax

```json
{
  "url": "https://example.com",
  "renderJs": true,
  "javascriptInstruction": [
    {
      "action": "clickElement",
      "selector": {
        "type": "css",
        "value": "#load-more-button"
      }
    }
  ]
}
```

## Available Actions

### Navigation Actions

#### navigateToUrl
Navigate to a different URL within the same session.

```json
{
  "action": "navigateToUrl",
  "url": "https://example.com/login",
  "waitUntil": "networkidle0"
}
```

**Parameters:**
- `url` (string): Target URL to navigate to
- `waitUntil` (string): When to consider navigation complete
  - `"load"`: Wait for page load event
  - `"domcontentloaded"`: Wait for DOM content loaded
  - `"networkidle0"`: Wait until no network activity

#### reloadPage
Reload the current page.

```json
{
  "action": "reloadPage",
  "waitUntil": "load"
}
```

### Element Interaction Actions

#### clickElement
Click on an element.

```json
{
  "action": "clickElement",
  "selector": {
    "type": "css",
    "value": ".load-more-btn",
    "state": "visible"
  },
  "timeout": 10
}
```

**Parameters:**
- `selector` (object): Element selector configuration
- `timeout` (number): Maximum wait time in seconds
- `onError` (string): Error handling behavior (`"continue"` or `"return"`)

#### doubleClickElement
Double-click on an element.

```json
{
  "action": "doubleClickElement",
  "selector": {
    "type": "css",
    "value": "#item-to-select"
  }
}
```

#### hoverOverElement
Hover over an element to trigger hover effects.

```json
{
  "action": "hoverOverElement",
  "selector": {
    "type": "css",
    "value": ".dropdown-trigger"
  }
}
```

### Text Input Actions

#### typeText
Type text into an input field.

```json
{
  "action": "typeText",
  "selector": {
    "type": "css",
    "value": "#search-input"
  },
  "text": "web scraping API",
  "delay": 100
}
```

**Parameters:**
- `text` (string): Text to type
- `delay` (number): Delay between keystrokes in milliseconds

#### performSearch
Specialized action for search forms.

```json
{
  "action": "performSearch",
  "selector": {
    "type": "css",
    "value": "#search-form"
  },
  "text": "search query"
}
```

### Form Actions

#### selectOption
Select an option from a dropdown or select element.

```json
{
  "action": "selectOption",
  "selector": {
    "type": "css",
    "value": "#country-select"
  },
  "text": "United States"
}
```

### Keyboard Actions

#### pressKeyboardKey
Press a specific keyboard key.

```json
{
  "action": "pressKeyboardKey",
  "key": "Enter"
}
```

**Common keys:**
- `"Enter"`
- `"Tab"`
- `"Escape"`
- `"ArrowDown"`
- `"ArrowUp"`
- `"Backspace"`

### Scrolling Actions

#### scrollDown
Scroll down the page.

```json
{
  "action": "scrollDown",
  "top": 1000,
  "left": 0
}
```

**Parameters:**
- `top` (number): Vertical scroll distance
- `left` (number): Horizontal scroll distance

#### scrollToElement
Scroll to a specific element.

```json
{
  "action": "scrollToElement",
  "selector": {
    "type": "css",
    "value": "#target-section"
  }
}
```

### Visibility Actions

#### hideElement
Hide an element (useful for removing popups or overlays).

```json
{
  "action": "hideElement",
  "selector": {
    "type": "css",
    "value": ".popup-overlay"
  }
}
```

### Wait Actions

#### wait
Wait for a specified amount of time.

```json
{
  "action": "wait",
  "delay": 3000
}
```

**Parameters:**
- `delay` (number): Wait time in milliseconds

#### waitForSelector
Wait for an element to appear.

```json
{
  "action": "waitForSelector",
  "selector": {
    "type": "css",
    "value": ".dynamic-content",
    "state": "visible"
  },
  "timeout": 15
}
```

#### waitForNavigation
Wait for page navigation to complete.

```json
{
  "action": "waitForNavigation",
  "waitUntil": "networkidle0",
  "timeout": 30
}
```

### Advanced Actions

#### executeJavaScript
Execute custom JavaScript code.

```json
{
  "action": "executeJavaScript",
  "source": "document.querySelector('.cookie-banner').style.display = 'none';"
}
```

#### executeBrowserScript
Execute JavaScript in the browser context with return value.

```json
{
  "action": "executeBrowserScript",
  "source": "return document.title;"
}
```

#### setLocation
Set geolocation coordinates.

```json
{
  "action": "setLocation",
  "latitude": 40.7128,
  "longitude": -74.0060
}
```

## Selector Types

### CSS Selectors
Most common selector type using CSS syntax.

```json
{
  "type": "css",
  "value": ".class-name",
  "state": "visible"
}
```

### XPath Selectors
Use XPath expressions for more complex element selection.

```json
{
  "type": "xpath",
  "value": "//button[contains(text(), 'Load More')]",
  "state": "attached"
}
```

**Selector States:**
- `"visible"`: Element is visible on the page
- `"hidden"`: Element exists but is hidden
- `"attached"`: Element is attached to the DOM

## Error Handling

Control how errors are handled during instruction execution:

```json
{
  "action": "clickElement",
  "selector": {
    "type": "css",
    "value": ".optional-button"
  },
  "onError": "continue"
}
```

**Error Handling Options:**
- `"continue"`: Continue execution if this action fails
- `"return"`: Stop execution and return current page state

## Real-World Examples

### E-commerce Product Scraping

Scrape product details from a page that requires clicking "Show More" to reveal full description:

```json
{
  "url": "https://shop.example.com/product/123",
  "renderJs": true,
  "javascriptInstruction": [
    {
      "action": "clickElement",
      "selector": {
        "type": "css",
        "value": ".show-more-description"
      },
      "onError": "continue"
    },
    {
      "action": "wait",
      "delay": 2000
    },
    {
      "action": "clickElement",
      "selector": {
        "type": "css",
        "value": ".show-all-reviews"
      },
      "onError": "continue"
    }
  ]
}
```

### Form Submission and Result Scraping

Fill out a search form and scrape the results:

```json
{
  "url": "https://example.com/search",
  "renderJs": true,
  "javascriptInstruction": [
    {
      "action": "typeText",
      "selector": {
        "type": "css",
        "value": "#search-input"
      },
      "text": "web scraping"
    },
    {
      "action": "selectOption",
      "selector": {
        "type": "css",
        "value": "#category-select"
      },
      "text": "Technology"
    },
    {
      "action": "clickElement",
      "selector": {
        "type": "css",
        "value": "#search-button"
      }
    },
    {
      "action": "waitForSelector",
      "selector": {
        "type": "css",
        "value": ".search-results",
        "state": "visible"
      },
      "timeout": 10
    }
  ]
}
```

### Infinite Scroll Content Loading

Load all content from an infinite scroll page:

```json
{
  "url": "https://example.com/feed",
  "renderJs": true,
  "javascriptInstruction": [
    {
      "action": "executeJavaScript",
      "source": "window.loadedItems = document.querySelectorAll('.item').length;"
    },
    {
      "action": "scrollDown",
      "top": 3000
    },
    {
      "action": "wait",
      "delay": 3000
    },
    {
      "action": "scrollDown",
      "top": 3000
    },
    {
      "action": "wait",
      "delay": 3000
    },
    {
      "action": "scrollDown",
      "top": 3000
    },
    {
      "action": "waitForSelector",
      "selector": {
        "type": "css",
        "value": ".end-of-content"
      },
      "timeout": 5,
      "onError": "continue"
    }
  ]
}
```

### Login and Authenticated Content

Scrape content that requires login:

```json
{
  "url": "https://example.com/login",
  "renderJs": true,
  "javascriptInstruction": [
    {
      "action": "typeText",
      "selector": {
        "type": "css",
        "value": "#username"
      },
      "text": "your-username"
    },
    {
      "action": "typeText",
      "selector": {
        "type": "css",
        "value": "#password"
      },
      "text": "your-password"
    },
    {
      "action": "clickElement",
      "selector": {
        "type": "css",
        "value": "#login-button"
      }
    },
    {
      "action": "waitForNavigation",
      "waitUntil": "networkidle0",
      "timeout": 10
    },
    {
      "action": "navigateToUrl",
      "url": "https://example.com/protected-content"
    }
  ]
}
```

### Handling Cookie Banners and Popups

Remove common obstructions before scraping:

```json
{
  "url": "https://example.com",
  "renderJs": true,
  "javascriptInstruction": [
    {
      "action": "wait",
      "delay": 2000
    },
    {
      "action": "clickElement",
      "selector": {
        "type": "css",
        "value": ".cookie-accept-button"
      },
      "onError": "continue"
    },
    {
      "action": "clickElement",
      "selector": {
        "type": "css",
        "value": ".popup-close"
      },
      "onError": "continue"
    },
    {
      "action": "hideElement",
      "selector": {
        "type": "css",
        "value": ".newsletter-overlay"
      },
      "onError": "continue"
    }
  ]
}
```

## Best Practices

### 1. Use Appropriate Timeouts
Set reasonable timeout values for actions that might take time:

```json
{
  "action": "waitForSelector",
  "selector": {
    "type": "css",
    "value": ".slow-loading-content"
  },
  "timeout": 15
}
```

### 2. Handle Errors Gracefully
Use `onError: "continue"` for optional actions:

```json
{
  "action": "clickElement",
  "selector": {
    "type": "css",
    "value": ".optional-popup-close"
  },
  "onError": "continue"
}
```

### 3. Add Strategic Waits
Allow time for dynamic content to load:

```json
{
  "action": "clickElement",
  "selector": {
    "type": "css",
    "value": ".load-more"
  }
},
{
  "action": "wait",
  "delay": 3000
}
```

### 4. Use Specific Selectors
Prefer specific CSS selectors over generic ones:

```json
// ✅ Good
{
  "type": "css",
  "value": "#main-content .product-title"
}

// ❌ Avoid
{
  "type": "css",
  "value": "div"
}
```

### 5. Minimize JavaScript Execution
Keep custom JavaScript simple and focused:

```json
{
  "action": "executeJavaScript",
  "source": "document.querySelector('.overlay').remove();"
}
```

## Troubleshooting

### Common Issues

1. **Element Not Found**: Ensure selectors are correct and elements exist
2. **Timing Issues**: Add appropriate waits after actions
3. **Dynamic Content**: Use `waitForSelector` for dynamically loaded elements
4. **JavaScript Errors**: Test custom JavaScript in browser console first

### Debugging Tips

1. Start with simple actions and build complexity gradually
2. Use `wait` actions to observe page state changes
3. Test selectors in browser developer tools
4. Use `onError: "continue"` during development to avoid stopping execution

---

**Next**: Continue exploring our documentation to learn more about advanced scraping techniques and data extraction methods. 
