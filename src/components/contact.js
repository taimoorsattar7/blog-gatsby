import React from "react"

const Contact = () => {

  return (
    <form name="contact" method="POST" data-netlify="true">

      <div class="input">
        <label for="fullName">Full Name</label>
        <input class="headline headline__text"
          type="text"
          name="fullName" />
      </div>

      <div class="input">
        <label for="email">Email</label>
        <input class="headline headline__text"
          type="email"
          name="email" />
      </div>

      <div class="input">
        <label for="message">Type Your Message</label>
        <textarea class="headline headline__text"
          name="message"
          id="message"
          rows="7"
          spellcheck="true"></textarea>
      </div>

      <input id="btn"
        type="submit"
        value="Submit" />

    </form>
  )
}

export default Contact
