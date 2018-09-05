class UrlShortener {
  static generate () {
    const valid = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let url = '';
    for (let i = 0; i < 12; i++) {
      url += valid.charAt(Math.floor(Math.random()*valid.length));
    }
    return url;
  }

  static set (target, alias, password) {
    const item = {
      'target': target,
      'alias': alias || UrlShortener.generate(),
      'password': (password ? password === true : false)
    };
     UrlShortener.db.set(item.alias, item);
     return item;
  }

  static delete (alias) {
    return UrlShortener.db.delete(alias);
  }

  static get (alias) {
    return UrlShortener.db.get(alias);
  }
}

UrlShortener.db = new Map();

module.exports = UrlShortener;
