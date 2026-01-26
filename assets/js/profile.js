// Update these links with your own profiles
const PROFILE = {
  linkedin: "https://www.linkedin.com/in/maheshwari-vallapu-86b0641b1/",
  github: "https://github.com/MaheshwariVallapu",
  medium: "https://medium.com/@maheshwarimahi1005",
  resume: "https://1drv.ms/w/c/22bc417149e2b389/IQAEuvg8295QRKCKVx5Vwo7nAV0gLc6G-aAmd8KTKWAJuAw?e=XNYrPw"
};

function setHref(id, url) {
  const el = document.getElementById(id);
  if (el && url) el.href = url;
}

document.addEventListener("DOMContentLoaded", () => {
  setHref("linkedinLink", PROFILE.linkedin);
  setHref("githubLink", PROFILE.github);
  setHref("mediumLink", PROFILE.medium);
  setHref("resumeLink", PROFILE.resume);

  setHref("linkedinLink2", PROFILE.linkedin);
  setHref("githubLink2", PROFILE.github);
  setHref("mediumLink2", PROFILE.medium);
  setHref("resumeLink2", PROFILE.resume);
});
