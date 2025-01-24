let whoAmISectionHTML,
  skillsSectionHTML,
  projectsSectionHTML,
  contactSectionHTML,
  helpSectionHTML;

const getRoles = () => {
  let renderData = `<div class="command-result">`;
  renderData += `<p class="data-li">Infrastructure software engineer</li>`;
  renderData += `<p class="data-li">Based in Boston, MA</li>`;
  renderData += `<p class="data-li">Formerly Los Angeles, Seattle</li>`;
  renderData += `<p class="data-li">Current role: SWE II @ Dropbox</li>`;
  renderData += `<p class="data-li">Education: CS @ Harvey Mudd College</li>`;
  renderData += "</div>";

  return renderData;
};

const getSkills = () => {
  let renderData = `<div class="command-result">`;

  skills.forEach((skill) => {
    renderData += `<li class="data-li">${skill.title}</li>`;
  });
  renderData += "</div>";

  return renderData;
};

const getProjects = () => {
  let renderData = `<div class="command-result"><table class="data-table">`;

  projects.forEach((project) => {
    renderData += `<tr>
    <th class="data-name-th"><a href="${project.url}" target="_blank" class="data-link">${project.title}</a></th>
    <td class="data-description-td">${project.description}</td>
  </tr>`;
  });
  renderData += "</table></div>";

  return renderData;
};

const getContact = () => {
  let renderData = `<div class="command-result"><dl>`;

  const contacts = [
    {
      contactTitle: "email",
      contactPlace: email,
    },
    {
      contactTitle: "github",
      contactPlace: "@BrijenMakwana",
    },
    {
      contactTitle: "hashnode",
      contactPlace: "brijen.hashnode.dev",
    },
    {
      contactTitle: "instagram",
      contactPlace: "I am not dependent on the approval of others.",
    },
    {
      contactTitle: "twitter",
      contactPlace: "No time to meddle in other people's lives",
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
      command: "clear",
      description: "Clears the terminal of all output",
    },
    {
      command: "cmd/ctrl + k",
      description: "Keyboard shortcut to clear the terminal",
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
  projectsSectionHTML = getProjects();
  contactSectionHTML = getContact();
  helpSectionHTML = getHelp();
};

getPortfolio();

export {
  whoAmISectionHTML,
  skillsSectionHTML,
  projectsSectionHTML,
  contactSectionHTML,
  helpSectionHTML,
};
