type Questions = {
  quizName: string;

  question: string;
  plusPoint: number;
  negativePoint: number;
  rightOption: string;
  wrongOption: string[];
};

type Quiz = {
  questions: Questions[];
};

export const quizObj: Quiz = {
  questions: [
    {
      quizName: "Git quiz",

      question: "Q.1) Start your react app!!",

      plusPoint: 4,
      negativePoint: 1,

      rightOption: "npm start",
      wrongOption: ["npm install", "git init", "npm i node_modules"],
    },
    {
      quizName: "Git quiz",

      question: "Q.2) how to terminate the server??",

      plusPoint: 4,
      negativePoint: 1,

      rightOption: "ctrl + c",
      wrongOption: ["alt + l", "ctrl + f", "ctrl + x"],
    },
    {
      quizName: "Git quiz",

      question:
        "Q.3) how to add a change in the working directory to the staging area in single file",
      plusPoint: 4,
      negativePoint: 1,

      rightOption: "git add ",
      wrongOption: ["git add .", "git log", "git push"],
    },
    {
      quizName: "Git quiz",

      question: "Q.4) how to commit a changes in local machine?? ",

      plusPoint: 4,
      negativePoint: 1,

      rightOption: "git commit -m commit_maessage",
      wrongOption: [
        "git commit -M commit_maessage",
        "git commit -f commit_maessage",
        "git commit commit_maessage",
      ],
    },
    {
      quizName: "Git quiz",

      question: "Q.5) Which command is used to start a new repository??",
      plusPoint: 4,
      negativePoint: 1,

      rightOption: "git init",
      wrongOption: ["git start", "git diff", "git push"],
    },
    {
      quizName: "Git quiz",

      question:
        "Q.6) Which command shows the file differences which are not yet staged??",

      plusPoint: 4,
      negativePoint: 1,

      rightOption: "git diff",
      wrongOption: ["git add .", "git log", "git checkout"],
    },
    {
      quizName: "Git quiz",

      question:
        "Q.7) Which command discards all history and goes back to the specified commit??",
      plusPoint: 4,
      negativePoint: 1,

      rightOption: "git reset –hard [commit]",
      wrongOption: [
        "git reset –force [commit]",
        "git init –hard [commit]",
        "git –force [commit]",
      ],
    },
    {
      quizName: "Git quiz",

      question:
        "Q.8) Which command is used to list the version history for the current branch.??",
      plusPoint: 4,
      negativePoint: 1,

      rightOption: "git log",
      wrongOption: ["git status", "git diff", "git history"],
    },
    {
      quizName: "Git quiz",

      question: "Q.9) Which command shows local list of branches??",
      plusPoint: 4,
      negativePoint: 1,

      rightOption: "git branch",
      wrongOption: ["git checkout", "git log", "git checkout"],
    },
    {
      quizName: "Git quiz",

      question: "Q.10)Which command deletes the feature branch??",
      plusPoint: 4,
      negativePoint: 1,

      rightOption: "git branch -d [branch name]",
      wrongOption: [
        "git dlt –f [branch name]",
        "git init –h [branch name]",
        "git branch –f [branch name]",
      ],
    },
  ],
};
