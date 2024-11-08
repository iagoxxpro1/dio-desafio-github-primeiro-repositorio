async function fetchProfileData() {
  const url =
    "https://github.com/iagoxxpro1/js-developer-portfolio/blob/main/data/profile.json";
  const fetching = await fetch(url);
  return await fetching.json();
}
