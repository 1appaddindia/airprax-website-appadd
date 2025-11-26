export function generateSlug(str) {
    return str
        .toLowerCase()             // Convert to lowercase
        .trim()                    // Remove whitespace from both ends
        .replace(/[^\w\s-]/g, '')  // Remove all non-word characters (except spaces and dashes)
        .replace(/[\s_-]+/g, '-')  // Replace spaces, underscores, and dashes with a single dash
        .replace(/^-+|-+$/g, '');  // Remove leading and trailing dashes
}
