import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

import '../components/landing.sass';

const IndexPage = () => (
  <Layout>
    <section className="sdm-layout__block">
      <h1 className="sdm-landing__title">I am <span className="sdm-accent">Di</span></h1>
      <p>I&apos;m a <span className="sdm-accent">web developer</span> from Vladivostok, Russia.</p>
      <p>The <span className="sdm-accent">оrganaizer</span> of the <a className="sdm-multiline-link" href="https://ruby-vladivostok.github.io/">Ruby Vladivostok</a> meetup.</p>
      <p>You can find me on the internet as <span className="sdm-accent">@iamdidev</span>, writing articles and posting tweets about web development, Ruby, SQL, NoSQL, JavaScript, Node.js, programming in general, learning and self-development.</p>
    </section>
    <section className="sdm-layout__block">
      <h2 className="sdm-landing__title">My recent <span className="sdm-accent">articles</span></h2>
      <article className="sdm-article">
        <a className="sdm-multiline-link" href="/blog/tech/2019-02-11-esential-books-that-every-programmer-should-read/">
          Essential Books That Every Programmer Should Read
        </a>
        <div className="sdm-article__date">
          <time dateTime="2019-02-11 21:00">Feb 11, 2019</time>
        </div>
      </article>
      <article className="sdm-article">
        <a className="sdm-multiline-link" href="/blog/tech/2019-02-05-playing-with-ruby-threads-and-queues/">
          Playing with Ruby Threads and Queues
        </a>
        <div className="sdm-article__date">
          <time dateTime="2019-02-05 16:04">Feb 5, 2019</time>
        </div>
      </article>
      <p><Link to="/blog">View all articles</Link>.</p>
    </section>
    <div className="sdm-layout__block sdm-layout__block--multisection">
      <section className="sdm-layout__section">
        <h2 className="sdm-landing__title">Find me in <span className="sdm-accent">social networks</span></h2>
        <ul>
          <li><a rel="external" href="https://twitter.com/shvetsovdm">Twitter</a></li>
          <li><a rel="external" href="https://github.com/shvetsovdm">Github</a></li>
          <li><a rel="external" href="https://codepen.io/shvetsovdm/">Codepen</a></li>
        </ul>
      </section>
      <section className="sdm-layout__section">
        <h2 className="sdm-landing__title">Goodies</h2>
        <ul>
          <li><a className="sdm-multiline-link" rel="external" href="https://www.youtube.com/playlist?list=PLZ9y9yxqfSW-HUoh2r-WCWU8ewrBI_8nm">Collection of great videos for programmers</a></li>
        </ul>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
