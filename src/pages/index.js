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
        <a className="sdm-multiline-link" href="https://medium.com/@shvetsovdm/99-bottles-of-object-oriented-programming-4c54480303e7">
          99 Bottles of Object Oriented Programming
        </a>
        <div className="sdm-article__date">
          <time dateTime="2019-03-11 21:00">Mar 11, 2019</time>
        </div>
      </article>
      <article className="sdm-article">
        <a className="sdm-multiline-link" href="https://medium.com/@shvetsovdm/essential-books-that-every-programmer-should-read-a61565095781">
          Essential Books That Every Programmer Should Read
        </a>
        <div className="sdm-article__date">
          <time dateTime="2019-02-11 21:00">Feb 11, 2019</time>
        </div>
      </article>
      <article className="sdm-article">
        <a className="sdm-multiline-link" href="https://medium.com/@shvetsovdm/playing-with-ruby-threads-and-queues-52beb6e8613c">
          Playing with Ruby Threads and Queues
        </a>
        <div className="sdm-article__date">
          <time dateTime="2019-02-05 16:04">Feb 5, 2019</time>
        </div>
      </article>
      <p>More my articles <a rel="external" href="https://medium.com/@shvetsovdm/latest">on Medium</a>.</p>
    </section>
    <div className="sdm-layout__block sdm-layout__block--multisection">
      <section className="sdm-layout__section">
        <h2>Find me in <span className="sdm-accent">social networks</span></h2>
        <ul>
          <li><a rel="external" href="https://github.com/shvetsovdm">Github</a></li>
          <li><a rel="external" href="https://stackoverflow.com/users/6317812/shvetsovdm">StackOverflow</a></li>
          <li><a rel="external" href="https://codepen.io/shvetsovdm/">Codepen</a></li>
          <li><a rel="external" href="https://www.instagram.com/shvetsovdm/">Instagram</a></li>
          <li><a rel="external" href="https://twitter.com/shvetsovdm">Twitter</a></li>
        </ul>
      </section>
      <section className="sdm-layout__section">
        <h2>Goodies:</h2>
        <ul>
          <li><a className="sdm-multiline-link" rel="external" href="https://www.youtube.com/playlist?list=PLZ9y9yxqfSW-HUoh2r-WCWU8ewrBI_8nm">Collection of great videos for programmers</a></li>
        </ul>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
