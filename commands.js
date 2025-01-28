let whoAmISectionHTML,
  skillsSectionHTML,
  contactSectionHTML,
  likesSectionHTML,
  helpSectionHTML;

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
        "Technologies: Kubernetes, AWS/GCP, Databases (Cassandra, ScyllaDB, Redis)",
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
      renderData += `<dd class="data-dd"> ${bullet}</dd>`;
    });
  });
  renderData += "</dl></div>";

  return renderData;
};

const getSkills = () => {
  let renderData = `<div class="command-result"><dl>`;
  const languages = [
    "Python",
    "Go",
    "Shell (Bash/Zsh)",
    "C++",
    "Java",
    "JavaScript",
  ];
  const tools = [
    "Git",
    "GitHub",
    "Bazel",
    "Protocol Buffers",
    "Cassandra",
    "React",
    "Bootstrap",
  ];

  renderData += `<dt class="data-dt">Languages</dt>`;
  languages.forEach((language) => {
    renderData += `<dd class="data-dd">${language}</dd>`;
  });

  renderData += `<dt class="data-dt">Tools/Frameworks</dt>`;
  tools.forEach((tool) => {
    renderData += `<dd class="data-dd"> ${tool}</dd>`;
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
      <a href="${item.contactUrl}" target="_blank" class="data-link">${item.contactPlace}</a>
    </dd>`;
  });
  renderData += "</dl></div>";

  return renderData;
};

const getLikes = () => {
  let renderData = `<div class="command-result"><dl>`;
  const likes = [
    {
      topic: "Programming languages",
      likes: "Go, Julia",
      dislikes: "Javascript",
    },
    {
      topic: "Linux commands",
      likes: "man, history, ripgrep",
      dislikes: "2>&1, tar",
    },
    {
      topic: "Editors",
      likes: "Zed, Emacs",
      dislikes: "Nano",
    },
    {
      topic: "Shell flavours",
      likes: "Zsh",
      dislikes: "Powershell",
    },
    {
      topic: "Regular Expression syntax",
      likes: "negative lookaheads",
      dislikes: "also negative lookaheads",
    },
    {
      topic: ".*",
      likes: "cats, hot pot, cold weather",
      dislikes: "lukewarm water, poor colour contrast, slow walkers",
    },
  ];

  likes.forEach((like) => {
    renderData += `<dt class="data-dt">${like.topic}<dt>
    <dd class="data-dd">
      Likes: ${like.likes}
    </dd>;
    <dd class="data-dd">
      Dislikes: ${like.dislikes}
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
      description: "About me",
    },
    {
      command: "skills",
      description: "Tech stack",
    },
    {
      command: "contact",
      description: "Reach out",
    },
    {
      command: "likes",
      description: "Likes and dislikes",
    },
    {
      command: "clear (^L)",
      description: "Clear terminal",
    },
  ];

  availableCommands.forEach((cmd) => {
    renderData += `<dt class="data-dt">${cmd.command}<dt><dd class="data-dd"> ${cmd.description}</dd>`;
  });
  renderData += "</dl></div>";

  return renderData;
};

const getPortfolio = () => {
  whoAmISectionHTML = getRoles();
  skillsSectionHTML = getSkills();
  contactSectionHTML = getContact();
  likesSectionHTML = getLikes();
  helpSectionHTML = getHelp();
};

getPortfolio();

export {
  whoAmISectionHTML,
  skillsSectionHTML,
  contactSectionHTML,
  likesSectionHTML,
  helpSectionHTML,
};
