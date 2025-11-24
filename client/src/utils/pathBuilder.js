function pathBuilder(pathVariable, path) {
  let fullPath = path;
  for (const [key, value] of Object.entries(pathVariable)) {
    fullPath = fullPath.replace(`:${key}`, value);
  }
  return fullPath;
}

export default pathBuilder;
