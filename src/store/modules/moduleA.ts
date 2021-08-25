import { defineStore } from 'pinia'
import { store } from '../index'

interface BaseState {
  count: number
}

export const useBaseStore = defineStore({
  id: 'base',
  state: (): BaseState => ({
    count: 1
  }),
  getters: {
    doubleCount() {
      return this.count * 2
    }
  }
})

// Need to be used outside the setup
export function useBaseStoreWidthOut() {
  return useBaseStore(store);
}