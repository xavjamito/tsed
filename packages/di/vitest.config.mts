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
          statements: 98.91,
          branches: 97.04,
          functions: 97.15,
          lines: 98.91
        }
      }
    }
  }
);