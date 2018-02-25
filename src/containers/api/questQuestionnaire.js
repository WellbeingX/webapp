var quizQuestions = [

  {
      dialog: "",
      question: " Hi, I’m Barbara, your personal assistant. What's your name?",
      answerType: 'TextInput',
      answers: [{
          type: 0,
          content: "Name..."
      }
     ],
      comments:''
  },
  {
      dialog: "Great to meet you, /name! ",
      question: "I have thousands of solutions for you. Can I ask eight initial questions to narrow them down?",
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
              content: "not sure"
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
      dialog: "",
      question: "Nearly there, /name, we’re on to physical. Is there a health condition or concern that impacts your happiness currently?",
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
  },
  {
      dialog: "",
      question: "What's your email?",
      answerType:'TextInput',
      answers: [{
          type: 0,
          content: "Email..."
      }],
      comments:' '
  }];

export default quizQuestions;
