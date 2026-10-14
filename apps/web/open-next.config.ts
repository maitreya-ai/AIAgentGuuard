import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

/**
 * Pages are prerendered at build time and none revalidates, so they are
 * served straight from Workers static assets: no R2 bucket, KV namespace or
 * queue. Switch to the R2 incremental cache when a page starts using ISR:
 * https://opennext.js.org/cloudflare/caching
 */
export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
});
