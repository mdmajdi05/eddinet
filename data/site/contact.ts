// ============================================================================
//  FILE: data/site/contact.ts  (CONTACT / COMPANY INFO)
// WHAT'S IN THIS FILE:
//   site - company info : name, url, phone, email, address,
//          working hours, whatsapp, social links
//   (Header, Footer, Contact page, JSON-LD schema, llms.txt, placeholders
//    waale SARE details YAHIN se aate hain)
//
//  >>>  KUCH BHI BADALNA HO TO SIRF NEECHE "EDIT ZONE" ME BADLO.  <<<
//  >>>  tel: link, wa.me link, address string — sab apne aap ban jaate hain.  <<<
// ============================================================================

// ###########################################################################
// #                                                                         #
// #   ✏️  E D I T   Z O N E                                                 #
// #   yahan badlo -> poore website me apne aap badal jayega                 #
// #                                                                         #
// ###########################################################################

/** POORA number, country code ke saath. WhatsApp BHI isi number par hai. */
const PHONE_NUMBER = "+91 93196 97442";

/** Company email — site par har jagah isi se aayega. */
const EMAIL = "contact@eddinet.com";

/** Social links. Jo link nahi hai usko khali "" chhodo -> uska button dikhega nahi. */
const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/company/eddinet",
  facebook: "https://www.facebook.com/profile.php?id=61595109519274",
  instagram: "https://www.instagram.com/_eddinet",
  twitter: "",
  youtube: "",
};

/** Office address — structured hai taaki JSON-LD schema me bhi sahi bane. */
const POSTAL_ADDRESS = {
  streetAddress: "Okhla Industrial Estate, Phase I",
  addressLocality: "New Delhi",
  addressRegion: "Delhi",
  postalCode: "110020",
  addressCountry: "IN",
};

/** Address ka ek-line version: "Okhla Industrial Estate, Phase I, New Delhi - 110020" */
const ADDRESS_LINE = `${POSTAL_ADDRESS.streetAddress}, ${POSTAL_ADDRESS.addressLocality} - ${POSTAL_ADDRESS.postalCode}`;

/** Office ke paas ki known jagah (chhota sa hint) */
const ADDRESS_NOTE = "Okhla Phase I, New Delhi (Near ESI Hospital)";

/** Working hours */
const HOURS = "Mon - Sat: 10:00 AM - 7:00 PM";

// ###########################################################################
// #   ✅  YAHAN SE KUCH MAT BADLO — sab upar se apne aap derive ho raha hai  #
// ###########################################################################

/** "+91 93196 97442" -> "919319697442"  (tel: aur wa.me dono isi se bante hain) */
const phoneDigits = PHONE_NUMBER.replace(/\D/g, "");

export const site = {
  name: "Eddinet",
  url: "https://eddinet.com/",
  tagline: "ROI-focused Digital Growth, Marketing & Technology Partner",

  // --- phone / whatsapp (PHONE_NUMBER se) ---
  phones: [PHONE_NUMBER],
  phone: PHONE_NUMBER,
  phoneHref: `tel:+${phoneDigits}`,
  whatsapp: `https://wa.me/${phoneDigits}`,

  // --- company info ---
  email: EMAIL,
  address: ADDRESS_LINE,
  addressNote: ADDRESS_NOTE,
  hours: HOURS,
  /** structured address — JSON-LD schema yahi use karta hai */
  postalAddress: POSTAL_ADDRESS,

  // --- social (SOCIAL_LINKS se) ---
  social: SOCIAL_LINKS,
};
