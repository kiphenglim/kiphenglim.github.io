let whoAmISectionHTML, skillsSectionHTML, contactSectionHTML, helpSectionHTML;

const getRoles = () => {
  const about = [
    "Software Engineer at Dropbox",
    "Based in Boston, MA",
    "BSc Computer Science from Harvey Mudd College",
  ];
  const renderData = `<div class="command-result">`;
  about.forEach((line) => {
    renderData += `<li class="data-li">${line}</li>`;
  });
  renderData += "</div>";

  return renderData;
};

const getSkills = () => {
  let renderData = `<div class="command-result"><dl>`;
  const languages = ["Python", "Go", "JavaScript"];
  const tools = [
    "Git",
    "GitHub",
    "Bazel",
    "Protocol Buffers",
    "Cassandra",
    "React",
  ];

  renderData += `<dt>Languages</dt>`;
  languages.forEach((language) => {
    renderData += `<dd class="data-li">${language}</dd>`;
  });

  renderData += `<dt>Tools/Frameworks</dt>`;
  tools.forEach((tool) => {
    renderData += `<dd class="data-li">${tool}</dd>`;
  });
  renderData += "</dl></div>";

  return renderData;
};

const getContact = () => {
  let renderData = `<div class="command-result"><dl>`;

  const contacts = [
    {
      contactTitle: "email",
      contactPlace: "kiphenglim@gmail.com",
    },
    {
      contactTitle: "github",
      contactPlace: "github.com/kiphenglim",
    },
    {
      contactTitle: "linkedin",
      contactPlace: "https://linkedin.com/in/kiphenglim",
    },
  ];

  contacts.forEach((item) => {
    renderData += `<dt class="data-dt">${item.contactTitle}<dt><dd class="data-dd"> - ${item.contactPlace}</dd>`;
  });
  renderData += "</dl></div>";

  return renderData;
};

const getHelp = () => {
  let renderData = `<div class="command-result"><dl>`;

  const availableCommands = [
    {
      command: "whoami",
      description: "What I do",
    },
    {
      command: "skills",
      description: "What tech stacks I use",
    },
    {
      command: "projects",
      description: "Yeah, I've made some really cool stuff, Wanna see!!",
    },
    {
      command: "contact",
      description: "Want to say something?",
    },
    {
      command: "clear (^L)",
      description: "Clears the terminal of all output",
    },
  ];

  availableCommands.forEach((cmd) => {
    renderData += `<dt class="data-dt">${cmd.command}<dt><dd class="data-dd"> - ${cmd.description}</dd>`;
  });
  renderData += "</dl></div>";

  return renderData;
};

const getPortfolio = () => {
  whoAmISectionHTML = getRoles();
  skillsSectionHTML = getSkills();
  contactSectionHTML = getContact();
  helpSectionHTML = getHelp();
};

getPortfolio();

export {
  whoAmISectionHTML,
  skillsSectionHTML,
  contactSectionHTML,
  helpSectionHTML,
};
