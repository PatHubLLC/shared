// Convert "12345678" to something like "12/345,678"
export function FormatApplicationId(applId?: string): string {
  if (!applId) return '';
  // Exception for applications start with PCT/
  if (applId.length !== 8) return applId;
  return applId.substring(0, 2) + '/' + applId.substring(2, 5) + ',' + applId.substring(5, 8);
}

// AIA could be string of true or false. Convert to Yes or No.
export function FormatAIA(aia: string): string {
  if (aia.toLowerCase() === 'true') {
    return 'YES';
  }
  if (aia.toLowerCase() === 'false') {
    return 'NO';
  }
  return aia;
}

export function FormatTitle(title: string): string {
  return title.replace('\n', ' ').replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

// Convert 10 digits phone number to (xxx) xxx-xxxx
export function FormatUsPhoneNumber(phone: string): string {
  if (phone.length !== 10) {
    return phone;
  }
  return phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
}

// For 9 or 10 digits number, add "WO".
export function FormatPublicationNumber(original: string): string {
  if (!original.startsWith('US')) {
    return 'WO' + original;
  }
  return original;
}

// Only keep letters and numbers from a string.
export function cleanup(value: string): string {
  return value.replace(/[^a-zA-Z0-9]+/g, '');
}
