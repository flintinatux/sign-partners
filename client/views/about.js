const p = require('puddles')

const Footer = require('./footer')
const Hero   = require('./hero')
const Layout = require('./layout')

const About = ({ about, images }) =>
  p('div.about', [
    Hero('About us', images[about.hero]),

    p('div.copy', [
      p('p', `We've been providing custom sign solutions to businesses and organizations in the Greater Atlanta area since 2001.  Our experienced and talented staff creates some of the most beautiful, high-impact custom signs in the city. Each sign helps local business bring in more clients and communicate more effectively with employees and customers.`),

      p('h2.heading', 'Real People'),

      p('p', `So many of our partnerships have begun with phone calls where we hear, "My sign company says they can’t do this!" This always reminds us that it is not just about furnishing new signs. It's about helping real people meet real challenges. Many businesses feel the pressure to get things done efficiently. Many signs can be refurbished at a fraction of the cost of new. Some signs simply require modification or updating. Others need to be duplicated for a facility, and the original maker is no longer around. The most important questions are these: How can we help? What would you like to accomplish?`),

      p('h2.heading', 'Fast Solutions'),

      p('p', `Getting great signs is easier now than ever before. This is true, not because we are so great and special, but because our customers are. The tech savviness of today’s customers makes it easier than ever to get things done. Customers often need answers in a flash. With digital cameras, even phone cameras, and email, customers can help us to go with them from zero to a good grasp of the project in moments.`),

      p('h2.heading', 'Skilled Installation'),

      p('p', `Our installers go to sites throughout the Atlanta metro area and beyond from Athens to Bremen and from Dalton to Macon. They are insured, courteous, and respectful, and receive ongoing training on installation techniques and customer service. We are continually reminded that the care we put into our installation work is a reflection of the relationships we want to have with our customers. While many things in American commerce have changed over the years, the customer’s need for great value has not. Installation helps us to offer that value. Our business growth over the last decade is due largely to the partnerships that have been formed by including installations in the project.`)
    ]),

    Footer()
  ])

module.exports = Layout(About)
