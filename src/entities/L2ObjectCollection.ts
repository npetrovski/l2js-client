import L2Object from "./L2Object";

export default class L2ObjectCollection<T extends L2Object> extends Set<T> {
  public closest(): T {
    const mobs = Array.from(this);
    return mobs.reduce((m: T, p: T) => (p.Distance < m.Distance ? p : m), mobs[0]);
  }

  public containsObjectId(objId: number): boolean {
    for (const item of this) {
      if (item.ObjectId === objId) {
        return true;
      }
    }
    return false;
  }

  public containsId(id: number): boolean {
    for (const item of this) {
      if (item.Id === id) {
        return true;
      }
    }
    return false;
  }

  public containsName(name: string): boolean {
    for (const item of this) {
      if (item.Name === name) {
        return true;
      }
    }
    return false;
  }

  public getEntryByObjectId(objId: number): T | undefined {
    for (const item of this) {
      if (item.ObjectId === objId) {
        return item;
      }
    }
  }

  public getEntryById(id: number): T | undefined {
    for (const item of this) {
      if (item.Id === id) {
        return item;
      }
    }
  }

  public getEntryByName(name: string): T | undefined {
    for (const item of this) {
      if (item.Name === name) {
        return item;
      }
    }
  }

  public removeById(id: number): void {
    for (const item of this) {
      if (item.Id === id) {
        this.delete(item);
      }
    }
  }

  public removeByObjectId(objId: number): void {
    for (const item of this) {
      if (item.ObjectId === objId) {
        this.delete(item);
      }
    }
  }
}
