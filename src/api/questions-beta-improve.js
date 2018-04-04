// PROTOTYPES

// REMEMBER TO CHECK
// questionCounter -> questionStart
// questionName -> nameQuestion

// TEXT INPUT
// {
//     dialog: "",
//     question: " Hi, I’m Barbara, your personal assistant. What's your name?",
//     answerType: 'TextInput',
//     answers: [{
//         type: 0,
//         content: "Name..."
//     }
//    ],
//     comments:''
// }
//
// BUTTON
// {
//     dialog: "",
//     question: " Let’s start with an easy one. What’s you gender?",
//     answerType: 'Button',
//     answers: [
//         {
//             type: "1",
//             content: "female"
//         },
//         {
//             type: "2",
//             content: "male"
//         }
//     ],
//     comments:''
// }
//
// SPINNER
// {
//     dialog: "",
//     question: "...and your age?",
//     answerType:'Spinner',
//     answers: [ {
//       spinner: [
//         {
//             type: "1",
//             text: '<18',
//             value: '<18',
//             key:1
//         },
//         {
//             type: "2",
//             text: "18-24",
//             value: "18-24",
//             key:2
//         }
//     ],
//   }],
//     comments:' '
// }
//
// SLIDER
// {
//     dialog: "",
//     question: "Thinking about the past week, /name, how many days did you engage in over 30 minutes of vigorous physical activity, e.g.brisk walking or cycling?",
//     answerType:'Slider',
//     answers: [
//         {
//             min: 0,
//             max: 7
//         }
//     ],
//     comments:' '
// }


var questionBetaImprove = [
  {
      dialog: "BETA-TEST Feedback",
      question: "Based on the previous landing page, what do you think this website will provide?",
      answerType: 'Feedback',
      answers: [
          {
              type: "1",
              content: "Yes"
          }
      ],
      comments:''
  },
    {
        dialog: "Hi, I’m Barbara! My job is to help people like you find the right things",
        question: "What should I call you? (it doesn't need to be your real name)",
        answerType: 'TextInput',
        answers: [{
                type: 0,
                content: "Name..."
            }
           ],
        comments:'name'
    },
  {
      dialog: "",
      question: "What is your email?",
      answerType: 'TextInput',
      answers: [
          {
                  type: 0,
                  content: "Email..."
              }
         ],
      comments:''
  },
  {
      dialog: "Ok, /name, I have a few questions that will help to match you with the right things",
      question: "Starting with two super easy questions... what’s you gender?",
      answerType: 'Button',
      answers: [
          {
              type: "1",
              content: "female"
          },
          {
              type: "2",
              content: "male"
          },
          {
              type: "3",
              content: "other"
          }
      ],
      comments:''
  },
  {
      dialog: "",
      question: "...and your age?",
      answerType:'Spinner',
      answers: [ {
        spinner: [
          {
              type: "1",
              text: '<18',
              value: '<18',
              key:1
          },
          {
              type: "2",
              text: "18-24",
              value: "18-24",
              key:2
          },
          {
              type: "3",
              text: "25-34",
              value: "25-34",
              key:3
          },
          {
              type: "4",
              text: "35-44",
              value: "35-44",
              key:4
          },
          {
              type: "5",
              text: "45-54",
              value: "45-54",
              key:5
          },
          {
              type: "6",
              text: "55-64",
              value: "55-64",
              key:6
          },
          {
              type: "7",
              content: ">65",
              value: ">65",
              key:7
          }
      ],
    }],
      comments:' '
  },

  {
      dialog: "Over the past two weeks...",
      question: "How many times have you been bothered by having little interest or pleasure in doing things?",
      answerType:'Button',
      answers: [
          {
              type: "5",
              content: "nearly every day"
          },
          {
              type: "4",
              content: "more than half days"
          },
          {
              type: "3",
              content: "several days"
          },
          {
              type: "2",
              content: "not at all"
          }
      ],
      comments:' '
  },
  {
      dialog: "Over the past two weeks...",
      question: "How many times have you been bothered by feeling down, depressed and hopeless?",
      answerType:'Button',
      answers: [
          {
              type: "5",
              content: "nearly every day"
          },
          {
              type: "4",
              content: "more than half days"
          },
          {
              type: "3",
              content: "several days"
          },
          {
              type: "2",
              content: "not at all"
          }
      ],
      comments:' '
  },
  {
      dialog: "On to sleep",
      question: "In the past week, how many nights have you had a problem with your sleep?",
      answerType:'Slider',
      answers: [
          {
            min: 0,
            max: 7
          }
      ],
      comments:' '
  },
  {
      dialog: "That food question",
      question: "In general, how healthy is your overall diet?",
      answerType:'Button',
      answers: [
          {
              type: "5",
              content: "very healthy"
          },
          {
              type: "4",
              content: "healthy"
          },
          {
              type: "3",
              content: "average"
          },
          {
              type: "2",
              content: "unhealthy"
          },
          {
              type: "1",
              content: "very unhealthy"
          }
      ],
      comments:' '
  },

  {
      dialog: "",
      question: "Thinking about the past week, /name, how many days did you engage in over 30 minutes of vigorous physical activity (e.g. brisk walking, cycling, sports)?",
      answerType:'Slider',
      answers: [
          {
              min: 0,
              max: 7
          }
      ],
      comments:' '
  }
  ,

  {
      dialog: "Now for a nosey one!",
      question: "How often do you wish you had more people to spend time with?",
      answerType:'Button',
      answers: [
          {
              type: "1",
              content: "never"
          },
          {
              type: "2",
              content: "rarely"
          },
          {
              type: "3",
              content: "sometimes"
          },
          {
              type: "4",
              content: "often"
          },
          {
              type: "5",
              content: "almost all the time"
          },
          {
              type: "6",
              content: "pass"
          }
      ],
      comments:' '
  },
  {
      dialog: "This may be harder to answer",
      question: "Think about what helps you wake up in the morning: work, religion, caring, raising kids etc. How satisfied are you with your life right now?",
      answerType:'Slider',
      answers: [
          {
              min: 0,
              max: 7
          }
      ],
      comments:' '
  },
  {
      dialog: "",
      question: "Which of the following are working at the moment? (Select as many as you want)",
      answerType:'Multiple',
      answers: [ {
        multiple: [
          {
              type: "1",
              text: 'money',
              value: 'money',
              key:1
          },
          {
              type: "2",
              text: "sex",
              value: "sex",
              key:2
          },
          {
              type: "3",
              text: "diet",
              value: "diet",
              key:3
          },
          {
              type: "4",
              text: "exercise",
              value: "exercise",
              key:4
          },
          {
              type: "5",
              text: "work",
              value: "work",
              key:5
          },
          {
              type: "6",
              text: "family",
              value: "family",
              key:6
          },
          {
              type: "7",
              text: "health",
              value: "health",
              key:7
          }
      ],
    }],
      comments:' '
  },

  {
      dialog: "",
      question: "Which of the following are NOT working at the moment?",
      answerType:'Multiple',
      answers: [ {
        multiple: [
          {
              type: "1",
              text: 'money',
              value: 'money',
              key:1
          },
          {
              type: "2",
              text: "sex",
              value: "sex",
              key:2
          },
          {
              type: "3",
              text: "diet",
              value: "diet",
              key:3
          },
          {
              type: "4",
              text: "exercise",
              value: "exercise",
              key:4
          },
          {
              type: "5",
              text: "work",
              value: "work",
              key:5
          },
          {
              type: "6",
              text: "family",
              value: "family",
              key:6
          },
          {
              type: "7",
              text: "health",
              value: "health",
              key:7
          }
      ],
    }],
      comments:' '
  },
  {
      dialog: "",
      question: "Which of the following do you enjoy doing?",
      answerType:'Multiple',
      answers: [ {
        multiple: [
          {
              type: "1",
              text: 'meeting new people',
              value: 'meeting new people',
              key:1
          },
          {
              type: "2",
              text: "time in nature",
              value: "time in nature",
              key:2
          },
          {
              type: "3",
              text: "using apps",
              value: "using apps",
              key:3
          },
          {
              type: "4",
              text: "reading books",
              value: "reading books",
              key:4
          },
          {
              type: "5",
              text: "social activities",
              value: "social activities",
              key:5
          },
          {
              type: "6",
              text: "music",
              value: "music",
              key:6
          },
          {
              type: "7",
              text: "dance",
              value: "dance",
              key:7
          }
      ],
    }],
      comments:' '
  },
  {
      dialog: "BETA-TEST Feedback",
      question: " Was answering the questions easy?",
      answerType:'FeedbackButton',
      answers: [ {
        multiple: [
          {
              type: "1",
              content: "Yes",
              text: "Yes",
              value: "Yes",
              key:1
          },
          {
              type: "2",
              content: "Kind of",
              text: "Kind of",
              value: "Kind of",
              key:2
          },
          {
              type: "3",
              content: "No",
              text: "No",
              value: "No",
              key:3
          }
        ],
      }],
      comments:' '
  },
  {
      dialog: "BETA-TEST Feedback",
      question: " Were there any question you did not understand?",
      answerType:'FeedbackButton',
      answers: [ {
        multiple: [
          {
              type: "1",
              content: "Yes",
              text: "Yes",
              value: "Yes",
              key:1
          },
          {
              type: "2",
              content: "A few",
              text: "A few",
              value: "A few",
              key:2
          },
          {
              type: "3",
              content: "No",
              text: "No",
              value: "No",
              key:3
          }
        ],
      }],
      comments:' '
  },
  {
      dialog: "BETA-TEST Feedback",
      question: " Did you like being called by name?",
      answerType:'FeedbackButton',
      answers: [ {
        multiple: [
          {
              type: "1",
              content: "Yes",
              text: "Yes",
              value: "Yes",
              key:1
          },
          {
              type: "2",
              content: "No",
              text: "No",
              value: "No",
              key:2
          }
        ],
      }],
      comments:' '
  },
  {
      dialog: "BETA-TEST Feedback",
      question: " Would you ask:",
      answerType:'FeedbackButton',
      answers: [ {
        multiple: [
          {
              type: "1",
              content: "Less quesitons",
              text: "Less quesitons",
              value: "Less quesitons",
              key:1
          },
          {
              type: "2",
              content: "Same",
              text: "Same",
              value: "Same",
              key:2
          },
          {
              type: "3",
              content: "More questions",
              text: "More questions",
              value: "More questions",
              key:3
          }
        ],
      }],
      comments:' '
  },
  {
      dialog: "BETA-TEST Feedback",
      question: " What do you expect to see after all the questions?",
      answerType: 'Feedback',
      answers: [
          {
              type: "1",
              content: "Yes"
          }
      ],
      comments:''
  }];

export default questionBetaImprove;
//
// In the past week, how often have you been thinking clearly? (a five ways to wellbeing question)
// None of the time
// Rarely
// Some of the time
// Often
// All of the time
//
// How often do you wake up feeling positive or energised about the day ahead?
// Most days
// Some days
// Rarely
// Almost never
//
// In the past week, how my times did you feel you were not in control of your stress or anger?
// Most days
// Some days
// Rarely
// Almost never
