#!/usr/bin/env node
/**
 * Post-process TypeDoc markdown files and wrap every `Example` section
 * inside a toggleable spoiler (<details>/<summary>) element.
 */
const fs = require('fs');
const path = require('path');

const SUMMARY_TEXT = process.env.TEXTMODE_EXAMPLE_SUMMARY || 'Show example';
const customDirArg = process.argv[2];
const CONTAINER_NAME = 'example-spoiler';
const CONTAINER_MARKER = `::: ${CONTAINER_NAME}`;

const scriptDir = __dirname;
const defaultMarkdownRoot = path.resolve(scriptDir, '../api');
const markdownRoot = customDirArg
  ? path.resolve(process.cwd(), customDirArg)
  : defaultMarkdownRoot;

if (!fs.existsSync(markdownRoot)) {
  console.error(`\n[wrapExamples] Target directory does not exist: ${markdownRoot}\n`);
  process.exit(1);
}

let filesTouched = 0;
let totalSectionsWrapped = 0;

function walkDirectory(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  entries.forEach((entry) => {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      walkDirectory(fullPath);
      return;
    }

    if (entry.isFile() && entry.name.toLowerCase().endsWith('.md')) {
      wrapExamples(fullPath);
    }
  });
}

function wrapExamples(filePath) {
  const original = fs.readFileSync(filePath, 'utf8');
  const lines = original.split('\n');
  let sectionsInFile = 0;
  const result = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const exampleMatch = line.match(/^(#{3,6})\s+Example\s*$/);

    if (exampleMatch) {
      const headingLine = line;
      if (isAlreadyWrapped(lines, i)) {
        result.push(line);
        i++;
        continue;
      }

      i++;

      while (i < lines.length && lines[i].trim() === '') {
        i++;
      }

      const exampleBody = [];
      let foundContent = false;

      while (i < lines.length) {
        const currentLine = lines[i];
        if (isSectionBoundary(currentLine)) {
          break;
        }
        exampleBody.push(currentLine);
        if (currentLine.trim()) {
          foundContent = true;
        }
        i++;
      }

      const trimmedBody = trimEmptyEdges(exampleBody);

      if (foundContent && trimmedBody.length) {
        sectionsInFile++;
        if (result.length && result[result.length - 1]?.trim() !== '') {
          result.push('');
        }
        result.push(`${CONTAINER_MARKER} ${SUMMARY_TEXT}`.trim());
        result.push('');
        result.push(...trimmedBody);
        result.push('');
        result.push(':::');
        result.push('');
      } else {
        result.push(headingLine);
        if (exampleBody.length) {
          result.push(...exampleBody);
        }
      }
    } else {
      result.push(line);
      i++;
    }
  }

  if (sectionsInFile > 0) {
    fs.writeFileSync(filePath, result.join('\n'), 'utf8');
    filesTouched += 1;
    totalSectionsWrapped += sectionsInFile;

    const relativePath = path.relative(path.resolve(scriptDir, '..'), filePath);
    console.log(`Wrapped ${sectionsInFile} example${sectionsInFile === 1 ? '' : 's'} in ${relativePath}`);
  }
}

walkDirectory(markdownRoot);

if (filesTouched === 0) {
  console.log('[wrapExamples] No example sections required wrapping.');
} else {
  console.log(
    `[wrapExamples] Wrapped ${totalSectionsWrapped} example section${totalSectionsWrapped === 1 ? '' : 's'} across ${filesTouched} file${filesTouched === 1 ? '' : 's'}.`
  );
}

function isSectionBoundary(line) {
  return line.match(/^#{1,6}\s/) || line.match(/^[-*_]{3,}\s*$/);
}

function trimEmptyEdges(lines) {
  let start = 0;
  let end = lines.length - 1;

  while (start <= end && !lines[start].trim()) start++;
  while (end >= start && !lines[end].trim()) end--;

  return lines.slice(start, end + 1);
}

function isAlreadyWrapped(lines, headingIndex) {
  let cursor = headingIndex + 1;
  while (cursor < lines.length && lines[cursor].trim() === '') {
    cursor++;
  }
  return cursor < lines.length && lines[cursor].startsWith(CONTAINER_MARKER);
}
