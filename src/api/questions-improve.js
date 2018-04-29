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
//         text: "Name..."
//     }
//    ],
//     label:''
// }
//
// BUTTON
// {
//     dialog: "",
//     question: " Let’s start with an easy one. What’s you gender?",
//     answerType: 'Button',
//     answers: [
//         {
//             key: 1,
//             text: "female"
//         },
//         {
//             key: 2,
//             text: "male"
//         }
//     ],
//     label:''
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
//             key: 1,
//             text: '<18',
//             text: '<18',
//             key:1
//         },
//         {
//             key: 2,
//             text: "18-24",
//             text: "18-24",
//             key:2
//         }
//     ],
//   }],
//     label:' '
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
//     label:' '
// }


var questionRecover = [

{
      dialog: "Hi, I’m Barbara! Can I ask you some questions to improve my suggestions?",
      question: "What should I call you? (it doesn't need to be your real name)",
      answerType: 'TextInput',
      answers: [{
              key: 0,
              text: "Name..."
          }
         ],
      label:'name'
  },
  {
      dialog: "Nice to meet you /name...",
      question: "What is your email?",
      answerType: 'TextInput',
      answers: [
          {
                  key: 0,
                  text: "Email..."
              }
         ],
      label:''
  },
  {
      dialog: "",
      question: "What’s your gender?",
      answerType: 'ButtonGender',
      answers: [
          {
              key: 0,
              text: "female"
          },
          {
              key: 1,
              text: "male"
          },
          {
              key: 2,
              text: "custom"
          },
          {
              key: 3,
              text: "prefer not to say"
          }
      ],
      label:''
  },
  {
      dialog: "",
      question: "...and your age?",
      answerType:'Spinner',
      answers: [ {
        spinner: [
          {
              text: '<18',
              value: '<18',
              key:1
          },
          {
              text: "18-24",
              value: "18-24",
              key:2
          },
          {
              text: "25-34",
              value: "25-34",
              key:3
          },
          {
              text: "35-44",
              value: "35-44",
              key:4
          },
          {
              text: "45-54",
              value: "45-54",
              key:5
          },
          {
              text: "55-64",
              value: "55-64",
              key:6
          },
          {
            text: "65-74",
            value: "65-74",
              key:7
          },
          {
            value: "75-84",
            text: "75-84",
              key:8
          },
          {
            text: ">85",
            value: ">85",
              key:9
          }
      ],
    }],
      label:' '
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
      label:' '
  },
  {
      dialog: "That food question",
      question: "In general, how healthy is your overall diet?",
      answerType:'Button',
      answers: [
          {
              key: 5,
              text: "very healthy"
          },
          {
              key: 4,
              text: "healthy"
          },
          {
              key: 3,
              text: "average"
          },
          {
              key: 2,
              text: "unhealthy"
          },
          {
              key: 1,
              text: "very unhealthy"
          }
      ],
      label:' '
  },

  {
      dialog: "Thinking about the past week, /name...",
      question: "How many days did you engage in over 30 minutes of vigorous physical activity (e.g. brisk walking, cycling, sports)?",
      answerType:'Slider',
      answers: [
          {
              min: 0,
              max: 7
          }
      ],
      label:' '
  }
  ,

  {
      dialog: "Now for a nosey one!",
      question: "How often do you wish you had more people to spend time with?",
      answerType:'Button',
      answers: [
          {
              key: 1,
              text: "never"
          },
          {
              key: 2,
              text: "rarely"
          },
          {
              key: 3,
              text: "sometimes"
          },
          {
              key: 4,
              text: "often"
          },
          {
              key: 5,
              text: "almost all the time"
          },
          {
              key: 6,
              text: "pass"
          }
      ],
      label:' '
  },
  {
      dialog: "",
      question: "Which of the following are working at the moment? (Select as many as you want)",
      answerType:'Multiple',
      answers: [ {
        multiple: [
          {
              text: 'money',
              key:1
          },
          {
              text: "sex",
              key:2
          },
          {
              text: "diet",
              key:3
          },
          {
              text: "exercise",
              key:4
          },
          {
              text: "work",
              key:5
          },
          {
              text: "family",
              key:6
          },
          {
              text: "health",
              key:7
          }
      ],
    }],
      label:' '
  },

  {
      dialog: "",
      question: "Which of the following are NOT working at the moment?",
      answerType:'Multiple',
      answers: [ {
        multiple: [
          {
              text: 'money',
              key:1
          },
          {
              text: "sex",
              key:2
          },
          {
              text: "diet",
              key:3
          },
          {
              text: "exercise",
              key:4
          },
          {
              text: "work",
              key:5
          },
          {
              text: "family",
              key:6
          },
          {
              text: "health",
              key:7
          }
      ],
    }],
      label:' '
  },
  {
      dialog: "",
      question: "Which of the following do you enjoy doing?",
      answerType:'Multiple',
      answers: [ {
        multiple: [
          {
              text: 'meeting new people',
              key:1
          },
          {
              text: "time in nature",
              key:2
          },
          {
              text: "using apps",
              key:3
          },
          {
              text: "reading books",
              key:4
          },
          {
              text: "social activities",
              key:5
          },
          {
              text: "music",
              key:6
          },
          {
              text: "dance",
              key:7
          },
          {
              text: "exercise",
              key:7
          }
      ],
    }],
      label:' '
  },
  {
      dialog: "",
      question: "Would you like to hang out with people with similar objectives to you?",
      answerType:'Button',
      answers: [
          {
              key: 1,
              text: "Yes"
          },
          {
              key: 2,
              text: "Maybe"
          },
          {
              key: 3,
              text: "Not really"
          }
      ],
      label:' '
  }
];

export default questionRecover;
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
