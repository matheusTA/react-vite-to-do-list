const LocalStorage = {
  setIntem: <T>(key: string, value: T) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getItem: <T>(key: string) => {
    const item = localStorage.getItem(key);

    if (item) {
      return JSON.parse(item) as T;
    }

    return null;
  },
};

export default LocalStorage;
