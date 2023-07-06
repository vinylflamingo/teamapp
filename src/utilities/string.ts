// isNullOrEmpty checks if a string is null, undefined, or empty
export function isNullOrEmpty(str: string | null | undefined): boolean {
    return (!str || str.trim() === '');
}