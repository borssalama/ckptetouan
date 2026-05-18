// Shared brand constants
export const BRAND = {
  name: "CKP Tétouan",
  fullName: "Centre de Kinésithérapie Iman El Jemaati",
  phone: "06 11 99 21 24",
  phoneIntl: "+212 6 11 99 21 24",
  address: "286 N° 2, Av. Hassan II, Tetouan 93000, Maroc",
  whatsappRaw: "212611992124",
  email: "contact@ckp-tetouan.ma",
  instagram: "https://instagram.com/ckp.tetouan",
};

export const WHATSAPP_URL = `https://wa.me/${BRAND.whatsappRaw}?text=${encodeURIComponent(
  "Bonjour, je souhaite prendre un rendez-vous au CKP Tétouan."
)}`;

export const NAV_LINKS = [
  { label: "Accueil", href: "#accueil" },
  { label: "À propos", href: "#apropos" },
  { label: "Services", href: "#services" },
  { label: "Rééducation", href: "#motion" },
  { label: "Témoignages", href: "#temoignages" },
  { label: "Contact", href: "#contact" },
];
