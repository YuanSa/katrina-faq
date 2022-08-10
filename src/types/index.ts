import { KatrinaConfig } from "./Config";
import { KatrinaContents } from "./Contents";
import { KatrinaCustomConfig } from "./CustomConfig";
import { KatrinaEditorConfig } from "./EditorConfig";
import { KatrinaInfo } from "./Info";

export type KatrinaFAQ = {
  contents: KatrinaContents;
  info: KatrinaInfo;
  config: KatrinaConfig;
  editorConfig: KatrinaEditorConfig;
  customConfig: KatrinaCustomConfig;
};
