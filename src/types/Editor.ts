import { KatrinaLocale, UUID } from "./Basic";
import { KatrinaGroup, KatrinaItem } from "./Contents";

export type ContentsEditorValue = {
  locales?: KatrinaLocale[];
  groups?: Record<KatrinaLocale, (KatrinaGroup & { uuid: UUID })[]>;
  items?: Record<KatrinaLocale, Record<UUID, KatrinaItem[]>>;
};
