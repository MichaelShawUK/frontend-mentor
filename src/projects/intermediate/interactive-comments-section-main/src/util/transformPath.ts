export default function transformPath(relative: string) {
  const absolutePathPrefix =
    "src/projects/intermediate/interactive-comments-section-main/src";

  return relative.replace(".", absolutePathPrefix);
}
