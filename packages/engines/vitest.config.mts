// @ts-ignore
import {presets} from "@tsed/vitest/presets";
import {defineConfig} from "vitest/config";

export default defineConfig(
  {
    ...presets,
    test: {
      ...presets.test,
      coverage: {
        ...presets.test.coverage,
        thresholds: {
          statements: 80.69,
          branches: 85.79,
          functions: 78.4,
          lines: 80.69
        }
      }
    }
  }
);