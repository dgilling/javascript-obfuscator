import { TInputOptions } from './src/types/options/TInputOptions';
import { TDictionary } from './src/types/TDictionary';

import { IObfuscatedCode } from './src/interfaces/source-code/IObfuscatedCode';
import { TObfuscationResultsObject } from './src/types/TObfuscationResultsObject';

export type ObfuscatorOptions = TInputOptions;

export interface ObfuscatedCode extends IObfuscatedCode {}

/**
 * @param {string} sourceCode
 * @param {ObfuscatorOptions} inputOptions
 * @returns {ObfuscatedCode}
 */
export function obfuscate (sourceCode: string, inputOptions?: ObfuscatorOptions): ObfuscatedCode;

/**
 * @param {TSourceCodesObject} sourceCodesObject
 * @param {TInputOptions} inputOptions
 * @returns {TObfuscationResultsObject<TSourceCodesObject>}
 */
export function obfuscateMultiple <TSourceCodesObject extends TDictionary<string>> (
    sourceCodesObject: TSourceCodesObject,
    inputOptions?: TInputOptions
): TObfuscationResultsObject<TSourceCodesObject>;

/**
 * @type {string}
 */
export const version: string;