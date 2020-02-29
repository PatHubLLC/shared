import { ITodo } from '../../interface/todo';

export function ExtractApplId(todo: ITodo): string {
  if (todo.Transaction && todo.Transaction.Application) {
    return todo.Transaction.Application.applId;
  }

  return '';
}
