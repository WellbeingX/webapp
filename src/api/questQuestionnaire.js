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
      dialog: "",
      question: "Hi, I’m Barbara, your personal wellbeing assistant. My obsession is helping people like you find the things that can boost your state of mind. From books to films, from laughter clubs to therapists. Will you try me out?",
      answerType: 'Button',
      answers: [
          {
              type: "1",
              content: "yes"
          },
          {
              type: "2",
              content: "skip"
          }
      ],
      comments:''
  },
  {
      dialog: "",
      question: "Thanks, I’m looking forward to working with you. What should I call you? (it doesn’t need to be your real name)",
      answerType: 'TextInput',
      answers: [{
              type: 0,
              content: "Name..."
          }
         ],
      comments:''
  },
  {
      dialog: "Ok, /name, we’re motoring.",
      question: " I have eight questions drawn up experts, and translated into normal english by yours truly. These will help narrow down the options to a useful shortlist.",
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
      question: "Thinking about the past week, /name, how many days did you engage in over 30 minutes of vigorous physical activity, e.g.brisk walking or cycling?",
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
      dialog: "",
      question: "That food question. In general, how healthy is your overall diet?",
      answerType:'Button',
      answers: [
          {
              type: "1",
              content: "excellent"
          },
          {
              type: "2",
              content: "very good"
          },
          {
              type: "3",
              content: "good"
          },
          {
              type: "4",
              content: "fair"
          },
          {
              type: "5",
              content: "poor"
          }
      ],
      comments:' '
  },
  {
      dialog: "",
      question: "On to sleep. In the past week, how many nights have you had a problem with your sleep?",
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
      question: "Now for a really nosey one! How often do you wish you had more people to spend time with?",
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
      dialog: "",
      question: "This may be harder to answer. How satisfied are you with the purpose in your life? Think about what helps you wake up in the morning: work, religion, caring, raising kids etc",
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
      dialog: "It has been a pleasure, /name. ",
      question: "If you sign up below I’ll send you a report, and I’ll keep you updated on relevant tips and solutions.",
      answerType:'TextInput',
      answers: [{
          type: 0,
          content: "Email..."
      }],
      comments:' '
  }];

export default quizQuestions;
