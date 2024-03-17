import { Action } from "./action"

export function addItem(data: any) {
  return {
    type: Action.ADD,
    data: data,
  }
}

export function deleteItem(id: any) {
  return {
    type: Action.DELETE,
    id: id,
  }
}

export function completeItem(id: any) {
  return {
    type: Action.COMPLETE,
    id: id,
  }
}
