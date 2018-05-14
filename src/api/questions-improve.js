// PROTOTYPES

// REMEMBER TO CHECK
// questionCounter -> questionStart
// questionName -> nameQuestion

// TEXT INPUT
// {
//     dialog: "",
//     question: " Hi, I’m Zoe, your personal assistant. What's your name?",
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
import {SLEEP, EXERCISE, DIET, SOCIAL, PURPOSE, STRESS, AGE} from './labels'


var questionRecover = [
{
      dialog: "Hi, I’m Zoe! Your personal wellbeing assistant",
      question: "I’m going to ask you some questions so we can get an idea of your strengths. Then we’ll make a wellbeing map and find what's best for you.",
      answerType: 'Button',
      answers: [{
              key: 0,
              text: "continue"
          }
         ],
      label:''
  },
  {
      dialog: "Let's talk about sleep...",
      question: "How often do you have difficulty getting asleep, staying asleep, or getting enough sleep?",
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
          },
          {
              key: 4,
              text: "can't say"
          }
      ],
      label:SLEEP
  },

    {
        dialog: "",
        question: "In a typical week, how many days do you do at least 30 minutes of exercise?",
        answerType:'Slider',
        answers: [
            {
                min: 0,
                max: 7,
                key:0
            }
        ],
        label:EXERCISE
    },
  {
      dialog: "That food question",
      question: "In general, would you like to have an healthier diet?",
      answerType:'Button',
      answers: [
          {
              key: 0,
              text: "Yes"
          },
          {
              key: 1,
              text: "No"
          }
      ],
      label:DIET
  },
  {
        dialog: "The quality of our social connections is a powerful predictor of mental and physical wellbeing",
        question: "How often do you feel your social connections should be more nourishing or fulfilling?",
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
      label:SOCIAL
  }
  ,{
      dialog: "Let's look at your daily activities...",
      question: "With respect the activities you do over the course of a typical day - whether it be work, study, pastimes, taking care of children or anything else - How often do you wish that these could be more satisfying or enjoyable?",
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
      label:PURPOSE
  },
  {
      dialog: "",
      question: "To what degree are you managing your stress levels well?",
      answerType:'Button',
      answers: [
          {
              key: 0,
              text: "not at all"
          },
          {
              key: 1,
              text: "somewhat"
          },
          {
              key: 2,
              text: "well"
          },
          {
              key: 3,
              text: "very well"
          }
      ],
      label:STRESS
  },

  {
      dialog: "",
      question: "Which of the following areas of your life do you feel need improvement?",
      answerType:'Multiple',
      answers: [ {
        multiple: [
          {
              text: 'family or other relationships',
              key:0
          },
          {
              text: "finances",
              key:1
          },
          {
              text: "sex",
              key:2
          },
          {
              text: "living arrengement/housing issues",
              key:3
          },
          {
              text: "mental health",
              key:4
          },
          {
              text: "pleasurable activities",
              key:5
          }
      ],
    }],
      label:' '
  },

  {
      dialog: "",
      question: "Which of the following do you find useful or enjoyable?",
      answerType:'Multiple',
      answers: [ {
        multiple: [
          {
              text: 'reading books',
              key:0
          },
          {
              text: "meeting new people",
              key:1
          },
          {
              text: "time in nature",
              key:2
          },
          {
              text: "apps",
              key:3
          },
          {
              text: "social activities",
              key:4
          },
          {
              text: "listening to podcasts",
              key:5
          },
          {
              text: "learning",
              key:6
          },
          {
              text: "exercise",
              key:6
          },
          {
              text: "contributing to the community",
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
              text: "other"
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
              key:0
          },
          {
              text: "18-24",
              value: "18-24",
              key:1
          },
          {
              text: "25-34",
              value: "25-34",
              key:2
          },
          {
              text: "35-44",
              value: "35-44",
              key:3
          },
          {
              text: "45-54",
              value: "45-54",
              key:4
          },
          {
              text: "55-64",
              value: "55-64",
              key:5
          },
          {
            text: "65-74",
            value: "65-74",
              key:6
          },
          {
            value: "75-84",
            text: "75-84",
              key:7
          },
          {
            text: ">85",
            value: ">85",
              key:8
          }
      ],
    }],
      label:AGE
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
