import { FC, useState } from "react";
import { Button, Collapse, Form } from "@douyinfe/semi-ui";
import { ArrayField, FormState } from "@douyinfe/semi-ui/lib/es/form";
import { KatrinaInputTabsField } from "../../components/KatrinaInputTabs";
import { KatrinaItemInputPanelField } from "../../components/KatrinaItemInputPanel";
import { KatrinaLocaleTabs } from "../../components/KatrinaLocaleTabs";
import { KatrinaFAQ } from "../../types";
import styles from "./styles.module.scss";

export interface EditorProps {
  initValue: Partial<KatrinaFAQ>;
  onChange: () => unknown;
  onSubmit: (newValue: Partial<KatrinaFAQ>) => unknown;
}
export const Editor: FC<EditorProps> = ({ initValue, onChange, onSubmit }) => {
  const [activeLocale, setActiveLocale] = useState<string>();
  const [activeGroup, setActiveGroup] = useState(0);

  return (
    <main>
      <Form
        className={styles.form}
        initValues={initValue}
        onValueChange={onChange}
        onSubmit={onSubmit}
      >
        {({ values }: FormState<KatrinaFAQ>) => (
          <>
            <KatrinaLocaleTabs
              list={values?.config.locales ?? []}
              className={styles.tabs}
              active={activeLocale}
              onActive={setActiveLocale}
            />
            {values?.config.locales.map((locale, localeIndex) => (
              <div
                key={localeIndex}
                className={styles.aside}
                style={{
                  display: locale !== activeLocale ? "none" : "block",
                }}
              >
                <KatrinaInputTabsField
                  field={`contents.${locale}`}
                  active={activeGroup}
                  onActive={setActiveGroup}
                  noLabel
                />
              </div>
            ))}
            {values?.config.locales.map((locale, localeIndex) =>
              values.contents[locale].map((_group, groupIndex) => (
                <div
                  key={`${localeIndex}-${groupIndex}`}
                  className={styles.contents}
                  style={{
                    display:
                      locale === activeLocale && groupIndex === activeGroup
                        ? "block"
                        : "none",
                  }}
                >
                  <ArrayField field={`contents.${locale}[${groupIndex}].subs`}>
                    {({ addWithInitValue, arrayFields }) => (
                      <>
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
                        <Button onClick={() => addWithInitValue({})}>
                          ADD
                        </Button>
                      </>
                    )}
                  </ArrayField>
                </div>
              ))
            )}
          </>
        )}
      </Form>
    </main>
  );
};
