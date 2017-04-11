import React, { PropTypes } from 'react';

class HomePage extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    webpackManifest: PropTypes.object,
    styles: PropTypes.arrayOf(PropTypes.string),
    scripts: PropTypes.arrayOf(PropTypes.string)
  }

  static defaultProps = {
    title: 'web-starter',
    webpackManifest: {},
    styles: [],
    scripts: []
  }

  render() {
    const { title, webpackManifest, styles, scripts } = this.props;

    return (
      <html>
        <head>
          <meta charSet="utf-8"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
          <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
          <meta name="timestamp" content={(new Date).toISOString()}/>
          <title>{title}</title>
          <script dangerouslySetInnerHTML={{ __html: "window.Promise || document.write('\\x3Cscript src=\"/es6-promise.min.js\">\\x3C/script>\\x3Cscript>ES6Promise.polyfill()\\x3C/script>')" }}/>
          <script dangerouslySetInnerHTML={{ __html: "window.fetch || document.write('\\x3Cscript src=\"/fetch.min.js\">\\x3C/script>')" }}/>
          <script dangerouslySetInnerHTML={{ __html: "window.webpackManifest = " + JSON.stringify(webpackManifest) }}/>
          {styles.map(s => <link rel="stylesheet" key={s} href={s}/>)}
        </head>
        <body className="daniels">
          <div id="app" />
          {scripts.map(s => <script key={s} src={s}/>)}
        </body>
      </html>
    );
  }
}

export default HomePage;
