import type { ExtensionContext } from 'vscode'
import { commands } from 'vscode'
import { addLog, deleteLog } from './core'

export function activate(context: ExtensionContext) {
  const addlog = commands.registerCommand('tree-log.addLog', addLog)
  context.subscriptions.push(addlog)

  const deletelog = commands.registerCommand('tree-log.deleteLog', deleteLog)
  context.subscriptions.push(deletelog)
}

export function deactivate() {

}
