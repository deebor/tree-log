import * as vscode from 'vscode'
import { getRandomEmoji } from './util'

const editor = vscode.window.activeTextEditor

export function addLog() {
  if (!editor)
    return

  const textArray: string[] = []
  const selectRanges = editor.selections
  selectRanges.forEach((range) => {
    let text = editor.document.getText(range)
    let insertText = 'console.log('
    if (text) {
      text = text.replace(/'/g, '"')
      const suffix = vscode.workspace.getConfiguration().get('tree-log.suffix')
      const emoji = getRandomEmoji()
      insertText = `console.log(' ${suffix || emoji}', '\\n', '├──', '${text}', '\\n', '└──', ${text}, '\\n')`
    }
    textArray.push(insertText)
  })

  vscode.commands.executeCommand('editor.action.insertLineAfter')
    .then(() => {
      const ranges = editor.selections
      const positionList: vscode.Position[] = []
      ranges.forEach((range) => {
        const position = new vscode.Position(range.start.line, range.start.character)
        positionList.push(position)
      })
      editor.edit((editBuilder) => {
        positionList.forEach((position, index) => {
          editBuilder.insert(position, textArray[index])
        })
      })
    })
}

export function deleteLog() {
  const logRegex = /(console.(log|debug|info|warn|error|assert|dir|dirxml|trace|group|groupEnd|time|timeEnd|profile|profileEnd|count)\((.*)\)| log\((.*)\));?/g
  if (!editor)
    return

  const document = editor.document
  const documentText = document.getText()
  const Ranges: vscode.Range[] = []

  let match
  while (match = logRegex.exec(documentText)) {
    const matchRange = new vscode.Range(document.positionAt(match.index), document.positionAt(match.index + match[0].length))
    if (!matchRange.isEmpty)
      Ranges.push(matchRange)
  }
  editor.edit((editBuilder) => {
    Ranges.forEach((range, index) => {
      editBuilder.delete(Ranges[index])
    })
  })
}
