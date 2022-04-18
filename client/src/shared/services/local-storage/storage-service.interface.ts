export default interface IStorageService<T> {
  setItem: (key: string, data: T) => void;
  getItem: (key: string) => T | undefined;
}
