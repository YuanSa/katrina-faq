import { FC, useState } from "react";
import { Button, Collapse, Form } from "@douyinfe/semi-ui";
import { ArrayField, FormState } from "@douyinfe/semi-ui/lib/es/form";
import { KatrinaGroupInputField } from "../../components/KatrinaGroupInput";
import { KatrinaItemInputPanelField } from "../../components/KatrinaItemInputPanel";
import { KatrinaLocaleTabs } from "../../components/KatrinaLocaleTabs";
import { KatrinaFAQ } from "../../types";
import styles from "./styles.module.scss";
import { Show } from "../../components/Show";
import { ContentsEditorValue } from "../../types/Editor";
import { KatrinaLocale, UUID } from "../../types/Basic";
import { v4 as uuidV4 } from "uuid";
import { FlexGap } from "../../components/FlexGap";

const buildInitValue = (
  rawInitValue: Partial<KatrinaFAQ>
): ContentsEditorValue =>
  (rawInitValue.config?.locales ?? []).reduce(
    (acc, locale) => {
      const locales = [...(acc.locales ?? []), locale];
      const { groups = {}, items = {} } =
        rawInitValue.contents?.[locale].reduce(
          (acc2, group) => {
            const groupUUID = uuidV4();
            acc2.groups = acc2.groups || {};
            acc2.groups[locale].push({ ...group, uuid: groupUUID });
            acc2.items = acc2.items || {};
            acc2.items[locale] = acc2.items[locale] || {};
            acc2.items[locale][groupUUID] = group.subs || [];
            return acc2;
          },
          {
            groups: { ...acc.groups, [locale]: [] },
            items: { ...acc.items },
          } as ContentsEditorValue
        ) || {};
      return {
        locales,
        groups,
        items,
      };
    },
    { locales: [], groups: {}, items: {} } as ContentsEditorValue
  );

export interface EditorProps {
  initValue: Partial<KatrinaFAQ>;
  onChange: () => unknown;
  onSubmit: (newValue: Partial<KatrinaFAQ>) => unknown;
}
export const Editor: FC<EditorProps> = ({ initValue, onChange, onSubmit }) => {
  const [activeLocale, setActiveLocale] = useState<KatrinaLocale>();
  const [activeGroup, setActiveGroup] = useState<UUID>();

  return (
    <main>
      <Form
        className={styles.form}
        initValues={buildInitValue(initValue)}
        onValueChange={onChange}
        onSubmit={onSubmit}
      >
        {({ values }: FormState<ContentsEditorValue>) => (
          <>
            <KatrinaLocaleTabs
              list={values?.locales ?? []}
              className={styles.tabs}
              active={activeLocale}
              onActive={setActiveLocale}
            />
            {values?.locales?.map((locale) => (
              <ArrayField key={locale} field={`groups.${locale}`}>
                {({ addWithInitValue, arrayFields }) => (
                  <Show
                    when={locale === activeLocale}
                    className={styles.aside}
                    key={locale}
                  >
                    {arrayFields.map(({ field, key, remove }) => (
                      <KatrinaGroupInputField
                        field={field}
                        onDelete={remove}
                        active={activeGroup}
                        onActive={setActiveGroup}
                        noLabel
                        key={key}
                      />
                    ))}
                    <FlexGap />
                    <Button
                      className={styles["add-group-button"]}
                      onClick={() => addWithInitValue({ uuid: uuidV4() })}
                    >
                      添加分组
                    </Button>
                  </Show>
                )}
              </ArrayField>
            ))}
            {values?.locales?.map((locale) =>
              values.groups?.[locale]?.map((group) => (
                <ArrayField
                  key={`items.${locale}.${group.uuid}`}
                  field={`items.${locale}.${group.uuid}`}
                >
                  {({ addWithInitValue, arrayFields }) => (
                    <Show
                      key={`${locale}-${group.uuid}`}
                      className={styles.contents}
                      when={
                        locale === activeLocale && group.uuid === activeGroup
                      }
                    >
                      <Collapse expandIconPosition="left">
                        {arrayFields.map(({ field, key, remove }) => (
                          <KatrinaItemInputPanelField
                            field={field}
                            key={key}
                            itemKey={key}
                            onDelete={remove}
                            noLabel
                          />
                        ))}
                      </Collapse>
                      <FlexGap />
                      <Button
                        className={styles["add-item-button"]}
                        onClick={() => addWithInitValue({})}
                      >
                        添加项目
                      </Button>
                    </Show>
                  )}
                </ArrayField>
              ))
            )}
          </>
        )}
      </Form>
    </main>
  );
};
