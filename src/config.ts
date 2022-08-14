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
  info: {
    createDate: "",
    updateDate: "",
    contentVersion: "0.2.0",
    editorVersion: "0.1.0",
  },
} as Partial<KatrinaFAQ>;
