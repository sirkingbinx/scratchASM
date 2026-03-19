// analyzer/interfaces/AdvancedArray.ts -- AdvancedArray class
// (C) 2026 SirKingBinx

export class AdvancedArray<T> extends Array<T> {
    /** Returns true if the array contains any items. */
    public any(): boolean {
        return this.length > 0;
    }

    /** Returns true if the array contains no items. */
    public empty(): boolean {
        return this.length === 0;
    }

    /** Returns the first item that passes the validation check inside of condition(), or undefined if none. */
    public first(condition: (item: T) => boolean): T | undefined {
        for (let i = 0; i < this.length; i++) {
            let item = this[i];

            if (condition(item))
                return item;
        }

        return undefined;
    }

    /** Returns the first item that passes the validation check inside of condition(), or the item specified if none match. */
    public firstOrDefault(condition: (item: T) => boolean, noneResult: T): T {
        for (let i = 0; i < this.length; i++) {
            let item = this[i];

            if (condition(item))
                return item;
        }

        return noneResult;
    }

    /** Passes each item in the array through selector() and returns an AdvancedArray of the item returned. */
    public select(selector: (item: T) => NonNullable<any>): AdvancedArray<any> {
        let sendBack = new AdvancedArray<any>();

        for (let i = 0; i < this.length; i++) {
            let item = this[i];
            let add = selector(item);
            sendBack.push(add);
        }

        return sendBack;
    }

    /** Passes each item in the array through modifier() and replaces the item in the array with the returned item. */
    public modify(modifier: (item: T) => T) {
        for (let i = 0; i < this.length; i++) {
            let item = this[i];
            let replaced = modifier(item);
            this[i] = replaced;
        }
    }
}