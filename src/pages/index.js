import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';

const IndexPage = () => (
  <Layout>
    <section className="sdm-layout__block">
      <h1>I am <span className="sdm-accent">Dmitry</span></h1>
      <p>A web developer from Vladivostok, Russia.</p>
      <p>You can find me on internet as @shvetsovdm, writing articles and posting tweets about web development, Ruby, SQL, NoSQL, JavaScript, Node.js, VIM editor and<br/>programming in general.</p>
      <p><Link to="/dmitry-shvetsov-resume">My resume</Link></p>
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
        <li><a rel="external" href="https://twitter.com/shvetsovdm">Twitter</a></li>
        <li><a rel="external" href="https://github.com/shvetsovdm">Github</a></li>
        <li><a rel="external" href="https://stackoverflow.com/users/6317812/shvetsovdm">StackOverflow</a></li>
        <li><a rel="external" href="https://codepen.io/shvetsovdm/">Codepen</a></li>
      </ul>
    </section>
    <footer className="sdm-layout__block sdm-layout__block--footer">
      <p><small>© Dmitry Shvetsov, 2016-2018</small></p>
    </footer>
  </Layout>
);

export default IndexPage;
