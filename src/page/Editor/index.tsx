import { Button, Collapse, Form } from "@douyinfe/semi-ui";
import { ArrayField, FormState } from "@douyinfe/semi-ui/lib/es/form";
import { FC, useState } from "react";
import { VscMenu } from "react-icons/vsc";
import { useSearchParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { KatrinaInputTabsField } from "../../components/KatrinaInputTabs";
import { KatrinaItemInputPanelField } from "../../components/KatrinaItemInputPanel";
import { TabsField } from "../../components/Tabs";
import { KatrinaFAQ } from "../../types";
import styles from "./styles.module.scss";

export const Editor: FC = () => {
  const [faq, setFAQ] = useState<KatrinaFAQ>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeLocale, setActiveLocale] = useState("zh-CN");
  const [activeGroup, setActiveGroup] = useState(0);

  return (
    <>
      <Header />
      <main>
        <Form
          className={styles.form}
          initValues={
            {
              contents: {
                "zh-CN": [
                  {
                    id: "zh-test",
                    tags: ["1", "😄"],
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
            } as Partial<KatrinaFAQ>
          }
        >
          {({ values }: FormState<KatrinaFAQ>) => (
            <>
              <TabsField
                fieldClassName={styles.tabs}
                field="config.locales"
                noLabel
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
                      color: "red",
                      display:
                        locale === activeLocale && groupIndex === activeGroup
                          ? "block"
                          : "none",
                    }}
                  >
                    <ArrayField
                      field={`contents.${locale}[${groupIndex}].subs`}
                    >
                      {({ addWithInitValue, arrayFields }) => (
                        <>
                          <Collapse expandIconPosition="left">
                            {arrayFields.map(({ field, key, remove }) => (
                              <KatrinaItemInputPanelField
                                field={field}
                                itemKey={key}
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
      <footer></footer>
    </>
  );
};
