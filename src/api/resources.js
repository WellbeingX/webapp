import {SLEEP, EXERCISE, DIET, SOCIAL, PURPOSE, STRESS} from './labels'


var Resources = [
  {
    solutionId:'0001',
    label:SLEEP,
    labels:[SLEEP,STRESS],
    genderTag:['male','female','other'],
    ageTag:['18-24','25-34','35-44','45-54','55-64','65+'],
    platform:['iOS','Android'],
    title:'Sleepio',
    price:'Relevant Free',
    categ:['Website','App'],
    description:'Sleepio helps you improve your sleep with proven techniques developed over 35 years of research',
    imgURL:'https://is3-ssl.mzstatic.com/image/thumb/Purple118/v4/08/29/9a/08299a79-d947-294d-7b99-d75d8ac7706f/mzl.vxhykzvc.png/246x0w.jpg',
    website:'https://www.sleepio.com',
    comments:'B: "This app has worked to improve sleep for people similar to you, I hope you do not mind the professor!"'
  },
{
    solutionId:'0002',
    label:SLEEP,
    labels:[SLEEP],
    genderTag:['male','female','other'],
    ageTag:['<18','18-24','25-34','35-44','45-54','55-64','65+'],
    platform:['iOS' , 'Android'],
    title:'Sleep Better',
    price:'Relevant Free',
    categ:'App',
    description:' The Sleep Better sleep cycle alarm clock app lets you track your sleep, monitor your dreams and improve your bedtime habits',
    imgURL:'https://www.spoofee.com/images/dealofday/original/915351.jpg',
    website:' https://www.runtastic.com/en/apps/sleepbetter',
    comments:'B: "This app has worked to improve sleep for people similar to you, I hope you do not mind the professor!"'
  },
{
    solutionId:'0003',
    label:SLEEP,
    labels:[SLEEP],
    genderTag:['male','female','other'],
    ageTag:['18-24','25-34','35-44','45-54','55-64','65+'],
    platform:['iOS' , 'Android'],
    title:'Sleep Genius',
    price:'$4.99',
    categ:'App',
    description:' The Sleep Genius Relaxation Program was scientifically¬ created to reduce stress and anxiety by calming both the mind and the body.',
    imgURL:'http://sleepgenius.com/universe/wp-content/uploads/2014/04/app-icon.png',
    website:' http://sleepgenius.com/',
    comments:'B: "This app has worked to improve sleep for people similar to you, I hope you do not mind the professor!"'
  },
{
    solutionId:'0004',
    label:SLEEP,
    labels:[SLEEP,STRESS,PURPOSE,DIET,'anxiety'],
    genderTag:['male', 'female', 'other'],
    ageTag:['<18','18-24','25-34','35-44','45-54','55-64','65+'],
    platform:['iOS'],
    title:'Meditation Studio',
    price:'Relevant Free',
    categ:'App',
    description:" The mind is complicated, but meditation doesn't have to be. Welcome to Meditation Studio. We make meditation simple.",
alternativeDesc: "Whether you want to reduce stress, ease anxiety, improve sleep or boost confidence, we've got meditations for you!",
    imgURL:'https://i1.sndcdn.com/avatars-000278434986-sgsfu7-t500x500.jpg',
alternativeImg:' http://img.wennermedia.com/620-width/mj-618_348_meditation-studio-meditation-apps-that-work.jpg',
    website:' https://www.meditationstudioapp.com/',
    comments:'B: "This app has worked to improve sleep for people similar to you, I hope you do not mind the professor!"'
  },
{
    solutionId:'0005',
    label:SLEEP,
    labels:[SLEEP,'anxiety',STRESS],
    genderTag:['male','female','other'],
    ageTag:[ '<18','18-24'],
    platform:['iOS','Android'],
    title:'Mindshift',
    price:' Free',
    categ:'App',
    description:' Think of MindShift™ as your portable coach helping you face challenging situations and take charge of your life.',
alternativeDesc:' MindShift™ will help you learn how to relax, develop more helpful ways of thinking, and identify active steps that will help you take charge of your anxiety.',
    imgURL:'https://lh3.ggpht.com/S3A1v4uapjyVVNmta-OUDQ63EG0q6FZKVNJNbZzWKFzevdxLODoLbBE64ctxs3xiJw=s180',
alternativeImg:'https://www.sharonselby.com/wp-content/uploads/2013/07/Screen-Shot-2015-11-07-at-5.44.23-PM.png',
    website:' https://www.anxietybc.com/resources/mindshift-app',

    comments:'B: "This app has worked to improve sleep for people similar to you, I hope you do not mind the professor!"'
  },

{
    solutionId:'0006',
    label:SLEEP,
    labels:[SLEEP,STRESS],
    genderTag:['male','female','other'],
    ageTag: ['<18','18-24','25-34','35-44','45-54','55-64','65+'],
    platform:['iOS','Android'],
    title:'Brain.fm',
    price:'Relevant Free',
    categ:['App','Website'],
    description:"Music for brain stimulation – focus, meditation, relaxation, sleep. Unlock music's potential to influence cognitive states",
    imgURL: 'https://is5-ssl.mzstatic.com/image/thumb/Purple128/v4/1d/7e/69/1d7e692c-bff1-f656-38cc-caf2136a9ef5/mzl.tiupyrjx.png/246x0w.jpg',
alternativeImg: ' http://www.stashq.com/wp-content/uploads/2017/01/logo-brainfm.png',
    website:' https://www1.brain.fm/app',

    comments:'B: "This app has worked to improve sleep for people similar to you, I hope you do not mind the professor!"'
  },
{
    solutionId:'0007',
    label:SLEEP,
    labels:[SLEEP,STRESS],
    genderTag:['male','female','other'],
    ageTag: ['<18','18-24','25-34','35-44','45-54','55-64','65+'],
    platform:['iOS' , 'Android'],
    title:'Calm',
    price:'Relevant Free',
    categ:['App','Website'],
    description:'We help people to relax, meditate and sleep. Our mission is to make the world happier and healthier.',
    imgURL: 'https://images-na.ssl-images-amazon.com/images/I/71DP3hD7K8L.png',
    website:' https://www.calm.com/',
 comments:'B: "This app has worked to improve sleep for people similar to you, I hope you do not mind the professor!"'
},
{
    solutionId:'0008',
    label:SLEEP,
    labels:[SLEEP,STRESS],
    genderTag:['male','female','other'],
    ageTag: ['<18','18-24','25-34','35-44','45-54','55-64','65+'],
    platform:['iOS' , 'Android'],
    title:'Noisli',
    price:'£1.99',
    categ:['App','Website'],
    description:'Improve focus and boost your productivity. Mix different sounds and create your perfect environment.',
    imgURL: 'https://dl1.cbsistatic.com/i/2016/07/03/ead00803-7826-4a90-9f57-6851749e8848/aa5c8e6ace3460da2a4a3ca55694a656/imgingest-399061660629536481.png',
    website:'https://www.noisli.com/',
 comments:'B: "This app has worked to improve sleep for people similar to you, I hope you do not mind the professor!"'
},
{
    solutionId:'0009',
    label:SLEEP,
    labels:[SLEEP,STRESS],
    genderTag:['male','female','other'],
    ageTag: ['<18','18-24','25-34','35-44','45-54','55-64','65+'],
    platform:['iOS' , 'Android'],
    title:'pzizz- deep sleep & power nap',
    price:'Relevant Free',
    categ:'App',
    description:"Sleep at the push of a button! The world's most advanced sleep and power nap system to fall asleep fast, stay asleep, and wake up feeling refreshed.",
    imgURL:'http://is5.mzstatic.com/image/thumb/Purple128/v4/d4/da/09/d4da09e5-70da-10e3-4283-972e3b0caad5/source/175x175bb.jpg',
    website:'https://pzizz.com/',
 comments:'B: "This app has worked to improve sleep for people similar to you, I hope you do not mind the professor!"'
},
{
    solutionId:'0010',
    label:SLEEP,
    labels:[SLEEP,STRESS,EXERCISE,DIET,SOCIAL],
    genderTag:['male','female','other'],
    ageTag: ['25-34','35-44','45-54'],
    platform:['iOS' , 'Android'],
    title:'ph360',
    price:' 7 day free trial then $49.99/ month ',
    categ:'App',
    description:'Redefine your success. Look good. Feel great. Love life.',
    imgURL:'https://pbs.twimg.com/profile_images/703299926797762560/hWaxutiE_400x400.jpg',
    website:'https://ph360.me/',
 comments:'B: "This app has worked to improve sleep for people similar to you, I hope you do not mind the professor!"'
},
{
    solutionId:'0011',
    label:SLEEP,
    labels:[PURPOSE,STRESS,EXERCISE,DIET,SOCIAL,'anxiety','depression'],
    genderTag:['male','female','other'],
    ageTag: ['<18','18-24'],
    platform:['iOS' , 'Android'],
    title:'The Mix',
    price:'Free',
    categ:'Website',
    description:"Leading support service for young people. The Mix will help you take on any challenge you're facing - from mental health to money, from homelessness to finding a job, from break-ups to drugs.",
    imgURL:' http://www.themix.org.uk/wp-content/themes/connected/images/TheMix_logo.png',
    website:'http://www.themix.org.uk/',
 comments:'B: "This app has worked to improve sleep for people similar to you, I hope you do not mind the professor!"'
},
{
    solutionId:'0012',
    label:SLEEP,
    labels:[PURPOSE,EXERCISE,SOCIAL],
    genderTag:['male','female','other'],
    ageTag:['<18','18-24','25-34','35-44','45-54','55-64','65+'],
    platform:['iOS' , 'Android'],
    title:'Goodgym',
    price:'Free',
    categ:'Website',
    description: 'We are a community of runners that combine getting fit with doing good',
    alternativeImg:'https://www.catfordcentral.com/wp-content/uploads/goodgym.jpg',
imgURL:'https://jobs.theguardian.com/getasset/10e95a67-725c-4fbf-8511-ae8125ec720d/',
    website:'https://www.goodgym.org/',
 comments:'B: "This app has worked to improve sleep for people similar to you, I hope you do not mind the professor!"'
},

{
    solutionId:'0013',
    label:SLEEP,
    labels:[EXERCISE],
    genderTag:['male','female','other'],
    ageTag:['<18','18-24','25-34','35-44','45-54','55-64','65+'],
    platform:['iOS' , 'Android'],
    title:'Couch to 5k',
    price:'Free',
    categ:['App','Website'],
    description: 'Couch to 5K has been designed to get you off the couch and running in just nine weeks.',
    imgURL:' https://lh3.googleusercontent.com/FkrwMPDeBqcMB1pbN7HGBYB-yml99GGUv38cLUNAjP9OvwLD4UKTXvn-tJ-bnRR1HSA',
alternativeImg:' https://www.changemakers.com/sites/default/files/goodgym_red.png',
    website:'http://www.c25k.com/',
 comments:'B: "This app has worked to improve sleep for people similar to you, I hope you do not mind the professor!"'
},
{
    solutionId:'0014',
    label:SLEEP,
    labels:[PURPOSE,STRESS,EXERCISE, DIET],
    genderTag:['male','female','other'],
    ageTag: ['<18','18-24','25-34','35-44','45-54','55-64','65+'],
    platform:['iOS' , 'Android'],
    title:'Live Happy',
    price:'Free',
    categ:['Website','Podcast','App'],
    description:'A weekly podcast offering scientific tips and ideas on how to lead a happier, more meaningful life through interviews with medical professionals and wellbeing thought-leaders',
    imgURL:'https://www.mediavillage.com/media/articles/live_happy_GHg46ps.png.1000x1000_q85_box-137%2C93%2C910%2C867_crop_detail.png',
    website:'https://www.livehappy.com/learn-/happiness',
 comments:'B: "This app has worked to improve sleep for people similar to you, I hope you do not mind the professor!"'
},
{
    solutionId:'0015',
    label:SLEEP,
    labels:[STRESS,'anxiety','depression'],
    genderTag:['male','female','other'],
    ageTag: ['<18','18-24','25-34','35-44','45-54','55-64','65+'],
    platform:['iOS' , 'Android'],
    title:'7 cups of Tea',
    price:'Relevant Free',
    categ:['App','Website'],
    description: '7 Cups of Tea is an “online emotional support service.” Somewhere where you can anonymously connect with trained listeners in order to gain support for everyday issues, including mental health',
    imgURL:'https://media.licdn.com/dms/image/C510BAQFaJ5zXojy7Aw/company-logo_200_200/0?e=2159024400&v=beta&t=gw_gkN4uGsMkI3F2xI_wEk4NqarL2Wj8XCC1npCKGCw',
    website:'https://www.7cups.com/',
 comments:'B: "This app has worked to improve sleep for people similar to you, I hope you do not mind the professor!"'
},

{
    solutionId:'0016',
    label:SLEEP,
    labels:[STRESS,'anxiety','depression',SOCIAL,PURPOSE],
    genderTag:['male','female','other'],
    ageTag: ['<18','18-24','25-34','35-44','45-54','55-64','65+'],
    platform:['iOS' , 'Android'],
    title:'Elefriends',
    price:'Free',
    categ:'Website',
    description: "Elefriends is a supportive online community where you can be yourself. We all know what it's like to struggle sometimes, but now there's a safe place to listen, share and be heard.",
imgURL:'https://lh3.googleusercontent.com/U7TonLDztyu83UCn5Tew9sRSTqYL6MPqGdzFMl39k_VNBLupI9hyi-vJDuE0_B2ADJohfAZMJOjL6rGMw7_OXgIV=h200',
AlternativeImg:'https://i2.wp.com/www.inkwellarts.org.uk/wpcontent/uploads/2013/11/CPMXx7rWEAA4qFR.jpg?w=1500',
    website:'https://www.elefriends.org.uk/',
 comments:'B: "This app has worked to improve sleep for people similar to you, I hope you do not mind the professor!"'
},

{
    solutionId:'0017',
    label:SLEEP,
    labels:[STRESS,DIET,'depression',SOCIAL,PURPOSE],
    genderTag:['male','female','other'],
    ageTag: ['18-24','25-34','35-44','45-54','55-64','65+'],
    platform:['iOS' , 'Android'],
    title:'Happify',
    price:'Relevant Free',
    categ:['Website','App'],
    description: 'Happify is the single destination for effective, evidence-based solutions for better emotional health and wellbeing in the 21st century.',
imgURL:' https://pbs.twimg.com/profile_images/654055127817560064/rvN2mcuB_400x400.png',
AlternativeImg:' https://p.apk4fun.com/1e/01/c3/com.happify.happifyinc-featured.jpg',
    website:'https://my.happify.com/',
 comments:'B: "This app has worked to improve sleep for people similar to you, I hope you do not mind the professor!"'
},
{
    solutionId:'0018',
    label:SLEEP,
    labels:[STRESS,SOCIAL,PURPOSE,SLEEP,'anxiety','depression'],
    genderTag:['male','female','other'],
    ageTag: ['<18', '18-24','25-34','35-44','45-54','55-64','65+'],
    platform:['iOS' , 'Android'],
    title:'HeadSpace',
    price:'Relevant Free',
    categ:['App','Website'],
    description: 'A few minutes could change your whole day. Meditation has been shown to help people stress less, focus more and even sleep better',
imgURL:'https://becominghappydotblog.files.wordpress.com/2018/04/headspace-app-logo-fitted.jpg?w=1400',
AlternativeImg:' http://www.womenofgrace.com/blog/wp-content/uploads/2018/04/headspace-logo.jpg',
    website:'https://www.headspace.com/',
 comments:'B: "This app has worked to improve sleep for people similar to you, I hope you do not mind the professor!"'
},
{
    solutionId:'0019',
    label:SLEEP,
    labels:[SOCIAL],
    genderTag:['male','female','other'],
    ageTag: ['18-24','25-34','35-44','45-54','55-64','65+'],
    platform:['iOS' , 'Android'],
    title:'Huggle',
    price:'Free',
    categ:'App',
    description: 'Huggle lets you discover and connect with the people who go to the places you go, and shows you the places you have in common.',
imgURL:'https://lh3.googleusercontent.com/Q2JKsfqyaUFGBlDy5olcVRijs0NXRy0ZduzRCCe756eQ8l5QdewI7ZvNBjCKMUik0oL5',
    website:'https://huggle.com/en/',
 comments:'B: "This app has worked to improve sleep for people similar to you, I hope you do not mind the professor!"'
},

{
    solutionId:'0020',
    label:SLEEP,
    labels:[SOCIAL,PURPOSE],
    genderTag:['male'],
    ageTag: ['55-64','65+'],
    platform:['iOS' , 'Android'],
    title:'Mens Sheds',
    price:'Free',
    categ:'Website',
    description: "They're community spaces for men to connect, converse and create. The activities are often similar to those of garden sheds, but for groups of men to enjoy together",
imgURL:' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-SuvIeUZfxYi2NNaptLliXke-VWWAhE6eWGFaY1sCPgdgqubg3g',
    website:'https://menssheds.org.uk/',
 comments:'B: "This app has worked to improve sleep for people similar to you, I hope you do not mind the professor!"'
},
{
    solutionId:'0021',
    label:SLEEP,
    labels:[STRESS,DIET,EXERCISE],
    genderTag:['female'],
    ageTag: ['18-24','25-34','35-44','45-54'],
    platform:['iOS' , 'Android'],
    title:'MindBodyGreen',
    price:'Free',
    categ:'Website',
    description: 'We take a 360 degree approach to wellness that incorporates mental, physical, spiritual, emotional, and environmental well-being—because we believe these pillars of wellness are vital and interconnected',
    imgURL:'https://www.headpositivemom.com/wp-content/uploads/2015/10/mindbodygreen-logo-for-site.jpg',
    website:'https://www.mindbodygreen.com/',
 comments:'B: "This app has worked to improve sleep for people similar to you, I hope you do not mind the professor!"'
},
{
    solutionId:'0022',
    label:SLEEP,
    labels:[DIET,EXERCISE],
    genderTag:['female','male','other'],
    ageTag: ['<18','18-24','25-34','35-44','45-54'],
    platform:['iOS' , 'Android'],
    title:'MyFitness',
    price:'Relevant Free',
    categ:['Website','App'],
    description: 'Lose weight the healthy way, We believe — and medical studies prove — that the best way to lose weight and keep it off is to simply keep track of the foods you eat.',
imgURL:' http://lh3.googleusercontent.com/i36nsJS70_SXJYQkQV0VBw6J-2M-RwXd_l4qTC9owa-IwDE3Ej7BIb0bnz1Bcm-SY20=w300',
    website:'https://www.myfitnesspal.com/',
 comments:'B: "This app has worked to improve sleep for people similar to you, I hope you do not mind the professor!"'
},
{
    solutionId:'0023',
    label:SLEEP,
    labels:['depression','anxiety',STRESS,SOCIAL],
    genderTag:['female','male','other'],
    ageTag: ['<18','18-24'],
    platform:['iOS' , 'Android'],
    title:'Nuddge',
    price:'Free',
    categ:['Website'],
    description: 'The Nuddge community consists of those people who want to enhance their emotional wellbeing. These are everyday people, friends, neighbours, uncles, brothers and sisters.',
imgURL:'https://www.spyro-soft.com/wp-content/uploads/2018/03/nuddge.png',
    website:'https://www.nuddge.com/index.html#',
 comments:'B: "This app has worked to improve sleep for people similar to you, I hope you do not mind the professor!"'
},
{
    solutionId:'0024',
    label:SLEEP,
    labels:[STRESS,SLEEP],
    genderTag:['female','male','other'],
    ageTag: ['<18','18-24','25-34','35-44','45-54','55-64','65+'],
    platform:['iOS','Android'],
    title:'ThinkUp',
    price:'Relevant Free',
    categ:'App',
    description: 'ThinkUp offers you a simple way to build a positive mindset. All you should do is to select your affirmations, record them in your voice, add your favorite music and listen to it on daily basis.',
imgURL:' http://thinkup.me/wp-content/uploads/2016/08/thinkuplogo-3.png',
    website:'http://thinkup.me/',
 comments:'B: "This app has worked to improve sleep for people similar to you, I hope you do not mind the professor!"'
},
{
    solutionId:'0025',
    label:SLEEP,
    labels:[SOCIAL],
    genderTag:['female','male','other'],
    ageTag: ['<18','18-24','25-34'],
    platform:['iOS','Android'],
    title:'We3',
    price:'Free',
    categ:'App',
    description: 'Meet amazing new friends. Private, Free and in groups of 3.',
    imgURL:'https://is3-ssl.mzstatic.com/image/thumb/Purple128/v4/68/d1/51/68d151d0-855f-d7e3-1bcc-52ee9d2e8dab/source/512x512bb.jpg',
    website:' https://www.we3app.com/',
 comments:'B: "This app has worked to improve sleep for people similar to you, I hope you do not mind the professor!"'
},
{
    solutionId:'0026',
    label:SLEEP,
    labels:[DIET],
    genderTag:['female','male','other'],
    ageTag: ['<18','18-24','25-34','35-44','45-54','55-64','65+'],
    platform:['iOS','Android'],
    title:'Eat right now',
    price:'$24.99/ month',
    categ:'App',
    description: 'Reduce your craving-related eating by 40% Eat Right Now is a scientifically proven* daily program that combines neuroscience & mindfulness to reduce your cravings.',
imgURL:' https://static-s.aa-cdn.net/img/gp/20600005619962/U5Qs1QxysoYaXp9yiqIgu1ZPBtLByEiMJMLuAuVnUrckrCZ-Mdw--EACGrWJzlhpbg=w300?v=1',
alternativeImg:' https://is2-ssl.mzstatic.com/image/thumb/Purple118/v4/8c/ba/c1/8cbac1ae-124e-37a1-c080-945be389be7b/mzl.aqihbcmq.png/300x0w.jpg',
    website:'https://goeatrightnow.com/',
 comments:'B: "This app has worked to improve sleep for people similar to you, I hope you do not mind the professor!"'
},


{
    solutionId:'0027',
    label:SLEEP,
    labels:['anxiety',STRESS],
    genderTag:['female','male','other'],
    ageTag: ['<18','18-24','25-34','35-44','45-54','55-64','65+'],
    platform:['iOS','Android'],
    title:'Anxiety UK',
    price:'Free',
    categ:'Website',
    description: 'Anxiety UK support those living with anxiety and anxiety-based depression by providing information, support and understanding.',
imgURL:' https://www.anxietyuk.org.uk/wp-content/uploads/2010/06/AUK-1970-transparent.png',
website:'https://www.anxietyuk.org.uk/about-us/',
 comments:'B: "This app has worked to improve sleep for people similar to you, I hope you do not mind the professor!"'
},
{
    solutionId:'0028',
    label:SLEEP,
    labels:['depression','anxiety',STRESS],
    genderTag:['female','male','other'],
    ageTag: ['<18','18-24','25-34','35-44','45-54','55-64','65+'],
    platform:['iOS','Android'],
    title:'Big White Wall',
    price:'Relevant Free',
    categ:'Website',
    description: "Big White Wall is an online mental health and wellbeing service offering self-help programmes, creative outlets and a community that cares. When you're dealing with everyday stressors or major life events, we'll help you get through it.",
imgURL:'https://www.bigwhitewall.com/V2/assets/img/bww-logo-new.svg',
alternativeImg:'https://www.surrey.ac.uk/currentstudents/images/172257_big_white_wall_2_small.jpg',
website:'https://www.bigwhitewall.com/v2/Home.aspx?ReturnUrl=%2f',
 comments:'B: "This app has worked to improve sleep for people similar to you, I hope you do not mind the professor!"'
},
{
    solutionId:'0029',
    label:SLEEP,
    labels:[EXERCISE,STRESS],
    genderTag:['female','male','other'],
    ageTag: ['<18','18-24','25-34','35-44','45-54','55-64','65+'],
    platform:['iOS','Android'],
    title:'Yoga Glo',
    price:'15 day Free trial, $18/month',
    categ:['Website','App'],
    description: 'YogaGlo is online yoga and meditation you can do anywhere.',
imgURL:'https://d28z2mkpklymta.cloudfront.net/3.9.1/img/og.jpg',
alternativeImg:'https://image.roku.com/channels/images/98a9001004ae47368d1eaefd841616b8-hd.jpg',
website:'https://www.yogaglo.com/',
 comments:'B: "This app has worked to improve sleep for people similar to you, I hope you do not mind the professor!"'
},

{
    solutionId:'0030',
    label:SLEEP,
    labels:[EXERCISE,STRESS],
    genderTag:['female','male','other'],
    ageTag: ['<18','18-24','25-34','35-44','45-54','55-64','65+'],
    platform:['iOS','Android'],
    title:'Yoga with Adriene',
    price:'Free',
    categ:['Website'],
    description: 'Online community that provides high quality yoga at no cost to inspire people of all shapes and sizes across the globe.',
imgURL:'https://vhx.imgix.net/yogawithadriene/assets/cc0dafe8-3719-4da2-aaab-6e4b1607ca5f/yoga-with-adriene-library.jpg?fit=crop&fm=jpg&h=360&q=50&w=640',
website:'http://yogawithadriene.com/',
 comments:'B: "This app has worked to improve sleep for people similar to you, I hope you do not mind the professor!"'
},
{
    solutionId:'0031',
    label:SLEEP,
    labels:[EXERCISE,STRESS,SOCIAL],
    genderTag:['female','male','other'],
    ageTag: ['<18','18-24','25-34','35-44','45-54','55-64','65+'],
    platform:['iOS','Android'],
    title:'5 Rhythms',
    price:'Free',
    categ:['Website'],
    description: '5Rhythms is a dynamic practice to both workout and meditate in the same breath. Practicing them helps us become attuned to the underlying patterns in our everyday existence.',
imgURL:'https://s-media-cache-ak0.pinimg.com/originals/2d/28/06/2d2806fdad8801a3f6441eef23ac6d41.jpg',
alternativeImg:'http://www.bettinarothe.com/blog/wp-content/uploads/2015/11/5rhythms-logo.jpg',
website:'https://www.5rhythms.com/',
 comments:'B: "This app has worked to improve sleep for people similar to you, I hope you do not mind the professor!"'
},

{
    solutionId:'0032',
    label:SLEEP,
    labels:[STRESS,'depression','anxiety'],
    genderTag:['female','male','other'],
    ageTag: ['<18','18-24','25-34','35-44','45-54','55-64','65+'],
    platform:['iOS','Android'],
    title:'Living life to the fullest',
    price:'Free',
    categ:['Website'],
    description: 'Lots of people struggle at times in life. Living Life to the Full teaches a range of life skills that are based on the tried and trusted CBT approach, to aim to improve wellbeing and resilience as you go through the journey of life.',
imgURL:'https://llttf.com/wp-content/uploads/mobilebanner.png',
website:'https://llttf.com/',
 comments:'B: "This app has worked to improve sleep for people similar to you, I hope you do not mind the professor!"'
}



]

export default Resources;
