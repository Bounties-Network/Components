export function shortenAddress(address) {
  return address.slice(0, 6) + '...' + address.slice(-4);
}

export function shortenUrl(url) {
  const shortUrl = url.replace(/(^\w+:|^)\/\//, '').replace(/^www./, '');

  if (shortUrl.length > 25) {
    return shortUrl.slice(0, 10) + '...' + url.slice(-6);
  }

  return shortUrl;
}

export function bytesToSize(bytes) {
  var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes == 0) return '0 Byte'; // eslint-disable-line eqeqeq
  var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
}