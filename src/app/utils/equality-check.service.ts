import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EqualityCheckService {

  constructor() { }

  // objectsEqual(a: any, b: any): boolean {
  //   // Check if both objects are the same instance
  //   if (a === b) return true;
  
  //   // Check if either object is null or undefined
  //   if (!a || !b) return false;
  
  //   // Get the types of a and b
  //   const typeA = typeof a;
  //   const typeB = typeof b;
  
  //   // If types are different, objects are not equal
  //   if (typeA !== typeB) return false;
  
  //   // If both are objects, continue with deep comparison
  //   if (typeA === 'object' && a !== null && b !== null) {
  //     // Check if both are arrays
  //     const isArrayA = Array.isArray(a);
  //     const isArrayB = Array.isArray(b);
  
  //     if (isArrayA !== isArrayB) return false; // If one is array and other is object, they are not equal
  
  //     if (isArrayA && isArrayB) {
  //       // If both are arrays, compare their lengths and then elements
  //       if (a.length !== b.length) return false;
  
  //       for (let i = 0; i < a.length; i++) {
  //         if (!this.objectsEqual(a[i], b[i])) {
  //           return false;
  //         }
  //       }
  //     } else {
  //       // If both are regular objects, compare their keys and values
  //       const keysA = Object.keys(a);
  //       const keysB = Object.keys(b);
  
  //       // Check if number of keys is the same
  //       if (keysA.length !== keysB.length) return false;
  
  //       // Deep comparison of all properties
  //       for (const key of keysA) {
  //         if (!this.objectsEqual(a[key], b[key])) {
  //           return false;
  //         }
  //       }
  //     }
  
  //     // If all properties are equal, objects are considered equal
  //     return true;
  //   }
  
  //   // Primitives are compared directly
  //   return a === b;
  // }

   objectsEqual(a:any, b:any) {
    // Check if both objects are the same instance
    if (a === b) return true;
  
    // Check if either object is null or undefined
    if (!a || !b) return false;
  
    // Get the types of a and b
    const typeA = typeof a;
    const typeB = typeof b;
  
    // If types are different, objects are not equal
    if (typeA !== typeB) return false;
  
    // If both are objects, continue with deep comparison
    if (typeA === 'object') {
      // Check if both are arrays
      const isArrayA = Array.isArray(a);
      const isArrayB = Array.isArray(b);
  
      if (isArrayA !== isArrayB) return false; // If one is array and other is object, they are not equal
  
      if (isArrayA && isArrayB) {
        // If both are arrays, compare their lengths
        if (a.length !== b.length) return false;
  
        // Sort arrays if they contain general objects or date objects
        const shouldSort = typeof a[0] === 'object' && a[0] !== null && !Array.isArray(a[0]);
  
        if (shouldSort) {
          // Deep clone arrays to avoid modifying original objects
          const clonedA = JSON.parse(JSON.stringify(a));
          const clonedB = JSON.parse(JSON.stringify(b));
  
          // Sort arrays of objects by JSON representation
          clonedA.sort((x:any, y:any) => JSON.stringify(x).localeCompare(JSON.stringify(y)));
          clonedB.sort((x:any, y:any) => JSON.stringify(x).localeCompare(JSON.stringify(y)));
  
          // Compare sorted arrays
          for (let i = 0; i < clonedA.length; i++) {
            if (!this.objectsEqual(clonedA[i], clonedB[i])) {
              return false;
            }
          }
        } else {
           //sort if arrays contains numbers or strings.
            a.sort();
            b.sort();
          // Compare arrays directly
          for (let i = 0; i < a.length; i++) {
            if (!this.objectsEqual(a[i], b[i])) {
              return false;
            }
          }
        }
      } else {
        // If both are regular objects, compare their keys and values
        const keysA = Object.keys(a);
        const keysB = Object.keys(b);
  
        // Check if number of keys is the same
        if (keysA.length !== keysB.length) return false;
  
        // Deep comparison of all properties
        for (const key of keysA) {
          if (!this.objectsEqual(a[key], b[key])) {
            return false;
          }
        }
      }
  
      // If all properties are equal, objects are considered equal
      return true;
    }
  
    // Primitives are compared directly
    return a === b;
  }
    
}
