import React from 'react'

class MailChimp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        emailValue: '',
        fNameValue: '',
        lNameValue: '',
    };
  }

    render() {
        return (
                <form action="https://getbetterspace.us12.list-manage.com/subscribe/post" method="POST" noValidate>
                    <input type="hidden" name="u" value="05bbfcfa3ace41ca96e007395"/>
                    <input type="hidden" name="id" value="ba58090aa0"/>
                    <label htmlFor='MERGE0' className='desktopContactInput'>
                        <input
                            type="email"
                            name="EMAIL"
                            id="MERGE0"
                            value={this.state.emailValue}
                            onChange={ (e)=>{this.setState({emailValue: e.target.value});} }
                            autoCapitalize="off"
                            autoCorrect="off"
                            placeholder='Email'
                         />
                    </label>
                    <br />
                    <label htmlFor='MERGE1' className='desktopContactInput'>
                        <input
                            type="text"
                            name="FNAME"
                            id="MERGE1"
                            value={this.state.fNameValue}
                            onChange={(e)=>{this.setState({fNameValue: e.target.value});}}
                            placeholder='Name'

                        />
                    </label>
                    <br />
                    <label htmlFor='MERGE2' className='desktopContactInput'>
                        <input
                            type="text"
                            name="LNAME"
                            id="MERGE2"
                            value={this.state.lNameValue}
                            onChange={(e)=>{this.setState({lNameValue: e.target.value});}}
                            placeholder='Company'

                        />
                    </label>
                    <br />
                      <input type="submit" value="Send" name="subscribe" id="mc-embedded-subscribe" className="desktopContactButton" />

                    <div style={{position: 'absolute', left: '-5000px'}} aria-hidden='true' aria-label="Please leave the following three fields empty">
                        <label htmlFor="b_name">Name: </label>
                        <input type="text" name="b_name" tabIndex="-1" value="" placeholder="Freddie" id="b_name"/>

                        <label htmlFor="b_email">Email: </label>
                        <input type="email" name="b_email" tabIndex="-1" value="" placeholder="youremail@gmail.com" id="b_email"/>

                        <label htmlFor="b_comment">Comment: </label>
                        <textarea name="b_comment" tabIndex="-1" placeholder="Please comment" id="b_comment"></textarea>
                    </div>
              </form>
        )
    }
}

export default MailChimp
