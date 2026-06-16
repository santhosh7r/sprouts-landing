// Central place for SPROUTS International Pre School contact details.
// WhatsApp numbers are in international format, digits only (country code + number).

export const BRAND = "Sprouts International Pre School";

export const LOCATIONS = [
  {
    key: "chennai",
    city: "Chennai",
    whatsapp: "919566052992",
    phones: ["+91 95660 52992", "+91 98409 13347"],
    mapQuery: "Sprouts International Pre School Chennai",
  },
  {
    key: "bengaluru",
    city: "Bengaluru",
    whatsapp: "919566052992",
    phones: ["+91 95660 52992", "+91 99012 11920"],
    mapQuery: "Sprouts International Pre School Bengaluru",
  },
];

// Default WhatsApp (Chennai) for generic CTAs.
export const WHATSAPP_NUMBER = LOCATIONS[0].whatsapp;

export function locationByKey(key) {
  return LOCATIONS.find((l) => l.key === key) || LOCATIONS[0];
}

// Build a wa.me deep link with a pre-filled message.
export function whatsappLink(message, number = WHATSAPP_NUMBER) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function mapEmbed(query) {
  return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=14&output=embed`;
}
export function mapDirections(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
