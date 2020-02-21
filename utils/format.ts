// Convert "12345678" to something like "12/345,678"
export function FormatApplicationId(applId?: string): string {
  if (!applId) return '';
  // Exception for applications start with PCT/
  if (applId.length !== 8) return applId;
  return applId.substring(0, 2) + '/' + applId.substring(2, 5) + ',' + applId.substring(5, 8);
}
