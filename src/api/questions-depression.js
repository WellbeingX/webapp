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
        dialog: "Hi, I’m Barbara! Your personal wellbeing assistant",
        question: "Did you know 1 in 10 people have depression? There are plenty of ways to recover, and I’ve got some questions to work out what could work for you",
        answerType: 'Button',
        answers: [{
                key: 0,
                text: "continue"
            }
           ],
        label:''
    },
  {
      dialog: "Firstly, two questions to understand where you’re at, and sorry if the wording feels overly negative.",
      question: "During the past two weeks, how often have you felt down, depressed, irritable or hopeless?",
      answerType:'Button',
      answers: [
          {
              key: 0,
              text: "not at all"
          },
          {
              key: 1,
              text: "several days"
          },
          {
              key: 2,
              text: "over half the days"
          },
          {
              key: 3,
              text: "nearly every day"
          }
      ],
      label:' '
  },
  {
      dialog: "These questions help my advice. No need to answer if they’re uncomfortable",
      question: "During the past two weeks, how often have you not been able to stop or control your worrying?",
      answerType:'Button',
      answers: [
          {
              key: 0,
              text: "not at all"
          },
          {
              key: 1,
              text: "several days"
          },
          {
              key: 2,
              text: "over half the days"
          },
          {
              key: 3,
              text: "nearly every day"
          }
      ],
      label:' '
  },
  {
      dialog: "On to sleep, in the past week...",
      question: "How many nights would you say you’ve had had a good night’s sleep?",
      answerType:'Slider',
      answers: [
          {
            min: 0,
            max: 7,
            key:0
          }
      ],
      label:' '
  },

    {
        dialog: "Thinking about the past week...",
        question: "How many days did you do over 30 minutes of vigorous physical activity? (e.g. brisk walking, cycling, sports)",
        answerType:'Slider',
        answers: [
            {
                min: 0,
                max: 7,
                key:0
            }
        ],
        label:' '
    },
  {
      dialog: "That food question",
      question: "In general, would you like to eat healthier?",
      answerType:'Button',
      answers: [
          {
              key: 0,
              text: "never"
          },
          {
              key: 1,
              text: "rarely"
          },
          {
              key: 2,
              text: "sometimes"
          },
          {
              key: 3,
              text: "often"
          },
          {
              key: 4,
              text: "all the time"
          }
      ],
      label:' '
  },
  {
      dialog: "",
      question: "Over the past 7 days, how often have you felt close to other people?",
      answerType:'Button',
      answers: [
          {
              key: 0,
              text: "never"
          },
          {
              key: 1,
              text: "rarely"
          },
          {
              key: 2,
              text: "some of the time"
          },
          {
              key: 3,
              text: "often"
          },
          {
              key: 4,
              text: "all the time"
          }
      ],
      label:' '
  }
  ,{
      dialog: "",
      question: "How satisfied are you with your sense of purpose in your life? Consider work, religion, raising children etc",
      answerType:'Button',
      answers: [
          {
              key: 0,
              text: "extremely dissatisfied"
          },
          {
              key: 1,
              text: "dissatisfied"
          },
          {
              key: 2,
              text: "about OK"
          },
          {
              key: 3,
              text: "satisfied"
          },
          {
              key: 4,
              text: "very satisfied"
          }
      ],
      label:' '
  },
  {
      dialog: "",
      question: "How often would you describe yourself as feeling relaxed and thinking clearly?",
      answerType:'Button',
      answers: [
          {
              key: 0,
              text: "never"
          },
          {
              key: 1,
              text: "rarely"
          },
          {
              key: 2,
              text: "some of the time"
          },
          {
              key: 3,
              text: "often"
          },
          {
              key: 4,
              text: "all of the time"
          }
      ],
      label:' '
  },

  {
      dialog: "",
      question: "Which of the following do you find useful or enjoyable?",
      answerType:'Multiple',
      answers: [ {
        multiple: [
          {
              text: 'apps',
              key:1
          },
          {
              text: "meeting new people",
              key:2
          },
          {
              text: "time in nature",
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
              text: "listening to podcasts",
              key:6
          },
          {
              text: "learning",
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
          }
      ],
      label:''
  },

  {
      dialog: "",
      question: "...and your age?",
      answerType:'Spinner',
      answers: [ {
        keySpinner :[1,2,3,4,5,6,7,8,9],
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
