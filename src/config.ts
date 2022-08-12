import { KatrinaFAQ } from "./types";

export const initValue = {
  contents: {
    "zh-CN": [
      {
        id: "zh-test",
        tags: ["😄"],
        subs: [{ contents: "test" }],
      },
      {
        id: "zh-test",
        subs: [{ contents: "test" }],
      },
    ],
    "en-US": [],
  },
  config: {
    locales: ["zh-CN", "en-US"],
  },
} as Partial<KatrinaFAQ>;
