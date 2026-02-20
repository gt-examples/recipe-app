import { withGTConfig } from "gt-next/config";

const nextConfig = withGTConfig({
  loadTranslationsPath: "./src/loadTranslations.ts",
});

export default nextConfig;
