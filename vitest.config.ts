import { defineWorkersConfig } from '@cloudflare/vitest-pool-workers/config'

export default defineWorkersConfig({
  test: {
    globals: true,
    poolOptions: {
      workers: {
        miniflare: {
          compatibilityDate: '2024-06-01',
          compatibilityFlags: ['nodejs_compat']
        }
      }
    }
  }
})
