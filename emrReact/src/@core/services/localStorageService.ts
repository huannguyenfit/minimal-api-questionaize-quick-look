class LocalStorageService {
  get(key) {
    const value = localStorage.getItem(key);
    if (value) {
      try {
        return JSON.parse(value);
      } catch (e) {
        return value;
      }
    }
    return undefined;
  }
  set(key, value) {
    localStorage.setItem(key, value);
  }
  remove(key) {
    localStorage.removeItem(key);
  }
}

export default new LocalStorageService();
