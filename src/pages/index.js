import React from 'react';
import Layout from '../components/layout';

const IndexPage = () => (
  <Layout>
    <section className="sdm-layout__block">
      <h1>I am <span className="sdm-accent">Dmitry</span></h1>
      <p>A <span className="sdm-accent">web developer</span> from Vladivostok, Russia.</p>
      <p>The <span className="sdm-accent">оrganaizer</span> of the <a className="sdm-multiline-link" href="https://ruby-vladivostok.github.io/">Ruby Vladivostok</a> meetup.</p>
      <p>You can find me on the internet as <span className="sdm-accent">@shvetsovdm</span>, writing articles and posting tweets about web development, Ruby, SQL, NoSQL, JavaScript, Node.js, programming in general, learning and self-development.</p>
      <p>For CV you can refer to <a className="sdm-multiline-link" href="https://www.linkedin.com/in/shvetsovdm/"><span className="sdm-accent">LinkedIn</span> profile</a>.</p>
    </section>
    <section className="sdm-layout__block">
      <h2>My recent <span className="sdm-accent">articles</span></h2>
      <article className="sdm-article">
        <a className="sdm-multiline-link" href="https://medium.com/@shvetsovdm/programmers-workout-e5b7310bdb5b">
          Programming workout - the way to become a better programmer through repetitive exercises
        </a>
        <div className="sdm-article__date">
          <time dateTime="2018-09-11 23:00">Sep 11, 2018</time>
        </div>
      </article>
      <article className="sdm-article">
        <a className="sdm-multiline-link" href="https://medium.com/@shvetsovdm/how-to-use-webpacker-with-npm-instead-of-yarn-a8a764e3a8ab">
          How to use Rails Webpacker with NPM instead of Yarn
        </a>
        <div className="sdm-article__date">
          <time dateTime="2018-03-27 23:00">Mar 27, 2018</time>
        </div>
      </article>
      <footer>
        <p>More my articles <a rel="external" href="https://medium.com/@shvetsovdm/latest">on Medium</a>.</p>
      </footer>
    </section>
    <section className="sdm-layout__block">
      <h2>Find me in <span className="sdm-accent">social networks</span></h2>
      <ul>
        <li><a rel="external" href="https://github.com/shvetsovdm">Github</a></li>
        <li><a rel="external" href="https://stackoverflow.com/users/6317812/shvetsovdm">StackOverflow</a></li>
        <li><a rel="external" href="https://codepen.io/shvetsovdm/">Codepen</a></li>
        <li><a rel="external" href="https://www.instagram.com/shvetsovdm/">Instagram</a></li>
        <li><a rel="external" href="https://twitter.com/shvetsovdm">Twitter</a></li>
      </ul>
    </section>
    <footer className="sdm-layout__block sdm-layout__block--footer">
      <p><small>© Dmitry Shvetsov, 2016-2018</small></p>
    </footer>
  </Layout>
);

export default IndexPage;
