import IStorageService from './storage-service.interface'

export class LocalStorageService<T> implements IStorageService<T> {
  private storeKey: string

  constructor(storeKey: string) {
    this.storeKey = storeKey
  }

  public setItem = (key: string, data?: T) => {
    if (data && localStorage) localStorage.setItem(`${this.storeKey}/${key}`, JSON.stringify(data))
  }

  public getItem = (key: string): T | undefined => {
    if (typeof window !== 'undefined') {
      const item = localStorage.getItem(`${this.storeKey}/${key}`)
      return item ? JSON.parse(item) : undefined
    }
    return undefined
  }
}
