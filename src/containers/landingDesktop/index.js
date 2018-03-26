import React, { Component } from 'react'
import Paper from '../../assets/svg/paper.js'
import Arrow1 from '../../assets/svg/arrow1.js'
import Arrow2 from '../../assets/svg/arrow2.js'
import People from '../../assets/svg/people.js'
import List from '../../assets/svg/list.js'
import Confidential from '../../assets/svg/confidential.js'
import Commitment from '../../assets/svg/commitment.js'
import Invoice from '../../assets/svg/invoice.js'
import Manage from '../../assets/svg/manage.js'
import Prevention from '../../assets/svg/prevention.js'

export default class HomeDesktop extends Component {


render() {
    return (
      <div>
        <div className='desktopHeader'>
          <div className = 'desktopHeaderHeader'>
            BetterSpace
            <span className='desktopHeaderHeaderRight'>What we do </span>
          </div>
          <div className = 'desktopHeaderTitle'>
            Get a better emotional and mental state of mind
            <br />
            <span className='desktopHeaderButton'> Learn more</span>
          </div>

        </div>

        <div className='desktopFirstSection'>
          <div className='desktopSectionTitle'>
            We help you find what you need
          </div>

          <div className='desktopSectionContent'>
            <div className='desktopSectionLeft'>

            </div>
            <div className='desktopSectionRight'>
              <div className='desktopSectionFirstRow'>
                <div className='desktopSectionFirstRowCell'>
                      1. Answer a few questions
                      <div className='desktopIconArrows'>
                      <Arrow1 />

                      </div>
                  </div>
                  <div className='desktopIcon'>
                      <Paper />
                  </div>
              </div>

              <div className='desktopSectionFirstRow'>
                <div className='desktopSectionFirstRowCell'>
                  2. Compare activities, apps, therapists and products
                  <div className='desktopIconArrows'>
                  <Arrow1 />

                  </div>
                </div>
                <div className='desktopIcon'>
                    <List />
                  </div>
              </div>

              <div className='desktopSectionFirstRow'>
                <div className='desktopSectionFirstRowCell'>
                3. Select from the personalized shortlist or choose the one you prefer!
                  </div>
                  <div className='desktopIcon'>
                    <People />
                  </div>
                </div>

            </div>
          </div>
          <div className='desktopSectionFooter'>
            Open getbetterspace.com with the mobile
          </div>
        </div>

        <div className='desktopSecondSection backgroundColor'>
          <div className='desktopSectionTitle'>
            Our solution for your organization
          </div>
          <div className='desktopSectionFirstRow'>
            <div className='desktopIcon'>
              <Prevention />
            </div>

            <div className=''>
              <div className='desktopSectionSubTitle'>Prevention</div>
              <div className=''>Whatever journey you're on, someone can help. Being a part of our community allows you to share your personal experiences/strategies with other users and get rewarded in credits for helping the community get smarter.</div>
            </div>
          </div>


          <div className='desktopSectionFirstRow'>
            <div className='desktopIcon'>
            <Manage />
            </div>

            <div className=''>
              <div className='desktopSectionSubTitle'>Management</div>
              <div className=''>Need immediate feedback? Or do you just like seeing your growth on a chart? BetterSpace is the self-improvement hub for you - track sleep hours, time spent on social activities and more within our app. With support for Apple Health and Google Fit, our app is a centralised solution for all your health tracking needs.</div>
            </div>
          </div>


          <div className='desktopSectionFirstRow'>
            <div className='desktopIcon'>
              <Invoice />
            </div>

            <div className=''>
              <div className='desktopSectionSubTitle'>Easy invoicing</div>
              <div className=''>Whether it’s a proven mindfulness app, an energising social activity or a conversation with a top therapist, we’ve got a personalised directory for you. Plus, we support Google Calendar, iCal and Outlook Calendar - ensuring that you'll have a seamless experience fitting our recommendations into your schedule.</div>
            </div>
          </div>
          <div className='desktopSectionFirstRow'>
            <div className='desktopIcon'>
              <Confidential />
            </div>

            <div className=''>
              <div className='desktopSectionSubTitle'>Confidentiality</div>
              <div className=''>Your privacy is our top priority. You can access your recommendations in anonymity and, more importantly, we will NEVER share your data without permission. We’ll only ask you to share information for your benefit, we exercise the highest levels of data protection</div>
            </div>
          </div>
          <div className='desktopSectionFirstRow'>
            <div className='desktopIcon'>
              <Commitment />

            </div>

            <div className=''>
              <div className='desktopSectionSubTitle'>Visible commitment</div>
              <div className=''>BetterSpace is free to use, and on our app/site you'll find many solutions that are free - that's a big part of our social mission. Wondering how we pay our bills? We're like the App Store - making a small commission if you buy paid services.</div>
            </div>
          </div>
        </div>
        <div className='desktopContactSection'>


        </div>
        <div className='desktopFooter'>


        </div>
      </div>
    )
  }
}
