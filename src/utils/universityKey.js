export function universityKey(country, name) {
  return `${country}::${name}`;
}

export function universityKeyFromUniversity(u) {
  return universityKey(u?.country ?? "", u?.name ?? "");
}

