import { KatrinaTag } from "./Basic";

export type KatrinaOutputType = "json" | "yaml";

export type KatrinaPermissions = {
  editID: boolean;
  editTags: boolean;
  editConfig: boolean;
  editEditorConfig: boolean;
  editCustomConfig: boolean;
  addTags: boolean;
  manageStructure: boolean;
};

export type KatrinaEditorConfig = {
  fetchURL: string;
  submitURL: string;
  format: KatrinaOutputType;
  permissions: KatrinaPermissions;
  tagEnum: KatrinaTag[];
  clearUnusedLocale: boolean;
};
