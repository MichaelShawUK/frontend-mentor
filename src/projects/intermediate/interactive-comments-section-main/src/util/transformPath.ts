const absolutePathPrefix =
  "src/projects/intermediate/interactive-comments-section-main/src";

export default function transformPath(relativePath: string) {
  return relativePath.replace(".", absolutePathPrefix);
}

export function revertPath(absolutePath: string) {
  return absolutePath.replace(absolutePathPrefix, ".");
}
