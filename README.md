# Copy with File Name

**Copy with File Name** is a powerful and customizable VS Code extension that enhances the default copy behavior. When you copy selected code, it prepends or appends a comment showing the file name (or full path), making your shared snippets more informative.

---

## Features

- Prepend or append file name (or full path) to copied text
- Automatically detects and uses correct comment syntax based on file type
- Optional custom comment prefix/suffix
- Configurable output format:
  - Use full path or file name only
  - Add blank line after header
  - Place header before or after selected code
- Override comment styles for specific languages

---

## Usage

1. Select any portion of code in the editor
2. Run the command:
   - Via Command Palette: `Copy with File Name`
   - Or use the shortcut: `Ctrl+Shift+C` (customizable)

The selected code will be copied to your clipboard with the file name as a comment.

---

## Example Output

**Python**

```python
# File: my_script.py

print("Hello, world!")
```

**HTML**

```html
<!-- File: index.html -->
<div>Hello</div>
```

**C++**

```cpp
// File: main.cpp

int main() {
    return 0;
}
```

---

## Extension Settings

You can configure this extension in your `settings.json`:

```jsonc
{
  "copyWithFilename.includeFileName": true,
  "copyWithFilename.useFullPath": false,
  "copyWithFilename.commentPrefix": "",
  "copyWithFilename.commentSuffix": "",
  "copyWithFilename.emptyLineAfterHeader": true,
  "copyWithFilename.placeHeaderBelow": false,
  "copyWithFilename.languageOverrides": {
    "python": {
      "prefix": "#",
      "suffix": ""
    },
    "html": {
      "prefix": "<!--",
      "suffix": " -->"
    }
  }
}
```

### Setting Descriptions

| Setting                | Description                                               |
| ---------------------- | --------------------------------------------------------- |
| `includeFileName`      | Enable or disable the filename in the copied text         |
| `useFullPath`          | Show full file path instead of just the file name         |
| `commentPrefix`        | Manually set comment prefix (overrides auto-detection)    |
| `commentSuffix`        | Manually set comment suffix                               |
| `emptyLineAfterHeader` | Adds a blank line between the file name and selected code |
| `placeHeaderBelow`     | Places file name comment _after_ the selected code        |
| `languageOverrides`    | Override comment style for specific languages             |

---

## Keybinding

Default keybinding: `Ctrl+Shift+C`

To change it:

1. Go to `Preferences` → `Keyboard Shortcuts`
2. Search for `Copy with File Name`
3. Edit the keybinding as needed

---

## Installation

1. Open **Extensions** (`Ctrl+Shift+X`)
2. Search for **Copy with File Name**
3. Click **Install**
4. (Optional) Customize settings in `settings.json`

---

## Contributing

Want to improve the extension? Pull requests are welcome!
You can also [open an issue](https://github.com/your-username/copy-with-filename/issues) for suggestions or bug reports.

---

## License

MIT

```

---

Let me know if you'd like the GitHub repo structure, logo/icon ideas, or a VS Code Marketplace description too.
```
