import { useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Editor } from "./page/Editor";
import { KatrinaFAQ } from "./types";
import { initValue } from "./config";

function App() {
  const [faq, setFAQ] = useState<Partial<KatrinaFAQ>>(initValue);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  return (
    <>
      <Header />
      <Editor
        initValue={faq}
        onSubmit={setFAQ}
        onChange={() => setHasUnsavedChanges(true)}
      />
      <Footer
        hasUnsavedChanges={hasUnsavedChanges}
        baseContentsVersion={faq?.info?.editorVersion}
        currentEditorVersion={faq?.info?.contentVersion}
      />
    </>
  );
}

export default App;
