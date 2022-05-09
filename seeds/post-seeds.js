const { Post } = require("../models");

const postdata = [
  {
    title: "Simple Programmer",
    post_content:
      "Learn how to program, improve your career and develop your people skills. Let's make the complex simple and tackle the mental aspects of being a software developer together. Simple programmer is a web development blog that looks at things from a slightly different angle. It's an advice blog for full stack, front-end and back-end developers, as well as software engineers.",
    user_id: 10,
  },
  {
    title: "HackerEarth » Full Stack",
    post_content:
      "HackerEarth provides enterprise software solutions that help organisations with their innovation management and technical recruitment needs. HackerEarth has conducted 1000 hackathons and 10,000 programming challenges till date. Check out the latest blog articles, webinars, insights, and other resources on Full Stack on the HackerEarth.",
    user_id: 8,
  },
  {
    title: "upGrad » Full Stack Development",
    post_content:
      "upGrad is an online higher education platform providing rigorous industry-relevant programs designed and delivered in collaboration with world-class faculty and industry. Learn About Full Stack Development through in-depth tutorials, research articles, infographics, helpful tips, developed by industry experts & fast-track your career.",
    user_id: 1,
  },
  {
    title: "Wes Bos",
    post_content:
      "Wes Bos is a web developer, teacher and speaker from Hamilton, Ontario. He uses HTML, CSS and JavaScript. Though constantly changing, his focus right now he is using React.js, Node, Express, Lambda, Gatsby and Next.js.",
    user_id: 4,
  },
  {
    title: "Board Infinity » Full Stack Developer",
    post_content:
      "Want to learn about Data Science, Digital Marketing and placement preparation Board Infinity has it all. Full Stack Development is related to software development both client and server software, i.e. front-end and back-end development. Here you will find full stack developer blogs and articles related to react, angular, node.js, ES6, javascript.",
    user_id: 7,
  },
  {
    title: "What is a webhook?",
    post_content:
      "A webhook is a mechanism for making a web application communicate with other web applications by sending them information when certain events occur. Webhooks are sometimes also called ",
    user_id: 4,
  },
  {
    title: "Scotch Web DevelopmentHow to implement a webhook using NestJS?",
    post_content:
      "This codebase creates a simple web API that exposes a single endpoint at the root address (localhost:3000/). Let's say we want to notify a shipping application to ask them to pick up the product",
    user_id: 1,
  },
  {
    title: "Morbi non quam nec dui luctus rutrum.",
    post_content: "http://ucla.edu/consequat/nulla.html",
    user_id: 1,
  },
  {
    title: "Duis ac nibh.",
    post_content: "http://theguardian.com/dui/vel/nisl/duis/ac/nibh.aspx",
    user_id: 9,
  },
  {
    title: "Curabitur at ipsum ac tellus semper interdum.",
    post_content: "https://reverbnation.com/ligula/sit.jpg",
    user_id: 5,
  },
  {
    title: "In hac habitasse platea dictumst.",
    post_content: "http://china.com.cn/lectus/vestibulum.json",
    user_id: 3,
  },
  {
    title: "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
    post_content:
      "http://networksolutions.com/nam/ultrices/libero/non/mattis/pulvinar.json",
    user_id: 10,
  },
  {
    title: "Donec dapibus.",
    post_content: "https://instagram.com/ac/neque/duis/bibendum/morbi/non.xml",
    user_id: 8,
  },
  {
    title: "Nulla tellus.",
    post_content: "https://lycos.com/natoque/penatibus/et.html",
    user_id: 3,
  },
  {
    title:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    post_content: "https://gmpg.org/lorem.jpg",
    user_id: 3,
  },
  {
    title:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
    post_content: "https://paginegialle.it/mattis/egestas.jsp",
    user_id: 7,
  },
  {
    title: "In hac habitasse platea dictumst.",
    post_content: "http://wikia.com/turpis/eget.jpg",
    user_id: 6,
  },
  {
    title: "Etiam justo.",
    post_content: "https://shareasale.com/quis.json",
    user_id: 4,
  },
  {
    title: "Nulla ut erat id mauris vulputate elementum.",
    post_content:
      "http://java.com/diam/neque/vestibulum/eget/vulputate/ut/ultrices.png",
    user_id: 6,
  },
  {
    title:
      "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    post_content: "https://java.com/at/nibh/in.png",
    user_id: 7,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
