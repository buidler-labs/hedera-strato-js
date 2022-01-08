import { ApiSession } from "../ApiSession";

/**
 * Common functionality exhibited by session-bounded, id-entifiable LiveEntity instances.
 */
export class LiveEntity<T> {
    constructor(
        protected readonly session: ApiSession,
        public readonly id: T
    ) {}

    public equals<R>(what: R|LiveEntity<T>): boolean {
        if (what instanceof LiveEntity) {
            return what.id === this.id;
        }
        return this._equals(what);
    }

    protected _equals<R>(what: R): boolean {
        return false;
    }
}