async function fetchProfileData() {
  const url =
    "https://raw.githubusercontent.com/iagoxxpro1/Javascript-developer/main/Portfolio-profissional/data/profile.json";
  const fetching = await fetch(url);
  return await fetching.json();
}
