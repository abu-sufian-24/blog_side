function GetImages(url) {
  return new URL(url, import.meta.url).href;
}
export { GetImages };
