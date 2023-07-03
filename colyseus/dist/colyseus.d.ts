// Generated by dts-bundle-generator v6.13.0

export interface ITransportEventMap {
	onopen?: ((ev: any) => any) | null;
	onmessage?: ((ev: any) => any) | null;
	onclose?: ((ev: any) => any) | null;
	onerror?: ((ev: any) => any) | null;
}
export interface ITransport {
	isOpen: boolean;
	send(data: ArrayBuffer | Array<number>): void;
	connect(url: string): void;
	close(code?: number, reason?: string): void;
}
declare class Connection implements ITransport {
	transport: ITransport;
	events: ITransportEventMap;
	constructor();
	send(data: ArrayBuffer | Array<number>): void;
	connect(url: string): void;
	close(code?: number, reason?: string): void;
	get isOpen(): boolean;
}
export interface Serializer<State> {
	setState(data: any): void;
	getState(): State;
	patch(data: any): void;
	teardown(): void;
	handshake?(bytes: number[], it?: any): void;
}
export declare function registerSerializer(id: string, serializer: any): void;
declare enum OPERATION {
	ADD = 128,
	REPLACE = 0,
	DELETE = 64,
	DELETE_AND_ADD = 192,
	TOUCH = 1,
	CLEAR = 10
}
/**
 * Data types
 */
export type PrimitiveType = "string" | "number" | "boolean" | "int8" | "uint8" | "int16" | "uint16" | "int32" | "uint32" | "int64" | "uint64" | "float32" | "float64" | typeof Schema;
export type DefinitionType = PrimitiveType | PrimitiveType[] | {
	array: PrimitiveType;
} | {
	map: PrimitiveType;
} | {
	collection: PrimitiveType;
} | {
	set: PrimitiveType;
};
export type Definition = {
	[field: string]: DefinitionType;
};
export type FilterCallback<T extends Schema = any, V = any, R extends Schema = any> = (((this: T, client: ClientWithSessionId, value: V) => boolean) | ((this: T, client: ClientWithSessionId, value: V, root: R) => boolean));
export type FilterChildrenCallback<T extends Schema = any, K = any, V = any, R extends Schema = any> = (((this: T, client: ClientWithSessionId, key: K, value: V) => boolean) | ((this: T, client: ClientWithSessionId, key: K, value: V, root: R) => boolean));
declare class SchemaDefinition {
	schema: Definition;
	indexes: {
		[field: string]: number;
	};
	fieldsByIndex: {
		[index: number]: string;
	};
	filters: {
		[field: string]: FilterCallback;
	};
	indexesWithFilters: number[];
	childFilters: {
		[field: string]: FilterChildrenCallback;
	};
	deprecated: {
		[field: string]: boolean;
	};
	descriptors: PropertyDescriptorMap & ThisType<any>;
	static create(parent?: SchemaDefinition): SchemaDefinition;
	addField(field: string, type: DefinitionType): void;
	hasField(field: string): boolean;
	addFilter(field: string, cb: FilterCallback): boolean;
	addChildrenFilter(field: string, cb: FilterChildrenCallback): boolean;
	getChildrenFilter(field: string): FilterChildrenCallback<any, any, any, any>;
	getNextFieldIndex(): number;
}
export type ClientWithSessionId = {
	sessionId: string;
} & any;
export interface TypeOptions {
	manual?: boolean;
	context?: Context;
}
declare class Context {
	types: {
		[id: number]: typeof Schema;
	};
	schemas: Map<typeof Schema, number>;
	useFilters: boolean;
	has(schema: typeof Schema): boolean;
	get(typeid: number): typeof Schema;
	add(schema: typeof Schema, typeid?: number): void;
	static create(options?: TypeOptions): (definition: DefinitionType) => PropertyDecorator;
}
/**
 * Copyright (c) 2018 Endel Dreyer
 * Copyright (c) 2014 Ion Drive Software Ltd.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE
 */
/**
 * msgpack implementation highly based on notepack.io
 * https://github.com/darrachequesne/notepack
 */
export interface Iterator {
	offset: number;
}
declare class MapSchema<V = any, K extends string = string> implements Map<K, V>, SchemaDecoderCallbacks {
	protected $changes: ChangeTree;
	protected $items: Map<K, V>;
	protected $indexes: Map<number, K>;
	protected $refId: number;
	$callbacks: {
		[operation: number]: Array<(item: V, key: string) => void>;
	};
	onAdd(callback: (item: V, key: string) => void, triggerAll?: boolean): () => boolean;
	onRemove(callback: (item: V, key: string) => void): () => boolean;
	onChange(callback: (item: V, key: string) => void): () => boolean;
	static is(type: any): boolean;
	constructor(initialValues?: Map<K, V> | Record<K, V>);
	/** Iterator */
	[Symbol.iterator](): IterableIterator<[
		K,
		V
	]>;
	get [Symbol.toStringTag](): string;
	set(key: K, value: V): this;
	get(key: K): V | undefined;
	delete(key: K): boolean;
	clear(changes?: DataChange[]): void;
	has(key: K): boolean;
	forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void): void;
	entries(): IterableIterator<[
		K,
		V
	]>;
	keys(): IterableIterator<K>;
	values(): IterableIterator<V>;
	get size(): number;
	protected setIndex(index: number, key: K): void;
	protected getIndex(index: number): K;
	protected getByIndex(index: number): V;
	protected deleteByIndex(index: number): void;
	toJSON(): any;
	clone(isDecoding?: boolean): MapSchema<V>;
}
declare class ArraySchema<V = any> implements Array<V>, SchemaDecoderCallbacks {
	protected $changes: ChangeTree;
	protected $items: Map<number, V>;
	protected $indexes: Map<number, number>;
	protected $refId: number;
	[n: number]: V;
	$callbacks: {
		[operation: number]: Array<(item: V, key: number) => void>;
	};
	onAdd(callback: (item: V, key: number) => void, triggerAll?: boolean): () => boolean;
	onRemove(callback: (item: V, key: number) => void): () => boolean;
	onChange(callback: (item: V, key: number) => void): () => boolean;
	static is(type: any): boolean;
	constructor(...items: V[]);
	set length(value: number);
	get length(): number;
	push(...values: V[]): number;
	/**
	 * Removes the last element from an array and returns it.
	 */
	pop(): V | undefined;
	at(index: number): V;
	setAt(index: number, value: V): void;
	deleteAt(index: number): boolean;
	protected $deleteAt(index: any): boolean;
	clear(changes?: DataChange[]): void;
	/**
	 * Combines two or more arrays.
	 * @param items Additional items to add to the end of array1.
	 */
	concat(...items: (V | ConcatArray<V>)[]): ArraySchema<V>;
	/**
	 * Adds all the elements of an array separated by the specified separator string.
	 * @param separator A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.
	 */
	join(separator?: string): string;
	/**
	 * Reverses the elements in an Array.
	 */
	reverse(): ArraySchema<V>;
	/**
	 * Removes the first element from an array and returns it.
	 */
	shift(): V | undefined;
	/**
	 * Returns a section of an array.
	 * @param start The beginning of the specified portion of the array.
	 * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
	 */
	slice(start?: number, end?: number): V[];
	/**
	 * Sorts an array.
	 * @param compareFn Function used to determine the order of the elements. It is expected to return
	 * a negative value if first argument is less than second argument, zero if they're equal and a positive
	 * value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
	 * ```ts
	 * [11,2,22,1].sort((a, b) => a - b)
	 * ```
	 */
	sort(compareFn?: (a: V, b: V) => number): this;
	/**
	 * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
	 * @param start The zero-based location in the array from which to start removing elements.
	 * @param deleteCount The number of elements to remove.
	 * @param items Elements to insert into the array in place of the deleted elements.
	 */
	splice(start: number, deleteCount?: number, ...items: V[]): V[];
	/**
	 * Inserts new elements at the start of an array.
	 * @param items  Elements to insert at the start of the Array.
	 */
	unshift(...items: V[]): number;
	/**
	 * Returns the index of the first occurrence of a value in an array.
	 * @param searchElement The value to locate in the array.
	 * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
	 */
	indexOf(searchElement: V, fromIndex?: number): number;
	/**
	 * Returns the index of the last occurrence of a specified value in an array.
	 * @param searchElement The value to locate in the array.
	 * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array.
	 */
	lastIndexOf(searchElement: V, fromIndex?: number): number;
	/**
	 * Determines whether all the members of an array satisfy the specified test.
	 * @param callbackfn A function that accepts up to three arguments. The every method calls
	 * the callbackfn function for each element in the array until the callbackfn returns a value
	 * which is coercible to the Boolean value false, or until the end of the array.
	 * @param thisArg An object to which the this keyword can refer in the callbackfn function.
	 * If thisArg is omitted, undefined is used as the this value.
	 */
	every(callbackfn: (value: V, index: number, array: V[]) => unknown, thisArg?: any): boolean;
	/**
	 * Determines whether the specified callback function returns true for any element of an array.
	 * @param callbackfn A function that accepts up to three arguments. The some method calls
	 * the callbackfn function for each element in the array until the callbackfn returns a value
	 * which is coercible to the Boolean value true, or until the end of the array.
	 * @param thisArg An object to which the this keyword can refer in the callbackfn function.
	 * If thisArg is omitted, undefined is used as the this value.
	 */
	some(callbackfn: (value: V, index: number, array: V[]) => unknown, thisArg?: any): boolean;
	/**
	 * Performs the specified action for each element in an array.
	 * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
	 * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
	 */
	forEach(callbackfn: (value: V, index: number, array: V[]) => void, thisArg?: any): void;
	/**
	 * Calls a defined callback function on each element of an array, and returns an array that contains the results.
	 * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
	 * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
	 */
	map<U>(callbackfn: (value: V, index: number, array: V[]) => U, thisArg?: any): U[];
	/**
	 * Returns the elements of an array that meet the condition specified in a callback function.
	 * @param callbackfn A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.
	 * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
	 */
	filter(callbackfn: (value: V, index: number, array: V[]) => unknown, thisArg?: any): any;
	/**
	 * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
	 * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
	 * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
	 */
	reduce<U = V>(callbackfn: (previousValue: U, currentValue: V, currentIndex: number, array: V[]) => U, initialValue?: U): U;
	/**
	 * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
	 * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
	 * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
	 */
	reduceRight<U = V>(callbackfn: (previousValue: U, currentValue: V, currentIndex: number, array: V[]) => U, initialValue?: U): U;
	/**
	 * Returns the value of the first element in the array where predicate is true, and undefined
	 * otherwise.
	 * @param predicate find calls predicate once for each element of the array, in ascending
	 * order, until it finds one where predicate returns true. If such an element is found, find
	 * immediately returns that element value. Otherwise, find returns undefined.
	 * @param thisArg If provided, it will be used as the this value for each invocation of
	 * predicate. If it is not provided, undefined is used instead.
	 */
	find(predicate: (value: V, index: number, obj: V[]) => boolean, thisArg?: any): V | undefined;
	/**
	 * Returns the index of the first element in the array where predicate is true, and -1
	 * otherwise.
	 * @param predicate find calls predicate once for each element of the array, in ascending
	 * order, until it finds one where predicate returns true. If such an element is found,
	 * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
	 * @param thisArg If provided, it will be used as the this value for each invocation of
	 * predicate. If it is not provided, undefined is used instead.
	 */
	findIndex(predicate: (value: V, index: number, obj: V[]) => unknown, thisArg?: any): number;
	/**
	 * Returns the this object after filling the section identified by start and end with value
	 * @param value value to fill array section with
	 * @param start index to start filling the array at. If start is negative, it is treated as
	 * length+start where length is the length of the array.
	 * @param end index to stop filling the array at. If end is negative, it is treated as
	 * length+end.
	 */
	fill(value: V, start?: number, end?: number): this;
	/**
	 * Returns the this object after copying a section of the array identified by start and end
	 * to the same array starting at position target
	 * @param target If target is negative, it is treated as length+target where length is the
	 * length of the array.
	 * @param start If start is negative, it is treated as length+start. If end is negative, it
	 * is treated as length+end.
	 * @param end If not specified, length of the this object is used as its default value.
	 */
	copyWithin(target: number, start: number, end?: number): this;
	/**
	 * Returns a string representation of an array.
	 */
	toString(): string;
	/**
	 * Returns a string representation of an array. The elements are converted to string using their toLocalString methods.
	 */
	toLocaleString(): string;
	/** Iterator */
	[Symbol.iterator](): IterableIterator<V>;
	[Symbol.unscopables]: any;
	/**
	 * Returns an iterable of key, value pairs for every entry in the array
	 */
	entries(): IterableIterator<[
		number,
		V
	]>;
	/**
	 * Returns an iterable of keys in the array
	 */
	keys(): IterableIterator<number>;
	/**
	 * Returns an iterable of values in the array
	 */
	values(): IterableIterator<V>;
	/**
	 * Determines whether an array includes a certain element, returning true or false as appropriate.
	 * @param searchElement The element to search for.
	 * @param fromIndex The position in this array at which to begin searching for searchElement.
	 */
	includes(searchElement: V, fromIndex?: number): boolean;
	/**
	 * Calls a defined callback function on each element of an array. Then, flattens the result into
	 * a new array.
	 * This is identical to a map followed by flat with depth 1.
	 *
	 * @param callback A function that accepts up to three arguments. The flatMap method calls the
	 * callback function one time for each element in the array.
	 * @param thisArg An object to which the this keyword can refer in the callback function. If
	 * thisArg is omitted, undefined is used as the this value.
	 */
	flatMap<U, This = undefined>(callback: (this: This, value: V, index: number, array: V[]) => U | ReadonlyArray<U>, thisArg?: This): U[];
	/**
	 * Returns a new array with all sub-array elements concatenated into it recursively up to the
	 * specified depth.
	 *
	 * @param depth The maximum recursion depth
	 */
	flat<A, D extends number = 1>(this: A, depth?: D): any;
	protected setIndex(index: number, key: number): void;
	protected getIndex(index: number): number;
	protected getByIndex(index: number): V;
	protected deleteByIndex(index: number): void;
	toArray(): V[];
	toJSON(): any[];
	clone(isDecoding?: boolean): ArraySchema<V>;
}
export type K = number;
declare class CollectionSchema<V = any> implements SchemaDecoderCallbacks {
	protected $changes: ChangeTree;
	protected $items: Map<number, V>;
	protected $indexes: Map<number, number>;
	protected $refId: number;
	$callbacks: {
		[operation: number]: Array<(item: V, key: string) => void>;
	};
	onAdd(callback: (item: V, key: string) => void, triggerAll?: boolean): () => boolean;
	onRemove(callback: (item: V, key: string) => void): () => boolean;
	onChange(callback: (item: V, key: string) => void): () => boolean;
	static is(type: any): boolean;
	constructor(initialValues?: Array<V>);
	add(value: V): number;
	at(index: number): V | undefined;
	entries(): IterableIterator<[
		number,
		V
	]>;
	delete(item: V): boolean;
	clear(changes?: DataChange[]): void;
	has(value: V): boolean;
	forEach(callbackfn: (value: V, key: K, collection: CollectionSchema<V>) => void): void;
	values(): IterableIterator<V>;
	get size(): number;
	protected setIndex(index: number, key: number): void;
	protected getIndex(index: number): number;
	protected getByIndex(index: number): V;
	protected deleteByIndex(index: number): void;
	toArray(): V[];
	toJSON(): V[];
	clone(isDecoding?: boolean): CollectionSchema<V>;
}
declare class SetSchema<V = any> implements SchemaDecoderCallbacks {
	protected $changes: ChangeTree;
	protected $items: Map<number, V>;
	protected $indexes: Map<number, number>;
	protected $refId: number;
	$callbacks: {
		[operation: number]: Array<(item: V, key: string) => void>;
	};
	onAdd(callback: (item: V, key: string) => void, triggerAll?: boolean): () => boolean;
	onRemove(callback: (item: V, key: string) => void): () => boolean;
	onChange(callback: (item: V, key: string) => void): () => boolean;
	static is(type: any): boolean;
	constructor(initialValues?: Array<V>);
	add(value: V): number | false;
	entries(): IterableIterator<[
		number,
		V
	]>;
	delete(item: V): boolean;
	clear(changes?: DataChange[]): void;
	has(value: V): boolean;
	forEach(callbackfn: (value: V, key: number, collection: SetSchema<V>) => void): void;
	values(): IterableIterator<V>;
	get size(): number;
	protected setIndex(index: number, key: number): void;
	protected getIndex(index: number): number;
	protected getByIndex(index: number): V;
	protected deleteByIndex(index: number): void;
	toArray(): V[];
	toJSON(): V[];
	clone(isDecoding?: boolean): SetSchema<V>;
}
declare class ReferenceTracker {
	refs: Map<number, Ref>;
	refCounts: {
		[refId: number]: number;
	};
	deletedRefs: Set<number>;
	protected nextUniqueId: number;
	getNextUniqueId(): number;
	addRef(refId: number, ref: Ref, incrementCount?: boolean): void;
	removeRef(refId: any): void;
	clearRefs(): void;
	garbageCollectDeletedRefs(): void;
}
export type Ref = Schema | ArraySchema | MapSchema | CollectionSchema | SetSchema;
export interface ChangeOperation {
	op: OPERATION;
	index: number;
}
declare class ChangeTree {
	ref: Ref;
	refId: number;
	root?: ReferenceTracker;
	parent?: Ref;
	parentIndex?: number;
	indexes: {
		[index: string]: any;
	};
	changed: boolean;
	changes: Map<number, ChangeOperation>;
	allChanges: Set<number>;
	caches: {
		[field: number]: number[];
	};
	currentCustomOperation: number;
	constructor(ref: Ref, parent?: Ref, root?: ReferenceTracker);
	setParent(parent: Ref, root?: ReferenceTracker, parentIndex?: number): void;
	operation(op: ChangeOperation): void;
	change(fieldName: string | number, operation?: OPERATION): void;
	touch(fieldName: string | number): void;
	touchParents(): void;
	getType(index?: number): any;
	getChildrenFilter(): FilterChildrenCallback;
	getValue(index: number): any;
	delete(fieldName: string | number): void;
	discard(changed?: boolean, discardAll?: boolean): void;
	/**
	 * Recursively discard all changes from this, and child structures.
	 */
	discardAll(): void;
	cache(field: number, cachedBytes: number[]): void;
	clone(): ChangeTree;
	ensureRefId(): void;
	protected assertValidIndex(index: number, fieldName: string | number): void;
}
export type NonFunctionPropNames<T> = {
	[K in keyof T]: T[K] extends Function ? never : K;
}[keyof T];
export interface DataChange<T = any, F = string> {
	refId: number;
	op: OPERATION;
	field: F;
	dynamicIndex?: number | string;
	value: T;
	previousValue: T;
}
export interface SchemaDecoderCallbacks<TValue = any, TKey = any> {
	$callbacks: {
		[operation: number]: Array<(item: TValue, key: TKey) => void>;
	};
	onAdd(callback: (item: any, key: any) => void, ignoreExisting?: boolean): () => void;
	onRemove(callback: (item: any, key: any) => void): () => void;
	onChange(callback: (item: any, key: any) => void): () => void;
	clone(decoding?: boolean): SchemaDecoderCallbacks;
	clear(changes?: DataChange[]): any;
	decode?(byte: any, it: Iterator): any;
}
declare abstract class Schema {
	static _typeid: number;
	static _context: Context;
	static _definition: SchemaDefinition;
	static onError(e: any): void;
	static is(type: DefinitionType): boolean;
	protected $changes: ChangeTree;
	protected $callbacks: {
		[op: number]: Array<Function>;
	};
	onChange(callback: (changes: DataChange[]) => void): () => void;
	onRemove(callback: () => void): () => void;
	constructor(...args: any[]);
	assign(props: {
		[prop in NonFunctionPropNames<this>]?: this[prop];
	}): this;
	protected get _definition(): SchemaDefinition;
	/**
	 * (Server-side): Flag a property to be encoded for the next patch.
	 * @param instance Schema instance
	 * @param property string representing the property name, or number representing the index of the property.
	 * @param operation OPERATION to perform (detected automatically)
	 */
	setDirty<K extends NonFunctionPropNames<this>>(property: K | number, operation?: OPERATION): void;
	listen<K extends NonFunctionPropNames<this>>(attr: K, callback: (value: this[K], previousValue: this[K]) => void): () => boolean;
	decode(bytes: number[], it?: Iterator, ref?: Ref): DataChange<any, string>[];
	encode(encodeAll?: boolean, bytes?: number[], useFilters?: boolean): number[];
	encodeAll(useFilters?: boolean): number[];
	applyFilters(client: ClientWithSessionId, encodeAll?: boolean): number[];
	clone(): this;
	toJSON(): {};
	discardAllChanges(): void;
	protected getByIndex(index: number): any;
	protected deleteByIndex(index: number): void;
	private tryEncodeTypeId;
	private getSchemaType;
	private createTypeInstance;
	private _triggerChanges;
}
export type SchemaConstructor<T = Schema> = new (...args: any[]) => T;
export declare class SchemaSerializer<T extends Schema = any> implements Serializer<T> {
	state: T;
	setState(rawState: any): import("@colyseus/schema").DataChange<any, string>[];
	getState(): T;
	patch(patches: any): import("@colyseus/schema").DataChange<any, string>[];
	teardown(): void;
	handshake(bytes: number[], it?: Iterator): void;
}
export type FunctionParameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : never;
declare class EventEmitter<CallbackSignature extends (...args: any[]) => any> {
	handlers: Array<CallbackSignature>;
	register(cb: CallbackSignature, once?: boolean): this;
	invoke(...args: FunctionParameters<CallbackSignature>): void;
	invokeAsync(...args: FunctionParameters<CallbackSignature>): Promise<any[]>;
	remove(cb: CallbackSignature): void;
	clear(): void;
}
export interface EventsMap {
	[event: string]: any;
}
export interface DefaultEvents extends EventsMap {
	[event: string]: (...args: any) => void;
}
export interface Unsubscribe {
	(): void;
}
declare class Emitter<Events extends EventsMap = DefaultEvents> {
	/**
	 * Event names in keys and arrays with listeners in values.
	 *
	 * ```js
	 * emitter1.events = emitter2.events
	 * emitter2.events = { }
	 * ```
	 */
	events: Partial<{
		[E in keyof Events]: Events[E][];
	}>;
	/**
	 * Add a listener for a given event.
	 *
	 * ```js
	 * const unbind = ee.on('tick', (tickType, tickDuration) => {
	 *   count += 1
	 * })
	 *
	 * disable () {
	 *   unbind()
	 * }
	 * ```
	 *
	 * @param event The event name.
	 * @param cb The listener function.
	 * @returns Unbind listener from event.
	 */
	on<K extends keyof Events>(this: this, event: K, cb: Events[K]): Unsubscribe;
	/**
	 * Calls each of the listeners registered for a given event.
	 *
	 * ```js
	 * ee.emit('tick', tickType, tickDuration)
	 * ```
	 *
	 * @param event The event name.
	 * @param args The arguments for listeners.
	 */
	emit<K extends keyof Events>(this: this, event: K, ...args: Parameters<Events[K]>): void;
}
export interface RoomAvailable<Metadata = any> {
	name: string;
	roomId: string;
	clients: number;
	maxClients: number;
	metadata?: Metadata;
}
export declare class Room<State = any> {
	roomId: string;
	sessionId: string;
	reconnectionToken: string;
	name: string;
	connection: Connection;
	onStateChange: {
		once: (cb: (state: State) => void) => void;
		remove: (cb: (state: State) => void) => void;
		invoke: (state: State) => void;
		invokeAsync: (state: State) => Promise<any[]>;
		clear: () => void;
	} & ((this: any, cb: (state: State) => void) => EventEmitter<(state: State) => void>);
	onError: {
		once: (cb: (code: number, message?: string) => void) => void;
		remove: (cb: (code: number, message?: string) => void) => void;
		invoke: (code: number, message?: string) => void;
		invokeAsync: (code: number, message?: string) => Promise<any[]>;
		clear: () => void;
	} & ((this: any, cb: (code: number, message?: string) => void) => EventEmitter<(code: number, message?: string) => void>);
	onLeave: {
		once: (cb: (code: number) => void) => void;
		remove: (cb: (code: number) => void) => void;
		invoke: (code: number) => void;
		invokeAsync: (code: number) => Promise<any[]>;
		clear: () => void;
	} & ((this: any, cb: (code: number) => void) => EventEmitter<(code: number) => void>);
	protected onJoin: {
		once: (cb: (...args: any[]) => void | Promise<any>) => void;
		remove: (cb: (...args: any[]) => void | Promise<any>) => void;
		invoke: (...args: any[]) => void;
		invokeAsync: (...args: any[]) => Promise<any[]>;
		clear: () => void;
	} & ((this: any, cb: (...args: any[]) => void | Promise<any>) => EventEmitter<(...args: any[]) => void | Promise<any>>);
	serializerId: string;
	serializer: Serializer<State>;
	protected hasJoined: boolean;
	protected rootSchema: SchemaConstructor<State>;
	protected onMessageHandlers: import("nanoevents").Emitter<import("nanoevents").DefaultEvents>;
	constructor(name: string, rootSchema?: SchemaConstructor<State>);
	get id(): string;
	connect(endpoint: string, devModeCloseCallback?: () => void, room?: Room): void;
	leave(consented?: boolean): Promise<number>;
	onMessage<T = any>(type: "*", callback: (type: string | number | Schema, message: T) => void): any;
	onMessage<T extends (typeof Schema & (new (...args: any[]) => any))>(type: T, callback: (message: InstanceType<T>) => void): any;
	onMessage<T = any>(type: string | number, callback: (message: T) => void): any;
	send(type: string | number, message?: any): void;
	sendBytes(type: string | number, bytes: number[] | ArrayBufferLike): void;
	get state(): State;
	removeAllListeners(): void;
	protected onMessageCallback(event: MessageEvent): void;
	protected setState(encodedState: number[]): void;
	protected patch(binaryPatch: number[]): void;
	private dispatchMessage;
	private destroy;
	private getMessageHandlerKey;
}
export type JoinOptions = any;
export interface EndpointSettings {
	hostname: string;
	secure: boolean;
	port?: number;
	pathname?: string;
}
export declare class Client {
	protected settings: EndpointSettings;
	constructor(settings?: string | EndpointSettings);
	joinOrCreate<T>(roomName: string, options?: JoinOptions, rootSchema?: SchemaConstructor<T>): Promise<Room<T>>;
	create<T>(roomName: string, options?: JoinOptions, rootSchema?: SchemaConstructor<T>): Promise<Room<T>>;
	join<T>(roomName: string, options?: JoinOptions, rootSchema?: SchemaConstructor<T>): Promise<Room<T>>;
	joinById<T>(roomId: string, options?: JoinOptions, rootSchema?: SchemaConstructor<T>): Promise<Room<T>>;
	/**
	 * Re-establish connection with a room this client was previously connected to.
	 *
	 * @param reconnectionToken The `room.reconnectionToken` from previously connected room.
	 * @param rootSchema (optional) Concrete root schema definition
	 * @returns Promise<Room>
	 */
	reconnect<T>(reconnectionToken: string, rootSchema?: SchemaConstructor<T>): Promise<Room<T>>;
	getAvailableRooms<Metadata = any>(roomName?: string): Promise<RoomAvailable<Metadata>[]>;
	consumeSeatReservation<T>(response: any, rootSchema?: SchemaConstructor<T>, reuseRoomInstance?: Room): Promise<Room<T>>;
	protected createMatchMakeRequest<T>(method: string, roomName: string, options?: JoinOptions, rootSchema?: SchemaConstructor<T>, reuseRoomInstance?: Room): Promise<Room<T>>;
	protected createRoom<T>(roomName: string, rootSchema?: SchemaConstructor<T>): Room<T>;
	protected buildEndpoint(room: any, options?: any): string;
	protected getHttpEndpoint(segments?: string): string;
	protected getEndpointPort(): string;
}
export declare enum Protocol {
	HANDSHAKE = 9,
	JOIN_ROOM = 10,
	ERROR = 11,
	LEAVE_ROOM = 12,
	ROOM_DATA = 13,
	ROOM_STATE = 14,
	ROOM_STATE_PATCH = 15,
	ROOM_DATA_SCHEMA = 16,
	ROOM_DATA_BYTES = 17
}
export declare enum ErrorCode {
	MATCHMAKE_NO_HANDLER = 4210,
	MATCHMAKE_INVALID_CRITERIA = 4211,
	MATCHMAKE_INVALID_ROOM_ID = 4212,
	MATCHMAKE_UNHANDLED = 4213,
	MATCHMAKE_EXPIRED = 4214,
	AUTH_FAILED = 4215,
	APPLICATION_ERROR = 4216
}
export declare enum Platform {
	ios = "ios",
	android = "android"
}
export interface Device {
	id: string;
	platform: Platform;
}
export interface IStatus {
	status: boolean;
}
export interface IUser {
	_id: string;
	username: string;
	displayName: string;
	avatarUrl: string;
	isAnonymous: boolean;
	email: string;
	lang: string;
	location: string;
	timezone: string;
	metadata: any;
	devices: Device[];
	facebookId: string;
	twitterId: string;
	googleId: string;
	gameCenterId: string;
	steamId: string;
	friendIds: string[];
	blockedUserIds: string[];
	createdAt: Date;
	updatedAt: Date;
}
export declare class Auth implements IUser {
	_id: string;
	username: string;
	displayName: string;
	avatarUrl: string;
	isAnonymous: boolean;
	email: string;
	lang: string;
	location: string;
	timezone: string;
	metadata: any;
	devices: Device[];
	facebookId: string;
	twitterId: string;
	googleId: string;
	gameCenterId: string;
	steamId: string;
	friendIds: string[];
	blockedUserIds: string[];
	createdAt: Date;
	updatedAt: Date;
	token: string;
	protected endpoint: string;
	protected keepOnlineInterval: any;
	constructor(endpoint: string);
	get hasToken(): boolean;
	login(options?: {
		accessToken?: string;
		deviceId?: string;
		platform?: string;
		email?: string;
		password?: string;
	}): Promise<this>;
	save(): Promise<this>;
	getFriends(): Promise<IUser[]>;
	getOnlineFriends(): Promise<IUser[]>;
	getFriendRequests(): Promise<IUser[]>;
	sendFriendRequest(friendId: string): Promise<IStatus>;
	acceptFriendRequest(friendId: string): Promise<IStatus>;
	declineFriendRequest(friendId: string): Promise<IStatus>;
	blockUser(friendId: string): Promise<IStatus>;
	unblockUser(friendId: string): Promise<IStatus>;
	request(method: "get" | "post" | "put" | "del", segments: string, query?: {
		[key: string]: number | string;
	}, body?: any, headers?: {
		[key: string]: string;
	}): Promise<any>;
	logout(): void;
	registerPingService(timeout?: number): void;
	unregisterPingService(): void;
}

export as namespace Colyseus;

export {};
