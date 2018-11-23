"use strict";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var apiKey = '1d143d74c3f949b287751439d8842708';
var newsElement = document.getElementById('news-container');

var newsContainer =
/*#__PURE__*/
function () {
  function newsContainer() {
    _classCallCheck(this, newsContainer);

    this.channel = '';
  }
  /*getNews() {
      [...newsElement.childNodes].forEach(el => el.remove());
      const url = `https://newsapi.org/v2/top-headlines?sources=${
          this.channel
      }&apiKey=${apiKey}`;
      this.loadNews(url,).then(data => {
          const {status, articles, message, ...rest} = data;
          if (status === 'ok') {
              for (let article of articles) {
                  newsElement.appendChild(this.createArticle(article));
              }
          } else {
              const messageElement = document.createElement('h3');
              messageElement.innerHTML = message;
              newsElement.appendChild(messageElement);
          }
      });
  }
  async loadNews(url,) {
      new Promise()
      const response = await fetch(url);
      const data = await response.json();
      return data;
  }*/
  //removed bocouse of async issues till the webpack added


  _createClass(newsContainer, [{
    key: "getNews",
    value: function getNews() {
      var _this = this;

      _toConsumableArray(newsElement.childNodes).forEach(function (el) {
        return el.remove();
      });

      var url = "https://newsapi.org/v2/top-headlines?sources=".concat(this.channel, "&apiKey=").concat(apiKey);
      fetch(url).then(function (response) {
        return response.json();
      }).then(function (data) {
        var status = data.status,
            articles = data.articles,
            message = data.message,
            rest = _objectWithoutProperties(data, ["status", "articles", "message"]);

        if (status === 'ok') {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = articles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var article = _step.value;
              newsElement.appendChild(_this.createArticle(article));
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        } else {
          var messageElement = document.createElement('h3');
          messageElement.innerHTML = message;
          newsElement.appendChild(messageElement);
        }
      });
    }
  }, {
    key: "setChannel",
    value: function setChannel(value) {
      this.channel = value;
    }
  }, {
    key: "createArticle",
    value: function createArticle(article) {
      var articleElement = document.createElement('article');
      articleElement.innerHTML = "\n        <h1>".concat(article.title, "</h1>\n        ").concat(article.author ? "<h4>By ".concat(article.author, "</h4>") : '', "\n        <h4>").concat(article.publishedAt, "</h4>\n        <h3>").concat(article.description, "</h3>\n        <p>").concat(article.content, "</p>\n        ");
      return articleElement;
    }
  }]);

  return newsContainer;
}();

window.container = new newsContainer();