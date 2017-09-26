// @flow
/**
 * use interface in preference of type as it supports extends and implement
 * it also allow merge properties
 * treat type as object literals and remind type alias can also be used to 
 * alias primitives
 */
export interface CommonInterface {
    navigate: (params: any) => void;
}