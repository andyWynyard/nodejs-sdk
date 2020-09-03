
      module.exports = {

        apiEndpoint: 'https://test-cli.cdn.prismic.io/api/v2',
      
        linkResolver: function(doc, ctx) {
          if (doc.type == 'page') return '/page/' + doc.uid;
          return '/';
        }
      };
    