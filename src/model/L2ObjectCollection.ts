import L2Object from "./L2Object";

export default class L2ObjectCollection<T extends L2Object> extends Set<T> {
  public containsObjectId(objId: number): boolean {
    for (let item of this) {
      if (item.getObjectId() === objId) {
        return true;
      }
    }
    return false;
  }

  public containsId(id: number): boolean {
    for (let item of this) {
      if (item.getId() === id) {
        return true;
      }
    }
    return false;
  }

  public containsName(name: string): boolean {
    for (let item of this) {
      if (item.getName() === name) {
        return true;
      }
    }
    return false;
  }

  public getEntryByObjectId(objId: number): T | undefined {
    for (let item of this) {
      if (item.getObjectId() === objId) {
        return item;
      }
    }
  }

  public getEntryById(id: number): T | undefined {
    for (let item of this) {
      if (item.getId() === id) {
        return item;
      }
    }
  }

  public getEntryByName(name: string): T | undefined {
    for (let item of this) {
      if (item.getName() === name) {
        return item;
      }
    }
  }

  public removeById(id: number): void {
    for (let item of this) {
      if (item.getId() === id) {
        this.delete(item);
      }
    }
  }

  public removeByObjectId(objId: number): void {
    for (let item of this) {
      if (item.getObjectId() === objId) {
        this.delete(item);
      }
    }
  }
}
