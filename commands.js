let whoAmISectionHTML, skillsSectionHTML, contactSectionHTML, helpSectionHTML;

const getRoles = () => {
  const about = [
    {
      aboutTitle: "",
      aboutSection: [
        "Software Engineer at Dropbox",
        "Current team: Metrics (telemetry and observability)",
        "Previous teams: Code Workflows (source control hosting and search)",
      ],
    },
    {
      aboutTitle: "Interests",
      aboutSection: [
        "Roles: Infrastructure/backend on actively scaling teams",
        "Languages: Go, Rust, Julia",
        "Technologies: Kubernetes, AWS/GCP, Cassandra, ScyllaDB",
      ],
    },
    {
      aboutTitle: "Location",
      aboutSection: [
        "Currently based in Boston, MA (not open to relocation)",
        "Previously based in Los Angeles, CA and Seattle, WA",
      ],
    },
    {
      aboutTitle: "Education",
      aboutSection: [
        "Bachelors of Science, Computer Science at Harvey Mudd College",
        "Concentration in Psychology at Harvey Mudd College",
      ],
    },
  ];
  let renderData = `<div class="command-result"><dl>`;
  about.forEach((item) => {
    renderData += `<dt class="data-dt">${item.aboutTitle}<dt>`;
    item.aboutSection.forEach((bullet) => {
      renderData += `<dd class="data-dd"> — ${bullet}</dd>`;
    });
  });
  renderData += "</dl></div>";

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

  renderData += `<dt class="data-dt">Languages</dt>`;
  languages.forEach((language) => {
    renderData += `<dd class="data-dd">${language}</dd>`;
  });

  renderData += `<dt class="data-dt">Tools/Frameworks</dt>`;
  tools.forEach((tool) => {
    renderData += `<dd class="data-dd"> — ${tool}</dd>`;
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
      contactUrl: "mailto:kiphenglim@gmail.com",
    },
    {
      contactTitle: "github",
      contactPlace: "github.com/kiphenglim",
      contactUrl: "https://www.github.com/kiphenglim",
    },
    {
      contactTitle: "linkedin",
      contactPlace: "linkedin.com/in/kiphenglim",
      contactUrl: "https://www.linkedin.com/in/kiphenglim",
    },
  ];

  contacts.forEach((item) => {
    renderData += `<dt class="data-dt">${item.contactTitle}<dt>
    <dd class="data-dd">
      — <a href="${item.contactUrl}" target="_blank" class="data-link">${item.contactPlace}</a>
    </dd>`;
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
