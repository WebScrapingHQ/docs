---
title: Authentication
description: Learn how to authenticate with the WebscrapingHQ API using API keys
sidebar_position: 1
---

# Authentication

WebscrapingHQ API uses API key authentication to secure access to our scraping services. This guide covers everything you need to know about obtaining, using, and managing your API keys.

## Getting Your API Key

### 1. Sign Up for an Account

First, create your account at [WebscrapingHQ Dashboard](https://app.webscrapinghq.com/login):

1. Visit the login/signup page
2. Enter your email and password
3. Verify your email address
4. Complete your profile setup

### 2. Generate an API Key

Once logged in to your dashboard:

1. Navigate to **API Keys** section
2. Click **"Create New API Key"**
3. Provide a descriptive name for your key
4. Set appropriate permissions and rate limits
5. Click **"Generate Key"**

:::warning Keep Your API Key Secure
Your API key provides access to your account and usage credits. Never share it publicly or commit it to version control systems.
:::

## Using Your API Key

### HTTP Header Authentication

Include your API key in the `X-API-KEY` header with every request:

```bash
curl -X POST https://app.webscrapinghq.com/api/v1/scrape \
  -H "X-API-KEY: your-api-key-here" \
  -H "Content-Type: application/json" \
  -d '{"url": "https://example.com"}'
```

### Code Examples

Here are examples of how to authenticate in different programming languages:

#### Python

```python
import requests

headers = {
    'X-API-KEY': 'your-api-key-here',
    'Content-Type': 'application/json'
}

response = requests.post(
    'https://app.webscrapinghq.com/api/v1/scrape',
    headers=headers,
    json={'url': 'https://example.com'}
)
```

#### JavaScript/Node.js

```javascript
const response = await fetch("https://app.webscrapinghq.com/api/v1/scrape", {
  method: "POST",
  headers: {
    "X-API-KEY": "your-api-key-here",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    url: "https://example.com",
  }),
});
```

#### PHP

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, 'https://app.webscrapinghq.com/api/v1/scrape');
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'X-API-KEY: your-api-key-here',
    'Content-Type: application/json'
]);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode([
    'url' => 'https://example.com'
]));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
curl_close($ch);
?>
```

#### Go

```go
package main

import (
    "bytes"
    "encoding/json"
    "net/http"
)

func main() {
    payload := map[string]string{
        "url": "https://example.com",
    }

    jsonPayload, _ := json.Marshal(payload)

    req, _ := http.NewRequest("POST",
        "https://app.webscrapinghq.com/api/v1/scrape",
        bytes.NewBuffer(jsonPayload))

    req.Header.Set("X-API-KEY", "your-api-key-here")
    req.Header.Set("Content-Type", "application/json")

    client := &http.Client{}
    resp, err := client.Do(req)
    // Handle response...
}
```

## API Key Management

### Best Practices

1. **Use Environment Variables**
   Store your API key in environment variables, not in your code:

   ```bash
   export WEBSCRAPINGHQ_API_KEY="your-api-key-here"
   ```

   ```python
   import os
   api_key = os.environ.get('WEBSCRAPINGHQ_API_KEY')
   ```

2. **Rotate Keys Regularly**
   Generate new API keys periodically and deactivate old ones.

3. **Use Different Keys for Different Environments**
   Separate API keys for development, staging, and production.

4. **Monitor Usage**
   Regularly check your API key usage in the dashboard.

### Key Permissions

Coming Soon.

### Managing Multiple Keys

You can create multiple API keys for different purposes:

- **Production Key**: For live applications
- **Development Key**: For testing and development
- **CI/CD Key**: For automated testing pipelines
- **Partner Key**: For third-party integrations

## Testing Your Authentication

### Quick Test

Verify your API key is working with a simple test request:

```bash
curl -X POST https://app.webscrapinghq.com/api/v1/scrape \
  -H "X-API-KEY: your-api-key-here" \
  -H "Content-Type: application/json" \
  -d '{"url": "https://httpbin.org/get"}' \
  | jq '.creditsLeft'
```

A successful response will include your remaining credits.

### Authentication Errors

Common authentication error responses:

#### 401 Unauthorized

```json
{
  "error": "Invalid API key",
  "code": "INVALID_API_KEY"
}
```

#### 429 Too Many Requests

```json
{
  "error": "Rate limit exceeded",
  "code": "RATE_LIMIT_EXCEEDED",
  "retry_after": 60
}
```

#### 403 Forbidden

```json
{
  "error": "API key lacks required permissions",
  "code": "INSUFFICIENT_PERMISSIONS"
}
```

## Security Considerations

### API Key Storage

- **✅ Do**: Store in environment variables or secure key management services
- **✅ Do**: Use different keys for different environments
- **✅ Do**: Rotate keys regularly
- **❌ Don't**: Hard-code keys in your application
- **❌ Don't**: Share keys in public repositories
- **❌ Don't**: Send keys in URL parameters

### Network Security

- Always use HTTPS when making API requests
- Consider IP whitelisting for production applications
- Monitor for unusual usage patterns

### Incident Response

If you suspect your API key has been compromised:

1. Immediately revoke the compromised key in your dashboard
2. Generate a new API key
3. Update your applications with the new key
4. Review recent usage logs for unauthorized activity
5. Contact support if needed

## Getting Help

If you're having trouble with authentication:

- Contact support through the dashboard
- Review our documentation for additional guidance

---

Next: Learn how to make your first API request in our [Quick Start Guide](/quick-start).
