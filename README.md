# url-shortener

This is a simple url shortener.

## How does it work?

```javascript
// Insert a new url. The command returns an object with the generated alias.
const res = shortener.set('http://example.com/');

// Insert a second url with an alias and password protection.
shortener.set('http://example.com/', 'alias', true);

// Get the url object if it exists. Returns undefined if it does not exist.
const res2 = shortener.get('alias');

// Delete an alias
shortener.delete('alias');
```

## Possible improvements

- [ ] Save urls in a database
- [ ] Add user authentication
- [ ] Add a working frontend
- [ ] List all aliases
