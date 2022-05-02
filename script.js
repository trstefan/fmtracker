const projects = [
  "3-col-cards",
  "four-card-feature-section",
  "sunnyside-agency-landing-page-main",
  "testimonials-grid-section-main",
  "nft-preview-card-component-main",
];

const list = document.getElementById("list-projects");

projects.forEach((project, i) => {
  const projectCard = document.createElement("li");
  const projectLink = document.createElement("a");

  const img = document.createElement("img");
  img.src = `/${project}/design/desktop-design.jpg`;

  projectLink.href = `/${project}/index.html`;
  projectLink.target = "_blank";
  projectLink.innerText = `${i + 1}.${formatName(project)}`;
  projectLink.prepend(img);
  // projectCard.appendChild(img);
  projectCard.appendChild(projectLink);

  list.appendChild(projectCard);
});

function formatName(name) {
  return name
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
