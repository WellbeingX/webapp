var quizQuestions = [
  {
      dialog: "Hi, I’m Filipo, your personal finder. I have thousands of solutions for you, from books to films to laughter clubs to therapists. ",
      question: "Can I ask you eight questions to narrow them down?",
      answerType: 'Button',
      answers: [
          {
              type: 1,
              content: "Yes"
          },
          {
              type: 2,
              content: "Skip"
          }
      ],
      comments:'It is very important to do stuff because you are fat'
  },
  {
      dialog: "",
      question: " Thanks for choosing to work with my.  What should I call you?(it doesn’t have to be your real name)",
      answerType: 'TextInput',
      answers: [{
          type: 0,
          content: ""
      }
     ],
      comments:''
  },
  {
      dialog: "Great to meet you, /name! My questions have been put together by clever people, and I’ve then made them a little more human. Remember, you can always skip to a non-personalised directory at any stage.",
      question: "",
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
      question: " Let’s start with an easy one. What’s you gender?",
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
              content: "<18"
          },
          {
              type: "2",
              content: "18-24"
          },
          {
              type: "3",
              content: "25-34"
          },
          {
              type: "4",
              content: "35-44"
          },
          {
              type: "5",
              content: "45-54"
          },
          {
              type: "6",
              content: "55-64"
          },
          {
              type: "7",
              content: ">65"
          }
      ],
    }],
      comments:' '
  },
  {
      dialog: " ",
      question: " Your employment status matters as well….",
      answerType:'Button',
      answers: [
          {
              type: "1",
              content: "self-employed"
          },
          {
              type: "2",
              content: "employed"
          },
          {
              type: "3",
              content: "student"
          },
          {
              type: "4",
              content: "unemployed"
          },
          {
              type: "5",
              content: "homemaker"
          },
          {
              type: "6",
              content: "retired"
          },
          {
              type: "7",
              content: "other"
          }
      ],
      comments:' '
  },
  {
      dialog: " ",
      question: "Thinking about the past week, Alfredo, how many days did you engage in over 30 minutes of vigorous physical activity, e.g.brisk walking or cycling?",
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
      dialog: " ",
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
      dialog: " ",
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
      dialog: " ",
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
              content: "not sure"
          }
      ],
      comments:' '
  },
  {
      dialog: " ",
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
      dialog: " ",
      question: "Nearly there, Alfredo, we’re on to physical. Is there a health condition or concern that impacts your happiness currently?",
      answerType:'Button',
      answers: [
          {
              type: "1",
              content: "not at all"
          },
          {
              type: "2",
              content: "yes, but not major"
          },
          {
              type: "3",
              content: "very much so"
          }
      ],
      comments:' '
  }];

export default quizQuestions;
