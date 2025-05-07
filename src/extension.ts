import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    "copyWithFilename.copy",
    async () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        vscode.window.showErrorMessage("No active editor");
        return;
      }

      const config = vscode.workspace.getConfiguration("copyWithFilename");

      const includeFileName = config.get<boolean>("includeFileName", true);
      const useFullPath = config.get<boolean>("useFullPath", false);
      const customPrefix = config.get<string>("commentPrefix", "");
      const customSuffix = config.get<string>("commentSuffix", "");
      const emptyLineAfter = config.get<boolean>("emptyLineAfterHeader", false);
      const placeHeaderBelow = config.get<boolean>("placeHeaderBelow", false);
      const languageOverrides = config.get<any>("languageOverrides", {});

      const selection = editor.selection;
      const selectedText = editor.document.getText(selection);
      const filePath = editor.document.fileName;
      const fileName = filePath.split(/[\\/]/).pop();
      const languageId = editor.document.languageId;

      const headerLabel = useFullPath ? filePath : fileName;

      let prefix = "";
      let suffix = "";

      if (languageOverrides[languageId]) {
        prefix = languageOverrides[languageId].prefix || "";
        suffix = languageOverrides[languageId].suffix || "";
      } else {
        prefix = customPrefix || getDefaultPrefix(languageId);
        suffix = customSuffix || getDefaultSuffix(languageId);
      }

      let header = `${prefix} File: ${headerLabel}${suffix}`;
      if (emptyLineAfter) header += `\n`;

      const finalText = includeFileName
        ? placeHeaderBelow
          ? `${selectedText}\n${header}`
          : `${header}\n${selectedText}`
        : selectedText;

      await vscode.env.clipboard.writeText(finalText);
      vscode.window.setStatusBarMessage("Copied with custom options", 2000);
    }
  );

  context.subscriptions.push(disposable);
}

function getDefaultPrefix(lang: string): string {
  const map: { [key: string]: string } = {
    javascript: "//",
    typescript: "//",
    python: "#",
    ruby: "#",
    c: "//",
    cpp: "//",
    java: "//",
    csharp: "//",
    go: "//",
    php: "//",
    swift: "//",
    rust: "//",
    shellscript: "#",
    bash: "#",
    yaml: "#",
    json: "//",
    html: "<!--",
    xml: "<!--",
    css: "/*",
    scss: "/*",
    markdown: "<!--",
    plaintext: "//",
  };
  return map[lang] || "//";
}

function getDefaultSuffix(lang: string): string {
  const multiline = ["html", "xml", "markdown", "css", "scss"];
  return multiline.includes(lang) ? " -->" : "";
}

export function deactivate() {}
