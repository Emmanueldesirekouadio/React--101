export const RoutePage = {
  HOME: "/",
  ABOUT: "/about",
  CONTACT: "/contact",
  UNIVERSITIES: "/universities",
  UNIVERSITY_DETAILS: "/universities/:country/:name",

  universityDetails(country, name) {
    return `/universities/${encodeURIComponent(country)}/${encodeURIComponent(name)}`;
  },
};

