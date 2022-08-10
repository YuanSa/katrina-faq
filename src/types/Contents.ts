import { KatrinaLocale, KatrinaTag } from "./Basic";

export type KatrinaItem = {
  id?: string;
  tags?: KatrinaTag[];
  name?: string;
  contents?: string;
};

export type KatrinaGroup = {
  id?: string;
  tags?: KatrinaTag[];
  name?: string;
  subs?: KatrinaItem[];
};

export type KatrinaContents = Record<KatrinaLocale, KatrinaGroup[]>;
