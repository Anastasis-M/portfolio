/**
 * Utilities extracted from @riadh-adrani/utils to make the project self-contained
 */

/**
 * Check if a string is blank (null, undefined, or only whitespace)
 */
export function isBlank(str: string | null | undefined): boolean {
  return str === null || str === undefined || str.trim() === '';
}

/**
 * Check if a string is a valid hex color
 */
export function isHexColor(color: string): boolean {
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color);
}

/**
 * Change the opacity of a hex color
 */
export function changeColorOpacity(color: string, opacity: number): string {
  // Make sure opacity is between 0 and 1
  opacity = Math.max(0, Math.min(1, opacity));
  
  // Convert opacity to hex
  const hexOpacity = Math.round(opacity * 255).toString(16).padStart(2, '0');
  
  // If color already has opacity (8 characters), replace it
  if (color.length === 9) {
    return `${color.substring(0, 7)}${hexOpacity}`;
  }
  
  // Otherwise add opacity
  return `${color}${hexOpacity}`;
}

/**
 * Utility type for string with autocomplete
 */
export type StringWithAutoComplete<T> = T | (string & {});

/**
 * Omit properties from an object
 */
export function omit<T extends object, K extends keyof T>(obj: T, ...keys: K[]): Omit<T, K> {
  const result = { ...obj };
  keys.forEach(key => delete result[key]);
  return result;
}
