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


var quizQuestions = [

  {
      dialog: "Hi, I’m Barbara.",
      question: "My job is to help people like you find the right things to boost your state of mind. Will you try me out?",
      answerType: 'Button',
      answers: [
          {
              type: "1",
              content: "Yes"
          }
      ],
      comments:''
  },
  {
      dialog: "Thanks! I'm looking forward to working with you.",
      question: "What should I call you? (it doesn't need to be your real name)",
      answerType: 'TextInput',
      answers: [{
              type: 0,
              content: "Name..."
          }
         ],
      comments:''
  },
  {
      dialog: "Ok, /name, let's get started!",
      question: " I have nine short questions drawn up by experts. Answering these will help narrow down your options to a useful shortlist.",
      answerType: 'Button',
      answers: [
          {
              type: "1",
              content: "I'm ready"
          }
      ],
      comments:''
  },
  {
      dialog: "",
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
      dialog: "",
      question: "Which of these words best describes how you currently feel?",
      answerType:'Button',
      answers: [
          {
              type: "5",
              content: "low"
          },
          {
              type: "4",
              content: "anxious"
          },
          {
              type: "3",
              content: "stressed"
          },
          {
              type: "2",
              content: "unhappy"
          },
          {
              type: "1",
              content: "annoyed"
          },
          {
              type: "6",
              content: "none of the above"
          }
      ],
      comments:' '
  },
  {
      dialog: "On to sleep.",
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
      dialog: "This may be harder to answer.",
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
      dialog: "Great!",
      question: "/name, if you sign up below I'll send you a report, and I'll keep you updated with relevant tips and solutions.",
      answerType:'Button',
      answerType: 'TextInput',
      answers: [{
              type: 0,
              content: "Email..."
          }
         ],
      comments:''
  }];

export default quizQuestions;
