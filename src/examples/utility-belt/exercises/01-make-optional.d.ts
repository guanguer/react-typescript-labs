/**
 * Exercise 1: Make Optional
 *
 * Create a utility type called `MakeOptional` that takes a type T and a union of keys K,
 * and makes only those specific properties optional while keeping the rest required.
 *
 * Example:
 * interface User {
 *   id: number;
 *   name: string;
 *   email: string;
 *   age: number;
 * }
 *
 * type UserWithOptionalEmail = MakeOptional<User, 'email' | 'age'>;
 * // Result: { id: number; name: string; email?: string; age?: number }
 *
 * Hints:
 * - You'll need to use `Omit` and `Pick` utility types
 * - You'll need `Partial` to make properties optional
 * - Use intersection types (&) to combine the results
 */

import { type } from 'os';
import { K } from 'vitest/dist/chunks/reporters.d.BFLkQcL6.js';

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

export type MakeOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
type UserWithOptionalEmail = MakeOptional<User, 'email' | 'age'>;
