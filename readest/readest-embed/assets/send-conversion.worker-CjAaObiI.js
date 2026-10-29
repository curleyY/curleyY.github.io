var xo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function _f(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
function Oo(a) {
  if (Object.prototype.hasOwnProperty.call(a, "__esModule")) return a;
  var e = a.default;
  if (typeof e == "function") {
    var t = function r() {
      var n = !1;
      try {
        n = this instanceof r;
      } catch {
      }
      return n ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(a).forEach(function(r) {
    var n = Object.getOwnPropertyDescriptor(a, r);
    Object.defineProperty(t, r, n.get ? n : {
      enumerable: !0,
      get: function() {
        return a[r];
      }
    });
  }), t;
}
var Or = { exports: {} }, Qn;
function Do() {
  return Qn || (Qn = 1, (function(a) {
    function e(t, r) {
      if (r && r.documentElement)
        t = r, r = arguments[2];
      else if (!t || !t.documentElement)
        throw new Error(
          "First argument to Readability constructor should be a document object."
        );
      if (r = r || {}, this._doc = t, this._docJSDOMParser = this._doc.firstChild.__JSDOMParser__, this._articleTitle = null, this._articleByline = null, this._articleDir = null, this._articleSiteName = null, this._attempts = [], this._metadata = {}, this._debug = !!r.debug, this._maxElemsToParse = r.maxElemsToParse || this.DEFAULT_MAX_ELEMS_TO_PARSE, this._nbTopCandidates = r.nbTopCandidates || this.DEFAULT_N_TOP_CANDIDATES, this._charThreshold = r.charThreshold || this.DEFAULT_CHAR_THRESHOLD, this._classesToPreserve = this.CLASSES_TO_PRESERVE.concat(
        r.classesToPreserve || []
      ), this._keepClasses = !!r.keepClasses, this._serializer = r.serializer || function(n) {
        return n.innerHTML;
      }, this._disableJSONLD = !!r.disableJSONLD, this._allowedVideoRegex = r.allowedVideoRegex || this.REGEXPS.videos, this._linkDensityModifier = r.linkDensityModifier || 0, this._flags = this.FLAG_STRIP_UNLIKELYS | this.FLAG_WEIGHT_CLASSES | this.FLAG_CLEAN_CONDITIONALLY, this._debug) {
        let n = function(i) {
          if (i.nodeType == i.TEXT_NODE)
            return `${i.nodeName} ("${i.textContent}")`;
          let s = Array.from(i.attributes || [], function(o) {
            return `${o.name}="${o.value}"`;
          }).join(" ");
          return `<${i.localName} ${s}>`;
        };
        this.log = function() {
          if (typeof console < "u") {
            let s = Array.from(arguments, (o) => o && o.nodeType == this.ELEMENT_NODE ? n(o) : o);
            s.unshift("Reader: (Readability)"), console.log(...s);
          } else if (typeof dump < "u") {
            var i = Array.prototype.map.call(arguments, function(s) {
              return s && s.nodeName ? n(s) : s;
            }).join(" ");
            dump("Reader: (Readability) " + i + `
`);
          }
        };
      } else
        this.log = function() {
        };
    }
    e.prototype = {
      FLAG_STRIP_UNLIKELYS: 1,
      FLAG_WEIGHT_CLASSES: 2,
      FLAG_CLEAN_CONDITIONALLY: 4,
      // https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
      ELEMENT_NODE: 1,
      TEXT_NODE: 3,
      // Max number of nodes supported by this parser. Default: 0 (no limit)
      DEFAULT_MAX_ELEMS_TO_PARSE: 0,
      // The number of top candidates to consider when analysing how
      // tight the competition is among candidates.
      DEFAULT_N_TOP_CANDIDATES: 5,
      // Element tags to score by default.
      DEFAULT_TAGS_TO_SCORE: "section,h2,h3,h4,h5,h6,p,td,pre".toUpperCase().split(","),
      // The default number of chars an article must have in order to return a result
      DEFAULT_CHAR_THRESHOLD: 500,
      // All of the regular expressions in use within readability.
      // Defined up here so we don't instantiate them repeatedly in loops.
      REGEXPS: {
        // NOTE: These two regular expressions are duplicated in
        // Readability-readerable.js. Please keep both copies in sync.
        unlikelyCandidates: /-ad-|ai2html|banner|breadcrumbs|combx|comment|community|cover-wrap|disqus|extra|footer|gdpr|header|legends|menu|related|remark|replies|rss|shoutbox|sidebar|skyscraper|social|sponsor|supplemental|ad-break|agegate|pagination|pager|popup|yom-remote/i,
        okMaybeItsACandidate: /and|article|body|column|content|main|shadow/i,
        positive: /article|body|content|entry|hentry|h-entry|main|page|pagination|post|text|blog|story/i,
        negative: /-ad-|hidden|^hid$| hid$| hid |^hid |banner|combx|comment|com-|contact|footer|gdpr|masthead|media|meta|outbrain|promo|related|scroll|share|shoutbox|sidebar|skyscraper|sponsor|shopping|tags|widget/i,
        extraneous: /print|archive|comment|discuss|e[\-]?mail|share|reply|all|login|sign|single|utility/i,
        byline: /byline|author|dateline|writtenby|p-author/i,
        replaceFonts: /<(\/?)font[^>]*>/gi,
        normalize: /\s{2,}/g,
        videos: /\/\/(www\.)?((dailymotion|youtube|youtube-nocookie|player\.vimeo|v\.qq)\.com|(archive|upload\.wikimedia)\.org|player\.twitch\.tv)/i,
        shareElements: /(\b|_)(share|sharedaddy)(\b|_)/i,
        nextLink: /(next|weiter|continue|>([^\|]|$)|»([^\|]|$))/i,
        prevLink: /(prev|earl|old|new|<|«)/i,
        tokenize: /\W+/g,
        whitespace: /^\s*$/,
        hasContent: /\S$/,
        hashUrl: /^#.+/,
        srcsetUrl: /(\S+)(\s+[\d.]+[xw])?(\s*(?:,|$))/g,
        b64DataUrl: /^data:\s*([^\s;,]+)\s*;\s*base64\s*,/i,
        // Commas as used in Latin, Sindhi, Chinese and various other scripts.
        // see: https://en.wikipedia.org/wiki/Comma#Comma_variants
        commas: /\u002C|\u060C|\uFE50|\uFE10|\uFE11|\u2E41|\u2E34|\u2E32|\uFF0C/g,
        // See: https://schema.org/Article
        jsonLdArticleTypes: /^Article|AdvertiserContentArticle|NewsArticle|AnalysisNewsArticle|AskPublicNewsArticle|BackgroundNewsArticle|OpinionNewsArticle|ReportageNewsArticle|ReviewNewsArticle|Report|SatiricalArticle|ScholarlyArticle|MedicalScholarlyArticle|SocialMediaPosting|BlogPosting|LiveBlogPosting|DiscussionForumPosting|TechArticle|APIReference$/,
        // used to see if a node's content matches words commonly used for ad blocks or loading indicators
        adWords: /^(ad(vertising|vertisement)?|pub(licité)?|werb(ung)?|广告|Реклама|Anuncio)$/iu,
        loadingWords: /^((loading|正在加载|Загрузка|chargement|cargando)(…|\.\.\.)?)$/iu
      },
      UNLIKELY_ROLES: [
        "menu",
        "menubar",
        "complementary",
        "navigation",
        "alert",
        "alertdialog",
        "dialog"
      ],
      DIV_TO_P_ELEMS: /* @__PURE__ */ new Set([
        "BLOCKQUOTE",
        "DL",
        "DIV",
        "IMG",
        "OL",
        "P",
        "PRE",
        "TABLE",
        "UL"
      ]),
      ALTER_TO_DIV_EXCEPTIONS: ["DIV", "ARTICLE", "SECTION", "P", "OL", "UL"],
      PRESENTATIONAL_ATTRIBUTES: [
        "align",
        "background",
        "bgcolor",
        "border",
        "cellpadding",
        "cellspacing",
        "frame",
        "hspace",
        "rules",
        "style",
        "valign",
        "vspace"
      ],
      DEPRECATED_SIZE_ATTRIBUTE_ELEMS: ["TABLE", "TH", "TD", "HR", "PRE"],
      // The commented out elements qualify as phrasing content but tend to be
      // removed by readability when put into paragraphs, so we ignore them here.
      PHRASING_ELEMS: [
        // "CANVAS", "IFRAME", "SVG", "VIDEO",
        "ABBR",
        "AUDIO",
        "B",
        "BDO",
        "BR",
        "BUTTON",
        "CITE",
        "CODE",
        "DATA",
        "DATALIST",
        "DFN",
        "EM",
        "EMBED",
        "I",
        "IMG",
        "INPUT",
        "KBD",
        "LABEL",
        "MARK",
        "MATH",
        "METER",
        "NOSCRIPT",
        "OBJECT",
        "OUTPUT",
        "PROGRESS",
        "Q",
        "RUBY",
        "SAMP",
        "SCRIPT",
        "SELECT",
        "SMALL",
        "SPAN",
        "STRONG",
        "SUB",
        "SUP",
        "TEXTAREA",
        "TIME",
        "VAR",
        "WBR"
      ],
      // These are the classes that readability sets itself.
      CLASSES_TO_PRESERVE: ["page"],
      // These are the list of HTML entities that need to be escaped.
      HTML_ESCAPE_MAP: {
        lt: "<",
        gt: ">",
        amp: "&",
        quot: '"',
        apos: "'"
      },
      /**
       * Run any post-process modifications to article content as necessary.
       *
       * @param Element
       * @return void
       **/
      _postProcessContent(t) {
        this._fixRelativeUris(t), this._simplifyNestedElements(t), this._keepClasses || this._cleanClasses(t);
      },
      /**
       * Iterates over a NodeList, calls `filterFn` for each node and removes node
       * if function returned `true`.
       *
       * If function is not passed, removes all the nodes in node list.
       *
       * @param NodeList nodeList The nodes to operate on
       * @param Function filterFn the function to use as a filter
       * @return void
       */
      _removeNodes(t, r) {
        if (this._docJSDOMParser && t._isLiveNodeList)
          throw new Error("Do not pass live node lists to _removeNodes");
        for (var n = t.length - 1; n >= 0; n--) {
          var i = t[n], s = i.parentNode;
          s && (!r || r.call(this, i, n, t)) && s.removeChild(i);
        }
      },
      /**
       * Iterates over a NodeList, and calls _setNodeTag for each node.
       *
       * @param NodeList nodeList The nodes to operate on
       * @param String newTagName the new tag name to use
       * @return void
       */
      _replaceNodeTags(t, r) {
        if (this._docJSDOMParser && t._isLiveNodeList)
          throw new Error("Do not pass live node lists to _replaceNodeTags");
        for (const n of t)
          this._setNodeTag(n, r);
      },
      /**
       * Iterate over a NodeList, which doesn't natively fully implement the Array
       * interface.
       *
       * For convenience, the current object context is applied to the provided
       * iterate function.
       *
       * @param  NodeList nodeList The NodeList.
       * @param  Function fn       The iterate function.
       * @return void
       */
      _forEachNode(t, r) {
        Array.prototype.forEach.call(t, r, this);
      },
      /**
       * Iterate over a NodeList, and return the first node that passes
       * the supplied test function
       *
       * For convenience, the current object context is applied to the provided
       * test function.
       *
       * @param  NodeList nodeList The NodeList.
       * @param  Function fn       The test function.
       * @return void
       */
      _findNode(t, r) {
        return Array.prototype.find.call(t, r, this);
      },
      /**
       * Iterate over a NodeList, return true if any of the provided iterate
       * function calls returns true, false otherwise.
       *
       * For convenience, the current object context is applied to the
       * provided iterate function.
       *
       * @param  NodeList nodeList The NodeList.
       * @param  Function fn       The iterate function.
       * @return Boolean
       */
      _someNode(t, r) {
        return Array.prototype.some.call(t, r, this);
      },
      /**
       * Iterate over a NodeList, return true if all of the provided iterate
       * function calls return true, false otherwise.
       *
       * For convenience, the current object context is applied to the
       * provided iterate function.
       *
       * @param  NodeList nodeList The NodeList.
       * @param  Function fn       The iterate function.
       * @return Boolean
       */
      _everyNode(t, r) {
        return Array.prototype.every.call(t, r, this);
      },
      _getAllNodesWithTag(t, r) {
        return t.querySelectorAll ? t.querySelectorAll(r.join(",")) : [].concat.apply(
          [],
          r.map(function(n) {
            var i = t.getElementsByTagName(n);
            return Array.isArray(i) ? i : Array.from(i);
          })
        );
      },
      /**
       * Removes the class="" attribute from every element in the given
       * subtree, except those that match CLASSES_TO_PRESERVE and
       * the classesToPreserve array from the options object.
       *
       * @param Element
       * @return void
       */
      _cleanClasses(t) {
        var r = this._classesToPreserve, n = (t.getAttribute("class") || "").split(/\s+/).filter((i) => r.includes(i)).join(" ");
        for (n ? t.setAttribute("class", n) : t.removeAttribute("class"), t = t.firstElementChild; t; t = t.nextElementSibling)
          this._cleanClasses(t);
      },
      /**
       * Tests whether a string is a URL or not.
       *
       * @param {string} str The string to test
       * @return {boolean} true if str is a URL, false if not
       */
      _isUrl(t) {
        try {
          return new URL(t), !0;
        } catch {
          return !1;
        }
      },
      /**
       * Converts each <a> and <img> uri in the given element to an absolute URI,
       * ignoring #ref URIs.
       *
       * @param Element
       * @return void
       */
      _fixRelativeUris(t) {
        var r = this._doc.baseURI, n = this._doc.documentURI;
        function i(l) {
          if (r == n && l.charAt(0) == "#")
            return l;
          try {
            return new URL(l, r).href;
          } catch {
          }
          return l;
        }
        var s = this._getAllNodesWithTag(t, ["a"]);
        this._forEachNode(s, function(l) {
          var u = l.getAttribute("href");
          if (u)
            if (u.indexOf("javascript:") === 0)
              if (l.childNodes.length === 1 && l.childNodes[0].nodeType === this.TEXT_NODE) {
                var f = this._doc.createTextNode(l.textContent);
                l.parentNode.replaceChild(f, l);
              } else {
                for (var d = this._doc.createElement("span"); l.firstChild; )
                  d.appendChild(l.firstChild);
                l.parentNode.replaceChild(d, l);
              }
            else
              l.setAttribute("href", i(u));
        });
        var o = this._getAllNodesWithTag(t, [
          "img",
          "picture",
          "figure",
          "video",
          "audio",
          "source"
        ]);
        this._forEachNode(o, function(l) {
          var u = l.getAttribute("src"), f = l.getAttribute("poster"), d = l.getAttribute("srcset");
          if (u && l.setAttribute("src", i(u)), f && l.setAttribute("poster", i(f)), d) {
            var g = d.replace(
              this.REGEXPS.srcsetUrl,
              function(b, v, A, D) {
                return i(v) + (A || "") + D;
              }
            );
            l.setAttribute("srcset", g);
          }
        });
      },
      _simplifyNestedElements(t) {
        for (var r = t; r; ) {
          if (r.parentNode && ["DIV", "SECTION"].includes(r.tagName) && !(r.id && r.id.startsWith("readability"))) {
            if (this._isElementWithoutContent(r)) {
              r = this._removeAndGetNext(r);
              continue;
            } else if (this._hasSingleTagInsideElement(r, "DIV") || this._hasSingleTagInsideElement(r, "SECTION")) {
              for (var n = r.children[0], i = 0; i < r.attributes.length; i++)
                n.setAttributeNode(r.attributes[i].cloneNode());
              r.parentNode.replaceChild(n, r), r = n;
              continue;
            }
          }
          r = this._getNextNode(r);
        }
      },
      /**
       * Get the article title as an H1.
       *
       * @return string
       **/
      _getArticleTitle() {
        var t = this._doc, r = "", n = "";
        try {
          r = n = t.title.trim(), typeof r != "string" && (r = n = this._getInnerText(
            t.getElementsByTagName("title")[0]
          ));
        } catch {
        }
        var i = !1;
        function s(g) {
          return g.split(/\s+/).length;
        }
        if (/ [\|\-\\\/>»] /.test(r)) {
          i = / [\\\/>»] /.test(r);
          let g = Array.from(n.matchAll(/ [\|\-\\\/>»] /gi));
          r = n.substring(0, g.pop().index), s(r) < 3 && (r = n.replace(/^[^\|\-\\\/>»]*[\|\-\\\/>»]/gi, ""));
        } else if (r.includes(": ")) {
          var o = this._getAllNodesWithTag(t, ["h1", "h2"]), l = r.trim(), u = this._someNode(o, function(g) {
            return g.textContent.trim() === l;
          });
          u || (r = n.substring(n.lastIndexOf(":") + 1), s(r) < 3 ? r = n.substring(n.indexOf(":") + 1) : s(n.substr(0, n.indexOf(":"))) > 5 && (r = n));
        } else if (r.length > 150 || r.length < 15) {
          var f = t.getElementsByTagName("h1");
          f.length === 1 && (r = this._getInnerText(f[0]));
        }
        r = r.trim().replace(this.REGEXPS.normalize, " ");
        var d = s(r);
        return d <= 4 && (!i || d != s(n.replace(/[\|\-\\\/>»]+/g, "")) - 1) && (r = n), r;
      },
      /**
       * Prepare the HTML document for readability to scrape it.
       * This includes things like stripping javascript, CSS, and handling terrible markup.
       *
       * @return void
       **/
      _prepDocument() {
        var t = this._doc;
        this._removeNodes(this._getAllNodesWithTag(t, ["style"])), t.body && this._replaceBrs(t.body), this._replaceNodeTags(this._getAllNodesWithTag(t, ["font"]), "SPAN");
      },
      /**
       * Finds the next node, starting from the given node, and ignoring
       * whitespace in between. If the given node is an element, the same node is
       * returned.
       */
      _nextNode(t) {
        for (var r = t; r && r.nodeType != this.ELEMENT_NODE && this.REGEXPS.whitespace.test(r.textContent); )
          r = r.nextSibling;
        return r;
      },
      /**
       * Replaces 2 or more successive <br> elements with a single <p>.
       * Whitespace between <br> elements are ignored. For example:
       *   <div>foo<br>bar<br> <br><br>abc</div>
       * will become:
       *   <div>foo<br>bar<p>abc</p></div>
       */
      _replaceBrs(t) {
        this._forEachNode(this._getAllNodesWithTag(t, ["br"]), function(r) {
          for (var n = r.nextSibling, i = !1; (n = this._nextNode(n)) && n.tagName == "BR"; ) {
            i = !0;
            var s = n.nextSibling;
            n.remove(), n = s;
          }
          if (i) {
            var o = this._doc.createElement("p");
            for (r.parentNode.replaceChild(o, r), n = o.nextSibling; n; ) {
              if (n.tagName == "BR") {
                var l = this._nextNode(n.nextSibling);
                if (l && l.tagName == "BR")
                  break;
              }
              if (!this._isPhrasingContent(n))
                break;
              var u = n.nextSibling;
              o.appendChild(n), n = u;
            }
            for (; o.lastChild && this._isWhitespace(o.lastChild); )
              o.lastChild.remove();
            o.parentNode.tagName === "P" && this._setNodeTag(o.parentNode, "DIV");
          }
        });
      },
      _setNodeTag(t, r) {
        if (this.log("_setNodeTag", t, r), this._docJSDOMParser)
          return t.localName = r.toLowerCase(), t.tagName = r.toUpperCase(), t;
        for (var n = t.ownerDocument.createElement(r); t.firstChild; )
          n.appendChild(t.firstChild);
        t.parentNode.replaceChild(n, t), t.readability && (n.readability = t.readability);
        for (var i = 0; i < t.attributes.length; i++)
          n.setAttributeNode(t.attributes[i].cloneNode());
        return n;
      },
      /**
       * Prepare the article node for display. Clean out any inline styles,
       * iframes, forms, strip extraneous <p> tags, etc.
       *
       * @param Element
       * @return void
       **/
      _prepArticle(t) {
        this._cleanStyles(t), this._markDataTables(t), this._fixLazyImages(t), this._cleanConditionally(t, "form"), this._cleanConditionally(t, "fieldset"), this._clean(t, "object"), this._clean(t, "embed"), this._clean(t, "footer"), this._clean(t, "link"), this._clean(t, "aside");
        var r = this.DEFAULT_CHAR_THRESHOLD;
        this._forEachNode(t.children, function(n) {
          this._cleanMatchedNodes(n, function(i, s) {
            return this.REGEXPS.shareElements.test(s) && i.textContent.length < r;
          });
        }), this._clean(t, "iframe"), this._clean(t, "input"), this._clean(t, "textarea"), this._clean(t, "select"), this._clean(t, "button"), this._cleanHeaders(t), this._cleanConditionally(t, "table"), this._cleanConditionally(t, "ul"), this._cleanConditionally(t, "div"), this._replaceNodeTags(
          this._getAllNodesWithTag(t, ["h1"]),
          "h2"
        ), this._removeNodes(
          this._getAllNodesWithTag(t, ["p"]),
          function(n) {
            var i = this._getAllNodesWithTag(n, [
              "img",
              "embed",
              "object",
              "iframe"
            ]).length;
            return i === 0 && !this._getInnerText(n, !1);
          }
        ), this._forEachNode(
          this._getAllNodesWithTag(t, ["br"]),
          function(n) {
            var i = this._nextNode(n.nextSibling);
            i && i.tagName == "P" && n.remove();
          }
        ), this._forEachNode(
          this._getAllNodesWithTag(t, ["table"]),
          function(n) {
            var i = this._hasSingleTagInsideElement(n, "TBODY") ? n.firstElementChild : n;
            if (this._hasSingleTagInsideElement(i, "TR")) {
              var s = i.firstElementChild;
              if (this._hasSingleTagInsideElement(s, "TD")) {
                var o = s.firstElementChild;
                o = this._setNodeTag(
                  o,
                  this._everyNode(o.childNodes, this._isPhrasingContent) ? "P" : "DIV"
                ), n.parentNode.replaceChild(o, n);
              }
            }
          }
        );
      },
      /**
       * Initialize a node with the readability object. Also checks the
       * className/id for special names to add to its score.
       *
       * @param Element
       * @return void
       **/
      _initializeNode(t) {
        switch (t.readability = { contentScore: 0 }, t.tagName) {
          case "DIV":
            t.readability.contentScore += 5;
            break;
          case "PRE":
          case "TD":
          case "BLOCKQUOTE":
            t.readability.contentScore += 3;
            break;
          case "ADDRESS":
          case "OL":
          case "UL":
          case "DL":
          case "DD":
          case "DT":
          case "LI":
          case "FORM":
            t.readability.contentScore -= 3;
            break;
          case "H1":
          case "H2":
          case "H3":
          case "H4":
          case "H5":
          case "H6":
          case "TH":
            t.readability.contentScore -= 5;
            break;
        }
        t.readability.contentScore += this._getClassWeight(t);
      },
      _removeAndGetNext(t) {
        var r = this._getNextNode(t, !0);
        return t.remove(), r;
      },
      /**
       * Traverse the DOM from node to node, starting at the node passed in.
       * Pass true for the second parameter to indicate this node itself
       * (and its kids) are going away, and we want the next node over.
       *
       * Calling this in a loop will traverse the DOM depth-first.
       *
       * @param {Element} node
       * @param {boolean} ignoreSelfAndKids
       * @return {Element}
       */
      _getNextNode(t, r) {
        if (!r && t.firstElementChild)
          return t.firstElementChild;
        if (t.nextElementSibling)
          return t.nextElementSibling;
        do
          t = t.parentNode;
        while (t && !t.nextElementSibling);
        return t && t.nextElementSibling;
      },
      // compares second text to first one
      // 1 = same text, 0 = completely different text
      // works the way that it splits both texts into words and then finds words that are unique in second text
      // the result is given by the lower length of unique parts
      _textSimilarity(t, r) {
        var n = t.toLowerCase().split(this.REGEXPS.tokenize).filter(Boolean), i = r.toLowerCase().split(this.REGEXPS.tokenize).filter(Boolean);
        if (!n.length || !i.length)
          return 0;
        var s = i.filter((l) => !n.includes(l)), o = s.join(" ").length / i.join(" ").length;
        return 1 - o;
      },
      /**
       * Checks whether an element node contains a valid byline
       *
       * @param node {Element}
       * @param matchString {string}
       * @return boolean
       */
      _isValidByline(t, r) {
        var n = t.getAttribute("rel"), i = t.getAttribute("itemprop"), s = t.textContent.trim().length;
        return (n === "author" || i && i.includes("author") || this.REGEXPS.byline.test(r)) && !!s && s < 100;
      },
      _getNodeAncestors(t, r) {
        r = r || 0;
        for (var n = 0, i = []; t.parentNode && (i.push(t.parentNode), !(r && ++n === r)); )
          t = t.parentNode;
        return i;
      },
      /***
       * grabArticle - Using a variety of metrics (content score, classname, element types), find the content that is
       *         most likely to be the stuff a user wants to read. Then return it wrapped up in a div.
       *
       * @param page a document to run upon. Needs to be a full document, complete with body.
       * @return Element
       **/
      /* eslint-disable-next-line complexity */
      _grabArticle(t) {
        this.log("**** grabArticle ****");
        var r = this._doc, n = t !== null;
        if (t = t || this._doc.body, !t)
          return this.log("No body found in document. Abort."), null;
        for (var i = t.innerHTML; ; ) {
          this.log("Starting grabArticle loop");
          var s = this._flagIsActive(
            this.FLAG_STRIP_UNLIKELYS
          ), o = [], l = this._doc.documentElement;
          let Y = !0;
          for (; l; ) {
            l.tagName === "HTML" && (this._articleLang = l.getAttribute("lang"));
            var u = l.className + " " + l.id;
            if (!this._isProbablyVisible(l)) {
              this.log("Removing hidden node - " + u), l = this._removeAndGetNext(l);
              continue;
            }
            if (l.getAttribute("aria-modal") == "true" && l.getAttribute("role") == "dialog") {
              l = this._removeAndGetNext(l);
              continue;
            }
            if (!this._articleByline && !this._metadata.byline && this._isValidByline(l, u)) {
              for (var f = this._getNextNode(l, !0), d = this._getNextNode(l), g = null; d && d != f; ) {
                var b = d.getAttribute("itemprop");
                if (b && b.includes("name")) {
                  g = d;
                  break;
                } else
                  d = this._getNextNode(d);
              }
              this._articleByline = (g ?? l).textContent.trim(), l = this._removeAndGetNext(l);
              continue;
            }
            if (Y && this._headerDuplicatesTitle(l)) {
              this.log(
                "Removing header: ",
                l.textContent.trim(),
                this._articleTitle.trim()
              ), Y = !1, l = this._removeAndGetNext(l);
              continue;
            }
            if (s) {
              if (this.REGEXPS.unlikelyCandidates.test(u) && !this.REGEXPS.okMaybeItsACandidate.test(u) && !this._hasAncestorTag(l, "table") && !this._hasAncestorTag(l, "code") && l.tagName !== "BODY" && l.tagName !== "A") {
                this.log("Removing unlikely candidate - " + u), l = this._removeAndGetNext(l);
                continue;
              }
              if (this.UNLIKELY_ROLES.includes(l.getAttribute("role"))) {
                this.log(
                  "Removing content with role " + l.getAttribute("role") + " - " + u
                ), l = this._removeAndGetNext(l);
                continue;
              }
            }
            if ((l.tagName === "DIV" || l.tagName === "SECTION" || l.tagName === "HEADER" || l.tagName === "H1" || l.tagName === "H2" || l.tagName === "H3" || l.tagName === "H4" || l.tagName === "H5" || l.tagName === "H6") && this._isElementWithoutContent(l)) {
              l = this._removeAndGetNext(l);
              continue;
            }
            if (this.DEFAULT_TAGS_TO_SCORE.includes(l.tagName) && o.push(l), l.tagName === "DIV") {
              for (var v = null, A = l.firstChild; A; ) {
                var D = A.nextSibling;
                if (this._isPhrasingContent(A))
                  v !== null ? v.appendChild(A) : this._isWhitespace(A) || (v = r.createElement("p"), l.replaceChild(v, A), v.appendChild(A));
                else if (v !== null) {
                  for (; v.lastChild && this._isWhitespace(v.lastChild); )
                    v.lastChild.remove();
                  v = null;
                }
                A = D;
              }
              if (this._hasSingleTagInsideElement(l, "P") && this._getLinkDensity(l) < 0.25) {
                var x = l.children[0];
                l.parentNode.replaceChild(x, l), l = x, o.push(l);
              } else this._hasChildBlockElement(l) || (l = this._setNodeTag(l, "P"), o.push(l));
            }
            l = this._getNextNode(l);
          }
          var O = [];
          this._forEachNode(o, function(ve) {
            if (!(!ve.parentNode || typeof ve.parentNode.tagName > "u")) {
              var V = this._getInnerText(ve);
              if (!(V.length < 25)) {
                var yt = this._getNodeAncestors(ve, 5);
                if (yt.length !== 0) {
                  var ge = 0;
                  ge += 1, ge += V.split(this.REGEXPS.commas).length, ge += Math.min(Math.floor(V.length / 100), 3), this._forEachNode(yt, function(_e, bt) {
                    if (!(!_e.tagName || !_e.parentNode || typeof _e.parentNode.tagName > "u")) {
                      if (typeof _e.readability > "u" && (this._initializeNode(_e), O.push(_e)), bt === 0)
                        var Ae = 1;
                      else bt === 1 ? Ae = 2 : Ae = bt * 3;
                      _e.readability.contentScore += ge / Ae;
                    }
                  });
                }
              }
            }
          });
          for (var _ = [], I = 0, j = O.length; I < j; I += 1) {
            var C = O[I], S = C.readability.contentScore * (1 - this._getLinkDensity(C));
            C.readability.contentScore = S, this.log("Candidate:", C, "with score " + S);
            for (var $ = 0; $ < this._nbTopCandidates; $++) {
              var L = _[$];
              if (!L || S > L.readability.contentScore) {
                _.splice($, 0, C), _.length > this._nbTopCandidates && _.pop();
                break;
              }
            }
          }
          var M = _[0] || null, G = !1, h;
          if (M === null || M.tagName === "BODY") {
            for (M = r.createElement("DIV"), G = !0; t.firstChild; )
              this.log("Moving child out:", t.firstChild), M.appendChild(t.firstChild);
            t.appendChild(M), this._initializeNode(M);
          } else if (M) {
            for (var p = [], y = 1; y < _.length; y++)
              _[y].readability.contentScore / M.readability.contentScore >= 0.75 && p.push(
                this._getNodeAncestors(_[y])
              );
            var m = 3;
            if (p.length >= m)
              for (h = M.parentNode; h.tagName !== "BODY"; ) {
                for (var z = 0, N = 0; N < p.length && z < m; N++)
                  z += Number(
                    p[N].includes(
                      h
                    )
                  );
                if (z >= m) {
                  M = h;
                  break;
                }
                h = h.parentNode;
              }
            M.readability || this._initializeNode(M), h = M.parentNode;
            for (var R = M.readability.contentScore, U = R / 3; h.tagName !== "BODY"; ) {
              if (!h.readability) {
                h = h.parentNode;
                continue;
              }
              var Q = h.readability.contentScore;
              if (Q < U)
                break;
              if (Q > R) {
                M = h;
                break;
              }
              R = h.readability.contentScore, h = h.parentNode;
            }
            for (h = M.parentNode; h.tagName != "BODY" && h.children.length == 1; )
              M = h, h = M.parentNode;
            M.readability || this._initializeNode(M);
          }
          var ae = r.createElement("DIV");
          n && (ae.id = "readability-content");
          var tt = Math.max(
            10,
            M.readability.contentScore * 0.2
          );
          h = M.parentNode;
          for (var Vt = h.children, gt = 0, ka = Vt.length; gt < ka; gt++) {
            var W = Vt[gt], at = !1;
            if (this.log(
              "Looking at sibling node:",
              W,
              W.readability ? "with score " + W.readability.contentScore : ""
            ), this.log(
              "Sibling has score",
              W.readability ? W.readability.contentScore : "Unknown"
            ), W === M)
              at = !0;
            else {
              var Ea = 0;
              if (W.className === M.className && M.className !== "" && (Ea += M.readability.contentScore * 0.2), W.readability && W.readability.contentScore + Ea >= tt)
                at = !0;
              else if (W.nodeName === "P") {
                var Aa = this._getLinkDensity(W), Sa = this._getInnerText(W), Jt = Sa.length;
                (Jt > 80 && Aa < 0.25 || Jt < 80 && Jt > 0 && Aa === 0 && Sa.search(/\.( |$)/) !== -1) && (at = !0);
              }
            }
            at && (this.log("Appending node:", W), this.ALTER_TO_DIV_EXCEPTIONS.includes(W.nodeName) || (this.log("Altering sibling:", W, "to div."), W = this._setNodeTag(W, "DIV")), ae.appendChild(W), Vt = h.children, gt -= 1, ka -= 1);
          }
          if (this._debug && this.log("Article content pre-prep: " + ae.innerHTML), this._prepArticle(ae), this._debug && this.log("Article content post-prep: " + ae.innerHTML), G)
            M.id = "readability-page-1", M.className = "page";
          else {
            var mt = r.createElement("DIV");
            for (mt.id = "readability-page-1", mt.className = "page"; ae.firstChild; )
              mt.appendChild(ae.firstChild);
            ae.appendChild(mt);
          }
          this._debug && this.log("Article content after paging: " + ae.innerHTML);
          var pt = !0, Ta = this._getInnerText(ae, !0).length;
          if (Ta < this._charThreshold)
            if (pt = !1, t.innerHTML = i, this._attempts.push({
              articleContent: ae,
              textLength: Ta
            }), this._flagIsActive(this.FLAG_STRIP_UNLIKELYS))
              this._removeFlag(this.FLAG_STRIP_UNLIKELYS);
            else if (this._flagIsActive(this.FLAG_WEIGHT_CLASSES))
              this._removeFlag(this.FLAG_WEIGHT_CLASSES);
            else if (this._flagIsActive(this.FLAG_CLEAN_CONDITIONALLY))
              this._removeFlag(this.FLAG_CLEAN_CONDITIONALLY);
            else {
              if (this._attempts.sort(function(ve, V) {
                return V.textLength - ve.textLength;
              }), !this._attempts[0].textLength)
                return null;
              ae = this._attempts[0].articleContent, pt = !0;
            }
          if (pt) {
            var Na = [h, M].concat(
              this._getNodeAncestors(h)
            );
            return this._someNode(Na, function(ve) {
              if (!ve.tagName)
                return !1;
              var V = ve.getAttribute("dir");
              return V ? (this._articleDir = V, !0) : !1;
            }), ae;
          }
        }
      },
      /**
       * Converts some of the common HTML entities in string to their corresponding characters.
       *
       * @param str {string} - a string to unescape.
       * @return string without HTML entity.
       */
      _unescapeHtmlEntities(t) {
        if (!t)
          return t;
        var r = this.HTML_ESCAPE_MAP;
        return t.replace(/&(quot|amp|apos|lt|gt);/g, function(n, i) {
          return r[i];
        }).replace(/&#(?:x([0-9a-f]+)|([0-9]+));/gi, function(n, i, s) {
          var o = parseInt(i || s, i ? 16 : 10);
          return (o == 0 || o > 1114111 || o >= 55296 && o <= 57343) && (o = 65533), String.fromCodePoint(o);
        });
      },
      /**
       * Try to extract metadata from JSON-LD object.
       * For now, only Schema.org objects of type Article or its subtypes are supported.
       * @return Object with any metadata that could be extracted (possibly none)
       */
      _getJSONLD(t) {
        var r = this._getAllNodesWithTag(t, ["script"]), n;
        return this._forEachNode(r, function(i) {
          if (!n && i.getAttribute("type") === "application/ld+json")
            try {
              var s = i.textContent.replace(
                /^\s*<!\[CDATA\[|\]\]>\s*$/g,
                ""
              ), o = JSON.parse(s);
              if (Array.isArray(o) && (o = o.find((b) => b["@type"] && b["@type"].match(this.REGEXPS.jsonLdArticleTypes)), !o))
                return;
              var l = /^https?\:\/\/schema\.org\/?$/, u = typeof o["@context"] == "string" && o["@context"].match(l) || typeof o["@context"] == "object" && typeof o["@context"]["@vocab"] == "string" && o["@context"]["@vocab"].match(l);
              if (!u || (!o["@type"] && Array.isArray(o["@graph"]) && (o = o["@graph"].find((b) => (b["@type"] || "").match(this.REGEXPS.jsonLdArticleTypes))), !o || !o["@type"] || !o["@type"].match(this.REGEXPS.jsonLdArticleTypes)))
                return;
              if (n = {}, typeof o.name == "string" && typeof o.headline == "string" && o.name !== o.headline) {
                var f = this._getArticleTitle(), d = this._textSimilarity(o.name, f) > 0.75, g = this._textSimilarity(o.headline, f) > 0.75;
                g && !d ? n.title = o.headline : n.title = o.name;
              } else typeof o.name == "string" ? n.title = o.name.trim() : typeof o.headline == "string" && (n.title = o.headline.trim());
              o.author && (typeof o.author.name == "string" ? n.byline = o.author.name.trim() : Array.isArray(o.author) && o.author[0] && typeof o.author[0].name == "string" && (n.byline = o.author.filter(function(b) {
                return b && typeof b.name == "string";
              }).map(function(b) {
                return b.name.trim();
              }).join(", "))), typeof o.description == "string" && (n.excerpt = o.description.trim()), o.publisher && typeof o.publisher.name == "string" && (n.siteName = o.publisher.name.trim()), typeof o.datePublished == "string" && (n.datePublished = o.datePublished.trim());
            } catch (b) {
              this.log(b.message);
            }
        }), n || {};
      },
      /**
       * Attempts to get excerpt and byline metadata for the article.
       *
       * @param {Object} jsonld — object containing any metadata that
       * could be extracted from JSON-LD object.
       *
       * @return Object with optional "excerpt" and "byline" properties
       */
      _getArticleMetadata(t) {
        var r = {}, n = {}, i = this._doc.getElementsByTagName("meta"), s = /\s*(article|dc|dcterm|og|twitter)\s*:\s*(author|creator|description|published_time|title|site_name)\s*/gi, o = /^\s*(?:(dc|dcterm|og|twitter|parsely|weibo:(article|webpage))\s*[-\.:]\s*)?(author|creator|pub-date|description|title|site_name)\s*$/i;
        this._forEachNode(i, function(u) {
          var f = u.getAttribute("name"), d = u.getAttribute("property"), g = u.getAttribute("content");
          if (g) {
            var b = null, v = null;
            d && (b = d.match(s), b && (v = b[0].toLowerCase().replace(/\s/g, ""), n[v] = g.trim())), !b && f && o.test(f) && (v = f, g && (v = v.toLowerCase().replace(/\s/g, "").replace(/\./g, ":"), n[v] = g.trim()));
          }
        }), r.title = t.title || n["dc:title"] || n["dcterm:title"] || n["og:title"] || n["weibo:article:title"] || n["weibo:webpage:title"] || n.title || n["twitter:title"] || n["parsely-title"], r.title || (r.title = this._getArticleTitle());
        const l = typeof n["article:author"] == "string" && !this._isUrl(n["article:author"]) ? n["article:author"] : void 0;
        return r.byline = t.byline || n["dc:creator"] || n["dcterm:creator"] || n.author || n["parsely-author"] || l, r.excerpt = t.excerpt || n["dc:description"] || n["dcterm:description"] || n["og:description"] || n["weibo:article:description"] || n["weibo:webpage:description"] || n.description || n["twitter:description"], r.siteName = t.siteName || n["og:site_name"], r.publishedTime = t.datePublished || n["article:published_time"] || n["parsely-pub-date"] || null, r.title = this._unescapeHtmlEntities(r.title), r.byline = this._unescapeHtmlEntities(r.byline), r.excerpt = this._unescapeHtmlEntities(r.excerpt), r.siteName = this._unescapeHtmlEntities(r.siteName), r.publishedTime = this._unescapeHtmlEntities(r.publishedTime), r;
      },
      /**
       * Check if node is image, or if node contains exactly only one image
       * whether as a direct child or as its descendants.
       *
       * @param Element
       **/
      _isSingleImage(t) {
        for (; t; ) {
          if (t.tagName === "IMG")
            return !0;
          if (t.children.length !== 1 || t.textContent.trim() !== "")
            return !1;
          t = t.children[0];
        }
        return !1;
      },
      /**
       * Find all <noscript> that are located after <img> nodes, and which contain only one
       * <img> element. Replace the first image with the image from inside the <noscript> tag,
       * and remove the <noscript> tag. This improves the quality of the images we use on
       * some sites (e.g. Medium).
       *
       * @param Element
       **/
      _unwrapNoscriptImages(t) {
        var r = Array.from(t.getElementsByTagName("img"));
        this._forEachNode(r, function(i) {
          for (var s = 0; s < i.attributes.length; s++) {
            var o = i.attributes[s];
            switch (o.name) {
              case "src":
              case "srcset":
              case "data-src":
              case "data-srcset":
                return;
            }
            if (/\.(jpg|jpeg|png|webp)/i.test(o.value))
              return;
          }
          i.remove();
        });
        var n = Array.from(t.getElementsByTagName("noscript"));
        this._forEachNode(n, function(i) {
          if (this._isSingleImage(i)) {
            var s = t.createElement("div");
            s.innerHTML = i.innerHTML;
            var o = i.previousElementSibling;
            if (o && this._isSingleImage(o)) {
              var l = o;
              l.tagName !== "IMG" && (l = o.getElementsByTagName("img")[0]);
              for (var u = s.getElementsByTagName("img")[0], f = 0; f < l.attributes.length; f++) {
                var d = l.attributes[f];
                if (d.value !== "" && (d.name === "src" || d.name === "srcset" || /\.(jpg|jpeg|png|webp)/i.test(d.value))) {
                  if (u.getAttribute(d.name) === d.value)
                    continue;
                  var g = d.name;
                  u.hasAttribute(g) && (g = "data-old-" + g), u.setAttribute(g, d.value);
                }
              }
              i.parentNode.replaceChild(s.firstElementChild, o);
            }
          }
        });
      },
      /**
       * Removes script tags from the document.
       *
       * @param Element
       **/
      _removeScripts(t) {
        this._removeNodes(this._getAllNodesWithTag(t, ["script", "noscript"]));
      },
      /**
       * Check if this node has only whitespace and a single element with given tag
       * Returns false if the DIV node contains non-empty text nodes
       * or if it contains no element with given tag or more than 1 element.
       *
       * @param Element
       * @param string tag of child element
       **/
      _hasSingleTagInsideElement(t, r) {
        return t.children.length != 1 || t.children[0].tagName !== r ? !1 : !this._someNode(t.childNodes, function(n) {
          return n.nodeType === this.TEXT_NODE && this.REGEXPS.hasContent.test(n.textContent);
        });
      },
      _isElementWithoutContent(t) {
        return t.nodeType === this.ELEMENT_NODE && !t.textContent.trim().length && (!t.children.length || t.children.length == t.getElementsByTagName("br").length + t.getElementsByTagName("hr").length);
      },
      /**
       * Determine whether element has any children block level elements.
       *
       * @param Element
       */
      _hasChildBlockElement(t) {
        return this._someNode(t.childNodes, function(r) {
          return this.DIV_TO_P_ELEMS.has(r.tagName) || this._hasChildBlockElement(r);
        });
      },
      /***
       * Determine if a node qualifies as phrasing content.
       * https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Phrasing_content
       **/
      _isPhrasingContent(t) {
        return t.nodeType === this.TEXT_NODE || this.PHRASING_ELEMS.includes(t.tagName) || (t.tagName === "A" || t.tagName === "DEL" || t.tagName === "INS") && this._everyNode(t.childNodes, this._isPhrasingContent);
      },
      _isWhitespace(t) {
        return t.nodeType === this.TEXT_NODE && t.textContent.trim().length === 0 || t.nodeType === this.ELEMENT_NODE && t.tagName === "BR";
      },
      /**
       * Get the inner text of a node - cross browser compatibly.
       * This also strips out any excess whitespace to be found.
       *
       * @param Element
       * @param Boolean normalizeSpaces (default: true)
       * @return string
       **/
      _getInnerText(t, r) {
        r = typeof r > "u" ? !0 : r;
        var n = t.textContent.trim();
        return r ? n.replace(this.REGEXPS.normalize, " ") : n;
      },
      /**
       * Get the number of times a string s appears in the node e.
       *
       * @param Element
       * @param string - what to split on. Default is ","
       * @return number (integer)
       **/
      _getCharCount(t, r) {
        return r = r || ",", this._getInnerText(t).split(r).length - 1;
      },
      /**
       * Remove the style attribute on every e and under.
       * TODO: Test if getElementsByTagName(*) is faster.
       *
       * @param Element
       * @return void
       **/
      _cleanStyles(t) {
        if (!(!t || t.tagName.toLowerCase() === "svg")) {
          for (var r = 0; r < this.PRESENTATIONAL_ATTRIBUTES.length; r++)
            t.removeAttribute(this.PRESENTATIONAL_ATTRIBUTES[r]);
          this.DEPRECATED_SIZE_ATTRIBUTE_ELEMS.includes(t.tagName) && (t.removeAttribute("width"), t.removeAttribute("height"));
          for (var n = t.firstElementChild; n !== null; )
            this._cleanStyles(n), n = n.nextElementSibling;
        }
      },
      /**
       * Get the density of links as a percentage of the content
       * This is the amount of text that is inside a link divided by the total text in the node.
       *
       * @param Element
       * @return number (float)
       **/
      _getLinkDensity(t) {
        var r = this._getInnerText(t).length;
        if (r === 0)
          return 0;
        var n = 0;
        return this._forEachNode(t.getElementsByTagName("a"), function(i) {
          var s = i.getAttribute("href"), o = s && this.REGEXPS.hashUrl.test(s) ? 0.3 : 1;
          n += this._getInnerText(i).length * o;
        }), n / r;
      },
      /**
       * Get an elements class/id weight. Uses regular expressions to tell if this
       * element looks good or bad.
       *
       * @param Element
       * @return number (Integer)
       **/
      _getClassWeight(t) {
        if (!this._flagIsActive(this.FLAG_WEIGHT_CLASSES))
          return 0;
        var r = 0;
        return typeof t.className == "string" && t.className !== "" && (this.REGEXPS.negative.test(t.className) && (r -= 25), this.REGEXPS.positive.test(t.className) && (r += 25)), typeof t.id == "string" && t.id !== "" && (this.REGEXPS.negative.test(t.id) && (r -= 25), this.REGEXPS.positive.test(t.id) && (r += 25)), r;
      },
      /**
       * Clean a node of all elements of type "tag".
       * (Unless it's a youtube/vimeo video. People love movies.)
       *
       * @param Element
       * @param string tag to clean
       * @return void
       **/
      _clean(t, r) {
        var n = ["object", "embed", "iframe"].includes(r);
        this._removeNodes(this._getAllNodesWithTag(t, [r]), function(i) {
          if (n) {
            for (var s = 0; s < i.attributes.length; s++)
              if (this._allowedVideoRegex.test(i.attributes[s].value))
                return !1;
            if (i.tagName === "object" && this._allowedVideoRegex.test(i.innerHTML))
              return !1;
          }
          return !0;
        });
      },
      /**
       * Check if a given node has one of its ancestor tag name matching the
       * provided one.
       * @param  HTMLElement node
       * @param  String      tagName
       * @param  Number      maxDepth
       * @param  Function    filterFn a filter to invoke to determine whether this node 'counts'
       * @return Boolean
       */
      _hasAncestorTag(t, r, n, i) {
        n = n || 3, r = r.toUpperCase();
        for (var s = 0; t.parentNode; ) {
          if (n > 0 && s > n)
            return !1;
          if (t.parentNode.tagName === r && (!i || i(t.parentNode)))
            return !0;
          t = t.parentNode, s++;
        }
        return !1;
      },
      /**
       * Return an object indicating how many rows and columns this table has.
       */
      _getRowAndColumnCount(t) {
        for (var r = 0, n = 0, i = t.getElementsByTagName("tr"), s = 0; s < i.length; s++) {
          var o = i[s].getAttribute("rowspan") || 0;
          o && (o = parseInt(o, 10)), r += o || 1;
          for (var l = 0, u = i[s].getElementsByTagName("td"), f = 0; f < u.length; f++) {
            var d = u[f].getAttribute("colspan") || 0;
            d && (d = parseInt(d, 10)), l += d || 1;
          }
          n = Math.max(n, l);
        }
        return { rows: r, columns: n };
      },
      /**
       * Look for 'data' (as opposed to 'layout') tables, for which we use
       * similar checks as
       * https://searchfox.org/mozilla-central/rev/f82d5c549f046cb64ce5602bfd894b7ae807c8f8/accessible/generic/TableAccessible.cpp#19
       */
      _markDataTables(t) {
        for (var r = t.getElementsByTagName("table"), n = 0; n < r.length; n++) {
          var i = r[n], s = i.getAttribute("role");
          if (s == "presentation") {
            i._readabilityDataTable = !1;
            continue;
          }
          var o = i.getAttribute("datatable");
          if (o == "0") {
            i._readabilityDataTable = !1;
            continue;
          }
          var l = i.getAttribute("summary");
          if (l) {
            i._readabilityDataTable = !0;
            continue;
          }
          var u = i.getElementsByTagName("caption")[0];
          if (u && u.childNodes.length) {
            i._readabilityDataTable = !0;
            continue;
          }
          var f = ["col", "colgroup", "tfoot", "thead", "th"], d = function(b) {
            return !!i.getElementsByTagName(b)[0];
          };
          if (f.some(d)) {
            this.log("Data table because found data-y descendant"), i._readabilityDataTable = !0;
            continue;
          }
          if (i.getElementsByTagName("table")[0]) {
            i._readabilityDataTable = !1;
            continue;
          }
          var g = this._getRowAndColumnCount(i);
          if (g.columns == 1 || g.rows == 1) {
            i._readabilityDataTable = !1;
            continue;
          }
          if (g.rows >= 10 || g.columns > 4) {
            i._readabilityDataTable = !0;
            continue;
          }
          i._readabilityDataTable = g.rows * g.columns > 10;
        }
      },
      /* convert images and figures that have properties like data-src into images that can be loaded without JS */
      _fixLazyImages(t) {
        this._forEachNode(
          this._getAllNodesWithTag(t, ["img", "picture", "figure"]),
          function(r) {
            if (r.src && this.REGEXPS.b64DataUrl.test(r.src)) {
              var n = this.REGEXPS.b64DataUrl.exec(r.src);
              if (n[1] === "image/svg+xml")
                return;
              for (var i = !1, s = 0; s < r.attributes.length; s++) {
                var o = r.attributes[s];
                if (o.name !== "src" && /\.(jpg|jpeg|png|webp)/i.test(o.value)) {
                  i = !0;
                  break;
                }
              }
              if (i) {
                var l = n[0].length, u = r.src.length - l;
                u < 133 && r.removeAttribute("src");
              }
            }
            if (!((r.src || r.srcset && r.srcset != "null") && !r.className.toLowerCase().includes("lazy"))) {
              for (var f = 0; f < r.attributes.length; f++)
                if (o = r.attributes[f], !(o.name === "src" || o.name === "srcset" || o.name === "alt")) {
                  var d = null;
                  if (/\.(jpg|jpeg|png|webp)\s+\d/.test(o.value) ? d = "srcset" : /^\s*\S+\.(jpg|jpeg|png|webp)\S*\s*$/.test(o.value) && (d = "src"), d) {
                    if (r.tagName === "IMG" || r.tagName === "PICTURE")
                      r.setAttribute(d, o.value);
                    else if (r.tagName === "FIGURE" && !this._getAllNodesWithTag(r, ["img", "picture"]).length) {
                      var g = this._doc.createElement("img");
                      g.setAttribute(d, o.value), r.appendChild(g);
                    }
                  }
                }
            }
          }
        );
      },
      _getTextDensity(t, r) {
        var n = this._getInnerText(t, !0).length;
        if (n === 0)
          return 0;
        var i = 0, s = this._getAllNodesWithTag(t, r);
        return this._forEachNode(
          s,
          (o) => i += this._getInnerText(o, !0).length
        ), i / n;
      },
      /**
       * Clean an element of all tags of type "tag" if they look fishy.
       * "Fishy" is an algorithm based on content length, classnames, link density, number of images & embeds, etc.
       *
       * @return void
       **/
      _cleanConditionally(t, r) {
        this._flagIsActive(this.FLAG_CLEAN_CONDITIONALLY) && this._removeNodes(this._getAllNodesWithTag(t, [r]), function(n) {
          var i = function(h) {
            return h._readabilityDataTable;
          }, s = r === "ul" || r === "ol";
          if (!s) {
            var o = 0, l = this._getAllNodesWithTag(n, ["ul", "ol"]);
            this._forEachNode(
              l,
              (h) => o += this._getInnerText(h).length
            ), s = o / this._getInnerText(n).length > 0.9;
          }
          if (r === "table" && i(n) || this._hasAncestorTag(n, "table", -1, i) || this._hasAncestorTag(n, "code") || [...n.getElementsByTagName("table")].some(
            (h) => h._readabilityDataTable
          ))
            return !1;
          var u = this._getClassWeight(n);
          this.log("Cleaning Conditionally", n);
          var f = 0;
          if (u + f < 0)
            return !0;
          if (this._getCharCount(n, ",") < 10) {
            for (var d = n.getElementsByTagName("p").length, g = n.getElementsByTagName("img").length, b = n.getElementsByTagName("li").length - 100, v = n.getElementsByTagName("input").length, A = this._getTextDensity(n, [
              "h1",
              "h2",
              "h3",
              "h4",
              "h5",
              "h6"
            ]), D = 0, x = this._getAllNodesWithTag(n, [
              "object",
              "embed",
              "iframe"
            ]), O = 0; O < x.length; O++) {
              for (var _ = 0; _ < x[O].attributes.length; _++)
                if (this._allowedVideoRegex.test(x[O].attributes[_].value))
                  return !1;
              if (x[O].tagName === "object" && this._allowedVideoRegex.test(x[O].innerHTML))
                return !1;
              D++;
            }
            var I = this._getInnerText(n);
            if (this.REGEXPS.adWords.test(I) || this.REGEXPS.loadingWords.test(I))
              return !0;
            var j = I.length, C = this._getLinkDensity(n), S = ["SPAN", "LI", "TD"].concat(
              Array.from(this.DIV_TO_P_ELEMS)
            ), $ = this._getTextDensity(n, S), L = this._hasAncestorTag(n, "figure"), M = (() => {
              const p = [];
              return !L && g > 1 && d / g < 0.5 && p.push(`Bad p to img ratio (img=${g}, p=${d})`), !s && b > d && p.push(`Too many li's outside of a list. (li=${b} > p=${d})`), v > Math.floor(d / 3) && p.push(`Too many inputs per p. (input=${v}, p=${d})`), !s && !L && A < 0.9 && j < 25 && (g === 0 || g > 2) && C > 0 && p.push(
                `Suspiciously short. (headingDensity=${A}, img=${g}, linkDensity=${C})`
              ), !s && u < 25 && C > 0.2 + this._linkDensityModifier && p.push(
                `Low weight and a little linky. (linkDensity=${C})`
              ), u >= 25 && C > 0.5 + this._linkDensityModifier && p.push(
                `High weight and mostly links. (linkDensity=${C})`
              ), (D === 1 && j < 75 || D > 1) && p.push(
                `Suspicious embed. (embedCount=${D}, contentLength=${j})`
              ), g === 0 && $ === 0 && p.push(
                `No useful content. (img=${g}, textDensity=${$})`
              ), p.length ? (this.log("Checks failed", p), !0) : !1;
            })();
            if (s && M) {
              for (var G = 0; G < n.children.length; G++)
                if (n.children[G].children.length > 1)
                  return M;
              let p = n.getElementsByTagName("li").length;
              if (g == p)
                return !1;
            }
            return M;
          }
          return !1;
        });
      },
      /**
       * Clean out elements that match the specified conditions
       *
       * @param Element
       * @param Function determines whether a node should be removed
       * @return void
       **/
      _cleanMatchedNodes(t, r) {
        for (var n = this._getNextNode(t, !0), i = this._getNextNode(t); i && i != n; )
          r.call(this, i, i.className + " " + i.id) ? i = this._removeAndGetNext(i) : i = this._getNextNode(i);
      },
      /**
       * Clean out spurious headers from an Element.
       *
       * @param Element
       * @return void
       **/
      _cleanHeaders(t) {
        let r = this._getAllNodesWithTag(t, ["h1", "h2"]);
        this._removeNodes(r, function(n) {
          let i = this._getClassWeight(n) < 0;
          return i && this.log("Removing header with low class weight:", n), i;
        });
      },
      /**
       * Check if this node is an H1 or H2 element whose content is mostly
       * the same as the article title.
       *
       * @param Element  the node to check.
       * @return boolean indicating whether this is a title-like header.
       */
      _headerDuplicatesTitle(t) {
        if (t.tagName != "H1" && t.tagName != "H2")
          return !1;
        var r = this._getInnerText(t, !1);
        return this.log("Evaluating similarity of header:", r, this._articleTitle), this._textSimilarity(this._articleTitle, r) > 0.75;
      },
      _flagIsActive(t) {
        return (this._flags & t) > 0;
      },
      _removeFlag(t) {
        this._flags = this._flags & ~t;
      },
      _isProbablyVisible(t) {
        return (!t.style || t.style.display != "none") && (!t.style || t.style.visibility != "hidden") && !t.hasAttribute("hidden") && //check for "fallback-image" so that wikimedia math images are displayed
        (!t.hasAttribute("aria-hidden") || t.getAttribute("aria-hidden") != "true" || t.className && t.className.includes && t.className.includes("fallback-image"));
      },
      /**
       * Runs readability.
       *
       * Workflow:
       *  1. Prep the document by removing script tags, css, etc.
       *  2. Build readability's DOM tree.
       *  3. Grab the article content from the current dom tree.
       *  4. Replace the current DOM tree with the new one.
       *  5. Read peacefully.
       *
       * @return void
       **/
      parse() {
        if (this._maxElemsToParse > 0) {
          var t = this._doc.getElementsByTagName("*").length;
          if (t > this._maxElemsToParse)
            throw new Error(
              "Aborting parsing document; " + t + " elements found"
            );
        }
        this._unwrapNoscriptImages(this._doc);
        var r = this._disableJSONLD ? {} : this._getJSONLD(this._doc);
        this._removeScripts(this._doc), this._prepDocument();
        var n = this._getArticleMetadata(r);
        this._metadata = n, this._articleTitle = n.title;
        var i = this._grabArticle();
        if (!i)
          return null;
        if (this.log("Grabbed: " + i.innerHTML), this._postProcessContent(i), !n.excerpt) {
          var s = i.getElementsByTagName("p");
          s.length && (n.excerpt = s[0].textContent.trim());
        }
        var o = i.textContent;
        return {
          title: this._articleTitle,
          byline: n.byline || this._articleByline,
          dir: this._articleDir,
          lang: this._articleLang,
          content: this._serializer(i),
          textContent: o,
          length: o.length,
          excerpt: n.excerpt,
          siteName: n.siteName || this._articleSiteName,
          publishedTime: n.publishedTime
        };
      }
    }, a.exports = e;
  })(Or)), Or.exports;
}
var Dr = { exports: {} }, ei;
function jo() {
  return ei || (ei = 1, (function(a) {
    var e = {
      // NOTE: These two regular expressions are duplicated in
      // Readability.js. Please keep both copies in sync.
      unlikelyCandidates: /-ad-|ai2html|banner|breadcrumbs|combx|comment|community|cover-wrap|disqus|extra|footer|gdpr|header|legends|menu|related|remark|replies|rss|shoutbox|sidebar|skyscraper|social|sponsor|supplemental|ad-break|agegate|pagination|pager|popup|yom-remote/i,
      okMaybeItsACandidate: /and|article|body|column|content|main|shadow/i
    };
    function t(n) {
      return (!n.style || n.style.display != "none") && !n.hasAttribute("hidden") && //check for "fallback-image" so that wikimedia math images are displayed
      (!n.hasAttribute("aria-hidden") || n.getAttribute("aria-hidden") != "true" || n.className && n.className.includes && n.className.includes("fallback-image"));
    }
    function r(n, i = {}) {
      typeof i == "function" && (i = { visibilityChecker: i });
      var s = {
        minScore: 20,
        minContentLength: 140,
        visibilityChecker: t
      };
      i = Object.assign(s, i);
      var o = n.querySelectorAll("p, pre, article"), l = n.querySelectorAll("div > br");
      if (l.length) {
        var u = new Set(o);
        [].forEach.call(l, function(d) {
          u.add(d.parentNode);
        }), o = Array.from(u);
      }
      var f = 0;
      return [].some.call(o, function(d) {
        if (!i.visibilityChecker(d))
          return !1;
        var g = d.className + " " + d.id;
        if (e.unlikelyCandidates.test(g) && !e.okMaybeItsACandidate.test(g) || d.matches("li p"))
          return !1;
        var b = d.textContent.trim().length;
        return b < i.minContentLength ? !1 : (f += Math.sqrt(b - i.minContentLength), f > i.minScore);
      });
    }
    a.exports = r;
  })(Dr)), Dr.exports;
}
var jr, ti;
function Io() {
  if (ti) return jr;
  ti = 1;
  var a = Do(), e = jo();
  return jr = {
    Readability: a,
    isProbablyReaderable: e
  }, jr;
}
var gs = Io();
ms(2);
const Po = ms(3);
function ms(a) {
  if (typeof a != "number" || Number.isNaN(a) || a < 1 || a === Number.POSITIVE_INFINITY)
    throw new Error("`" + a + "` is not a valid argument for `n-gram`");
  return e;
  function e(t) {
    const r = [];
    if (t == null)
      return r;
    const n = typeof t.slice == "function" ? t : String(t);
    let i = n.length - a + 1;
    if (i < 1)
      return r;
    for (; i--; )
      r[i] = n.slice(i, i + a);
    return r;
  }
}
const Lo = /\s+/g, zo = /[\t\n\v\f\r ]+/g;
function Fo(a, e) {
  e ? typeof e == "string" && (e = { style: e }) : e = {};
  const t = e.preserveLineEndings ? Uo : $o;
  return String(a).replace(
    e.style === "html" ? zo : Lo,
    e.trim ? Bo(t) : t
  );
}
function Uo(a) {
  const e = /\r?\n|\r/.exec(a);
  return e ? e[0] : " ";
}
function $o() {
  return " ";
}
function Bo(a) {
  return e;
  function e(t, r, n) {
    return r === 0 || r + t.length === n.length ? "" : a(t);
  }
}
const ps = {}.hasOwnProperty;
function Mo(a) {
  return a == null ? "" : Fo(String(a).replace(/[\u0021-\u0040]+/g, " ")).trim().toLowerCase();
}
function Ho(a) {
  return Po(" " + Mo(a) + " ");
}
function qo(a) {
  const e = Ho(a), t = {};
  let r = -1;
  for (; ++r < e.length; )
    ps.call(t, e[r]) ? t[e[r]]++ : t[e[r]] = 1;
  return t;
}
function Wo(a) {
  const e = qo(a), t = [];
  let r;
  for (r in e)
    ps.call(e, r) && t.push([r, e[r]]);
  return t.sort(Go), t;
}
function Go(a, e) {
  return a[1] - e[1];
}
const Ko = {
  cmn: /[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9]|\uD81B[\uDFE2\uDFE3\uDFF0\uDFF1]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]/g,
  Latin: /[A-Za-z\u00AA\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02B8\u02E0-\u02E4\u1D00-\u1D25\u1D2C-\u1D5C\u1D62-\u1D65\u1D6B-\u1D77\u1D79-\u1DBE\u1E00-\u1EFF\u2071\u207F\u2090-\u209C\u212A\u212B\u2132\u214E\u2160-\u2188\u2C60-\u2C7F\uA722-\uA787\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA7FF\uAB30-\uAB5A\uAB5C-\uAB64\uAB66-\uAB69\uFB00-\uFB06\uFF21-\uFF3A\uFF41-\uFF5A]|\uD801[\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]/g,
  Cyrillic: /[\u0400-\u0484\u0487-\u052F\u1C80-\u1C88\u1D2B\u1D78\u2DE0-\u2DFF\uA640-\uA69F\uFE2E\uFE2F]|\uD838[\uDC30-\uDC6D\uDC8F]/g,
  Arabic: /[\u0600-\u0604\u0606-\u060B\u060D-\u061A\u061C-\u061E\u0620-\u063F\u0641-\u064A\u0656-\u066F\u0671-\u06DC\u06DE-\u06FF\u0750-\u077F\u0870-\u088E\u0890\u0891\u0898-\u08E1\u08E3-\u08FF\uFB50-\uFBC2\uFBD3-\uFD3D\uFD40-\uFD8F\uFD92-\uFDC7\uFDCF\uFDF0-\uFDFF\uFE70-\uFE74\uFE76-\uFEFC]|\uD803[\uDE60-\uDE7E\uDEFD-\uDEFF]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB\uDEF0\uDEF1]/g,
  ben: /[\u0980-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09FE]/g,
  Devanagari: /[\u0900-\u0950\u0955-\u0963\u0966-\u097F\uA8E0-\uA8FF]|\uD806[\uDF00-\uDF09]/g,
  jpn: /[\u3041-\u3096\u309D-\u309F]|\uD82C[\uDC01-\uDD1F\uDD32\uDD50-\uDD52]|\uD83C\uDE00|[\u30A1-\u30FA\u30FD-\u30FF\u31F0-\u31FF\u32D0-\u32FE\u3300-\u3357\uFF66-\uFF6F\uFF71-\uFF9D]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00\uDD20-\uDD22\uDD55\uDD64-\uDD67]|[\u3400-\u4DB5\u4E00-\u9FAF]/g,
  jav: /[\uA980-\uA9CD\uA9D0-\uA9D9\uA9DE\uA9DF]/g,
  kor: /[\u1100-\u11FF\u302E\u302F\u3131-\u318E\u3200-\u321E\u3260-\u327E\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/g,
  tel: /[\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3C-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C5D\u0C60-\u0C63\u0C66-\u0C6F\u0C77-\u0C7F]/g,
  tam: /[\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BFA]|\uD807[\uDFC0-\uDFF1\uDFFF]/g,
  guj: /[\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AF1\u0AF9-\u0AFF]/g,
  kan: /[\u0C80-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDD\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1-\u0CF3]/g,
  mal: /[\u0D00-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4F\u0D54-\u0D63\u0D66-\u0D7F]/g,
  mya: /[\u1000-\u109F\uA9E0-\uA9FE\uAA60-\uAA7F]/g,
  pan: /[\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A76]/g,
  amh: /[\u1200-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u137C\u1380-\u1399\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]/g,
  tha: /[\u0E01-\u0E3A\u0E40-\u0E5B]/g,
  sin: /[\u0D81-\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2-\u0DF4]|\uD804[\uDDE1-\uDDF4]/g,
  ell: /[\u0370-\u0373\u0375-\u0377\u037A-\u037D\u037F\u0384\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03E1\u03F0-\u03FF\u1D26-\u1D2A\u1D5D-\u1D61\u1D66-\u1D6A\u1DBF\u1F00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FC4\u1FC6-\u1FD3\u1FD6-\u1FDB\u1FDD-\u1FEF\u1FF2-\u1FF4\u1FF6-\u1FFE\u2126\uAB65]|\uD800[\uDD40-\uDD8E\uDDA0]|\uD834[\uDE00-\uDE45]/g
}, Ir = {
  Latin: {
    spa: " de|de |os | la| a |la | y |ón |ión|es |ere|rec|ien|o a|der|ció|cho|ech|en |a p|ent|a l|aci|el |na |ona|e d| co|as |da | to|al |ene| en|tod| pe|e l| el|ho |nte| su|per|a t|ad | ti|ers|tie| se|rso|son|e s| pr|o d|oda|te |cia|n d| es|dad|ida| in|ne |est|ion|cio|s d|con|a e| po|men| li|n e|nci|res|su |to |tra| re| lo|tad| na|los|a s| o |ia |que| pa|rá |pro| un|s y|ual|s e|lib|nac|do |ra |er |a d|ue | qu|e e|sta|nal|ar |nes|ica|a c|ser|or |ter|se |por|cci|io |del|l d|des|ado|les|one|a a|ndi| so| cu|s p|ale|s n|ame|par|ici|oci|una|ber|s t|rta|com| di|dos|e a|imi|o s|e c|ert|las|o p|ant|dic|nto| al|ara|ibe|enc|o e|s l|cas| as|e p|ten|ali|o t|soc|y l|n c|nta|so |tos|y a|ria|n t|die|a u| fu|no |l p|ial|qui|dis|s o|hos|gua|igu| ig| ca|sar|l t| ma|l e|pre| ac|tiv|s a|re |nad|vid|era| tr|ier|cua|n p|ta |cla|ade|bre|s s|esa|ntr|ecc|a i| le|lid|das|d d|ido|ari|ind|ada|nda|fun|mie|ca |tic|eli|y d|nid|e i|odo|ios|o y|esp|iva|y e|mat|bli|r a|drá|tri|cti|tal|rim|ont|erá|us |sus|end|pen|tor|ito|ond|ori|uie|lig|n a|ist|rac|lar|rse|tar|mo |omo|ibr|n l|edi|med| me|nio|a y|eda|isf|lo |aso|l m|ias|ico|lic|ple|ste|act|tec|ote|rot|ele|ura| ni|ie |adi|u p|seg|s i|un |und|a n|lqu|alq|o i|inc|sti| si|n s|ern",
    eng: "the| th| an|he |nd |ion|and| to|to |tio| of|on |of | in|al |ati|or |ght|igh|rig| ri|ne |ent|one|ll |is |as |ver|ed | be|e r|in |t t|all|eve|ht | or|ery|s t|ty | ev|e h|yon| ha|ryo|e a|be |his| fr|ng |d t|has| sh|ing| hi|sha| pr| co| re|hal|nal|y a|s a|n t|ce |men|ree|fre|e s|l b|nat|for|ts |nt |n a|ity|ry |her|nce|ect|d i| pe|pro|n o|cti| fo|e e|ly |es | no|ona|ny |any|er |re |f t|e o| de|s o| wi|ter|nte|e i|ons| en| ar|res|ers|y t|per|d f| a | on|ith|l a|e t|oci|soc|lit| as| se|dom|edo|eed|nti|s e|t o|oth|wit| di|equ|t a|ted|st |y o|int|e p| ma| so| na|l o|e c|ch |d a|enc|th |are|ns |ic | un| fu|tat|ial|cia| ac|hts|nit|qua| eq| al|om |e w|d o|f h|ali|ote|n e| wh|r t|sta|ge |thi|o a|tit|ual|an |te |ess| ch|le |ary|e f|by | by|y i|tec|uni|o t|o o| li|no | la|s r| su|inc|led|rot|con| pu| he|ere|imi|r a|ntr| st| ot|eli|age|dis|s d|tle|itl|hou|son|duc|edu| wo|ate|ble|ces|at | at| fa|com|ive|o s|eme|o e|aw |law|tra|und|pen|nde|unt|oun|n s|s f|f a|tho|ms | is|act|cie|cat|uca| ed|anc|wor|ral|t i| me|o f|ily|pri|ren|ose|s c|en |d n|l c|ful|rar|nta|nst| ag|l p|min|din|sec|y e| tr|rso|ich|hic|whi|cou|ern|uri|r o|tic|iti|igi|lig|rat|rth|t f|oms|rit|d r|ee |e b|era|rou|se |ay |rs | ho|abl|e u",
    por: "de | de| se|ão |os |to |em | e |do |o d| di|er |ito|eit|ser|ent|ção| a |dir|ire|rei|o s|ade|dad|uma|as |no |e d| to|nte| co|o t|tod| ou|men|que|s e|man| pr| in| qu|es | te|hum|odo|e a|da | hu|ano|te |al |tem|o e|s d|ida|m d| pe| re|o a|ou |r h|e s|cia|a e| li|o p| es|res| do| da| à |ual| em| su|açã|dos|a p|tra|est|ia |con|pro|ar |e p|is | na|rá |qua|a d| pa|com|ais|o c|ame|erá| po|uer|sta|ber|ter| o |ess|ra |e e|das|o à|nto|nal|o o|a c|ido|rda|erd| as|nci|sua|ona|des|ibe|lib|e t|ado|s n|ua |s t|ue | so|ica|ma |lqu|alq|tos|m s|a l|per|ada|oci|soc|cio|a n|par|aci|s a|pre|ont|m o|ura|a s| um|ion|e o|or |e r|pel|nta|ntr|a i|io |nac|ênc|str|ali|ria|nst| tr|a q|int|o n|a o|ca |ela|uçã|lid|e l| at|sen|ese|r d|s p|egu|seg|vid|pri|sso|ém |ime|tic|dis|raç|eci|ara| ca|nid|tru|ões|ass|seu|por|a a|m p| ex|so |r i|eçã|teç|ote|rot| le| ma|ing|a t|ran|era|rio|l d|eli|ça |sti| ne|cid|ern|utr|out|r e|e c|tad|gua|igu| ig| os|s o|ruç|ins|çõe|ios| fa|e n|sse| no|re |art|r p|rar|u p|inc|lei|cas|ico|uém|gué|ngu|nin| ni|gur|la |pen|nça|na |içã|ião|cie|ist|sem|ta |ele|e f|om |tro| ao|rel|m a|s s|tar|eda|ied|uni|e m|s i|a f|ias| cu| ac|r a|á a|rem|ei |omo|rec|for|s f|esc|ant|à s| vi|o q|ver|a u|nda|und|fun",
    ind: "an |ang|ng | da|ak | pe|ata| se| ke| me|dan| di| be|ber|kan|ran|hak|per|yan| ya|nga|nya|gan| at|ara| ha|eng|asa|ora|men|n p|n k|erh|rha|n d|ya |ap |at |as |tan|n b|ala|a d| or|a s|san|tas|eti|uk |pen|g b|set|ntu|n y|tia|iap|k m|eba|aan| un|n s|tuk|k a|p o|am |lam| ma|unt| de|ter|bas|beb|dak|end|i d|pun|mem|tau|dal|ama|keb|aka|ika|n m| ba|di |ma | sa|den|au |nda|n h|eri| ti|ela|k d|un |n a|ebe|ana|ah |ra |ida|uka| te|al |ada|ri |ole|tid|ngg|lak|leh|dap|a p|dil|g d|ena|eh |gar|na |ert|apa|um |tu |atu|a m|sam|ila|har|n t|asi|ban|erl|t d|bat|uat|ta |lan|adi|h d|neg| ne|kum|mas|nan|pat|aha| in|l d|emp|sem|rus|sua|ser|uan|era|ari|erb|kat|man|a b|g s|rta|ai |nny|n u|ung|ndi|han|uku|huk| hu|sa |ers|in | la|ka | su|ann|car|kes|aku|dip|i s|a a|erk|n i|lai|rga|aru|k h|i m|rka|a u|us |nak|emb|gga|nta|iba| pu|ind|s p|ent|mel|ina|min|ian|dar|ni |rma|lua|rik|ndu|lin|sia|rbu|g p|k s|da |aya|ese|u d|ega|nas|ar |ipe|yar|sya|ik |aga| ta|ain|ua |arg|uar|iny|pem|ut |si |dun|eor|seo|rak|ngs|ami|kel|ini|g t|dik|mer|emu|aks|rat|uru|ewa|il |enu|any|kep|pel|asu|rli|ia |dir|jam|mba|mat|pan|g m|ses|sar|das|kuk|bol|ili|u k|gsa|u p|a k|ern|ant|raa|t p|ema|mua|idi|did|t s|i k|rin|erm|esu|ger|elu|nja|enj|ga |dit",
    fra: " de|es |de |ion|nt |tio|et |ne |on | et|ent|le |oit|e d| la|e p|la |it | à |t d|roi|dro| dr| le|té |e s|ati|te |re | to|s d|men|tou|e l|ns | pe| co|son|que| au| so|e a|onn|out| un| qu| sa| pr|ute|eme| l’|t à| a |e e|con|des| pa|ue |ers|e c| li|a d|per|ont|s e|t l|les|ts |tre|s l|ant| ou|cti|rso|ou |ce |ux |à l|nne|ons|ité|en |un | en|er |une|n d|sa |lle| in|nte|e t| se|lib|res|a l|ire| d’| re|é d|nat|iqu|ur |r l|t a|s s|aux|par|nal|a p|ans|dan|qui|t p| dé|pro|s p|air| ne| fo|ert|s a|nce|au |ui |ect|du |ond|ale|lit| po|san| ch|és | na|us |com|our|ali|tra| ce|al |e o|e n|rté|ber|ibe|tes|r d|e r|its| di|êtr|pou|été|s c|à u|ell|int|fon|oci|soc|ut |ter| da|aut|ien|rai| do|iss|s n| ma|bli|ge |est|s o| du|ona|n p|pri|rs |éga| êt|ous|ens|ar |age|s t| su|cia|u d|cun|rat| es|ir |n c|e m| ét|t ê|a c| ac|ote|n t|ein| tr|a s|ndi|e q|sur|ée |ser|l n| pl|anc|lig|t s|n e|s i|t e| ég|ain|omm|act|ntr|tec|gal|ul | nu| vi|me |nda|ind|soi|st | te|pay|tat|era|il |rel|n a|dis|n s|pré|peu|rit|é e|t é|bre|sen|ill|l’a|d’a| mo|ass|lic|art| pu|abl|nta|t c|rot| on| lo|ure|l’e|ava|ten|nul|ivi|t i|ess|ys |ays| fa|ine|eur|rés|cla|tés|oir|eut|e f|utr|doi|ibr|ais|ins|éra|’en|iét|l e|s é|nté| ré|ssi| as|nse|ces|é a",
    deu: "en |er |der|ein| un|nd |und|ung|cht|ich| de|sch|ng | ge|ine|ech|gen|rec|che|ie | re|eit| au|ht |die| di| ha|ch | da|ver| zu|lic|t d|in |auf| ei| in| be|hen|nde|n d|uf |ede| ve|it |ten|n s|sei|at |jed| je| se|and|rei|s r|den|ter|ne |hat|t a|r h|zu |das|ode| od|as |es | an|fre|nge| we|n u|run| fr|ere|e u|lle|ner|nte|hei|ese| so|rde|wer|ige| al|ers|n g|hte|d d| st|n j|lei|all|n a|nen|ege|ent|bei|g d|erd|t u|ren|nsc|chu| gr|kei|ens|le |ben|aft|haf|cha|tli|ges|e s| si|men| vo|lun|em |r s|ion|te |len|gru|gun|tig|unt|uch|spr|n e|ft |ei |e f| wi| sc|r d|n n|geh|r g|dar|sta|erk| er|r e|sen|eic|gle| gl|lie|e e|tz |fen|n i|nie|f g|t w|des|chl|ite|ihe|eih|ies|ruc|st |ist|n w|h a|n z|e a| ni|ang|rf |arf|gem|ale|ati|on |he |t s|ach| na|end|n o|pru|ans|sse|ern|aat|taa|ehe|e d|hli|hre|int|tio|her|nsp|de |mei| ar|r a|ffe|e b|wie|erf|abe|hab|ndl|n v|sic|t i|han|ema|nat|ber|ied|geg|d s|nun|d f|ind| me|gke|igk|ieß| fa|igu|hul|r v|dig|rch|urc|dur| du|utz|hut|tra|aus|alt|bes|str|ell|ste|ger|r o|esc|e g|rbe|arb|ohn|r b|mit|d g|r w|ntl|sow|n h|nne|etz|raf|dlu| ih|lte|man|iem|erh|eru| is|dem|lan|rt |son|isc|eli|rel|n r|e i|rli|r i| mi|e m|ild|bil| bi|eme| en|ins|für| fü|gel|öff| öf|owi|ill|wil|e v|ric|f e",
    jav: "ng |an | ka|ang|ing|kan| sa|ak |lan| la|hak| pa| ha|ara|ne |abe| in|n k|ngg|ong|ane|nga|ant|won|uwo| an| uw|nin|ata|n u|en |ra |tan| da|ran|ana| ma|nth|ake|ben|beb|hi |ke |sab|nda| ng|adi|thi|nan|a k| ba|san|asa|ni |e h|e k|g k| ut|pan|awa| be|eba|gan|g p|dan| wa|bas|aka|dha|yan|sa |arb|man| di|wa |g d| na|g n|ban| tu|n s|ung|wen|g s|rbe|dar|dak|di |g u|ora|aya|be |ah |a s|eni| or|han|as | pr|a n|na |iya|a a|kar|at |a l|mar|uwe|duw|uta|und|n p|asi|pa | si|ala|n n| un|kab|oni|ya |i h|gar|g b|yat|tum|ta |n m|i k|apa|taw| li|ani| ke|al |ka |kal|ngk|ega| ne|nal|n i|g a|ggo|ina|we |ena|dad|iba|awi|aga|a p| ta|sar|adh|awe|and|uju|ind|min|sin|ndu|uwa|gge|n l|ggu|ngs|n b|a b|pra|iji|n a|ha | bi|kat|go | ku|e p|ron|kak|ngu|a u|gsa|war|nya|g t|pad|bis|k b|i w|ae |wae| nd|ali|a m|er |sak|e s|ku |liy|ama|i l|eh |isa|arg|n t|a d|kap|i s|ayo|gay| pe|ndh|bad|pri|neg|tow|uto|eda|bed|il |ih | ik|ur |k k|rta|art|i p|rga|lak|ami|ro |aro|yom|r k|e d|a w|kon|rib|eng|ger|g l|ras|dil| ti|k l|rap|mra|uma| pi|k h|n d|gaw|wat|ga |k n|ar |per| we|oma|k p|jro|ajr|saj|ase|ini|ken|saw|ona|nas|kas|h k|i t| um|tin|wo | me|aba|rak|pag|yar|sya|t k| te| mu|ngl| ni|i b|men|ate|a i|aku|ebu|a t| du|g m|owo|mat| lu|amp",
    vie: "ng |̣c |́c | qu|à | th|nh | ng|̣i |̀n |và| va| nh|uyê| ph|quy| ca|ền|yề|̀nh|̀i |̣t | ch|ó | tr|ngư|i n| gi|gươ|ời|ườ|́t | co|ượ| cu|ác|ự |ợc| kh| đư|đươ| tư|có| ha|ông|c t| đê|n t|i đ|ìn|̀u |cá|gia|́i |ọi|mọ| mo|ều|iệ|đề|u c|như|pha| ba| bi|ất|̉a |ủa|củ|hôn| đô|g t|́ q|̃ng| ti|tự|t c|̣n | la|n đ|n c|n n|hiê|ch |ay |hay| vi|ân | đi| na|bả| ho|do | do| tô| hi|ội|há|ị |nà|̀ t|ới|hân| mô|́p |àn|̣ d|́ch|̣p |̀o |ào|khô|́n |ột|mộ| hô|ia |ốc|c h|hữ|i v|g n|́ng|uố|quô|h t|ôn |ên |n v|nhâ|̣ t| bâ|i c|g v|̉ng|iế|c c|ật|thư|hư |ướ|̉n | vơ| cô|c đ| đo| sư|t t|ộc|ữn|vớ| vê|ả |̣ng|g đ|̉o |ảo|uậ| đa|bị|là|sự|bấ|hà|hộ|i t|ản|hươ|̀ng|tro|̉m |o v| mi|ể |ục|i h|ức|áp|g c|̃ h|iá|n b|̉i |a m|h c|côn|ện|ớc|hạ|độ| du| cư|a c|n h|tha|ã | xa|́o |áo|ín|̀y |g b| hư|g h|ong|ron|̀ c|cho|̀ n|mì|ực|h v|c b| lu|i b|ệ |ai |ế |̣ c|xã|kha|c q|iể|tộ|ối|đố|á |hoa|o h|h đ|cả|n l|họ|tiê|y t|̉ c|ại|án|̀ đ|oà|y đ|chi|̉ n|phâ|ề |thu|iên|dụ|o c|i m|luâ|c p|ốn|c l|́ c|ũn|cũ|c g|c n|qua|n g|c m|o n|ải|hả|́ t|ho |về| tâ| hơ|o t|ở |hứ|hì|viê|̀m |̉ t|đó|thô|ứ |cứ|hí|́nh|ày|ởn|ưở| bă|tri| ta|m v|c v|ợp|hợ|h m| nư|ết|thi|ặc|ngh|uy ",
    ita: " di|to | in|ion|la | de|di |re |e d|ne | e |zio|rit|a d|one|o d|ni |le |lla|itt|ess| al|iri|dir|tto|ent|ell|i i|del|ndi|ere|ind|o a| co|te |tà |ti |a s|uo |e e|gni|azi| pr|idu|ivi|duo|vid|div|ogn| og| es|i e| ha|all|ale|nte|e a|men|ser| su| ne|e l|za |i d|per|a p|ha | pe| un|con|no |sse|li |e i| o | so| li| la|pro|ia |o i|e p|o s|i s|in |ato|o h|na |e s|a l|e o|nza|ali|tti|o p|ta |so |ber|ibe|lib|o e|un | a | ri|ua |il | il|nto|pri|el | po|una|are|ame| qu|a c|ro |oni|nel|e n| ad|ual|gli|sua|ond| re|a a|i c|ri |o o|sta|ita|i o| le|ad |i a|ers|enz|ssi|à e|ità|gua|i p|e c|io | pa|ter|soc|nal|ona|naz|ist|cia|rso|ver|a e|i r|tat|lle|sia| si|rio|tra|che| se|rtà|ert|anz|eri|tut|à d|he | da|al |ant|qua|on |ari|o c| st|oci|er |dis|tri|si |ed | ed|ono| tu|ei |dei|uzi|com|att|a n|opr|rop|par|nes|i l|zza|ese|res|ien|son| eg|n c|ont|nti|pos|int|ico|rà |sun|ial|lit|sen|pre|tta|dev|nit|era|eve|ll |l i| l |nda|ina|non| no|o n|ria|str|d a|art|se |ssu|ica|raz|ett|sci|gio|ati|egu| na|i u|utt|ve | ma|do |e r|ssa|sa |a f|n p|fon| ch|d u|rim| fo|a t| sc|trà|otr|pot|n i| cu|l p|ra |ezz|a o|ini|sso|dic|ltr|uni|cie| ra|i n|ruz|tru|ste| is|der|l m|a r|pie|lia|est|dal|nta| at|tal|ntr| pu|nno|ann|ten|vit|a v",
    tur: " ve| ha|ve |ir |ler|hak| he|her|in |lar|r h|bir|ya |er |ak |kkı|akk|eti| ka| bi|eya|an |eri|iye|yet|ara|ek | ol|de |vey|ın |ır |nda|arı|esi|ını|dır| ta|tle|e h|ası|etl|e k| va|ı v|sın|ile|ne |rke|erk|ard|ine| sa|ınd|ini|k h|kın|ama|le |tin|rdı|var|a v| me|e m|na |sin|ere|k v| şa| bu|lan|kes|dir|rin|dan| ma|kı |mak|şah|da | te|mek| ge|nı | hi|nin|en |n h| se|lik|rle|ana|lma|e a|ı h|r ş|ill|si | de|aya|zdi|izd|aiz|hai|ret|hiç|ına| iş|e b| ba|kla|et | hü|rın|n k|ola|nma|e t| ya|eme|riy|n v|e i|a h|li |mil|eli|ket|ik |kar|irl|hür|im |evl|mes|e d|ahs|ma |rak|ala|let|lle|un | ed|rri|ürr|bu | mi|i v|dil| il| eş|n i|la |el |mal| mü| ko|e g|se | ki|mas|lek|mle|mem|n b|ili|e e|ser| iç|n s|din| di|es |mel|eke|tir|şit|eşi|r b|akl|yla|n m|len| ke|edi|oru|nde|re |ele|ni |tür|a k|eye|ık |ken|uğu| uy|eml|erd|ede|ame| gö|e s|i m|tim|i b|rde|rşı|arş|a s|it |t v|siy|ar |rme|est|bes|rbe|erb|te |alı| an|ndi|end|hsı|unm|rı |kor|nın| ce|maz|mse|ims|kim|iç | ay|a m|lam|ri |sız|a b|ade|n t|nam|lme|ilm|k g|il |tme|etm|r v|e v|n e|ğre|öğr| öğ|al |ıyl|olm|vle|şma|i s|ger|me | da|ind|lem|i o|may|cak|çin|içi|nun|kan|ye |e y|r t|az |ç k|ece|sı |eni| mu|ulu|und|den|lun| fa|şı |ahi|l v|r a|san|kat| so|enm| ev|iş ",
    pol: " pr|nie|pra| i |nia|ie |go |ani|raw|ia | po|ego| do|wie|iek|awo| ni|owi|ch |ek |do | ma|wo |a p|ści|ci |ej | cz| za| w |ych|ośc|rze|prz| ka|wa |eni| na| je|ażd|każ|ma |zło|czł|noś|o d|łow|y c|dy |żdy|i p|wol| lu|ny |oln| wy|stw| wo|ub |lub|lno|rod|k m|twa|dzi|na | sw|rzy|ają|ecz|czn|sta| sp|owa|o p|spo|i w|kie|a w|zys|obo|est|neg|ać |mi |cze|e w|nyc|nic|jak| ja|wsz| z |jeg|wan|ńst|o s|a i|awa|e p|yst|pos|pow| ró|o o|jąc|ony|nej|owo|dow|ów | ko|kol|aki|bez|rac|sze|iej| in|zen|pod|i i|ni | ro|cy |o w|zan|eńs|no |zne|a s|lwi|olw|ez |odn|rów|odz|o u|ne |i n|i k|czy| be|acj|wob|inn| ob|ówn|zie| ws|aln|orz|nik|o n|icz|zyn|łec|ołe|poł|aro|nar|a j|i z|tęp|stę|ien|cza|o z|ym |zec|ron|i l|ami| os|kra| kr|owe| od|ji |cji|mie|a z|bod|swo|dni|zes|ełn|peł|iu |edn|iko|a n|raj| st|odo|zna|wyc|em |lni|szy|wia|nym|ą p|ją |zeń|iec|pie|st |jes| to|sob|któ|ale|y w|ieg|och|du |ini|war|zaw|nny|roz|i o|wej|ię |się| si|nau| or|o r|kor|e s|pop|zas|niu|z p|owy|w k|ywa| ta|ymi|hro|chr| oc|jed|ki |o t|ogo|oby|ran|any|oso|a o|tór| kt|w z|dne|to |tan|h i|nan|ejs|ada|a k|iem|aw |h p|wni|ucz|ora|a d| wł|ian| dz| mo|e m|awi|ć s|gan|zez|mu |taw|dst|wią|w c|y p|kow|o j|i m|y s|bow|kog|by |j o|ier|mow|sza|b o|ju |yna",
    swh: "a k| ya|na |wa |ya | ku|a m| na| ha|i y| wa|a h|a n|ana|aki|ki |la |hak| ka|kwa|tu | kw| ma|li |a a|ila|i k| ki|ni |a w|ali|a u| an| mt|ke |mtu|a y|ake|ati|kil|ka |ika|kat|ili|te |ote|we |a s|e k|ia |zi |u a|za |azi|ifa|ma |yak|yo |i n|ama| yo|au | au|e a|kut|amb|o y|ha |asi|fa |u w|hal|ara|sha|ish|ata|ayo| as|tik|u k| za|i z|ina|u n|mba|uhu|hi |hur|cha|yot|ru |uru|wat| ch|eri|ngi|e y|u y|i a|aif|tai| sh|nay|chi|ra |ani| bi| uh|sa | hi|i h|awa|iwa|a j|ti |mu |o k|ja |kan|uli|iwe|any|i w| am|e n|end|atu|kaz|o h|ria|her|she|shi|nch| nc|uta|ye |wak|ii |ele|ami|adh|eza| wo|iki|oja|moj|jam| ja|aka|bu |kam|kul|mat|fan|a l|agu|ind|ne |iri|lim|wen|da |kup|uto|i m|a b|ini|wan|bil| ta|sta|dha| sa| ni|ao | hu|e w|wot| zi|rik|kuf|aji|ta |wez|nya|har| ye|e m|si |lin| ut|ine|gin|ing| la|a t|zim|imu|ima|tak|e b|uni|ibu|azo|kos|yan|nye|uba|ari|ahi|nde|asa|ri |ham|dhi|eli|hir|ush|pat| nd|kus|maa|di |nda|oa |bar|bo |mbo|oka|tok|ndw|ala|wal| si|uzi|hii|tah|i s|o n|liw| el|upa|zin|hag|a c|ndi|ais|mai|eny|mwe|aa |ewe| al|ndo|e h|lo |umi|kuh|jib|osa|mam|a z|ufu|dwa|u i| in|iyo|nyi| ny|u m|sil|ang|o w|guz|zwa|uwa|kuw|hil|saw|uch|ufa|laz|und|aha|ua | mw|bal| lo|o l|a i|del|nun|anu|nji| ba|lik|le |uku|i i",
    sun: "an |na |eun|ng | ka|ana| sa| di|ang|ung|un |nga|ak | ha|keu| ba|a b| an|nu |hak| bo|anu|ata|nan|a h|ina| je|aha|ga |ah |awa|jeu| na|ara|ing|oga|bog|gan| ng|asa|kan|a s|ha |ae |bae|n k|a k| pa|a p|sah|g s|sar| si|sin|a n|din|n s|ma | at|aga|a a|tan| ku| ma|n a|san|man|wa |lah|pan|taw|u d|ra |ari|eu | pi|gar| pe|kat| te|n p|sa |per|a d|a m|e b|aan|ban|ran|ala|ike|n n|kum| ti|ama|a j|pik|ima|n d|al |at | ja|ila|ta |nda|bas|rim|teu|n b|eba|beb|udu|aya|ika|ngg|nag|kab|rta|art| me|ola|k n|uma|atu|aba|g k|adi|aca| po|ngt|nar|una|ate|oh |boh|awe|di |tin|asi|uku|n h|dan|aka|iba|car|sac|gaw|are|ent|um |jen|abe|u s|dil|pol|ar |ku |kud|u m|upa|han| hu|ake|bar|ur |hna|aru|h s|a t|sak|wat|kaw| so|n t|pa |mpa|du |ngk|g d|ena|huk| mi|mas|ngs|ti |n j|ka |aku|ren|n m| ta|law|isa| tu|und|a u|h a|tay|ula|aja|ali|nte|gsa|en |gam| wa|ieu|ere|k h|jal|h b|il |dit|ngu|lan|asu|yun|ayu|gta|k d|a r|g n|mah|uda|dip|kas|rup|geu| be|ter|sej|min|ri |ern|u p|k k|amp|ura|kal|e a|k a|ut |g b|nak|bis| bi|k p|tes|end|we |h k|tun|uan| un| de|u n|h t|ksa|u k|ian|wil|u b|ona|nas|uka|rak|eje| se|ami| ke|war| ra| ie|k j|eh |ya |lma|alm|pen|tur|wan|lak|h j|g a|ean|up |rga|arg|r k|u t| ne|deu|gal|gke|e t|h p| ge|g t| da|i n",
    ron: " de|re | în|și |are|de | și|te |ul | sa|rep|e d|ea |ept|dre|tul|e a| dr|ie |în |ptu|le |ate|la |e p| la| pe|ori| pr|ce |e s| or|au |tat| ar|ice|ii |or |a s| fi| a |ric|ale|per| co|nă |ă a|rea|ers|i s| li|sau| ca|rso|ent|lor|ați|al |a d|e o|men|l l|ei |e c|pri|ană| ac| re|uri|ber|ibe|lib|a p|oan|soa| in|i l|ter| al| să|tea|lă |car|tăț|să |tur|i a|i d|nal| ni|ri |ita|e î|e ș|se |ilo|in |ia |ție|pre|fie|ții|ăți|con|ere|e f|a o|eni|nte| nu| se|ace|ire|ici| cu|i î|a c|i n|a l|pen|ui |nu |ări|ală|ona|l d|ră |ert|ril| su|ntr|n c|rin| as|ni |i o|eri|tă |că |ile|ă d|i c|e n|ele|sa | mo|i p|fi |sal|tor|va |oci|soc|nic|pro| un| tr|est|inț|a î|uni|n m|a a| di|ecu|lui|sta|lit| po|tre|gal|ega|oat|ra |act|ă î|leg|u d|e l|nde|int|a f|n a| so|naț|ara|i f|uie|iun| to|tar|ste|ces|rar|at | ce|eme|i ș|rec|dep| că| o | îm|bui|ebu|reb| eg| na|mân|ntu|ili|văț|ând|iei|r ș|bil|pli|od |mod|res|din|e e|cți| au|ali|ă p|ă f|împ|ial|cia|ion|ă c|dec|nta| om|ită| fa|ță |cu |tra|ăță|nvă|înv|ât |ite|i i|lic| pu| ex|riv|tri|rot|ța |ți |l c|rta|imi|ulu|țio|ică|lig|rel|ta |cla|t î|nt |nit|e m|ânt|ămâ|țăm|ger|nța|ru |tru|gur|u c|bli|abi|ată|art|par|ar |rim|iva|l ș| sc|ime|nim|era|sup|ind|u a|dic|ic | st| va|ini|igi|e r",
    hau: "da | da|in |a k|ya |a d| ya|an |a a| ko| wa|na | a |sa | ha|kin|wan|ta | ba|a s| ta|a y|a h|wa |ko | na|n d|a t|ba |ma |n a| ma|iya|hak|asa| sa|ar |ata|yan| za|akk|a w|ama| ka|i d|iki|a m|owa|a b| ci| mu| sh|anc|nci|kow|a z|ai |nsa|a c|shi| ƙa|cik|ne |ana|i k|ci |kki|e d|a ƙ| ku|su |n y|uma|ka |uwa|kum|hi |a n|utu| yi|ani| ga| ra|aka|ali|mut|‘ya|tar| do|ɗan|ars| ‘y|sam|ƙas|nda|ane|man|tum|i a|yi |ni | du|ada| su|and|a g|cin| ad|a i|ke | ɗa|n k|yin|um |e m| ab|ins|nan|ki |mi |ami|yar|min|oka|re |i b|kam|mas|i y|mat|za |ann|en |aɗa| ja|m n|li |duk|dai|e s|n s|ra |n w|n h|aik| ai|ida|ga |san|rsa|aba|sar|ce |nin| la|o n|ban|nna|kan|abi|una|dam|me |ara|i m|hal|a r|add|are|n j|abu| ne|zai|a ɗ|wat|ari| ƙu|on |ans|waɗ|ame|ake|kar|din|zam| fa|a l|ƙun|buw|r d| hu|oki|kok|a ‘|u d|n t|abb|aur| id|rin|yak|dok|kiy|ray|jam|n b|ubu|bub|n m|i s| an|am |ili|bba|omi|dan|gam|ayu|ash|nce|tsa|ayi|har|yya|ika|bin|han|kko|rsu|aif|imi|fa | am|i i|dom| ki|yuw|dun|o a|fan|n ƙ|aya|fi |n r|she|uni|bay|riy|n ‘|sab| iy|bat|tab|aga| ir|mar|o w|i w|sha|awa| ak|uns|unc|tun|u k| il|ɗin|mfa|amf|aci|ewa|kas|lin|n n|don|n i|ure|ifi|lai|dda| ts|iri|aye|un |tan|wad|gwa|afi| ay|ace|mba|amb|aid|nta|ant|war|lim|kya| al|aɗi",
    fuv: "de | e |e n| ha|nde|la | wa|ina| ka|akk| nd|ɗo |na | in|e e|hak|al |di |i h|kke|ii |um |ko |ala|ndi| mu| ne|lla| jo|wal|eɗɗ|neɗ|all|mum| fo|kal|jog|ke |aaw|taa| ko|eed|ɗɗo|aa | le|ji |ade|aad|laa|o k| ng|e h| ta|re |ogi|a j|e w|e m|nnd|gii|e l|ley|awa|aag|ede|waa|e k|gu |e d| go|gal|ɓe |ti |fot|aan|eyd|ydi|ɗe |ee | re|ol |oto|i e|oti|m e|taw|nga|a i|kee|to |ann|eji|am |ni | wo|een|goo|eej|e f| he|enn|gol|agu|pot| po|dee|ay | fa|ka |a k|ond|oot| de|a f|o f|a n|wa |maa|ota|le |hay|i k|o n|ngo|e j|o t| ja|ñaa|hee|nka|i w|awi|a w|ngu|der| to|e t|dim|i n|fof|i f|e g|tee|naa|aak| do|too|a e|ndo|ren|dii|oor|er |o e|i m|of | sa| so|gaa|ani|kam| ma| ña|o w|i l|u m|kaa|ima|dir| ba|igg|lig| li|aar| ɓe|o i|e s| o |e r|so |ooj| nj| la|won|awo|dow|woo|faw|and|e i|ore|nge|nan|are|a t|tin|aam| mo|ɗee|ita|ira|aaɗ|e p|nng|ma |ank|yan|nda|oo |e ɓ|njo|ude|nee|e y|e a|je | ya|en |ine|iin| di|ral| na|ɗi |und| hu|inn|ŋde|aŋd|jaŋ|a d|den| fe| te|go | su|a h|haa|tal|eɗe|e b|y g|baa|tde| yi|ɗɗa|o h|iiɗ|ow | da|do |l n|alt| ho|l e|aga|mii| aa|a a|ama|nna|m t| ke|edd|oga|m w|l m|o j|aɗe|ree|oje|yee| no|ele|ne |ago| pa| al|guu|wi |ge |aaɓ|daa|ind|dew|i j|jey| je|ent|tan|o ɗ|geɗ| ge|ñee|a l| ɗu|kko|mak|a s| ga",
    bos: " pr| i |je |rav|na |ma |pra| na|ima| sv|a s|da |a p|vo |nje|ko |ako|anj|o i| po|avo|ja |e s|a i|ti | im| da| u |sva|no |ju | za|o n|va |i p|ili|vak|li | ko|ne | il|koj| ne|nja| dr|ost| sl|van|im |i s|u s|i i|a n|ava|ije|a u| bi|stv|se |a d|om |jed|bod|obo|lob|slo| se| ra|ih |sti| ob| je|pri|enj|dru|u i|o d|iti|voj|raz|ova|dje| os|e i|lo |e p| nj|uje|i d|bra|tre| tr| su|jeg|i n|u z|a k|og |u p|oje|cij|reb|a o|a b|lju|i u|ran|mij|ni |nos|jen|ba |edn|svo| iz|jel|pro|e d|žav|bit| ni|i o|sta|a z|avn|vje| ka|bil|ovo|a j|aju|ist|nih|tu |red|gov| od|e o|oji| sm|lje|o k|ilo|ji |aci|e u|e n|pre|o p|eba|u o|su |vim|ičn| sa|u n| dj|a t|ija|čno|jem|rža|drž|elj|stu|dna|odn|eni|za |iva|olj|šti|nom|em |du |vno|smi|jer|e b|de |pos|m i| do|u d|nak|a r|obr| mo|lja|nim|ego| kr|tit|kri|ve |nju|an |iko|nik|nu |i m|nog|eno|sno| st|e k|tup|rug|ka |oda|riv|vol|aln|m s|itu|ašt|zaš|ani|sam|akv|ovi|osn|rod|aro| mi|tva|dno|nst|jan|ak |ite|vič|rad|u m| ta|dst|tiv|nac|rim|kon|ku |odu|živ|amo|tvo|tel|pod|g p|nov|ina|nar| vj|o s|i b|oj | ov|ave|vu |ans|oja|zov|azo|ude|bud| bu|e t|i v|din|edi|nic|tan|nap|mje| is|jal|slu|pun|eds|o o|zak|jav|i k|m p|tno|ivo|ere|nič|m n|jim|kak|ada|vni|ugi| ro|mov|ven|pol|to |te | vr",
    hrv: " pr| i |ma |rav|ima|pra|je |na | sv|ti | na|a p|vo |vat|ko |a s|nje| po|anj|avo|o i|tko| im|a i|sva|no |i p|e s|ja |o n| za|ju |ili| u |va |li | bi|ne |i s|atk| il|iti|da | ne| ko| dr| sl|van|nja|koj|ije| ra|ova| os|u s|i i|ost|bod|obo|lob|slo|pri|a n|om |jed|ati|ih |im |voj|ava| ob|stv|se | mo|i u|bit|dru| je| se|dje|i o|enj| ka|i n|sti|lo |u i|svo|mij|ni |e i|raz|a o|e n|bra|o p| su|a b|u p|ran|a k|og |i d|bil|ako|e p|a d|edn|aju|mor|eni| nj|iva|jel|žav| ni|a z|avn|ovi|eno|ra |oje|a j| da|a u|ora|jeg| iz|nih|rža|drž|oji|sno|nit|jen|vje|ilo|cij|oda|nim| dj|pro|tit|u z|e d|red|nom|jem| od|nos|sta|nov|osn| sm|lje|o s|ji |ovo|stu|pos|vim| do|odn|rad|ist| sa|e o|tu |nju|em |gov|o d|rod|i m|jer|aci|oj |pre|m i|nak|dna|a r|lju|uje|e m|obr|za |olj|ve |o o|m s|an |nu |du |aro|vno|smi|aln|e k|o k|i b|e u|tva|u u|tup|rug|dno|u o|su |u d|ka |vol| ta|ija|itu|šti|ašt|zaš|itk|živ|ani|sam|elj| st|sob|oso|nar|akv|ada| mi|te |ona|nst|jan|lja|i v|ite|ego|elo|rim|ku |odu|amo|tvo|tel|jim|pod|nog|vi |ina| vj|to |e b|ans|zov|azo|ak | sk|edi|tan|oju|pun|pot|oti|kon|zak|i k|m p|tno|ivo|ere|nič|kak|vni|ugi| ro|mov|ven|štv| be|ara|kla|ave|u b|avi|oja|jal|u m|dni|mje|rak|din|ći |juč|klj|nic|u k|nap|obi|atn",
    nld: "en |an |de | de| he|ing|cht| en|der|van| va|ng |een|et |ech| ge| ee|n e|rec| re|n v|n d|nde|ver| be|er |ede|den| op|het|n i| te|lij|gen|zij| zi|ht |ijk|eli| in|t o| ve|op |and|ten|ke |ijn|e v|jn |ied| on|eft| ie|sch|n z|n o|aan|ft |eid|te |oor| we|ond|eef|ere|hee|id |in |rde|n w|t r|aar|rij|ord|wor|ens|of | of|hei|n g| vr| vo| aa|r h|hte| wo|n h|al |nd |vri|e o|ren|le |or |n a|jke|lle|eni|n b|ij |e e|g v| st|ige|die|e g|men|nge|t h|e b| za|e s|om |t e|ati|wel|erk|sta|ers| al| om|n t|zal|dig| me|ste|voo|ter|gin|re |ege|ge |g e|bes|nat| na|eke|che|ig |gel|nie|nst|e a|nig|est|e w|erw|r d|end|ona|d v|jhe|ijh|d e|ele| di|ie | do|del|n n|at |it | da|tie|e r|elk|ich|jk |vol|ijd|tel|min|len|str|lin|n s|per|t d|han| zo|hap|cha|wet| to|ven| ni|aat|ion|tio|taa|lke|eze|met|ard|waa|uit|sti|e n|doo|pen|eve|el |toe|ale|ien|ach|st |ns | wa|eme|nin|e d|bij| gr|n m|p v|esc|t w|ont|ite|man|ema| ma|nal|g o|rin|hed|t a|t v|beg|all|ijs|wij|rwi|e h| bi|gro|p d|rmi|erm|her|oon| pe|eit|kin|t z|iet|iem|e i|gem|igi| an|d o|r e|ete|e m|js | hu|oep|g z|edi|arb|zen|tin|ron|daa|teg|g t|raf|tra|eri|soo|nsc|t b| er|lan| la|ern|ar |lit|zon|d z|ze |dez|eho|d m|tig|loo|mee|ger|ali|gev|ije|ezi|gez|nli|l v|tij|eer| ar",
    srp: " pr| i |rav|na |pra| na|ma | sv|ima|da |ja |a p|vo |je |ko |ti |avo| po|a i|ako|a s| za| u |ju |o i| im|nje|i p|va |sva|anj|vak| da|o n|nja|e s|ost| ko|a n|li |ili|ne |om | ne|i s| sl| il| dr|no |koj|u s|ava| ra|og |slo|im |enj|sti|bod|obo|lob|iti|a o|stv|i u|a d|ni |jed|u p|pri|edn| bi|i i|a k|o d|sta|ih |dru|a u| je| os| ni|nos|pro|aju|i o|ran| de| su|u i|se |van|ova|i d|cij| ob|uje|red|žav|e i|i n|voj|e p|a j|dna| se| od|ve | ka|eni|rža|drž|a z|avn|aci|ovo|u u|m i|oja| iz|lja| nj|ija|u z|e o|rod|jen|lje|e b|raz|jan|lju|svo|za |gov|ičn| st|nov|sno|osn|du |ji |pre| tr|su |vu |odn|a b|jeg|nim|nih|tu |tit|šti|ku |nom|bit|e d|me |iko|čno|oji|lo |vno|nik|e n|đen|ika|bez|ara|de |u o|vim|nak| sa|u n|riv|ave|an |olj|vol| kr|o p|sme|e k|nog| ov|e u|tva|bra|rug|reb|tre|u d|oda| mo| vr|vlj|avl|ego|jav|del|m s|kri|o k|ašt|zaš|nju| sm|ani| li|dno|eđu|aln|la |akv|oj |šen|kom|stu|ugi|avi|a r|ka |rad|oju|tan|odi|vič|tav|itu|ude|bud| bu|pot|odu|živ|ere|m n|tvo|ilo|bil|aro|ovi|por|eno|štv|nac|ove|m p|tup|pos|rem|dni|ba |nst|a t|ast|iva|e m|vre|nu |beđ|ist|pun|en |te |dst|rot|zak|ao |kao|i k|juć|o s|st |sam|ter|nar| me|i m|kol|e r|ušt|ruš|ver|kak| be|i b|kla|ada|eba|ena|ona| on|tvu|ans| do|rak|slu",
    ckb: " he| û |ên | bi| ma|na |in |maf| di|an |xwe| xw|ku | ku|kes| de| ji|her|kir|iya|ya |rin|iri|ji |bi |es | ne|ye |yên|e b|er |afê|tin|ke | an|iyê|eye|rke|erk|we | be|e h|de | we|hey|fê |i b|yê |ina| bê| li|diy|ber|li |re |î û|nê |ê d| se| ci|eke|di |wî | na|î y|af |ete|hem| wî|sti| ki|rî |kî |î a|yek|n d|kar| te|ne |yî |i h|e k|tî |tê |a w|e d|î b|s m|ast|n b|be |yan|ser|tew|net| tu| ew|hev|aza|ara|û b|n k|adi|ev |zad| az|ras|est|anê| ya|n h|n û|wed| tê|wek|bat|bo | bo| yê|st |n n|ê k|dan|ê h|ema|ê b|iye|î h|din|bûn|r k|ekî| me|par|ûna|ta |wle|ewl|î m| ke|nav|ewe|man|ê t|dî |û m|mû |emû|a m|ika|e û|n w|a x|ê m|e n| ta|ela|n j|eyê|n x|civ|wey|ana| re|khe|ekh|bik|kê |jî |f h|erî| pa|îna|bin|erb|vak|iva|a s| ni|cih|vê |e j|ari| pê|î d|nên|ike|e t|a k|ê x| ye|n a|eyî|n e|ama|bê |ar |ewa|atê|bes|rbe|av |ibe|ist|mî |tem|awa|are|hî |geh|nge|ing|nek|nûn|anû|qan| qa|vî |rti|uke|tuk| şe|eza| da|u d|û a|f û|edi| ra|tu |tiy|tên| mi|xeb| ge|hîn| hî|etê|î j|stî|mal|bib|ra |i d|e m|mam|i a|nik|i m|î k| wi|ûn | ko|a ş|ê j|riy|lat|wel|e e|ine|ane|û h|în |a d|siy|end|aye| za|ija|a n|î n|ek |tek|yet|mbe|emb|û d|rov|iro|mir|eba| xe|mên| ên| hu|nîn|anî|t û|ten|n m|dem|ê û|enê|te |art|i r| jî|u j|ekê|dew",
    yor: " ní|ti |ọ́ |ní | lá| ẹ̀|àn |ẹ́ |kan|tí | tí|an |ẹ̀ |tọ́|ọ̀ | ẹn|ọn |wọn|í ẹ|bí |áti|lát|̀tọ|ẹ̀t| gb| àt| àw|n l|àti| a |lẹ̀|ẹnì| ó |kọ̀| ló|ì k|sí |ọ̀k| kọ|ra |ni |àbí|tàb| tà|nì | sí|̀ka|ọ̀ọ|n ẹ|àwọ|n t|ó n|̀ọ̀|ílẹ|orí|ló | wọ|tó |dè |ìyà|ún | tó| or|í ì|èdè|kò |‐èd|̀‐è|ẹ̀‐|ríl|í ó|rẹ̀|í à| sì|yàn|gbo|ṣe | kò|í a| rẹ| jẹ|sì | bá|ràn| ṣe|wọ́|nìy|fún| fú|n à|ba |n n|gbà|gbọ|jẹ́|un |ìí | kí|gba|ènì| èn|bá |́ l|a k| ka|dọ̀|kí | òm|in | fi|bò |fi |bẹ́|ọdọ|bọd|́ s|hun|nú |nín|wà |ira|nir|òmì|ìgb| ìg|́ t|ẹni|ínú|i l|ìni|mìn|bà |áà |i ì|ohu| oh|í i|ara| ti|bo |ò l| pé|rú |írà| ọ̀|í ò|ogb|kọ́|pọ̀|ó b|à t|i n|lọ́|ẹ́n| ìb|yìí|gbé|gẹ́|bog|óò |yóò| yó|n k|pé |dá |́wọ|ọ́w|à l|í k| wà|n o|jọ | ir|ọ̀r|ú ì|́ à|ó s|i t|ṣẹ́|̀kọ|í t|yé |lè | lè|fin|àbò| lọ|à n|ùjọ|wùj|irú|ó j| ar|í w|a w| ìm|ú à|̀ t|òfi| òf| àà|fẹ́|àwù|́ni|wù |ìír|mìí| mì|láì| yì|í g|ọ́n|n s|i ẹ|ẹ̀k|àgb|ígb|níg|a n| kú|láà|í o|náà| ná|kẹ́|ípa|níp|ìn | ìk|bé |i g|ọmọ| ọm|i à|iṣẹ|̀ à|ìmọ|n a|n f|jẹ |yí |́ ọ|ó d|́ ò| dá| mú|ààb|ábẹ|láb|ìbá|ò g|jú |i o|lú | èt|̀ ẹ|tọ̀|de |̀ n|i ò| ìy|kàn|́n | bí| iṣ|mọ̀|e ẹ|̀ l| fà|èyí| èy| ìd|mọ́|dé |̀ k|́ p|ò t|mú | fẹ| ìj|rí |ìkẹ|nìk|ìní|n ì|n è|sìn|è ẹ| i |rọ̀| àn|́ b|ùn |́gb|ọ́g|dọ́| dọ|í n|rin|̀ j",
    uzn: "ish|an |lar|ga |ir | bi|ar | va|da |iga| hu|va |bir|sh |uqu|quq|huq| ha|shi| bo|r b|gan|a e|ida| ta|ini|lis|adi|ng |dir|lik|iy |ili|oʻl|har|ari| oʻ|uqi|ins|lan|hi |ing|dan|nin|kin| yo|son|nso| in| mu|on |qig| ma|ega|r i|boʻ| eg|oʻz|ni |gad|ash|i b|ki |oki|ila|yok|a b|n b|osh|ala|at |in |r h|erk| er|lga| qa|rki|h h| sh|i h|ara|n m| ba|nis|ik |igi|lig|bos|ri |qil|a t|bil|las|eti| et|n o|ani|nli|kla|i v|a q|a h|a o|yat| qo|im |a s|i m|iya|atl|oli|osi|siy|qla|cha|til| ol|ati|a y|mas|qar|inl|lat| qi|taʼ|ham|gi |ib |ʻli|mla|h v|ʻz |hun|n e|mum| da| bu| to|un |mki|umk|sha|tla|ris|iro|ha |rch|bar|iri|oya|ali| be|i o|asi|aro| ke|i t|rla| te|arc|hda|shu|tis|n h|tga| sa| xa|rak|lin|ada|ola|imo|hqa|shq|li | tu|aml|lla|sid| as|nid|a i| ki|ch |n t|nda|k b|era|siz|or |hla|a m|r v|eng|ten|mat|mda|amd|lim|miy|y t|ayo|i a|ino|ilg|tni| is|ana|as |ema| em|ech|a a|tar|kat|aka|ak |rat| de|aza|ill| si| so|gʻi|uql|n q|oda|ʼli|aʼl|nik| ni|tda|uch|gin|a u|him|uni|sit|ay |qon| ja|atn|kim|h k|hec| he|ʻzi|lak|ker|ikl| ch|liy|lli|chi|ur |zar|shl|rig|irl|dam|koh|iko|a d|am |n v|rti|tib|yot|tal|chu| uc|sla|rin|sos|aso| un|na | ka|muh|dig|asl|lma|ra |bu |ush|xal|ʻlg|i k|ekl|r d|qat|aga|i q|oiy|mil| mi|qa |i s|jin",
    zlm: "an |ang| ke|ng | se| da|ada|ara|dan| pe|ran| be|ak |ber|hak|ata|ala|a s|ah |nya| me|da |per|n s|ya | di|kan|lah|n k|aan|gan|dal|pad|kep|a p|n d|erh|eba|nga|yan|rha| ya|nda|ora|tia|asa| ha|ama|epa| or|iap|ap |a b| at| ma|eti|ra |tau|n a|set|au | ba|pa | ad|n p|tan|p o|eng|a d|men|apa|h b|h d|dak|man|a a|ter| te|k k| sa|n b|ana|g a|end|leh|ole|a k|am |n y|aka|eh |lam|bas|beb|n m| un|pen|sa |keb|sam|n t| ti|ela|san|car|uan|ma |di |han|ega|ban|eri|at |sia|a m|ika|kes|ian|gar|seb|ta |mas|und|neg|nan|ngs|i d|erl|na |epe|emb|bar| la|atu|kla|pem|mem|emu|eca|sec|ngg|nny|any|bol|al |aha|gsa|ebe|ind|akl|n h|erk|ung|ena| bo|a t| ap|ers| de|in |tu |pun|as |agi|ann|g b|bag| ne|ain|hen| he|era|rat|sem| su|adi|lan|g s|dia|mat|ses|iad| ta|iha|g t|tin|k m|k h|i k|gi |i s|ing|uka|enu|den|lai|k d|ert|ti |rka|aja|rga|lua|ker|mel|dun|ndu|lin|rli|nak|ntu|esi|aya|un |uat|jua| in|rma|erm|ai |emp|kem|ri |dil|ua |uk |h m|l d|g m|mba|kat|ese|tik|ni |ini| an|mpu|ka |dar|mar|rja|erj|arg|u k|sua| ol|esa|dap|ar |g u|si |ent|g d| pu|awa|iri|dir|sal|gam|mbe|n i|har|a h|raa|ema|tar|i a|saa|ira|ari|pel|jar|laj|uju|tuj|rak|ura|uar|elu|t d|unt|il |wen|asi|gga|ipa|ksa|tuk|ula|sek|sas|ibu|rta|sep|rsa|nta|ati|ila|mua|yar",
    ibo: "a n|e n|ke | na| ọ |na | bụ|ọ b|nwe|nye|ere|re | n |ya |la | nk|ye | nw| ma|e ọ| ya| ik|a o|a ọ|ma |ụla|bụl|ike| on|nke|e i|a m|ony|ụ n|kik|iki|bụ | a |ka |wer|ta |i n|do |di | nd| ga|a a|e a|a i|he |kwa| ok| ob|e o|hi |any|ga‐|ha |dụ | mm|ndi|ọ n|wa |rụ |e m|che|a e|oke|wu |aka|ite|o n|a g|odo|bod|obo| dị| ez|ara|we | ih|a‐e|hị |ri |n o|zi |mma|chi|dị |ghi|ụta|iri|ihe| an| oh|a y|gba|ụ ọ| ọz| ak| iw|nya|te |iwu| nt|ro |oro|e ị|zọ |ezi|me |e e|u n|her|ohe| si|a‐a|i m|ala|ụ i| ka|akw| in|ghị|kpe|n e|pụt| e |i i|i o|ide|inw|ụ o|hụ |ahụ|weg|ra |o i|kpa|adụ|mad|si |sit|a s| me|sor|i ọ|gid|edo|u o|e y|n a| en|tar|ozu|toz|bi |be |ụ m|ụrụ|ọrụ| ọr|mak|uso|ama|de |ị o| ọn|ọzọ|chị|egh|enw|apụ|ru | to|i a|a ụ|osi|rị |wet|hed|nch| nc| eb| al|nọd|ọnọ|uru|sir| kw|yer|ji |eny| mk|ịrị|eta| us|tu |ọ d|u ọ| o |ba | mb|ọdụ|ịch| ch|a d|pa | ag|kwe| ha|a u|e s|mkp|n u|nta|ebe|n ọ|o m|kwu|nkw|nwa|obi| ịk|esi|i e|nha| nh|le |ile|nil| ni|eme| og|e k|n i|chọ|o y|asị|otu| ot|ram|u m|ịgh|dịg|zu |nọ |mba| gb|e g|ị m|ọch|ich|pe |agb|i ị|uch|zụz|uny|wun|ọrọ| nn|na‐| di|ge |oge|iji| ij|ọha| ọh|ikp|egi|meg|o o|ụhụ|hụh|mah|n ụ|ọ g|ọta|ekọ|ị n|kwụ|agh|ụmụ|ban|kpu|okp| ah|ịkp|a k|ime| im|zụ |ụzụ|ọzụ| ụz|lit|ali|nat",
    ceb: "sa | sa|ng |ang| ka| pa|an |ga |nga| ma|pag| ng|on |a p|od |kat|ay | an|g m|a k|ug |ana| ug|ung|ata|ngo|atu|n s|ala|san|d s|tun|ag |a m|god|g s|a a|a s|g k|g p|yon|n u|ong|tag|usa|pan|ing|una|mat|g u|mga| mg|y k| us|ali|syo| o |aga|tan|iya|kin|dun|nay|man|nan|a i| na|ina|nsa|isa|bis|a b|adu| ad|n n| bi|asy|asa|lay|awa|lan|non|a n|nas|o s|al |agp|lin|nal|wal| wa|ili|was|gaw|han| iy| ki|nah|ban|nag|yan|ahi|n k|gan| gi|him| di|a u| ba| un|ini|ama|ya |kas|asu|n a|g a|gka|agk|kan|ags|agt|l n|a g|kag| ta|imo|uns|sam| su|g n|n o|gal|kal|og |taw|aho|uka|gpa|ipo|ika|o p|a t| og| si|gsa|g t|aba|ano|gla|y s|o a|aki|hat|kau|sud|gpi|a w|g i|aha|ot |ran|i s|n m|bal|lip|gon|ud | ga|li |uba|ig |ara|g d|na |kab|aka|gba|ngl|ayo| la| hu|a h|ati|d a|d n| pu| in|uga|ok |ihi|d u|ma |may|awo|agb|ami|say|apa|pod|uha|t n|agh|buh|ins|ad | ub| bu|at |iin|a d|ip |uta|sal|hon|wo |ho |tra|lak|iko|as |aod|bah|mo |aug|ona|dil|gik|sos|lih|pin| pi|k s|nin|oon|abu|la |rab|hun| ti|mah|tar|t s|ngb|uma|hin|bat|lao|mak|it | at|s s|sno|asn|ni |aan|ahu| hi|agi|n p|inu|ulo|y p| ni|iha|mag|o n|duk|edu| ed|a e|til|ura|tin|kip|agl|gay|g h|g b|ato|ghi|nab|kon|in |ter|o u|o o|yal|sya|osy| so|tik| re| tr|hig|a o|ha |but|pak|aya",
    tgl: "ng |ang| pa|an |sa | ka| sa|at | ma| ng|apa|ala|ata|g p|pan|pag|ay | an| na|ara| at|tan|a p|pat|n a| ba|ga |awa|rap|kar|g k|aya|lan|g m|n n|g b|nga|mga| mg|a k|na |ama|n s|a a|gan|yan|gka| ta|may|tao|agk|asa|man|aka|ao |y m|ana|g a|nan|aha|kan|y k|baw|kal|a m|g n|ing|wat| y |t t|pam|a n|o y|ban| la|ali|san|wal|mag| o |g i|aga|lay|any|g s|in |nya|yon|kas|a s|isa|una|ong|aan|kat|t p| wa|ina|tay|ya |on |o m|ila|ag |nta|t n|aba|ili| ay|o a| ga|no |a i|gal|ant|han|t s|kap|kak|lah|ari|agt|agp|ran|g l|lin|as |lal|gaw|ans|to |ito| it|hay|wa |t m| is|pap|mam|nsa|ahi|nag|bat|lip|gta| di|gay|gpa|pin| si|ngk|ung|aki|y n|iti|tat|ano|yaa|y s|mal|hat|kai|sal|hin|uma|mak|di |agi|pun|ihi|a l|i a|ira|gga|nah|s n|ap | ha|usa|nin|o p|gin|ipu|ika|ngi|i n|lag|la |y p|ini|g t|uka|nap| tu|a g|tas|aru|ipa| ip|li |al |n o|a o|t k|alo| pi|sin|syo|asy|ita|aho|nar|par|o s|pak|t a|uha|sas|gsa|ags|kin|a h|iba|lit|ula|o n|nak|a t| bu|duk|kab|sam|g e|ain|ami|mas|lab|ani|kil|it | al|agb|buh|a b|g g|ba | ib|iyo|ri |yag|ad | da|edu| ed|anl|ma |ais|iga|mba|tun|ipi| ki|od |ayu| li|lih|sar|gi |g w|pah|wir|oob|loo|agg|nli|bay|map|git|mil|ok |hon|ngg|sah|iya|pas|g h|agl|tar|ngu|amb|uku|ayo|s a|p n|n m|rus|i m|l a|abu| aa",
    hun: "en | sz| va| a |és |min|ek | és| mi|jog| jo|an |ind|nek|sze|ság|nde|a v|den|oga|sza|val|ga |mél|ala|emé|gy |n a|van|zem|ele| me|egy|ély| eg|zab|tás| az|n s|bad|aba|ni |az |gye| el|ak | se|meg|sen|ény|ség|k j|yne|lyn| ne|ben|lam|tt |t a|et |agy|oz |hoz|vag|zet| te|n m|ez |nak|int|re |eté|tet|mel|tel|s a|em |ely|let|hez| al|s s| ki|ete|atá|z a| le|yen|es |ra |tés|ell|nt |sem|t s|len|nem|a s|ese|nki|enk|a m|ásá|i m|ban|kin|k m|szt| ál|ame|köz|k a|dsá|ads|ló | kö|ás |ly |on |ébe|tat|a t|n v|áll|mén| vé|nye|kül|lő |a n| cs|i é|ok |ész|ért|lla|lap|ágo|gok|nyi|tek| ke|nd |éte|ami|zés|yes|szo|t m|a a|het|fel|lat|lem|lle|el |z e|s e|k é|mbe|emb|elé|ot |lis|vet|kor|ág |olg| am|szá|ehe|leh|ogo|ott|ül |nte|éle|i v|ogy|hog| ho|kel|n k|tes|nlő|enl|ssá|áza|ház|ég |vel|ába|lek|ége| ha|a h|rés| fe|ány|del|elő|át |alá|art|tar|zto|zás|tő |yil|koz|tko|aló|s k|i e|árs|tár|mze|emz| ny|más|ett|ny |fej|ass|zas| há|d a|t é|is |ésé|ezé|téb| mu|áso|sít|lye|elm|éde|véd|ine|t k|os |it |izt|biz| bi|y a|m l|tot|a j|atk|nél|t n|ti | má|ai |lás|eve|nev|zte| bá|sel|ll |al |ere|n e|unk|mun|t e| ak|ife|kif|ako|s é| ér|ána| es|s t|got|sül| be|vál|csa|se |ése|ad |ges|tos|ja | gy|asz|ten|lmé| tá|eze|árm|bár|ess|l s|üle",
    azj: " və|və |ər |ir | hə| bi| hü| ol|üqu|hüq|quq|na |in |lar|hər|də | şə|bir|lər|lik|mal|r b|lma|r h| tə|əxs|şəx|ən |dir|uqu|una|an |ali|a m| ma|ikd|ini|r ş|dən|ar |ilə|qun|aq |ası| ya|mək|yət| mə| mü|kdi|əsi|ək |ilm|nin|ndə|olm|əti|ə y|sin|xs |nda|lmə|yyə|i v| qa| az|olu|iyy|ya |ind|zad|qla|ün |ni |lə |tin|n m|aza|arı|ət |n t|maq|lun|lıq|ə b|un |nun|q v|n h|dan|ın | et|tmə|ərə| öz|da |ə v| on|ə a|ına|ını|bil|a b|sı |il |əmi|ara|si | di|ə m|əri|rlə| va|ə h|etm|ığı|ama|dlı|adl|rin|bər|rın|n i|müd|nın| he|mas|ik |n a|dil|alı|irl|ələ|üda|sın|ınd|xsi|li |ə d|nə | bə|əya| in|ə i|lət| sə|nı | iş|anı|eç |heç|q h|eyn|ə e|dır| da|asi|rı |iş |ifa|lığ|i s|fiə|afi|daf| ed|məz|u v|kil| ha|ola|n v|əni|ır |uq |unm| bu| as|sia|osi|sos|ili|ıdı|lıd|nma|ıq |inə|əra|sil|xil|axi|dax|adə|man|a h|ə o|onu|a q|əz | ki|seç| se|ı h|min|lan|ədə|bu |raq|lı |ılı|al |ə q|r v|nla|hsi|əhs|təh|öz |ist| is|məs| əs|ina|ə t|ətl|a v|iə |n b|tər| ta| cə|edi|ala|kim|qu |i t|ulm|məh|n o|aya|ı o|ial| so|ill|siy| də|var|ins|mi |ğı |nik|r i|aql|k h|təm|tam|çün|üçü| üç|ğın|sas|əsa|z h|əmə|zam| za|sti|rəf|n e|r a|ild|həm|ıql|yan|may|n ə|mən|mil| mi|əqi|din|n d|tün| dö|miy|kah|ika| ni|fad|tif|l o|sər|yni| ey|ana|lən|am |ril|ayə|aşı",
    ces: " pr|ní | a | ne|prá|ráv|na |ost| po|ho | sv|o n| na|vo |neb|ávo|bo |ebo|nos|má | má|ažd|kaž| ka| ro|ch |dý |ždý|ti |ou |a s| př| za|ání|á p| je| v |svo|ého| st|ý m|sti|ně | by|obo|vob|ter|pro|ení|bod| zá| sp|í a|rod|kte|by |mu |u p|o p| ná|ván|jak| ja|a p|o v|í n|ová|oli|ví |spo|roz| kt|mi |í p|ny | ma|ím |i a|do | so|odn|áro|nár|li |né |tví|at |ých|a z| vy|byl|vol|en |ýt |být| bý|t s|tní|stn|o s|í b|to | do|své|vé |ran|ejn|zák|eho|jeh|nes|pří|mí |čin|kol|ají|sou| vš|ích|it |ným|ým |nu |hra|nou|u s|ému| k |du |žen|pod| ze|kla|a v|stv|pol|dní|eré|m p|stá|je |ci |ečn| ni|néh|a n|aké|áva|maj|em |rov|í m|ké |ole|nýc|ova| ve|ako| ta|i k|chr|och| oc|kon|i p|í v|smí|esm|kdo|st |i n|o z|ave|odu|bez| to|sta|ech|jí |o d|sob|se | se|í s|ými|i s| i |i v| vz|ním|pra|lně|při|tát|ste|a j|aby| ab| s |oln|a o|m n|čen|slu|řís| os|zem|mez| či|lní|áln|oci|jin| ji|y b|í z|y s|va |vše|t v|ovn|chn|děl|níc|leč| pl|vat| vo|vin|rav|vou|lad|inn|é v|anu|tej|u k|stu|est| tr|ky |ikd|nik|ivo|nit|zen|u o|ném|nez|iál|ího|len|ens|ože|oko|kéh|rac|ven|í k|e s|lán|ělá|zdě|vzd|t k|din|odi|tí | od|ré |tup|pov|pln|ště|ákl|nno|tak|erá|řed|o a|a t|res|jíc| mu|u z|rok| ob|čno|u a|y k|i j|é n|luš|ísl|oso|ciá|soc|níh|o j|cké",
    run: "ra |we |wa |e a| mu|a k|se | n | um| ku|ira|ash|tu |ntu|a i|mu |umu|mun|unt|ere|zwa|ege|ye |ora|teg|a n|a a|ing|ko | bi|sho|iri| ar| we|shi|aba|e n|ese|go |a m|o a|gu |uba|ngo|nga|hir| ca|ugu|obo|hob|za |ndi|ish|gih| at|ara|wes| kw|ger|ate|a b| ba| gu|e k|can|ama|ung|bor|u w|mwe|di | ab|nke|ke |kwi|ka |ank|yo |ezw|n u|na |iwe|e m|rez|ri |a g|gir| am|igi|e i|ro |a u|ngi|e b|ban| ak| in|ari|n i|hug|ihu|e u|riz|ang|nta| vy|ata| ub|and|aka|rwa| nt|kur|ta |iki|kan|iza|u b|ran|sha|o n|i n| ig|ivy| iv|ahi|bah|u n|ana| bu| as|aku|ga |uko|o u|ho | ka|ose|ubu|ako|guk|ite|o y|ba |i b|any|kir|o k|aho|iye|kub|amw|nye|aha| ng|o m|nya| it|re | im|o b|izw|kun|hin|e c|vyo|o i|vyi|ngu|uri|imi|imw|gin|ene|u m|zi |ha |kug|bur|uru|jwe| zi|u g|era|aga|ron|abi| y |e y| uk|gek|ani| gi|eye|ind|wo |u a|i a| ib|i i|ras|bat|gan|amb|n a|onk|rik|ne |ihe|agi|kor| ic|ze |tun|ibi|wub|nge|o z|tse|nka|he |rek|twa|gen|eko|mat|ber| ah|ni |ush|umw| bw|mak|bik|ury|yiw|bwo| nk|ma |no |kiz|uro|gis|aro|ika| ya|gus|y i|wir|ugi|uki| ki|a c|ryo|bir| ma| yi|iro|bwa|mur|eng|ukw|hat|tan|utu|wit|w i| mw|y a|mbe| ha|uza|ham|rah| is|irw|o v|umv|ura|eny|him|eka|bak|bun| ny|bo |yig|kuv|wab|key|eke|yer|vye|i y|ita|ya |a r| ko|kwa|o c",
    plt: "ny |na |ana| ny|a n|sy |y f|a a|aha|ra | ma|nan|n n|any|y n|a m|y m|y a| fi|an |tra|han|ara| fa| am|ka | ts| na|in |ami| mi|a t|olo|min|man|iza|lon| iz|fan| ol| ha| sy|aka|a i|reh|ay |ian|tsy|ina| ar|on |o a|etr|het|ona|y o|o h|zan|y t|a h|ala| hi|a f|y h|ehe|ira|a s|zo |y i|ndr|jo | jo|n j| an| az|ran|dia| dr|y s|fah|ena|ire|tan|dre| zo|mba| ka|m p|afa| di|n d|and|azo|zy |amp|ia |ren|iny|rah|y z|ry |ika|oan|ao |amb|lal|ho | ho|isy|ony|tsa|asa|a d|ha |fia|mis|ava|ray| pi|am |dra| to|rin| ta|ant|eo |zay|rai|tsi|itr|sa | fo| ra|van|ova|nen|azy| vo|mpi|ari|o f|tok|a k| ir|kan|oto|mah|ly |sia| la|n i|voa|haf|a r|ito|y k|oka|y r|y l|ano|ita|ene|its|ial|zon|aza|ain| re| as|fot|aro|fit|nat|nin|aly|har| ko|ham| no|fa |ary|atr|ila|ata|iha|nam|kon|oko| sa|elo|nja|anj|ive|isa|oa |dy |y d|o m|nto|ank|o n|otr|pan|fir|air|sir|ty |a v|sam|o s|tov|mit|rak|reo|o t|pia|tao| ao|no |y v|iar|a e|a z|hit|hoa| it|to |za |ton|eha|end|vy |idi|tin|ati|adi|lna|aln|rov|ban| za|nga|hah|oni|osi|sos|vah|ino|ity| at|hia|pir|ifa|omb|ame|era|vel|kar|va |tso|jak|fid|ifi|ais|o i|idy|la |ama|ba | pa|tot|ani|rar|mpa|haz|kam| eo| il|iva|aho|nao|n k|ato|lah|ovy| te|dro|lan|ela| mo| si|fin|miv|san|koa| he|aso| mb|sak|kav",
    qug: "ta | ka|ka |na |una|cha|ash|ari|a k|ana|pak|ish|ach|hka|shk|mi |kta|hay|man| ch|apa|ak |rin|ata|kun|har|akt|ita| ha|ami|lla| pa|ama|pas|shp| ma|tak|ayñ|yñi|in |sh |ina|uku|nka|chi|aka|a c|yta|kuy|all|tap|a h|kan| tu|ñit|tuk| ru|run|chu|an |pay|ayt|ris| ki|aku|hpa|ank|a p|kam| sh|nam|a s|uy |i k|ayp|nak|pi |nta|a m| li|ay |lia|hin|kaw|nap|ant|tam|a t|iri|nat| wa|y r|kay|aws| ya|n t|ypa|wsa|pa |lak|shi|a a|lli|iku|hu |n k|iak|yay|kis| al|shu|a w|ipa| sa| il|api|kas|yku|yac|kat|a r|huk|i c|wan|hik|a i|ill|ush| ti|ayk|hpi| ku|kac|say|hun|uya|ila|ika|yuy|pir|ich|mac|ima|a y|yll|ayl|i p|kin|a l| wi|kus| yu|lan|tan|llu|kpi| ta| pi|aya|la |yan|awa| ni|kak|lat|rik|war|ull|kll|li |ink|nch|un |akp|n s|may| ay|uch|i s|nac|sha|iki|kik|h m|ukt|pip|tin|n p|iya|nal|aki| ri|ura|tik|mak|ypi|i m|i w|n m|his|k i|riy|iwa|y h| hu|han|akl|k t|mas|pik|kap| ña|u t|nmi|nis|k a|i y|k l|kar| im|i i|wil|yma|aym|ksi|iks|uma| su|h k|has| ak|unk|huc|kir|anc|k m|pal|k k|ik |iñi| iñ|ma |n y|mun| mu|mam|tac|a n|i t|k r|sam|ian|asi|k h|was|ywa|iyt|llp|san|sum|ray|si |pan|nki|tar| ii|u k|ñik|uk |iña|kuk|wpa|awp|akk|a u|wat|uri| mi|yar|uyk|ayw|h c|ha |tay|rmi|arm|uta|las|yka|llk|kul|wiñ|ati|ska| ll|kit|n h|uti|kic|mat",
    mad: "an |eng|ng |ban| sa| ka|dha|ren| se| ba|ak | ha|adh|hak| dh|ang|se | pa|aba|a s|na |aga|ha | or|n s|ore|ara| ag|gad|are|ana|n o|ngg|ale|gan|a k|ala|dhu|tab|sar|ota|asa|eba| ot| ke|sab|ba |wi |uwi|abb|i h|huw|aan|n k|a b|bba| ta| ma|pan|hal|bas|ako|dhi|ra |kab|em |beb|ka |lak|gi |lem|g a|eka|n b|ama|nga|san|at |ong|ran|nge|a o|ggu|sa |a d|ane|n p|ken|par|aja|man|gar|ata|nek|apa| na|agi|abe| ga|e e|sal|a a|tan|g s|al |kal|gen|ta |i s|aka|e a|a p|a e| la| pe|nan| an|era|e d| e | be|n a| al|ena|uy |guy|n n|ate| bi|mas|e k|kat|uan|oan|kon|k k|a m|i d|g e|n t|g k|ada|koa|lan|ela| da|bad|ma |ne |as |lab|ega| mo|ar |car|one|i p|bi |kaa|bat|ri |on |pon| so|e b|le |ah |abi|ase|adi|epa| ep|k h|and|pam|te |ok |ste|aon|om |oko|aha|ari|ona|asi|ter| di|di |pad|e s|sad|yar|neg|ton|set|rga|ost|mos|gap|nda|a l|har|i k|ina| a | ng|kom|isa|si |a t|a h| kl|jan|daj|iga|hig|idh|hid|ndh|n m|ngs|tto|ett|arg|la |k b|ler|k d|nna| to|nao|n d|mat| ca|tad|bis|aya|epo|aen| po|bin|nya|kas|k s|n h|sya|nta|gsa|en |ant|n g|kar|i e|das|e t|e p|iba| pr|g p| ho| el|i a|hi |os |sao|uwa|tes| ja|nag|nas|lae|sia|t s|k o|nto|int|yat|arn|m p|duw|adu|eta| ko|i b|ni |g n|kla|rak|ame|mpo|jua|sok|aso|ggi|eja|pel|jam|ele| et|dil",
    nya: "ali|ndi|a m|a k| nd|wa |na | al|yen| ku|nth|ra |di |se |nse| mu|a n|thu|hu |nga| wa|la |mun|u a|unt|iye| ka|ce |ace| lo|a l|ang|e a| la| pa|liy|a u|ens| ma|idw|ons|dwa|e m|i n|ala|kha|lo |li |ira|era|ene|ga |ana|za |o m| mo|yo |o w| ci|we |dzi|ko |o l|and|dan|hal|zik|chi|oyo|pa |ner|ulu|ena|moy| um|a p| da|ape|kap|ka |iko| an|pen|a c|to |ito|hit|nch| nc|iri|lir|wac|umo|e k|lu |a a|aye| dz|kuk|a z|dwe|tha|mal| za|ing|ufu|mu |ro |ful| uf|o c|i d|lin|e l|zo |edw| zo|o a|mwa|u w|iro|o n|lan|amu|ere| mw|nzi|dza|alo|ri | li|fun|lid|gan|so | ca|kul|ofu|nso|o z|ulo|unz|o k|mul|lam|i c|san|a b|kwa| na|a d| a |una|u k|i l|nkh|ant|aku|ca |cit|oli|ipo|dip|ama|lac|wir|han|yan|osa|uli|tsa|i m|pon|kup|u d|ti |gwi|ukh|ung|hun|lon|ank|nda|iki|ina| ko|ao |diz|phu|ati|oma|i a|tsi|pat|iya|siy|kut| ya|zid|eze|ma |i k|mer|ome|mol|u n|u o|aph|ogw|izo|mba|sid|ku |sam|awi|adz| ad|izi|ula|say|e n|khu| kh|rez|vom|bvo|okh|lok|win|akh|o o| am| on|zir|map| zi|eza|ja |go |ngo|ika|its|ats|osi|gwe| co|isa|ya |haw|ani|o p|zi |ndu|kho|ezo|kir|uni|i u| ay|lal|gal|sa |bom| bo|ola|amb|wak|ha |ba |nja|anj|ban| ba|iza| bu|udz|ngw|bun|oye|o d|nal|kus|i p|i o|i y|wi | nt|e p| si|aka|ne |men|jir|nji|sed|ets|end|eka|uma|du ",
    zyb: "bou|iz |aeu|enz|eng|uz | bo|ih |oux|nz | di|ing|z g|ux |uq |dih|ngh| ca|ng |gen|ung|z c| mi|miz|ij |cae|z d| gi| de| ge|euq|you| ci|ngz|ouj|aen|uj | yi|ien|gya| gu|ngj|mbo| mb|zli|dae|gij|cin|ang|j d|nae| se| ba|z y|euz| cu|de |x m|oz |j g|ouz|x b|li |z b|h g| da| yo|nj |xna|oxn|rox| ro|h c|nzl|vei|yau|wz |z m|ix | si|i c|iq |gh |j b| cw|nda|yin| hi| nd|dan|vun|inh| ga|can|ei |cun|yie|q g|hoz|bau| li| gy|wyo|cwy|z h|gue|gz |gun|faz|unz|yen|uh |den|ciz| go|q c|gj | bi|ej |aej| fa|hin|zci| wn|j n|goz|gai|au |z s|q d| vu|h m|gva|hu |auj|ouq|az |h d|ya |uek|ci |nh |u d|ou |sou|jso|gjs|din|awz|enj| do|h s|eve|sev|z r|nq |sin|nhy|g g|g b|liz|kgy|ekg|sen|eix|wng|lij|ngq|bin|i d|ghc| ha|bae|hix|h y|j c|ghg|i b|ouh|en |n d|h f|j s|z v|j y|law|hci|anh|inz|q y|nei|anj|ozc|ez |enh|q s|aiq|uen|zsi|zda|hye|ujc|e c|siz|eiz|anz|g y|i g|q n|bie| ne| ae|giz|u c|hgy|g d|gda|ngd|cou| la|z l|auy|ai |in |iuz|zdi|jhu|ujh|yuz| du|j m| fu|cuz|eiq|g c|gzd| co|uyu|coz|zbi|biu| dw|i s|i n|aw |dun|yun|izy|daw| he|nho| ho|enq|x l|cie|q b|cij|uzl|x d|iuj|awj| ya|eij|dei|nde|sae|izc|wnq|wnh|sei|h b|aih|gzs|bwn|a d|u g|ngg|jca|e b|ran| ra|hcu| me|iet|van| bu|guh|hen|si |wnj| ve|u b|azl|inj|gak|gan|ozg|siu|yaw|i m",
    kin: "ra | ku|se | mu|a k|ntu|tu |nga|umu|ye | um|unt|mun|e n| gu|we |ira|a n| n |wa |ere|mu |ko |gom|a b|e a| ab|li |e k|mba|a a|e b|aba|ga |e u|ba |omb|o k| ba|a u|ose|u b|o a| cy|ash|eng| ag|kwi| bu|za |gih|ren|ndi| ub|ang|yo |aka|gu |igi| ib|a g|a m| nt|uli|o b|ama|ihu|e i|nta| ak|ago|ro |ora| ka|ugu|hug|di |iye|ban| am|cya|ku |ta | bw|and|sha|re | ig|gan|ubu|na | kw|obo| by| bi|a i|yan|ka |sho|kub|era|ese| we|kan|aga|hob|bor|ana|byo|ura|uru|ibi|rwa|wes|u w|no |uko|i m|mo |u a|ure|ili|uba|o n|uha|uga|n a| im|ish|bwa|bwo|wiy|ali|ber|ze |ne |ush|are|o i|u m|ger|bur|ran| ki| no|ane|bye| y |ege|teg|guh| uk|n i|rag|i a|ya |u g|e m|anz|bo |abo|gar|wo |y i|ho |age|ind|o m|eke|a s|ara|zir|ite|kug|kim|aci| as|u n|ani|kir|mbe| gi|yos|kur|ugo|gir|e c|iza|aho|i b|tur|ata|o u| se|u u|zo |i i|aha|nge|mwe|iro|akw|any|eza|uki|imi|o y|ate|u k|iki|atu|bat| in|go |tan|n u|bos| bo| na|hak|iby| at|ihe|ung|ha |bul|kar|eye|eko|gek|nya|o g|shy|e y|awe|ngo|bit|mul|nzi|rer|bag|ge |imw|bah|cir|gac|bak|je |gez|imu|eze|tse|ets|mat| ru|irw|he | ni| ur| yi|ako|ngi| ng|i n|rez|ubi|gus|fit|afi|ugi|uka|amb|o c|utu|ufa|ruk|mug|bas|bis|uku|hin|e g|ige|amo|ing| af|yem|ni | ry|a r|gaz|te |erw|bwe|ubw|hwa|iko| al|ant|zi ",
    zul: "nge|oku| ng|a n|lo |ung|nga|la |le | no|elo|lun| um|e n|wa |we |gel|e u|ele|nel|thi|ke |nom|ezi|ma |ntu|oma|hi |o n|ngo|tu |nke|onk|o l|uth|ni |a u|lek|unt| wo|o e| lo|mun|umu|pha| ku|ang|ho |kwe|ulu| ne|won|une|lul|elu| un|a i|gok|kul|ath|hla|lok|khe|eni|tho|ela|zwe|akh|kel|a k|enz|ana|ban|aka|u u|ing|ule|elw|kho|uku|ala|lwa|gen| uk|wen|ama|na |e k|ko |gan|a e|he |zin|enk|o y| ez|kat| kw|lan|eth|het|o o| ok|okw|i n|nzi|aba|e a|hak|lel|lwe|eko|ane|ka |so |yo |ayo|o a|uhl|nku|nye| na|thu|mph|do |ben|ise|kut|ike|kun| is| im|hol|obu|fan|i k|e w|nhl|nok|ini|and|kuh|ukh|kuk| ak|e i|isi|aph|zi |ile|eki|ekh| ba|eka|the|a a| le| ye|kwa|e e|fut| fu|za |mal| ab|ebe|isa| em|o w|kub|mth|i w|ndl|emp|any|olo|ga | ko|nen|nis|alu|ith|eli|ndo|seb|nda| ya|i i|eke|vik|ake|uba|abe|ezw|yok|ba |ale|zo |olu|ume|ye |esi|kil|khu|yen|emi|nez|hlo|a l|ase|ula|kek|a o|iph|o u|no |azw|kan|mel|uny|ne |ufa|ahl|lin|hul|ant|und|sa |enh|kus|kuv|lak| in|o i|din|kom|amb|zis|ind|ola|uph|wez|eng|yez|phe|phi|mba|nya|han|kuf|nem|isw|ani|iyo| iy|fun| yo|uvi|i a|ene|izi| el|cal|i e|eze|ano|nay|hwe|kup|lal|uyo|ubu|kol|oko|ulo| la|e l|tha|nan|mfu|hon|nza|hin| ey|omp|da |bo |ilu|wak|lon|iso|kug|nka|ink|i l|sek|eku| ek|thw|gez",
    swe: "ar |er |tt |ch |och| oc|ing|ätt|ill|rät|en | ti|til|för|ll | rä|nde| fö|var|et |and| en|ell| ha|om |het|lle|lig|de |nin| de|ng | in| fr|as |ler| el|gen|nva|und|att|env|r h| i |r r|ska|fri| so|har|der| at|ör |ter|all|t t| ut|den|ka |lla|som|av |sam|ghe|ga | sk| vi| av|ete|la |ens|t a| si|r s|iga|igh|tig| va|ig |a s| st|ion|ra |tti|a o| är|ten|ns |t e|na | be|han| un| an| sa|a f| la| gr| må|nge|n s|vis|lan|må |ati|nat| åt|an |nna| li| al|t f|ans|nsk|sni|gru|äll|tio|ad | me|isk|kli|s f|t i|stä|t s|ri |med|sta|h r|lik|da |dig|ta |r o|run|on | re|lag|tta|är |kap|a i|a r|änd|erv|n e|kte|n f|rvi|nom|itt|id | mo|sky|r e|ver|äns|vil|gt |igt| na|tan|uta|dra|t o|ro |isn| fa|kal|ihe|rih|erk|r u|e s|per|l v|vid|one|rel|ber|ran|ot |mot|ndl|d f|ed |ika|män|l s|bet|t b|dd |ydd|kyd|n o|s s|str|n m|tet|sin|r f| om|rna|int|r i|end|nad|l a|ap |ers|nda|t v|ent|rbe|arb| hä|ets|häl|amh|ckl|gar|nga|r m|je |rje|arj|n i|s e|lin|r t|i s|rän| pe|ilk|t l|ern|på | på|täl|d e|dom|ege|g e|tni|r a|lit|ras| så|lln|kil|ski|enn|i o|a d|erä|n a|ara| ge|äro|a m| ar|t d|ilj|els|yck| ve|g o|frå|nas|tra|ess|del|m s|liv|l l|in |v s|g a|ast|e e|val|son|rso|e t|age|nd | eg|ial|cia|oci|soc|upp|igi|eli|g s|rkl|gad|ndr|nte|öra",
    lin: "na | na| ya|ya |a m| mo|to | ko|li |a b| li|o n| bo|i n|a y|a n|ki |a l|kok|la | ma|zal|i y|oki| pe|ngo|ali|pe |so |nso|oto|ons| ba|ala|mot|a k|eng|nyo|eko|o e|nge|yon| ny|kol|lik|iko|a e|o y|ang|ye | ye|oko|ma |o a|go | ek|ko |e m|aza|te |olo|sal|ama|si | az|mak|e b|lo | te|ta |isa|ako|amb|sen|ong|e n|ela|oyo|i k|ani| es|o m|ni |osa| to|ban|bat|a t|mba|ing|yo | oy|eli|a p|mbo|o p|mi | mi| nd|ba |i m|bok|i p|isi|mok|lis|nga|ge |nde|koz|bo |gel|ato|o t|mos|aka|oba|ese|lam|kop| ez|lon|den|omb|o b|ota|sa |ga |e a|e y|eza|kos|lin|esa|e e|kob|e k|sam|kot|kan|bot|ika|ngi|kam|ka | po|gom|oli|ope|yan|elo| lo|ata| el|bon|oka|po |bik|ate| bi|a s|i t|i b|omi|pes|wa | se|oza|lok|bom|oke|som|zwa|mis|i e|bek|iki| at|ola|ti |ozw|lib|o l|osu|oso|e t|nda|ase|ele|kel|omo|bos|su |usu|sus|bal|i l|ami|o o|bak| nz|pon|tel|mob|mu | ep|nza|asi|mbi|ati|kat|le |gi |ana|oti|ndi|tan|a o|wan|obe|kum|nya|mab|bis|nis|opo|tal|mat| ka|bol|and|aye|baz|u y|eta| ta|ne |ene|emb|sem|e l|gis|ben| ak| en|mal|obo|gob|ike|se |ibo|’te| ’t|umb| so|mik|oku|be |mbe|bi |i a|eni|i o| mb|tey|san| et|abo|ebe|geb|eba|yeb|bu | as|ote|sik|ema|eya|ibe|mib|ai |pai|mwa|kes|da |may|boz|amu|a a|kom|mel|ona|ebi|ia |ina|tin| ti|bwa|sol|son",
    som: " ka|ka |ay |uu |an |yo |oo |aan|aha| wa|da | qo| in| u |sha| xa|a i|ada|iyo| iy|ma |ama| ah| la|qof|aa |hay|ga |a a|a w|ah | dh|a s| da|in |xaq| oo|a d|aad|yah|eey| le|isa|lee|u l|q u|aq | si|taa|eya|ast|la |of |iya|sa |y i|u x|sta|kas|xuu|uxu|wux| wu|iis|nuu|inu|ro | am| ma|a q|wax|dha|ala|kal|nay|f k|a k|le |ku | ku| sh|o i|a l|ta |maa|a u|dii|loo| lo|o a|ale|ara|ana|iga|o d| uu|ha |lo |o m|o x|doo|aro|kar|yaa|gu |si |ima|na | xo| fa|adk|do |a x|ad |aas| qa| so|a o| ba|lag| aa| he|dka|adi|soo|o k|aqa| is|ash|u d|had| ga|eed|san|u k|a m|iin|i k| ca|u s|n l|yad|rka|axa|elo|hel|aga|hii|o h|o q| ha|id |n k| mi|baa| xu|har|xor|aar|ax |mad|add|nta|mid|aal|waa|haa|ina|qaa|daa|agu|ark|o w|nka|u h|dad|ihi| bu| ho|naa|n a|ays|haq|a h|o l| gu|o s|aya|saa|lka| ee| sa|dda|ab |nim|quu|gga|ank|kii|rci|arc|n s|a g| ji|gel| ge|eli|ysa|a f|siy|int|laa|uuq|uqu|xuq| mu|i a|uur|mar|ra |iri|o u| ci|riy|ya |ado|alk|dal|ee |al |rri|ayn|asa| di|ooc|aam|ofk|oon|to |ayo|dar| xi|dhi|jee|a c| ay|yih|a j|ban|caa|lad|sho|d k|ida|uqd|agg|sag|ras|bar|ar | ko| ra|o f|gaa|gal|fal|u a| de| ya|o c|ii |xay|eel|aab|sig|aba|orr|hoo|u q|y d|ed |ho |sad|qda|h q|fka|n i|xag|n x|qay|lsh|uls|bul|u w|jin| do|raa| ug|ido|ood",
    hms: "ang|gd |ngd|ib | na|nan|ex | ji|eb |id |d n|b n|ud | li|nl |ad | le|jid|leb|l l| ga|ot | me|x n|anl|aot|mex|d g|b l|d d|ob |gs |ngs|jan| ne|ul | ni|nja| nj|lib|ong|nd | zh|jex| je|b j| sh|ngb| gh|gb | gu|gao|l n|han| ad|gan| da|t n| wu|il |x g|nb |b m| nh|she|is |l j|d l|nha|l g|d j|b g|el |end|wud|nex|gho|d s|d z|oul|hob|ub |nis| ch| ya|it |b y|eib| gi|s g|lie| yo| zi|oud|s j|d b|nx | de|es |d y| hu|uel|gue|ies|aob|you| ba|d m|chu|gia|dao|b d|s n|zib| go|zha|eit|hei|al |hud| do|nt |ol | fa|t g|hen|ut |gx |ngx|ab |fal|x j|b z|ian|d h|don|b w|t j|iad|nen| xi|gou|d c|b h|hao|x z|nib|anx|ant|gua| mi|s z|dan|ox |inl|hib|lil|uan|and| xa|b x| se|x m|uib|hui|d x|anb|enl| we|od |enb| du|at |ix |s m|bao| ho|hub| ng|zhi|jil|l s|yad|t m|t l|yan| ze| ju|heb|had|os |aos|t h|l d|nga| he|b a|xan|b s|sen|xin|dud|jul|d a|lou| lo|dei|d w| bi|b c| di|zhe|gt |ngt|x l|bad|x b| ja|hon|zho|blo| bl|d k| ma|deb|l z|wei| yi| qi|b b|x d|d p|eud| ge|x a|can| ca|t w|lol| si|hol|s w|aod|pao| pa|ren| re|x s|eut|pud| pu|aox|mis|gl |ngl|x w|zei|gon|enx|gha|s a|b f|l y|oub|eab|hea| to|did| ko|unb|ghu|t p|x c|geu|t s|x x|jao|ed |t c|l m|l h|jib|ax |l c|d f|nia| pi|eul|d r| no|min|l t|heu|ux |tou|ns |s y|iel|s l|hun",
    hnj: "it | zh| ni|ab |at |ang| sh|nit| do|uat|os |ax |ox |ol |nx |ob | nd|t d|zhi|nf |x n|if |uax| mu|d n|tab| ta| cu|mua|cua|as |ad |ef |uf |id |dos|gd |ngd|hit|ib |us |enx|f n|she|s d|t l|nb |ux |x z|ed |inf|b n|l n|t n|aob|b z| lo|ong|ix |dol| go|zhe|f g| ho| yi|t z|d z|b d| le|euf|d s|ut |yao| yo| zi|gb |ngb|ndo|enb|len| dr|zha|uab|dro|hox| ge|nen| ne|han| ja|das|x d|x c|x j|f z|shi|f h|il | da|oux|nda|s n|nd |s z|b g| ny|heu| de|gf |ngf| du|od |gox| na|uad| gu|inx|b c| ya|uef| xa| ji|ous| ua| hu|xan|hen|zhu|nil|jai|rou|t g|f d| la|enf|ged|ik | bu|nya|you|f y|lob|af |bua|uk |is |yin|out|of |l m|ud |hua| qi|ot |t s| ba|ait| kh|s s|nad| di|aib|x l|lol| id|dou|ex |aod|bao| re| ga|d d|b y|las|hed|b h|b s|f b|t y|jua| ju| dl|x s|hue|b l| xi|zif|dus|b b|x g|hif|x y|hai| nz|sha| li|x t| be|d j|und|hun|ren|d y|hef|xin| ib|b t|l d|aos|s l| ha|gai|nzh|gx |ngx| ao|s b|s x|el |gt |ngt|hik|aid|s t|x m|f l|f t| pi|aof|t r|eb | gh|s y|d l|gua| bi| za| fu|t h| zu|hou|deu|lb | lb|d g| mo|b k| bo|iao|ros|gon|eut|x h|al |uaf|hab|t t|k n|f x|hix|pin|yua| no|t b|ak | zo|s m| nb| we|d b|gha|f s|mol|euk|dax|l b|nof| ko|lou|guk|end|uas|t k|dis|dan|yol|uan|d t|x b|lan|t m| ch|jix|x x| hl|aox|zis|x i|et | ro",
    ilo: "ti |iti|an |nga|ga | ng| it| pa|en | ma| ka| a | ke| ti|ana|pan|ken|ang|a n|agi|a k|n a|gan|a m|a a|lin|ali|aya|man|int|teg|n t|i p|nte| na|awa|a p|na |kal|ng |dag|git|ega|sa |da |add|way|n i|n n|no |ysa|al |dda|n k|ada|aba|nag|nna|ngg|eys| me|a i|i a|mey|ann|pag|wen|i k|gal|gga| tu|enn| da| sa|nno| we|ung| ad|tun|mai| ba|l m| ag|ya |i s|i n|yan|nan|ata|nak| si|aka|kad|aan|kas|asa|wan|ami|aki|ay |li |i m|apa|yaw|a t|mak| an|i t|g k|a s|ina|eng|ala|ika|ama|ong|ara|ili|dad| aw|gpa|nai|et |yon|ani|aik|on |at |oma|sin|bal|ipa|n d|uma|g i|ket|ag |in |aen|n p|ram|sab|aga|nom|ino|lya|ily|syo|i b| ki|nia|agp|gim|kab|asi|kin|iam|ags|bab|oy |toy|n m|agt| ta|bag|sia|g a|gil|mil| um|o p|ngi|n w|i i|pad|pap|daa|iwa|naa|eg |ias|ed |nat|bae|o k|saa|san|pam|gsa|ta |kit|ma |dum|yto|tan|i e|t n|uka|t k|apu|lan|sta|sal| li|a b|ari|g n|den|mid|ad |o i|y a|ida|ar |aar|y n|dey| de| wa|a d|ak |bia|ao |tao|min|asy|mon|imo| gi|maa|sap|abi|i u|aib|kni|i l|gin|ged|o a| ar|kap|pul|eyt|abs|ibi| am|akn|i g|kip|isu|g t|bas|nay|ing|i d|kar|ban|iba|nib|t i|as |d n|y i|ura|a w|nal|aad|i w|lak|adu|kai|bsa|duk|edu| ed|may|agb|agk|tra|gge|sol|aso|agr|ngs|ian|ila|dde|edd|tal|aip|kua|umi|pay|sas|ita|pak|g d|ulo|inn|aw "
  },
  Cyrillic: {
    rus: " пр| и |рав| на|пра|ств|го |ени|во |ове| ка|на |ть | по|ия |о н| об|ет | в |сво| св|аво|ани|ост|ого|ый |ажд|лов|т п| им|ния| че| со|ело|име| не|льн|ли |чел|каж|ест|век|ать|ова|или| ра|ек |й ч|дый|жды| до|ие |еет|мее|но | ил|ии |ся |его|обо|и п|ние|к и| бы|и с|и и|ми |бод|воб|ван| за|ой |ых |ом |лен|аци|енн|о с|о п|ьно|тва|тво|при|ног|аль|ако|ва |и н|сти|ных|то |бра|олж|дол|сто|и в|ным|ое | ег|нов|их |ель|тел|ти |нос|не |пол|раз| вс|и о| ли|и р|ыть|быт|вле|ред|ию |тор| ос|ься|тьс|оди|щес|я и|как|про|жен|ым |пре|а с|сно|е д|нно|о и|ий | ко|о в| ни| де|сту|лжн|сов|е в|ном|оль|ран|оже|иче|ей |аст|нны| от|туп|м и|одн|зов|рес| мо|осу|ля |осн|а о|вен| то|о б|шен|тве|общ|а и|е м|ьны|обр|вер|чен|я н|жно|чес|ак |лич|нии|е и|все|бще|ват|есп|мож|й и|ное|о д|бес| во|я в|ду | ст|дно|она|нац|ден|ежд|х и| бе|и д|ны |дос|для| дл| та|льс|ате|ции|я п|ую |ите|е о|ной|под|ото|стр|ста| ме|ели| ре|я к|тоя|ами|ен |ь в|ю и|азо|гос|м п|ь п|т б|жет|уча|суд|ьст|дст|щит|ащи|защ|кон|нию|ам |оду|ере|гра|печ|о о|оро|кот|и к|тра|ник|уще|циа|оци|соц|нал|еск|о р|ког|дру| др|ни |ава|нст|ем |авн|ыми|едс|дин|дов| го| вы|в к|ые |обе|му |я е|слу|уда|так|кой|ту |иту|зак|ход|вол|раб|кто|икт|ичн|нич|от |ина| к |тер|род|нар",
    ukr: "на | пр|пра| і |рав| на| по|ня |ння| за|ого|ти |во |го | ко|аво| ма|люд|о н| не| лю|юди|ожн|кож|льн|жна|дин|ати|ає |их |ина|пов|сво| св|анн|є п|має|або|а л| бу|не |енн|бо | аб|а м|ови|ні | ви| ос|аці|вин| та|без|обо| ві| як|ере| до|і п|ува|о п|аль|них|ом |ми |іль|ног|та |ий |при|ою |ть |ста| об|ван|инн|ті |ост| у |ся |ват|бут|ист| мо|езп|ути|нов|пер|ії |и п|бод|воб|ств| в |о в|від| бе|ако|під|тис|кон|но |ва |нні|і с|а п|сті| сп|ний|ду |ьно|она| ін|дно|ним|ій |а з|ну |мож|її | її|ля |соб|му |ої |яко| пе| ра|ід | де|і в|и і|чин|вно|ому|ном|у п|і н|а с| су|а о|нен|ися|ово|нан|одн|у в|і д|ава|ідн|рів| рі|і р|ими|віл|им |ції|о д|а в|сту|оду|буд|ова| пі| ні|я н|е п|нац|и с|нна| од| ро|нос|ьни|ють|и з|ки |і з|а б|спр|чен|же |оже|е м|овн|рим|е б|то |ніх|осо|удь|ві | ре| ст|рац|до | со|роз|лен|вни|івн|род| вс|спі|ков|зпе|ів |для| дл|ї о|хис|ахи|зах|‐як|ь‐я|дь‐|я і|так|зна|заб|сть|ту |ною|а н|тор|сно|о с|жен|ціа|оці|соц|інш|і м|кла|и в|тер| ді|іст|ові|у с|я в|аро|сі |віт|сві|осв|роб|піл|рес|за |печ|абе|ку |лив|ерж|дер|в і|авн|тав|ав |ами|ком|вле|о б|ь п| що|їх |тво|хто|іхт|ког| кр|ано|тан|іал|нал|нь |х п|жно|леж|але|про|тва|рат|о о|х в|нар|льс|цій|кор|час|ржа|ї с|ину|дст|о з|раз|мін|а р|зак",
    bos: " пр| и |рав|на |ма |пра| на|има| св|а с|да |а п|во |је |ко |ако|о и| по|аво|е с|а и|ти | им| да| у |сва|но | за|о н|ва |и п|или|вак|ли | ко|не | ил|кој| не| др|ост| сл|ња |им |и с|у с|и и|ава|ије|а у| би|ств|се |вањ|а д|ом |јед|бод|обо|лоб|сло| се| ра|их |сти|а н|ње | об| је|при|дру|у и|ју |о д|ити|вој|раз|ање|ова|дје| ос|е и|ло |е п|ања|ује|и д|бра|тре| тр| су|у з|а к|ог |у п|оје|циј|реб|а о|а б| ње|и у|миј|ни |нос|ба |едн|сво|њег| из|про|е д|жав|бит| ни|и о|ста|а з|авн|вје| ка|бил|ово|а ј|ају|ист|и н|них|јел|ту |ред|гов| од|е о|оји| см|ја |о к|ило|аци|е у|пре|о п|еба|у о|су |вим|ичн| са| дј|а т|ија|шти|чно|ржа|држ|сту|дна|одн|ени|за |ива|ном|ем |ду |ран|вно|сми|јер|е б|е н|де |пос|м и| до|у д|нак|а р|обр| мо|ним|его| кр|тит|кри|ве |ан |ико|ник|ну |и м|ног|ено|сно|е к|туп|руг|ка |ода|рив|вољ|алн|м с|иту|ашт|заш|ани|сам| ст|акв|ови|осн|род|аро| ми|ји |тва|дно|нст|ак |ите|љу |вич|рад|у н|у м| та|дст|тив|нац|рим|кон|ку |њу |оду|жив|амо|тво|тељ|под|ећу|г п|нов|ина|нар| вј|и б|ој | ов|аве|ву |анс|оја|зов|азо|уде|буд| бу|е т|и в|ења|еди|ниц|нап|мје| ис|слу|едс|о о|зак|и к|м п|тно|иво|ере|нич|как|ада|вни|уги| ро|мов|вен|о с|то |те | вр| бе|ара|кла| бр|у б|у у|и т|она| он|ави|јал|дни| ск",
    srp: " пр| и |рав|на |пра| на|ма | св|има|да |а п|во |ко |ти |аво| по|а и|ако|а с| за| у |о и| им|и п|ва |сва|вак| да|о н|е с|ост| ко|ња |ли |или|не |ом | не|а н| сл| ил|је | др|и с|но |кој|у с|ава| ра|ог |сло|ју |им |сти|бод|обо|лоб|ити|а о|ств|и у|а д|ни |јед|у п|при|едн| би|и и|а к|о д|ста|их |дру|а у| је|ања| ос| ни|нос|про|ају|и о| де| су|у и|се |ње |ја |ова|и д|циј| об|ује|ред|жав|е и|е п|а ј|дна| се| од|ве | ка|ени|ржа|држ|а з|авн|ења|аци|вој|ово|у у|м и|оја|вањ| из|ија|у з|ање|ран|е о|род|и н|е б|раз|за | ње|гов|ичн| ст|нов|сно|осн|ду |пре| тр|су |ву |одн|а б|сво|њег|ним|них|ту |тит|шти|ку |ном|бит|е д|ме |ико|чно|оји|ло |вно|ник|ика|без|ара|де |у о|вим|нак| са|рив|аве|ан |вољ| кр|о п|сме|е к|ног|ји | ов|е у|тва|бра|руг|реб|тре|у д|ода| мо| вр|ављ|у н|его|дел|м с|кри|о к|ашт|заш|њу | см|ани| ли|дно|еђу|алн|ла |акв|ој |ком|сту|уги|ави|а р|ка |рад|оди|вич|тав|иту|уде|буд| бу|пот|оду|жив|ере|тво|ило|бил|аро|е н|ови|пор|ено|штв|нац|ове|м п|туп|пос|рем|дни|ба |нст|а т|оју|аст|ива|е м|вре|вља|ну |беђ|ист|ен |те |дст|рот|зак|ао |као|и к|јућ|о с|ст |сам|м н|тер|нар| ме|и м|кол|е р|ушт|руш|вер|как| бе|и б|кла|ада|еба|ена|она| он|тву|анс| до|рак|слу|и в|ниц|у к|мен|врш|еме|едс|иви|о о|јав",
    uzn: "ан |лар|га |ир | би|ар | ва|да |ига| ҳу|ва |бир|уқу|қуқ|ҳуқ| ҳа|р б|ган|иш |ида| та|а э|ини|ади|нг |дир|иши|лик|лиш|ий |или|ари|уқи|ҳар|лан|инг|ши |дан|нин|инс|кин|сон|нсо| ин| му|қиг| ма|он |р и| бў|эга| эг| ўз|ни |бўл|гад|и б|ки |ила|ёки| ёк|а б|н б|ин |р ҳ|ала|эрк| эр|лга| қа|рки|ш ҳ|и ҳ|н м| бо| ба|ик |ара|иги|лиг|ри |қил|а т|бил| эт|ниш|нли|кла|и в|бош|эти|ани|им |и м|оли|қла|а ҳ|лаш|атл|тил|а қ| ол|оси|мас|қар|инл|лат| қи|таъ|ҳам|ги |иб |мла|ўз |н э|мум| да| бу|ат |ш в|ун |ати|мки|умк|тла|иро|ўли|бар|ири|риш|ият|али| бе| қо|а ш|аро| ке|и т|рла| те|ча |рча|арч|а ў| шу|тиш|н ҳ|тга| са|аси| ха|рак|лин|ола|имо|шқа|ли | ту|амл|лла|сид|н ў| ас|нид|а и| ки|н т|нда|к б|ера|ошқ|сиз|ор |а м|р в|енг|тен|мат|мда|амд|лим|й т|ят |и а|ино|илг| то|тни|ана|ас |эма| эм|а ё| ша|аш |а а|тар|кат|ака|ак | де|аза|илл|сий| си| со|уқл|н қ|ода|ъли|аъл|ник|ада| ни|тда|гин|уни|сит|ай |қон|н о| жа|ким|еч |ҳеч| ҳе|ўзи|лак|кер|икл|лли|ур |зар|шла|риг|ирл|дам|коҳ|ико|а д|ам |н в|рти|тиб|тал| иш|чун|учу| уч|сла|а у|рин|сос|асо| ун|на | ка|муҳ|диг|ч к|асл|лма|ра |бу |хал|ўлг|и к|екл|р д|қат|ага|и қ|оий|мил| ми|қа |и с|жин| жи|син|рор|а в|лад|а о|тли|мия|н и|аб |тир|з м|дав|рга|аги|а к|нла|ақт|вақ|арт|аёт|лаб",
    azj: " вә|вә |әр |ир | һә| би| һү| ол|үгу|һүг|гуг|на |ин |лар|һәр|дә | шә|бир|ләр|лик|мал|р б|лма|р һ| тә|әхс|шәх|ән |дир|угу|уна|ан |али|а м| ма|икд|ини|р ш|дән|ар |илә|гун|аг |асы| ја|мәк|јәт| мә| мү|кди|әси|әк |илм|нин|ндә|олм|әти|ә ј|син|хс |нда|лмә|јјә|и в| га| аз|олу|ијј|ја |инд|зад|гла|үн |ни |лә |тин|н м|аза|ары|әт |н т|маг|лун|лыг|ә б|ун |нун|г в|н һ|дан|ын | ет|тмә|әрә| өз|да |ә в| он|ә а|ына|ыны|бил|а б|сы |ил |әми|ара|си | ди|ә м|әри|рлә| ва|ә һ|етм|ығы|ама|длы|адл|рин|бәр|рын|н и|мүд|нын| һе|мас|ик |н а|дил|алы|ирл|әлә|үда|сын|ынд|хси|ли |ә д|нә | бә|әја| ин|ә и|ләт| сә|ны | иш|аны|еч |һеч|г һ|ејн|ә е|дыр| да|аси|ры |иш |ифа|лығ|и с|фиә|афи|даф| ед|мәз|у в|кил| һа|ола|н в|әни|ыр |уг |унм| бу| ас|сиа|оси|сос|или|ыды|лыд|нма|ыг |инә|әра|сил|хил|ахи|дах|адә|ман|а һ|ә о|ону|а г|әз | ки|сеч| се|ы һ|мин|лан|әдә|бу |раг|лы |ылы|ал |ә г|р в|нла|һси|әһс|тәһ|өз |ист| ис|мәс| әс|ина|ә т|әтл|а в|иә |н б|тәр| та| ҹә|еди|ала|ким|гу |и т|улм|мәһ|н о|аја|ы о|иал| со|илл|сиј| дә|вар|инс|ми |ғы |ник|р и|агл|к һ|тәм|там|чүн|үчү| үч|ғын|сас|әса|з һ|әмә|зам| за|сти|рәф|н е|р а|илд|һәм|ыгл|јан|мај|н ә|мән|мил| ми|әги|дин|н д|түн| дө|миј|каһ|ика| ни|фад|тиф|л о|сәр|јни| еј|ана|лән|ам |рил|ајә|ашы",
    koi: "ны |ӧн | бы|да | пр|лӧн|рав| мо|пра| да|быд| ве|орт|лӧ |ӧй |мор|ӧм |аво| не|во |ыд |ыс |нӧй|ын |м п|д м|ыны|тны| ас|тӧм|льн| эм|вер|сь |ьнӧ|эм |н э|тлӧ| кы|сӧ | по|ерм|сьӧ|ртл|аль| кӧ|эз | ӧт|ӧ в|то |ето|нет|ылӧ| ко|тшӧ| от| и |ы с|бы |ӧ б|ств|кӧр| вӧ|шӧм|кыт|та |на |з в| се| до|вол|ӧс | сы|ы а|ола|рмӧ|ас |оз | оз| сі|а с|тво|с о| вы|ліс|ӧ к|ытш|ӧ д|ис |ісь|ӧтн|ась| ол| на|аци| эт|а в|злӧ|сет| во| чу|лас|лан|мӧ |тыс|рты|ӧрт|ы п|ӧтл|о с|эта|дз |кӧт|ӧдн|вны| мы|н н|удж| уд|выл|ӧ м|рті|орй|ись| со|воэ|ыдӧ|й о|кол| го|с с|сси|сыл|ысл|йын|кин|олӧ|тӧн| сь|ана|ӧр |ция|а д|ӧмӧ| ви|з к| эз|ы б|тӧг|ӧт |мӧд|ест|ост|ӧны|тир|оти|укӧ|чук|н п|онд|пон|слӧ|кер| ке| об|сис|суд|а н|дор|кон|нек|н б|лӧт|с в|ті |ьӧр|тра| ст|нал|она|нац|н к|кӧд|ӧг |скӧ|ть |етӧ|дӧс|быт|рны|ӧ н|тсӧ|рре|а б|нда|с д|асс|ы к|асл| ло|ьны|сьн|ы м|еки|ы д| мӧ|ь м|ы н|ытӧ| ме|рйӧ|иал|й д|итӧ|а к|ӧсь|мӧс|овн|зын|а п|отс| ли|оля|ӧ а|осу|ӧя |нӧя|езл|рез|мед|с м| сэ|ь к|рйы|ако|зак| за|ьын|ннё|мӧл|умӧ| ум|ы у|н в|м д|н с| дз|н о|ран|стр|озь|поз|з п|о д|циа|оци|соц|ион|а м|еск|чес|нӧ |з д|тсь|бӧр| бӧ| ов|вес|кыд|ӧ с|воы|код|тко|ӧтк|оль|дбы|едб|сьы|чын|тчы|ӧтч|тла|мӧн|сла|йӧз| йӧ|т в|ы и|ез |о в|оны|йӧ |анн|ӧль| пы|ан |нӧс|нит| су|м с",
    bel: " пр|пра| і |ава|на |рав| на| па|ны |ва |або|ць | аб|ае | ма|аве|анн|ацы|сва| св|е п|льн| ча|не |ння|ала|а н|ай |лав|чал| ко| ад| не|га |ожн|кож|век|ня | як|жны|ы ч|мае|а п|ага|бо |ек |а а|ца |цца| ў | за|ых |пав|а с|го |він|дна|бод|мі |ваб|ван|ам | вы| са| да|ста|аві|нне|асц|най|цыя|наг|ара|і н|к м|яго| яг|ьна|пры|аць|і п|одн|ств|ама|ных| бы|тва|дзе|аль| ра|ні |і с|і а|ыць|а б|енн|лен|ці |оўн|ым |рац|інн|іх | ас| та|то |нас|які| дз|чын|оль|і д|аво|ад | ні|сці|ымі|ным|быц|я п|ьны|ыя |аро|ана|іна|і і|рад| гр|ля |ўле|о п|а ў|рым|пад|ыі | ін|амі|дзя|рам|цыі|аба|а і|ду |жна|ўна|нал|нац|ры |эта|гэт| гэ|нен|да |ах |гра|кац|ука|а з|кі |адс|ў і|нст|энн|я а|нні|оду|а р|нна|ход|нан|пер|х п| у |адз|і р|мад|м п|е м|аду|дст|для| дл|оў |нае|і м|ако| ка|ы ў|бар|е а|ацц|ую |ыцц|сам|яўл|але|род|раб| пе|што| ўс|адн| су|роў| ро|дук|люб|ь с| шл|раз|нав|зна|вол|удз|ада|жыц|чна|ве |а т|асн|сац|ера| рэ|яко|кла|аны| шт|ь у|аюц|нар| ус|соб|асо|пам|я ў|авя|чэн|воў|так|ну |ю а|ь п|зак|кар|е і|ь а|бес|ія |кія|х і|заб|аса|ім |жав|і з|леж|тан|ахо|яль|ыял|о с|яна|кан|ака|інш|алі|вы | мо|нах|я я|м н|ога| бе|й д|о а| ст|ены|і ў|а д|есп|шлю|цця|ы і|ыст|рыс|люч|клю|тац|уль|ынс|ачы|спр| сп|аў |ыма|ары|кам|е ў|і к|кон",
    bul: " на|на | пр|то | и |рав|да | да|пра|ств|ва |а с|а п|во |но |ите|та |о и|ени| за|не | не|а н| вс|ван|аво|ото|е н|о н|а и|ки |ие |те |ни |има| им|ли |или|ия | по|ове|ане|чов|ма | чо|и ч|а д|ние|и д|ест| ил|ани|век|все| об|ек |еки|сек|ава|тво|сво| св|вот|а в|и с|ост| ра|ова|а о|е и|ват|и н|е п|к и|а б| в |и п|лно|о д| се|раз|ето|ъде|бъд| бъ|при|ата| ко| тр| ос| съ|бод|обо|воб|ат |за |тел| е |аци|о с|де |о п|ен |бра|и в| от|се |ния|алн| де|его|нег| из|от |ран|ята|как|оди|е с|и и|ден|пре|бва|ябв|ряб|тря|нит| ка|ява|про|ст |а з|гов|вен|тве|о о|а р|акв|о в|и з|ред|нос|ият|е д|щес|нов| ни|ция| до|йст|о т|е т|ржа|ърж|дър|ено|пол| с |обр|тва|нот|рес|ейс|и о|е в|кой|общ|лен|она|нац|иче|ез |без| бе|ежд|ува|вит|ри |зак|и к| ли|а е|под|ели|ник|си |е о|а т|авн|и р|т с|ка |оет|елн|нен|ой |гра|жен|дру| ре|а к|сно|осн|лич|зи | та|са |нст|вни|чки|ичк|сич|вси|люч|клю|дно| мо|еме|а у|изв|тви|дей|я н|кри|ато|о р|й н|ико|ичн|жав| дъ| то|бще|иал| со|лит|т н| си|т и|одн|жда|зов|азо|уча| гр|кое|тъп|стъ|вол|лни|сре| ср|ква|кон|тно|ака|и у|ко |ган|ода|чен|лст|елс|стр| къ|ста|род|нар|и м|нал|руг| др|чес|въз|ди | са| те|сто|дос|раж|рез|чре|гат|еоб|а м|о е|ине|аст|ово|чно|аве|му | му|ано|ита|ими|ако|нак|лаг|ови",
    kaz: "не | құ|ен |ұқы| ба| қа|құқ|ық |ға | жә|әне|жән| не| бо|де |дам|ада|а қ|тар|ына| ад|ылы| әр|ың |ан |ін |қыл|ар |еме|на |р а|лық|уға|ала|ықт| өз|мес|әр | жа|мен|ығы|лы | де|қта|ның|н қ|ған|іне|бас|ары| ме| қо|еке|ын |да |е қ|ды |асы|се |есе|ам |бол|анд|нем| бі|ара|ы б|ста|тан|нды|н б|ің |е б|ілі|тиі| ти|бар|ғы |нде|етт|иіс|қығ|іс |лар|ге |ы т|інд|ік |бір| бе| ке|алу|е а|алы|луы|а ж|ері|олы| те|қық|н к| та|н ж|ғын|тті|іні|тын| ер|нда|ім | са|е ж|аты| ар|рға|еті|ана|ы ә|уын|лға|өзі|ост|егі|тік|қа |сқа|рын|кін|луғ|ң қ|нің|уы |бос|асқ|қар|дық|нан|мыс|мны|амн|ы м|айд|ке | же|зін|рде|рін|е т|ген|ып |ры |ті |сын|қам|ден|і б|гіз|рал|е ө|лан|сы |ама|тта|тық|бер|ді |біл|ркі|өз |зде|кет|қор|дай|уге|ы е|ынд|нег|оны|ей |мет|аны|а т|жас|ауы|лге|аса|еге|дар|ру |ау |ерк|ы ж|рыл| то|н н|е н|тін|ір |сіз|тер|лма|і т|кім| ал|р м|лік| мү|е м|түр| тү|кел|лып|ең |тең|рлы|лім|рды|ард|атт|с б|ыры|сыз|ыс |елг|дал|йда|орғ|рқы|арқ| жү|тал|ылм|а б|ігі|лде|із |қты| еш|дей|ай |жағ|кті|ікт|гін| әл|тты|ұлт| ұл|е д|ыны|лін|р б|еле|кұқ| кұ|амд|м б| ет|оға|құр| кө|аға|тол|шін|айы| қы|қал|жек|і н|ес |ағы|е о|елі| ел|н е|зі |шкі|ешк|олу|ция|мас|ғда|ағд|лтт|імд|ным| да|а д|әсі|с ә|қат|ірі| со|ң б|аза|мда|айл| ас|ғам|қоғ"
  },
  Arabic: {
    arb: " ال|ية |في | في|الح| أو|أو | وا|وال|حق |ة ا|لحق|الت|كل |الم|لكل| لك|لى |ق ف|ته |و ا|ة و|شخص|ة ل|ات |الأ|ي أ|ون | شخ|م ا|أي | أي|ان |أن |مة |ي ا|الا|لا |ها |اء | أن| عل|خص |ن ا| لل|د ا|من |فرد|ما |الع|ت ا|حري|على|ل ف|رد |ل ش| لا|رية| إل|ة أ|ا ا|ن ي| ول|ا ل|ا ي| فر| من|ة م|الق|جتم|ن أ|ق ا|الإ| حر|له |ه ل|اية|لك |ه ا| دو|دة |اً |ين |ه و|لة |ي ح| عن|ماع|ي ت|ذا | حق|قوق|حقو|، و|ن ت|مع |ص ا|ام |د أ| كا|هذا|الو| إن|مل |امة|ع ا|إلى|ة ع|ماي|حما|ن و|لتع| وي|ير |نون|ي و|اسي|الج| هذ|نسا|وق |ترا|عية|ه أ| له|سية| يج| با|دول|انو|قان|لقا|ة ب|ة ت|تما|الد|يات|ع ب|سان|إنس|هم |علي| مت|لمج|ذلك|عمل|لأس|وز |جوز|يجو|بال|غير|ك ا|كان|ساس|أسا|دم |لاد|اعي|الر|تمي|دون|تمت|لتم| يع|ليه|ساو|اجت|ي م|لعا|لجم|تعل|ر و|تمع|مجت| مع|يه |ى أ|فيه|ى ا| كل|لات|ملا|ود |انت|الف|يها|ي إ|تي |الب|لي |قدم|ال |اد |ل ا|يز |ييز|ميي| تم|لحر|تع |متع|ا ب|عام|ا و|ق و|رام|ل ل|لاج|را |الش| وإ|يم |ليم|شتر|ا ح|واج|لزو|ول |ا ف|ولة|لحم|أسر| ذل|ه ف|اته|مسا|لمس| تع|عن |ه ع|وله|يته|ن ل|رة | وس|اة |يد | تح| مس|ي ي|لتي|عة |ولي|لدو| أس| وف|ل و|أية|ني |الس|لان|لإع|ة ف|ريا|ل إ|م ب|امل|كرا|تسا|ميع|جمي| جم|أول|بية|عيش|تحق|ادة|س ا| مم|معي|جما|عات|اعا|ارس|مار|مما|م و|راك|اشت|الط|اج |زوا|الز| وم|حدة|تحد|لمت|مم |لأم|ده |بلا| بل|ار |يار|تيا|ختي|اخت|ن م| مر",
    urd: "ور | او|اور|کے | کے| کی| کا|یں | حق|کی |کا | کو|ئے |ے ک|یا |سے |کو |شخص| شخ|نے | اس| ہے|میں|حق | ہو| می|خص |ے ا| جا|اس | سے| یا|ہر |ی ا| کر| ہر|ے۔ |سی |ہیں|ا ح|ص ک|وں |ے م| ان|ر ش|۔ ہ|ائے|زاد|آزا| آز|ام |ر ا|ق ہ|ادی|جائ|ں ک|ہے۔|م ک| کس|ا ج|ی ک|س ک|کسی| پر|ے گ|ہے |ار |ت ک|دی |پر |و ا| حا| جو| ہی|ان |ی ج|ری | نہ| مع|جو |ل ک|ی ت|ن ک|کرن|ئی |ل ہ|تی |ہو |ہ ا| ای|صل |اصل|حاص|رنے|ی ش|نہ |۔ ا|ں۔ |یں۔|ر ک|ر م| مل|وہ |معا|رے |ں ا|نہی|ے ہ|ے ب|ایس|ے ل| تع| گا|یت |ی ح|ا ا|ی م|اپن| اپ|کیا|می |ی س| جس|ہ ک|نی |اشر|عاش| دو|لئے| لئ|انہ|وق |قوق|حقو|مل | قا|کہ | گی|ر ب|ہ م| وہ| بن|ی ب|ملک|جس |ا۔ |ریق|ر ن|ے ج|اد |ات |گی |د ک|ے ح|دار|ر ہ|گا۔|قوم| قو|ے، |ا س|دوس|ر پ| و | شا|ی آ|ں م|ق ح| پو| با|خلا|انے|یم |لیم|و ت|ون | کہ|ی، |۔ ک|ا پ|ن ا|لک |علا|ا م|ق ک|ائی|وسر|ی ہ|وئی|یر |ا ہ|علی|و گ|وری|دگی|ندگ|و ک|یسے| من|ائد|رائ| مر|پور| طر|ومی|ے خ|سب |نون|انو|قان| سک|وام|ین | رک|تعل|لاق|غیر|دان|، ا| بی| مس|یوں|نا | بھ| بر|رتی|ادا|امل|یہ | یہ|ہ و| عا|ی پ| بچ|اف |لاف| خل|ی۔ |گی۔| دی|ھی |بھی|دہ |جا |پنی|قوا|اقو|رکھ|ے ی| عل|کوئ|، م| چا|ے س|ر ع| پی|برا|ر س|ر ح|سان|م ا|کام|شرت| را|شام|من |زند| زن|ب ک|ت م|اہ |اری|س م|ر ج| مح|ورا|ے پ|طری|ہوں|ال |ں س|ی ن|کرے| مق|ت س|تحف| تح|و۔ |ہو۔|بند| اق|د ہ| ام|امی|الا|لت |شرے|ے ع|ا ک|فری",
    pes: " و | حق| با|ند |رد |دار| دا|که |هر | در| که|در | هر|ر ک|حق |د ه|از |یت | از|یا |کس |ود |ارد| یا| کس|ای |د و| بر| خو|ق د|باش|شد |د ک|ار |د ب| را|ه ب|ان |آزا| آز|را |اشد|ی و|ه ا|ین |ید |زاد|س ح|خود|ی ب| اس|ده |دی |ور |اید|ه د|ری |و ا|تما|ات | نم|ی ک|ادی|نه |رای|د ا| آن|است|ر ا|ر م| اج|مای|ون |قوق|حقو|و م| ان|انه| هم|وق |ایت| شو|ی ا| مو| بی|با | تا|ورد|انو|ست |وان|برا|ام |شود|آن |جتم|ی ی| کن|ر ب|کند| مر|ت م|های|ت ا| مس|ی، |ماع|اجت|توا|یگر|و ب|دان|ت و|ا م| بد|عی |کار| من|مور| مق|ی د| زن|ی م|ن ب|ر خ|اه |ا ب|اری|د آ|مل | به|اعی|د، |دیگ|ت ب|بای|این| می|ن و|ق م| عم| کا|ن ا|و آ| حم|نون|ه و|و د|د ش| ای|شور|کشو| کش|لی |نی |ه م|بعی|ر ش|یه | مل|میت|ی ر|رند| شر|می |وی |ساو|قان| قا|مقا|او | او|د م|گی |نمی| اح| مح|مین|ئی |ادا| آم|خوا|گرد| گر|مند| شد|ائی| دی|ز ح|هیچ| هی|اده| مت|نما|ت ک|ران| بم|ن ح|ر ت|حما|ارن|مسا|دگی|ومی|ن ت|ملل|بر |هد |واه|بهر| اع|‌ها|ق و|، ا|عیت|یتو|ا ر|ن م| عق|همه|ا ه|زش |وزش|موز|آمو|انت|تی |جام|موم|عمو|تخا| فر|طور|د د|ه ح|ردا|اوی|نوا|انی|رار| مج|ی ن|حدی|احد|ندگ|زند|شخص| شخ|‌من|ه‌م|ره‌|هره|شده|ع ا|و ه|اسی|هٔ |یده|عقی|ا ا|مه | بش|اد |دیه|ا د|دوا|ی ح|ابع|ی ت|خاب|نتخ|رور|و ر|شرا| خا|ٔمی|أم|تأ|اً |امل|له |د ر|اسا|خور|بل |ابل|قاب|یک |سان|قرا|ا ن|خصی| ام| بو|یر |الم|بین|اهد|تبع| تب",
    zlm: " دا|ان |دان| بر| او|ن س|رڠ |دال| ڤر|له |كن | كڤ|ن ا|ن ك|ن د|يڠ | يڠ|ڤد |حق |ورڠ|تيا|ياڤ|ارا|كڤد|اور|رحق|برح|اله|أن |ولي| ات|اتا|ڠن |تاو|اڤ |ستي|ليه|او | ست|ڤ ا|يه |را |ه ب|ه د|عدا| عد|ن ڤ|ن ب|ين | تر|ق ك|ن ي|يبس|بيب| تي| سو| كب| سا|ن م|ن ت|لم |الم|د س|ڠ ع| من|چار|د ڤ|رن |سام| ما|ڽ س|ن، | بو| اي|ندق| حق|ڬار|نڬا|بول|سبا| سب|اتو|ا س|قله| ڤم| مم|وان|سچا| سچ| كس|ا ب|سن | سم|ڤرل|اون|نڽ |تن | با|هن |سيا|ا ڤ|ارڠ|بار|ڤا |بسن|كبي|ام |يند|ي د|اڬي|ڠ ب|باڬ|ي ا|مان| لا| د |دقل|هند| هن|ت د|ادي|وين|يكن| نڬ|، ك|ن٢ | ڤو|بڠس|ق٢ |ات |اول|اكن|اڽ | سس|ون |اد | كو|اين|دڠن| دڠ|ائن|تو |تي |ن ه|ڬي |سي |ق م|وڠن|دوڠ|ندو|لين|رلي|نتو|ڤون|وات|ياد|تيك|ڠسا|ڤمب|ترم|٢ د|حق٢|وا |لوا|ماس|وق |ه م|ل د| مل|وند| ڤڠ|ا، |، ت|لائ|اي |مڤو|يك |ي ك|رات|مرا| بي|سمو|و ك|، د|سوا|ڠ م|ڠ س|ڠ٢ |ڤري|يري|دير|ا ا|اسا|ڤ٢ |تا |سوس|، س|جوا|ڠ ت|رأن| ان|سأن|ريك|يأن|ري | در|امر|كرج| ڤل|ا د|جرن|اجر|ارك|لاج|د ك|وار|برس|ونت|منو|سال|ينڠ|دڠ٢|ندڠ| مڠ|اڤا|سسي|ساس|نن |ڤول|اڬا| بڠ| سڤ|مبي| اڤ|ڠ ا|ارأ|ڤرا|ي س|بس | دل|ا م|موا|ڤلا|ملا|ڤرك|كور|وبو| كأ|وكن|أنڽ|كسا|ڠڬو|ادڤ|هاد|رها|تره|كوم|توق|م س|ڠ د|دي | دي|٢ س|ندي|اس |ادا|بوا| دب|ڠ ڤ|ڽ، |اڤ٢|رتا|ال |يال|وسي| كت|أن،|نڤا|تنڤ| تن|م ڤ|رسا|ممڤ| مر|ن ح| كم|نسي|جأن|ؤي |لؤي|الؤ|لال|كڤر|كت |ركت|شار|مشا| مش|جاد|رڬا",
    skr: "تے |اں |دی |دے | ۔ |وں | تے| دا| کو|کوں| حق|دا | دی|یاں| دے|یں |ے ا|شخص| شخ|ہر |ے ۔|اصل| حا|حق |خص | ہر|صل |حاص|ہے | ہے|ال |ق ح|ل ہ| نا| کی| وچ|۔ ہ|یا |سی |ے م| او|وچ |اتے|کیت|ا ح|ادی|نال|ص ک| ات|ر ش|ہیں| یا|ں د| ای|یسی| مل|وند|کہی| کہ|ی ت|زاد|ازا| از|ندے|ں ک|ار | وی|ے ک|ئے | ان|ڻ د|نہ | کر|اون|ے و|دیا|ی د|ں ا|ے ب|ویس|وڻ |ی ن| ہو|تی |ی ۔| نہ|ی ا|یند|و ڄ|آپڻ| آپ|ا و|ے ج| کن|ے ن|ندی|ت د|ے ح|ی ک|ئی |ملک|یتے|ن ۔|تھی| تھ|ون |ں م| بچ|۔ ا|نوں|کنو|ڻے |اری|ا ا|ے ہ|ل ت| ڄئ|وق |قوق|حقو|ل ک|خلا| جی|لک |دار|یت |کرڻ|انہ|کو |ہکو| ہک|ن ا|مل | وس|ں و|پڻے| تع|ی م|اف |ے خ|نون|قنو| قن| لو|۔ ک|ری |لے |تا |یتا| قو| چا|ہاں|ڄئے|ق ت|ایہ|رڻ |ے د|ر ک| و |لاف| خل| جو|ی و|او |ہو |ئو |چئو|بچئ|یر |ہوو|ا م|ی ج|الا|ین | جا|می |نہا|ان |ات |سڱد| سڱ|یب |سیب|وسی| شا|ب د|یوڻ|ام |اوڻ|ے ت|ڻ ک| مط|ں ت| ون| کم|ن د|رکھ| رک|ڻی |ں آ|ریا|ی ہ|اد |یاد|علا|ر ہ|ں س|ی ح|جھی|ائد|ہی |لوک| ڋو| سم| سا| من| مع|بق |ابق|طاب|مطا|ھیو|ں ف|ہن | ہن|جو |و ک|ں ش|ر ت|کار|م د|ھیا| ٻا|غیر|و ل|وئی|جیا|وام|قوا|ی س| جھ|ل ا|قوم| سی|ذہب|مذہ| مذ|اے | اے|دن |ا ت|سان|نسا|انس|رے |لیم|علی|تعل|امل|ہ د|ے ر|د ا|کم |یہو|فائ|چ ا| کھ|م ت|را |ورا|پور|ں ب|ق د|ے ق|وکو|کھی|ا ک|و د|ے ذ|پڻی|بند| فر|کوئ|امی|ی ی|ائی|لاق|ایں|ہ ا| نظ|سما|ومی|ی، |ے س|ت و|ھین|ے ع|یم |سہو| سہ",
    pbu: " د | او|او |په | په|ي۔ | حق|چې | چې|ره |ي ا|ې د| هر|نه |هر |حق | څو|وک |څوک|و ا|ه د|ه ا|۔ ه|ه و| شي| لر|ي چ|و د|ري |لري|ق ل| کښ|وي |ښې |کښې|ه ک|غه |لو |ر څ|سره| سر|ه پ| ټو|و پ|له |يت |ټول|يا |کړي| کو|خه |ي، |دي | له| از|د م| هي| وا| يا| څخ|ازا|د ا|ولو|ه ت|څخه| کړ|ول |هغه|ه ش|ي د| هغ|کول|زاد|نو | وي|و ي|ه ب|شي۔|دې |يو | دي|ته |خپل| پر|اد |د د|ک ح| تو|ه م|ګه |ه ه|قوق|حقو|و م|ه ح|د ه| تر| مس|شي | نه|ړي۔|ني |د پ|واد|ې پ|ادي|ولن| يو|د ت|ونو|وګه|ي و|لي | دا|يد | با|تون| خپ|ي پ|توګ|ار |اند|يوا|ې و|دان| بر|ړي | عم|انه| ده|يڅ |هيڅ|امي|لني|بعي|ډول| ډو|ه ل|ايد|باي|اتو|ه ګ| تا|پل | مل|ايت|وم |ون | لا|هيو| شو| دغ|م د|ده |ې ا|ان | ته|کار|تو |مي |اره|اوي|ساو|مسا|نون|دهغ|و ت|ي ش|انو| مح|ين |اخل| ګټ|شوي|دغه|و ح|وي،|نيز|سي |اسي|وند|قو |وقو|و ک|ونه|ومي| وک|ي ت| ان|قان|ندې|و ر|ک د|ه ي|مين|پر |ټه |لام|غو |هغو|د ټ|و ه|ل ت|لے |ولے|وون|کي |رو |ن ک|موم|وکړ|پار|ن ش|من | نو| وړ| قا|ې چ| وس|څ څ|شخص| شخ|ژون| ژو|تر |ګټه|و څ|هم |عقي|رته| ور|بل | بل|و ب|ه س|ښوو| ښو| کا|ې ک|و س|اده|ونک| غو|دو |و ن|ت ک|مل |عمو|ل ه| پي|وسي|ړان|وړا|يز |خصي|ي م|ا ب|ادا|ه ن|خلي|واخ|ديو|، د|د ق| هم|ا د| بي|تبع| تب|ه چ| عق|پلو|و ل| را|د ب|راي| دخ|نې |نکي|ت د|ابع| مق|د خ|وره|شرا| شر|ر م|رسر|تام|ه ټ| من|طه |سطه|اسط|واس|لې | اس|۔ د|برخ|ې ن"
  },
  Devanagari: {
    hin: "के |प्र| प्| का| के| । |और | और|का | को|कार|ार |ति |या |को |ने |ों |िका|्रत| है| कि|ं क|है |धिक|व्य|अधि| अध|्ति| सम|्यक|ि क|क्त|ा अ|की |ा क| व्|ें | हो|यक्|सी |से |े क| या| की|में|न्त| मे|त्य|ै ।|ता |रत्|क्ष|ेक |येक|्ये|िक |र ह|भी |किस| जा| स्|क व|ा ज|िसी|मान| वि|र स|त्र|ी स|। प| कर|्रा|गा |ित | अप| पर|स्व|ी क| से|ा स|्य | अन|्त्|िया|ा ह| सा|ना |्त |प्त|समा|ान |र क|ाप्|तन्| भी| उस|राप|वतन|्वत|रों|वार|े स|था |हो |े अ|ा ।|न क| न |देश| रा|षा |अन्|त ह|्षा|्वा|जाए|ी प|करन|ा प|अपन|ष्ट| सं|े व|होग|िवा|ट्र|्ट्|ाष्|राष|सके| मा|ओं |ाओं|री |क स|े प| नि|ीय |रक्|ो स|ाएग|रने| इस|व क|पर |रता|र अ| सभ|तथा| तथ| ऐस|रा |पने|्री|िक्|किय|ा व|माज|ं औ|र उ|द्ध|सभी|श्य| जि|ाने|ार्|ारा|द्व| द्|एगा|सम्|ेश |िए |ाव |र प| दे|्तर|ा औ|ारो|यों|परा|पूर|चित|्ध |रूप| रू| सु| लि|त क|ो प|ं स|े ल|शिक| शि|वाह|े औ|जो |राध|जिस|ूर्|ी भ|ूप |ोगा|स्थ|रीय|तिक|्र |। इ|इस | उन|ले |े म|लिए|म क|कता|े य| जो|न म|अपर| पू|ो क|ा उ|ाह |नून|ानू|गी |दी |ारी|ं म|। क|तर्|ी र|श क|परि|स्त|ोई |कोई|र्य|ी अ|हित|भाव| भा|ताओ|ास |साम|विक|विव|म्म| सक|कर |ाना|ध क|निक|य क|उसक|कृत| क़ा|न स|जीव|्या|रका|्रक|ाज |न्य|्म |र्ण|क़ ह|हक़ | हक़|ी म|जिक|ाजि|ामा|क औ|मिल|ेने|लेन| ले|ये |ो अ|े ज|रिव|मय |समय|वश्|आवश| आव|ऐसी|ाध |र द|र्व|सार|प स|बन्| सह|िधा|विध|ी न|ून |क़ान",
    mar: "्या|या |त्य|याच|चा |ण्य|ाचा| व |कार|प्र| प्|िका|धिक|ार | अध|अधि|च्य|आहे| आह|ा अ|हे |ा क|ास |वा |्ये|्रत| स्|ता |ा स| अस| कर|स्व| का|ल्य|रत्|ाहि|कोण| को|िक |येक|्वा|ा व| त्|र आ|्य |त्र|ेका|क्ष|ा न| सं|ामा|ाच्|ंवा|िंव|किं| कि|ात |ष्ट|कास| या|यां|ांच|र्य|मिळ| मि| सा|व्य|ोणत|ने |े प|काम| सम|ंत्|ये | रा|समा|तंत|करण|ा आ|े क|हि |े स|ना |िळण|ून |ा प|ट्र|्ट्|ाष्|राष|ीय |व स|क्त|मान|र्व| आप|ळण्|्र्|ातं|वात|चे | वि|्षण|रण्| दे| व्|आपल|ही |ार्|नये| नय|मा |यास| जा|लेल| नि|े अ| पा|ा म|ले |ाही|बंध|े व|्यक| मा|शिक| शि|देश|ा द|माज|्री|ली |ान |ांन|पल्| हो|ा ह|षण |जे |िजे|हिज|पाह|ारा|यात|सर्| सर|रां|असल|ंबं|संब|िक्|ी प|ंच्|रक्|णत्| आण|ला |स्थ|रीय|ीत |ंना|त व|्व |क व|णे |ाचे|न क|त क|रता|्रा|याह|्त |ची |य क|द्ध|्वत|यक्|णि |आणि|स स|ंधा|क स|च्छ|य अ|त स|ीने|ोणा|करत|त्व|ील |ी अ|सार|र व|भाव|व त|थवा|अथव| अथ|े त|े ज|याय|ंचा|ेल्|ाने|ेण्|क आ|क्क|हक्| हक|ण म|ंरक|संर|न्य|ायद|ा त|त आ| उप|वस्|िवा|ेशा|साम|े य|े आ|ी व|व म|तीन|व आ|ध्य| अश|धात|कृत|्क |द्य|ित |सले|ेश |तो |ेल |ती |्ती|असे|इतर| इत|स्त|र्ण|ा ब|ेले| के|हीर|जाह|ा ज|ेत |ूर्|पूर|ेच | वा|ाजा|ी स|शा |य व| न्|याव|द्द|्ध |रून|यद्|काय|ा श|गण्|क क|राध| शा|यत्|ल अ|्यव|ी क|ाव |ा य|त्त|जिक|ाजि|रणा| धर|ा ध|भेद| बा|रका|्रक|केल|ि व|िष्|तील|योग|साध|ांत|विव|श्र| धे| मु|वतः",
    mai: "ाक |प्र|कार| प्|ार |िका|्यक|धिक|क अ|्रत|्ति|व्य| अध|ेँ |अधि|िक | व्|आʼ | आʼ|क्त|यक्|तिक|केँ|क व|बाक|क स|छैक| छै|त्य|मे |ेक | सम|क्ष|हि |रत्|र छ|येक|्ये|न्त|वा |िके|क। |ैक।|। प| अप| स्| वि| जा|ित |सँ | हो|कोन| को|त्र|स्व| वा|क आ|ष्ट| कर|अपन|मान| का| अन|ति |्त्|नो |नहि| पर|ट्र|्य | एह|ि क|्ट्|ाष्|राष| रा|समा|ोनो|ल ज| नह|ताक|ार्|पन |तन्|वतन|्वत|्षा| कए| सा|्री| नि|ा आ|िवा| सं| दे|जाए|ीय |करब|था |एबा|ा प|ना |्वा|देश|त। |रक |क ह|ँ अ| सभ| आ |त क|चित|्त |वार|ता |ारक|माज|ा स|रीय|न्य|रता|ान |्रा|्या|रक्|ारण|परि|एल |कएल|अन्|रबा|क प|ओर |आओर| आओ|अछि| अछ|िर्|ान्|नक |होए|कर |धार|स्थ|ा अ|िमे|र आ|एहि| एक|े स|तथा| तथ| मा|िक्|शिक| शि|प्त|र्व|निर|च्छ|र्य|ँ स|क क|हो |ाहि|एत।|र प|ामा|साम|षा |ʼ स|ँ ए|ैक |द्ध|र अ|क ज|स्त|ाप्|ँ क| सक|यक |कान|हन |एहन|ेल |ोएत|त आ|ा व|। क|्तर|ाएत|्रक|हु |क उ|पूर|विव|ʼ अ|छि | ले|न प|ास |राप|धक |पएब| पए|रा |यता|रूप|न व| के|षाक|य प|त ह|जाह| ओ |भाव|पर |थवा|अथव| अथ|सम्|जिक|ाजि|ूर्|रति| दो|सभक|। स| जन|सभ |बाध|अनु|िसँ| सह|ँ व|ए स|रिव|तु |ेतु|हेत| हे|ाध |ेबा|न स|िष्|राध| अव|ित्|वास|चार| उच|ारा|न क|वक |ा क|नून|ानू|एत |री |ेओ |केओ|रण |्रस|ि द|ओ व| भे|नहु|ोनह|्थि|पत्|म्प|राज| भा|हिम| हक|ामे|्ण |र्ण|हार|ि स|क द|न अ|त अ|लेब| अभ|िश्|जक |ाजक|न आ|वाह|काज|श्य|वस्|ओहि| ओह|योग|। ए|कए |े ओ|अपर",
    bho: " के|के |े क|ार |कार|िका|धिक|अधि| अध|ओर |आओर| आओ|े अ|े स|ा क| सं|िक |र ह|ा स| हो|र स|ें |में| मे| कर| से|नो |क्ष|से | का|। स|खे |ा। |रा | सम| सब|्रा| सक|र क|न क|वे |ौनो|कौन| कौ|चाह| चा| बा|प्र| प्|था |ि क|ति | जा| सा|े आ|पन |करे|ता |होख|त क|े। |े ब|तथा| तथ| आप|केल|सके| स्|रे |सबह|कर |आपन|े ओ|जा | पर|ष्ट| रा|ना |हवे| हव|ला |ेला|बहि| ओक|ोखे|र ब|ह। | ह।|न स|ाष्|राष|्त | और|े च|। क|संग|र आ|ट्र|्ट्|षा |मान|ा आ|ं क|ा प|्षा|रक्|हे |ाहे|ाति|ावे| जे|ही |ओकर|मिल|ित |ो स|ल ज|इखे|नइख| नइ|त्र|माज| बि|वे।|े ज|क स|िं |हिं|करा|और |े म|समा|हु | ओ |पर |े न|स्थ|रीय|्री|ला।|ाज |ान |कान|े त|िर |तिर|खात| खा|े उ|नून|ानू|ाम | सु| दे|ी क| मा|र म|प्त|िया|ाही|बा।|योग|ी स|ल ह|ून |व्य|ु क|ए क|े व|ंत्|स्व|केह|ीय |खल |साम|यता|तिक|े ह|ाप्|राप|र प|र अ| लो| सह|जे |ोग |म क|ले | नि|ेकर|ा ह|पूर|र न|ेहु|्य |या | या|देश|दी |ा म|ाव | दो|े द| पा|हि |िक्|शिक| शि|बा |िल | उप|्रत| वि| ही| ले|रो |े ख|ठन |गठन|ंगठ| मि|षण |्षण|ंरक|संर| आद| एक|ने | अप|तंत|वतं|्वत|्तर|्या|ेश |ादी|्ति|जिक|ाजि|क आ|्म |चार| उच| शा|री |ाह |याह|बिय|चित|क्त|पयो|उपय|रता|र व|न म|लोग|ह क|न प|काम| पू| इ |आदि|ईल | कई| व्|मी |ुरक|सुर| जी|धार|य स|तर्|भे |सभे| सभ|भाव|्थि|ामा|सर |र्म| को| बे|ोसर|दोस|ण क|ास |े प|जाद|आजा| आज|उचि|ग क|ारी| जर|गे |ज क|ी ब|सन |हो |ा त",
    npi: "को |ने | र |ार |क्त|कार|प्र| प्|्यक|व्य| गर|िका| व्|्रत|धिक|्ति|यक्|अधि| अध|ाई |मा |लाई|त्य|िक | । | सम|वा | वा|क व|्ने|र्न|गर्|न्त|छ ।|तिल|रत्|त्र|ेक |येक|्ये|िला|र स|ो स| स्|मान|क्ष| वि|हुन|ा स| हु| छ |र छ|्त्|समा|स्व|। प| सं|नेछ|ुने|हरु|तन्|वतन|े अ|िने|ो अ|्वत| का|े छ|गरि| रा|्र |ति |ाको| कु|ष्ट|ना |स्त|क स|ुनै|कुन|ट्र|ले | नि|ान |छैन| छै|्ट्|ाष्|राष|तिक|छ। |ार्|ता |ित |नै |ा अ| सा|ा व|रु | मा| अन|ा र|रता|र र|हरू|ेछ |ा प|रक्|्त | पर|था | ला|परि|देश|सको| यस|माज|ामा|्रा|िवा|ाहर|ो प|्य |वार|न स|। क|नि |्षा| त्|द्ध|र ह|तथा| तथ|यस्|्यस|री |र व|पनि|रिन|ंरक|संर|भाव|ै व|सबै| सब| शि| सह|ताक|े र|त र|लाग| सु|्षण|द्द| अप|ैन |ो व|िक्|ाव |धार|्या|्रि|ा भ|एको|र म|न अ|ो ल| उस|शिक|ात्|स्थ|वाह|ूर्|श्य|ित्|रको|ारक|ुद्|तो |्तो|ाउन|कान|िएक|ा न| पन|न। |ैन।|का |ेछ।| भे|र्य|सम्|त्प|साम|रिय|चार|निज|ुन |गि |ागि|उसक| मत| अभ|पूर|र त| सक|सार|राध|परा|अपर|ुक्|जको| उप|रा |ारा|्वा|विध|्न |ा त|न ग|णको| पा| दि|क र|र प|अन्|भेद|ारम|ो आ| अर|जिक|ाजि|िय |षा |ाट |बाट| बा|ि र| छ।|त्व|त स|रू |छ र|रका|विक|र उ|ोग |्दे|रिव|सकि|ै प|रति|अनु| आव|युक|ा ग|नमा|योग|ग ग|क अ|द्व|्ध |रुद| बि|। स|उने|ान्|ा म|िको|र्द|ारी|्तर|ो ह|हित| दे|रिक|ा क| आध|राज|र्म|्ण |र्ण|ि व|्यव|विच|बै |सहि|रोज|र्स|ई उ|्प |रात|निक|मिक|च्छ|्था|विव|कता|अभि|्धा",
    mag: " के|के |ार | हई|कार|ई। |हई।|िका|े अ|धिक|अधि| अध|र ह|े क|और | और|ा क|े स|सब | सब| कर|ें |था |में| मे|तथा| तथ|िक | हो| सम|क्ष|ना |ब क|र स| सं|ा स|कर | भी|। स| सा| से| का| अप|्रा|प्र| प्|से |भी | को|त क| पर|रा |क ह|पन |अपन| सक|या |ति |र क|ी क| या|करे| जा|रे | ओक|्त |सक |नो |ान |मान|ओकर|ा प|न क|ेल | ना|। क|रक्| स्|ही |होए| एक|पर |दी |ट्र|ता |व्य|हई | शा|े उ| दे|त्र|ादी| रा| ही|कान|ित |म क|ल ज|ाम |ी स|े भ|न स|माज|ष्ट|षा | ले|क स|बे |वे |ावे|मिल|र म|्य |ा ह|ला |प्त|नून|ानू|जा |ेकर|्षा|्रत|ंत्|र औ|ोई |कोई|्ट्|ाष्|राष| मा|रो | जे|करा|ोए |ाप्|राप|समा|ून |ो स|स्व|्ति|साम|ोनो|कोन| व्|र अ|्म | वि| सह|े म|क्त|योग|र व|काम|ल ह| नि|देश|पूर|वार| इ |ंरक|संर|ए क|र प| सु|तंत|वतं|्वत|ा म|व क|े व|ाथ |साथ| दो|होब| पा|ो क|े ब|ोग | उप|स्त|परि|न प|े त|्तर|लेल|े ओ|चाह| चा|य क|वा |ेश |य स|न ह|षण |ा ब|। त|एक |एल |ीय |केक|े ह|र आ|ि क|स्थ|जिक|ाजि|ामा|रीय|्री|तिक|ाति| बि|चार|े आ|ास | उच|ा त|यक्|्यक|िल |मय |समय|शाद|पयो|उपय|े ख|रिव| पू|े ल|े च|ौनो|कौन| कौ|ं क|संग|न द|ं स|ण प|्षण|र न|े न|ो भ|करो|ा औ|रता|ाव |भाव|क औ|र्म|ोसर|दोस|ण क|े प|न औ|ब ह|िक्|शिक| शि|ाबे|निय|चित|उचि|ित्|ग क|े। |त स|ी श|ं श|एकर|। ए|तन | ओ |री |्र |जे |क क| सी|सन |िवा| अन|ूरा| बच|ए। | बे|त ह| तक| मि|धार|थवा|अथव| अथ|िला|्वा|ि म| आद|ने |कएल| कए|्या"
  }
}, Vo = 2048, Jo = 10, ys = 300, Xa = {}.hasOwnProperty;
let Qt;
const Za = {};
for (Qt in Ir)
  if (Xa.call(Ir, Qt)) {
    const a = Ir[Qt];
    let e;
    Za[Qt] = {};
    for (e in a)
      if (Xa.call(a, e)) {
        const t = a[e].split("|"), r = {};
        let n = t.length;
        for (; n--; )
          r[t[n]] = n;
        Za[Qt][e] = r;
      }
  }
function Yo(a, e) {
  return Xo(a, e)[0][0];
}
function Xo(a, e = {}) {
  const t = [...e.whitelist || [], ...e.only || []], r = [...e.blacklist || [], ...e.ignore || []], n = e.minLength !== null && e.minLength !== void 0 ? e.minLength : Jo;
  if (!a || a.length < n)
    return tn();
  a = a.slice(0, Vo);
  const i = Qo(a, Ko);
  return !i[0] || !(i[0] in Za) ? !i[0] || i[1] === 0 || !bs(i[0], t, r) ? tn() : ws(i[0]) : Zo(
    a,
    tl(Wo(a), Za[i[0]], t, r)
  );
}
function Zo(a, e) {
  const t = e[0][1], r = a.length * ys - t;
  let n = -1;
  for (; ++n < e.length; )
    e[n][1] = 1 - (e[n][1] - t) / r || 0;
  return e;
}
function Qo(a, e) {
  let t = -1, r, n;
  for (n in e)
    if (Xa.call(e, n)) {
      const i = el(a, e[n]);
      i > t && (t = i, r = n);
    }
  return [r, t];
}
function el(a, e) {
  const t = a.match(e);
  return (t ? t.length : 0) / a.length || 0;
}
function tl(a, e, t, r) {
  e = rl(e, t, r);
  const n = [];
  let i;
  if (e)
    for (i in e)
      Xa.call(e, i) && n.push([i, al(a, e[i])]);
  return n.length === 0 ? tn() : n.sort(nl);
}
function al(a, e) {
  let t = 0, r = -1;
  for (; ++r < a.length; ) {
    const n = a[r];
    let i = ys;
    n[0] in e && (i = n[1] - e[n[0]] - 1, i < 0 && (i = -i)), t += i;
  }
  return t;
}
function rl(a, e, t) {
  if (e.length === 0 && t.length === 0)
    return a;
  const r = {};
  let n;
  for (n in a)
    bs(n, e, t) && (r[n] = a[n]);
  return r;
}
function bs(a, e, t) {
  return e.length === 0 && t.length === 0 ? !0 : (e.length === 0 || e.includes(a)) && !t.includes(a);
}
function tn() {
  return ws("und");
}
function ws(a) {
  return [[a, 1]];
}
function nl(a, e) {
  return a[1] - e[1];
}
const il = {
  aar: "aa",
  abk: "ab",
  afr: "af",
  aka: "ak",
  amh: "am",
  ara: "ar",
  arg: "an",
  asm: "as",
  ava: "av",
  ave: "ae",
  aym: "ay",
  aze: "az",
  bak: "ba",
  bam: "bm",
  bel: "be",
  ben: "bn",
  bis: "bi",
  bod: "bo",
  bos: "bs",
  bre: "br",
  bul: "bg",
  cat: "ca",
  ces: "cs",
  cha: "ch",
  che: "ce",
  chu: "cu",
  chv: "cv",
  cor: "kw",
  cos: "co",
  cre: "cr",
  cym: "cy",
  dan: "da",
  deu: "de",
  div: "dv",
  dzo: "dz",
  ell: "el",
  eng: "en",
  epo: "eo",
  est: "et",
  eus: "eu",
  ewe: "ee",
  fao: "fo",
  fas: "fa",
  fij: "fj",
  fin: "fi",
  fra: "fr",
  fry: "fy",
  ful: "ff",
  gla: "gd",
  gle: "ga",
  glg: "gl",
  glv: "gv",
  grn: "gn",
  guj: "gu",
  hat: "ht",
  hau: "ha",
  hbs: "sh",
  heb: "he",
  her: "hz",
  hin: "hi",
  hmo: "ho",
  hrv: "hr",
  hun: "hu",
  hye: "hy",
  ibo: "ig",
  ido: "io",
  iii: "ii",
  iku: "iu",
  ile: "ie",
  ina: "ia",
  ind: "id",
  ipk: "ik",
  isl: "is",
  ita: "it",
  jav: "jv",
  jpn: "ja",
  kal: "kl",
  kan: "kn",
  kas: "ks",
  kat: "ka",
  kau: "kr",
  kaz: "kk",
  khm: "km",
  kik: "ki",
  kin: "rw",
  kir: "ky",
  kom: "kv",
  kon: "kg",
  kor: "ko",
  kua: "kj",
  kur: "ku",
  lao: "lo",
  lat: "la",
  lav: "lv",
  lim: "li",
  lin: "ln",
  lit: "lt",
  ltz: "lb",
  lub: "lu",
  lug: "lg",
  mah: "mh",
  mal: "ml",
  mar: "mr",
  mkd: "mk",
  mlg: "mg",
  mlt: "mt",
  mon: "mn",
  mri: "mi",
  msa: "ms",
  mya: "my",
  nau: "na",
  nav: "nv",
  nbl: "nr",
  nde: "nd",
  ndo: "ng",
  nep: "ne",
  nld: "nl",
  nno: "nn",
  nob: "nb",
  nor: "no",
  nya: "ny",
  oci: "oc",
  oji: "oj",
  ori: "or",
  orm: "om",
  oss: "os",
  pan: "pa",
  pli: "pi",
  pol: "pl",
  por: "pt",
  pus: "ps",
  que: "qu",
  roh: "rm",
  ron: "ro",
  run: "rn",
  rus: "ru",
  sag: "sg",
  san: "sa",
  sin: "si",
  slk: "sk",
  slv: "sl",
  sme: "se",
  smo: "sm",
  sna: "sn",
  snd: "sd",
  som: "so",
  sot: "st",
  spa: "es",
  sqi: "sq",
  srd: "sc",
  srp: "sr",
  ssw: "ss",
  sun: "su",
  swa: "sw",
  swe: "sv",
  tah: "ty",
  tam: "ta",
  tat: "tt",
  tel: "te",
  tgk: "tg",
  tgl: "tl",
  tha: "th",
  tir: "ti",
  ton: "to",
  tsn: "tn",
  tso: "ts",
  tuk: "tk",
  tur: "tr",
  twi: "tw",
  uig: "ug",
  ukr: "uk",
  urd: "ur",
  uzb: "uz",
  ven: "ve",
  vie: "vi",
  vol: "vo",
  wln: "wa",
  wol: "wo",
  xho: "xh",
  yid: "yi",
  yor: "yo",
  zha: "za",
  zho: "zh",
  zul: "zu"
}, sl = {
  cmn: "zho",
  arb: "ara",
  arz: "ara",
  ind: "msa",
  zsm: "msa",
  nob: "nor",
  nno: "nor",
  pes: "fas",
  quy: "que"
}, ol = (a) => {
  const e = sl[a] || a;
  return il[e] || "";
}, ll = (a, e) => {
  {
    if (/[\p{Script=Hangul}]/u.test(a))
      return "ko";
    if (/[\p{Script=Hiragana}\p{Script=Katakana}]/u.test(a))
      return "ja";
    if (/[\p{Script=Han}]/u.test(a))
      return "zh";
  }
  return e;
}, ul = (a) => {
  try {
    const e = a.substring(0, 1e3), t = Yo(e), r = ol(t);
    return r || ll(e, "") || "en";
  } catch {
    return console.warn("Language detection failed, defaulting to en."), "en";
  }
};
function ai(a, e) {
  (e == null || e > a.length) && (e = a.length);
  for (var t = 0, r = Array(e); t < e; t++) r[t] = a[t];
  return r;
}
function cl(a) {
  if (Array.isArray(a)) return a;
}
function hl(a, e) {
  var t = a == null ? null : typeof Symbol < "u" && a[Symbol.iterator] || a["@@iterator"];
  if (t != null) {
    var r, n, i, s, o = [], l = !0, u = !1;
    try {
      if (i = (t = t.call(a)).next, e !== 0) for (; !(l = (r = i.call(t)).done) && (o.push(r.value), o.length !== e); l = !0) ;
    } catch (f) {
      u = !0, n = f;
    } finally {
      try {
        if (!l && t.return != null && (s = t.return(), Object(s) !== s)) return;
      } finally {
        if (u) throw n;
      }
    }
    return o;
  }
}
function dl() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function fl(a, e) {
  return cl(a) || hl(a, e) || gl(a, e) || dl();
}
function gl(a, e) {
  if (a) {
    if (typeof a == "string") return ai(a, e);
    var t = {}.toString.call(a).slice(8, -1);
    return t === "Object" && a.constructor && (t = a.constructor.name), t === "Map" || t === "Set" ? Array.from(a) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? ai(a, e) : void 0;
  }
}
const vs = Object.entries, ri = Object.setPrototypeOf, ml = Object.isFrozen, _s = Object.getPrototypeOf, ks = Object.getOwnPropertyDescriptor;
let oe = Object.freeze, he = Object.seal, jt = Object.create, Es = typeof Reflect < "u" && Reflect, an = Es.apply, rn = Es.construct;
oe || (oe = function(e) {
  return e;
});
he || (he = function(e) {
  return e;
});
an || (an = function(e, t) {
  for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++) n[i - 2] = arguments[i];
  return e.apply(t, n);
});
rn || (rn = function(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  return new e(...r);
});
const Be = Z(Array.prototype.forEach), pl = Z(Array.prototype.lastIndexOf), ni = Z(Array.prototype.pop), ea = Z(Array.prototype.push), yl = Z(Array.prototype.slice), bl = Z(Array.prototype.splice), Bt = Array.isArray, Pr = As(Set), Lr = Z(Set.prototype.add), ta = Z(Set.prototype.has), ct = Z(String.prototype.toLowerCase), zr = Z(String.prototype.toString), ii = Z(String.prototype.match), aa = Z(String.prototype.replace), si = Z(String.prototype.indexOf), wl = Z(String.prototype.trim), vl = Z(Number.prototype.toString), _l = Z(Boolean.prototype.toString), oi = typeof BigInt > "u" ? null : Z(BigInt.prototype.toString), li = typeof Symbol > "u" ? null : Z(Symbol.prototype.toString), we = Z(Object.prototype.hasOwnProperty), ra = Z(Object.prototype.toString), ue = Z(RegExp.prototype.test), Me = As(TypeError);
function Z(a) {
  return function(e) {
    e instanceof RegExp && (e.lastIndex = 0);
    for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
    return an(a, e, r);
  };
}
function As(a) {
  return function() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
    return rn(a, t);
  };
}
function J(a, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ct;
  if (ri && ri(a, null), !Bt(e)) return a;
  let r = e.length;
  for (; r--; ) {
    let n = e[r];
    if (typeof n == "string") {
      const i = t(n);
      i !== n && (ml(e) || (e[r] = i), n = i);
    }
    a[n] = !0;
  }
  return a;
}
function kl(a) {
  for (let e = 0; e < a.length; e++) we(a, e) || (a[e] = null);
  return a;
}
function ke(a) {
  const e = jt(null);
  for (const r of vs(a)) {
    var t = fl(r, 2);
    const n = t[0], i = t[1];
    we(a, n) && (Bt(i) ? e[n] = kl(i) : i && typeof i == "object" && i.constructor === Object ? e[n] = ke(i) : e[n] = i);
  }
  return e;
}
function El(a) {
  switch (typeof a) {
    case "string":
      return a;
    case "number":
      return vl(a);
    case "boolean":
      return _l(a);
    case "bigint":
      return oi ? oi(a) : "0";
    case "symbol":
      return li ? li(a) : "Symbol()";
    case "undefined":
      return ra(a);
    case "function":
    case "object": {
      if (a === null) return ra(a);
      const e = a, t = Te(e, "toString");
      if (typeof t == "function") {
        const r = t(e);
        return typeof r == "string" ? r : ra(r);
      }
      return ra(a);
    }
    default:
      return ra(a);
  }
}
function Te(a, e) {
  for (; a !== null; ) {
    const r = ks(a, e);
    if (r) {
      if (r.get) return Z(r.get);
      if (typeof r.value == "function") return Z(r.value);
    }
    a = _s(a);
  }
  function t() {
    return null;
  }
  return t;
}
function Al(a, e) {
  for (; a !== null; ) {
    const t = ks(a, e);
    if (t) return t.get ? Z(t.get) : null;
    a = _s(a);
  }
  return null;
}
function Sl(a) {
  try {
    return ue(a, ""), !0;
  } catch {
    return !1;
  }
}
const ui = oe([
  "a",
  "abbr",
  "acronym",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "bdi",
  "bdo",
  "big",
  "blink",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "center",
  "cite",
  "code",
  "col",
  "colgroup",
  "content",
  "data",
  "datalist",
  "dd",
  "decorator",
  "del",
  "details",
  "dfn",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "element",
  "em",
  "fieldset",
  "figcaption",
  "figure",
  "font",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meter",
  "nav",
  "nobr",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "search",
  "section",
  "select",
  "shadow",
  "slot",
  "small",
  "source",
  "spacer",
  "span",
  "strike",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "tr",
  "track",
  "tt",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
]), Fr = oe([
  "svg",
  "a",
  "altglyph",
  "altglyphdef",
  "altglyphitem",
  "animatecolor",
  "animatemotion",
  "animatetransform",
  "circle",
  "clippath",
  "defs",
  "desc",
  "ellipse",
  "enterkeyhint",
  "exportparts",
  "filter",
  "font",
  "g",
  "glyph",
  "glyphref",
  "hkern",
  "image",
  "inputmode",
  "line",
  "lineargradient",
  "marker",
  "mask",
  "metadata",
  "mpath",
  "part",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialgradient",
  "rect",
  "stop",
  "style",
  "switch",
  "symbol",
  "text",
  "textpath",
  "title",
  "tref",
  "tspan",
  "view",
  "vkern"
]), Ur = oe([
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence"
]), Tl = oe([
  "animate",
  "color-profile",
  "cursor",
  "discard",
  "font-face",
  "font-face-format",
  "font-face-name",
  "font-face-src",
  "font-face-uri",
  "foreignobject",
  "hatch",
  "hatchpath",
  "mesh",
  "meshgradient",
  "meshpatch",
  "meshrow",
  "missing-glyph",
  "script",
  "set",
  "solidcolor",
  "unknown",
  "use"
]), $r = oe([
  "math",
  "menclose",
  "merror",
  "mfenced",
  "mfrac",
  "mglyph",
  "mi",
  "mlabeledtr",
  "mmultiscripts",
  "mn",
  "mo",
  "mover",
  "mpadded",
  "mphantom",
  "mroot",
  "mrow",
  "ms",
  "mspace",
  "msqrt",
  "mstyle",
  "msub",
  "msup",
  "msubsup",
  "mtable",
  "mtd",
  "mtext",
  "mtr",
  "munder",
  "munderover",
  "mprescripts"
]), Nl = oe([
  "maction",
  "maligngroup",
  "malignmark",
  "mlongdiv",
  "mscarries",
  "mscarry",
  "msgroup",
  "mstack",
  "msline",
  "msrow",
  "semantics",
  "annotation",
  "annotation-xml",
  "mprescripts",
  "none"
]), ci = oe(["#text"]), hi = oe([
  "accept",
  "action",
  "align",
  "alt",
  "autocapitalize",
  "autocomplete",
  "autopictureinpicture",
  "autoplay",
  "background",
  "bgcolor",
  "border",
  "capture",
  "cellpadding",
  "cellspacing",
  "checked",
  "cite",
  "class",
  "clear",
  "color",
  "cols",
  "colspan",
  "command",
  "commandfor",
  "controls",
  "controlslist",
  "coords",
  "crossorigin",
  "datetime",
  "decoding",
  "default",
  "dir",
  "disabled",
  "disablepictureinpicture",
  "disableremoteplayback",
  "download",
  "draggable",
  "enctype",
  "enterkeyhint",
  "exportparts",
  "face",
  "for",
  "headers",
  "height",
  "hidden",
  "high",
  "href",
  "hreflang",
  "id",
  "inert",
  "inputmode",
  "integrity",
  "ismap",
  "kind",
  "label",
  "lang",
  "list",
  "loading",
  "loop",
  "low",
  "max",
  "maxlength",
  "media",
  "method",
  "min",
  "minlength",
  "multiple",
  "muted",
  "name",
  "nonce",
  "noshade",
  "novalidate",
  "nowrap",
  "open",
  "optimum",
  "part",
  "pattern",
  "placeholder",
  "playsinline",
  "popover",
  "popovertarget",
  "popovertargetaction",
  "poster",
  "preload",
  "pubdate",
  "radiogroup",
  "readonly",
  "rel",
  "required",
  "rev",
  "reversed",
  "role",
  "rows",
  "rowspan",
  "spellcheck",
  "scope",
  "selected",
  "shape",
  "size",
  "sizes",
  "slot",
  "span",
  "srclang",
  "start",
  "src",
  "srcset",
  "step",
  "style",
  "summary",
  "tabindex",
  "title",
  "translate",
  "type",
  "usemap",
  "valign",
  "value",
  "width",
  "wrap",
  "xmlns"
]), Br = oe([
  "accent-height",
  "accumulate",
  "additive",
  "alignment-baseline",
  "amplitude",
  "ascent",
  "attributename",
  "attributetype",
  "azimuth",
  "basefrequency",
  "baseline-shift",
  "begin",
  "bias",
  "by",
  "class",
  "clip",
  "clippathunits",
  "clip-path",
  "clip-rule",
  "color",
  "color-interpolation",
  "color-interpolation-filters",
  "color-profile",
  "color-rendering",
  "cx",
  "cy",
  "d",
  "dx",
  "dy",
  "diffuseconstant",
  "direction",
  "display",
  "divisor",
  "dominant-baseline",
  "dur",
  "edgemode",
  "elevation",
  "end",
  "exponent",
  "fill",
  "fill-opacity",
  "fill-rule",
  "filter",
  "filterunits",
  "flood-color",
  "flood-opacity",
  "font-family",
  "font-size",
  "font-size-adjust",
  "font-stretch",
  "font-style",
  "font-variant",
  "font-weight",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyph-name",
  "glyphref",
  "gradientunits",
  "gradienttransform",
  "height",
  "href",
  "id",
  "image-rendering",
  "in",
  "in2",
  "intercept",
  "k",
  "k1",
  "k2",
  "k3",
  "k4",
  "kerning",
  "keypoints",
  "keysplines",
  "keytimes",
  "lang",
  "lengthadjust",
  "letter-spacing",
  "kernelmatrix",
  "kernelunitlength",
  "lighting-color",
  "local",
  "marker-end",
  "marker-mid",
  "marker-start",
  "markerheight",
  "markerunits",
  "markerwidth",
  "maskcontentunits",
  "maskunits",
  "max",
  "mask",
  "mask-type",
  "media",
  "method",
  "mode",
  "min",
  "name",
  "numoctaves",
  "offset",
  "operator",
  "opacity",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "paint-order",
  "path",
  "pathlength",
  "patterncontentunits",
  "patterntransform",
  "patternunits",
  "pointer-events",
  "points",
  "preservealpha",
  "preserveaspectratio",
  "primitiveunits",
  "r",
  "rx",
  "ry",
  "radius",
  "refx",
  "refy",
  "repeatcount",
  "repeatdur",
  "restart",
  "result",
  "rotate",
  "scale",
  "seed",
  "shape-rendering",
  "slope",
  "specularconstant",
  "specularexponent",
  "spreadmethod",
  "startoffset",
  "stddeviation",
  "stitchtiles",
  "stop-color",
  "stop-opacity",
  "stroke-dasharray",
  "stroke-dashoffset",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-miterlimit",
  "stroke-opacity",
  "stroke",
  "stroke-width",
  "style",
  "surfacescale",
  "systemlanguage",
  "tabindex",
  "tablevalues",
  "targetx",
  "targety",
  "transform",
  "transform-origin",
  "text-anchor",
  "text-decoration",
  "text-orientation",
  "text-rendering",
  "textlength",
  "type",
  "u1",
  "u2",
  "unicode",
  "values",
  "vector-effect",
  "viewbox",
  "visibility",
  "version",
  "vert-adv-y",
  "vert-origin-x",
  "vert-origin-y",
  "width",
  "word-spacing",
  "wrap",
  "writing-mode",
  "xchannelselector",
  "ychannelselector",
  "x",
  "x1",
  "x2",
  "xmlns",
  "y",
  "y1",
  "y2",
  "z",
  "zoomandpan"
]), di = oe([
  "accent",
  "accentunder",
  "align",
  "bevelled",
  "close",
  "columnalign",
  "columnlines",
  "columnspacing",
  "columnspan",
  "denomalign",
  "depth",
  "dir",
  "display",
  "displaystyle",
  "encoding",
  "fence",
  "frame",
  "height",
  "href",
  "id",
  "largeop",
  "length",
  "linethickness",
  "lquote",
  "lspace",
  "mathbackground",
  "mathcolor",
  "mathsize",
  "mathvariant",
  "maxsize",
  "minsize",
  "movablelimits",
  "notation",
  "numalign",
  "open",
  "rowalign",
  "rowlines",
  "rowspacing",
  "rowspan",
  "rspace",
  "rquote",
  "scriptlevel",
  "scriptminsize",
  "scriptsizemultiplier",
  "selection",
  "separator",
  "separators",
  "stretchy",
  "subscriptshift",
  "supscriptshift",
  "symmetric",
  "voffset",
  "width",
  "xmlns"
]), za = oe([
  "xlink:href",
  "xml:id",
  "xlink:title",
  "xml:space",
  "xmlns:xlink"
]), Rl = he(/{{[\w\W]*|^[\w\W]*}}/g), Cl = he(/<%[\w\W]*|^[\w\W]*%>/g), xl = he(/\${[\w\W]*/g), Ol = he(/^data-[\-\w.\u00B7-\uFFFF]+$/), Dl = he(/^aria-[\-\w]+$/), fi = he(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), jl = he(/^(?:\w+script|data):/i), Il = he(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), Pl = he(/^html$/i), Ll = he(/^[a-z][.\w]*(-[.\w]+)+$/i), Mr = he(/<[/\w!]/g), gi = he(/<[/\w]/g), zl = he(/<\/no(script|embed|frames)/i), mi = he(/\/>/i), re = {
  element: 1,
  attribute: 2,
  text: 3,
  cdataSection: 4,
  entityReference: 5,
  entityNode: 6,
  processingInstruction: 7,
  comment: 8,
  document: 9,
  documentType: 10,
  documentFragment: 11,
  notation: 12
}, Fl = oe(J({}, [
  "style",
  "script",
  "xmp",
  "iframe",
  "noembed",
  "noframes",
  "plaintext",
  "noscript"
])), Ul = function() {
  return typeof window > "u" ? null : window;
}, $l = function(e, t) {
  if (typeof e != "object" || typeof e.createPolicy != "function") return null;
  let r = null;
  const n = "data-tt-policy-suffix";
  t && t.hasAttribute(n) && (r = t.getAttribute(n));
  const i = "dompurify" + (r ? "#" + r : "");
  try {
    return e.createPolicy(i, {
      createHTML(s) {
        return s;
      },
      createScriptURL(s) {
        return s;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + i + " could not be created."), null;
  }
}, pi = function() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
}, Je = function(e, t, r, n) {
  return we(e, t) && Bt(e[t]) ? J(n.base ? ke(n.base) : {}, e[t], n.transform) : r;
}, Hr = function(e, t, r) {
  const n = we(e, t) ? e[t] : void 0;
  return n && typeof n == "object" ? ke(n) : r();
};
function Ss() {
  let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ul();
  const e = (T) => Ss(T);
  if (e.version = "3.4.17", e.removed = [], !a || !a.document || a.document.nodeType !== re.document || !a.Element)
    return e.isSupported = !1, e;
  let t = a.document;
  const r = t, n = r.currentScript;
  a.DocumentFragment;
  const i = a.HTMLTemplateElement, s = a.Node, o = a.Element, l = a.NodeFilter;
  a.NamedNodeMap === void 0 && (a.NamedNodeMap || a.MozNamedAttrMap), a.HTMLFormElement;
  const u = a.DOMParser, f = a.trustedTypes, d = o.prototype, g = Te(d, "cloneNode"), b = Te(d, "remove"), v = Te(d, "removeAttributeNode"), A = Te(d, "nextSibling"), D = Te(d, "childNodes"), x = Te(d, "parentNode"), O = Te(d, "shadowRoot"), _ = Te(d, "attributes"), I = s && s.prototype ? Te(s.prototype, "nodeType") : null, j = s && s.prototype ? Te(s.prototype, "nodeName") : null, C = s && s.prototype ? Te(s.prototype, "ownerDocument") : null, S = function(c) {
    return I ? I(c) : c.nodeType;
  }, $ = function(c) {
    return j ? j(c) : c.nodeName;
  }, L = Al(d, "namespaceURI"), M = function(c) {
    return L ? L(c) : c.namespaceURI;
  };
  if (typeof i == "function") {
    const T = t.createElement("template");
    T.content && T.content.ownerDocument && (t = T.content.ownerDocument);
  }
  let G, h = "", p, y = !1, m = 0;
  const z = function() {
    if (m > 0) throw Me('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, N = function(c) {
    z(), m++;
    try {
      return G.createHTML(c);
    } finally {
      m--;
    }
  }, R = function(c) {
    z(), m++;
    try {
      return G.createScriptURL(c);
    } finally {
      m--;
    }
  }, U = function() {
    return y || (p = $l(f, n), y = !0), p;
  }, Q = t, ae = Q.implementation, tt = Q.createNodeIterator, Vt = Q.createDocumentFragment, gt = Q.getElementsByTagName, ka = r.importNode;
  let W = pi();
  e.isSupported = typeof vs == "function" && typeof x == "function" && ae && ae.createHTMLDocument !== void 0;
  const at = Rl, Ea = Cl, Aa = xl, Sa = Ol, Jt = Dl, mt = jl, pt = Il, Ta = Ll;
  let Na = fi, Y = null;
  const ve = J({}, [
    ...ui,
    ...Fr,
    ...Ur,
    ...$r,
    ...ci
  ]);
  let V = null;
  const yt = J({}, [
    ...hi,
    ...Br,
    ...di,
    ...za
  ]);
  let ge = Object.seal(jt(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), _e = null, bt = null;
  const Ae = Object.seal(jt(null, {
    tagCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    }
  }));
  let Nn = !0, hr = !0, Rn = !1, dr = !0, $e = !1, rt = !0, nt = !1, fr = !1, Ra = null, Ca = null, gr = !1, wt = !1, xa = !1, Oa = !1, Cn = !0, xn = !1;
  const On = "user-content-";
  let mr = !0, pr = !1, it = null, vt = {}, st = null;
  const Dn = J({}, [
    "annotation-xml",
    "audio",
    "colgroup",
    "desc",
    "foreignobject",
    "head",
    "iframe",
    "math",
    "mi",
    "mn",
    "mo",
    "ms",
    "mtext",
    "noembed",
    "noframes",
    "noscript",
    "plaintext",
    "script",
    "selectedcontent",
    "style",
    "svg",
    "template",
    "thead",
    "title",
    "video",
    "xmp"
  ]);
  let jn = null;
  const In = J({}, [
    "audio",
    "video",
    "img",
    "source",
    "image",
    "track"
  ]);
  let Pn = null;
  const Ln = J({}, [
    "alt",
    "class",
    "for",
    "id",
    "label",
    "name",
    "pattern",
    "placeholder",
    "role",
    "summary",
    "title",
    "value",
    "style",
    "xmlns"
  ]), Da = "http://www.w3.org/1998/Math/MathML", ja = "http://www.w3.org/2000/svg", Pe = "http://www.w3.org/1999/xhtml";
  let _t = Pe, yr = !1, br = null;
  const uo = J({}, [
    Da,
    ja,
    Pe
  ], zr), zn = oe([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext"
  ]);
  let wr = J({}, zn);
  const Fn = oe(["annotation-xml"]);
  let vr = J({}, Fn);
  const co = J({}, [
    "title",
    "style",
    "font",
    "a",
    "script"
  ]);
  let Yt = null;
  const ho = ["application/xhtml+xml", "text/html"], fo = "text/html";
  let te = null, kt = null;
  const go = t.createElement("form"), Un = function(c) {
    return c instanceof RegExp || c instanceof Function;
  }, _r = function() {
    let c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (kt && kt === c) return;
    (!c || typeof c != "object") && (c = {}), c = ke(c), Yt = ho.indexOf(c.PARSER_MEDIA_TYPE) === -1 ? fo : c.PARSER_MEDIA_TYPE, te = Yt === "application/xhtml+xml" ? zr : ct, Y = Je(c, "ALLOWED_TAGS", ve, { transform: te }), V = Je(c, "ALLOWED_ATTR", yt, { transform: te }), br = Je(c, "ALLOWED_NAMESPACES", uo, { transform: zr }), Pn = Je(c, "ADD_URI_SAFE_ATTR", Ln, {
      transform: te,
      base: Ln
    }), jn = Je(c, "ADD_DATA_URI_TAGS", In, {
      transform: te,
      base: In
    }), st = Je(c, "FORBID_CONTENTS", Dn, { transform: te }), _e = Je(c, "FORBID_TAGS", ke({}), { transform: te }), bt = Je(c, "FORBID_ATTR", ke({}), { transform: te }), vt = we(c, "USE_PROFILES") ? c.USE_PROFILES && typeof c.USE_PROFILES == "object" ? ke(c.USE_PROFILES) : c.USE_PROFILES : !1, Nn = c.ALLOW_ARIA_ATTR !== !1, hr = c.ALLOW_DATA_ATTR !== !1, Rn = c.ALLOW_UNKNOWN_PROTOCOLS || !1, dr = c.ALLOW_SELF_CLOSE_IN_ATTR !== !1, $e = c.SAFE_FOR_TEMPLATES || !1, rt = c.SAFE_FOR_XML !== !1, nt = c.WHOLE_DOCUMENT || !1, wt = c.RETURN_DOM || !1, xa = c.RETURN_DOM_FRAGMENT || !1, Oa = c.RETURN_TRUSTED_TYPE || !1, gr = c.FORCE_BODY || !1, Cn = c.SANITIZE_DOM !== !1, xn = c.SANITIZE_NAMED_PROPS || !1, mr = c.KEEP_CONTENT !== !1, pr = c.IN_PLACE || !1, Na = Sl(c.ALLOWED_URI_REGEXP) ? c.ALLOWED_URI_REGEXP : fi, _t = typeof c.NAMESPACE == "string" ? c.NAMESPACE : Pe, wr = Hr(c, "MATHML_TEXT_INTEGRATION_POINTS", () => J({}, zn)), vr = Hr(c, "HTML_INTEGRATION_POINTS", () => J({}, Fn));
    const w = Hr(c, "CUSTOM_ELEMENT_HANDLING", () => jt(null));
    if (ge = jt(null), we(w, "tagNameCheck") && Un(w.tagNameCheck) && (ge.tagNameCheck = w.tagNameCheck), we(w, "attributeNameCheck") && Un(w.attributeNameCheck) && (ge.attributeNameCheck = w.attributeNameCheck), we(w, "allowCustomizedBuiltInElements") && typeof w.allowCustomizedBuiltInElements == "boolean" && (ge.allowCustomizedBuiltInElements = w.allowCustomizedBuiltInElements), he(ge), $e && (hr = !1), xa && (wt = !0), vt && (Y = J({}, ci), V = jt(null), vt.html === !0 && (J(Y, ui), J(V, hi)), vt.svg === !0 && (J(Y, Fr), J(V, Br), J(V, za)), vt.svgFilters === !0 && (J(Y, Ur), J(V, Br), J(V, za)), vt.mathMl === !0 && (J(Y, $r), J(V, di), J(V, za))), Ae.tagCheck = null, Ae.attributeCheck = null, we(c, "ADD_TAGS") && (typeof c.ADD_TAGS == "function" ? Ae.tagCheck = c.ADD_TAGS : Bt(c.ADD_TAGS) && (Y === ve && (Y = ke(Y)), J(Y, c.ADD_TAGS, te))), we(c, "ADD_ATTR") && (typeof c.ADD_ATTR == "function" ? Ae.attributeCheck = c.ADD_ATTR : Bt(c.ADD_ATTR) && (V === yt && (V = ke(V)), J(V, c.ADD_ATTR, te))), we(c, "ADD_FORBID_CONTENTS") && Bt(c.ADD_FORBID_CONTENTS) && (st === Dn && (st = ke(st)), J(st, c.ADD_FORBID_CONTENTS, te)), mr && (Y["#text"] = !0), nt && J(Y, [
      "html",
      "head",
      "body"
    ]), Y.table && (J(Y, ["tbody"]), delete _e.tbody), c.TRUSTED_TYPES_POLICY) {
      if (typeof c.TRUSTED_TYPES_POLICY.createHTML != "function") throw Me('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof c.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw Me('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const k = G;
      G = c.TRUSTED_TYPES_POLICY;
      try {
        h = N("");
      } catch (E) {
        throw G = k, E;
      }
    } else c.TRUSTED_TYPES_POLICY === null ? (G = void 0, h = "") : (G === void 0 && (G = U()), G && typeof h == "string" && (h = N("")));
    oe && oe(c), kt = c;
  }, $n = J({}, [
    ...Fr,
    ...Ur,
    ...Tl
  ]), Bn = J({}, [...$r, ...Nl]), mo = function(c, w, k) {
    return w.namespaceURI === Pe ? c === "svg" : w.namespaceURI === Da ? c === "svg" && (k === "annotation-xml" || wr[k]) : !!$n[c];
  }, po = function(c, w, k) {
    return w.namespaceURI === Pe ? c === "math" : w.namespaceURI === ja ? c === "math" && vr[k] : !!Bn[c];
  }, yo = function(c, w, k) {
    return w.namespaceURI === ja && !vr[k] || w.namespaceURI === Da && !wr[k] ? !1 : !Bn[c] && (co[c] || !$n[c]);
  }, bo = function(c) {
    const w = M(c), k = ct($(c)), E = x(c);
    let B, q;
    return E && S(E) === re.element ? (B = { namespaceURI: M(E) }, q = ct($(E))) : (B = { namespaceURI: _t }, q = "template"), br[w] ? w === ja ? mo(k, B, q) : w === Da ? po(k, B, q) : w === Pe ? yo(k, B, q) : !!(Yt === "application/xhtml+xml" && br[w]) : !1;
  }, Ke = function(c) {
    ea(e.removed, { element: c });
    try {
      x(c).removeChild(c);
    } catch {
      if (b(c), !x(c)) throw Me("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Mn = function(c, w, k) {
    try {
      v(c, w);
    } catch {
      try {
        c.removeAttribute(k);
      } catch {
      }
    }
  }, kr = function(c) {
    Ar(c);
    const w = D(c);
    w && Be(yl(w), (E) => {
      try {
        b(E);
      } catch {
      }
    });
    const k = S(c) === re.element ? _(c) : null;
    if (k) for (let E = k.length - 1; E >= 0; --E) {
      const B = k[E], q = B && B.name;
      typeof q == "string" && Mn(c, B, q);
    }
  }, Et = function(c, w, k) {
    if (!k) try {
      k = w.getAttributeNode(c);
    } catch {
      k = null;
    }
    ea(e.removed, {
      attribute: k || null,
      from: w
    });
    try {
      k ? v(w, k) : w.removeAttribute(c);
    } catch {
      try {
        w.removeAttribute(c);
      } catch {
      }
    }
    if (c === "is")
      if (wt || xa) try {
        Ke(w);
      } catch {
      }
      else try {
        w.setAttribute(c, "");
      } catch {
      }
  }, Hn = function(c) {
    const w = _(c);
    if (w)
      for (let k = w.length - 1; k >= 0; --k) {
        const E = w[k], B = E && E.name;
        typeof B != "string" || V[te(B)] || Mn(c, E, B);
      }
  }, Er = function(c, w) {
    let k = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
    const E = [c];
    for (; E.length > 0; ) {
      const B = E.pop();
      if (w(B) === !1) continue;
      if (k && S(B) === re.element) {
        const K = O(B);
        Ve(K) && E.push(K);
      }
      const q = D(B);
      if (q) for (let K = q.length - 1; K >= 0; --K) E.push(q[K]);
    }
  }, Ar = function(c) {
    Er(c, (w) => {
      S(w) === re.element && Hn(w);
    });
  }, Sr = function(c) {
    const w = [];
    return Er(c, (k) => {
      w.push(k);
    }, !0), w;
  }, wo = function(c, w) {
    const k = Pr();
    Be(Sr(c), (E) => {
      S(E) === re.element && Lr(k, E);
    }), Be(w, (E) => {
      S(E) === re.element && !ta(k, E) && Hn(E);
    });
  }, qn = function(c, w) {
    let k = !1;
    return Be(e.removed, (E) => {
      E.element && (k = k || E.element === c, Ar(E.element));
    }), wo(c, w), k;
  }, vo = 8, _o = function(c, w) {
    const k = it;
    let E = null;
    const B = () => (E || (E = Pr(), Be(w, (q) => {
      Lr(E, q);
    })), E);
    for (let q = 0; ; q++) {
      const K = Sr(c), ie = [c];
      let Le = !1;
      if (Be(K, (me) => {
        S(me) === re.documentFragment ? ea(ie, me) : !Le && !ta(k, me) && (Le = ta(B(), me));
      }), !Le) return;
      if (q >= vo) throw Me("the tree kept changing during in-place sanitization; refusing to return it");
      Be(ie, (me, pe) => {
        ko(me, pe > 0, c, B());
      });
    }
  }, ko = function(c, w, k, E) {
    const B = Tr(c);
    let q;
    for (; q = B.nextNode(); )
      !ta(E, q) || ta(it, q) || (w && Ce(W.uponSanitizeShadowNode, q, null), Rr(q, k), Cr(q, k), Ve(q.content) && Zt(q.content));
  }, Eo = function(c) {
    it && Lr(it, c);
  }, Wn = function(c, w) {
    return rt ? c === "patchsrc" ? !0 : c === "for" && w !== "label" && w !== "output" : !1;
  }, Ao = function(c) {
    rt && Er(c, (w) => {
      const k = S(w);
      if (k === re.processingInstruction || k === re.comment && ue(gi, w.data)) {
        try {
          b(w);
        } catch {
        }
        return !1;
      }
      if (k === re.element) {
        const E = w, B = te($(w));
        try {
          E.hasAttribute && E.hasAttribute("patchsrc") && E.removeAttribute("patchsrc"), E.hasAttribute && E.hasAttribute("for") && Wn("for", B) && E.removeAttribute("for");
        } catch {
        }
      }
      return !0;
    });
  }, Gn = function(c) {
    let w = null, k = null;
    if (gr) c = "<remove></remove>" + c;
    else {
      const q = ii(c, /^[\r\n\t ]+/);
      k = q && q[0];
    }
    Yt === "application/xhtml+xml" && _t === Pe && (c = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + c + "</body></html>");
    const E = G ? N(c) : c;
    if (_t === Pe) try {
      w = new u().parseFromString(E, Yt);
    } catch {
    }
    if (!w || !w.documentElement) {
      w = ae.createDocument(_t, "template", null);
      try {
        w.documentElement.innerHTML = yr ? h : E;
      } catch {
      }
    }
    const B = w.body || w.documentElement;
    return c && k && B.insertBefore(t.createTextNode(k), B.childNodes[0] || null), _t === Pe ? gt.call(w, nt ? "html" : "body")[0] : nt ? w.documentElement : B;
  }, Tr = function(c) {
    const w = C ? C(c) : c.ownerDocument;
    return tt.call(w || c, c, l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION, null);
  }, Ia = function(c) {
    return c = aa(c, at, " "), c = aa(c, Ea, " "), c = aa(c, Aa, " "), c;
  }, Nr = function(c) {
    var w;
    Kn(c);
    const k = (w = c.querySelectorAll) === null || w === void 0 ? void 0 : w.call(c, "template");
    k && Be(k, (E) => {
      Ve(E.content) && Nr(E.content);
    });
  }, Kn = function(c) {
    c.normalize();
    const w = C ? C(c) : c.ownerDocument, k = tt.call(w || c, c, l.SHOW_TEXT | l.SHOW_COMMENT | l.SHOW_CDATA_SECTION | l.SHOW_PROCESSING_INSTRUCTION, null);
    let E = k.nextNode();
    for (; E; )
      E.data = Ia(E.data), E = k.nextNode();
  }, Pa = function(c) {
    const w = j ? j(c) : null;
    return typeof w != "string" || te(w) !== "form" ? !1 : typeof c.nodeName != "string" || typeof c.textContent != "string" || typeof c.removeChild != "function" || c.attributes !== _(c) || typeof c.removeAttribute != "function" || typeof c.removeAttributeNode != "function" || typeof c.getAttributeNode != "function" || typeof c.setAttribute != "function" || typeof c.namespaceURI != "string" || typeof c.insertBefore != "function" || typeof c.hasChildNodes != "function" || c.nodeType !== I(c) || c.childNodes !== D(c);
  }, Ve = function(c) {
    if (!I || typeof c != "object" || c === null) return !1;
    try {
      return I(c) === re.documentFragment;
    } catch {
      return !1;
    }
  }, Xt = function(c) {
    if (!I || typeof c != "object" || c === null) return !1;
    try {
      return typeof I(c) == "number";
    } catch {
      return !1;
    }
  };
  function Ce(T, c, w) {
    T.length !== 0 && Be(T, (k) => {
      k.call(e, c, w, kt);
    });
  }
  const So = function(c, w) {
    return !!(rt && c.hasChildNodes() && !Xt(c.firstElementChild) && ue(Mr, c.textContent) && ue(Mr, c.innerHTML) || rt && Fl[w] && S(c) === re.element && M(c) === Pe && (Xt(c.firstElementChild) || typeof c.textContent == "string" && ue(Mr, c.textContent)) || c.nodeType === re.processingInstruction || rt && c.nodeType === re.comment && ue(gi, c.data));
  }, La = function(c, w) {
    if (c instanceof RegExp) return ue(c, w);
    if (c instanceof Function) {
      for (var k = arguments.length, E = new Array(k > 2 ? k - 2 : 0), B = 2; B < k; B++) E[B - 2] = arguments[B];
      return !!c(w, ...E);
    }
    return !1;
  }, To = function(c, w, k) {
    if (!_e[w] && Yn(w) && La(ge.tagNameCheck, w)) return !1;
    if (mr && !st[w] && !st[ct(w)]) {
      const E = x(c), B = D(c);
      if (B && E) {
        const q = B.length;
        for (let K = q - 1; K >= 0; --K) {
          const ie = c === k ? g(B[K], !0) : B[K];
          E.insertBefore(ie, A(c));
        }
      }
    }
    return Ke(c), !0;
  }, Vn = function(c, w, k, E) {
    return c.length === 0 ? w : w === k || w === E ? ke(w) : w;
  }, At = function(c, w) {
    return c === w || x(c) !== null ? !1 : (pr && Ar(c), !0);
  }, Rr = function(c, w) {
    if (Eo(c), Ce(W.beforeSanitizeElements, c, null), At(c, w)) return !0;
    if (Pa(c))
      return Ke(c), !0;
    const k = te($(c));
    if (Y = Vn(W.uponSanitizeElement, Y, ve, Ra), Ce(W.uponSanitizeElement, c, {
      tagName: k,
      allowedTags: Y
    }), At(c, w)) return !0;
    if (So(c, k))
      return Ke(c), !0;
    if (_e[k] || !(Ae.tagCheck instanceof Function && Ae.tagCheck(k)) && !Y[k]) {
      const E = To(c, k, w);
      return E === !1 && (Ce(W.afterSanitizeElements, c, null), At(c, w)) ? !0 : E;
    }
    if (S(c) === re.element && !bo(c) || (k === "noscript" || k === "noembed" || k === "noframes") && ue(zl, c.innerHTML))
      return Ke(c), !0;
    if ($e && c.nodeType === re.text) {
      const E = Ia(c.textContent);
      c.textContent !== E && (ea(e.removed, { element: c.cloneNode() }), c.textContent = E);
    }
    return Ce(W.afterSanitizeElements, c, null), At(c, w);
  }, Jn = function(c, w, k) {
    if (bt[w] || Wn(w, c) || Cn && (w === "id" || w === "name") && (k in t || k in go)) return !1;
    const E = V[w] || Ae.attributeCheck instanceof Function && Ae.attributeCheck(w, c);
    return hr && ue(Sa, w) || Nn && ue(Jt, w) ? !0 : E ? Pn[w] || ue(Na, aa(k, pt, "")) || (w === "src" || w === "xlink:href" || w === "href") && c !== "script" && si(k, "data:") === 0 && jn[c] || Rn && !ue(mt, aa(k, pt, "")) ? !0 : !k : Yn(c) && La(ge.tagNameCheck, c) && La(ge.attributeNameCheck, w, c) || w === "is" && ge.allowCustomizedBuiltInElements && La(ge.tagNameCheck, k);
  }, No = J({}, [
    "annotation-xml",
    "color-profile",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "missing-glyph"
  ]), Yn = function(c) {
    return !No[ct(c)] && ue(Ta, c);
  }, Ro = function(c, w, k, E) {
    if (G && typeof f == "object" && typeof f.getAttributeType == "function" && !k) switch (f.getAttributeType(c, w)) {
      case "TrustedHTML":
        return N(E);
      case "TrustedScriptURL":
        return R(E);
    }
    return E;
  }, Co = function(c, w, k, E) {
    try {
      return k ? c.setAttributeNS(k, w, E) : c.setAttribute(w, E), Pa(c) ? (Ke(c), !1) : !0;
    } catch {
      return Et(w, c), !1;
    }
  }, Xn = function(c, w) {
    return rt && ue(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, w) ? !0 : ct(c) === "attributename" && ii(w, "href") !== null;
  }, Cr = function(c, w) {
    if (Ce(W.beforeSanitizeAttributes, c, null), At(c, w)) return;
    const k = c.attributes;
    if (!k || Pa(c)) return;
    V = Vn(W.uponSanitizeAttribute, V, yt, Ca);
    const E = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: V,
      forceKeepAttr: void 0
    };
    let B = k.length;
    const q = te(c.nodeName);
    for (; B--; ) {
      const K = k[B], ie = K.name, Le = K.namespaceURI, me = K.value, pe = te(ie), St = me;
      let ye = ie === "value" ? St : wl(St), Zn = !1;
      if (E.attrName = pe, E.attrValue = ye, E.keepAttr = !0, E.forceKeepAttr = void 0, Ce(W.uponSanitizeAttribute, c, E), ye = E.attrValue, xn && (pe === "id" || pe === "name") && si(ye, On) !== 0 && (Et(ie, c, K), ye = On + ye, Zn = !0), Xn(ie, ye)) {
        Et(ie, c, K);
        continue;
      }
      if (!E.forceKeepAttr) {
        if (!E.keepAttr) {
          Et(ie, c, K);
          continue;
        }
        if (!dr && ue(mi, ye)) {
          Et(ie, c, K);
          continue;
        }
        if ($e && (ye = Ia(ye)), !Jn(q, pe, ye)) {
          Et(ie, c, K);
          continue;
        }
        ye = Ro(q, pe, Le, ye), ye !== St && Co(c, ie, Le, ye) && Zn && ni(e.removed);
      }
    }
    Ce(W.afterSanitizeAttributes, c, null), At(c, w);
  }, Zt = function(c) {
    let w = null;
    const k = Tr(c);
    for (Ce(W.beforeSanitizeShadowDOM, c, null); w = k.nextNode(); )
      if (Ce(W.uponSanitizeShadowNode, w, null), Rr(w, c), Cr(w, c), Ve(w.content) && Zt(w.content), S(w) === re.element) {
        const E = O(w);
        Ve(E) && (xr(E), Zt(E));
      }
    $e && Kn(c), Ce(W.afterSanitizeShadowDOM, c, null);
  }, xr = function(c) {
    const w = [{
      node: c,
      shadow: null
    }];
    for (; w.length > 0; ) {
      const k = w.pop();
      if (k.shadow) {
        Zt(k.shadow);
        continue;
      }
      const E = k.node, B = S(E) === re.element, q = D(E);
      if (q) for (let K = q.length - 1; K >= 0; --K) w.push({
        node: q[K],
        shadow: null
      });
      if (B) {
        const K = j ? j(E) : null;
        if (typeof K == "string" && te(K) === "template") {
          const ie = E.content;
          Ve(ie) && w.push({
            node: ie,
            shadow: null
          });
        }
      }
      if (B) {
        const K = O(E);
        Ve(K) && w.push({
          node: null,
          shadow: K
        }, {
          node: K,
          shadow: null
        });
      }
    }
  };
  return e.sanitize = function(T) {
    let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, w = null, k = null, E = null, B = null;
    if (yr = !T, yr && (T = "<!-->"), typeof T != "string" && !Xt(T) && (T = El(T), typeof T != "string"))
      throw Me("dirty is not a string, aborting");
    if (!e.isSupported) return T;
    fr ? (Y = Ra, V = Ca) : _r(c), (W.uponSanitizeElement.length > 0 || W.uponSanitizeAttribute.length > 0) && (Y = ke(Y)), W.uponSanitizeAttribute.length > 0 && (V = ke(V)), e.removed = [];
    const q = pr && typeof T != "string" && Xt(T);
    let K = [];
    const ie = it;
    if (q) {
      Ao(T);
      const pe = $(T);
      if (typeof pe == "string") {
        const St = te(pe);
        if (!Y[St] || _e[St])
          throw kr(T), Me("root node is forbidden and cannot be sanitized in-place");
      }
      if (Pa(T))
        throw kr(T), Me("root node is clobbered and cannot be sanitized in-place");
      K = Sr(T), it = Pr();
    } else if (Xt(T))
      w = Gn("<!---->"), k = w.ownerDocument.importNode(T, !0), k.nodeType === re.element && k.nodeName === "BODY" || k.nodeName === "HTML" ? w = k : w.appendChild(k), xr(w);
    else {
      if (!wt && !$e && !nt && T.indexOf("<") === -1) return G && Oa ? N(T) : T;
      if (w = Gn(T), !w) return wt ? null : Oa ? h : "";
    }
    w && gr && Ke(w.firstChild);
    const Le = q ? T : w;
    try {
      q && xr(T);
      const pe = Tr(Le);
      for (; E = pe.nextNode(); )
        Rr(E, Le), Cr(E, Le), Ve(E.content) && Zt(E.content);
      q && _o(T, K);
    } catch (pe) {
      throw q && (kr(T), qn(T, K)), pe;
    } finally {
      it = ie;
    }
    if (q) {
      if (qn(T, K)) throw Me("a node selected for removal could not be safely returned; refusing to sanitize in place");
      return $e && Nr(T), T;
    }
    if (wt) {
      if ($e && Nr(w), xa)
        for (B = Vt.call(w.ownerDocument); w.firstChild; ) B.appendChild(w.firstChild);
      else B = w;
      return (V.shadowroot || V.shadowrootmode) && (B = ka.call(r, B, !0)), B;
    }
    let me = nt ? w.outerHTML : w.innerHTML;
    return nt && Y["!doctype"] && w.ownerDocument && w.ownerDocument.doctype && w.ownerDocument.doctype.name && ue(Pl, w.ownerDocument.doctype.name) && (me = "<!DOCTYPE " + w.ownerDocument.doctype.name + `>
` + me), $e && (me = Ia(me)), G && Oa ? N(me) : me;
  }, e.setConfig = function() {
    let T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _r(T), fr = !0, Ra = Y, Ca = V;
  }, e.clearConfig = function() {
    kt = null, fr = !1, Ra = null, Ca = null, G = p, h = "";
  }, e.isValidAttribute = function(T, c, w) {
    kt || _r({});
    const k = te(T), E = te(c);
    return typeof w == "string" && (Xn(c, w) || !dr && ue(mi, w)) ? !1 : Jn(k, E, w);
  }, e.addHook = function(T, c) {
    typeof c == "function" && we(W, T) && ea(W[T], c);
  }, e.removeHook = function(T, c) {
    if (we(W, T)) {
      if (c !== void 0) {
        const w = pl(W[T], c);
        return w === -1 ? void 0 : bl(W[T], w, 1)[0];
      }
      return ni(W[T]);
    }
  }, e.removeHooks = function(T) {
    we(W, T) && (W[T] = []);
  }, e.removeAllHooks = function() {
    W = pi();
  }, e;
}
var Ts = Ss();
const Bl = [
  "math",
  "semantics",
  "annotation",
  "mrow",
  "mi",
  "mn",
  "mo",
  "mtext",
  "mspace",
  "msup",
  "msub",
  "msubsup",
  "mfrac",
  "msqrt",
  "mroot",
  "mover",
  "munder",
  "munderover",
  "mtable",
  "mtr",
  "mtd",
  "mstyle",
  "mpadded",
  "mphantom",
  "menclose",
  "mglyph"
], Ml = [
  "display",
  "encoding",
  "mathvariant",
  "stretchy",
  "fence",
  "separator",
  "lspace",
  "rspace",
  "accent",
  "accentunder",
  "largeop",
  "minsize",
  "maxsize",
  "linethickness",
  "scriptlevel",
  "displaystyle",
  "width",
  "height",
  "depth",
  "voffset",
  "columnalign",
  "columnlines",
  "columnspacing",
  "rowlines",
  "rowspacing",
  "notation",
  "mathcolor",
  "mathbackground",
  "mathsize"
];
function Hl(a, { mathMl: e = !1 } = {}) {
  return Ts.sanitize(a, {
    ALLOWED_TAGS: [
      ...e ? Bl : [],
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "p",
      "br",
      "hr",
      "blockquote",
      "pre",
      "code",
      "strong",
      "em",
      "b",
      "i",
      "u",
      "s",
      "del",
      "ins",
      "sup",
      "sub",
      "span",
      "ul",
      "ol",
      "li",
      "dl",
      "dt",
      "dd",
      "table",
      "thead",
      "tbody",
      "tr",
      "th",
      "td",
      "a",
      "img",
      "figure",
      "figcaption",
      // Markdown footnote definitions arrive wrapped in <section class="footnotes">
      // (see utils/mdFootnotes.ts), which must survive to be found and re-emitted.
      "section"
    ],
    // `id` is allowed so heading anchors survive — the EPUB's nested
    // navMap uses `chapter1.xhtml#heading-id` to link the TOC sidebar to
    // each section. Without it readers see one entry per chapter only.
    // `class` is allowed so Markdown code fences keep their `language-*`
    // class for theming (see utils/md.ts).
    ALLOWED_ATTR: [
      "href",
      "src",
      "alt",
      "title",
      "colspan",
      "rowspan",
      "id",
      "class",
      ...e ? Ml : []
    ],
    // Drop anything that would load or run remote code.
    FORBID_TAGS: ["script", "style", "iframe", "object", "embed", "form", "input"],
    FORBID_ATTR: ["srcset"],
    ALLOW_DATA_ATTR: !1
  });
}
function Gt(a) {
  return Ts.sanitize(a, { WHOLE_DOCUMENT: !0 });
}
const ql = async (a) => {
  const { configure: e } = await import("./index-Yg81PsPz.js");
  e({
    useWebWorkers: !1,
    useCompressionStream: !1
  });
};
function Wl(a) {
  const e = new DOMParser().parseFromString(
    "<!doctype html><html><body></body></html>",
    "text/html"
  ), t = e.createElement("div");
  if (t.id = "__toc_root", t.innerHTML = a, e.body.appendChild(t), !t) return { html: a, headings: [] };
  const r = [], n = /* @__PURE__ */ new Set();
  let i = 0;
  for (const s of Array.from(t.querySelectorAll("h1, h2, h3, h4, h5, h6"))) {
    const o = (s.textContent || "").replace(/\s+/g, " ").trim();
    if (!o) continue;
    let l = (s.getAttribute("id") || "").trim();
    l || (l = Gl(o)), l || (i++, l = `h-${i}`);
    let u = l, f = 2;
    for (; n.has(u); )
      u = `${l}-${f}`, f++;
    n.add(u), s.setAttribute("id", u);
    const d = parseInt(s.tagName.charAt(1), 10);
    r.push({ id: u, text: o, level: d });
  }
  return { html: t.innerHTML, headings: r };
}
function Gl(a) {
  return a.toLowerCase().replace(/[\s_]+/g, "-").replace(/[^a-z0-9-]/g, "").replace(/-+/g, "-").replace(/^-|-$/g, "").slice(0, 60);
}
function Kl(a, e, t) {
  if (a.length === 0) return "";
  const r = [], n = [];
  let i = 0;
  for (const s of a) {
    for (; n.length && n[n.length - 1] >= s.level; )
      n.pop(), r.push("</navPoint>");
    i++, r.push(
      `<navPoint id="np${i}" playOrder="${i}"><navLabel><text>${t(s.text)}</text></navLabel><content src="${t(e)}#${t(s.id)}"/>`
    ), n.push(s.level);
  }
  for (; n.length; )
    n.pop(), r.push("</navPoint>");
  return r.join(`
`);
}
const Ye = {
  lastAccessDate: /* @__PURE__ */ new Date(0),
  lastModDate: /* @__PURE__ */ new Date(0)
}, de = (a) => a ? a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;") : "", Vl = `
body { line-height: 1.6; font-size: 1em; text-align: justify;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif; }
h1, h2, h3 { line-height: 1.3; }
p { margin: 0.6em 0; }
img { max-width: 100%; height: auto; }
figure { margin: 1em 0; }
figcaption { font-size: 0.9em; color: #666; text-align: center; }
blockquote { margin: 1em 1.5em; color: #444; border-left: 3px solid #ccc; padding-left: 1em; }
pre, code { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; }
pre { white-space: pre-wrap; background: #f5f5f5; padding: 0.6em 0.8em; border-radius: 4px; }
`;
async function Jl(a, e, t = [], r) {
  if (a.length === 0)
    throw new Error("buildEpub: no chapters");
  await ql();
  const { BlobWriter: n, TextReader: i, Uint8ArrayReader: s, ZipWriter: o } = await import("./index-Yg81PsPz.js"), { title: l, author: u, language: f, identifier: d } = e, g = new o(new n("application/epub+zip"), {
    extendedTimestamp: !1
  });
  await g.add("mimetype", new i("application/epub+zip"), Ye);
  const b = `<?xml version="1.0" encoding="UTF-8"?>
<container xmlns="urn:oasis:names:tc:opendocument:xmlns:container" version="1.0">
  <rootfiles>
    <rootfile full-path="content.opf" media-type="application/oebps-package+xml"/>
  </rootfiles>
</container>`;
  await g.add("META-INF/container.xml", new i(b), Ye);
  const v = e.toc && e.toc.length > 0 ? Kl(e.toc, "OEBPS/chapter1.xhtml", de) : a.map((S, $) => {
    const L = `chapter${$ + 1}`;
    return `<navPoint id="navPoint-${L}" playOrder="${$ + 1}"><navLabel><text>${de(S.title)}</text></navLabel><content src="./OEBPS/${L}.xhtml"/></navPoint>`;
  }).join(`
`), A = `<?xml version="1.0" encoding="UTF-8"?>
<ncx xmlns="http://www.daisy.org/z3986/2005/ncx/" version="2005-1">
  <head>
    <meta name="dtb:uid" content="${de(d)}"/>
    <meta name="dtb:depth" content="1"/>
    <meta name="dtb:totalPageCount" content="0"/>
    <meta name="dtb:maxPageNumber" content="0"/>
  </head>
  <docTitle><text>${de(l)}</text></docTitle>
  <docAuthor><text>${de(u)}</text></docAuthor>
  <navMap>${v}</navMap>
</ncx>`;
  await g.add("toc.ncx", new i(A), Ye), await g.add("style.css", new i(Vl), Ye);
  for (const S of t)
    await g.add(
      `OEBPS/${S.path}`,
      new s(new Uint8Array(S.bytes)),
      Ye
    );
  r && await g.add(
    `OEBPS/${r.path}`,
    new s(new Uint8Array(r.bytes)),
    Ye
  );
  for (let S = 0; S < a.length; S++) {
    const $ = a[S], L = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="${de(f)}" xml:lang="${de(f)}">
  <head>
    <title>${de($.title)}</title>
    <link rel="stylesheet" type="text/css" href="../style.css"/>
  </head>
  <body>${$.html}</body>
</html>`;
    await g.add(`OEBPS/chapter${S + 1}.xhtml`, new i(L), Ye);
  }
  const D = a.map(
    (S, $) => `<item id="chap${$ + 1}" href="OEBPS/chapter${$ + 1}.xhtml" media-type="application/xhtml+xml"/>`
  ).join(`
    `), x = t.map(
    (S, $) => `<item id="img${$ + 1}" href="OEBPS/${de(S.path)}" media-type="${de(S.mime)}"/>`
  ).join(`
    `), O = r ? `<item id="cover-image" href="OEBPS/${de(r.path)}" media-type="${de(r.mime)}"/>` : "", _ = r ? '<meta name="cover" content="cover-image"/>' : "", I = a.map((S, $) => `<itemref idref="chap${$ + 1}"/>`).join(`
    `), j = [D, x, O].filter((S) => S.length > 0).join(`
    `), C = `<?xml version="1.0" encoding="UTF-8"?>
<package xmlns="http://www.idpf.org/2007/opf" unique-identifier="book-id" version="2.0">
  <metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
    <dc:title>${de(l)}</dc:title>
    <dc:language>${de(f)}</dc:language>
    <dc:creator>${de(u)}</dc:creator>
    <dc:identifier id="book-id">${de(d)}</dc:identifier>
    ${_}
  </metadata>
  <manifest>
    ${j}
    <item id="ncx" href="toc.ncx" media-type="application/x-dtbncx+xml"/>
    <item id="css" href="style.css" media-type="text/css"/>
  </manifest>
  <spine toc="ncx">
    ${I}
  </spine>
</package>`;
  return await g.add("content.opf", new i(C), Ye), await g.close();
}
function fe(a, e, t, r) {
  if (typeof e == "function" ? a !== e || !r : !e.has(a)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? r : t === "a" ? r.call(a) : r ? r.value : e.get(a);
}
function na(a, e, t, r, n) {
  if (typeof e == "function" ? a !== e || !0 : !e.has(a)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return e.set(a, t), t;
}
var ot, Se, Tt, Fa;
const yi = "__TAURI_TO_IPC_KEY__";
function Yl(a, e = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(a, e);
}
let kf = class {
  constructor(e) {
    ot.set(this, void 0), Se.set(this, 0), Tt.set(this, []), Fa.set(this, void 0), na(this, ot, e || (() => {
    })), this.id = Yl((t) => {
      const r = t.index;
      if ("end" in t) {
        r == fe(this, Se, "f") ? this.cleanupCallback() : na(this, Fa, r);
        return;
      }
      const n = t.message;
      if (r == fe(this, Se, "f")) {
        for (fe(this, ot, "f").call(this, n), na(this, Se, fe(this, Se, "f") + 1); fe(this, Se, "f") in fe(this, Tt, "f"); ) {
          const i = fe(this, Tt, "f")[fe(this, Se, "f")];
          fe(this, ot, "f").call(this, i), delete fe(this, Tt, "f")[fe(this, Se, "f")], na(this, Se, fe(this, Se, "f") + 1);
        }
        fe(this, Se, "f") === fe(this, Fa, "f") && this.cleanupCallback();
      } else
        fe(this, Tt, "f")[r] = n;
    });
  }
  cleanupCallback() {
    window.__TAURI_INTERNALS__.unregisterCallback(this.id);
  }
  set onmessage(e) {
    na(this, ot, e);
  }
  get onmessage() {
    return fe(this, ot, "f");
  }
  [(ot = /* @__PURE__ */ new WeakMap(), Se = /* @__PURE__ */ new WeakMap(), Tt = /* @__PURE__ */ new WeakMap(), Fa = /* @__PURE__ */ new WeakMap(), yi)]() {
    return `__CHANNEL__:${this.id}`;
  }
  toJSON() {
    return this[yi]();
  }
};
async function Xl(a, e = {}, t) {
  return window.__TAURI_INTERNALS__.invoke(a, e, t);
}
async function Ns(a, e) {
  const t = e?.signal;
  t?.throwIfAborted();
  const r = await new Promise((s, o) => {
    const l = () => o(new DOMException("Request cancelled", "AbortError"));
    t?.addEventListener("abort", l, { once: !0 }), Xl("fetch_web_browser_resource", {
      url: a,
      headers: Object.fromEntries(new Headers(e?.headers).entries())
    }).then(s, o).finally(() => t?.removeEventListener("abort", l));
  });
  t?.throwIfAborted();
  const n = Uint8Array.from(atob(r.body), (s) => s.charCodeAt(0)), i = new Response([204, 205, 304].includes(r.status) ? null : n, {
    status: r.status,
    headers: { "content-type": r.contentType }
  });
  return Object.defineProperty(i, "url", { value: r.url }), i;
}
var qr = { exports: {} }, Zl = {}, Ql = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: Zl
}), bi = /* @__PURE__ */ Oo(Ql);
var wi;
function eu() {
  return wi || (wi = 1, (function(a) {
    (function() {
      var e = "input is invalid type", t = "finalize already called", r = typeof window == "object", n = r ? window : {};
      n.JS_MD5_NO_WINDOW && (r = !1);
      var i = !r && typeof self == "object", s = !n.JS_MD5_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
      s ? n = xo : i && (n = self);
      var o = !n.JS_MD5_NO_COMMON_JS && !0 && a.exports, l = !n.JS_MD5_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", u = "0123456789abcdef".split(""), f = [128, 32768, 8388608, -2147483648], d = [0, 8, 16, 24], g = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"], b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), v = [], A;
      if (l) {
        var D = new ArrayBuffer(68);
        A = new Uint8Array(D), v = new Uint32Array(D);
      }
      var x = Array.isArray;
      (n.JS_MD5_NO_NODE_JS || !x) && (x = function(h) {
        return Object.prototype.toString.call(h) === "[object Array]";
      });
      var O = ArrayBuffer.isView;
      l && (n.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW || !O) && (O = function(h) {
        return typeof h == "object" && h.buffer && h.buffer.constructor === ArrayBuffer;
      });
      var _ = function(h) {
        var p = typeof h;
        if (p === "string")
          return [h, !0];
        if (p !== "object" || h === null)
          throw new Error(e);
        if (l && h.constructor === ArrayBuffer)
          return [new Uint8Array(h), !1];
        if (!x(h) && !O(h))
          throw new Error(e);
        return [h, !1];
      }, I = function(h) {
        return function(p) {
          return new L(!0).update(p)[h]();
        };
      }, j = function() {
        var h = I("hex");
        s && (h = C(h)), h.create = function() {
          return new L();
        }, h.update = function(m) {
          return h.create().update(m);
        };
        for (var p = 0; p < g.length; ++p) {
          var y = g[p];
          h[y] = I(y);
        }
        return h;
      }, C = function(h) {
        var p = bi, y = bi.Buffer, m;
        y.from && !n.JS_MD5_NO_BUFFER_FROM ? m = y.from : m = function(N) {
          return new y(N);
        };
        var z = function(N) {
          if (typeof N == "string")
            return p.createHash("md5").update(N, "utf8").digest("hex");
          if (N == null)
            throw new Error(e);
          return N.constructor === ArrayBuffer && (N = new Uint8Array(N)), x(N) || O(N) || N.constructor === y ? p.createHash("md5").update(m(N)).digest("hex") : h(N);
        };
        return z;
      }, S = function(h) {
        return function(p, y) {
          return new M(p, !0).update(y)[h]();
        };
      }, $ = function() {
        var h = S("hex");
        h.create = function(m) {
          return new M(m);
        }, h.update = function(m, z) {
          return h.create(m).update(z);
        };
        for (var p = 0; p < g.length; ++p) {
          var y = g[p];
          h[y] = S(y);
        }
        return h;
      };
      function L(h) {
        if (h)
          v[0] = v[16] = v[1] = v[2] = v[3] = v[4] = v[5] = v[6] = v[7] = v[8] = v[9] = v[10] = v[11] = v[12] = v[13] = v[14] = v[15] = 0, this.blocks = v, this.buffer8 = A;
        else if (l) {
          var p = new ArrayBuffer(68);
          this.buffer8 = new Uint8Array(p), this.blocks = new Uint32Array(p);
        } else
          this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0;
      }
      L.prototype.update = function(h) {
        if (this.finalized)
          throw new Error(t);
        var p = _(h);
        h = p[0];
        for (var y = p[1], m, z = 0, N, R = h.length, U = this.blocks, Q = this.buffer8; z < R; ) {
          if (this.hashed && (this.hashed = !1, U[0] = U[16], U[16] = U[1] = U[2] = U[3] = U[4] = U[5] = U[6] = U[7] = U[8] = U[9] = U[10] = U[11] = U[12] = U[13] = U[14] = U[15] = 0), y)
            if (l)
              for (N = this.start; z < R && N < 64; ++z)
                m = h.charCodeAt(z), m < 128 ? Q[N++] = m : m < 2048 ? (Q[N++] = 192 | m >>> 6, Q[N++] = 128 | m & 63) : m < 55296 || m >= 57344 ? (Q[N++] = 224 | m >>> 12, Q[N++] = 128 | m >>> 6 & 63, Q[N++] = 128 | m & 63) : (m = 65536 + ((m & 1023) << 10 | h.charCodeAt(++z) & 1023), Q[N++] = 240 | m >>> 18, Q[N++] = 128 | m >>> 12 & 63, Q[N++] = 128 | m >>> 6 & 63, Q[N++] = 128 | m & 63);
            else
              for (N = this.start; z < R && N < 64; ++z)
                m = h.charCodeAt(z), m < 128 ? U[N >>> 2] |= m << d[N++ & 3] : m < 2048 ? (U[N >>> 2] |= (192 | m >>> 6) << d[N++ & 3], U[N >>> 2] |= (128 | m & 63) << d[N++ & 3]) : m < 55296 || m >= 57344 ? (U[N >>> 2] |= (224 | m >>> 12) << d[N++ & 3], U[N >>> 2] |= (128 | m >>> 6 & 63) << d[N++ & 3], U[N >>> 2] |= (128 | m & 63) << d[N++ & 3]) : (m = 65536 + ((m & 1023) << 10 | h.charCodeAt(++z) & 1023), U[N >>> 2] |= (240 | m >>> 18) << d[N++ & 3], U[N >>> 2] |= (128 | m >>> 12 & 63) << d[N++ & 3], U[N >>> 2] |= (128 | m >>> 6 & 63) << d[N++ & 3], U[N >>> 2] |= (128 | m & 63) << d[N++ & 3]);
          else if (l)
            for (N = this.start; z < R && N < 64; ++z)
              Q[N++] = h[z];
          else
            for (N = this.start; z < R && N < 64; ++z)
              U[N >>> 2] |= h[z] << d[N++ & 3];
          this.lastByteIndex = N, this.bytes += N - this.start, N >= 64 ? (this.start = N - 64, this.hash(), this.hashed = !0) : this.start = N;
        }
        return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this;
      }, L.prototype.finalize = function() {
        if (!this.finalized) {
          this.finalized = !0;
          var h = this.blocks, p = this.lastByteIndex;
          h[p >>> 2] |= f[p & 3], p >= 56 && (this.hashed || this.hash(), h[0] = h[16], h[16] = h[1] = h[2] = h[3] = h[4] = h[5] = h[6] = h[7] = h[8] = h[9] = h[10] = h[11] = h[12] = h[13] = h[14] = h[15] = 0), h[14] = this.bytes << 3, h[15] = this.hBytes << 3 | this.bytes >>> 29, this.hash();
        }
      }, L.prototype.hash = function() {
        var h, p, y, m, z, N, R = this.blocks;
        this.first ? (h = R[0] - 680876937, h = (h << 7 | h >>> 25) - 271733879 << 0, m = (-1732584194 ^ h & 2004318071) + R[1] - 117830708, m = (m << 12 | m >>> 20) + h << 0, y = (-271733879 ^ m & (h ^ -271733879)) + R[2] - 1126478375, y = (y << 17 | y >>> 15) + m << 0, p = (h ^ y & (m ^ h)) + R[3] - 1316259209, p = (p << 22 | p >>> 10) + y << 0) : (h = this.h0, p = this.h1, y = this.h2, m = this.h3, h += (m ^ p & (y ^ m)) + R[0] - 680876936, h = (h << 7 | h >>> 25) + p << 0, m += (y ^ h & (p ^ y)) + R[1] - 389564586, m = (m << 12 | m >>> 20) + h << 0, y += (p ^ m & (h ^ p)) + R[2] + 606105819, y = (y << 17 | y >>> 15) + m << 0, p += (h ^ y & (m ^ h)) + R[3] - 1044525330, p = (p << 22 | p >>> 10) + y << 0), h += (m ^ p & (y ^ m)) + R[4] - 176418897, h = (h << 7 | h >>> 25) + p << 0, m += (y ^ h & (p ^ y)) + R[5] + 1200080426, m = (m << 12 | m >>> 20) + h << 0, y += (p ^ m & (h ^ p)) + R[6] - 1473231341, y = (y << 17 | y >>> 15) + m << 0, p += (h ^ y & (m ^ h)) + R[7] - 45705983, p = (p << 22 | p >>> 10) + y << 0, h += (m ^ p & (y ^ m)) + R[8] + 1770035416, h = (h << 7 | h >>> 25) + p << 0, m += (y ^ h & (p ^ y)) + R[9] - 1958414417, m = (m << 12 | m >>> 20) + h << 0, y += (p ^ m & (h ^ p)) + R[10] - 42063, y = (y << 17 | y >>> 15) + m << 0, p += (h ^ y & (m ^ h)) + R[11] - 1990404162, p = (p << 22 | p >>> 10) + y << 0, h += (m ^ p & (y ^ m)) + R[12] + 1804603682, h = (h << 7 | h >>> 25) + p << 0, m += (y ^ h & (p ^ y)) + R[13] - 40341101, m = (m << 12 | m >>> 20) + h << 0, y += (p ^ m & (h ^ p)) + R[14] - 1502002290, y = (y << 17 | y >>> 15) + m << 0, p += (h ^ y & (m ^ h)) + R[15] + 1236535329, p = (p << 22 | p >>> 10) + y << 0, h += (y ^ m & (p ^ y)) + R[1] - 165796510, h = (h << 5 | h >>> 27) + p << 0, m += (p ^ y & (h ^ p)) + R[6] - 1069501632, m = (m << 9 | m >>> 23) + h << 0, y += (h ^ p & (m ^ h)) + R[11] + 643717713, y = (y << 14 | y >>> 18) + m << 0, p += (m ^ h & (y ^ m)) + R[0] - 373897302, p = (p << 20 | p >>> 12) + y << 0, h += (y ^ m & (p ^ y)) + R[5] - 701558691, h = (h << 5 | h >>> 27) + p << 0, m += (p ^ y & (h ^ p)) + R[10] + 38016083, m = (m << 9 | m >>> 23) + h << 0, y += (h ^ p & (m ^ h)) + R[15] - 660478335, y = (y << 14 | y >>> 18) + m << 0, p += (m ^ h & (y ^ m)) + R[4] - 405537848, p = (p << 20 | p >>> 12) + y << 0, h += (y ^ m & (p ^ y)) + R[9] + 568446438, h = (h << 5 | h >>> 27) + p << 0, m += (p ^ y & (h ^ p)) + R[14] - 1019803690, m = (m << 9 | m >>> 23) + h << 0, y += (h ^ p & (m ^ h)) + R[3] - 187363961, y = (y << 14 | y >>> 18) + m << 0, p += (m ^ h & (y ^ m)) + R[8] + 1163531501, p = (p << 20 | p >>> 12) + y << 0, h += (y ^ m & (p ^ y)) + R[13] - 1444681467, h = (h << 5 | h >>> 27) + p << 0, m += (p ^ y & (h ^ p)) + R[2] - 51403784, m = (m << 9 | m >>> 23) + h << 0, y += (h ^ p & (m ^ h)) + R[7] + 1735328473, y = (y << 14 | y >>> 18) + m << 0, p += (m ^ h & (y ^ m)) + R[12] - 1926607734, p = (p << 20 | p >>> 12) + y << 0, z = p ^ y, h += (z ^ m) + R[5] - 378558, h = (h << 4 | h >>> 28) + p << 0, m += (z ^ h) + R[8] - 2022574463, m = (m << 11 | m >>> 21) + h << 0, N = m ^ h, y += (N ^ p) + R[11] + 1839030562, y = (y << 16 | y >>> 16) + m << 0, p += (N ^ y) + R[14] - 35309556, p = (p << 23 | p >>> 9) + y << 0, z = p ^ y, h += (z ^ m) + R[1] - 1530992060, h = (h << 4 | h >>> 28) + p << 0, m += (z ^ h) + R[4] + 1272893353, m = (m << 11 | m >>> 21) + h << 0, N = m ^ h, y += (N ^ p) + R[7] - 155497632, y = (y << 16 | y >>> 16) + m << 0, p += (N ^ y) + R[10] - 1094730640, p = (p << 23 | p >>> 9) + y << 0, z = p ^ y, h += (z ^ m) + R[13] + 681279174, h = (h << 4 | h >>> 28) + p << 0, m += (z ^ h) + R[0] - 358537222, m = (m << 11 | m >>> 21) + h << 0, N = m ^ h, y += (N ^ p) + R[3] - 722521979, y = (y << 16 | y >>> 16) + m << 0, p += (N ^ y) + R[6] + 76029189, p = (p << 23 | p >>> 9) + y << 0, z = p ^ y, h += (z ^ m) + R[9] - 640364487, h = (h << 4 | h >>> 28) + p << 0, m += (z ^ h) + R[12] - 421815835, m = (m << 11 | m >>> 21) + h << 0, N = m ^ h, y += (N ^ p) + R[15] + 530742520, y = (y << 16 | y >>> 16) + m << 0, p += (N ^ y) + R[2] - 995338651, p = (p << 23 | p >>> 9) + y << 0, h += (y ^ (p | ~m)) + R[0] - 198630844, h = (h << 6 | h >>> 26) + p << 0, m += (p ^ (h | ~y)) + R[7] + 1126891415, m = (m << 10 | m >>> 22) + h << 0, y += (h ^ (m | ~p)) + R[14] - 1416354905, y = (y << 15 | y >>> 17) + m << 0, p += (m ^ (y | ~h)) + R[5] - 57434055, p = (p << 21 | p >>> 11) + y << 0, h += (y ^ (p | ~m)) + R[12] + 1700485571, h = (h << 6 | h >>> 26) + p << 0, m += (p ^ (h | ~y)) + R[3] - 1894986606, m = (m << 10 | m >>> 22) + h << 0, y += (h ^ (m | ~p)) + R[10] - 1051523, y = (y << 15 | y >>> 17) + m << 0, p += (m ^ (y | ~h)) + R[1] - 2054922799, p = (p << 21 | p >>> 11) + y << 0, h += (y ^ (p | ~m)) + R[8] + 1873313359, h = (h << 6 | h >>> 26) + p << 0, m += (p ^ (h | ~y)) + R[15] - 30611744, m = (m << 10 | m >>> 22) + h << 0, y += (h ^ (m | ~p)) + R[6] - 1560198380, y = (y << 15 | y >>> 17) + m << 0, p += (m ^ (y | ~h)) + R[13] + 1309151649, p = (p << 21 | p >>> 11) + y << 0, h += (y ^ (p | ~m)) + R[4] - 145523070, h = (h << 6 | h >>> 26) + p << 0, m += (p ^ (h | ~y)) + R[11] - 1120210379, m = (m << 10 | m >>> 22) + h << 0, y += (h ^ (m | ~p)) + R[2] + 718787259, y = (y << 15 | y >>> 17) + m << 0, p += (m ^ (y | ~h)) + R[9] - 343485551, p = (p << 21 | p >>> 11) + y << 0, this.first ? (this.h0 = h + 1732584193 << 0, this.h1 = p - 271733879 << 0, this.h2 = y - 1732584194 << 0, this.h3 = m + 271733878 << 0, this.first = !1) : (this.h0 = this.h0 + h << 0, this.h1 = this.h1 + p << 0, this.h2 = this.h2 + y << 0, this.h3 = this.h3 + m << 0);
      }, L.prototype.hex = function() {
        this.finalize();
        var h = this.h0, p = this.h1, y = this.h2, m = this.h3;
        return u[h >>> 4 & 15] + u[h & 15] + u[h >>> 12 & 15] + u[h >>> 8 & 15] + u[h >>> 20 & 15] + u[h >>> 16 & 15] + u[h >>> 28 & 15] + u[h >>> 24 & 15] + u[p >>> 4 & 15] + u[p & 15] + u[p >>> 12 & 15] + u[p >>> 8 & 15] + u[p >>> 20 & 15] + u[p >>> 16 & 15] + u[p >>> 28 & 15] + u[p >>> 24 & 15] + u[y >>> 4 & 15] + u[y & 15] + u[y >>> 12 & 15] + u[y >>> 8 & 15] + u[y >>> 20 & 15] + u[y >>> 16 & 15] + u[y >>> 28 & 15] + u[y >>> 24 & 15] + u[m >>> 4 & 15] + u[m & 15] + u[m >>> 12 & 15] + u[m >>> 8 & 15] + u[m >>> 20 & 15] + u[m >>> 16 & 15] + u[m >>> 28 & 15] + u[m >>> 24 & 15];
      }, L.prototype.toString = L.prototype.hex, L.prototype.digest = function() {
        this.finalize();
        var h = this.h0, p = this.h1, y = this.h2, m = this.h3;
        return [
          h & 255,
          h >>> 8 & 255,
          h >>> 16 & 255,
          h >>> 24 & 255,
          p & 255,
          p >>> 8 & 255,
          p >>> 16 & 255,
          p >>> 24 & 255,
          y & 255,
          y >>> 8 & 255,
          y >>> 16 & 255,
          y >>> 24 & 255,
          m & 255,
          m >>> 8 & 255,
          m >>> 16 & 255,
          m >>> 24 & 255
        ];
      }, L.prototype.array = L.prototype.digest, L.prototype.arrayBuffer = function() {
        this.finalize();
        var h = new ArrayBuffer(16), p = new Uint32Array(h);
        return p[0] = this.h0, p[1] = this.h1, p[2] = this.h2, p[3] = this.h3, h;
      }, L.prototype.buffer = L.prototype.arrayBuffer, L.prototype.base64 = function() {
        for (var h, p, y, m = "", z = this.array(), N = 0; N < 15; )
          h = z[N++], p = z[N++], y = z[N++], m += b[h >>> 2] + b[(h << 4 | p >>> 4) & 63] + b[(p << 2 | y >>> 6) & 63] + b[y & 63];
        return h = z[N], m += b[h >>> 2] + b[h << 4 & 63] + "==", m;
      };
      function M(h, p) {
        var y, m = _(h);
        if (h = m[0], m[1]) {
          var z = [], N = h.length, R = 0, U;
          for (y = 0; y < N; ++y)
            U = h.charCodeAt(y), U < 128 ? z[R++] = U : U < 2048 ? (z[R++] = 192 | U >>> 6, z[R++] = 128 | U & 63) : U < 55296 || U >= 57344 ? (z[R++] = 224 | U >>> 12, z[R++] = 128 | U >>> 6 & 63, z[R++] = 128 | U & 63) : (U = 65536 + ((U & 1023) << 10 | h.charCodeAt(++y) & 1023), z[R++] = 240 | U >>> 18, z[R++] = 128 | U >>> 12 & 63, z[R++] = 128 | U >>> 6 & 63, z[R++] = 128 | U & 63);
          h = z;
        }
        h.length > 64 && (h = new L(!0).update(h).array());
        var Q = [], ae = [];
        for (y = 0; y < 64; ++y) {
          var tt = h[y] || 0;
          Q[y] = 92 ^ tt, ae[y] = 54 ^ tt;
        }
        L.call(this, p), this.update(ae), this.oKeyPad = Q, this.inner = !0, this.sharedMemory = p;
      }
      M.prototype = new L(), M.prototype.finalize = function() {
        if (L.prototype.finalize.call(this), this.inner) {
          this.inner = !1;
          var h = this.array();
          L.call(this, this.sharedMemory), this.update(this.oKeyPad), this.update(h), L.prototype.finalize.call(this);
        }
      };
      var G = j();
      G.md5 = G, G.md5.hmac = $(), o ? a.exports = G : n.md5 = G;
    })();
  })(qr)), qr.exports;
}
var Rs = eu();
const tu = () => Rs.md5(Math.random().toString()), au = (a, e, t, r) => {
  const n = e.replace(/^<break\b[^>]*>/i, "");
  return `
    <speak version="1.0" xml:lang="${a}">
      <voice name="${t}">
        <prosody rate="${r}" >
            ${n}
        </prosody>
      </voice>
    </speak>
  `;
};
class ru extends Error {
}
ru.prototype.name = "InvalidTokenError";
function or(a, e) {
  var t = {};
  for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && e.indexOf(r) < 0 && (t[r] = a[r]);
  if (a != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, r = Object.getOwnPropertySymbols(a); n < r.length; n++)
      e.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(a, r[n]) && (t[r[n]] = a[r[n]]);
  return t;
}
function nu(a, e, t, r) {
  function n(i) {
    return i instanceof t ? i : new t(function(s) {
      s(i);
    });
  }
  return new (t || (t = Promise))(function(i, s) {
    function o(f) {
      try {
        u(r.next(f));
      } catch (d) {
        s(d);
      }
    }
    function l(f) {
      try {
        u(r.throw(f));
      } catch (d) {
        s(d);
      }
    }
    function u(f) {
      f.done ? i(f.value) : n(f.value).then(o, l);
    }
    u((r = r.apply(a, e || [])).next());
  });
}
const iu = (a) => a ? (...e) => a(...e) : (...e) => fetch(...e);
class En extends Error {
  constructor(e, t = "FunctionsError", r) {
    super(e), this.name = t, this.context = r;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      context: this.context
    };
  }
}
class su extends En {
  constructor(e) {
    super("Failed to send a request to the Edge Function", "FunctionsFetchError", e);
  }
}
class vi extends En {
  constructor(e) {
    super("Relay Error invoking the Edge Function", "FunctionsRelayError", e);
  }
}
class _i extends En {
  constructor(e) {
    super("Edge Function returned a non-2xx status code", "FunctionsHttpError", e);
  }
}
var nn;
(function(a) {
  a.Any = "any", a.ApNortheast1 = "ap-northeast-1", a.ApNortheast2 = "ap-northeast-2", a.ApSouth1 = "ap-south-1", a.ApSoutheast1 = "ap-southeast-1", a.ApSoutheast2 = "ap-southeast-2", a.CaCentral1 = "ca-central-1", a.EuCentral1 = "eu-central-1", a.EuWest1 = "eu-west-1", a.EuWest2 = "eu-west-2", a.EuWest3 = "eu-west-3", a.SaEast1 = "sa-east-1", a.UsEast1 = "us-east-1", a.UsWest1 = "us-west-1", a.UsWest2 = "us-west-2";
})(nn || (nn = {}));
class ou {
  /**
   * Creates a new Functions client bound to an Edge Functions URL.
   *
   * @example Using supabase-js (recommended)
   * ```ts
   * import { createClient } from '@supabase/supabase-js'
   *
   * const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key')
   * const { data, error } = await supabase.functions.invoke('hello-world')
   * ```
   *
   * @category Edge Functions
   *
   * @example Standalone import for bundle-sensitive environments
   * ```ts
   * import { FunctionsClient, FunctionRegion } from '@supabase/functions-js'
   *
   * const functions = new FunctionsClient('https://xyzcompany.supabase.co/functions/v1', {
   *   headers: { apikey: 'your-publishable-key' },
   *   region: FunctionRegion.UsEast1,
   * })
   * ```
   */
  constructor(e, { headers: t = {}, customFetch: r, region: n = nn.Any } = {}) {
    this.url = e, this.headers = t, this.region = n, this.fetch = iu(r);
  }
  /**
   * Updates the authorization header
   * @param token - the new jwt token sent in the authorisation header
   *
   * @category Edge Functions
   *
   * @example Setting the authorization header
   * ```ts
   * functions.setAuth(session.access_token)
   * ```
   */
  setAuth(e) {
    this.headers.Authorization = `Bearer ${e}`;
  }
  /**
   * Invokes a function
   * @param functionName - The name of the Function to invoke.
   * @param options - Options for invoking the Function.
   * @example
   * ```ts
   * const { data, error } = await functions.invoke('hello-world', {
   *   body: { name: 'Ada' },
   * })
   * ```
   *
   * @category Edge Functions
   *
   * @remarks
   * - Requires an Authorization header.
   * - Invoke params generally match the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) spec.
   * - When you pass in a body to your function, we automatically attach the Content-Type header for `Blob`, `ArrayBuffer`, `File`, `FormData` and `String`. If it doesn't match any of these types we assume the payload is `json`, serialize it and attach the `Content-Type` header as `application/json`. You can override this behavior by passing in a `Content-Type` header of your own.
   * - Responses are automatically parsed as `json`, `blob` and `form-data` depending on the `Content-Type` header sent by your function. Responses are parsed as `text` by default.
   *
   * @example Basic invocation
   * ```js
   * const { data, error } = await supabase.functions.invoke('hello', {
   *   body: { foo: 'bar' }
   * })
   * ```
   *
   * @exampleDescription Error handling
   * A `FunctionsHttpError` error is returned if your function throws an error, `FunctionsRelayError` if the Supabase Relay has an error processing your function and `FunctionsFetchError` if there is a network error in calling your function.
   *
   * @example Error handling
   * ```js
   * import { FunctionsHttpError, FunctionsRelayError, FunctionsFetchError } from "@supabase/supabase-js";
   *
   * const { data, error } = await supabase.functions.invoke('hello', {
   *   headers: {
   *     "my-custom-header": 'my-custom-header-value'
   *   },
   *   body: { foo: 'bar' }
   * })
   *
   * if (error instanceof FunctionsHttpError) {
   *   const errorMessage = await error.context.json()
   *   console.log('Function returned an error', errorMessage)
   * } else if (error instanceof FunctionsRelayError) {
   *   console.log('Relay error:', error.message)
   * } else if (error instanceof FunctionsFetchError) {
   *   console.log('Fetch error:', error.message)
   * }
   * ```
   *
   * @exampleDescription Passing custom headers
   * You can pass custom headers to your function. Note: supabase-js automatically passes the `Authorization` header with the signed in user's JWT.
   *
   * @example Passing custom headers
   * ```js
   * const { data, error } = await supabase.functions.invoke('hello', {
   *   headers: {
   *     "my-custom-header": 'my-custom-header-value'
   *   },
   *   body: { foo: 'bar' }
   * })
   * ```
   *
   * @exampleDescription Calling with DELETE HTTP verb
   * You can also set the HTTP verb to `DELETE` when calling your Edge Function.
   *
   * @example Calling with DELETE HTTP verb
   * ```js
   * const { data, error } = await supabase.functions.invoke('hello', {
   *   headers: {
   *     "my-custom-header": 'my-custom-header-value'
   *   },
   *   body: { foo: 'bar' },
   *   method: 'DELETE'
   * })
   * ```
   *
   * @exampleDescription Invoking a Function in the UsEast1 region
   * Here are the available regions:
   * - `FunctionRegion.Any`
   * - `FunctionRegion.ApNortheast1`
   * - `FunctionRegion.ApNortheast2`
   * - `FunctionRegion.ApSouth1`
   * - `FunctionRegion.ApSoutheast1`
   * - `FunctionRegion.ApSoutheast2`
   * - `FunctionRegion.CaCentral1`
   * - `FunctionRegion.EuCentral1`
   * - `FunctionRegion.EuWest1`
   * - `FunctionRegion.EuWest2`
   * - `FunctionRegion.EuWest3`
   * - `FunctionRegion.SaEast1`
   * - `FunctionRegion.UsEast1`
   * - `FunctionRegion.UsWest1`
   * - `FunctionRegion.UsWest2`
   *
   * @example Invoking a Function in the UsEast1 region
   * ```js
   * import { createClient, FunctionRegion } from '@supabase/supabase-js'
   *
   * const { data, error } = await supabase.functions.invoke('hello', {
   *   body: { foo: 'bar' },
   *   region: FunctionRegion.UsEast1
   * })
   * ```
   *
   * @exampleDescription Calling with GET HTTP verb
   * You can also set the HTTP verb to `GET` when calling your Edge Function.
   *
   * @example Calling with GET HTTP verb
   * ```js
   * const { data, error } = await supabase.functions.invoke('hello', {
   *   headers: {
   *     "my-custom-header": 'my-custom-header-value'
   *   },
   *   method: 'GET'
   * })
   * ```
   *
   * @example Standalone client invoke
   * ```ts
   * const { data, error } = await functions.invoke('hello-world', {
   *   body: { name: 'Ada' },
   * })
   * ```
   */
  invoke(e) {
    return nu(this, arguments, void 0, function* (t, r = {}) {
      var n;
      let i, s;
      try {
        const { headers: o, method: l, body: u, signal: f, timeout: d } = r;
        let g = {}, { region: b } = r;
        b || (b = this.region);
        const v = new URL(`${this.url}/${t}`);
        b && b !== "any" && (g["x-region"] = b, v.searchParams.set("forceFunctionRegion", b));
        let A;
        u && (o && !Object.prototype.hasOwnProperty.call(o, "Content-Type") || !o) ? typeof Blob < "u" && u instanceof Blob || u instanceof ArrayBuffer ? (g["Content-Type"] = "application/octet-stream", A = u) : typeof u == "string" ? (g["Content-Type"] = "text/plain", A = u) : typeof FormData < "u" && u instanceof FormData ? A = u : (g["Content-Type"] = "application/json", A = JSON.stringify(u)) : u && typeof u != "string" && !(typeof Blob < "u" && u instanceof Blob) && !(u instanceof ArrayBuffer) && !(typeof FormData < "u" && u instanceof FormData) ? A = JSON.stringify(u) : A = u;
        let D = f;
        d && (s = new AbortController(), i = setTimeout(() => s.abort(), d), f ? (D = s.signal, f.addEventListener("abort", () => s.abort())) : D = s.signal);
        const x = yield this.fetch(v.toString(), {
          method: l || "POST",
          // headers priority is (high to low):
          // 1. invoke-level headers
          // 2. client-level headers
          // 3. default Content-Type header
          headers: Object.assign(Object.assign(Object.assign({}, g), this.headers), o),
          body: A,
          signal: D
        }).catch((j) => {
          throw new su(j);
        }), O = x.headers.get("x-relay-error");
        if (O && O === "true")
          throw new vi(x);
        if (!x.ok)
          throw new _i(x);
        let _ = ((n = x.headers.get("Content-Type")) !== null && n !== void 0 ? n : "text/plain").split(";")[0].trim(), I;
        return _ === "application/json" ? I = yield x.json() : _ === "application/octet-stream" || _ === "application/pdf" ? I = yield x.blob() : _ === "text/event-stream" ? I = x : _ === "multipart/form-data" ? I = yield x.formData() : I = yield x.text(), { data: I, error: null, response: x };
      } catch (o) {
        return {
          data: null,
          error: o,
          response: o instanceof _i || o instanceof vi ? o.context : void 0
        };
      } finally {
        i && clearTimeout(i);
      }
    });
  }
}
const Cs = 3, ki = (a) => Math.min(1e3 * 2 ** a, 3e4), lu = [520, 503], xs = [
  "GET",
  "HEAD",
  "OPTIONS"
];
var uu = class extends Error {
  /**
  * @example
  * ```ts
  * import PostgrestError from '@supabase/postgrest-js'
  *
  * throw new PostgrestError({
  *   message: 'Row level security prevented the request',
  *   details: 'RLS denied the insert',
  *   hint: 'Check your policies',
  *   code: 'PGRST301',
  * })
  * ```
  */
  constructor(a) {
    super(a.message), this.name = "PostgrestError", this.details = a.details, this.hint = a.hint, this.code = a.code;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      details: this.details,
      hint: this.hint,
      code: this.code
    };
  }
};
function Ei(a, e) {
  return new Promise((t) => {
    if (e?.aborted) {
      t();
      return;
    }
    const r = setTimeout(() => {
      e?.removeEventListener("abort", n), t();
    }, a);
    function n() {
      clearTimeout(r), t();
    }
    e?.addEventListener("abort", n);
  });
}
function cu(a, e, t, r) {
  return !(!r || t >= Cs || !xs.includes(a) || !lu.includes(e));
}
var hu = class {
  /**
  * Creates a builder configured for a specific PostgREST request.
  *
  * @example Using supabase-js (recommended)
  * ```ts
  * import { createClient } from '@supabase/supabase-js'
  *
  * const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key')
  * const { data, error } = await supabase.from('users').select('*')
  * ```
  *
  * @category Database
  *
  * @example Standalone import for bundle-sensitive environments
  * ```ts
  * import { PostgrestQueryBuilder } from '@supabase/postgrest-js'
  *
  * const builder = new PostgrestQueryBuilder(
  *   new URL('https://xyzcompany.supabase.co/rest/v1/users'),
  *   { headers: new Headers({ apikey: 'your-publishable-key' }) }
  * )
  * ```
  */
  constructor(a) {
    var e, t, r, n, i;
    this.shouldThrowOnError = !1, this.retryEnabled = !0, this.method = a.method, this.url = a.url, this.headers = new Headers(a.headers), this.schema = a.schema, this.body = a.body, this.shouldThrowOnError = (e = a.shouldThrowOnError) !== null && e !== void 0 ? e : !1, this.signal = a.signal, this.isMaybeSingle = (t = a.isMaybeSingle) !== null && t !== void 0 ? t : !1, this.shouldStripNulls = (r = a.shouldStripNulls) !== null && r !== void 0 ? r : !1, this.urlLengthLimit = (n = a.urlLengthLimit) !== null && n !== void 0 ? n : 8e3, this.retryEnabled = (i = a.retry) !== null && i !== void 0 ? i : !0, a.fetch ? this.fetch = a.fetch : this.fetch = fetch;
  }
  /**
  * If there's an error with the query, throwOnError will reject the promise by
  * throwing the error instead of returning it as part of a successful response.
  *
  * {@link https://github.com/supabase/supabase-js/issues/92}
  *
  * @category Database
  */
  throwOnError() {
    return this.shouldThrowOnError = !0, this;
  }
  /**
  * Strip null values from the response data. Properties with `null` values
  * will be omitted from the returned JSON objects.
  *
  * Requires PostgREST 11.2.0+.
  *
  * {@link https://docs.postgrest.org/en/stable/references/api/resource_representation.html#stripped-nulls}
  *
  * @category Database
  * @subcategory Using modifiers
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select()
  *   .stripNulls()
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text, bio text);
  *
  * insert into
  *   characters (id, name, bio)
  * values
  *   (1, 'Luke', null),
  *   (2, 'Leia', 'Princess of Alderaan');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "name": "Luke"
  *     },
  *     {
  *       "id": 2,
  *       "name": "Leia",
  *       "bio": "Princess of Alderaan"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  stripNulls() {
    if (this.headers.get("Accept") === "text/csv") throw new Error("stripNulls() cannot be used with csv()");
    return this.shouldStripNulls = !0, this;
  }
  /**
  * Set an HTTP header for the request.
  *
  * @category Database
  */
  setHeader(a, e) {
    return this.headers = new Headers(this.headers), this.headers.set(a, e), this;
  }
  /**
  * @category Database
  *
  * Configure retry behavior for this request.
  *
  * By default, retries are enabled for idempotent requests (GET, HEAD, OPTIONS)
  * that fail with network errors or specific HTTP status codes (503, 520).
  * Retries use exponential backoff (1s, 2s, 4s) with a maximum of 3 attempts.
  *
  * @param enabled - Whether to enable retries for this request
  *
  * @example
  * ```ts
  * // Disable retries for a specific query
  * const { data, error } = await supabase
  *   .from('users')
  *   .select()
  *   .retry(false)
  * ```
  */
  retry(a) {
    return this.retryEnabled = a, this;
  }
  then(a, e) {
    var t = this;
    if (this.schema === void 0 || (["GET", "HEAD"].includes(this.method) ? this.headers.set("Accept-Profile", this.schema) : this.headers.set("Content-Profile", this.schema)), this.method !== "GET" && this.method !== "HEAD" && this.headers.set("Content-Type", "application/json"), this.shouldStripNulls) {
      const s = this.headers.get("Accept");
      s === "application/vnd.pgrst.object+json" ? this.headers.set("Accept", "application/vnd.pgrst.object+json;nulls=stripped") : (!s || s === "application/json") && this.headers.set("Accept", "application/vnd.pgrst.array+json;nulls=stripped");
    }
    const r = this.fetch;
    let i = (async () => {
      let s = 0;
      for (; ; ) {
        const u = new Headers(t.headers);
        s > 0 && u.set("X-Retry-Count", String(s));
        let f;
        try {
          f = await r(t.url.toString(), {
            method: t.method,
            headers: u,
            body: JSON.stringify(t.body, (d, g) => typeof g == "bigint" ? g.toString() : g),
            signal: t.signal
          });
        } catch (d) {
          if (d?.name === "AbortError" || d?.code === "ABORT_ERR" || !xs.includes(t.method)) throw d;
          if (t.retryEnabled && s < Cs) {
            const g = ki(s);
            s++, await Ei(g, t.signal);
            continue;
          }
          throw d;
        }
        if (cu(t.method, f.status, s, t.retryEnabled)) {
          var o, l;
          const d = (o = (l = f.headers) === null || l === void 0 ? void 0 : l.get("Retry-After")) !== null && o !== void 0 ? o : null, g = d !== null ? Math.max(0, parseInt(d, 10) || 0) * 1e3 : ki(s);
          await f.text(), s++, await Ei(g, t.signal);
          continue;
        }
        return await t.processResponse(f);
      }
    })();
    return this.shouldThrowOnError || (i = i.catch((s) => {
      var o;
      let l = "", u = "", f = "";
      const d = s?.cause;
      if (d) {
        var g, b, v, A;
        const O = (g = d?.message) !== null && g !== void 0 ? g : "", _ = (b = d?.code) !== null && b !== void 0 ? b : "";
        l = `${(v = s?.name) !== null && v !== void 0 ? v : "FetchError"}: ${s?.message}`, l += `

Caused by: ${(A = d?.name) !== null && A !== void 0 ? A : "Error"}: ${O}`, _ && (l += ` (${_})`), d?.stack && (l += `
${d.stack}`);
      } else {
        var D;
        l = (D = s?.stack) !== null && D !== void 0 ? D : "";
      }
      const x = this.url.toString().length;
      return s?.name === "AbortError" || s?.code === "ABORT_ERR" ? (f = "", u = "Request was aborted (timeout or manual cancellation)", x > this.urlLengthLimit && (u += `. Note: Your request URL is ${x} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`)) : (d?.name === "HeadersOverflowError" || d?.code === "UND_ERR_HEADERS_OVERFLOW") && (f = "", u = "HTTP headers exceeded server limits (typically 16KB)", x > this.urlLengthLimit && (u += `. Your request URL is ${x} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)), {
        success: !1,
        error: {
          message: `${(o = s?.name) !== null && o !== void 0 ? o : "FetchError"}: ${s?.message}`,
          details: l,
          hint: u,
          code: f
        },
        data: null,
        count: null,
        status: 0,
        statusText: ""
      };
    })), i.then(a, e);
  }
  /**
  * Process a fetch response and return the standardized postgrest response.
  */
  async processResponse(a) {
    var e = this;
    let t = null, r = null, n = null, i = a.status, s = a.statusText;
    if (a.ok) {
      var o, l;
      if (e.method !== "HEAD") {
        var u;
        const g = await a.text();
        g === "" || (e.headers.get("Accept") === "text/csv" || e.headers.get("Accept") && (!((u = e.headers.get("Accept")) === null || u === void 0) && u.includes("application/vnd.pgrst.plan+text")) ? r = g : r = JSON.parse(g));
      }
      const f = (o = e.headers.get("Prefer")) === null || o === void 0 ? void 0 : o.match(/count=(exact|planned|estimated)/), d = (l = a.headers.get("content-range")) === null || l === void 0 ? void 0 : l.split("/");
      f && d && d.length > 1 && (n = parseInt(d[1])), e.isMaybeSingle && Array.isArray(r) && (r.length > 1 ? (t = {
        code: "PGRST116",
        details: `Results contain ${r.length} rows, application/vnd.pgrst.object+json requires 1 row`,
        hint: null,
        message: "JSON object requested, multiple (or no) rows returned"
      }, r = null, n = null, i = 406, s = "Not Acceptable") : r.length === 1 ? r = r[0] : r = null);
    } else {
      const f = await a.text();
      try {
        t = JSON.parse(f), Array.isArray(t) && a.status === 404 && (r = [], t = null, i = 200, s = "OK");
      } catch {
        a.status === 404 && f === "" ? (i = 204, s = "No Content") : t = { message: f };
      }
      if (t && e.shouldThrowOnError) throw new uu(t);
    }
    return {
      success: t === null,
      error: t,
      data: r,
      count: n,
      status: i,
      statusText: s
    };
  }
  /**
  * Override the type of the returned `data`.
  *
  * @typeParam NewResult - The new result type to override with
  * @deprecated Use overrideTypes<yourType, { merge: false }>() method at the end of your call chain instead
  *
  * @category Database
  */
  returns() {
    return this;
  }
  /**
  * Override the type of the returned `data` field in the response.
  *
  * @typeParam NewResult - The new type to cast the response data to
  * @typeParam Options - Optional type configuration (defaults to { merge: true })
  * @typeParam Options.merge - When true, merges the new type with existing return type. When false, replaces the existing types entirely (defaults to true)
  * @example
  * ```typescript
  * // Merge with existing types (default behavior)
  * const query = supabase
  *   .from('users')
  *   .select()
  *   .overrideTypes<{ custom_field: string }>()
  *
  * // Replace existing types completely
  * const replaceQuery = supabase
  *   .from('users')
  *   .select()
  *   .overrideTypes<{ id: number; name: string }, { merge: false }>()
  * ```
  * @returns A PostgrestBuilder instance with the new type
  *
  * @category Database
  * @subcategory Using modifiers
  *
  * @example Complete Override type of successful response
  * ```ts
  * const { data } = await supabase
  *   .from('countries')
  *   .select()
  *   .overrideTypes<Array<MyType>, { merge: false }>()
  * ```
  *
  * @exampleResponse Complete Override type of successful response
  * ```ts
  * let x: typeof data // MyType[]
  * ```
  *
  * @example Complete Override type of object response
  * ```ts
  * const { data } = await supabase
  *   .from('countries')
  *   .select()
  *   .maybeSingle()
  *   .overrideTypes<MyType, { merge: false }>()
  * ```
  *
  * @exampleResponse Complete Override type of object response
  * ```ts
  * let x: typeof data // MyType | null
  * ```
  *
  * @example Partial Override type of successful response
  * ```ts
  * const { data } = await supabase
  *   .from('countries')
  *   .select()
  *   .overrideTypes<Array<{ status: "A" | "B" }>>()
  * ```
  *
  * @exampleResponse Partial Override type of successful response
  * ```ts
  * let x: typeof data // Array<CountryRowProperties & { status: "A" | "B" }>
  * ```
  *
  * @example Partial Override type of object response
  * ```ts
  * const { data } = await supabase
  *   .from('countries')
  *   .select()
  *   .maybeSingle()
  *   .overrideTypes<{ status: "A" | "B" }>()
  * ```
  *
  * @exampleResponse Partial Override type of object response
  * ```ts
  * let x: typeof data // CountryRowProperties & { status: "A" | "B" } | null
  * ```
  *
  * @example Merge vs replace existing types
  * ```typescript
  * // Merge with existing types (default behavior)
  * const query = supabase
  *   .from('users')
  *   .select()
  *   .overrideTypes<{ custom_field: string }>()
  *
  * // Replace existing types completely
  * const replaceQuery = supabase
  *   .from('users')
  *   .select()
  *   .overrideTypes<{ id: number; name: string }, { merge: false }>()
  * ```
  */
  overrideTypes() {
    return this;
  }
}, du = class extends hu {
  /**
  * Perform a SELECT on the query result.
  *
  * By default, `.insert()`, `.update()`, `.upsert()`, and `.delete()` do not
  * return modified rows. By calling this method, modified rows are returned in
  * `data`.
  *
  * @param columns - The columns to retrieve, separated by commas
  *
  * @category Database
  * @subcategory Using modifiers
  *
  * @example With `upsert()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .upsert({ id: 1, name: 'Han Solo' })
  *   .select()
  * ```
  *
  * @exampleSql With `upsert()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Han');
  * ```
  *
  * @exampleResponse With `upsert()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "name": "Han Solo"
  *     }
  *   ],
  *   "status": 201,
  *   "statusText": "Created"
  * }
  * ```
  */
  select(a) {
    let e = !1;
    const t = (a ?? "*").split("").map((r) => /\s/.test(r) && !e ? "" : (r === '"' && (e = !e), r)).join("");
    return this.url.searchParams.set("select", t), this.headers.append("Prefer", "return=representation"), this;
  }
  /**
  * Order the query result by `column`.
  *
  * You can call this method multiple times to order by multiple columns.
  *
  * You can order referenced tables, but it only affects the ordering of the
  * parent table if you use `!inner` in the query.
  *
  * @param column - The column to order by
  * @param options - Named parameters
  * @param options.ascending - If `true`, the result will be in ascending order
  * @param options.nullsFirst - If `true`, `null`s appear first. If `false`,
  * `null`s appear last.
  * @param options.referencedTable - Set this to order a referenced table by
  * its columns
  * @param options.foreignTable - Deprecated, use `options.referencedTable`
  * instead
  *
  * @category Database
  * @subcategory Using modifiers
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select('id, name')
  *   .order('id', { ascending: false })
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 3,
  *       "name": "Han"
  *     },
  *     {
  *       "id": 2,
  *       "name": "Leia"
  *     },
  *     {
  *       "id": 1,
  *       "name": "Luke"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @exampleDescription On a referenced table
  * Ordering with `referencedTable` doesn't affect the ordering of the
  * parent table.
  *
  * @example On a referenced table
  * ```ts
  *   const { data, error } = await supabase
  *     .from('orchestral_sections')
  *     .select(`
  *       name,
  *       instruments (
  *         name
  *       )
  *     `)
  *     .order('name', { referencedTable: 'instruments', ascending: false })
  *
  * ```
  *
  * @exampleSql On a referenced table
  * ```sql
  * create table
  *   orchestral_sections (id int8 primary key, name text);
  * create table
  *   instruments (
  *     id int8 primary key,
  *     section_id int8 not null references orchestral_sections,
  *     name text
  *   );
  *
  * insert into
  *   orchestral_sections (id, name)
  * values
  *   (1, 'strings'),
  *   (2, 'woodwinds');
  * insert into
  *   instruments (id, section_id, name)
  * values
  *   (1, 1, 'harp'),
  *   (2, 1, 'violin');
  * ```
  *
  * @exampleResponse On a referenced table
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "strings",
  *       "instruments": [
  *         {
  *           "name": "violin"
  *         },
  *         {
  *           "name": "harp"
  *         }
  *       ]
  *     },
  *     {
  *       "name": "woodwinds",
  *       "instruments": []
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @exampleDescription Order parent table by a referenced table
  * Ordering with `referenced_table(col)` affects the ordering of the
  * parent table.
  *
  * @example Order parent table by a referenced table
  * ```ts
  *   const { data, error } = await supabase
  *     .from('instruments')
  *     .select(`
  *       name,
  *       section:orchestral_sections (
  *         name
  *       )
  *     `)
  *     .order('section(name)', { ascending: true })
  *
  * ```
  *
  * @exampleSql Order parent table by a referenced table
  * ```sql
  * create table
  *   orchestral_sections (id int8 primary key, name text);
  * create table
  *   instruments (
  *     id int8 primary key,
  *     section_id int8 not null references orchestral_sections,
  *     name text
  *   );
  *
  * insert into
  *   orchestral_sections (id, name)
  * values
  *   (1, 'strings'),
  *   (2, 'woodwinds');
  * insert into
  *   instruments (id, section_id, name)
  * values
  *   (1, 2, 'flute'),
  *   (2, 1, 'violin');
  * ```
  *
  * @exampleResponse Order parent table by a referenced table
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "violin",
  *       "orchestral_sections": {"name": "strings"}
  *     },
  *     {
  *       "name": "flute",
  *       "orchestral_sections": {"name": "woodwinds"}
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  order(a, { ascending: e = !0, nullsFirst: t, foreignTable: r, referencedTable: n = r } = {}) {
    const i = n ? `${n}.order` : "order", s = this.url.searchParams.get(i);
    return this.url.searchParams.set(i, `${s ? `${s},` : ""}${a}.${e ? "asc" : "desc"}${t === void 0 ? "" : t ? ".nullsfirst" : ".nullslast"}`), this;
  }
  /**
  * Limit the query result by `count`.
  *
  * @param count - The maximum number of rows to return
  * @param options - Named parameters
  * @param options.referencedTable - Set this to limit rows of referenced
  * tables instead of the parent table
  * @param options.foreignTable - Deprecated, use `options.referencedTable`
  * instead
  *
  * @category Database
  * @subcategory Using modifiers
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select('name')
  *   .limit(1)
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "Luke"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @example On a referenced table
  * ```ts
  * const { data, error } = await supabase
  *   .from('orchestral_sections')
  *   .select(`
  *     name,
  *     instruments (
  *       name
  *     )
  *   `)
  *   .limit(1, { referencedTable: 'instruments' })
  * ```
  *
  * @exampleSql On a referenced table
  * ```sql
  * create table
  *   orchestral_sections (id int8 primary key, name text);
  * create table
  *   instruments (
  *     id int8 primary key,
  *     section_id int8 not null references orchestral_sections,
  *     name text
  *   );
  *
  * insert into
  *   orchestral_sections (id, name)
  * values
  *   (1, 'strings');
  * insert into
  *   instruments (id, section_id, name)
  * values
  *   (1, 1, 'harp'),
  *   (2, 1, 'violin');
  * ```
  *
  * @exampleResponse On a referenced table
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "strings",
  *       "instruments": [
  *         {
  *           "name": "violin"
  *         }
  *       ]
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  limit(a, { foreignTable: e, referencedTable: t = e } = {}) {
    const r = typeof t > "u" ? "limit" : `${t}.limit`;
    return this.url.searchParams.set(r, `${a}`), this;
  }
  /**
  * Limit the query result by starting at an offset `from` and ending at the offset `to`.
  * Only records within this range are returned.
  * This respects the query order and if there is no order clause the range could behave unexpectedly.
  * The `from` and `to` values are 0-based and inclusive: `range(1, 3)` will include the second, third
  * and fourth rows of the query.
  *
  * @param from - The starting index from which to limit the result
  * @param to - The last index to which to limit the result
  * @param options - Named parameters
  * @param options.referencedTable - Set this to limit rows of referenced
  * tables instead of the parent table
  * @param options.foreignTable - Deprecated, use `options.referencedTable`
  * instead
  *
  * @category Database
  * @subcategory Using modifiers
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select('name')
  *   .range(0, 1)
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "Luke"
  *     },
  *     {
  *       "name": "Leia"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  range(a, e, { foreignTable: t, referencedTable: r = t } = {}) {
    const n = typeof r > "u" ? "offset" : `${r}.offset`, i = typeof r > "u" ? "limit" : `${r}.limit`;
    return this.url.searchParams.set(n, `${a}`), this.url.searchParams.set(i, `${e - a + 1}`), this;
  }
  /**
  * Set the AbortSignal for the fetch request.
  *
  * @param signal - The AbortSignal to use for the fetch request
  *
  * @category Database
  * @subcategory Using modifiers
  *
  * @remarks
  * You can use this to set a timeout for the request.
  *
  * @exampleDescription Aborting requests in-flight
  * You can use an [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) to abort requests.
  * Note that `status` and `statusText` don't mean anything for aborted requests as the request wasn't fulfilled.
  *
  * @example Aborting requests in-flight
  * ```ts
  * const ac = new AbortController()
  *
  * const { data, error } = await supabase
  *   .from('very_big_table')
  *   .select()
  *   .abortSignal(ac.signal)
  *
  * // Abort the request after 100 ms
  * setTimeout(() => ac.abort(), 100)
  * ```
  *
  * @exampleResponse Aborting requests in-flight
  * ```json
  *   {
  *     "error": {
  *       "message": "AbortError: The user aborted a request.",
  *       "details": "",
  *       "hint": "The request was aborted locally via the provided AbortSignal.",
  *       "code": ""
  *     },
  *     "status": 0,
  *     "statusText": ""
  *   }
  *
  * ```
  *
  * @example Set a timeout
  * ```ts
  * const { data, error } = await supabase
  *   .from('very_big_table')
  *   .select()
  *   .abortSignal(AbortSignal.timeout(1000 /* ms *\/))
  * ```
  *
  * @exampleResponse Set a timeout
  * ```json
  *   {
  *     "error": {
  *       "message": "FetchError: The user aborted a request.",
  *       "details": "",
  *       "hint": "",
  *       "code": ""
  *     },
  *     "status": 400,
  *     "statusText": "Bad Request"
  *   }
  *
  * ```
  */
  abortSignal(a) {
    return this.signal = a, this;
  }
  /**
  * Return `data` as a single object instead of an array of objects.
  *
  * Query result must be one row (e.g. using `.limit(1)`), otherwise this
  * returns an error.
  *
  * @category Database
  * @subcategory Using modifiers
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select('name')
  *   .limit(1)
  *   .single()
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": {
  *     "name": "Luke"
  *   },
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  single() {
    return this.headers.set("Accept", "application/vnd.pgrst.object+json"), this;
  }
  /**
  * Return `data` as a single object instead of an array of objects.
  *
  * Query result must be zero or one row (e.g. using `.limit(1)`), otherwise
  * this returns an error.
  *
  * @category Database
  * @subcategory Using modifiers
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select()
  *   .eq('name', 'Katniss')
  *   .maybeSingle()
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  maybeSingle() {
    return this.isMaybeSingle = !0, this;
  }
  /**
  * Return `data` as a string in CSV format.
  *
  * @category Database
  * @subcategory Using modifiers
  *
  * @exampleDescription Return data as CSV
  * By default, the data is returned in JSON format, but can also be returned as Comma Separated Values.
  *
  * @example Return data as CSV
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select()
  *   .csv()
  * ```
  *
  * @exampleSql Return data as CSV
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse Return data as CSV
  * ```json
  * {
  *   "data": "id,name\n1,Luke\n2,Leia\n3,Han",
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  csv() {
    return this.headers.set("Accept", "text/csv"), this;
  }
  /**
  * Return `data` as an object in [GeoJSON](https://geojson.org) format.
  *
  * @category Database
  */
  geojson() {
    return this.headers.set("Accept", "application/geo+json"), this;
  }
  /**
  * Return `data` as the EXPLAIN plan for the query.
  *
  * You need to enable the
  * [db_plan_enabled](https://supabase.com/docs/guides/database/debugging-performance#enabling-explain)
  * setting before using this method.
  *
  * @param options - Named parameters
  *
  * @param options.analyze - If `true`, the query will be executed and the
  * actual run time will be returned
  *
  * @param options.verbose - If `true`, the query identifier will be returned
  * and `data` will include the output columns of the query
  *
  * @param options.settings - If `true`, include information on configuration
  * parameters that affect query planning
  *
  * @param options.buffers - If `true`, include information on buffer usage
  *
  * @param options.wal - If `true`, include information on WAL record generation
  *
  * @param options.format - The format of the output, can be `"text"` (default)
  * or `"json"`
  *
  * @category Database
  * @subcategory Using modifiers
  *
  * @exampleDescription Get the execution plan
  * By default, the data is returned in TEXT format, but can also be returned as JSON by using the `format` parameter.
  *
  * @example Get the execution plan
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select()
  *   .explain()
  * ```
  *
  * @exampleSql Get the execution plan
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse Get the execution plan
  * ```js
  * Aggregate  (cost=33.34..33.36 rows=1 width=112)
  *   ->  Limit  (cost=0.00..18.33 rows=1000 width=40)
  *         ->  Seq Scan on characters  (cost=0.00..22.00 rows=1200 width=40)
  * ```
  *
  * @exampleDescription Get the execution plan with analyze and verbose
  * By default, the data is returned in TEXT format, but can also be returned as JSON by using the `format` parameter.
  *
  * @example Get the execution plan with analyze and verbose
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select()
  *   .explain({analyze:true,verbose:true})
  * ```
  *
  * @exampleSql Get the execution plan with analyze and verbose
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse Get the execution plan with analyze and verbose
  * ```js
  * Aggregate  (cost=33.34..33.36 rows=1 width=112) (actual time=0.041..0.041 rows=1 loops=1)
  *   Output: NULL::bigint, count(ROW(characters.id, characters.name)), COALESCE(json_agg(ROW(characters.id, characters.name)), '[]'::json), NULLIF(current_setting('response.headers'::text, true), ''::text), NULLIF(current_setting('response.status'::text, true), ''::text)
  *   ->  Limit  (cost=0.00..18.33 rows=1000 width=40) (actual time=0.005..0.006 rows=3 loops=1)
  *         Output: characters.id, characters.name
  *         ->  Seq Scan on public.characters  (cost=0.00..22.00 rows=1200 width=40) (actual time=0.004..0.005 rows=3 loops=1)
  *               Output: characters.id, characters.name
  * Query Identifier: -4730654291623321173
  * Planning Time: 0.407 ms
  * Execution Time: 0.119 ms
  * ```
  */
  explain({ analyze: a = !1, verbose: e = !1, settings: t = !1, buffers: r = !1, wal: n = !1, format: i = "text" } = {}) {
    var s;
    const o = [
      a ? "analyze" : null,
      e ? "verbose" : null,
      t ? "settings" : null,
      r ? "buffers" : null,
      n ? "wal" : null
    ].filter(Boolean).join("|"), l = (s = this.headers.get("Accept")) !== null && s !== void 0 ? s : "application/json";
    return this.headers.set("Accept", `application/vnd.pgrst.plan+${i}; for="${l}"; options=${o};`), i === "json" ? this : this;
  }
  /**
  * Rollback the query.
  *
  * `data` will still be returned, but the query is not committed.
  *
  * @category Database
  */
  rollback() {
    return this.headers.append("Prefer", "tx=rollback"), this;
  }
  /**
  * Override the type of the returned `data`.
  *
  * @typeParam NewResult - The new result type to override with
  * @deprecated Use overrideTypes<yourType, { merge: false }>() method at the end of your call chain instead
  *
  * @category Database
  * @subcategory Using modifiers
  *
  * @remarks
  * - Deprecated: use overrideTypes method instead
  *
  * @example Override type of successful response
  * ```ts
  * const { data } = await supabase
  *   .from('countries')
  *   .select()
  *   .returns<Array<MyType>>()
  * ```
  *
  * @exampleResponse Override type of successful response
  * ```js
  * let x: typeof data // MyType[]
  * ```
  *
  * @example Override type of object response
  * ```ts
  * const { data } = await supabase
  *   .from('countries')
  *   .select()
  *   .maybeSingle()
  *   .returns<MyType>()
  * ```
  *
  * @exampleResponse Override type of object response
  * ```js
  * let x: typeof data // MyType | null
  * ```
  */
  returns() {
    return this;
  }
  /**
  * Set the maximum number of rows that can be affected by the query.
  * Only available in PostgREST v13+ and only works with PATCH and DELETE methods.
  *
  * @param value - The maximum number of rows that can be affected
  *
  * @category Database
  */
  maxAffected(a) {
    return this.headers.append("Prefer", "handling=strict"), this.headers.append("Prefer", `max-affected=${a}`), this;
  }
};
const Ai = /* @__PURE__ */ new RegExp("[,()]");
var It = class extends du {
  /**
  * Match only rows where `column` is equal to `value`.
  *
  * To check if the value of `column` is NULL, you should use `.is()` instead.
  *
  * @param column - The column to filter on
  * @param value - The value to filter with
  *
  * @category Database
  * @subcategory Using filters
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select()
  *   .eq('name', 'Leia')
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 2,
  *       "name": "Leia"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  eq(a, e) {
    return this.url.searchParams.append(a, `eq.${e}`), this;
  }
  /**
  * Match only rows where `column` is not equal to `value`.
  *
  * @param column - The column to filter on
  * @param value - The value to filter with
  *
  * @category Database
  * @subcategory Using filters
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select()
  *   .neq('name', 'Leia')
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "name": "Luke"
  *     },
  *     {
  *       "id": 3,
  *       "name": "Han"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  neq(a, e) {
    return this.url.searchParams.append(a, `neq.${e}`), this;
  }
  /**
  * Match only rows where `column` is greater than `value`.
  *
  * @param column - The column to filter on
  * @param value - The value to filter with
  *
  * @category Database
  * @subcategory Using filters
  *
  * @exampleDescription With `select()`
  * When using [reserved words](https://www.postgresql.org/docs/current/sql-keywords-appendix.html) for column names you need
  * to add double quotes e.g. `.gt('"order"', 2)`
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select()
  *   .gt('id', 2)
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 3,
  *       "name": "Han"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  gt(a, e) {
    return this.url.searchParams.append(a, `gt.${e}`), this;
  }
  /**
  * Match only rows where `column` is greater than or equal to `value`.
  *
  * @param column - The column to filter on
  * @param value - The value to filter with
  *
  * @category Database
  * @subcategory Using filters
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select()
  *   .gte('id', 2)
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 2,
  *       "name": "Leia"
  *     },
  *     {
  *       "id": 3,
  *       "name": "Han"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  gte(a, e) {
    return this.url.searchParams.append(a, `gte.${e}`), this;
  }
  /**
  * Match only rows where `column` is less than `value`.
  *
  * @param column - The column to filter on
  * @param value - The value to filter with
  *
  * @category Database
  * @subcategory Using filters
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select()
  *   .lt('id', 2)
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "name": "Luke"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  lt(a, e) {
    return this.url.searchParams.append(a, `lt.${e}`), this;
  }
  /**
  * Match only rows where `column` is less than or equal to `value`.
  *
  * @param column - The column to filter on
  * @param value - The value to filter with
  *
  * @category Database
  * @subcategory Using filters
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select()
  *   .lte('id', 2)
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "name": "Luke"
  *     },
  *     {
  *       "id": 2,
  *       "name": "Leia"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  lte(a, e) {
    return this.url.searchParams.append(a, `lte.${e}`), this;
  }
  /**
  * Match only rows where `column` matches `pattern` case-sensitively.
  *
  * @param column - The column to filter on
  * @param pattern - The pattern to match with
  *
  * @category Database
  * @subcategory Using filters
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select()
  *   .like('name', '%Lu%')
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "name": "Luke"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  like(a, e) {
    return this.url.searchParams.append(a, `like.${e}`), this;
  }
  /**
  * Match only rows where `column` matches all of `patterns` case-sensitively.
  *
  * @param column - The column to filter on
  * @param patterns - The patterns to match with
  *
  * @category Database
  * @subcategory Using filters
  */
  likeAllOf(a, e) {
    return this.url.searchParams.append(a, `like(all).{${e.join(",")}}`), this;
  }
  /**
  * Match only rows where `column` matches any of `patterns` case-sensitively.
  *
  * @param column - The column to filter on
  * @param patterns - The patterns to match with
  *
  * @category Database
  * @subcategory Using filters
  */
  likeAnyOf(a, e) {
    return this.url.searchParams.append(a, `like(any).{${e.join(",")}}`), this;
  }
  /**
  * Match only rows where `column` matches `pattern` case-insensitively.
  *
  * @param column - The column to filter on
  * @param pattern - The pattern to match with
  *
  * @category Database
  * @subcategory Using filters
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select()
  *   .ilike('name', '%lu%')
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "name": "Luke"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  ilike(a, e) {
    return this.url.searchParams.append(a, `ilike.${e}`), this;
  }
  /**
  * Match only rows where `column` matches all of `patterns` case-insensitively.
  *
  * @param column - The column to filter on
  * @param patterns - The patterns to match with
  *
  * @category Database
  * @subcategory Using filters
  */
  ilikeAllOf(a, e) {
    return this.url.searchParams.append(a, `ilike(all).{${e.join(",")}}`), this;
  }
  /**
  * Match only rows where `column` matches any of `patterns` case-insensitively.
  *
  * @param column - The column to filter on
  * @param patterns - The patterns to match with
  *
  * @category Database
  * @subcategory Using filters
  */
  ilikeAnyOf(a, e) {
    return this.url.searchParams.append(a, `ilike(any).{${e.join(",")}}`), this;
  }
  /**
  * Match only rows where `column` matches the PostgreSQL regex `pattern`
  * case-sensitively (using the `~` operator).
  *
  * @param column - The column to filter on
  * @param pattern - The PostgreSQL regular expression pattern to match with
  */
  regexMatch(a, e) {
    return this.url.searchParams.append(a, `match.${e}`), this;
  }
  /**
  * Match only rows where `column` matches the PostgreSQL regex `pattern`
  * case-insensitively (using the `~*` operator).
  *
  * @param column - The column to filter on
  * @param pattern - The PostgreSQL regular expression pattern to match with
  */
  regexIMatch(a, e) {
    return this.url.searchParams.append(a, `imatch.${e}`), this;
  }
  /**
  * Match only rows where `column` IS `value`.
  *
  * For non-boolean columns, this is only relevant for checking if the value of
  * `column` is NULL by setting `value` to `null`.
  *
  * For boolean columns, you can also set `value` to `true` or `false` and it
  * will behave the same way as `.eq()`.
  *
  * @param column - The column to filter on
  * @param value - The value to filter with
  *
  * @category Database
  * @subcategory Using filters
  *
  * @exampleDescription Checking for nullness, true or false
  * Using the `eq()` filter doesn't work when filtering for `null`.
  *
  * Instead, you need to use `is()`.
  *
  * @example Checking for nullness, true or false
  * ```ts
  * const { data, error } = await supabase
  *   .from('countries')
  *   .select()
  *   .is('name', null)
  * ```
  *
  * @exampleSql Checking for nullness, true or false
  * ```sql
  * create table
  *   countries (id int8 primary key, name text);
  *
  * insert into
  *   countries (id, name)
  * values
  *   (1, 'null'),
  *   (2, null);
  * ```
  *
  * @exampleResponse Checking for nullness, true or false
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 2,
  *       "name": "null"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  is(a, e) {
    return this.url.searchParams.append(a, `is.${e}`), this;
  }
  /**
  * Match only rows where `column` IS DISTINCT FROM `value`.
  *
  * Unlike `.neq()`, this treats `NULL` as a comparable value. Two `NULL` values
  * are considered equal (not distinct), and comparing `NULL` with any non-NULL
  * value returns true (distinct).
  *
  * @param column - The column to filter on
  * @param value - The value to filter with
  */
  isDistinct(a, e) {
    return this.url.searchParams.append(a, `isdistinct.${e}`), this;
  }
  /**
  * Match only rows where `column` is included in the `values` array.
  *
  * @param column - The column to filter on
  * @param values - The values array to filter with
  *
  * @category Database
  * @subcategory Using filters
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select()
  *   .in('name', ['Leia', 'Han'])
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 2,
  *       "name": "Leia"
  *     },
  *     {
  *       "id": 3,
  *       "name": "Han"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  in(a, e) {
    const t = Array.from(new Set(e)).map((r) => typeof r == "string" && Ai.test(r) ? `"${r}"` : `${r}`).join(",");
    return this.url.searchParams.append(a, `in.(${t})`), this;
  }
  /**
  * Match only rows where `column` is NOT included in the `values` array.
  *
  * @param column - The column to filter on
  * @param values - The values array to filter with
  */
  notIn(a, e) {
    const t = Array.from(new Set(e)).map((r) => typeof r == "string" && Ai.test(r) ? `"${r}"` : `${r}`).join(",");
    return this.url.searchParams.append(a, `not.in.(${t})`), this;
  }
  /**
  * Only relevant for jsonb, array, and range columns. Match only rows where
  * `column` contains every element appearing in `value`.
  *
  * @param column - The jsonb, array, or range column to filter on
  * @param value - The jsonb, array, or range value to filter with
  *
  * @category Database
  * @subcategory Using filters
  *
  * @example On array columns
  * ```ts
  * const { data, error } = await supabase
  *   .from('issues')
  *   .select()
  *   .contains('tags', ['is:open', 'priority:low'])
  * ```
  *
  * @exampleSql On array columns
  * ```sql
  * create table
  *   issues (
  *     id int8 primary key,
  *     title text,
  *     tags text[]
  *   );
  *
  * insert into
  *   issues (id, title, tags)
  * values
  *   (1, 'Cache invalidation is not working', array['is:open', 'severity:high', 'priority:low']),
  *   (2, 'Use better names', array['is:open', 'severity:low', 'priority:medium']);
  * ```
  *
  * @exampleResponse On array columns
  * ```json
  * {
  *   "data": [
  *     {
  *       "title": "Cache invalidation is not working"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @exampleDescription On range columns
  * Postgres supports a number of [range
  * types](https://www.postgresql.org/docs/current/rangetypes.html). You
  * can filter on range columns using the string representation of range
  * values.
  *
  * @example On range columns
  * ```ts
  * const { data, error } = await supabase
  *   .from('reservations')
  *   .select()
  *   .contains('during', '[2000-01-01 13:00, 2000-01-01 13:30)')
  * ```
  *
  * @exampleSql On range columns
  * ```sql
  * create table
  *   reservations (
  *     id int8 primary key,
  *     room_name text,
  *     during tsrange
  *   );
  *
  * insert into
  *   reservations (id, room_name, during)
  * values
  *   (1, 'Emerald', '[2000-01-01 13:00, 2000-01-01 15:00)'),
  *   (2, 'Topaz', '[2000-01-02 09:00, 2000-01-02 10:00)');
  * ```
  *
  * @exampleResponse On range columns
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "room_name": "Emerald",
  *       "during": "[\"2000-01-01 13:00:00\",\"2000-01-01 15:00:00\")"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @example On `jsonb` columns
  * ```ts
  * const { data, error } = await supabase
  *   .from('users')
  *   .select('name')
  *   .contains('address', { postcode: 90210 })
  * ```
  *
  * @exampleSql On `jsonb` columns
  * ```sql
  * create table
  *   users (
  *     id int8 primary key,
  *     name text,
  *     address jsonb
  *   );
  *
  * insert into
  *   users (id, name, address)
  * values
  *   (1, 'Michael', '{ "postcode": 90210, "street": "Melrose Place" }'),
  *   (2, 'Jane', '{}');
  * ```
  *
  * @exampleResponse On `jsonb` columns
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "Michael"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  contains(a, e) {
    return typeof e == "string" ? this.url.searchParams.append(a, `cs.${e}`) : Array.isArray(e) ? this.url.searchParams.append(a, `cs.{${e.join(",")}}`) : this.url.searchParams.append(a, `cs.${JSON.stringify(e)}`), this;
  }
  /**
  * Only relevant for jsonb, array, and range columns. Match only rows where
  * every element appearing in `column` is contained by `value`.
  *
  * @param column - The jsonb, array, or range column to filter on
  * @param value - The jsonb, array, or range value to filter with
  *
  * @category Database
  * @subcategory Using filters
  *
  * @example On array columns
  * ```ts
  * const { data, error } = await supabase
  *   .from('classes')
  *   .select('name')
  *   .containedBy('days', ['monday', 'tuesday', 'wednesday', 'friday'])
  * ```
  *
  * @exampleSql On array columns
  * ```sql
  * create table
  *   classes (
  *     id int8 primary key,
  *     name text,
  *     days text[]
  *   );
  *
  * insert into
  *   classes (id, name, days)
  * values
  *   (1, 'Chemistry', array['monday', 'friday']),
  *   (2, 'History', array['monday', 'wednesday', 'thursday']);
  * ```
  *
  * @exampleResponse On array columns
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "Chemistry"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @exampleDescription On range columns
  * Postgres supports a number of [range
  * types](https://www.postgresql.org/docs/current/rangetypes.html). You
  * can filter on range columns using the string representation of range
  * values.
  *
  * @example On range columns
  * ```ts
  * const { data, error } = await supabase
  *   .from('reservations')
  *   .select()
  *   .containedBy('during', '[2000-01-01 00:00, 2000-01-01 23:59)')
  * ```
  *
  * @exampleSql On range columns
  * ```sql
  * create table
  *   reservations (
  *     id int8 primary key,
  *     room_name text,
  *     during tsrange
  *   );
  *
  * insert into
  *   reservations (id, room_name, during)
  * values
  *   (1, 'Emerald', '[2000-01-01 13:00, 2000-01-01 15:00)'),
  *   (2, 'Topaz', '[2000-01-02 09:00, 2000-01-02 10:00)');
  * ```
  *
  * @exampleResponse On range columns
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "room_name": "Emerald",
  *       "during": "[\"2000-01-01 13:00:00\",\"2000-01-01 15:00:00\")"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @example On `jsonb` columns
  * ```ts
  * const { data, error } = await supabase
  *   .from('users')
  *   .select('name')
  *   .containedBy('address', {})
  * ```
  *
  * @exampleSql On `jsonb` columns
  * ```sql
  * create table
  *   users (
  *     id int8 primary key,
  *     name text,
  *     address jsonb
  *   );
  *
  * insert into
  *   users (id, name, address)
  * values
  *   (1, 'Michael', '{ "postcode": 90210, "street": "Melrose Place" }'),
  *   (2, 'Jane', '{}');
  * ```
  *
  * @exampleResponse On `jsonb` columns
  * ```json
  *   {
  *     "data": [
  *       {
  *         "name": "Jane"
  *       }
  *     ],
  *     "status": 200,
  *     "statusText": "OK"
  *   }
  *
  * ```
  */
  containedBy(a, e) {
    return typeof e == "string" ? this.url.searchParams.append(a, `cd.${e}`) : Array.isArray(e) ? this.url.searchParams.append(a, `cd.{${e.join(",")}}`) : this.url.searchParams.append(a, `cd.${JSON.stringify(e)}`), this;
  }
  /**
  * Only relevant for range columns. Match only rows where every element in
  * `column` is greater than any element in `range`.
  *
  * @param column - The range column to filter on
  * @param range - The range to filter with
  *
  * @category Database
  * @subcategory Using filters
  *
  * @exampleDescription With `select()`
  * Postgres supports a number of [range
  * types](https://www.postgresql.org/docs/current/rangetypes.html). You
  * can filter on range columns using the string representation of range
  * values.
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('reservations')
  *   .select()
  *   .rangeGt('during', '[2000-01-02 08:00, 2000-01-02 09:00)')
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   reservations (
  *     id int8 primary key,
  *     room_name text,
  *     during tsrange
  *   );
  *
  * insert into
  *   reservations (id, room_name, during)
  * values
  *   (1, 'Emerald', '[2000-01-01 13:00, 2000-01-01 15:00)'),
  *   (2, 'Topaz', '[2000-01-02 09:00, 2000-01-02 10:00)');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  *   {
  *     "data": [
  *       {
  *         "id": 2,
  *         "room_name": "Topaz",
  *         "during": "[\"2000-01-02 09:00:00\",\"2000-01-02 10:00:00\")"
  *       }
  *     ],
  *     "status": 200,
  *     "statusText": "OK"
  *   }
  *
  * ```
  */
  rangeGt(a, e) {
    return this.url.searchParams.append(a, `sr.${e}`), this;
  }
  /**
  * Only relevant for range columns. Match only rows where every element in
  * `column` is either contained in `range` or greater than any element in
  * `range`.
  *
  * @param column - The range column to filter on
  * @param range - The range to filter with
  *
  * @category Database
  * @subcategory Using filters
  *
  * @exampleDescription With `select()`
  * Postgres supports a number of [range
  * types](https://www.postgresql.org/docs/current/rangetypes.html). You
  * can filter on range columns using the string representation of range
  * values.
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('reservations')
  *   .select()
  *   .rangeGte('during', '[2000-01-02 08:30, 2000-01-02 09:30)')
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   reservations (
  *     id int8 primary key,
  *     room_name text,
  *     during tsrange
  *   );
  *
  * insert into
  *   reservations (id, room_name, during)
  * values
  *   (1, 'Emerald', '[2000-01-01 13:00, 2000-01-01 15:00)'),
  *   (2, 'Topaz', '[2000-01-02 09:00, 2000-01-02 10:00)');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  *   {
  *     "data": [
  *       {
  *         "id": 2,
  *         "room_name": "Topaz",
  *         "during": "[\"2000-01-02 09:00:00\",\"2000-01-02 10:00:00\")"
  *       }
  *     ],
  *     "status": 200,
  *     "statusText": "OK"
  *   }
  *
  * ```
  */
  rangeGte(a, e) {
    return this.url.searchParams.append(a, `nxl.${e}`), this;
  }
  /**
  * Only relevant for range columns. Match only rows where every element in
  * `column` is less than any element in `range`.
  *
  * @param column - The range column to filter on
  * @param range - The range to filter with
  *
  * @category Database
  * @subcategory Using filters
  *
  * @exampleDescription With `select()`
  * Postgres supports a number of [range
  * types](https://www.postgresql.org/docs/current/rangetypes.html). You
  * can filter on range columns using the string representation of range
  * values.
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('reservations')
  *   .select()
  *   .rangeLt('during', '[2000-01-01 15:00, 2000-01-01 16:00)')
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   reservations (
  *     id int8 primary key,
  *     room_name text,
  *     during tsrange
  *   );
  *
  * insert into
  *   reservations (id, room_name, during)
  * values
  *   (1, 'Emerald', '[2000-01-01 13:00, 2000-01-01 15:00)'),
  *   (2, 'Topaz', '[2000-01-02 09:00, 2000-01-02 10:00)');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "room_name": "Emerald",
  *       "during": "[\"2000-01-01 13:00:00\",\"2000-01-01 15:00:00\")"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  rangeLt(a, e) {
    return this.url.searchParams.append(a, `sl.${e}`), this;
  }
  /**
  * Only relevant for range columns. Match only rows where every element in
  * `column` is either contained in `range` or less than any element in
  * `range`.
  *
  * @param column - The range column to filter on
  * @param range - The range to filter with
  *
  * @category Database
  * @subcategory Using filters
  *
  * @exampleDescription With `select()`
  * Postgres supports a number of [range
  * types](https://www.postgresql.org/docs/current/rangetypes.html). You
  * can filter on range columns using the string representation of range
  * values.
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('reservations')
  *   .select()
  *   .rangeLte('during', '[2000-01-01 14:00, 2000-01-01 16:00)')
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   reservations (
  *     id int8 primary key,
  *     room_name text,
  *     during tsrange
  *   );
  *
  * insert into
  *   reservations (id, room_name, during)
  * values
  *   (1, 'Emerald', '[2000-01-01 13:00, 2000-01-01 15:00)'),
  *   (2, 'Topaz', '[2000-01-02 09:00, 2000-01-02 10:00)');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  *   {
  *     "data": [
  *       {
  *         "id": 1,
  *         "room_name": "Emerald",
  *         "during": "[\"2000-01-01 13:00:00\",\"2000-01-01 15:00:00\")"
  *       }
  *     ],
  *     "status": 200,
  *     "statusText": "OK"
  *   }
  *
  * ```
  */
  rangeLte(a, e) {
    return this.url.searchParams.append(a, `nxr.${e}`), this;
  }
  /**
  * Only relevant for range columns. Match only rows where `column` is
  * mutually exclusive to `range` and there can be no element between the two
  * ranges.
  *
  * @param column - The range column to filter on
  * @param range - The range to filter with
  *
  * @category Database
  * @subcategory Using filters
  *
  * @exampleDescription With `select()`
  * Postgres supports a number of [range
  * types](https://www.postgresql.org/docs/current/rangetypes.html). You
  * can filter on range columns using the string representation of range
  * values.
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('reservations')
  *   .select()
  *   .rangeAdjacent('during', '[2000-01-01 12:00, 2000-01-01 13:00)')
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   reservations (
  *     id int8 primary key,
  *     room_name text,
  *     during tsrange
  *   );
  *
  * insert into
  *   reservations (id, room_name, during)
  * values
  *   (1, 'Emerald', '[2000-01-01 13:00, 2000-01-01 15:00)'),
  *   (2, 'Topaz', '[2000-01-02 09:00, 2000-01-02 10:00)');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "room_name": "Emerald",
  *       "during": "[\"2000-01-01 13:00:00\",\"2000-01-01 15:00:00\")"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  rangeAdjacent(a, e) {
    return this.url.searchParams.append(a, `adj.${e}`), this;
  }
  /**
  * Only relevant for array and range columns. Match only rows where
  * `column` and `value` have an element in common.
  *
  * @param column - The array or range column to filter on
  * @param value - The array or range value to filter with
  *
  * @category Database
  * @subcategory Using filters
  *
  * @example On array columns
  * ```ts
  * const { data, error } = await supabase
  *   .from('issues')
  *   .select('title')
  *   .overlaps('tags', ['is:closed', 'severity:high'])
  * ```
  *
  * @exampleSql On array columns
  * ```sql
  * create table
  *   issues (
  *     id int8 primary key,
  *     title text,
  *     tags text[]
  *   );
  *
  * insert into
  *   issues (id, title, tags)
  * values
  *   (1, 'Cache invalidation is not working', array['is:open', 'severity:high', 'priority:low']),
  *   (2, 'Use better names', array['is:open', 'severity:low', 'priority:medium']);
  * ```
  *
  * @exampleResponse On array columns
  * ```json
  * {
  *   "data": [
  *     {
  *       "title": "Cache invalidation is not working"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @exampleDescription On range columns
  * Postgres supports a number of [range
  * types](https://www.postgresql.org/docs/current/rangetypes.html). You
  * can filter on range columns using the string representation of range
  * values.
  *
  * @example On range columns
  * ```ts
  * const { data, error } = await supabase
  *   .from('reservations')
  *   .select()
  *   .overlaps('during', '[2000-01-01 12:45, 2000-01-01 13:15)')
  * ```
  *
  * @exampleSql On range columns
  * ```sql
  * create table
  *   reservations (
  *     id int8 primary key,
  *     room_name text,
  *     during tsrange
  *   );
  *
  * insert into
  *   reservations (id, room_name, during)
  * values
  *   (1, 'Emerald', '[2000-01-01 13:00, 2000-01-01 15:00)'),
  *   (2, 'Topaz', '[2000-01-02 09:00, 2000-01-02 10:00)');
  * ```
  *
  * @exampleResponse On range columns
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "room_name": "Emerald",
  *       "during": "[\"2000-01-01 13:00:00\",\"2000-01-01 15:00:00\")"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  overlaps(a, e) {
    return typeof e == "string" ? this.url.searchParams.append(a, `ov.${e}`) : this.url.searchParams.append(a, `ov.{${e.join(",")}}`), this;
  }
  /**
  * Only relevant for text and tsvector columns. Match only rows where
  * `column` matches the query string in `query`.
  *
  * @param column - The text or tsvector column to filter on
  * @param query - The query text to match with
  * @param options - Named parameters
  * @param options.config - The text search configuration to use
  * @param options.type - Change how the `query` text is interpreted
  *
  * @category Database
  * @subcategory Using filters
  *
  * @remarks
  * - For more information, see [Postgres full text search](/docs/guides/database/full-text-search).
  *
  * @example Text search
  * ```ts
  * const result = await supabase
  *   .from("texts")
  *   .select("content")
  *   .textSearch("content", `'eggs' & 'ham'`, {
  *     config: "english",
  *   });
  * ```
  *
  * @exampleSql Text search
  * ```sql
  * create table texts (
  *   id      bigint
  *           primary key
  *           generated always as identity,
  *   content text
  * );
  *
  * insert into texts (content) values
  *     ('Four score and seven years ago'),
  *     ('The road goes ever on and on'),
  *     ('Green eggs and ham')
  * ;
  * ```
  *
  * @exampleResponse Text search
  * ```json
  * {
  *   "data": [
  *     {
  *       "content": "Green eggs and ham"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @exampleDescription Basic normalization
  * Uses PostgreSQL's `plainto_tsquery` function.
  *
  * @example Basic normalization
  * ```ts
  * const { data, error } = await supabase
  *   .from('quotes')
  *   .select('catchphrase')
  *   .textSearch('catchphrase', `'fat' & 'cat'`, {
  *     type: 'plain',
  *     config: 'english'
  *   })
  * ```
  *
  * @exampleDescription Full normalization
  * Uses PostgreSQL's `phraseto_tsquery` function.
  *
  * @example Full normalization
  * ```ts
  * const { data, error } = await supabase
  *   .from('quotes')
  *   .select('catchphrase')
  *   .textSearch('catchphrase', `'fat' & 'cat'`, {
  *     type: 'phrase',
  *     config: 'english'
  *   })
  * ```
  *
  * @exampleDescription Websearch
  * Uses PostgreSQL's `websearch_to_tsquery` function.
  * This function will never raise syntax errors, which makes it possible to use raw user-supplied input for search, and can be used
  * with advanced operators.
  *
  * - `unquoted text`: text not inside quote marks will be converted to terms separated by & operators, as if processed by plainto_tsquery.
  * - `"quoted text"`: text inside quote marks will be converted to terms separated by `<->` operators, as if processed by phraseto_tsquery.
  * - `OR`: the word “or” will be converted to the | operator.
  * - `-`: a dash will be converted to the ! operator.
  *
  * @example Websearch
  * ```ts
  * const { data, error } = await supabase
  *   .from('quotes')
  *   .select('catchphrase')
  *   .textSearch('catchphrase', `'fat or cat'`, {
  *     type: 'websearch',
  *     config: 'english'
  *   })
  * ```
  */
  textSearch(a, e, { config: t, type: r } = {}) {
    let n = "";
    r === "plain" ? n = "pl" : r === "phrase" ? n = "ph" : r === "websearch" && (n = "w");
    const i = t === void 0 ? "" : `(${t})`;
    return this.url.searchParams.append(a, `${n}fts${i}.${e}`), this;
  }
  /**
  * Match only rows where each column in `query` keys is equal to its
  * associated value. Shorthand for multiple `.eq()`s.
  *
  * @param query - The object to filter with, with column names as keys mapped
  * to their filter values
  *
  * @category Database
  * @subcategory Using filters
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select('name')
  *   .match({ id: 2, name: 'Leia' })
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "Leia"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  match(a) {
    return Object.entries(a).filter(([e, t]) => t !== void 0).forEach(([e, t]) => {
      this.url.searchParams.append(e, `eq.${t}`);
    }), this;
  }
  /**
  * Match only rows which doesn't satisfy the filter.
  *
  * Unlike most filters, `opearator` and `value` are used as-is and need to
  * follow [PostgREST
  * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
  * to make sure they are properly sanitized.
  *
  * @param column - The column to filter on
  * @param operator - The operator to be negated to filter with, following
  * PostgREST syntax
  * @param value - The value to filter with, following PostgREST syntax
  *
  * @category Database
  * @subcategory Using filters
  *
  * @remarks
  * not() expects you to use the raw PostgREST syntax for the filter values.
  *
  * ```ts
  * .not('id', 'in', '(5,6,7)')  // Use `()` for `in` filter
  * .not('arraycol', 'cs', '{"a","b"}')  // Use `cs` for `contains()`, `{}` for array values
  * ```
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('countries')
  *   .select()
  *   .not('name', 'is', null)
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   countries (id int8 primary key, name text);
  *
  * insert into
  *   countries (id, name)
  * values
  *   (1, 'null'),
  *   (2, null);
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  *   {
  *     "data": [
  *       {
  *         "id": 1,
  *         "name": "null"
  *       }
  *     ],
  *     "status": 200,
  *     "statusText": "OK"
  *   }
  *
  * ```
  */
  not(a, e, t) {
    return this.url.searchParams.append(a, `not.${e}.${t}`), this;
  }
  /**
  * Match only rows which satisfy at least one of the filters.
  *
  * Unlike most filters, `filters` is used as-is and needs to follow [PostgREST
  * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
  * to make sure it's properly sanitized.
  *
  * It's currently not possible to do an `.or()` filter across multiple tables.
  *
  * @param filters - The filters to use, following PostgREST syntax
  * @param options - Named parameters
  * @param options.referencedTable - Set this to filter on referenced tables
  * instead of the parent table
  * @param options.foreignTable - Deprecated, use `referencedTable` instead
  *
  * @category Database
  * @subcategory Using filters
  *
  * @remarks
  * or() expects you to use the raw PostgREST syntax for the filter names and values.
  *
  * ```ts
  * .or('id.in.(5,6,7), arraycol.cs.{"a","b"}')  // Use `()` for `in` filter, `{}` for array values and `cs` for `contains()`.
  * .or('id.in.(5,6,7), arraycol.cd.{"a","b"}')  // Use `cd` for `containedBy()`
  * ```
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select('name')
  *   .or('id.eq.2,name.eq.Han')
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "Leia"
  *     },
  *     {
  *       "name": "Han"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @example Use `or` with `and`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select('name')
  *   .or('id.gt.3,and(id.eq.1,name.eq.Luke)')
  * ```
  *
  * @exampleSql Use `or` with `and`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse Use `or` with `and`
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "Luke"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @example Use `or` on referenced tables
  * ```ts
  * const { data, error } = await supabase
  *   .from('orchestral_sections')
  *   .select(`
  *     name,
  *     instruments!inner (
  *       name
  *     )
  *   `)
  *   .or('section_id.eq.1,name.eq.guzheng', { referencedTable: 'instruments' })
  * ```
  *
  * @exampleSql Use `or` on referenced tables
  * ```sql
  * create table
  *   orchestral_sections (id int8 primary key, name text);
  * create table
  *   instruments (
  *     id int8 primary key,
  *     section_id int8 not null references orchestral_sections,
  *     name text
  *   );
  *
  * insert into
  *   orchestral_sections (id, name)
  * values
  *   (1, 'strings'),
  *   (2, 'woodwinds');
  * insert into
  *   instruments (id, section_id, name)
  * values
  *   (1, 2, 'flute'),
  *   (2, 1, 'violin');
  * ```
  *
  * @exampleResponse Use `or` on referenced tables
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "strings",
  *       "instruments": [
  *         {
  *           "name": "violin"
  *         }
  *       ]
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  or(a, { foreignTable: e, referencedTable: t = e } = {}) {
    const r = t ? `${t}.or` : "or";
    return this.url.searchParams.append(r, `(${a})`), this;
  }
  /**
  * Match only rows which satisfy the filter. This is an escape hatch - you
  * should use the specific filter methods wherever possible.
  *
  * Unlike most filters, `opearator` and `value` are used as-is and need to
  * follow [PostgREST
  * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
  * to make sure they are properly sanitized.
  *
  * @param column - The column to filter on
  * @param operator - The operator to filter with, following PostgREST syntax
  * @param value - The value to filter with, following PostgREST syntax
  *
  * @category Database
  * @subcategory Using filters
  *
  * @remarks
  * filter() expects you to use the raw PostgREST syntax for the filter values.
  *
  * ```ts
  * .filter('id', 'in', '(5,6,7)')  // Use `()` for `in` filter
  * .filter('arraycol', 'cs', '{"a","b"}')  // Use `cs` for `contains()`, `{}` for array values
  * ```
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select()
  *   .filter('name', 'in', '("Han","Yoda")')
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 3,
  *       "name": "Han"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @example On a referenced table
  * ```ts
  * const { data, error } = await supabase
  *   .from('orchestral_sections')
  *   .select(`
  *     name,
  *     instruments!inner (
  *       name
  *     )
  *   `)
  *   .filter('instruments.name', 'eq', 'flute')
  * ```
  *
  * @exampleSql On a referenced table
  * ```sql
  * create table
  *   orchestral_sections (id int8 primary key, name text);
  * create table
  *    instruments (
  *     id int8 primary key,
  *     section_id int8 not null references orchestral_sections,
  *     name text
  *   );
  *
  * insert into
  *   orchestral_sections (id, name)
  * values
  *   (1, 'strings'),
  *   (2, 'woodwinds');
  * insert into
  *   instruments (id, section_id, name)
  * values
  *   (1, 2, 'flute'),
  *   (2, 1, 'violin');
  * ```
  *
  * @exampleResponse On a referenced table
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "woodwinds",
  *       "instruments": [
  *         {
  *           "name": "flute"
  *         }
  *       ]
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  filter(a, e, t) {
    return this.url.searchParams.append(a, `${e}.${t}`), this;
  }
}, fu = class {
  /**
  * Creates a query builder scoped to a Postgres table or view.
  *
  * @category Database
  *
  * @param url - The URL for the query
  * @param options - Named parameters
  * @param options.headers - Custom headers
  * @param options.schema - Postgres schema to use
  * @param options.fetch - Custom fetch implementation
  * @param options.urlLengthLimit - Maximum URL length before warning
  * @param options.retry - Enable automatic retries for transient errors (default: true)
  *
  * @example Using supabase-js (recommended)
  * ```ts
  * import { createClient } from '@supabase/supabase-js'
  *
  * const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key')
  * const { data, error } = await supabase.from('users').select('*')
  * ```
  *
  * @example Standalone import for bundle-sensitive environments
  * ```ts
  * import { PostgrestQueryBuilder } from '@supabase/postgrest-js'
  *
  * const query = new PostgrestQueryBuilder(
  *   new URL('https://xyzcompany.supabase.co/rest/v1/users'),
  *   { headers: { apikey: 'your-publishable-key' }, retry: true }
  * )
  * ```
  */
  constructor(a, { headers: e = {}, schema: t, fetch: r, urlLengthLimit: n = 8e3, retry: i }) {
    this.url = a, this.headers = new Headers(e), this.schema = t, this.fetch = r, this.urlLengthLimit = n, this.retry = i;
  }
  /**
  * Clone URL and headers to prevent shared state between operations.
  */
  cloneRequestState() {
    return {
      url: new URL(this.url.toString()),
      headers: new Headers(this.headers)
    };
  }
  /**
  * Perform a SELECT query on the table or view.
  *
  * @param columns - The columns to retrieve, separated by commas. Columns can be renamed when returned with `customName:columnName`
  *
  * @param options - Named parameters
  *
  * @param options.head - When set to `true`, `data` will not be returned.
  * Useful if you only need the count.
  *
  * @param options.count - Count algorithm to use to count rows in the table or view.
  *
  * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
  * hood.
  *
  * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
  * statistics under the hood.
  *
  * `"estimated"`: Uses exact count for low numbers and planned count for high
  * numbers.
  *
  * @remarks
  * When using `count` with `.range()` or `.limit()`, the returned `count` is the total number of rows
  * that match your filters, not the number of rows in the current page. Use this to build pagination UI.
  
  * - By default, Supabase projects return a maximum of 1,000 rows. This setting can be changed in your project's [API settings](/dashboard/project/_/settings/api). It's recommended that you keep it low to limit the payload size of accidental or malicious requests. You can use `range()` queries to paginate through your data.
  * - `select()` can be combined with [Filters](/docs/reference/javascript/using-filters)
  * - `select()` can be combined with [Modifiers](/docs/reference/javascript/using-modifiers)
  * - `apikey` is a reserved keyword if you're using the [Supabase Platform](/docs/guides/platform) and [should be avoided as a column name](https://github.com/supabase/supabase/issues/5465). *
  * @category Database
  *
  * @example Getting your data
  * ```js
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select()
  * ```
  *
  * @exampleSql Getting your data
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Harry'),
  *   (2, 'Frodo'),
  *   (3, 'Katniss');
  * ```
  *
  * @exampleResponse Getting your data
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "name": "Harry"
  *     },
  *     {
  *       "id": 2,
  *       "name": "Frodo"
  *     },
  *     {
  *       "id": 3,
  *       "name": "Katniss"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @example Selecting specific columns
  * ```js
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select('name')
  * ```
  *
  * @exampleSql Selecting specific columns
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Frodo'),
  *   (2, 'Harry'),
  *   (3, 'Katniss');
  * ```
  *
  * @exampleResponse Selecting specific columns
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "Frodo"
  *     },
  *     {
  *       "name": "Harry"
  *     },
  *     {
  *       "name": "Katniss"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @exampleDescription Query referenced tables
  * If your database has foreign key relationships, you can query related tables too.
  *
  * @example Query referenced tables
  * ```js
  * const { data, error } = await supabase
  *   .from('orchestral_sections')
  *   .select(`
  *     name,
  *     instruments (
  *       name
  *     )
  *   `)
  * ```
  *
  * @exampleSql Query referenced tables
  * ```sql
  * create table
  *   orchestral_sections (id int8 primary key, name text);
  * create table
  *   instruments (
  *     id int8 primary key,
  *     section_id int8 not null references orchestral_sections,
  *     name text
  *   );
  *
  * insert into
  *   orchestral_sections (id, name)
  * values
  *   (1, 'strings'),
  *   (2, 'woodwinds');
  * insert into
  *   instruments (id, section_id, name)
  * values
  *   (1, 2, 'flute'),
  *   (2, 1, 'violin');
  * ```
  *
  * @exampleResponse Query referenced tables
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "strings",
  *       "instruments": [
  *         {
  *           "name": "violin"
  *         }
  *       ]
  *     },
  *     {
  *       "name": "woodwinds",
  *       "instruments": [
  *         {
  *           "name": "flute"
  *         }
  *       ]
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @exampleDescription Query referenced tables with spaces in their names
  * If your table name contains spaces, you must use double quotes in the `select` statement to reference the table.
  *
  * @example Query referenced tables with spaces in their names
  * ```js
  * const { data, error } = await supabase
  *   .from('orchestral sections')
  *   .select(`
  *     name,
  *     "musical instruments" (
  *       name
  *     )
  *   `)
  * ```
  *
  * @exampleSql Query referenced tables with spaces in their names
  * ```sql
  * create table
  *   "orchestral sections" (id int8 primary key, name text);
  * create table
  *   "musical instruments" (
  *     id int8 primary key,
  *     section_id int8 not null references "orchestral sections",
  *     name text
  *   );
  *
  * insert into
  *   "orchestral sections" (id, name)
  * values
  *   (1, 'strings'),
  *   (2, 'woodwinds');
  * insert into
  *   "musical instruments" (id, section_id, name)
  * values
  *   (1, 2, 'flute'),
  *   (2, 1, 'violin');
  * ```
  *
  * @exampleResponse Query referenced tables with spaces in their names
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "strings",
  *       "musical instruments": [
  *         {
  *           "name": "violin"
  *         }
  *       ]
  *     },
  *     {
  *       "name": "woodwinds",
  *       "musical instruments": [
  *         {
  *           "name": "flute"
  *         }
  *       ]
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @exampleDescription Query referenced tables through a join table
  * If you're in a situation where your tables are **NOT** directly
  * related, but instead are joined by a _join table_, you can still use
  * the `select()` method to query the related data. The join table needs
  * to have the foreign keys as part of its composite primary key.
  *
  * @example Query referenced tables through a join table
  * ```ts
  * const { data, error } = await supabase
  *   .from('users')
  *   .select(`
  *     name,
  *     teams (
  *       name
  *     )
  *   `)
  *   
  * ```
  *
  * @exampleSql Query referenced tables through a join table
  * ```sql
  * create table
  *   users (
  *     id int8 primary key,
  *     name text
  *   );
  * create table
  *   teams (
  *     id int8 primary key,
  *     name text
  *   );
  * -- join table
  * create table
  *   users_teams (
  *     user_id int8 not null references users,
  *     team_id int8 not null references teams,
  *     -- both foreign keys must be part of a composite primary key
  *     primary key (user_id, team_id)
  *   );
  *
  * insert into
  *   users (id, name)
  * values
  *   (1, 'Kiran'),
  *   (2, 'Evan');
  * insert into
  *   teams (id, name)
  * values
  *   (1, 'Green'),
  *   (2, 'Blue');
  * insert into
  *   users_teams (user_id, team_id)
  * values
  *   (1, 1),
  *   (1, 2),
  *   (2, 2);
  * ```
  *
  * @exampleResponse Query referenced tables through a join table
  * ```json
  *   {
  *     "data": [
  *       {
  *         "name": "Kiran",
  *         "teams": [
  *           {
  *             "name": "Green"
  *           },
  *           {
  *             "name": "Blue"
  *           }
  *         ]
  *       },
  *       {
  *         "name": "Evan",
  *         "teams": [
  *           {
  *             "name": "Blue"
  *           }
  *         ]
  *       }
  *     ],
  *     "status": 200,
  *     "statusText": "OK"
  *   }
  *   
  * ```
  *
  * @exampleDescription Query the same referenced table multiple times
  * If you need to query the same referenced table twice, use the name of the
  * joined column to identify which join to use. You can also give each
  * column an alias.
  *
  * @example Query the same referenced table multiple times
  * ```ts
  * const { data, error } = await supabase
  *   .from('messages')
  *   .select(`
  *     content,
  *     from:sender_id(name),
  *     to:receiver_id(name)
  *   `)
  *
  * // To infer types, use the name of the table (in this case `users`) and
  * // the name of the foreign key constraint.
  * const { data, error } = await supabase
  *   .from('messages')
  *   .select(`
  *     content,
  *     from:users!messages_sender_id_fkey(name),
  *     to:users!messages_receiver_id_fkey(name)
  *   `)
  * ```
  *
  * @exampleSql Query the same referenced table multiple times
  * ```sql
  *  create table
  *  users (id int8 primary key, name text);
  *
  *  create table
  *    messages (
  *      sender_id int8 not null references users,
  *      receiver_id int8 not null references users,
  *      content text
  *    );
  *
  *  insert into
  *    users (id, name)
  *  values
  *    (1, 'Kiran'),
  *    (2, 'Evan');
  *
  *  insert into
  *    messages (sender_id, receiver_id, content)
  *  values
  *    (1, 2, '👋');
  *  ```
  * ```
  *
  * @exampleResponse Query the same referenced table multiple times
  * ```json
  * {
  *   "data": [
  *     {
  *       "content": "👋",
  *       "from": {
  *         "name": "Kiran"
  *       },
  *       "to": {
  *         "name": "Evan"
  *       }
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @exampleDescription Query nested foreign tables through a join table
  * You can use the result of a joined table to gather data in
  * another foreign table. With multiple references to the same foreign
  * table you must specify the column on which to conduct the join.
  *
  * @example Query nested foreign tables through a join table
  * ```ts
  *   const { data, error } = await supabase
  *     .from('games')
  *     .select(`
  *       game_id:id,
  *       away_team:teams!games_away_team_fkey (
  *         users (
  *           id,
  *           name
  *         )
  *       )
  *     `)
  *   
  * ```
  *
  * @exampleSql Query nested foreign tables through a join table
  * ```sql
  * ```sql
  * create table
  *   users (
  *     id int8 primary key,
  *     name text
  *   );
  * create table
  *   teams (
  *     id int8 primary key,
  *     name text
  *   );
  * -- join table
  * create table
  *   users_teams (
  *     user_id int8 not null references users,
  *     team_id int8 not null references teams,
  *
  *     primary key (user_id, team_id)
  *   );
  * create table
  *   games (
  *     id int8 primary key,
  *     home_team int8 not null references teams,
  *     away_team int8 not null references teams,
  *     name text
  *   );
  *
  * insert into users (id, name)
  * values
  *   (1, 'Kiran'),
  *   (2, 'Evan');
  * insert into
  *   teams (id, name)
  * values
  *   (1, 'Green'),
  *   (2, 'Blue');
  * insert into
  *   users_teams (user_id, team_id)
  * values
  *   (1, 1),
  *   (1, 2),
  *   (2, 2);
  * insert into
  *   games (id, home_team, away_team, name)
  * values
  *   (1, 1, 2, 'Green vs Blue'),
  *   (2, 2, 1, 'Blue vs Green');
  * ```
  *
  * @exampleResponse Query nested foreign tables through a join table
  * ```json
  *   {
  *     "data": [
  *       {
  *         "game_id": 1,
  *         "away_team": {
  *           "users": [
  *             {
  *               "id": 1,
  *               "name": "Kiran"
  *             },
  *             {
  *               "id": 2,
  *               "name": "Evan"
  *             }
  *           ]
  *         }
  *       },
  *       {
  *         "game_id": 2,
  *         "away_team": {
  *           "users": [
  *             {
  *               "id": 1,
  *               "name": "Kiran"
  *             }
  *           ]
  *         }
  *       }
  *     ],
  *     "status": 200,
  *     "statusText": "OK"
  *   }
  *   
  * ```
  *
  * @exampleDescription Filtering through referenced tables
  * If the filter on a referenced table's column is not satisfied, the referenced
  * table returns `[]` or `null` but the parent table is not filtered out.
  * If you want to filter out the parent table rows, use the `!inner` hint
  *
  * @example Filtering through referenced tables
  * ```ts
  * const { data, error } = await supabase
  *   .from('instruments')
  *   .select('name, orchestral_sections(*)')
  *   .eq('orchestral_sections.name', 'percussion')
  * ```
  *
  * @exampleSql Filtering through referenced tables
  * ```sql
  * create table
  *   orchestral_sections (id int8 primary key, name text);
  * create table
  *   instruments (
  *     id int8 primary key,
  *     section_id int8 not null references orchestral_sections,
  *     name text
  *   );
  *
  * insert into
  *   orchestral_sections (id, name)
  * values
  *   (1, 'strings'),
  *   (2, 'woodwinds');
  * insert into
  *   instruments (id, section_id, name)
  * values
  *   (1, 2, 'flute'),
  *   (2, 1, 'violin');
  * ```
  *
  * @exampleResponse Filtering through referenced tables
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "flute",
  *       "orchestral_sections": null
  *     },
  *     {
  *       "name": "violin",
  *       "orchestral_sections": null
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @exampleDescription Querying referenced table with count
  * You can get the number of rows in a related table by using the
  * **count** property.
  *
  * @example Querying referenced table with count
  * ```ts
  * const { data, error } = await supabase
  *   .from('orchestral_sections')
  *   .select(`*, instruments(count)`)
  * ```
  *
  * @exampleSql Querying referenced table with count
  * ```sql
  * create table orchestral_sections (
  *   "id" "uuid" primary key default "extensions"."uuid_generate_v4"() not null,
  *   "name" text
  * );
  *
  * create table characters (
  *   "id" "uuid" primary key default "extensions"."uuid_generate_v4"() not null,
  *   "name" text,
  *   "section_id" "uuid" references public.orchestral_sections on delete cascade
  * );
  *
  * with section as (
  *   insert into orchestral_sections (name)
  *   values ('strings') returning id
  * )
  * insert into instruments (name, section_id) values
  * ('violin', (select id from section)),
  * ('viola', (select id from section)),
  * ('cello', (select id from section)),
  * ('double bass', (select id from section));
  * ```
  *
  * @exampleResponse Querying referenced table with count
  * ```json
  * [
  *   {
  *     "id": "693694e7-d993-4360-a6d7-6294e325d9b6",
  *     "name": "strings",
  *     "instruments": [
  *       {
  *         "count": 4
  *       }
  *     ]
  *   }
  * ]
  * ```
  *
  * @exampleDescription Querying with count option
  * You can get the number of rows by using the
  * [count](/docs/reference/javascript/select#parameters) option.
  *
  * @example Querying with count option
  * ```ts
  * const { count, error } = await supabase
  *   .from('characters')
  *   .select('*', { count: 'exact', head: true })
  * ```
  *
  * @exampleSql Querying with count option
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse Querying with count option
  * ```json
  * {
  *   "count": 3,
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @exampleDescription Querying JSON data
  * You can select and filter data inside of
  * [JSON](/docs/guides/database/json) columns. Postgres offers some
  * [operators](/docs/guides/database/json#query-the-jsonb-data) for
  * querying JSON data.
  *
  * @example Querying JSON data
  * ```ts
  * const { data, error } = await supabase
  *   .from('users')
  *   .select(`
  *     id, name,
  *     address->city
  *   `)
  * ```
  *
  * @exampleSql Querying JSON data
  * ```sql
  * create table
  *   users (
  *     id int8 primary key,
  *     name text,
  *     address jsonb
  *   );
  *
  * insert into
  *   users (id, name, address)
  * values
  *   (1, 'Frodo', '{"city":"Hobbiton"}');
  * ```
  *
  * @exampleResponse Querying JSON data
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "name": "Frodo",
  *       "city": "Hobbiton"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @exampleDescription Querying referenced table with inner join
  * If you don't want to return the referenced table contents, you can leave the parenthesis empty.
  * Like `.select('name, orchestral_sections!inner()')`.
  *
  * @example Querying referenced table with inner join
  * ```ts
  * const { data, error } = await supabase
  *   .from('instruments')
  *   .select('name, orchestral_sections!inner(name)')
  *   .eq('orchestral_sections.name', 'woodwinds')
  *   .limit(1)
  * ```
  *
  * @exampleSql Querying referenced table with inner join
  * ```sql
  * create table orchestral_sections (
  *   "id" "uuid" primary key default "extensions"."uuid_generate_v4"() not null,
  *   "name" text
  * );
  *
  * create table instruments (
  *   "id" "uuid" primary key default "extensions"."uuid_generate_v4"() not null,
  *   "name" text,
  *   "section_id" "uuid" references public.orchestral_sections on delete cascade
  * );
  *
  * with section as (
  *   insert into orchestral_sections (name)
  *   values ('woodwinds') returning id
  * )
  * insert into instruments (name, section_id) values
  * ('flute', (select id from section)),
  * ('clarinet', (select id from section)),
  * ('bassoon', (select id from section)),
  * ('piccolo', (select id from section));
  * ```
  *
  * @exampleResponse Querying referenced table with inner join
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "flute",
  *       "orchestral_sections": {"name": "woodwinds"}
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @exampleDescription Switching schemas per query
  * In addition to setting the schema during initialization, you can also switch schemas on a per-query basis.
  * Make sure you've set up your [database privileges and API settings](/docs/guides/api/using-custom-schemas).
  *
  * @example Switching schemas per query
  * ```ts
  * const { data, error } = await supabase
  *   .schema('myschema')
  *   .from('mytable')
  *   .select()
  * ```
  *
  * @exampleSql Switching schemas per query
  * ```sql
  * create schema myschema;
  *
  * create table myschema.mytable (
  *   id uuid primary key default gen_random_uuid(),
  *   data text
  * );
  *
  * insert into myschema.mytable (data) values ('mydata');
  * ```
  *
  * @exampleResponse Switching schemas per query
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": "4162e008-27b0-4c0f-82dc-ccaeee9a624d",
  *       "data": "mydata"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  select(a, e) {
    const { head: t = !1, count: r } = e ?? {}, n = t ? "HEAD" : "GET";
    let i = !1;
    const s = (a ?? "*").split("").map((u) => /\s/.test(u) && !i ? "" : (u === '"' && (i = !i), u)).join(""), { url: o, headers: l } = this.cloneRequestState();
    return o.searchParams.set("select", s), r && l.append("Prefer", `count=${r}`), new It({
      method: n,
      url: o,
      headers: l,
      schema: this.schema,
      fetch: this.fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
  /**
  * Perform an INSERT into the table or view.
  *
  * By default, inserted rows are not returned. To return it, chain the call
  * with `.select()`.
  *
  * @param values - The values to insert. Pass an object to insert a single row
  * or an array to insert multiple rows.
  *
  * @param options - Named parameters
  *
  * @param options.count - Count algorithm to use to count inserted rows.
  *
  * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
  * hood.
  *
  * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
  * statistics under the hood.
  *
  * `"estimated"`: Uses exact count for low numbers and planned count for high
  * numbers.
  *
  * @param options.defaultToNull - Make missing fields default to `null`.
  * Otherwise, use the default value for the column. Only applies for bulk
  * inserts.
  *
  * @category Database
  *
  * @example Create a record
  * ```ts
  * const { error } = await supabase
  *   .from('countries')
  *   .insert({ id: 1, name: 'Mordor' })
  * ```
  *
  * @exampleSql Create a record
  * ```sql
  * create table
  *   countries (id int8 primary key, name text);
  * ```
  *
  * @exampleResponse Create a record
  * ```json
  * {
  *   "status": 201,
  *   "statusText": "Created"
  * }
  * ```
  *
  * @example Create a record and return it
  * ```ts
  * const { data, error } = await supabase
  *   .from('countries')
  *   .insert({ id: 1, name: 'Mordor' })
  *   .select()
  * ```
  *
  * @exampleSql Create a record and return it
  * ```sql
  * create table
  *   countries (id int8 primary key, name text);
  * ```
  *
  * @exampleResponse Create a record and return it
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "name": "Mordor"
  *     }
  *   ],
  *   "status": 201,
  *   "statusText": "Created"
  * }
  * ```
  *
  * @exampleDescription Bulk create
  * A bulk create operation is handled in a single transaction.
  * If any of the inserts fail, none of the rows are inserted.
  *
  * @example Bulk create
  * ```ts
  * const { error } = await supabase
  *   .from('countries')
  *   .insert([
  *     { id: 1, name: 'Mordor' },
  *     { id: 1, name: 'The Shire' },
  *   ])
  * ```
  *
  * @exampleSql Bulk create
  * ```sql
  * create table
  *   countries (id int8 primary key, name text);
  * ```
  *
  * @exampleResponse Bulk create
  * ```json
  * {
  *   "error": {
  *     "code": "23505",
  *     "details": "Key (id)=(1) already exists.",
  *     "hint": null,
  *     "message": "duplicate key value violates unique constraint \"countries_pkey\""
  *   },
  *   "status": 409,
  *   "statusText": "Conflict"
  * }
  * ```
  */
  insert(a, { count: e, defaultToNull: t = !0 } = {}) {
    var r;
    const n = "POST", { url: i, headers: s } = this.cloneRequestState();
    if (e && s.append("Prefer", `count=${e}`), t || s.append("Prefer", "missing=default"), Array.isArray(a)) {
      const o = a.reduce((l, u) => l.concat(Object.keys(u)), []);
      if (o.length > 0) {
        const l = [...new Set(o)].map((u) => `"${u}"`);
        i.searchParams.set("columns", l.join(","));
      }
    }
    return new It({
      method: n,
      url: i,
      headers: s,
      schema: this.schema,
      body: a,
      fetch: (r = this.fetch) !== null && r !== void 0 ? r : fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
  /**
  * Perform an UPSERT on the table or view. Depending on the column(s) passed
  * to `onConflict`, `.upsert()` allows you to perform the equivalent of
  * `.insert()` if a row with the corresponding `onConflict` columns doesn't
  * exist, or if it does exist, perform an alternative action depending on
  * `ignoreDuplicates`.
  *
  * By default, upserted rows are not returned. To return it, chain the call
  * with `.select()`.
  *
  * @param values - The values to upsert with. Pass an object to upsert a
  * single row or an array to upsert multiple rows.
  *
  * @param options - Named parameters
  *
  * @param options.onConflict - Comma-separated UNIQUE column(s) to specify how
  * duplicate rows are determined. Two rows are duplicates if all the
  * `onConflict` columns are equal.
  *
  * @param options.ignoreDuplicates - If `true`, duplicate rows are ignored. If
  * `false`, duplicate rows are merged with existing rows.
  *
  * @param options.count - Count algorithm to use to count upserted rows.
  *
  * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
  * hood.
  *
  * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
  * statistics under the hood.
  *
  * `"estimated"`: Uses exact count for low numbers and planned count for high
  * numbers.
  *
  * @param options.defaultToNull - Make missing fields default to `null`.
  * Otherwise, use the default value for the column. This only applies when
  * inserting new rows, not when merging with existing rows under
  * `ignoreDuplicates: false`. This also only applies when doing bulk upserts.
  *
  * @example Upsert a single row using a unique key
  * ```ts
  * // Upserting a single row, overwriting based on the 'username' unique column
  * const { data, error } = await supabase
  *   .from('users')
  *   .upsert({ username: 'supabot' }, { onConflict: 'username' })
  *
  * // Example response:
  * // {
  * //   data: [
  * //     { id: 4, message: 'bar', username: 'supabot' }
  * //   ],
  * //   error: null
  * // }
  * ```
  *
  * @example Upsert with conflict resolution and exact row counting
  * ```ts
  * // Upserting and returning exact count
  * const { data, error, count } = await supabase
  *   .from('users')
  *   .upsert(
  *     {
  *       id: 3,
  *       message: 'foo',
  *       username: 'supabot'
  *     },
  *     {
  *       onConflict: 'username',
  *       count: 'exact'
  *     }
  *   )
  *
  * // Example response:
  * // {
  * //   data: [
  * //     {
  * //       id: 42,
  * //       handle: "saoirse",
  * //       display_name: "Saoirse"
  * //     }
  * //   ],
  * //   count: 1,
  * //   error: null
  * // }
  * ```
  *
  * @category Database
  *
  * @remarks
  * - Primary keys must be included in `values` to use upsert.
  *
  * @example Upsert your data
  * ```ts
  * const { data, error } = await supabase
  *   .from('instruments')
  *   .upsert({ id: 1, name: 'piano' })
  *   .select()
  * ```
  *
  * @exampleSql Upsert your data
  * ```sql
  * create table
  *   instruments (id int8 primary key, name text);
  *
  * insert into
  *   instruments (id, name)
  * values
  *   (1, 'harpsichord');
  * ```
  *
  * @exampleResponse Upsert your data
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "name": "piano"
  *     }
  *   ],
  *   "status": 201,
  *   "statusText": "Created"
  * }
  * ```
  *
  * @example Bulk Upsert your data
  * ```ts
  * const { data, error } = await supabase
  *   .from('instruments')
  *   .upsert([
  *     { id: 1, name: 'piano' },
  *     { id: 2, name: 'harp' },
  *   ])
  *   .select()
  * ```
  *
  * @exampleSql Bulk Upsert your data
  * ```sql
  * create table
  *   instruments (id int8 primary key, name text);
  *
  * insert into
  *   instruments (id, name)
  * values
  *   (1, 'harpsichord');
  * ```
  *
  * @exampleResponse Bulk Upsert your data
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "name": "piano"
  *     },
  *     {
  *       "id": 2,
  *       "name": "harp"
  *     }
  *   ],
  *   "status": 201,
  *   "statusText": "Created"
  * }
  * ```
  *
  * @exampleDescription Upserting into tables with constraints
  * In the following query, `upsert()` implicitly uses the `id`
  * (primary key) column to determine conflicts. If there is no existing
  * row with the same `id`, `upsert()` inserts a new row, which
  * will fail in this case as there is already a row with `handle` `"saoirse"`.
  * Using the `onConflict` option, you can instruct `upsert()` to use
  * another column with a unique constraint to determine conflicts.
  *
  * @example Upserting into tables with constraints
  * ```ts
  * const { data, error } = await supabase
  *   .from('users')
  *   .upsert({ id: 42, handle: 'saoirse', display_name: 'Saoirse' })
  *   .select()
  * ```
  *
  * @exampleSql Upserting into tables with constraints
  * ```sql
  * create table
  *   users (
  *     id int8 generated by default as identity primary key,
  *     handle text not null unique,
  *     display_name text
  *   );
  *
  * insert into
  *   users (id, handle, display_name)
  * values
  *   (1, 'saoirse', null);
  * ```
  *
  * @exampleResponse Upserting into tables with constraints
  * ```json
  * {
  *   "error": {
  *     "code": "23505",
  *     "details": "Key (handle)=(saoirse) already exists.",
  *     "hint": null,
  *     "message": "duplicate key value violates unique constraint \"users_handle_key\""
  *   },
  *   "status": 409,
  *   "statusText": "Conflict"
  * }
  * ```
  */
  upsert(a, { onConflict: e, ignoreDuplicates: t = !1, count: r, defaultToNull: n = !0 } = {}) {
    var i;
    const s = "POST", { url: o, headers: l } = this.cloneRequestState();
    if (l.append("Prefer", `resolution=${t ? "ignore" : "merge"}-duplicates`), e !== void 0 && o.searchParams.set("on_conflict", e), r && l.append("Prefer", `count=${r}`), n || l.append("Prefer", "missing=default"), Array.isArray(a)) {
      const u = a.reduce((f, d) => f.concat(Object.keys(d)), []);
      if (u.length > 0) {
        const f = [...new Set(u)].map((d) => `"${d}"`);
        o.searchParams.set("columns", f.join(","));
      }
    }
    return new It({
      method: s,
      url: o,
      headers: l,
      schema: this.schema,
      body: a,
      fetch: (i = this.fetch) !== null && i !== void 0 ? i : fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
  /**
  * Perform an UPDATE on the table or view.
  *
  * By default, updated rows are not returned. To return it, chain the call
  * with `.select()` after filters.
  *
  * @param values - The values to update with
  *
  * @param options - Named parameters
  *
  * @param options.count - Count algorithm to use to count updated rows.
  *
  * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
  * hood.
  *
  * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
  * statistics under the hood.
  *
  * `"estimated"`: Uses exact count for low numbers and planned count for high
  * numbers.
  *
  * @category Database
  *
  * @remarks
  * - `update()` should always be combined with [Filters](/docs/reference/javascript/using-filters) to target the item(s) you wish to update.
  *
  * @example Updating your data
  * ```ts
  * const { error } = await supabase
  *   .from('instruments')
  *   .update({ name: 'piano' })
  *   .eq('id', 1)
  * ```
  *
  * @exampleSql Updating your data
  * ```sql
  * create table
  *   instruments (id int8 primary key, name text);
  *
  * insert into
  *   instruments (id, name)
  * values
  *   (1, 'harpsichord');
  * ```
  *
  * @exampleResponse Updating your data
  * ```json
  * {
  *   "status": 204,
  *   "statusText": "No Content"
  * }
  * ```
  *
  * @example Update a record and return it
  * ```ts
  * const { data, error } = await supabase
  *   .from('instruments')
  *   .update({ name: 'piano' })
  *   .eq('id', 1)
  *   .select()
  * ```
  *
  * @exampleSql Update a record and return it
  * ```sql
  * create table
  *   instruments (id int8 primary key, name text);
  *
  * insert into
  *   instruments (id, name)
  * values
  *   (1, 'harpsichord');
  * ```
  *
  * @exampleResponse Update a record and return it
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "name": "piano"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @exampleDescription Updating JSON data
  * Postgres offers some
  * [operators](/docs/guides/database/json#query-the-jsonb-data) for
  * working with JSON data. Currently, it is only possible to update the entire JSON document.
  *
  * @example Updating JSON data
  * ```ts
  * const { data, error } = await supabase
  *   .from('users')
  *   .update({
  *     address: {
  *       street: 'Melrose Place',
  *       postcode: 90210
  *     }
  *   })
  *   .eq('address->postcode', 90210)
  *   .select()
  * ```
  *
  * @exampleSql Updating JSON data
  * ```sql
  * create table
  *   users (
  *     id int8 primary key,
  *     name text,
  *     address jsonb
  *   );
  *
  * insert into
  *   users (id, name, address)
  * values
  *   (1, 'Michael', '{ "postcode": 90210 }');
  * ```
  *
  * @exampleResponse Updating JSON data
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "name": "Michael",
  *       "address": {
  *         "street": "Melrose Place",
  *         "postcode": 90210
  *       }
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  update(a, { count: e } = {}) {
    var t;
    const r = "PATCH", { url: n, headers: i } = this.cloneRequestState();
    return e && i.append("Prefer", `count=${e}`), new It({
      method: r,
      url: n,
      headers: i,
      schema: this.schema,
      body: a,
      fetch: (t = this.fetch) !== null && t !== void 0 ? t : fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
  /**
  * Perform a DELETE on the table or view.
  *
  * By default, deleted rows are not returned. To return it, chain the call
  * with `.select()` after filters.
  *
  * @param options - Named parameters
  *
  * @param options.count - Count algorithm to use to count deleted rows.
  *
  * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
  * hood.
  *
  * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
  * statistics under the hood.
  *
  * `"estimated"`: Uses exact count for low numbers and planned count for high
  * numbers.
  *
  * @category Database
  *
  * @remarks
  * - `delete()` should always be combined with [filters](/docs/reference/javascript/using-filters) to target the item(s) you wish to delete.
  * - If you use `delete()` with filters and you have
  *   [RLS](/docs/learn/auth-deep-dive/auth-row-level-security) enabled, only
  *   rows visible through `SELECT` policies are deleted. Note that by default
  *   no rows are visible, so you need at least one `SELECT`/`ALL` policy that
  *   makes the rows visible.
  * - When using `delete().in()`, specify an array of values to target multiple rows with a single query. This is particularly useful for batch deleting entries that share common criteria, such as deleting users by their IDs. Ensure that the array you provide accurately represents all records you intend to delete to avoid unintended data removal.
  *
  * @example Delete a single record
  * ```ts
  * const response = await supabase
  *   .from('countries')
  *   .delete()
  *   .eq('id', 1)
  * ```
  *
  * @exampleSql Delete a single record
  * ```sql
  * create table
  *   countries (id int8 primary key, name text);
  *
  * insert into
  *   countries (id, name)
  * values
  *   (1, 'Mordor');
  * ```
  *
  * @exampleResponse Delete a single record
  * ```json
  * {
  *   "status": 204,
  *   "statusText": "No Content"
  * }
  * ```
  *
  * @example Delete a record and return it
  * ```ts
  * const { data, error } = await supabase
  *   .from('countries')
  *   .delete()
  *   .eq('id', 1)
  *   .select()
  * ```
  *
  * @exampleSql Delete a record and return it
  * ```sql
  * create table
  *   countries (id int8 primary key, name text);
  *
  * insert into
  *   countries (id, name)
  * values
  *   (1, 'Mordor');
  * ```
  *
  * @exampleResponse Delete a record and return it
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "name": "Mordor"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @example Delete multiple records
  * ```ts
  * const response = await supabase
  *   .from('countries')
  *   .delete()
  *   .in('id', [1, 2, 3])
  * ```
  *
  * @exampleSql Delete multiple records
  * ```sql
  * create table
  *   countries (id int8 primary key, name text);
  *
  * insert into
  *   countries (id, name)
  * values
  *   (1, 'Rohan'), (2, 'The Shire'), (3, 'Mordor');
  * ```
  *
  * @exampleResponse Delete multiple records
  * ```json
  * {
  *   "status": 204,
  *   "statusText": "No Content"
  * }
  * ```
  */
  delete({ count: a } = {}) {
    var e;
    const t = "DELETE", { url: r, headers: n } = this.cloneRequestState();
    return a && n.append("Prefer", `count=${a}`), new It({
      method: t,
      url: r,
      headers: n,
      schema: this.schema,
      fetch: (e = this.fetch) !== null && e !== void 0 ? e : fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
};
function da(a) {
  "@babel/helpers - typeof";
  return da = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, da(a);
}
function gu(a, e) {
  if (da(a) != "object" || !a) return a;
  var t = a[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(a, e);
    if (da(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(a);
}
function mu(a) {
  var e = gu(a, "string");
  return da(e) == "symbol" ? e : e + "";
}
function pu(a, e, t) {
  return (e = mu(e)) in a ? Object.defineProperty(a, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : a[e] = t, a;
}
function Si(a, e) {
  var t = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(a);
    e && (r = r.filter(function(n) {
      return Object.getOwnPropertyDescriptor(a, n).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function Ua(a) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Si(Object(t), !0).forEach(function(r) {
      pu(a, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(t)) : Si(Object(t)).forEach(function(r) {
      Object.defineProperty(a, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return a;
}
var yu = class Os {
  /**
  * Creates a PostgREST client.
  *
  * @param url - URL of the PostgREST endpoint
  * @param options - Named parameters
  * @param options.headers - Custom headers
  * @param options.schema - Postgres schema to switch to
  * @param options.fetch - Custom fetch
  * @param options.timeout - Optional timeout in milliseconds for all requests. When set, requests will automatically abort after this duration to prevent indefinite hangs.
  * @param options.urlLengthLimit - Maximum URL length in characters before warnings/errors are triggered. Defaults to 8000.
  * @param options.retry - Enable or disable automatic retries for transient errors.
  *   When enabled, idempotent requests (GET, HEAD, OPTIONS) that fail with network
  *   errors or HTTP 503/520 responses will be automatically retried up to 3 times
  *   with exponential backoff (1s, 2s, 4s). Defaults to `true`.
  * @example Using supabase-js (recommended)
  * ```ts
  * import { createClient } from '@supabase/supabase-js'
  *
  * const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key')
  * const { data, error } = await supabase.from('profiles').select('*')
  * ```
  *
  * @category Database
  *
  * @remarks
  * - A `timeout` option (in milliseconds) can be set to automatically abort requests that take too long.
  * - A `urlLengthLimit` option (default: 8000) can be set to control when URL length warnings are included in error messages for aborted requests.
  *
  * @example Standalone import for bundle-sensitive environments
  * ```ts
  * import { PostgrestClient } from '@supabase/postgrest-js'
  *
  * const postgrest = new PostgrestClient('https://xyzcompany.supabase.co/rest/v1', {
  *   headers: { apikey: 'your-publishable-key' },
  *   schema: 'public',
  *   timeout: 30000, // 30 second timeout
  * })
  * ```
  */
  constructor(e, { headers: t = {}, schema: r, fetch: n, timeout: i, urlLengthLimit: s = 8e3, retry: o } = {}) {
    this.url = e, this.headers = new Headers(t), this.schemaName = r, this.urlLengthLimit = s;
    const l = n ?? globalThis.fetch;
    i !== void 0 && i > 0 ? this.fetch = (u, f) => {
      const d = new AbortController(), g = setTimeout(() => d.abort(), i), b = f?.signal;
      if (b) {
        if (b.aborted)
          return clearTimeout(g), l(u, f);
        const v = () => {
          clearTimeout(g), d.abort();
        };
        return b.addEventListener("abort", v, { once: !0 }), l(u, Ua(Ua({}, f), {}, { signal: d.signal })).finally(() => {
          clearTimeout(g), b.removeEventListener("abort", v);
        });
      }
      return l(u, Ua(Ua({}, f), {}, { signal: d.signal })).finally(() => clearTimeout(g));
    } : this.fetch = l, this.retry = o;
  }
  /**
  * Perform a query on a table or a view.
  *
  * @param relation - The table or view name to query
  *
  * @category Database
  */
  from(e) {
    if (!e || typeof e != "string" || e.trim() === "") throw new Error("Invalid relation name: relation must be a non-empty string.");
    return new fu(new URL(`${this.url}/${e}`), {
      headers: new Headers(this.headers),
      schema: this.schemaName,
      fetch: this.fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
  /**
  * Select a schema to query or perform an function (rpc) call.
  *
  * The schema needs to be on the list of exposed schemas inside Supabase.
  *
  * @param schema - The schema to query
  *
  * @category Database
  */
  schema(e) {
    return new Os(this.url, {
      headers: this.headers,
      schema: e,
      fetch: this.fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
  /**
  * Perform a function call.
  *
  * @param fn - The function name to call
  * @param args - The arguments to pass to the function call
  * @param options - Named parameters
  * @param options.head - When set to `true`, `data` will not be returned.
  * Useful if you only need the count.
  * @param options.get - When set to `true`, the function will be called with
  * read-only access mode.
  * @param options.count - Count algorithm to use to count rows returned by the
  * function. Only applicable for [set-returning
  * functions](https://www.postgresql.org/docs/current/functions-srf.html).
  *
  * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
  * hood.
  *
  * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
  * statistics under the hood.
  *
  * `"estimated"`: Uses exact count for low numbers and planned count for high
  * numbers.
  *
  * @example
  * ```ts
  * // For cross-schema functions where type inference fails, use overrideTypes:
  * const { data } = await supabase
  *   .schema('schema_b')
  *   .rpc('function_a', {})
  *   .overrideTypes<{ id: string; user_id: string }[]>()
  * ```
  *
  * @category Database
  *
  * @example Call a Postgres function without arguments
  * ```ts
  * const { data, error } = await supabase.rpc('hello_world')
  * ```
  *
  * @exampleSql Call a Postgres function without arguments
  * ```sql
  * create function hello_world() returns text as $$
  *   select 'Hello world';
  * $$ language sql;
  * ```
  *
  * @exampleResponse Call a Postgres function without arguments
  * ```json
  * {
  *   "data": "Hello world",
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @example Call a Postgres function with arguments
  * ```ts
  * const { data, error } = await supabase.rpc('echo', { say: '👋' })
  * ```
  *
  * @exampleSql Call a Postgres function with arguments
  * ```sql
  * create function echo(say text) returns text as $$
  *   select say;
  * $$ language sql;
  * ```
  *
  * @exampleResponse Call a Postgres function with arguments
  * ```json
  *   {
  *     "data": "👋",
  *     "status": 200,
  *     "statusText": "OK"
  *   }
  *
  * ```
  *
  * @exampleDescription Bulk processing
  * You can process large payloads by passing in an array as an argument.
  *
  * @example Bulk processing
  * ```ts
  * const { data, error } = await supabase.rpc('add_one_each', { arr: [1, 2, 3] })
  * ```
  *
  * @exampleSql Bulk processing
  * ```sql
  * create function add_one_each(arr int[]) returns int[] as $$
  *   select array_agg(n + 1) from unnest(arr) as n;
  * $$ language sql;
  * ```
  *
  * @exampleResponse Bulk processing
  * ```json
  * {
  *   "data": [
  *     2,
  *     3,
  *     4
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @exampleDescription Call a Postgres function with filters
  * Postgres functions that return tables can also be combined with [Filters](/docs/reference/javascript/using-filters) and [Modifiers](/docs/reference/javascript/using-modifiers).
  *
  * @example Call a Postgres function with filters
  * ```ts
  * const { data, error } = await supabase
  *   .rpc('list_stored_countries')
  *   .eq('id', 1)
  *   .single()
  * ```
  *
  * @exampleSql Call a Postgres function with filters
  * ```sql
  * create table
  *   countries (id int8 primary key, name text);
  *
  * insert into
  *   countries (id, name)
  * values
  *   (1, 'Rohan'),
  *   (2, 'The Shire');
  *
  * create function list_stored_countries() returns setof countries as $$
  *   select * from countries;
  * $$ language sql;
  * ```
  *
  * @exampleResponse Call a Postgres function with filters
  * ```json
  * {
  *   "data": {
  *     "id": 1,
  *     "name": "Rohan"
  *   },
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @example Call a read-only Postgres function
  * ```ts
  * const { data, error } = await supabase.rpc('hello_world', undefined, { get: true })
  * ```
  *
  * @exampleSql Call a read-only Postgres function
  * ```sql
  * create function hello_world() returns text as $$
  *   select 'Hello world';
  * $$ language sql;
  * ```
  *
  * @exampleResponse Call a read-only Postgres function
  * ```json
  * {
  *   "data": "Hello world",
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  rpc(e, t = {}, { head: r = !1, get: n = !1, count: i } = {}) {
    var s;
    let o;
    const l = new URL(`${this.url}/rpc/${e}`);
    let u;
    const f = (b) => b !== null && typeof b == "object" && (!Array.isArray(b) || b.some(f)), d = r && Object.values(t).some(f);
    d ? (o = "POST", u = t) : r || n ? (o = r ? "HEAD" : "GET", Object.entries(t).filter(([b, v]) => v !== void 0).map(([b, v]) => [b, Array.isArray(v) ? `{${v.join(",")}}` : `${v}`]).forEach(([b, v]) => {
      l.searchParams.append(b, v);
    })) : (o = "POST", u = t);
    const g = new Headers(this.headers);
    return d ? g.set("Prefer", i ? `count=${i},return=minimal` : "return=minimal") : i && g.set("Prefer", `count=${i}`), new It({
      method: o,
      url: l,
      headers: g,
      schema: this.schemaName,
      body: u,
      fetch: (s = this.fetch) !== null && s !== void 0 ? s : fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
};
class bu {
  /**
   * Static-only utility – prevent instantiation.
   */
  constructor() {
  }
  static detectEnvironment() {
    var e;
    if (typeof WebSocket < "u")
      return { type: "native", wsConstructor: WebSocket };
    const t = globalThis;
    if (typeof globalThis < "u" && typeof t.WebSocket < "u")
      return { type: "native", wsConstructor: t.WebSocket };
    const r = typeof global < "u" ? global : void 0;
    if (r && typeof r.WebSocket < "u")
      return { type: "native", wsConstructor: r.WebSocket };
    if (typeof globalThis < "u" && typeof t.WebSocketPair < "u" && typeof globalThis.WebSocket > "u")
      return {
        type: "cloudflare",
        error: "Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",
        workaround: "Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."
      };
    if (typeof globalThis < "u" && t.EdgeRuntime || typeof navigator < "u" && (!((e = navigator.userAgent) === null || e === void 0) && e.includes("Vercel-Edge")))
      return {
        type: "unsupported",
        error: "Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",
        workaround: "Use serverless functions or a different deployment target for WebSocket functionality."
      };
    const n = globalThis.process;
    if (n) {
      const i = n.versions;
      if (i && i.node) {
        const s = i.node, o = parseInt(s.replace(/^v/, "").split(".")[0]);
        return o >= 22 ? typeof globalThis.WebSocket < "u" ? { type: "native", wsConstructor: globalThis.WebSocket } : {
          type: "unsupported",
          error: `Node.js ${o} detected but native WebSocket not found.`,
          workaround: "Provide a WebSocket implementation via the transport option."
        } : {
          type: "unsupported",
          error: `Node.js ${o} detected without native WebSocket support.`,
          workaround: `For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`
        };
      }
    }
    return {
      type: "unsupported",
      error: "Unknown JavaScript runtime without WebSocket support.",
      workaround: "Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."
    };
  }
  /**
   * Returns the best available WebSocket constructor for the current runtime.
   *
   * @category Realtime
   *
   * @example Example with error handling
   * ```ts
   * try {
   *   const WS = WebSocketFactory.getWebSocketConstructor()
   *   const socket = new WS('wss://example.com/socket')
   * } catch (error) {
   *   console.error('WebSocket not available in this environment.', error)
   * }
   * ```
   */
  static getWebSocketConstructor() {
    const e = this.detectEnvironment();
    if (e.wsConstructor)
      return e.wsConstructor;
    let t = e.error || "WebSocket not supported in this environment.";
    throw e.workaround && (t += `

Suggested solution: ${e.workaround}`), new Error(t);
  }
  /**
   * Detects whether the runtime can establish WebSocket connections.
   *
   * @category Realtime
   *
   * @example Example in a Node.js script
   * ```ts
   * if (!WebSocketFactory.isWebSocketSupported()) {
   *   console.error('WebSockets are required for this script.')
   *   process.exitCode = 1
   * }
   * ```
   */
  static isWebSocketSupported() {
    try {
      const e = this.detectEnvironment();
      return e.type === "native" || e.type === "ws";
    } catch {
      return !1;
    }
  }
}
const wu = "2.105.4", vu = `realtime-js/${wu}`, _u = "1.0.0", Ds = "2.0.0", ku = Ds, Eu = 1e4, Au = 100, Qe = {
  closed: "closed",
  errored: "errored",
  joined: "joined",
  joining: "joining",
  leaving: "leaving"
}, js = {
  close: "phx_close",
  error: "phx_error",
  join: "phx_join",
  leave: "phx_leave",
  access_token: "access_token"
}, sn = {
  connecting: "connecting",
  closing: "closing",
  closed: "closed"
};
class Su {
  constructor(e) {
    this.HEADER_LENGTH = 1, this.USER_BROADCAST_PUSH_META_LENGTH = 6, this.KINDS = { userBroadcastPush: 3, userBroadcast: 4 }, this.BINARY_ENCODING = 0, this.JSON_ENCODING = 1, this.BROADCAST_EVENT = "broadcast", this.allowedMetadataKeys = [], this.allowedMetadataKeys = e ?? [];
  }
  encode(e, t) {
    if (e.event === this.BROADCAST_EVENT && !(e.payload instanceof ArrayBuffer) && typeof e.payload.event == "string")
      return t(this._binaryEncodeUserBroadcastPush(e));
    let r = [e.join_ref, e.ref, e.topic, e.event, e.payload];
    return t(JSON.stringify(r));
  }
  _binaryEncodeUserBroadcastPush(e) {
    var t;
    return this._isArrayBuffer((t = e.payload) === null || t === void 0 ? void 0 : t.payload) ? this._encodeBinaryUserBroadcastPush(e) : this._encodeJsonUserBroadcastPush(e);
  }
  _encodeBinaryUserBroadcastPush(e) {
    var t, r;
    const n = (r = (t = e.payload) === null || t === void 0 ? void 0 : t.payload) !== null && r !== void 0 ? r : new ArrayBuffer(0);
    return this._encodeUserBroadcastPush(e, this.BINARY_ENCODING, n);
  }
  _encodeJsonUserBroadcastPush(e) {
    var t, r;
    const n = (r = (t = e.payload) === null || t === void 0 ? void 0 : t.payload) !== null && r !== void 0 ? r : {}, s = new TextEncoder().encode(JSON.stringify(n)).buffer;
    return this._encodeUserBroadcastPush(e, this.JSON_ENCODING, s);
  }
  _encodeUserBroadcastPush(e, t, r) {
    var n, i;
    const s = e.topic, o = (n = e.ref) !== null && n !== void 0 ? n : "", l = (i = e.join_ref) !== null && i !== void 0 ? i : "", u = e.payload.event, f = this.allowedMetadataKeys ? this._pick(e.payload, this.allowedMetadataKeys) : {}, d = Object.keys(f).length === 0 ? "" : JSON.stringify(f);
    if (l.length > 255)
      throw new Error(`joinRef length ${l.length} exceeds maximum of 255`);
    if (o.length > 255)
      throw new Error(`ref length ${o.length} exceeds maximum of 255`);
    if (s.length > 255)
      throw new Error(`topic length ${s.length} exceeds maximum of 255`);
    if (u.length > 255)
      throw new Error(`userEvent length ${u.length} exceeds maximum of 255`);
    if (d.length > 255)
      throw new Error(`metadata length ${d.length} exceeds maximum of 255`);
    const g = this.USER_BROADCAST_PUSH_META_LENGTH + l.length + o.length + s.length + u.length + d.length, b = new ArrayBuffer(this.HEADER_LENGTH + g);
    let v = new DataView(b), A = 0;
    v.setUint8(A++, this.KINDS.userBroadcastPush), v.setUint8(A++, l.length), v.setUint8(A++, o.length), v.setUint8(A++, s.length), v.setUint8(A++, u.length), v.setUint8(A++, d.length), v.setUint8(A++, t), Array.from(l, (x) => v.setUint8(A++, x.charCodeAt(0))), Array.from(o, (x) => v.setUint8(A++, x.charCodeAt(0))), Array.from(s, (x) => v.setUint8(A++, x.charCodeAt(0))), Array.from(u, (x) => v.setUint8(A++, x.charCodeAt(0))), Array.from(d, (x) => v.setUint8(A++, x.charCodeAt(0)));
    var D = new Uint8Array(b.byteLength + r.byteLength);
    return D.set(new Uint8Array(b), 0), D.set(new Uint8Array(r), b.byteLength), D.buffer;
  }
  decode(e, t) {
    if (this._isArrayBuffer(e)) {
      let r = this._binaryDecode(e);
      return t(r);
    }
    if (typeof e == "string") {
      const r = JSON.parse(e), [n, i, s, o, l] = r;
      return t({ join_ref: n, ref: i, topic: s, event: o, payload: l });
    }
    return t({});
  }
  _binaryDecode(e) {
    const t = new DataView(e), r = t.getUint8(0), n = new TextDecoder();
    if (r === this.KINDS.userBroadcast)
      return this._decodeUserBroadcast(e, t, n);
  }
  _decodeUserBroadcast(e, t, r) {
    const n = t.getUint8(1), i = t.getUint8(2), s = t.getUint8(3), o = t.getUint8(4);
    let l = this.HEADER_LENGTH + 4;
    const u = r.decode(e.slice(l, l + n));
    l = l + n;
    const f = r.decode(e.slice(l, l + i));
    l = l + i;
    const d = r.decode(e.slice(l, l + s));
    l = l + s;
    const g = e.slice(l, e.byteLength), b = o === this.JSON_ENCODING ? JSON.parse(r.decode(g)) : g, v = {
      type: this.BROADCAST_EVENT,
      event: f,
      payload: b
    };
    return s > 0 && (v.meta = JSON.parse(d)), { join_ref: null, ref: null, topic: u, event: this.BROADCAST_EVENT, payload: v };
  }
  _isArrayBuffer(e) {
    var t;
    return e instanceof ArrayBuffer || ((t = e?.constructor) === null || t === void 0 ? void 0 : t.name) === "ArrayBuffer";
  }
  _pick(e, t) {
    return !e || typeof e != "object" ? {} : Object.fromEntries(Object.entries(e).filter(([r]) => t.includes(r)));
  }
}
var X;
(function(a) {
  a.abstime = "abstime", a.bool = "bool", a.date = "date", a.daterange = "daterange", a.float4 = "float4", a.float8 = "float8", a.int2 = "int2", a.int4 = "int4", a.int4range = "int4range", a.int8 = "int8", a.int8range = "int8range", a.json = "json", a.jsonb = "jsonb", a.money = "money", a.numeric = "numeric", a.oid = "oid", a.reltime = "reltime", a.text = "text", a.time = "time", a.timestamp = "timestamp", a.timestamptz = "timestamptz", a.timetz = "timetz", a.tsrange = "tsrange", a.tstzrange = "tstzrange";
})(X || (X = {}));
const Ti = (a, e, t = {}) => {
  var r;
  const n = (r = t.skipTypes) !== null && r !== void 0 ? r : [];
  return e ? Object.keys(e).reduce((i, s) => (i[s] = Tu(s, a, e, n), i), {}) : {};
}, Tu = (a, e, t, r) => {
  const n = e.find((o) => o.name === a), i = n?.type, s = t[a];
  return i && !r.includes(i) ? Is(i, s) : on(s);
}, Is = (a, e) => {
  if (a.charAt(0) === "_") {
    const t = a.slice(1, a.length);
    return xu(e, t);
  }
  switch (a) {
    case X.bool:
      return Nu(e);
    case X.float4:
    case X.float8:
    case X.int2:
    case X.int4:
    case X.int8:
    case X.numeric:
    case X.oid:
      return Ru(e);
    case X.json:
    case X.jsonb:
      return Cu(e);
    case X.timestamp:
      return Ou(e);
    // Format to be consistent with PostgREST
    case X.abstime:
    // To allow users to cast it based on Timezone
    case X.date:
    // To allow users to cast it based on Timezone
    case X.daterange:
    case X.int4range:
    case X.int8range:
    case X.money:
    case X.reltime:
    // To allow users to cast it based on Timezone
    case X.text:
    case X.time:
    // To allow users to cast it based on Timezone
    case X.timestamptz:
    // To allow users to cast it based on Timezone
    case X.timetz:
    // To allow users to cast it based on Timezone
    case X.tsrange:
    case X.tstzrange:
      return on(e);
    default:
      return on(e);
  }
}, on = (a) => a, Nu = (a) => {
  switch (a) {
    case "t":
      return !0;
    case "f":
      return !1;
    default:
      return a;
  }
}, Ru = (a) => {
  if (typeof a == "string") {
    const e = parseFloat(a);
    if (!Number.isNaN(e))
      return e;
  }
  return a;
}, Cu = (a) => {
  if (typeof a == "string")
    try {
      return JSON.parse(a);
    } catch {
      return a;
    }
  return a;
}, xu = (a, e) => {
  if (typeof a != "string")
    return a;
  const t = a.length - 1, r = a[t];
  if (a[0] === "{" && r === "}") {
    let i;
    const s = a.slice(1, t);
    try {
      i = JSON.parse("[" + s + "]");
    } catch {
      i = s ? s.split(",") : [];
    }
    return i.map((o) => Is(e, o));
  }
  return a;
}, Ou = (a) => typeof a == "string" ? a.replace(" ", "T") : a, Ps = (a) => {
  const e = new URL(a);
  return e.protocol = e.protocol.replace(/^ws/i, "http"), e.pathname = e.pathname.replace(/\/+$/, "").replace(/\/socket\/websocket$/i, "").replace(/\/socket$/i, "").replace(/\/websocket$/i, ""), e.pathname === "" || e.pathname === "/" ? e.pathname = "/api/broadcast" : e.pathname = e.pathname + "/api/broadcast", e.href;
};
var la = (a) => typeof a == "function" ? (
  /** @type {() => T} */
  a
) : function() {
  return a;
}, Du = typeof self < "u" ? self : null, Pt = typeof window < "u" ? window : null, Fe = Du || Pt || globalThis, ju = "2.0.0", Iu = 1e4, Pu = 1e3, Ue = (
  /** @type {const} */
  { connecting: 0, open: 1, closing: 2, closed: 3 }
), be = (
  /** @type {const} */
  {
    closed: "closed",
    errored: "errored",
    joined: "joined",
    joining: "joining",
    leaving: "leaving"
  }
), qe = (
  /** @type {const} */
  {
    close: "phx_close",
    error: "phx_error",
    join: "phx_join",
    reply: "phx_reply",
    leave: "phx_leave"
  }
), ln = (
  /** @type {const} */
  {
    longpoll: "longpoll",
    websocket: "websocket"
  }
), Lu = (
  /** @type {const} */
  {
    complete: 4
  }
), un = "base64url.bearer.phx.", $a = class {
  /**
   * Initializes the Push
   * @param {Channel} channel - The Channel
   * @param {ChannelEvent} event - The event, for example `"phx_join"`
   * @param {() => Record<string, unknown>} payload - The payload, for example `{user_id: 123}`
   * @param {number} timeout - The push timeout in milliseconds
   */
  constructor(a, e, t, r) {
    this.channel = a, this.event = e, this.payload = t || function() {
      return {};
    }, this.receivedResp = null, this.timeout = r, this.timeoutTimer = null, this.recHooks = [], this.sent = !1, this.ref = void 0;
  }
  /**
   *
   * @param {number} timeout
   */
  resend(a) {
    this.timeout = a, this.reset(), this.send();
  }
  /**
   *
   */
  send() {
    this.hasReceived("timeout") || (this.startTimeout(), this.sent = !0, this.channel.socket.push({
      topic: this.channel.topic,
      event: this.event,
      payload: this.payload(),
      ref: this.ref,
      join_ref: this.channel.joinRef()
    }));
  }
  /**
   *
   * @param {string} status
   * @param {(response: any) => void} callback
   */
  receive(a, e) {
    return this.hasReceived(a) && e(this.receivedResp.response), this.recHooks.push({ status: a, callback: e }), this;
  }
  reset() {
    this.cancelRefEvent(), this.ref = null, this.refEvent = null, this.receivedResp = null, this.sent = !1;
  }
  destroy() {
    this.cancelRefEvent(), this.cancelTimeout();
  }
  /**
   * @private
   */
  matchReceive({ status: a, response: e, _ref: t }) {
    this.recHooks.filter((r) => r.status === a).forEach((r) => r.callback(e));
  }
  /**
   * @private
   */
  cancelRefEvent() {
    this.refEvent && this.channel.off(this.refEvent);
  }
  cancelTimeout() {
    clearTimeout(this.timeoutTimer), this.timeoutTimer = null;
  }
  startTimeout() {
    this.timeoutTimer && this.cancelTimeout(), this.ref = this.channel.socket.makeRef(), this.refEvent = this.channel.replyEventName(this.ref), this.channel.on(this.refEvent, (a) => {
      this.cancelRefEvent(), this.cancelTimeout(), this.receivedResp = a, this.matchReceive(a);
    }), this.timeoutTimer = setTimeout(() => {
      this.trigger("timeout", {});
    }, this.timeout);
  }
  /**
   * @private
   */
  hasReceived(a) {
    return this.receivedResp && this.receivedResp.status === a;
  }
  trigger(a, e) {
    this.channel.trigger(this.refEvent, { status: a, response: e });
  }
}, Ls = class {
  /**
  * @param {() => void} callback
  * @param {(tries: number) => number} timerCalc
  */
  constructor(a, e) {
    this.callback = a, this.timerCalc = e, this.timer = void 0, this.tries = 0;
  }
  reset() {
    this.tries = 0, clearTimeout(this.timer);
  }
  /**
   * Cancels any previous scheduleTimeout and schedules callback
   */
  scheduleTimeout() {
    clearTimeout(this.timer), this.timer = setTimeout(() => {
      this.tries = this.tries + 1, this.callback();
    }, this.timerCalc(this.tries + 1));
  }
}, zu = class {
  /**
   * @param {string} topic
   * @param {Params | (() => Params)} params
   * @param {Socket} socket
   */
  constructor(a, e, t) {
    this.state = be.closed, this.topic = a, this.params = la(e || {}), this.socket = t, this.bindings = [], this.bindingRef = 0, this.timeout = this.socket.timeout, this.joinedOnce = !1, this.joinPush = new $a(this, qe.join, this.params, this.timeout), this.pushBuffer = [], this.stateChangeRefs = [], this.rejoinTimer = new Ls(() => {
      this.socket.isConnected() && this.rejoin();
    }, this.socket.rejoinAfterMs), this.stateChangeRefs.push(this.socket.onError(() => this.rejoinTimer.reset())), this.stateChangeRefs.push(
      this.socket.onOpen(() => {
        this.rejoinTimer.reset(), this.isErrored() && this.rejoin();
      })
    ), this.joinPush.receive("ok", () => {
      this.state = be.joined, this.rejoinTimer.reset(), this.pushBuffer.forEach((r) => r.send()), this.pushBuffer = [];
    }), this.joinPush.receive("error", (r) => {
      this.state = be.errored, this.socket.hasLogger() && this.socket.log("channel", `error ${this.topic}`, r), this.socket.isConnected() && this.rejoinTimer.scheduleTimeout();
    }), this.onClose(() => {
      this.rejoinTimer.reset(), this.socket.hasLogger() && this.socket.log("channel", `close ${this.topic}`), this.state = be.closed, this.socket.remove(this);
    }), this.onError((r) => {
      this.socket.hasLogger() && this.socket.log("channel", `error ${this.topic}`, r), this.isJoining() && this.joinPush.reset(), this.state = be.errored, this.socket.isConnected() && this.rejoinTimer.scheduleTimeout();
    }), this.joinPush.receive("timeout", () => {
      this.socket.hasLogger() && this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout), new $a(this, qe.leave, la({}), this.timeout).send(), this.state = be.errored, this.joinPush.reset(), this.socket.isConnected() && this.rejoinTimer.scheduleTimeout();
    }), this.on(qe.reply, (r, n) => {
      this.trigger(this.replyEventName(n), r);
    });
  }
  /**
   * Join the channel
   * @param {number} timeout
   * @returns {Push}
   */
  join(a = this.timeout) {
    if (this.joinedOnce)
      throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");
    return this.timeout = a, this.joinedOnce = !0, this.rejoin(), this.joinPush;
  }
  /**
   * Teardown the channel.
   *
   * Destroys and stops related timers.
   */
  teardown() {
    this.pushBuffer.forEach((a) => a.destroy()), this.pushBuffer = [], this.rejoinTimer.reset(), this.joinPush.destroy(), this.state = be.closed, this.bindings = [];
  }
  /**
   * Hook into channel close
   * @param {ChannelBindingCallback} callback
   */
  onClose(a) {
    this.on(qe.close, a);
  }
  /**
   * Hook into channel errors
   * @param {ChannelOnErrorCallback} callback
   * @return {number}
   */
  onError(a) {
    return this.on(qe.error, (e) => a(e));
  }
  /**
   * Subscribes on channel events
   *
   * Subscription returns a ref counter, which can be used later to
   * unsubscribe the exact event listener
   *
   * @example
   * const ref1 = channel.on("event", do_stuff)
   * const ref2 = channel.on("event", do_other_stuff)
   * channel.off("event", ref1)
   * // Since unsubscription, do_stuff won't fire,
   * // while do_other_stuff will keep firing on the "event"
   *
   * @param {string} event
   * @param {ChannelBindingCallback} callback
   * @returns {number} ref
   */
  on(a, e) {
    let t = this.bindingRef++;
    return this.bindings.push({ event: a, ref: t, callback: e }), t;
  }
  /**
   * Unsubscribes off of channel events
   *
   * Use the ref returned from a channel.on() to unsubscribe one
   * handler, or pass nothing for the ref to unsubscribe all
   * handlers for the given event.
   *
   * @example
   * // Unsubscribe the do_stuff handler
   * const ref1 = channel.on("event", do_stuff)
   * channel.off("event", ref1)
   *
   * // Unsubscribe all handlers from event
   * channel.off("event")
   *
   * @param {string} event
   * @param {number} [ref]
   */
  off(a, e) {
    this.bindings = this.bindings.filter((t) => !(t.event === a && (typeof e > "u" || e === t.ref)));
  }
  /**
   * @private
   */
  canPush() {
    return this.socket.isConnected() && this.isJoined();
  }
  /**
   * Sends a message `event` to phoenix with the payload `payload`.
   * Phoenix receives this in the `handle_in(event, payload, socket)`
   * function. if phoenix replies or it times out (default 10000ms),
   * then optionally the reply can be received.
   *
   * @example
   * channel.push("event")
   *   .receive("ok", payload => console.log("phoenix replied:", payload))
   *   .receive("error", err => console.log("phoenix errored", err))
   *   .receive("timeout", () => console.log("timed out pushing"))
   * @param {string} event
   * @param {Object} payload
   * @param {number} [timeout]
   * @returns {Push}
   */
  push(a, e, t = this.timeout) {
    if (e = e || {}, !this.joinedOnce)
      throw new Error(`tried to push '${a}' to '${this.topic}' before joining. Use channel.join() before pushing events`);
    let r = new $a(this, a, function() {
      return e;
    }, t);
    return this.canPush() ? r.send() : (r.startTimeout(), this.pushBuffer.push(r)), r;
  }
  /** Leaves the channel
   *
   * Unsubscribes from server events, and
   * instructs channel to terminate on server
   *
   * Triggers onClose() hooks
   *
   * To receive leave acknowledgements, use the `receive`
   * hook to bind to the server ack, ie:
   *
   * @example
   * channel.leave().receive("ok", () => alert("left!") )
   *
   * @param {number} timeout
   * @returns {Push}
   */
  leave(a = this.timeout) {
    this.rejoinTimer.reset(), this.joinPush.cancelTimeout(), this.state = be.leaving;
    let e = () => {
      this.socket.hasLogger() && this.socket.log("channel", `leave ${this.topic}`), this.trigger(qe.close, "leave");
    }, t = new $a(this, qe.leave, la({}), a);
    return t.receive("ok", () => e()).receive("timeout", () => e()), t.send(), this.canPush() || t.trigger("ok", {}), t;
  }
  /**
   * Overridable message hook
   *
   * Receives all events for specialized message handling
   * before dispatching to the channel callbacks.
   *
   * Must return the payload, modified or unmodified
   * @type{ChannelOnMessage}
   */
  onMessage(a, e, t) {
    return e;
  }
  /**
   * Overridable filter hook
   *
   * If this function returns `true`, `binding`'s callback will be called.
   *
   * @type{ChannelFilterBindings}
   */
  filterBindings(a, e, t) {
    return !0;
  }
  isMember(a, e, t, r) {
    return this.topic !== a ? !1 : r && r !== this.joinRef() ? (this.socket.hasLogger() && this.socket.log("channel", "dropping outdated message", { topic: a, event: e, payload: t, joinRef: r }), !1) : !0;
  }
  joinRef() {
    return this.joinPush.ref;
  }
  /**
   * @private
   */
  rejoin(a = this.timeout) {
    this.isLeaving() || (this.socket.leaveOpenTopic(this.topic), this.state = be.joining, this.joinPush.resend(a));
  }
  /**
   * @param {string} event
   * @param {unknown} [payload]
   * @param {?string} [ref]
   * @param {?string} [joinRef]
   */
  trigger(a, e, t, r) {
    let n = this.onMessage(a, e, t, r);
    if (e && !n)
      throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");
    let i = this.bindings.filter((s) => s.event === a && this.filterBindings(s, e, t));
    for (let s = 0; s < i.length; s++)
      i[s].callback(n, t, r || this.joinRef());
  }
  /**
  * @param {string} ref
  */
  replyEventName(a) {
    return `chan_reply_${a}`;
  }
  isClosed() {
    return this.state === be.closed;
  }
  isErrored() {
    return this.state === be.errored;
  }
  isJoined() {
    return this.state === be.joined;
  }
  isJoining() {
    return this.state === be.joining;
  }
  isLeaving() {
    return this.state === be.leaving;
  }
}, Qa = class {
  static request(a, e, t, r, n, i, s) {
    if (Fe.XDomainRequest) {
      let o = new Fe.XDomainRequest();
      return this.xdomainRequest(o, a, e, r, n, i, s);
    } else if (Fe.XMLHttpRequest) {
      let o = new Fe.XMLHttpRequest();
      return this.xhrRequest(o, a, e, t, r, n, i, s);
    } else {
      if (Fe.fetch && Fe.AbortController)
        return this.fetchRequest(a, e, t, r, n, i, s);
      throw new Error("No suitable XMLHttpRequest implementation found");
    }
  }
  static fetchRequest(a, e, t, r, n, i, s) {
    let o = {
      method: a,
      headers: t,
      body: r
    }, l = null;
    return n && (l = new AbortController(), setTimeout(() => l.abort(), n), o.signal = l.signal), Fe.fetch(e, o).then((u) => u.text()).then((u) => this.parseJSON(u)).then((u) => s && s(u)).catch((u) => {
      u.name === "AbortError" && i ? i() : s && s(null);
    }), l;
  }
  static xdomainRequest(a, e, t, r, n, i, s) {
    return a.timeout = n, a.open(e, t), a.onload = () => {
      let o = this.parseJSON(a.responseText);
      s && s(o);
    }, i && (a.ontimeout = i), a.onprogress = () => {
    }, a.send(r), a;
  }
  static xhrRequest(a, e, t, r, n, i, s, o) {
    a.open(e, t, !0), a.timeout = i;
    for (let [l, u] of Object.entries(r))
      a.setRequestHeader(l, u);
    return a.onerror = () => o && o(null), a.onreadystatechange = () => {
      if (a.readyState === Lu.complete && o) {
        let l = this.parseJSON(a.responseText);
        o(l);
      }
    }, s && (a.ontimeout = s), a.send(n), a;
  }
  static parseJSON(a) {
    if (!a || a === "")
      return null;
    try {
      return JSON.parse(a);
    } catch {
      return console && console.log("failed to parse JSON response", a), null;
    }
  }
  static serialize(a, e) {
    let t = [];
    for (var r in a) {
      if (!Object.prototype.hasOwnProperty.call(a, r))
        continue;
      let n = e ? `${e}[${r}]` : r, i = a[r];
      typeof i == "object" ? t.push(this.serialize(i, n)) : t.push(encodeURIComponent(n) + "=" + encodeURIComponent(i));
    }
    return t.join("&");
  }
  static appendParams(a, e) {
    if (Object.keys(e).length === 0)
      return a;
    let t = a.match(/\?/) ? "&" : "?";
    return `${a}${t}${this.serialize(e)}`;
  }
}, Fu = (a) => {
  let e = "", t = new Uint8Array(a), r = t.byteLength;
  for (let n = 0; n < r; n++)
    e += String.fromCharCode(t[n]);
  return btoa(e);
}, Nt = class {
  constructor(a, e) {
    e && e.length === 2 && e[1].startsWith(un) && (this.authToken = atob(e[1].slice(un.length))), this.endPoint = null, this.token = null, this.skipHeartbeat = !0, this.reqs = /* @__PURE__ */ new Set(), this.awaitingBatchAck = !1, this.currentBatch = null, this.currentBatchTimer = null, this.batchBuffer = [], this.onopen = function() {
    }, this.onerror = function() {
    }, this.onmessage = function() {
    }, this.onclose = function() {
    }, this.pollEndpoint = this.normalizeEndpoint(a), this.readyState = Ue.connecting, setTimeout(() => this.poll(), 0);
  }
  normalizeEndpoint(a) {
    return a.replace("ws://", "http://").replace("wss://", "https://").replace(new RegExp("(.*)/" + ln.websocket), "$1/" + ln.longpoll);
  }
  endpointURL() {
    return Qa.appendParams(this.pollEndpoint, { token: this.token });
  }
  closeAndRetry(a, e, t) {
    this.close(a, e, t), this.readyState = Ue.connecting;
  }
  ontimeout() {
    this.onerror("timeout"), this.closeAndRetry(1005, "timeout", !1);
  }
  isActive() {
    return this.readyState === Ue.open || this.readyState === Ue.connecting;
  }
  poll() {
    const a = { Accept: "application/json" };
    this.authToken && (a["X-Phoenix-AuthToken"] = this.authToken), this.ajax("GET", a, null, () => this.ontimeout(), (e) => {
      if (e) {
        var { status: t, token: r, messages: n } = e;
        if (t === 410 && this.token !== null) {
          this.onerror(410), this.closeAndRetry(3410, "session_gone", !1);
          return;
        }
        this.token = r;
      } else
        t = 0;
      switch (t) {
        case 200:
          n.forEach((i) => {
            setTimeout(() => this.onmessage({ data: i }), 0);
          }), this.poll();
          break;
        case 204:
          this.poll();
          break;
        case 410:
          this.readyState = Ue.open, this.onopen({}), this.poll();
          break;
        case 403:
          this.onerror(403), this.close(1008, "forbidden", !1);
          break;
        case 0:
        case 500:
          this.onerror(500), this.closeAndRetry(1011, "internal server error", 500);
          break;
        default:
          throw new Error(`unhandled poll status ${t}`);
      }
    });
  }
  // we collect all pushes within the current event loop by
  // setTimeout 0, which optimizes back-to-back procedural
  // pushes against an empty buffer
  send(a) {
    typeof a != "string" && (a = Fu(a)), this.currentBatch ? this.currentBatch.push(a) : this.awaitingBatchAck ? this.batchBuffer.push(a) : (this.currentBatch = [a], this.currentBatchTimer = setTimeout(() => {
      this.batchSend(this.currentBatch), this.currentBatch = null;
    }, 0));
  }
  batchSend(a) {
    this.awaitingBatchAck = !0, this.ajax("POST", { "Content-Type": "application/x-ndjson" }, a.join(`
`), () => this.onerror("timeout"), (e) => {
      this.awaitingBatchAck = !1, !e || e.status !== 200 ? (this.onerror(e && e.status), this.closeAndRetry(1011, "internal server error", !1)) : this.batchBuffer.length > 0 && (this.batchSend(this.batchBuffer), this.batchBuffer = []);
    });
  }
  close(a, e, t) {
    for (let n of this.reqs)
      n.abort();
    this.readyState = Ue.closed;
    let r = Object.assign({ code: 1e3, reason: void 0, wasClean: !0 }, { code: a, reason: e, wasClean: t });
    this.batchBuffer = [], clearTimeout(this.currentBatchTimer), this.currentBatchTimer = null, typeof CloseEvent < "u" ? this.onclose(new CloseEvent("close", r)) : this.onclose(r);
  }
  ajax(a, e, t, r, n) {
    let i, s = () => {
      this.reqs.delete(i), r();
    };
    i = Qa.request(a, this.endpointURL(), e, t, this.timeout, s, (o) => {
      this.reqs.delete(i), this.isActive() && n(o);
    }), this.reqs.add(i);
  }
}, Uu = class sa {
  /**
   * Initializes the Presence
   * @param {Channel} channel - The Channel
   * @param {PresenceOptions} [opts] - The options, for example `{events: {state: "state", diff: "diff"}}`
   */
  constructor(e, t = {}) {
    let r = t.events || /** @type {PresenceEvents} */
    { state: "presence_state", diff: "presence_diff" };
    this.state = {}, this.pendingDiffs = [], this.channel = e, this.joinRef = null, this.caller = {
      onJoin: function() {
      },
      onLeave: function() {
      },
      onSync: function() {
      }
    }, this.channel.on(r.state, (n) => {
      let { onJoin: i, onLeave: s, onSync: o } = this.caller;
      this.joinRef = this.channel.joinRef(), this.state = sa.syncState(this.state, n, i, s), this.pendingDiffs.forEach((l) => {
        this.state = sa.syncDiff(this.state, l, i, s);
      }), this.pendingDiffs = [], o();
    }), this.channel.on(r.diff, (n) => {
      let { onJoin: i, onLeave: s, onSync: o } = this.caller;
      this.inPendingSyncState() ? this.pendingDiffs.push(n) : (this.state = sa.syncDiff(this.state, n, i, s), o());
    });
  }
  /**
   * @param {PresenceOnJoin} callback
   */
  onJoin(e) {
    this.caller.onJoin = e;
  }
  /**
   * @param {PresenceOnLeave} callback
   */
  onLeave(e) {
    this.caller.onLeave = e;
  }
  /**
   * @param {PresenceOnSync} callback
   */
  onSync(e) {
    this.caller.onSync = e;
  }
  /**
   * Returns the array of presences, with selected metadata.
   *
   * @template [T=PresenceState]
   * @param {((key: string, obj: PresenceState) => T)} [by]
   *
   * @returns {T[]}
   */
  list(e) {
    return sa.list(this.state, e);
  }
  inPendingSyncState() {
    return !this.joinRef || this.joinRef !== this.channel.joinRef();
  }
  // lower-level public static API
  /**
   * Used to sync the list of presences on the server
   * with the client's state. An optional `onJoin` and `onLeave` callback can
   * be provided to react to changes in the client's local presences across
   * disconnects and reconnects with the server.
   *
   * @param {Record<string, PresenceState>} currentState
   * @param {Record<string, PresenceState>} newState
   * @param {PresenceOnJoin} onJoin
   * @param {PresenceOnLeave} onLeave
   *
   * @returns {Record<string, PresenceState>}
   */
  static syncState(e, t, r, n) {
    let i = this.clone(e), s = {}, o = {};
    return this.map(i, (l, u) => {
      t[l] || (o[l] = u);
    }), this.map(t, (l, u) => {
      let f = i[l];
      if (f) {
        let d = u.metas.map((A) => A.phx_ref), g = f.metas.map((A) => A.phx_ref), b = u.metas.filter((A) => g.indexOf(A.phx_ref) < 0), v = f.metas.filter((A) => d.indexOf(A.phx_ref) < 0);
        b.length > 0 && (s[l] = u, s[l].metas = b), v.length > 0 && (o[l] = this.clone(f), o[l].metas = v);
      } else
        s[l] = u;
    }), this.syncDiff(i, { joins: s, leaves: o }, r, n);
  }
  /**
   *
   * Used to sync a diff of presence join and leave
   * events from the server, as they happen. Like `syncState`, `syncDiff`
   * accepts optional `onJoin` and `onLeave` callbacks to react to a user
   * joining or leaving from a device.
   *
   * @param {Record<string, PresenceState>} state
   * @param {PresenceDiff} diff
   * @param {PresenceOnJoin} onJoin
   * @param {PresenceOnLeave} onLeave
   *
   * @returns {Record<string, PresenceState>}
   */
  static syncDiff(e, t, r, n) {
    let { joins: i, leaves: s } = this.clone(t);
    return r || (r = function() {
    }), n || (n = function() {
    }), this.map(i, (o, l) => {
      let u = e[o];
      if (e[o] = this.clone(l), u) {
        let f = e[o].metas.map((g) => g.phx_ref), d = u.metas.filter((g) => f.indexOf(g.phx_ref) < 0);
        e[o].metas.unshift(...d);
      }
      r(o, u, l);
    }), this.map(s, (o, l) => {
      let u = e[o];
      if (!u)
        return;
      let f = l.metas.map((d) => d.phx_ref);
      u.metas = u.metas.filter((d) => f.indexOf(d.phx_ref) < 0), n(o, u, l), u.metas.length === 0 && delete e[o];
    }), e;
  }
  /**
   * Returns the array of presences, with selected metadata.
   *
   * @template [T=PresenceState]
   * @param {Record<string, PresenceState>} presences
   * @param {((key: string, obj: PresenceState) => T)} [chooser]
   *
   * @returns {T[]}
   */
  static list(e, t) {
    return t || (t = function(r, n) {
      return n;
    }), this.map(e, (r, n) => t(r, n));
  }
  // private
  /**
  * @template T
  * @param {Record<string, PresenceState>} obj
  * @param {(key: string, obj: PresenceState) => T} func
  */
  static map(e, t) {
    return Object.getOwnPropertyNames(e).map((r) => t(r, e[r]));
  }
  /**
  * @template T
  * @param {T} obj
  * @returns {T}
  */
  static clone(e) {
    return JSON.parse(JSON.stringify(e));
  }
}, Ba = {
  HEADER_LENGTH: 1,
  META_LENGTH: 4,
  KINDS: { push: 0, reply: 1, broadcast: 2 },
  /**
  * @template T
  * @param {Message<Record<string, any>>} msg
  * @param {(msg: ArrayBuffer | string) => T} callback
  * @returns {T}
  */
  encode(a, e) {
    if (a.payload.constructor === ArrayBuffer)
      return e(this.binaryEncode(a));
    {
      let t = [a.join_ref, a.ref, a.topic, a.event, a.payload];
      return e(JSON.stringify(t));
    }
  },
  /**
  * @template T
  * @param {ArrayBuffer | string} rawPayload
  * @param {(msg: Message<unknown>) => T} callback
  * @returns {T}
  */
  decode(a, e) {
    if (a.constructor === ArrayBuffer)
      return e(this.binaryDecode(a));
    {
      let [t, r, n, i, s] = JSON.parse(a);
      return e({ join_ref: t, ref: r, topic: n, event: i, payload: s });
    }
  },
  /** @private */
  binaryEncode(a) {
    let { join_ref: e, ref: t, event: r, topic: n, payload: i } = a, s = this.META_LENGTH + e.length + t.length + n.length + r.length, o = new ArrayBuffer(this.HEADER_LENGTH + s), l = new DataView(o), u = 0;
    l.setUint8(u++, this.KINDS.push), l.setUint8(u++, e.length), l.setUint8(u++, t.length), l.setUint8(u++, n.length), l.setUint8(u++, r.length), Array.from(e, (d) => l.setUint8(u++, d.charCodeAt(0))), Array.from(t, (d) => l.setUint8(u++, d.charCodeAt(0))), Array.from(n, (d) => l.setUint8(u++, d.charCodeAt(0))), Array.from(r, (d) => l.setUint8(u++, d.charCodeAt(0)));
    var f = new Uint8Array(o.byteLength + i.byteLength);
    return f.set(new Uint8Array(o), 0), f.set(new Uint8Array(i), o.byteLength), f.buffer;
  },
  /**
  * @private
  */
  binaryDecode(a) {
    let e = new DataView(a), t = e.getUint8(0), r = new TextDecoder();
    switch (t) {
      case this.KINDS.push:
        return this.decodePush(a, e, r);
      case this.KINDS.reply:
        return this.decodeReply(a, e, r);
      case this.KINDS.broadcast:
        return this.decodeBroadcast(a, e, r);
    }
  },
  /** @private */
  decodePush(a, e, t) {
    let r = e.getUint8(1), n = e.getUint8(2), i = e.getUint8(3), s = this.HEADER_LENGTH + this.META_LENGTH - 1, o = t.decode(a.slice(s, s + r));
    s = s + r;
    let l = t.decode(a.slice(s, s + n));
    s = s + n;
    let u = t.decode(a.slice(s, s + i));
    s = s + i;
    let f = a.slice(s, a.byteLength);
    return { join_ref: o, ref: null, topic: l, event: u, payload: f };
  },
  /** @private */
  decodeReply(a, e, t) {
    let r = e.getUint8(1), n = e.getUint8(2), i = e.getUint8(3), s = e.getUint8(4), o = this.HEADER_LENGTH + this.META_LENGTH, l = t.decode(a.slice(o, o + r));
    o = o + r;
    let u = t.decode(a.slice(o, o + n));
    o = o + n;
    let f = t.decode(a.slice(o, o + i));
    o = o + i;
    let d = t.decode(a.slice(o, o + s));
    o = o + s;
    let g = a.slice(o, a.byteLength), b = { status: d, response: g };
    return { join_ref: l, ref: u, topic: f, event: qe.reply, payload: b };
  },
  /** @private */
  decodeBroadcast(a, e, t) {
    let r = e.getUint8(1), n = e.getUint8(2), i = this.HEADER_LENGTH + 2, s = t.decode(a.slice(i, i + r));
    i = i + r;
    let o = t.decode(a.slice(i, i + n));
    i = i + n;
    let l = a.slice(i, a.byteLength);
    return { join_ref: null, ref: null, topic: s, event: o, payload: l };
  }
}, $u = class {
  /** Initializes the Socket *
   *
   * For IE8 support use an ES5-shim (https://github.com/es-shims/es5-shim)
   *
   * @constructor
   * @param {string} endPoint - The string WebSocket endpoint, ie, `"ws://example.com/socket"`,
   *                                               `"wss://example.com"`
   *                                               `"/socket"` (inherited host & protocol)
   * @param {SocketOptions} [opts] - Optional configuration
   */
  constructor(a, e = {}) {
    this.stateChangeCallbacks = { open: [], close: [], error: [], message: [] }, this.channels = [], this.sendBuffer = [], this.ref = 0, this.fallbackRef = null, this.timeout = e.timeout || Iu, this.transport = e.transport || Fe.WebSocket || Nt, this.conn = void 0, this.primaryPassedHealthCheck = !1, this.longPollFallbackMs = e.longPollFallbackMs, this.fallbackTimer = null;
    let t = null;
    try {
      t = Fe && Fe.sessionStorage;
    } catch {
    }
    this.sessionStore = e.sessionStorage || t, this.establishedConnections = 0, this.defaultEncoder = Ba.encode.bind(Ba), this.defaultDecoder = Ba.decode.bind(Ba), this.closeWasClean = !0, this.disconnecting = !1, this.binaryType = e.binaryType || "arraybuffer", this.connectClock = 1, this.pageHidden = !1, this.encode = void 0, this.decode = void 0, this.transport !== Nt ? (this.encode = e.encode || this.defaultEncoder, this.decode = e.decode || this.defaultDecoder) : (this.encode = this.defaultEncoder, this.decode = this.defaultDecoder);
    let r = null;
    Pt && Pt.addEventListener && (Pt.addEventListener("pagehide", (n) => {
      this.conn && (this.disconnect(), r = this.connectClock);
    }), Pt.addEventListener("pageshow", (n) => {
      r === this.connectClock && (r = null, this.connect());
    }), Pt.addEventListener("visibilitychange", () => {
      document.visibilityState === "hidden" ? this.pageHidden = !0 : (this.pageHidden = !1, !this.isConnected() && !this.closeWasClean && this.teardown(() => this.connect()));
    })), this.heartbeatIntervalMs = e.heartbeatIntervalMs || 3e4, this.autoSendHeartbeat = e.autoSendHeartbeat ?? !0, this.heartbeatCallback = e.heartbeatCallback ?? (() => {
    }), this.rejoinAfterMs = (n) => e.rejoinAfterMs ? e.rejoinAfterMs(n) : [1e3, 2e3, 5e3][n - 1] || 1e4, this.reconnectAfterMs = (n) => e.reconnectAfterMs ? e.reconnectAfterMs(n) : [10, 50, 100, 150, 200, 250, 500, 1e3, 2e3][n - 1] || 5e3, this.logger = e.logger || null, !this.logger && e.debug && (this.logger = (n, i, s) => {
      console.log(`${n}: ${i}`, s);
    }), this.longpollerTimeout = e.longpollerTimeout || 2e4, this.params = la(e.params || {}), this.endPoint = `${a}/${ln.websocket}`, this.vsn = e.vsn || ju, this.heartbeatTimeoutTimer = null, this.heartbeatTimer = null, this.heartbeatSentAt = null, this.pendingHeartbeatRef = null, this.reconnectTimer = new Ls(() => {
      if (this.pageHidden) {
        this.log("Not reconnecting as page is hidden!"), this.teardown();
        return;
      }
      this.teardown(async () => {
        e.beforeReconnect && await e.beforeReconnect(), this.connect();
      });
    }, this.reconnectAfterMs), this.authToken = e.authToken;
  }
  /**
   * Returns the LongPoll transport reference
   */
  getLongPollTransport() {
    return Nt;
  }
  /**
   * Disconnects and replaces the active transport
   *
   * @param {SocketTransport} newTransport - The new transport class to instantiate
   *
   */
  replaceTransport(a) {
    this.connectClock++, this.closeWasClean = !0, clearTimeout(this.fallbackTimer), this.reconnectTimer.reset(), this.conn && (this.conn.close(), this.conn = null), this.transport = a;
  }
  /**
   * Returns the socket protocol
   *
   * @returns {"wss" | "ws"}
   */
  protocol() {
    return location.protocol.match(/^https/) ? "wss" : "ws";
  }
  /**
   * The fully qualified socket url
   *
   * @returns {string}
   */
  endPointURL() {
    let a = Qa.appendParams(
      Qa.appendParams(this.endPoint, this.params()),
      { vsn: this.vsn }
    );
    return a.charAt(0) !== "/" ? a : a.charAt(1) === "/" ? `${this.protocol()}:${a}` : `${this.protocol()}://${location.host}${a}`;
  }
  /**
   * Disconnects the socket
   *
   * See https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent#Status_codes for valid status codes.
   *
   * @param {() => void} [callback] - Optional callback which is called after socket is disconnected.
   * @param {number} [code] - A status code for disconnection (Optional).
   * @param {string} [reason] - A textual description of the reason to disconnect. (Optional)
   */
  disconnect(a, e, t) {
    this.connectClock++, this.disconnecting = !0, this.closeWasClean = !0, clearTimeout(this.fallbackTimer), this.reconnectTimer.reset(), this.teardown(() => {
      this.disconnecting = !1, a && a();
    }, e, t);
  }
  /**
   * @param {Params} [params] - [DEPRECATED] The params to send when connecting, for example `{user_id: userToken}`
   *
   * Passing params to connect is deprecated; pass them in the Socket constructor instead:
   * `new Socket("/socket", {params: {user_id: userToken}})`.
   */
  connect(a) {
    a && (console && console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor"), this.params = la(a)), !(this.conn && !this.disconnecting) && (this.longPollFallbackMs && this.transport !== Nt ? this.connectWithFallback(Nt, this.longPollFallbackMs) : this.transportConnect());
  }
  /**
   * Logs the message. Override `this.logger` for specialized logging. noops by default
   * @param {string} kind
   * @param {string} msg
   * @param {Object} data
   */
  log(a, e, t) {
    this.logger && this.logger(a, e, t);
  }
  /**
   * Returns true if a logger has been set on this socket.
   */
  hasLogger() {
    return this.logger !== null;
  }
  /**
   * Registers callbacks for connection open events
   *
   * @example socket.onOpen(function(){ console.info("the socket was opened") })
   *
   * @param {SocketOnOpen} callback
   */
  onOpen(a) {
    let e = this.makeRef();
    return this.stateChangeCallbacks.open.push([e, a]), e;
  }
  /**
   * Registers callbacks for connection close events
   * @param {SocketOnClose} callback
   * @returns {string}
   */
  onClose(a) {
    let e = this.makeRef();
    return this.stateChangeCallbacks.close.push([e, a]), e;
  }
  /**
   * Registers callbacks for connection error events
   *
   * @example socket.onError(function(error){ alert("An error occurred") })
   *
   * @param {SocketOnError} callback
   * @returns {string}
   */
  onError(a) {
    let e = this.makeRef();
    return this.stateChangeCallbacks.error.push([e, a]), e;
  }
  /**
   * Registers callbacks for connection message events
   * @param {SocketOnMessage} callback
   * @returns {string}
   */
  onMessage(a) {
    let e = this.makeRef();
    return this.stateChangeCallbacks.message.push([e, a]), e;
  }
  /**
   * Sets a callback that receives lifecycle events for internal heartbeat messages.
   * Useful for instrumenting connection health (e.g. sent/ok/timeout/disconnected).
   * @param {HeartbeatCallback} callback
   */
  onHeartbeat(a) {
    this.heartbeatCallback = a;
  }
  /**
   * Pings the server and invokes the callback with the RTT in milliseconds
   * @param {(timeDelta: number) => void} callback
   *
   * Returns true if the ping was pushed or false if unable to be pushed.
   */
  ping(a) {
    if (!this.isConnected())
      return !1;
    let e = this.makeRef(), t = Date.now();
    this.push({ topic: "phoenix", event: "heartbeat", payload: {}, ref: e });
    let r = this.onMessage((n) => {
      n.ref === e && (this.off([r]), a(Date.now() - t));
    });
    return !0;
  }
  /**
   * @private
   *
   * @param {Function}
   */
  transportName(a) {
    return a === Nt ? "LongPoll" : a.name;
  }
  /**
   * @private
   */
  transportConnect() {
    this.connectClock++, this.closeWasClean = !1;
    let a;
    this.authToken && (a = ["phoenix", `${un}${btoa(this.authToken).replace(/=/g, "")}`]), this.conn = new this.transport(this.endPointURL(), a), this.conn.binaryType = this.binaryType, this.conn.timeout = this.longpollerTimeout, this.conn.onopen = () => this.onConnOpen(), this.conn.onerror = (e) => this.onConnError(e), this.conn.onmessage = (e) => this.onConnMessage(e), this.conn.onclose = (e) => this.onConnClose(e);
  }
  getSession(a) {
    return this.sessionStore && this.sessionStore.getItem(a);
  }
  storeSession(a, e) {
    this.sessionStore && this.sessionStore.setItem(a, e);
  }
  connectWithFallback(a, e = 2500) {
    clearTimeout(this.fallbackTimer);
    let t = !1, r = !0, n, i, s = this.transportName(a), o = (l) => {
      this.log("transport", `falling back to ${s}...`, l), this.off([n, i]), r = !1, this.replaceTransport(a), this.transportConnect();
    };
    if (this.getSession(`phx:fallback:${s}`))
      return o("memorized");
    this.fallbackTimer = setTimeout(o, e), i = this.onError((l) => {
      this.log("transport", "error", l), r && !t && (clearTimeout(this.fallbackTimer), o(l));
    }), this.fallbackRef && this.off([this.fallbackRef]), this.fallbackRef = this.onOpen(() => {
      if (t = !0, !r) {
        let l = this.transportName(a);
        return this.primaryPassedHealthCheck || this.storeSession(`phx:fallback:${l}`, "true"), this.log("transport", `established ${l} fallback`);
      }
      clearTimeout(this.fallbackTimer), this.fallbackTimer = setTimeout(o, e), this.ping((l) => {
        this.log("transport", "connected to primary after", l), this.primaryPassedHealthCheck = !0, clearTimeout(this.fallbackTimer);
      });
    }), this.transportConnect();
  }
  clearHeartbeats() {
    clearTimeout(this.heartbeatTimer), clearTimeout(this.heartbeatTimeoutTimer);
  }
  onConnOpen() {
    this.hasLogger() && this.log("transport", `connected to ${this.endPointURL()}`), this.closeWasClean = !1, this.disconnecting = !1, this.establishedConnections++, this.flushSendBuffer(), this.reconnectTimer.reset(), this.autoSendHeartbeat && this.resetHeartbeat(), this.triggerStateCallbacks("open");
  }
  /**
   * @private
   */
  heartbeatTimeout() {
    if (this.pendingHeartbeatRef) {
      this.pendingHeartbeatRef = null, this.heartbeatSentAt = null, this.hasLogger() && this.log("transport", "heartbeat timeout. Attempting to re-establish connection");
      try {
        this.heartbeatCallback("timeout");
      } catch (a) {
        this.log("error", "error in heartbeat callback", a);
      }
      this.triggerChanError(new Error("heartbeat timeout")), this.closeWasClean = !1, this.teardown(() => this.reconnectTimer.scheduleTimeout(), Pu, "heartbeat timeout");
    }
  }
  resetHeartbeat() {
    this.conn && this.conn.skipHeartbeat || (this.pendingHeartbeatRef = null, this.clearHeartbeats(), this.heartbeatTimer = setTimeout(() => this.sendHeartbeat(), this.heartbeatIntervalMs));
  }
  teardown(a, e, t) {
    if (!this.conn)
      return a && a();
    const r = this.conn;
    this.waitForBufferDone(r, () => {
      e ? r.close(e, t || "") : r.close(), this.waitForSocketClosed(r, () => {
        this.conn === r && (this.conn.onopen = function() {
        }, this.conn.onerror = function() {
        }, this.conn.onmessage = function() {
        }, this.conn.onclose = function() {
        }, this.conn = null), a && a();
      });
    });
  }
  waitForBufferDone(a, e, t = 1) {
    if (t === 5 || !a.bufferedAmount) {
      e();
      return;
    }
    setTimeout(() => {
      this.waitForBufferDone(a, e, t + 1);
    }, 150 * t);
  }
  waitForSocketClosed(a, e, t = 1) {
    if (t === 5 || a.readyState === Ue.closed) {
      e();
      return;
    }
    setTimeout(() => {
      this.waitForSocketClosed(a, e, t + 1);
    }, 150 * t);
  }
  /**
  * @param {CloseEvent} event
  */
  onConnClose(a) {
    this.conn && (this.conn.onclose = () => {
    }), this.hasLogger() && this.log("transport", "close", a), this.triggerChanError(a), this.clearHeartbeats(), this.closeWasClean || this.reconnectTimer.scheduleTimeout(), this.triggerStateCallbacks("close", a);
  }
  /**
   * @private
   * @param {Event} error
   */
  onConnError(a) {
    this.hasLogger() && this.log("transport", "error", a);
    let e = this.transport, t = this.establishedConnections;
    this.triggerStateCallbacks("error", a, e, t), (e === this.transport || t > 0) && this.triggerChanError(a);
  }
  /**
   * @private
   * @param {unknown} [reason] underlying close/error event forwarded to channel error listeners
   */
  triggerChanError(a) {
    this.channels.forEach((e) => {
      e.isErrored() || e.isLeaving() || e.isClosed() || e.trigger(qe.error, a);
    });
  }
  /**
   * @returns {string}
   */
  connectionState() {
    switch (this.conn && this.conn.readyState) {
      case Ue.connecting:
        return "connecting";
      case Ue.open:
        return "open";
      case Ue.closing:
        return "closing";
      default:
        return "closed";
    }
  }
  /**
   * @returns {boolean}
   */
  isConnected() {
    return this.connectionState() === "open";
  }
  /**
   *
   * @param {Channel} channel
   */
  remove(a) {
    this.off(a.stateChangeRefs), this.channels = this.channels.filter((e) => e !== a);
  }
  /**
   * Removes `onOpen`, `onClose`, `onError,` and `onMessage` registrations.
   *
   * @param {string[]} refs - list of refs returned by calls to
   *                 `onOpen`, `onClose`, `onError,` and `onMessage`
   */
  off(a) {
    for (let e in this.stateChangeCallbacks)
      this.stateChangeCallbacks[e] = this.stateChangeCallbacks[e].filter(([t]) => a.indexOf(t) === -1);
  }
  /**
   * Initiates a new channel for the given topic
   *
   * @param {string} topic
   * @param {Params | (() => Params)} [chanParams]- Parameters for the channel
   * @returns {Channel}
   */
  channel(a, e = {}) {
    let t = new zu(a, e, this);
    return this.channels.push(t), t;
  }
  /**
   * @param {Message<Record<string, any>>} data
   */
  push(a) {
    if (this.hasLogger()) {
      let { topic: e, event: t, payload: r, ref: n, join_ref: i } = a;
      this.log("push", `${e} ${t} (${i}, ${n})`, r);
    }
    this.isConnected() ? this.encode(a, (e) => this.conn.send(e)) : this.sendBuffer.push(() => this.encode(a, (e) => this.conn.send(e)));
  }
  /**
   * Return the next message ref, accounting for overflows
   * @returns {string}
   */
  makeRef() {
    let a = this.ref + 1;
    return a === this.ref ? this.ref = 0 : this.ref = a, this.ref.toString();
  }
  sendHeartbeat() {
    if (!this.isConnected()) {
      try {
        this.heartbeatCallback("disconnected");
      } catch (a) {
        this.log("error", "error in heartbeat callback", a);
      }
      return;
    }
    if (this.pendingHeartbeatRef) {
      this.heartbeatTimeout();
      return;
    }
    this.pendingHeartbeatRef = this.makeRef(), this.heartbeatSentAt = Date.now(), this.push({ topic: "phoenix", event: "heartbeat", payload: {}, ref: this.pendingHeartbeatRef });
    try {
      this.heartbeatCallback("sent");
    } catch (a) {
      this.log("error", "error in heartbeat callback", a);
    }
    this.heartbeatTimeoutTimer = setTimeout(() => this.heartbeatTimeout(), this.heartbeatIntervalMs);
  }
  flushSendBuffer() {
    this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach((a) => a()), this.sendBuffer = []);
  }
  /**
  * @param {MessageEvent<any>} rawMessage
  */
  onConnMessage(a) {
    this.decode(a.data, (e) => {
      let { topic: t, event: r, payload: n, ref: i, join_ref: s } = e;
      if (i && i === this.pendingHeartbeatRef) {
        const o = this.heartbeatSentAt ? Date.now() - this.heartbeatSentAt : void 0;
        this.clearHeartbeats();
        try {
          this.heartbeatCallback(n.status === "ok" ? "ok" : "error", o);
        } catch (l) {
          this.log("error", "error in heartbeat callback", l);
        }
        this.pendingHeartbeatRef = null, this.heartbeatSentAt = null, this.autoSendHeartbeat && (this.heartbeatTimer = setTimeout(() => this.sendHeartbeat(), this.heartbeatIntervalMs));
      }
      this.hasLogger() && this.log("receive", `${n.status || ""} ${t} ${r} ${i && "(" + i + ")" || ""}`.trim(), n);
      for (let o = 0; o < this.channels.length; o++) {
        const l = this.channels[o];
        l.isMember(t, r, n, s) && l.trigger(r, n, i, s);
      }
      this.triggerStateCallbacks("message", e);
    });
  }
  /**
   * @private
   * @template {keyof SocketStateChangeCallbacks} K
   * @param {K} event
   * @param {...Parameters<SocketStateChangeCallbacks[K][number][1]>} args
   * @returns {void}
   */
  triggerStateCallbacks(a, ...e) {
    try {
      this.stateChangeCallbacks[a].forEach(([t, r]) => {
        try {
          r(...e);
        } catch (n) {
          this.log("error", `error in ${a} callback`, n);
        }
      });
    } catch (t) {
      this.log("error", `error triggering ${a} callbacks`, t);
    }
  }
  leaveOpenTopic(a) {
    let e = this.channels.find((t) => t.topic === a && (t.isJoined() || t.isJoining()));
    e && (this.hasLogger() && this.log("transport", `leaving duplicate topic "${a}"`), e.leave());
  }
};
class ua {
  constructor(e, t) {
    const r = Mu(t);
    this.presence = new Uu(e.getChannel(), r), this.presence.onJoin((n, i, s) => {
      const o = ua.onJoinPayload(n, i, s);
      e.getChannel().trigger("presence", o);
    }), this.presence.onLeave((n, i, s) => {
      const o = ua.onLeavePayload(n, i, s);
      e.getChannel().trigger("presence", o);
    }), this.presence.onSync(() => {
      e.getChannel().trigger("presence", { event: "sync" });
    });
  }
  get state() {
    return ua.transformState(this.presence.state);
  }
  /**
   * @private
   * Remove 'metas' key
   * Change 'phx_ref' to 'presence_ref'
   * Remove 'phx_ref' and 'phx_ref_prev'
   *
   * @example Transform state
   * // returns {
   *  abc123: [
   *    { presence_ref: '2', user_id: 1 },
   *    { presence_ref: '3', user_id: 2 }
   *  ]
   * }
   * RealtimePresence.transformState({
   *  abc123: {
   *    metas: [
   *      { phx_ref: '2', phx_ref_prev: '1' user_id: 1 },
   *      { phx_ref: '3', user_id: 2 }
   *    ]
   *  }
   * })
   *
   */
  static transformState(e) {
    return e = Bu(e), Object.getOwnPropertyNames(e).reduce((t, r) => {
      const n = e[r];
      return t[r] = Va(n), t;
    }, {});
  }
  static onJoinPayload(e, t, r) {
    const n = Ni(t), i = Va(r);
    return {
      event: "join",
      key: e,
      currentPresences: n,
      newPresences: i
    };
  }
  static onLeavePayload(e, t, r) {
    const n = Ni(t), i = Va(r);
    return {
      event: "leave",
      key: e,
      currentPresences: n,
      leftPresences: i
    };
  }
}
function Va(a) {
  return a.metas.map((e) => (e.presence_ref = e.phx_ref, delete e.phx_ref, delete e.phx_ref_prev, e));
}
function Bu(a) {
  return JSON.parse(JSON.stringify(a));
}
function Mu(a) {
  return a?.events && { events: a.events };
}
function Ni(a) {
  return a?.metas ? Va(a) : [];
}
var Ri;
(function(a) {
  a.SYNC = "sync", a.JOIN = "join", a.LEAVE = "leave";
})(Ri || (Ri = {}));
class Hu {
  get state() {
    return this.presenceAdapter.state;
  }
  /**
   * Creates a Presence helper that keeps the local presence state in sync with the server.
   *
   * @param channel - The realtime channel to bind to.
   * @param opts - Optional custom event names, e.g. `{ events: { state: 'state', diff: 'diff' } }`.
   *
   * @category Realtime
   *
   * @example Example for a presence channel
   * ```ts
   * const presence = new RealtimePresence(channel)
   *
   * channel.on('presence', ({ event, key }) => {
   *   console.log(`Presence ${event} on ${key}`)
   * })
   * ```
   */
  constructor(e, t) {
    this.channel = e, this.presenceAdapter = new ua(this.channel.channelAdapter, t);
  }
}
function qu(a) {
  if (a instanceof Error)
    return a;
  if (typeof a == "string")
    return new Error(a);
  if (a && typeof a == "object") {
    const e = a;
    if (typeof e.code == "number") {
      const t = typeof e.reason == "string" && e.reason ? ` (${e.reason})` : "";
      return new Error(`socket closed: ${e.code}${t}`, { cause: a });
    }
    return new Error("channel error: transport failure", { cause: a });
  }
  return new Error("channel error: connection lost");
}
class Wu {
  constructor(e, t, r) {
    const n = Gu(r);
    this.channel = e.getSocket().channel(t, n), this.socket = e;
  }
  get state() {
    return this.channel.state;
  }
  set state(e) {
    this.channel.state = e;
  }
  get joinedOnce() {
    return this.channel.joinedOnce;
  }
  get joinPush() {
    return this.channel.joinPush;
  }
  get rejoinTimer() {
    return this.channel.rejoinTimer;
  }
  on(e, t) {
    return this.channel.on(e, t);
  }
  off(e, t) {
    this.channel.off(e, t);
  }
  subscribe(e) {
    return this.channel.join(e);
  }
  unsubscribe(e) {
    return this.channel.leave(e);
  }
  teardown() {
    this.channel.teardown();
  }
  onClose(e) {
    this.channel.onClose(e);
  }
  onError(e) {
    return this.channel.onError(e);
  }
  push(e, t, r) {
    let n;
    try {
      n = this.channel.push(e, t, r);
    } catch {
      throw new Error(`tried to push '${e}' to '${this.channel.topic}' before joining. Use channel.subscribe() before pushing events`);
    }
    if (this.channel.pushBuffer.length > Au) {
      const i = this.channel.pushBuffer.shift();
      i.cancelTimeout(), this.socket.log("channel", `discarded push due to buffer overflow: ${i.event}`, i.payload());
    }
    return n;
  }
  updateJoinPayload(e) {
    const t = this.channel.joinPush.payload();
    this.channel.joinPush.payload = () => Object.assign(Object.assign({}, t), e);
  }
  canPush() {
    return this.socket.isConnected() && this.state === Qe.joined;
  }
  isJoined() {
    return this.state === Qe.joined;
  }
  isJoining() {
    return this.state === Qe.joining;
  }
  isClosed() {
    return this.state === Qe.closed;
  }
  isLeaving() {
    return this.state === Qe.leaving;
  }
  updateFilterBindings(e) {
    this.channel.filterBindings = e;
  }
  updatePayloadTransform(e) {
    this.channel.onMessage = e;
  }
  /**
   * @internal
   */
  getChannel() {
    return this.channel;
  }
}
function Gu(a) {
  return {
    config: Object.assign({
      broadcast: { ack: !1, self: !1 },
      presence: { key: "", enabled: !1 },
      private: !1
    }, a.config)
  };
}
var Ci;
(function(a) {
  a.ALL = "*", a.INSERT = "INSERT", a.UPDATE = "UPDATE", a.DELETE = "DELETE";
})(Ci || (Ci = {}));
var Ut;
(function(a) {
  a.BROADCAST = "broadcast", a.PRESENCE = "presence", a.POSTGRES_CHANGES = "postgres_changes", a.SYSTEM = "system";
})(Ut || (Ut = {}));
var We;
(function(a) {
  a.SUBSCRIBED = "SUBSCRIBED", a.TIMED_OUT = "TIMED_OUT", a.CLOSED = "CLOSED", a.CHANNEL_ERROR = "CHANNEL_ERROR";
})(We || (We = {}));
class ca {
  get state() {
    return this.channelAdapter.state;
  }
  set state(e) {
    this.channelAdapter.state = e;
  }
  get joinedOnce() {
    return this.channelAdapter.joinedOnce;
  }
  get timeout() {
    return this.socket.timeout;
  }
  get joinPush() {
    return this.channelAdapter.joinPush;
  }
  get rejoinTimer() {
    return this.channelAdapter.rejoinTimer;
  }
  /**
   * Creates a channel that can broadcast messages, sync presence, and listen to Postgres changes.
   *
   * The topic determines which realtime stream you are subscribing to. Config options let you
   * enable acknowledgement for broadcasts, presence tracking, or private channels.
   *
   * @category Realtime
   *
   * @example Using supabase-js (recommended)
   * ```ts
   * import { createClient } from '@supabase/supabase-js'
   *
   * const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key')
   * const channel = supabase.channel('room1')
   * channel
   *   .on('broadcast', { event: 'cursor-pos' }, (payload) => console.log(payload))
   *   .subscribe()
   * ```
   *
   * @example Standalone import for bundle-sensitive environments
   * ```ts
   * import RealtimeClient from '@supabase/realtime-js'
   *
   * const client = new RealtimeClient('https://xyzcompany.supabase.co/realtime/v1', {
   *   params: { apikey: 'your-publishable-key' },
   * })
   * const channel = new RealtimeChannel('realtime:public:messages', { config: {} }, client)
   * ```
   */
  constructor(e, t = { config: {} }, r) {
    var n, i;
    if (this.topic = e, this.params = t, this.socket = r, this.bindings = {}, this.subTopic = e.replace(/^realtime:/i, ""), this.params.config = Object.assign({
      broadcast: { ack: !1, self: !1 },
      presence: { key: "", enabled: !1 },
      private: !1
    }, t.config), this.channelAdapter = new Wu(this.socket.socketAdapter, e, this.params), this.presence = new Hu(this), this._onClose(() => {
      this.socket._remove(this);
    }), this._updateFilterTransform(), this.broadcastEndpointURL = Ps(this.socket.socketAdapter.endPointURL()), this.private = this.params.config.private || !1, !this.private && (!((i = (n = this.params.config) === null || n === void 0 ? void 0 : n.broadcast) === null || i === void 0) && i.replay))
      throw new Error(`tried to use replay on public channel '${this.topic}'. It must be a private channel.`);
  }
  /**
   * Subscribe registers your client with the server
   * @category Realtime
   */
  subscribe(e, t = this.timeout) {
    var r, n, i;
    if (this.socket.isConnected() || this.socket.connect(), this.channelAdapter.isClosed()) {
      const { config: { broadcast: s, presence: o, private: l } } = this.params, u = (n = (r = this.bindings.postgres_changes) === null || r === void 0 ? void 0 : r.map((b) => b.filter)) !== null && n !== void 0 ? n : [], f = !!this.bindings[Ut.PRESENCE] && this.bindings[Ut.PRESENCE].length > 0 || ((i = this.params.config.presence) === null || i === void 0 ? void 0 : i.enabled) === !0, d = {}, g = {
        broadcast: s,
        presence: Object.assign(Object.assign({}, o), { enabled: f }),
        postgres_changes: u,
        private: l
      };
      this.socket.accessTokenValue && (d.access_token = this.socket.accessTokenValue), this._onError((b) => {
        e?.(We.CHANNEL_ERROR, qu(b));
      }), this._onClose(() => e?.(We.CLOSED)), this.updateJoinPayload(Object.assign({ config: g }, d)), this._updateFilterMessage(), this.channelAdapter.subscribe(t).receive("ok", async ({ postgres_changes: b }) => {
        if (this.socket._isManualToken() || this.socket.setAuth(), b === void 0) {
          e?.(We.SUBSCRIBED);
          return;
        }
        this._updatePostgresBindings(b, e);
      }).receive("error", (b) => {
        this.state = Qe.errored;
        const v = Object.values(b).join(", ") || "error";
        e?.(We.CHANNEL_ERROR, new Error(v, { cause: b }));
      }).receive("timeout", () => {
        e?.(We.TIMED_OUT);
      });
    }
    return this;
  }
  _updatePostgresBindings(e, t) {
    var r;
    const n = this.bindings.postgres_changes, i = (r = n?.length) !== null && r !== void 0 ? r : 0, s = [];
    for (let o = 0; o < i; o++) {
      const l = n[o], { filter: { event: u, schema: f, table: d, filter: g } } = l, b = e && e[o];
      if (b && b.event === u && ca.isFilterValueEqual(b.schema, f) && ca.isFilterValueEqual(b.table, d) && ca.isFilterValueEqual(b.filter, g))
        s.push(Object.assign(Object.assign({}, l), { id: b.id }));
      else {
        this.unsubscribe(), this.state = Qe.errored, t?.(We.CHANNEL_ERROR, new Error("mismatch between server and client bindings for postgres changes"));
        return;
      }
    }
    this.bindings.postgres_changes = s, this.state != Qe.errored && t && t(We.SUBSCRIBED);
  }
  /**
   * Returns the current presence state for this channel.
   *
   * The shape is a map keyed by presence key (for example a user id) where each entry contains the
   * tracked metadata for that user.
   *
   * @category Realtime
   */
  presenceState() {
    return this.presence.state;
  }
  /**
   * Sends the supplied payload to the presence tracker so other subscribers can see that this
   * client is online. Use `untrack` to stop broadcasting presence for the same key.
   *
   * @category Realtime
   */
  async track(e, t = {}) {
    return await this.send({
      type: "presence",
      event: "track",
      payload: e
    }, t.timeout || this.timeout);
  }
  /**
   * Removes the current presence state for this client.
   *
   * @category Realtime
   */
  async untrack(e = {}) {
    return await this.send({
      type: "presence",
      event: "untrack"
    }, e);
  }
  /**
   * Listen to realtime events on this channel.
   * @category Realtime
   *
   * @remarks
   * - By default, Broadcast and Presence are enabled for all projects.
   * - By default, listening to database changes is disabled for new projects due to database performance and security concerns. You can turn it on by managing Realtime's [replication](/docs/guides/api#realtime-api-overview).
   * - You can receive the "previous" data for updates and deletes by setting the table's `REPLICA IDENTITY` to `FULL` (e.g., `ALTER TABLE your_table REPLICA IDENTITY FULL;`).
   * - Row level security is not applied to delete statements. When RLS is enabled and replica identity is set to full, only the primary key is sent to clients.
   *
   * @example Listen to broadcast messages
   * ```js
   * const channel = supabase.channel("room1")
   *
   * channel.on("broadcast", { event: "cursor-pos" }, (payload) => {
   *   console.log("Cursor position received!", payload);
   * }).subscribe((status) => {
   *   if (status === "SUBSCRIBED") {
   *     channel.send({
   *       type: "broadcast",
   *       event: "cursor-pos",
   *       payload: { x: Math.random(), y: Math.random() },
   *     });
   *   }
   * });
   * ```
   *
   * @example Listen to presence sync
   * ```js
   * const channel = supabase.channel('room1')
   * channel
   *   .on('presence', { event: 'sync' }, () => {
   *     console.log('Synced presence state: ', channel.presenceState())
   *   })
   *   .subscribe(async (status) => {
   *     if (status === 'SUBSCRIBED') {
   *       await channel.track({ online_at: new Date().toISOString() })
   *     }
   *   })
   * ```
   *
   * @example Listen to presence join
   * ```js
   * const channel = supabase.channel('room1')
   * channel
   *   .on('presence', { event: 'join' }, ({ newPresences }) => {
   *     console.log('Newly joined presences: ', newPresences)
   *   })
   *   .subscribe(async (status) => {
   *     if (status === 'SUBSCRIBED') {
   *       await channel.track({ online_at: new Date().toISOString() })
   *     }
   *   })
   * ```
   *
   * @example Listen to presence leave
   * ```js
   * const channel = supabase.channel('room1')
   * channel
   *   .on('presence', { event: 'leave' }, ({ leftPresences }) => {
   *     console.log('Newly left presences: ', leftPresences)
   *   })
   *   .subscribe(async (status) => {
   *     if (status === 'SUBSCRIBED') {
   *       await channel.track({ online_at: new Date().toISOString() })
   *       await channel.untrack()
   *     }
   *   })
   * ```
   *
   * @example Listen to all database changes
   * ```js
   * supabase
   *   .channel('room1')
   *   .on('postgres_changes', { event: '*', schema: '*' }, payload => {
   *     console.log('Change received!', payload)
   *   })
   *   .subscribe()
   * ```
   *
   * @example Listen to a specific table
   * ```js
   * supabase
   *   .channel('room1')
   *   .on('postgres_changes', { event: '*', schema: 'public', table: 'countries' }, payload => {
   *     console.log('Change received!', payload)
   *   })
   *   .subscribe()
   * ```
   *
   * @example Listen to inserts
   * ```js
   * supabase
   *   .channel('room1')
   *   .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'countries' }, payload => {
   *     console.log('Change received!', payload)
   *   })
   *   .subscribe()
   * ```
   *
   * @exampleDescription Listen to updates
   * By default, Supabase will send only the updated record. If you want to receive the previous values as well you can
   * enable full replication for the table you are listening to:
   *
   * ```sql
   * alter table "your_table" replica identity full;
   * ```
   *
   * @example Listen to updates
   * ```js
   * supabase
   *   .channel('room1')
   *   .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'countries' }, payload => {
   *     console.log('Change received!', payload)
   *   })
   *   .subscribe()
   * ```
   *
   * @exampleDescription Listen to deletes
   * By default, Supabase does not send deleted records. If you want to receive the deleted record you can
   * enable full replication for the table you are listening to:
   *
   * ```sql
   * alter table "your_table" replica identity full;
   * ```
   *
   * @example Listen to deletes
   * ```js
   * supabase
   *   .channel('room1')
   *   .on('postgres_changes', { event: 'DELETE', schema: 'public', table: 'countries' }, payload => {
   *     console.log('Change received!', payload)
   *   })
   *   .subscribe()
   * ```
   *
   * @exampleDescription Listen to multiple events
   * You can chain listeners if you want to listen to multiple events for each table.
   *
   * @example Listen to multiple events
   * ```js
   * supabase
   *   .channel('room1')
   *   .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'countries' }, handleRecordInserted)
   *   .on('postgres_changes', { event: 'DELETE', schema: 'public', table: 'countries' }, handleRecordDeleted)
   *   .subscribe()
   * ```
   *
   * @exampleDescription Listen to row level changes
   * You can listen to individual rows using the format `{table}:{col}=eq.{val}` - where `{col}` is the column name, and `{val}` is the value which you want to match.
   *
   * @example Listen to row level changes
   * ```js
   * supabase
   *   .channel('room1')
   *   .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'countries', filter: 'id=eq.200' }, handleRecordUpdated)
   *   .subscribe()
   * ```
   */
  on(e, t, r) {
    const n = this.channelAdapter.isJoined() || this.channelAdapter.isJoining(), i = e === Ut.PRESENCE || e === Ut.POSTGRES_CHANGES;
    if (n && i)
      throw this.socket.log("channel", `cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`), new Error(`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`);
    return this._on(e, t, r);
  }
  /**
   * Sends a broadcast message explicitly via REST API.
   *
   * This method always uses the REST API endpoint regardless of WebSocket connection state.
   * Useful when you want to guarantee REST delivery or when gradually migrating from implicit REST fallback.
   *
   * @param event The name of the broadcast event
   * @param payload Payload to be sent (required)
   * @param opts Options including timeout
   * @returns Promise resolving to object with success status, and error details if failed
   *
   * @category Realtime
   */
  async httpSend(e, t, r = {}) {
    var n;
    if (t == null)
      return Promise.reject(new Error("Payload is required for httpSend()"));
    const i = {
      apikey: this.socket.apiKey ? this.socket.apiKey : "",
      "Content-Type": "application/json"
    };
    this.socket.accessTokenValue && (i.Authorization = `Bearer ${this.socket.accessTokenValue}`);
    const s = {
      method: "POST",
      headers: i,
      body: JSON.stringify({
        messages: [
          {
            topic: this.subTopic,
            event: e,
            payload: t,
            private: this.private
          }
        ]
      })
    }, o = await this._fetchWithTimeout(this.broadcastEndpointURL, s, (n = r.timeout) !== null && n !== void 0 ? n : this.timeout);
    if (o.status === 202)
      return { success: !0 };
    let l = o.statusText;
    try {
      const u = await o.json();
      l = u.error || u.message || l;
    } catch {
    }
    return Promise.reject(new Error(l));
  }
  /**
   * Sends a message into the channel.
   *
   * @param args Arguments to send to channel
   * @param args.type The type of event to send
   * @param args.event The name of the event being sent
   * @param args.payload Payload to be sent
   * @param opts Options to be used during the send process
   *
   * @category Realtime
   *
   * @remarks
   * - When using REST you don't need to subscribe to the channel
   * - REST calls are only available from 2.37.0 onwards
   *
   * @example Send a message via websocket
   * ```js
   * const channel = supabase.channel('room1')
   *
   * channel.subscribe((status) => {
   *   if (status === 'SUBSCRIBED') {
   *     channel.send({
   *       type: 'broadcast',
   *       event: 'cursor-pos',
   *       payload: { x: Math.random(), y: Math.random() },
   *     })
   *   }
   * })
   * ```
   *
   * @exampleResponse Send a message via websocket
   * ```js
   * ok | timed out | error
   * ```
   *
   * @example Send a message via REST
   * ```js
   * supabase
   *   .channel('room1')
   *   .httpSend('cursor-pos', { x: Math.random(), y: Math.random() })
   * ```
   */
  async send(e, t = {}) {
    var r, n;
    if (!this.channelAdapter.canPush() && e.type === "broadcast") {
      console.warn("Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.");
      const { event: i, payload: s } = e, o = {
        apikey: this.socket.apiKey ? this.socket.apiKey : "",
        "Content-Type": "application/json"
      };
      this.socket.accessTokenValue && (o.Authorization = `Bearer ${this.socket.accessTokenValue}`);
      const l = {
        method: "POST",
        headers: o,
        body: JSON.stringify({
          messages: [
            {
              topic: this.subTopic,
              event: i,
              payload: s,
              private: this.private
            }
          ]
        })
      };
      try {
        const u = await this._fetchWithTimeout(this.broadcastEndpointURL, l, (r = t.timeout) !== null && r !== void 0 ? r : this.timeout);
        return await ((n = u.body) === null || n === void 0 ? void 0 : n.cancel()), u.ok ? "ok" : "error";
      } catch (u) {
        return u instanceof Error && u.name === "AbortError" ? "timed out" : "error";
      }
    } else
      return new Promise((i) => {
        var s, o, l;
        const u = this.channelAdapter.push(e.type, e, t.timeout || this.timeout);
        e.type === "broadcast" && !(!((l = (o = (s = this.params) === null || s === void 0 ? void 0 : s.config) === null || o === void 0 ? void 0 : o.broadcast) === null || l === void 0) && l.ack) && i("ok"), u.receive("ok", () => i("ok")), u.receive("error", () => i("error")), u.receive("timeout", () => i("timed out"));
      });
  }
  /**
   * Updates the payload that will be sent the next time the channel joins (reconnects).
   * Useful for rotating access tokens or updating config without re-creating the channel.
   *
   * @category Realtime
   */
  updateJoinPayload(e) {
    this.channelAdapter.updateJoinPayload(e);
  }
  /**
   * Leaves the channel.
   *
   * Unsubscribes from server events, and instructs channel to terminate on server.
   * Triggers onClose() hooks.
   *
   * To receive leave acknowledgements, use the a `receive` hook to bind to the server ack, ie:
   * channel.unsubscribe().receive("ok", () => alert("left!") )
   *
   * @category Realtime
   */
  async unsubscribe(e = this.timeout) {
    return new Promise((t) => {
      this.channelAdapter.unsubscribe(e).receive("ok", () => t("ok")).receive("timeout", () => t("timed out")).receive("error", () => t("error"));
    });
  }
  /**
   * Destroys and stops related timers.
   *
   * @category Realtime
   */
  teardown() {
    this.channelAdapter.teardown();
  }
  /** @internal */
  async _fetchWithTimeout(e, t, r) {
    const n = new AbortController(), i = setTimeout(() => n.abort(), r), s = await this.socket.fetch(e, Object.assign(Object.assign({}, t), { signal: n.signal }));
    return clearTimeout(i), s;
  }
  /** @internal */
  _on(e, t, r) {
    const n = e.toLocaleLowerCase(), i = this.channelAdapter.on(e, r), s = {
      type: n,
      filter: t,
      callback: r,
      ref: i
    };
    return this.bindings[n] ? this.bindings[n].push(s) : this.bindings[n] = [s], this._updateFilterMessage(), this;
  }
  /**
   * Registers a callback that will be executed when the channel closes.
   *
   * @internal
   */
  _onClose(e) {
    this.channelAdapter.onClose(e);
  }
  /**
   * Registers a callback that will be executed when the channel encounteres an error.
   *
   * @internal
   */
  _onError(e) {
    this.channelAdapter.onError(e);
  }
  /** @internal */
  _updateFilterMessage() {
    this.channelAdapter.updateFilterBindings((e, t, r) => {
      var n, i, s, o, l, u, f;
      const d = e.event.toLocaleLowerCase();
      if (this._notThisChannelEvent(d, r))
        return !1;
      const g = (n = this.bindings[d]) === null || n === void 0 ? void 0 : n.find((b) => b.ref === e.ref);
      if (!g)
        return !0;
      if (["broadcast", "presence", "postgres_changes"].includes(d))
        if ("id" in g) {
          const b = g.id, v = (i = g.filter) === null || i === void 0 ? void 0 : i.event;
          return b && ((s = t.ids) === null || s === void 0 ? void 0 : s.includes(b)) && (v === "*" || v?.toLocaleLowerCase() === ((o = t.data) === null || o === void 0 ? void 0 : o.type.toLocaleLowerCase()));
        } else {
          const b = (u = (l = g?.filter) === null || l === void 0 ? void 0 : l.event) === null || u === void 0 ? void 0 : u.toLocaleLowerCase();
          return b === "*" || b === ((f = t?.event) === null || f === void 0 ? void 0 : f.toLocaleLowerCase());
        }
      else
        return g.type.toLocaleLowerCase() === d;
    });
  }
  /** @internal */
  _notThisChannelEvent(e, t) {
    const { close: r, error: n, leave: i, join: s } = js;
    return t && [r, n, i, s].includes(e) && t !== this.joinPush.ref;
  }
  /** @internal */
  _updateFilterTransform() {
    this.channelAdapter.updatePayloadTransform((e, t, r) => {
      if (typeof t == "object" && "ids" in t) {
        const n = t.data, { schema: i, table: s, commit_timestamp: o, type: l, errors: u } = n;
        return Object.assign(Object.assign({}, {
          schema: i,
          table: s,
          commit_timestamp: o,
          eventType: l,
          new: {},
          old: {},
          errors: u
        }), this._getPayloadRecords(n));
      }
      return t;
    });
  }
  copyBindings(e) {
    if (this.joinedOnce)
      throw new Error("cannot copy bindings into joined channel");
    for (const t in e.bindings)
      for (const r of e.bindings[t])
        this._on(r.type, r.filter, r.callback);
  }
  /**
   * Compares two optional filter values for equality.
   * Treats undefined, null, and empty string as equivalent empty values.
   * @internal
   */
  static isFilterValueEqual(e, t) {
    return (e ?? void 0) === (t ?? void 0);
  }
  /** @internal */
  _getPayloadRecords(e) {
    const t = {
      new: {},
      old: {}
    };
    return (e.type === "INSERT" || e.type === "UPDATE") && (t.new = Ti(e.columns, e.record)), (e.type === "UPDATE" || e.type === "DELETE") && (t.old = Ti(e.columns, e.old_record)), t;
  }
}
class Ku {
  constructor(e, t) {
    this.socket = new $u(e, t);
  }
  get timeout() {
    return this.socket.timeout;
  }
  get endPoint() {
    return this.socket.endPoint;
  }
  get transport() {
    return this.socket.transport;
  }
  get heartbeatIntervalMs() {
    return this.socket.heartbeatIntervalMs;
  }
  get heartbeatCallback() {
    return this.socket.heartbeatCallback;
  }
  set heartbeatCallback(e) {
    this.socket.heartbeatCallback = e;
  }
  get heartbeatTimer() {
    return this.socket.heartbeatTimer;
  }
  get pendingHeartbeatRef() {
    return this.socket.pendingHeartbeatRef;
  }
  get reconnectTimer() {
    return this.socket.reconnectTimer;
  }
  get vsn() {
    return this.socket.vsn;
  }
  get encode() {
    return this.socket.encode;
  }
  get decode() {
    return this.socket.decode;
  }
  get reconnectAfterMs() {
    return this.socket.reconnectAfterMs;
  }
  get sendBuffer() {
    return this.socket.sendBuffer;
  }
  get stateChangeCallbacks() {
    return this.socket.stateChangeCallbacks;
  }
  connect() {
    this.socket.connect();
  }
  disconnect(e, t, r, n = 1e4) {
    return new Promise((i) => {
      setTimeout(() => i("timeout"), n), this.socket.disconnect(() => {
        e(), i("ok");
      }, t, r);
    });
  }
  push(e) {
    this.socket.push(e);
  }
  log(e, t, r) {
    this.socket.log(e, t, r);
  }
  makeRef() {
    return this.socket.makeRef();
  }
  onOpen(e) {
    this.socket.onOpen(e);
  }
  onClose(e) {
    this.socket.onClose(e);
  }
  onError(e) {
    this.socket.onError(e);
  }
  onMessage(e) {
    this.socket.onMessage(e);
  }
  isConnected() {
    return this.socket.isConnected();
  }
  isConnecting() {
    return this.socket.connectionState() == sn.connecting;
  }
  isDisconnecting() {
    return this.socket.connectionState() == sn.closing;
  }
  connectionState() {
    return this.socket.connectionState();
  }
  endPointURL() {
    return this.socket.endPointURL();
  }
  sendHeartbeat() {
    this.socket.sendHeartbeat();
  }
  /**
   * @internal
   */
  getSocket() {
    return this.socket;
  }
}
const xi = {
  HEARTBEAT_INTERVAL: 25e3
}, Vu = [1e3, 2e3, 5e3, 1e4], Ju = 1e4;
function Yu() {
  const a = /* @__PURE__ */ new Map();
  return {
    get length() {
      return a.size;
    },
    clear() {
      a.clear();
    },
    getItem(e) {
      return a.has(e) ? a.get(e) : null;
    },
    key(e) {
      var t;
      return (t = Array.from(a.keys())[e]) !== null && t !== void 0 ? t : null;
    },
    removeItem(e) {
      a.delete(e);
    },
    setItem(e, t) {
      a.set(e, String(t));
    }
  };
}
function Xu() {
  try {
    if (typeof globalThis < "u" && globalThis.sessionStorage)
      return globalThis.sessionStorage;
  } catch {
  }
  return Yu();
}
const Zu = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
class Qu {
  get endPoint() {
    return this.socketAdapter.endPoint;
  }
  get timeout() {
    return this.socketAdapter.timeout;
  }
  get transport() {
    return this.socketAdapter.transport;
  }
  get heartbeatCallback() {
    return this.socketAdapter.heartbeatCallback;
  }
  get heartbeatIntervalMs() {
    return this.socketAdapter.heartbeatIntervalMs;
  }
  get heartbeatTimer() {
    return this.worker ? this._workerHeartbeatTimer : this.socketAdapter.heartbeatTimer;
  }
  get pendingHeartbeatRef() {
    return this.worker ? this._pendingWorkerHeartbeatRef : this.socketAdapter.pendingHeartbeatRef;
  }
  get reconnectTimer() {
    return this.socketAdapter.reconnectTimer;
  }
  get vsn() {
    return this.socketAdapter.vsn;
  }
  get encode() {
    return this.socketAdapter.encode;
  }
  get decode() {
    return this.socketAdapter.decode;
  }
  get reconnectAfterMs() {
    return this.socketAdapter.reconnectAfterMs;
  }
  get sendBuffer() {
    return this.socketAdapter.sendBuffer;
  }
  get stateChangeCallbacks() {
    return this.socketAdapter.stateChangeCallbacks;
  }
  /**
   * Initializes the Socket.
   *
   * @param endPoint The string WebSocket endpoint, ie, "ws://example.com/socket", "wss://example.com", "/socket" (inherited host & protocol)
   * @param httpEndpoint The string HTTP endpoint, ie, "https://example.com", "/" (inherited host & protocol)
   * @param options.transport The Websocket Transport, for example WebSocket. This can be a custom implementation
   * @param options.timeout The default timeout in milliseconds to trigger push timeouts.
   * @param options.params The optional params to pass when connecting.
   * @param options.headers Deprecated: headers cannot be set on websocket connections and this option will be removed in the future.
   * @param options.heartbeatIntervalMs The millisec interval to send a heartbeat message.
   * @param options.heartbeatCallback The optional function to handle heartbeat status and latency.
   * @param options.logger The optional function for specialized logging, ie: logger: (kind, msg, data) => { console.log(`${kind}: ${msg}`, data) }
   * @param options.logLevel Sets the log level for Realtime
   * @param options.encode The function to encode outgoing messages. Defaults to JSON: (payload, callback) => callback(JSON.stringify(payload))
   * @param options.decode The function to decode incoming messages. Defaults to Serializer's decode.
   * @param options.reconnectAfterMs he optional function that returns the millsec reconnect interval. Defaults to stepped backoff off.
   * @param options.worker Use Web Worker to set a side flow. Defaults to false.
   * @param options.workerUrl The URL of the worker script. Defaults to https://realtime.supabase.com/worker.js that includes a heartbeat event call to keep the connection alive.
   * @param options.vsn The protocol version to use when connecting. Supported versions are "1.0.0" and "2.0.0". Defaults to "2.0.0".
   *
   * @category Realtime
   *
   * @example Using supabase-js (recommended)
   * ```ts
   * import { createClient } from '@supabase/supabase-js'
   *
   * const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key')
   * const channel = supabase.channel('room1')
   * channel
   *   .on('broadcast', { event: 'cursor-pos' }, (payload) => console.log(payload))
   *   .subscribe()
   * ```
   *
   * @example Standalone import for bundle-sensitive environments
   * ```ts
   * import RealtimeClient from '@supabase/realtime-js'
   *
   * const client = new RealtimeClient('https://xyzcompany.supabase.co/realtime/v1', {
   *   params: { apikey: 'your-publishable-key' },
   * })
   * client.connect()
   * ```
   */
  constructor(e, t) {
    var r;
    if (this.channels = new Array(), this.accessTokenValue = null, this.accessToken = null, this.apiKey = null, this.httpEndpoint = "", this.headers = {}, this.params = {}, this.ref = 0, this.serializer = new Su(), this._manuallySetToken = !1, this._authPromise = null, this._workerHeartbeatTimer = void 0, this._pendingWorkerHeartbeatRef = null, this._pendingDisconnectTimer = null, this._disconnectOnEmptyChannelsAfterMs = 0, this._resolveFetch = (i) => i ? (...s) => i(...s) : (...s) => fetch(...s), !(!((r = t?.params) === null || r === void 0) && r.apikey))
      throw new Error("API key is required to connect to Realtime");
    this.apiKey = t.params.apikey;
    const n = this._initializeOptions(t);
    this.socketAdapter = new Ku(e, n), this.httpEndpoint = Ps(e), this.fetch = this._resolveFetch(t?.fetch);
  }
  /**
   * Connects the socket, unless already connected.
   *
   * @category Realtime
   */
  connect() {
    if (!(this.isConnecting() || this.isDisconnecting() || this.isConnected())) {
      this.accessToken && !this._authPromise && this._setAuthSafely("connect"), this._setupConnectionHandlers();
      try {
        this.socketAdapter.connect();
      } catch (e) {
        const t = e.message;
        throw t.includes("Node.js") ? new Error(`${t}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`) : new Error(`WebSocket not available: ${t}`);
      }
      this._handleNodeJsRaceCondition();
    }
  }
  /**
   * Returns the URL of the websocket.
   * @returns string The URL of the websocket.
   *
   * @category Realtime
   */
  endpointURL() {
    return this.socketAdapter.endPointURL();
  }
  /**
   * Disconnects the socket.
   *
   * @param code A numeric status code to send on disconnect.
   * @param reason A custom reason for the disconnect.
   *
   * @category Realtime
   */
  async disconnect(e, t) {
    return this._cancelPendingDisconnect(), this.isDisconnecting() ? "ok" : await this.socketAdapter.disconnect(() => {
      clearInterval(this._workerHeartbeatTimer), this._terminateWorker();
    }, e, t);
  }
  /**
   * Returns all created channels
   *
   * @category Realtime
   */
  getChannels() {
    return this.channels;
  }
  /**
   * Unsubscribes, removes and tears down a single channel
   * @param channel A RealtimeChannel instance
   *
   * @category Realtime
   */
  async removeChannel(e) {
    const t = await e.unsubscribe();
    return t === "ok" && e.teardown(), t;
  }
  /**
   * Unsubscribes, removes and tears down all channels
   *
   * @category Realtime
   */
  async removeAllChannels() {
    const e = this.channels.map(async (r) => {
      const n = await r.unsubscribe();
      return r.teardown(), n;
    }), t = await Promise.all(e);
    return await this.disconnect(), t;
  }
  /**
   * Logs the message.
   *
   * For customized logging, `this.logger` can be overridden in Client constructor.
   *
   * @category Realtime
   */
  log(e, t, r) {
    this.socketAdapter.log(e, t, r);
  }
  /**
   * Returns the current state of the socket.
   *
   * @category Realtime
   */
  connectionState() {
    return this.socketAdapter.connectionState() || sn.closed;
  }
  /**
   * Returns `true` is the connection is open.
   *
   * @category Realtime
   */
  isConnected() {
    return this.socketAdapter.isConnected();
  }
  /**
   * Returns `true` if the connection is currently connecting.
   *
   * @category Realtime
   */
  isConnecting() {
    return this.socketAdapter.isConnecting();
  }
  /**
   * Returns `true` if the connection is currently disconnecting.
   *
   * @category Realtime
   */
  isDisconnecting() {
    return this.socketAdapter.isDisconnecting();
  }
  /**
   * Creates (or reuses) a {@link RealtimeChannel} for the provided topic.
   *
   * Topics are automatically prefixed with `realtime:` to match the Realtime service.
   * If a channel with the same topic already exists it will be returned instead of creating
   * a duplicate connection.
   *
   * @category Realtime
   */
  channel(e, t = { config: {} }) {
    const r = `realtime:${e}`, n = this.getChannels().find((i) => i.topic === r);
    if (n)
      return n;
    {
      const i = new ca(`realtime:${e}`, t, this);
      return this._cancelPendingDisconnect(), this.channels.push(i), i;
    }
  }
  /**
   * Push out a message if the socket is connected.
   *
   * If the socket is not connected, the message gets enqueued within a local buffer, and sent out when a connection is next established.
   *
   * @category Realtime
   */
  push(e) {
    this.socketAdapter.push(e);
  }
  /**
   * Sets the JWT access token used for channel subscription authorization and Realtime RLS.
   *
   * If param is null it will use the `accessToken` callback function or the token set on the client.
   *
   * On callback used, it will set the value of the token internal to the client.
   *
   * When a token is explicitly provided, it will be preserved across channel operations
   * (including removeChannel and resubscribe). The `accessToken` callback will not be
   * invoked until `setAuth()` is called without arguments.
   *
   * @param token A JWT string to override the token set on the client.
   *
   * @example Setting the authorization header
   * // Use a manual token (preserved across resubscribes, ignores accessToken callback)
   * client.realtime.setAuth('my-custom-jwt')
   *
   * // Switch back to using the accessToken callback
   * client.realtime.setAuth()
   *
   * @category Realtime
   */
  async setAuth(e = null) {
    this._authPromise = this._performAuth(e);
    try {
      await this._authPromise;
    } finally {
      this._authPromise = null;
    }
  }
  /**
   * Returns true if the current access token was explicitly set via setAuth(token),
   * false if it was obtained via the accessToken callback.
   * @internal
   */
  _isManualToken() {
    return this._manuallySetToken;
  }
  /**
   * Sends a heartbeat message if the socket is connected.
   *
   * @category Realtime
   */
  async sendHeartbeat() {
    this.socketAdapter.sendHeartbeat();
  }
  /**
   * Sets a callback that receives lifecycle events for internal heartbeat messages.
   * Useful for instrumenting connection health (e.g. sent/ok/timeout/disconnected).
   *
   * @category Realtime
   */
  onHeartbeat(e) {
    this.socketAdapter.heartbeatCallback = this._wrapHeartbeatCallback(e);
  }
  /**
   * Return the next message ref, accounting for overflows
   *
   * @internal
   */
  _makeRef() {
    return this.socketAdapter.makeRef();
  }
  /**
   * Removes a channel from RealtimeClient
   *
   * @param channel An open subscription.
   *
   * @internal
   */
  _remove(e) {
    this.channels = this.channels.filter((t) => t.topic !== e.topic), this.channels.length === 0 && (this.log("transport", "no channels remaining, scheduling disconnect"), this._schedulePendingDisconnect());
  }
  /** @internal */
  _schedulePendingDisconnect() {
    if (this._cancelPendingDisconnect(), this._disconnectOnEmptyChannelsAfterMs === 0) {
      this.log("transport", "disconnecting immediately - no channels"), this.disconnect();
      return;
    }
    this._pendingDisconnectTimer = setTimeout(() => {
      this._pendingDisconnectTimer = null, this.channels.length === 0 && (this.log("transport", "deferred disconnect fired - no channels, disconnecting"), this.disconnect());
    }, this._disconnectOnEmptyChannelsAfterMs), this.log("transport", `deferred disconnect scheduled in ${this._disconnectOnEmptyChannelsAfterMs}ms`);
  }
  /** @internal */
  _cancelPendingDisconnect() {
    this._pendingDisconnectTimer !== null && (this.log("transport", "pending disconnect cancelled - channel activity detected"), clearTimeout(this._pendingDisconnectTimer), this._pendingDisconnectTimer = null);
  }
  /**
   * Perform the actual auth operation
   * @internal
   */
  async _performAuth(e = null) {
    let t, r = !1;
    if (e)
      t = e, r = !0;
    else if (this.accessToken)
      try {
        t = await this.accessToken();
      } catch (n) {
        this.log("error", "Error fetching access token from callback", n), t = this.accessTokenValue;
      }
    else
      t = this.accessTokenValue;
    r ? this._manuallySetToken = !0 : this.accessToken && (this._manuallySetToken = !1), this.accessTokenValue != t && (this.accessTokenValue = t, this.channels.forEach((n) => {
      const i = {
        access_token: t,
        version: vu
      };
      t && n.updateJoinPayload(i), n.joinedOnce && n.channelAdapter.isJoined() && n.channelAdapter.push(js.access_token, {
        access_token: t
      });
    }));
  }
  /**
   * Wait for any in-flight auth operations to complete
   * @internal
   */
  async _waitForAuthIfNeeded() {
    this._authPromise && await this._authPromise;
  }
  /**
   * Safely call setAuth with standardized error handling
   * @internal
   */
  _setAuthSafely(e = "general") {
    this._isManualToken() || this.setAuth().catch((t) => {
      this.log("error", `Error setting auth in ${e}`, t);
    });
  }
  /** @internal */
  _setupConnectionHandlers() {
    this.socketAdapter.onOpen(() => {
      (this._authPromise || (this.accessToken && !this.accessTokenValue ? this.setAuth() : Promise.resolve())).catch((t) => {
        this.log("error", "error waiting for auth on connect", t);
      }), this.worker && !this.workerRef && this._startWorkerHeartbeat();
    }), this.socketAdapter.onClose(() => {
      this.worker && this.workerRef && this._terminateWorker();
    }), this.socketAdapter.onMessage((e) => {
      e.ref && e.ref === this._pendingWorkerHeartbeatRef && (this._pendingWorkerHeartbeatRef = null);
    });
  }
  /** @internal */
  _handleNodeJsRaceCondition() {
    this.socketAdapter.isConnected() && this.socketAdapter.getSocket().onConnOpen();
  }
  /** @internal */
  _wrapHeartbeatCallback(e) {
    return (t, r) => {
      t == "sent" && this._setAuthSafely(), e && e(t, r);
    };
  }
  /** @internal */
  _startWorkerHeartbeat() {
    this.workerUrl ? this.log("worker", `starting worker for from ${this.workerUrl}`) : this.log("worker", "starting default worker");
    const e = this._workerObjectUrl(this.workerUrl);
    this.workerRef = new Worker(e), this.workerRef.onerror = (t) => {
      this.log("worker", "worker error", t.message), this._terminateWorker(), this.disconnect();
    }, this.workerRef.onmessage = (t) => {
      t.data.event === "keepAlive" && this.sendHeartbeat();
    }, this.workerRef.postMessage({
      event: "start",
      interval: this.heartbeatIntervalMs
    });
  }
  /**
   * Terminate the Web Worker and clear the reference
   * @internal
   */
  _terminateWorker() {
    this.workerRef && (this.log("worker", "terminating worker"), this.workerRef.terminate(), this.workerRef = void 0);
  }
  /** @internal */
  _workerObjectUrl(e) {
    let t;
    if (e)
      t = e;
    else {
      const r = new Blob([Zu], { type: "application/javascript" });
      t = URL.createObjectURL(r);
    }
    return t;
  }
  /**
   * Initialize socket options with defaults
   * @internal
   */
  _initializeOptions(e) {
    var t, r, n, i, s, o, l, u, f, d, g, b;
    this.worker = (t = e?.worker) !== null && t !== void 0 ? t : !1, this.accessToken = (r = e?.accessToken) !== null && r !== void 0 ? r : null;
    const v = {};
    v.timeout = (n = e?.timeout) !== null && n !== void 0 ? n : Eu, v.heartbeatIntervalMs = (i = e?.heartbeatIntervalMs) !== null && i !== void 0 ? i : xi.HEARTBEAT_INTERVAL, this._disconnectOnEmptyChannelsAfterMs = (s = e?.disconnectOnEmptyChannelsAfterMs) !== null && s !== void 0 ? s : 2 * ((o = e?.heartbeatIntervalMs) !== null && o !== void 0 ? o : xi.HEARTBEAT_INTERVAL), v.transport = (l = e?.transport) !== null && l !== void 0 ? l : bu.getWebSocketConstructor(), v.params = e?.params, v.logger = e?.logger, v.heartbeatCallback = this._wrapHeartbeatCallback(e?.heartbeatCallback), v.sessionStorage = (u = e?.sessionStorage) !== null && u !== void 0 ? u : Xu(), v.reconnectAfterMs = (f = e?.reconnectAfterMs) !== null && f !== void 0 ? f : ((O) => Vu[O - 1] || Ju);
    let A, D;
    const x = (d = e?.vsn) !== null && d !== void 0 ? d : ku;
    switch (x) {
      case _u:
        A = (O, _) => _(JSON.stringify(O)), D = (O, _) => _(JSON.parse(O));
        break;
      case Ds:
        A = this.serializer.encode.bind(this.serializer), D = this.serializer.decode.bind(this.serializer);
        break;
      default:
        throw new Error(`Unsupported serializer version: ${v.vsn}`);
    }
    if (v.vsn = x, v.encode = (g = e?.encode) !== null && g !== void 0 ? g : A, v.decode = (b = e?.decode) !== null && b !== void 0 ? b : D, v.beforeReconnect = this._reconnectAuth.bind(this), (e?.logLevel || e?.log_level) && (this.logLevel = e.logLevel || e.log_level, v.params = Object.assign(Object.assign({}, v.params), { log_level: this.logLevel })), this.worker) {
      if (typeof window < "u" && !window.Worker)
        throw new Error("Web Worker is not supported");
      this.workerUrl = e?.workerUrl, v.autoSendHeartbeat = !this.worker;
    }
    return v;
  }
  /** @internal */
  async _reconnectAuth() {
    await this._waitForAuthIfNeeded(), this.isConnected() || this.connect();
  }
}
var fa = class extends Error {
  constructor(a, e) {
    super(a), this.name = "IcebergError", this.status = e.status, this.icebergType = e.icebergType, this.icebergCode = e.icebergCode, this.details = e.details, this.isCommitStateUnknown = e.icebergType === "CommitStateUnknownException" || [500, 502, 504].includes(e.status) && e.icebergType?.includes("CommitState") === !0;
  }
  /**
   * Returns true if the error is a 404 Not Found error.
   */
  isNotFound() {
    return this.status === 404;
  }
  /**
   * Returns true if the error is a 409 Conflict error.
   */
  isConflict() {
    return this.status === 409;
  }
  /**
   * Returns true if the error is a 419 Authentication Timeout error.
   */
  isAuthenticationTimeout() {
    return this.status === 419;
  }
};
function ec(a, e, t) {
  const r = new URL(e, a);
  if (t)
    for (const [n, i] of Object.entries(t))
      i !== void 0 && r.searchParams.set(n, i);
  return r.toString();
}
async function tc(a) {
  return !a || a.type === "none" ? {} : a.type === "bearer" ? { Authorization: `Bearer ${a.token}` } : a.type === "header" ? { [a.name]: a.value } : a.type === "custom" ? await a.getHeaders() : {};
}
function ac(a) {
  const e = a.fetchImpl ?? globalThis.fetch;
  return {
    async request({
      method: t,
      path: r,
      query: n,
      body: i,
      headers: s
    }) {
      const o = ec(a.baseUrl, r, n), l = await tc(a.auth), u = await e(o, {
        method: t,
        headers: {
          ...i ? { "Content-Type": "application/json" } : {},
          ...l,
          ...s
        },
        body: i ? JSON.stringify(i) : void 0
      }), f = await u.text(), d = (u.headers.get("content-type") || "").includes("application/json"), g = d && f ? JSON.parse(f) : f;
      if (!u.ok) {
        const b = d ? g : void 0, v = b?.error;
        throw new fa(
          v?.message ?? `Request failed with status ${u.status}`,
          {
            status: u.status,
            icebergType: v?.type,
            icebergCode: v?.code,
            details: b
          }
        );
      }
      return { status: u.status, headers: u.headers, data: g };
    }
  };
}
function Ma(a) {
  return a.join("");
}
var rc = class {
  constructor(a, e = "") {
    this.client = a, this.prefix = e;
  }
  async listNamespaces(a) {
    const e = a ? { parent: Ma(a.namespace) } : void 0;
    return (await this.client.request({
      method: "GET",
      path: `${this.prefix}/namespaces`,
      query: e
    })).data.namespaces.map((r) => ({ namespace: r }));
  }
  async createNamespace(a, e) {
    const t = {
      namespace: a.namespace,
      properties: e?.properties
    };
    return (await this.client.request({
      method: "POST",
      path: `${this.prefix}/namespaces`,
      body: t
    })).data;
  }
  async dropNamespace(a) {
    await this.client.request({
      method: "DELETE",
      path: `${this.prefix}/namespaces/${Ma(a.namespace)}`
    });
  }
  async loadNamespaceMetadata(a) {
    return {
      properties: (await this.client.request({
        method: "GET",
        path: `${this.prefix}/namespaces/${Ma(a.namespace)}`
      })).data.properties
    };
  }
  async namespaceExists(a) {
    try {
      return await this.client.request({
        method: "HEAD",
        path: `${this.prefix}/namespaces/${Ma(a.namespace)}`
      }), !0;
    } catch (e) {
      if (e instanceof fa && e.status === 404)
        return !1;
      throw e;
    }
  }
  async createNamespaceIfNotExists(a, e) {
    try {
      return await this.createNamespace(a, e);
    } catch (t) {
      if (t instanceof fa && t.status === 409)
        return;
      throw t;
    }
  }
};
function Rt(a) {
  return a.join("");
}
var nc = class {
  constructor(a, e = "", t) {
    this.client = a, this.prefix = e, this.accessDelegation = t;
  }
  async listTables(a) {
    return (await this.client.request({
      method: "GET",
      path: `${this.prefix}/namespaces/${Rt(a.namespace)}/tables`
    })).data.identifiers;
  }
  async createTable(a, e) {
    const t = {};
    return this.accessDelegation && (t["X-Iceberg-Access-Delegation"] = this.accessDelegation), (await this.client.request({
      method: "POST",
      path: `${this.prefix}/namespaces/${Rt(a.namespace)}/tables`,
      body: e,
      headers: t
    })).data.metadata;
  }
  async updateTable(a, e) {
    const t = await this.client.request({
      method: "POST",
      path: `${this.prefix}/namespaces/${Rt(a.namespace)}/tables/${a.name}`,
      body: e
    });
    return {
      "metadata-location": t.data["metadata-location"],
      metadata: t.data.metadata
    };
  }
  async dropTable(a, e) {
    await this.client.request({
      method: "DELETE",
      path: `${this.prefix}/namespaces/${Rt(a.namespace)}/tables/${a.name}`,
      query: { purgeRequested: String(e?.purge ?? !1) }
    });
  }
  async loadTable(a) {
    const e = {};
    return this.accessDelegation && (e["X-Iceberg-Access-Delegation"] = this.accessDelegation), (await this.client.request({
      method: "GET",
      path: `${this.prefix}/namespaces/${Rt(a.namespace)}/tables/${a.name}`,
      headers: e
    })).data.metadata;
  }
  async tableExists(a) {
    const e = {};
    this.accessDelegation && (e["X-Iceberg-Access-Delegation"] = this.accessDelegation);
    try {
      return await this.client.request({
        method: "HEAD",
        path: `${this.prefix}/namespaces/${Rt(a.namespace)}/tables/${a.name}`,
        headers: e
      }), !0;
    } catch (t) {
      if (t instanceof fa && t.status === 404)
        return !1;
      throw t;
    }
  }
  async createTableIfNotExists(a, e) {
    try {
      return await this.createTable(a, e);
    } catch (t) {
      if (t instanceof fa && t.status === 409)
        return await this.loadTable({ namespace: a.namespace, name: e.name });
      throw t;
    }
  }
}, ic = class {
  /**
   * Creates a new Iceberg REST Catalog client.
   *
   * @param options - Configuration options for the catalog client
   */
  constructor(a) {
    let e = "v1";
    a.catalogName && (e += `/${a.catalogName}`);
    const t = a.baseUrl.endsWith("/") ? a.baseUrl : `${a.baseUrl}/`;
    this.client = ac({
      baseUrl: t,
      auth: a.auth,
      fetchImpl: a.fetch
    }), this.accessDelegation = a.accessDelegation?.join(","), this.namespaceOps = new rc(this.client, e), this.tableOps = new nc(this.client, e, this.accessDelegation);
  }
  /**
   * Lists all namespaces in the catalog.
   *
   * @param parent - Optional parent namespace to list children under
   * @returns Array of namespace identifiers
   *
   * @example
   * ```typescript
   * // List all top-level namespaces
   * const namespaces = await catalog.listNamespaces();
   *
   * // List namespaces under a parent
   * const children = await catalog.listNamespaces({ namespace: ['analytics'] });
   * ```
   */
  async listNamespaces(a) {
    return this.namespaceOps.listNamespaces(a);
  }
  /**
   * Creates a new namespace in the catalog.
   *
   * @param id - Namespace identifier to create
   * @param metadata - Optional metadata properties for the namespace
   * @returns Response containing the created namespace and its properties
   *
   * @example
   * ```typescript
   * const response = await catalog.createNamespace(
   *   { namespace: ['analytics'] },
   *   { properties: { owner: 'data-team' } }
   * );
   * console.log(response.namespace); // ['analytics']
   * console.log(response.properties); // { owner: 'data-team', ... }
   * ```
   */
  async createNamespace(a, e) {
    return this.namespaceOps.createNamespace(a, e);
  }
  /**
   * Drops a namespace from the catalog.
   *
   * The namespace must be empty (contain no tables) before it can be dropped.
   *
   * @param id - Namespace identifier to drop
   *
   * @example
   * ```typescript
   * await catalog.dropNamespace({ namespace: ['analytics'] });
   * ```
   */
  async dropNamespace(a) {
    await this.namespaceOps.dropNamespace(a);
  }
  /**
   * Loads metadata for a namespace.
   *
   * @param id - Namespace identifier to load
   * @returns Namespace metadata including properties
   *
   * @example
   * ```typescript
   * const metadata = await catalog.loadNamespaceMetadata({ namespace: ['analytics'] });
   * console.log(metadata.properties);
   * ```
   */
  async loadNamespaceMetadata(a) {
    return this.namespaceOps.loadNamespaceMetadata(a);
  }
  /**
   * Lists all tables in a namespace.
   *
   * @param namespace - Namespace identifier to list tables from
   * @returns Array of table identifiers
   *
   * @example
   * ```typescript
   * const tables = await catalog.listTables({ namespace: ['analytics'] });
   * console.log(tables); // [{ namespace: ['analytics'], name: 'events' }, ...]
   * ```
   */
  async listTables(a) {
    return this.tableOps.listTables(a);
  }
  /**
   * Creates a new table in the catalog.
   *
   * @param namespace - Namespace to create the table in
   * @param request - Table creation request including name, schema, partition spec, etc.
   * @returns Table metadata for the created table
   *
   * @example
   * ```typescript
   * const metadata = await catalog.createTable(
   *   { namespace: ['analytics'] },
   *   {
   *     name: 'events',
   *     schema: {
   *       type: 'struct',
   *       fields: [
   *         { id: 1, name: 'id', type: 'long', required: true },
   *         { id: 2, name: 'timestamp', type: 'timestamp', required: true }
   *       ],
   *       'schema-id': 0
   *     },
   *     'partition-spec': {
   *       'spec-id': 0,
   *       fields: [
   *         { source_id: 2, field_id: 1000, name: 'ts_day', transform: 'day' }
   *       ]
   *     }
   *   }
   * );
   * ```
   */
  async createTable(a, e) {
    return this.tableOps.createTable(a, e);
  }
  /**
   * Updates an existing table's metadata.
   *
   * Can update the schema, partition spec, or properties of a table.
   *
   * @param id - Table identifier to update
   * @param request - Update request with fields to modify
   * @returns Response containing the metadata location and updated table metadata
   *
   * @example
   * ```typescript
   * const response = await catalog.updateTable(
   *   { namespace: ['analytics'], name: 'events' },
   *   {
   *     properties: { 'read.split.target-size': '134217728' }
   *   }
   * );
   * console.log(response['metadata-location']); // s3://...
   * console.log(response.metadata); // TableMetadata object
   * ```
   */
  async updateTable(a, e) {
    return this.tableOps.updateTable(a, e);
  }
  /**
   * Drops a table from the catalog.
   *
   * @param id - Table identifier to drop
   *
   * @example
   * ```typescript
   * await catalog.dropTable({ namespace: ['analytics'], name: 'events' });
   * ```
   */
  async dropTable(a, e) {
    await this.tableOps.dropTable(a, e);
  }
  /**
   * Loads metadata for a table.
   *
   * @param id - Table identifier to load
   * @returns Table metadata including schema, partition spec, location, etc.
   *
   * @example
   * ```typescript
   * const metadata = await catalog.loadTable({ namespace: ['analytics'], name: 'events' });
   * console.log(metadata.schema);
   * console.log(metadata.location);
   * ```
   */
  async loadTable(a) {
    return this.tableOps.loadTable(a);
  }
  /**
   * Checks if a namespace exists in the catalog.
   *
   * @param id - Namespace identifier to check
   * @returns True if the namespace exists, false otherwise
   *
   * @example
   * ```typescript
   * const exists = await catalog.namespaceExists({ namespace: ['analytics'] });
   * console.log(exists); // true or false
   * ```
   */
  async namespaceExists(a) {
    return this.namespaceOps.namespaceExists(a);
  }
  /**
   * Checks if a table exists in the catalog.
   *
   * @param id - Table identifier to check
   * @returns True if the table exists, false otherwise
   *
   * @example
   * ```typescript
   * const exists = await catalog.tableExists({ namespace: ['analytics'], name: 'events' });
   * console.log(exists); // true or false
   * ```
   */
  async tableExists(a) {
    return this.tableOps.tableExists(a);
  }
  /**
   * Creates a namespace if it does not exist.
   *
   * If the namespace already exists, returns void. If created, returns the response.
   *
   * @param id - Namespace identifier to create
   * @param metadata - Optional metadata properties for the namespace
   * @returns Response containing the created namespace and its properties, or void if it already exists
   *
   * @example
   * ```typescript
   * const response = await catalog.createNamespaceIfNotExists(
   *   { namespace: ['analytics'] },
   *   { properties: { owner: 'data-team' } }
   * );
   * if (response) {
   *   console.log('Created:', response.namespace);
   * } else {
   *   console.log('Already exists');
   * }
   * ```
   */
  async createNamespaceIfNotExists(a, e) {
    return this.namespaceOps.createNamespaceIfNotExists(a, e);
  }
  /**
   * Creates a table if it does not exist.
   *
   * If the table already exists, returns its metadata instead.
   *
   * @param namespace - Namespace to create the table in
   * @param request - Table creation request including name, schema, partition spec, etc.
   * @returns Table metadata for the created or existing table
   *
   * @example
   * ```typescript
   * const metadata = await catalog.createTableIfNotExists(
   *   { namespace: ['analytics'] },
   *   {
   *     name: 'events',
   *     schema: {
   *       type: 'struct',
   *       fields: [
   *         { id: 1, name: 'id', type: 'long', required: true },
   *         { id: 2, name: 'timestamp', type: 'timestamp', required: true }
   *       ],
   *       'schema-id': 0
   *     }
   *   }
   * );
   * ```
   */
  async createTableIfNotExists(a, e) {
    return this.tableOps.createTableIfNotExists(a, e);
  }
};
function ga(a) {
  "@babel/helpers - typeof";
  return ga = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ga(a);
}
function sc(a, e) {
  if (ga(a) != "object" || !a) return a;
  var t = a[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(a, e);
    if (ga(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(a);
}
function oc(a) {
  var e = sc(a, "string");
  return ga(e) == "symbol" ? e : e + "";
}
function lc(a, e, t) {
  return (e = oc(e)) in a ? Object.defineProperty(a, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : a[e] = t, a;
}
function Oi(a, e) {
  var t = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(a);
    e && (r = r.filter(function(n) {
      return Object.getOwnPropertyDescriptor(a, n).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function H(a) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Oi(Object(t), !0).forEach(function(r) {
      lc(a, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(t)) : Oi(Object(t)).forEach(function(r) {
      Object.defineProperty(a, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return a;
}
var lr = class extends Error {
  constructor(a, e = "storage", t, r) {
    super(a), this.__isStorageError = !0, this.namespace = e, this.name = e === "vectors" ? "StorageVectorsError" : "StorageError", this.status = t, this.statusCode = r;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      statusCode: this.statusCode
    };
  }
};
function ur(a) {
  return typeof a == "object" && a !== null && "__isStorageError" in a;
}
var cn = class extends lr {
  constructor(a, e, t, r = "storage") {
    super(a, r, e, t), this.name = r === "vectors" ? "StorageVectorsApiError" : "StorageApiError", this.status = e, this.statusCode = t;
  }
  toJSON() {
    return H({}, super.toJSON());
  }
}, zs = class extends lr {
  constructor(a, e, t = "storage") {
    super(a, t), this.name = t === "vectors" ? "StorageVectorsUnknownError" : "StorageUnknownError", this.originalError = e;
  }
};
function er(a, e, t) {
  const r = H({}, a), n = e.toLowerCase();
  for (const i of Object.keys(r)) i.toLowerCase() === n && delete r[i];
  return r[n] = t, r;
}
function uc(a) {
  const e = {};
  for (const [t, r] of Object.entries(a)) e[t.toLowerCase()] = r;
  return e;
}
const cc = (a) => a ? (...e) => a(...e) : (...e) => fetch(...e), hc = (a) => {
  if (typeof a != "object" || a === null) return !1;
  const e = Object.getPrototypeOf(a);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in a) && !(Symbol.iterator in a);
}, hn = (a) => {
  if (Array.isArray(a)) return a.map((t) => hn(t));
  if (typeof a == "function" || a !== Object(a)) return a;
  const e = {};
  return Object.entries(a).forEach(([t, r]) => {
    const n = t.replace(/([-_][a-z])/gi, (i) => i.toUpperCase().replace(/[-_]/g, ""));
    e[n] = hn(r);
  }), e;
}, dc = (a) => !a || typeof a != "string" || a.length === 0 || a.length > 100 || a.trim() !== a || a.includes("/") || a.includes("\\") ? !1 : /^[\w!.\*'() &$@=;:+,?-]+$/.test(a), Di = (a) => {
  if (typeof a == "object" && a !== null) {
    const e = a;
    if (typeof e.msg == "string") return e.msg;
    if (typeof e.message == "string") return e.message;
    if (typeof e.error_description == "string") return e.error_description;
    if (typeof e.error == "string") return e.error;
    if (typeof e.error == "object" && e.error !== null) {
      const t = e.error;
      if (typeof t.message == "string") return t.message;
    }
  }
  return JSON.stringify(a);
}, fc = async (a, e, t, r) => {
  if (a !== null && typeof a == "object" && "json" in a && typeof a.json == "function") {
    const n = a;
    let i = parseInt(String(n.status), 10);
    Number.isFinite(i) || (i = 500), n.json().then((s) => {
      const o = s?.statusCode || s?.code || i + "";
      e(new cn(Di(s), i, o, r));
    }).catch(() => {
      const s = i + "";
      e(new cn(n.statusText || `HTTP ${i} error`, i, s, r));
    });
  } else e(new zs(Di(a), a, r));
}, gc = (a, e, t, r) => {
  const n = {
    method: a,
    headers: e?.headers || {}
  };
  if (a === "GET" || a === "HEAD" || !r) return H(H({}, n), t);
  if (hc(r)) {
    var i;
    const s = e?.headers || {};
    let o;
    for (const [l, u] of Object.entries(s)) l.toLowerCase() === "content-type" && (o = u);
    n.headers = er(s, "Content-Type", (i = o) !== null && i !== void 0 ? i : "application/json"), n.body = JSON.stringify(r);
  } else n.body = r;
  return e?.duplex && (n.duplex = e.duplex), H(H({}, n), t);
};
async function ia(a, e, t, r, n, i, s) {
  return new Promise((o, l) => {
    a(t, gc(e, r, n, i)).then((u) => {
      if (!u.ok) throw u;
      if (r?.noResolveJson) return u;
      if (s === "vectors") {
        const f = u.headers.get("content-type");
        if (u.headers.get("content-length") === "0" || u.status === 204) return {};
        if (!f || !f.includes("application/json")) return {};
      }
      return u.json();
    }).then((u) => o(u)).catch((u) => fc(u, l, r, s));
  });
}
function Fs(a = "storage") {
  return {
    get: async (e, t, r, n) => ia(e, "GET", t, r, n, void 0, a),
    post: async (e, t, r, n, i) => ia(e, "POST", t, n, i, r, a),
    put: async (e, t, r, n, i) => ia(e, "PUT", t, n, i, r, a),
    head: async (e, t, r, n) => ia(e, "HEAD", t, H(H({}, r), {}, { noResolveJson: !0 }), n, void 0, a),
    remove: async (e, t, r, n, i) => ia(e, "DELETE", t, n, i, r, a)
  };
}
const mc = Fs("storage"), { get: ma, post: Oe, put: dn, head: pc, remove: An } = mc, Ee = Fs("vectors");
var Kt = class {
  /**
  * Creates a new BaseApiClient instance
  * @param url - Base URL for API requests
  * @param headers - Default headers for API requests
  * @param fetch - Optional custom fetch implementation
  * @param namespace - Error namespace ('storage' or 'vectors')
  */
  constructor(a, e = {}, t, r = "storage") {
    this.shouldThrowOnError = !1, this.url = a, this.headers = uc(e), this.fetch = cc(t), this.namespace = r;
  }
  /**
  * Enable throwing errors instead of returning them.
  * When enabled, errors are thrown instead of returned in { data, error } format.
  *
  * @returns this - For method chaining
  */
  throwOnError() {
    return this.shouldThrowOnError = !0, this;
  }
  /**
  * Set an HTTP header for the request.
  * Creates a shallow copy of headers to avoid mutating shared state.
  *
  * @param name - Header name
  * @param value - Header value
  * @returns this - For method chaining
  */
  setHeader(a, e) {
    return this.headers = er(this.headers, a, e), this;
  }
  /**
  * Handles API operation with standardized error handling
  * Eliminates repetitive try-catch blocks across all API methods
  *
  * This wrapper:
  * 1. Executes the operation
  * 2. Returns { data, error: null } on success
  * 3. Returns { data: null, error } on failure (if shouldThrowOnError is false)
  * 4. Throws error on failure (if shouldThrowOnError is true)
  *
  * @typeParam T - The expected data type from the operation
  * @param operation - Async function that performs the API call
  * @returns Promise with { data, error } tuple
  *
  * @example Handling an operation
  * ```typescript
  * async listBuckets() {
  *   return this.handleOperation(async () => {
  *     return await get(this.fetch, `${this.url}/bucket`, {
  *       headers: this.headers,
  *     })
  *   })
  * }
  * ```
  */
  async handleOperation(a) {
    var e = this;
    try {
      return {
        data: await a(),
        error: null
      };
    } catch (t) {
      if (e.shouldThrowOnError) throw t;
      if (ur(t)) return {
        data: null,
        error: t
      };
      throw t;
    }
  }
}, yc = class {
  constructor(a, e) {
    this.downloadFn = a, this.shouldThrowOnError = e;
  }
  then(a, e) {
    return this.execute().then(a, e);
  }
  async execute() {
    var a = this;
    try {
      return {
        data: (await a.downloadFn()).body,
        error: null
      };
    } catch (e) {
      if (a.shouldThrowOnError) throw e;
      if (ur(e)) return {
        data: null,
        error: e
      };
      throw e;
    }
  }
};
let Us;
Us = Symbol.toStringTag;
var bc = class {
  constructor(a, e) {
    this.downloadFn = a, this.shouldThrowOnError = e, this[Us] = "BlobDownloadBuilder", this.promise = null;
  }
  asStream() {
    return new yc(this.downloadFn, this.shouldThrowOnError);
  }
  then(a, e) {
    return this.getPromise().then(a, e);
  }
  catch(a) {
    return this.getPromise().catch(a);
  }
  finally(a) {
    return this.getPromise().finally(a);
  }
  getPromise() {
    return this.promise || (this.promise = this.execute()), this.promise;
  }
  async execute() {
    var a = this;
    try {
      return {
        data: await (await a.downloadFn()).blob(),
        error: null
      };
    } catch (e) {
      if (a.shouldThrowOnError) throw e;
      if (ur(e)) return {
        data: null,
        error: e
      };
      throw e;
    }
  }
};
const wc = {
  limit: 100,
  offset: 0,
  sortBy: {
    column: "name",
    order: "asc"
  }
}, ji = {
  cacheControl: "3600",
  contentType: "text/plain;charset=UTF-8",
  upsert: !1
};
var vc = class extends Kt {
  constructor(a, e = {}, t, r) {
    super(a, e, r, "storage"), this.bucketId = t;
  }
  /**
  * Uploads a file to an existing bucket or replaces an existing file at the specified path with a new one.
  *
  * @param method HTTP method.
  * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
  * @param fileBody The body of the file to be stored in the bucket.
  */
  async uploadOrUpdate(a, e, t, r) {
    var n = this;
    return n.handleOperation(async () => {
      let i;
      const s = H(H({}, ji), r);
      let o = H(H({}, n.headers), a === "POST" && { "x-upsert": String(s.upsert) });
      const l = s.metadata;
      if (typeof Blob < "u" && t instanceof Blob ? (i = new FormData(), i.append("cacheControl", s.cacheControl), l && i.append("metadata", n.encodeMetadata(l)), i.append("", t)) : typeof FormData < "u" && t instanceof FormData ? (i = t, i.has("cacheControl") || i.append("cacheControl", s.cacheControl), l && !i.has("metadata") && i.append("metadata", n.encodeMetadata(l))) : (i = t, o["cache-control"] = `max-age=${s.cacheControl}`, o["content-type"] = s.contentType, l && (o["x-metadata"] = n.toBase64(n.encodeMetadata(l))), (typeof ReadableStream < "u" && i instanceof ReadableStream || i && typeof i == "object" && "pipe" in i && typeof i.pipe == "function") && !s.duplex && (s.duplex = "half")), r?.headers) for (const [g, b] of Object.entries(r.headers)) o = er(o, g, b);
      const u = n._removeEmptyFolders(e), f = n._getFinalPath(u), d = await (a == "PUT" ? dn : Oe)(n.fetch, `${n.url}/object/${f}`, i, H({ headers: o }, s?.duplex ? { duplex: s.duplex } : {}));
      return {
        path: u,
        id: d.Id,
        fullPath: d.Key
      };
    });
  }
  /**
  * Uploads a file to an existing bucket.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
  * @param fileBody The body of the file to be stored in the bucket.
  * @param fileOptions Optional file upload options including cacheControl, contentType, upsert, and metadata.
  * @returns Promise with response containing file path, id, and fullPath or error
  *
  * @example Upload file
  * ```js
  * const avatarFile = event.target.files[0]
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .upload('public/avatar1.png', avatarFile, {
  *     cacheControl: '3600',
  *     upsert: false
  *   })
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "path": "public/avatar1.png",
  *     "fullPath": "avatars/public/avatar1.png"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @example Upload file using `ArrayBuffer` from base64 file data
  * ```js
  * import { decode } from 'base64-arraybuffer'
  *
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .upload('public/avatar1.png', decode('base64FileData'), {
  *     contentType: 'image/png'
  *   })
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: none
  *   - `objects` table permissions: only `insert` when you are uploading new files and `select`, `insert` and `update` when you are upserting files
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  * - For React Native, using either `Blob`, `File` or `FormData` does not work as intended. Upload file using `ArrayBuffer` from base64 file data instead, see example below.
  */
  async upload(a, e, t) {
    return this.uploadOrUpdate("POST", a, e, t);
  }
  /**
  * Upload a file with a token generated from `createSignedUploadUrl`.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
  * @param token The token generated from `createSignedUploadUrl`
  * @param fileBody The body of the file to be stored in the bucket.
  * @param fileOptions HTTP headers (cacheControl, contentType, etc.).
  * **Note:** The `upsert` option has no effect here. To enable upsert behavior,
  * pass `{ upsert: true }` when calling `createSignedUploadUrl()` instead.
  * @returns Promise with response containing file path and fullPath or error
  *
  * @example Upload to a signed URL
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .uploadToSignedUrl('folder/cat.jpg', 'token-from-createSignedUploadUrl', file)
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "path": "folder/cat.jpg",
  *     "fullPath": "avatars/folder/cat.jpg"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: none
  *   - `objects` table permissions: none
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async uploadToSignedUrl(a, e, t, r) {
    var n = this;
    const i = n._removeEmptyFolders(a), s = n._getFinalPath(i), o = new URL(n.url + `/object/upload/sign/${s}`);
    return o.searchParams.set("token", e), n.handleOperation(async () => {
      let l;
      const u = H(H({}, ji), r);
      let f = H(H({}, n.headers), { "x-upsert": String(u.upsert) });
      const d = u.metadata;
      if (typeof Blob < "u" && t instanceof Blob ? (l = new FormData(), l.append("cacheControl", u.cacheControl), d && l.append("metadata", n.encodeMetadata(d)), l.append("", t)) : typeof FormData < "u" && t instanceof FormData ? (l = t, l.has("cacheControl") || l.append("cacheControl", u.cacheControl), d && !l.has("metadata") && l.append("metadata", n.encodeMetadata(d))) : (l = t, f["cache-control"] = `max-age=${u.cacheControl}`, f["content-type"] = u.contentType, d && (f["x-metadata"] = n.toBase64(n.encodeMetadata(d))), (typeof ReadableStream < "u" && l instanceof ReadableStream || l && typeof l == "object" && "pipe" in l && typeof l.pipe == "function") && !u.duplex && (u.duplex = "half")), r?.headers) for (const [g, b] of Object.entries(r.headers)) f = er(f, g, b);
      return {
        path: i,
        fullPath: (await dn(n.fetch, o.toString(), l, H({ headers: f }, u?.duplex ? { duplex: u.duplex } : {}))).Key
      };
    });
  }
  /**
  * Creates a signed upload URL.
  * Signed upload URLs can be used to upload files to the bucket without further authentication.
  * They are valid for 2 hours.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param path The file path, including the current file name. For example `folder/image.png`.
  * @param options.upsert If set to true, allows the file to be overwritten if it already exists.
  * @returns Promise with response containing signed upload URL, token, and path or error
  *
  * @example Create Signed Upload URL
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .createSignedUploadUrl('folder/cat.jpg')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "signedUrl": "https://example.supabase.co/storage/v1/object/upload/sign/avatars/folder/cat.jpg?token=<TOKEN>",
  *     "path": "folder/cat.jpg",
  *     "token": "<TOKEN>"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: none
  *   - `objects` table permissions: `insert`
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async createSignedUploadUrl(a, e) {
    var t = this;
    return t.handleOperation(async () => {
      let r = t._getFinalPath(a);
      const n = H({}, t.headers);
      e?.upsert && (n["x-upsert"] = "true");
      const i = await Oe(t.fetch, `${t.url}/object/upload/sign/${r}`, {}, { headers: n }), s = new URL(t.url + i.url), o = s.searchParams.get("token");
      if (!o) throw new lr("No token returned by API");
      return {
        signedUrl: s.toString(),
        path: a,
        token: o
      };
    });
  }
  /**
  * Replaces an existing file at the specified path with a new one.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to update.
  * @param fileBody The body of the file to be stored in the bucket.
  * @param fileOptions Optional file upload options including cacheControl, contentType, and metadata.
  * **Note:** The `upsert` option has no effect here. `update()` always replaces the
  * file at the given path, so the `x-upsert` header is not sent. To control upsert
  * behavior, use `upload()` instead.
  * @returns Promise with response containing file path, id, and fullPath or error
  *
  * @example Update file
  * ```js
  * const avatarFile = event.target.files[0]
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .update('public/avatar1.png', avatarFile, {
  *     cacheControl: '3600'
  *   })
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "path": "public/avatar1.png",
  *     "fullPath": "avatars/public/avatar1.png"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @example Update file using `ArrayBuffer` from base64 file data
  * ```js
  * import {decode} from 'base64-arraybuffer'
  *
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .update('public/avatar1.png', decode('base64FileData'), {
  *     contentType: 'image/png'
  *   })
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: none
  *   - `objects` table permissions: `update` and `select`
  * - `update()` always replaces the file at the given path regardless of the `upsert` option.
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  * - For React Native, using either `Blob`, `File` or `FormData` does not work as intended. Update file using `ArrayBuffer` from base64 file data instead, see example below.
  */
  async update(a, e, t) {
    return this.uploadOrUpdate("PUT", a, e, t);
  }
  /**
  * Moves an existing file to a new path in the same bucket.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
  * @param toPath The new file path, including the new file name. For example `folder/image-new.png`.
  * @param options The destination options.
  * @returns Promise with response containing success message or error
  *
  * @example Move file
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .move('public/avatar1.png', 'private/avatar2.png')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "message": "Successfully moved"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: none
  *   - `objects` table permissions: `update` and `select`
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async move(a, e, t) {
    var r = this;
    return r.handleOperation(async () => await Oe(r.fetch, `${r.url}/object/move`, {
      bucketId: r.bucketId,
      sourceKey: a,
      destinationKey: e,
      destinationBucket: t?.destinationBucket
    }, { headers: r.headers }));
  }
  /**
  * Copies an existing file to a new path in the same bucket.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
  * @param toPath The new file path, including the new file name. For example `folder/image-copy.png`.
  * @param options The destination options.
  * @returns Promise with response containing copied file path or error
  *
  * @example Copy file
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .copy('public/avatar1.png', 'private/avatar2.png')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "path": "avatars/private/avatar2.png"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: none
  *   - `objects` table permissions: `insert` and `select`
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async copy(a, e, t) {
    var r = this;
    return r.handleOperation(async () => ({ path: (await Oe(r.fetch, `${r.url}/object/copy`, {
      bucketId: r.bucketId,
      sourceKey: a,
      destinationKey: e,
      destinationBucket: t?.destinationBucket
    }, { headers: r.headers })).Key }));
  }
  /**
  * Creates a signed URL. Use a signed URL to share a file for a fixed amount of time.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param path The file path, including the current file name. For example `folder/image.png`.
  * @param expiresIn The number of seconds until the signed URL expires. For example, `60` for a URL which is valid for one minute.
  * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
  * @param options.transform Transform the asset before serving it to the client.
  * @param options.cacheNonce Append a cache nonce parameter to the URL to invalidate the cache.
  * @returns Promise with response containing signed URL or error
  *
  * @example Create Signed URL
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .createSignedUrl('folder/avatar1.png', 60)
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "signedUrl": "https://example.supabase.co/storage/v1/object/sign/avatars/folder/avatar1.png?token=<TOKEN>"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @example Create a signed URL for an asset with transformations
  * ```js
  * const { data } = await supabase
  *   .storage
  *   .from('avatars')
  *   .createSignedUrl('folder/avatar1.png', 60, {
  *     transform: {
  *       width: 100,
  *       height: 100,
  *     }
  *   })
  * ```
  *
  * @example Create a signed URL which triggers the download of the asset
  * ```js
  * const { data } = await supabase
  *   .storage
  *   .from('avatars')
  *   .createSignedUrl('folder/avatar1.png', 60, {
  *     download: true,
  *   })
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: none
  *   - `objects` table permissions: `select`
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async createSignedUrl(a, e, t) {
    var r = this;
    return r.handleOperation(async () => {
      let n = r._getFinalPath(a);
      const i = typeof t?.transform == "object" && t.transform !== null && Object.keys(t.transform).length > 0;
      let s = await Oe(r.fetch, `${r.url}/object/sign/${n}`, H({ expiresIn: e }, i ? { transform: t.transform } : {}), { headers: r.headers });
      const o = new URLSearchParams();
      t?.download && o.set("download", t.download === !0 ? "" : t.download), t?.cacheNonce != null && o.set("cacheNonce", String(t.cacheNonce));
      const l = o.toString();
      return { signedUrl: encodeURI(`${r.url}${s.signedURL}${l ? `&${l}` : ""}`) };
    });
  }
  /**
  * Creates multiple signed URLs. Use a signed URL to share a file for a fixed amount of time.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param paths The file paths to be downloaded, including the current file names. For example `['folder/image.png', 'folder2/image2.png']`.
  * @param expiresIn The number of seconds until the signed URLs expire. For example, `60` for URLs which are valid for one minute.
  * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
  * @param options.cacheNonce Append a cache nonce parameter to the URL to invalidate the cache.
  * @returns Promise with response containing array of objects with signedUrl, path, and error or error
  *
  * @example Create Signed URLs
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .createSignedUrls(['folder/avatar1.png', 'folder/avatar2.png'], 60)
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": [
  *     {
  *       "error": null,
  *       "path": "folder/avatar1.png",
  *       "signedURL": "/object/sign/avatars/folder/avatar1.png?token=<TOKEN>",
  *       "signedUrl": "https://example.supabase.co/storage/v1/object/sign/avatars/folder/avatar1.png?token=<TOKEN>"
  *     },
  *     {
  *       "error": null,
  *       "path": "folder/avatar2.png",
  *       "signedURL": "/object/sign/avatars/folder/avatar2.png?token=<TOKEN>",
  *       "signedUrl": "https://example.supabase.co/storage/v1/object/sign/avatars/folder/avatar2.png?token=<TOKEN>"
  *     }
  *   ],
  *   "error": null
  * }
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: none
  *   - `objects` table permissions: `select`
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async createSignedUrls(a, e, t) {
    var r = this;
    return r.handleOperation(async () => {
      const n = await Oe(r.fetch, `${r.url}/object/sign/${r.bucketId}`, {
        expiresIn: e,
        paths: a
      }, { headers: r.headers }), i = new URLSearchParams();
      t?.download && i.set("download", t.download === !0 ? "" : t.download), t?.cacheNonce != null && i.set("cacheNonce", String(t.cacheNonce));
      const s = i.toString();
      return n.map((o) => H(H({}, o), {}, { signedUrl: o.signedURL ? encodeURI(`${r.url}${o.signedURL}${s ? `&${s}` : ""}`) : null }));
    });
  }
  /**
  * Downloads a file from a private bucket. For public buckets, make a request to the URL returned from `getPublicUrl` instead.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param path The full path and file name of the file to be downloaded. For example `folder/image.png`.
  * @param options.transform Transform the asset before serving it to the client.
  * @param options.cacheNonce Append a cache nonce parameter to the URL to invalidate the cache.
  * @param parameters Additional fetch parameters like signal for cancellation. Supports standard fetch options including cache control.
  * @returns BlobDownloadBuilder instance for downloading the file
  *
  * @example Download file
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .download('folder/avatar1.png')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": <BLOB>,
  *   "error": null
  * }
  * ```
  *
  * @example Download file with transformations
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .download('folder/avatar1.png', {
  *     transform: {
  *       width: 100,
  *       height: 100,
  *       quality: 80
  *     }
  *   })
  * ```
  *
  * @example Download with cache control (useful in Edge Functions)
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .download('folder/avatar1.png', {}, { cache: 'no-store' })
  * ```
  *
  * @example Download with abort signal
  * ```js
  * const controller = new AbortController()
  * setTimeout(() => controller.abort(), 5000)
  *
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .download('folder/avatar1.png', {}, { signal: controller.signal })
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: none
  *   - `objects` table permissions: `select`
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  download(a, e, t) {
    const r = typeof e?.transform == "object" && e.transform !== null && Object.keys(e.transform).length > 0 ? "render/image/authenticated" : "object", n = new URLSearchParams();
    e?.transform && this.applyTransformOptsToQuery(n, e.transform), e?.cacheNonce != null && n.set("cacheNonce", String(e.cacheNonce));
    const i = n.toString(), s = this._getFinalPath(a), o = () => ma(this.fetch, `${this.url}/${r}/${s}${i ? `?${i}` : ""}`, {
      headers: this.headers,
      noResolveJson: !0
    }, t);
    return new bc(o, this.shouldThrowOnError);
  }
  /**
  * Retrieves the details of an existing file.
  *
  * Returns detailed file metadata including size, content type, and timestamps.
  * Note: The API returns `last_modified` field, not `updated_at`.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param path The file path, including the file name. For example `folder/image.png`.
  * @returns Promise with response containing file metadata or error
  *
  * @example Get file info
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .info('folder/avatar1.png')
  *
  * if (data) {
  *   console.log('Last modified:', data.lastModified)
  *   console.log('Size:', data.size)
  * }
  * ```
  */
  async info(a) {
    var e = this;
    const t = e._getFinalPath(a);
    return e.handleOperation(async () => hn(await ma(e.fetch, `${e.url}/object/info/${t}`, { headers: e.headers })));
  }
  /**
  * Checks the existence of a file.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param path The file path, including the file name. For example `folder/image.png`.
  * @returns Promise with response containing boolean indicating file existence or error
  *
  * @example Check file existence
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .exists('folder/avatar1.png')
  * ```
  */
  async exists(a) {
    var e = this;
    const t = e._getFinalPath(a);
    try {
      return await pc(e.fetch, `${e.url}/object/${t}`, { headers: e.headers }), {
        data: !0,
        error: null
      };
    } catch (n) {
      if (e.shouldThrowOnError) throw n;
      if (ur(n)) {
        var r;
        const i = n instanceof cn ? n.status : n instanceof zs ? (r = n.originalError) === null || r === void 0 ? void 0 : r.status : void 0;
        if (i !== void 0 && [400, 404].includes(i)) return {
          data: !1,
          error: n
        };
      }
      throw n;
    }
  }
  /**
  * A simple convenience function to get the URL for an asset in a public bucket. If you do not want to use this function, you can construct the public URL by concatenating the bucket URL with the path to the asset.
  * This function does not verify if the bucket is public. If a public URL is created for a bucket which is not public, you will not be able to download the asset.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param path The path and name of the file to generate the public URL for. For example `folder/image.png`.
  * @param options.download Triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
  * @param options.transform Transform the asset before serving it to the client.
  * @param options.cacheNonce Append a cache nonce parameter to the URL to invalidate the cache.
  * @returns Object with public URL
  *
  * @example Returns the URL for an asset in a public bucket
  * ```js
  * const { data } = supabase
  *   .storage
  *   .from('public-bucket')
  *   .getPublicUrl('folder/avatar1.png')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "publicUrl": "https://example.supabase.co/storage/v1/object/public/public-bucket/folder/avatar1.png"
  *   }
  * }
  * ```
  *
  * @example Returns the URL for an asset in a public bucket with transformations
  * ```js
  * const { data } = supabase
  *   .storage
  *   .from('public-bucket')
  *   .getPublicUrl('folder/avatar1.png', {
  *     transform: {
  *       width: 100,
  *       height: 100,
  *     }
  *   })
  * ```
  *
  * @example Returns the URL which triggers the download of an asset in a public bucket
  * ```js
  * const { data } = supabase
  *   .storage
  *   .from('public-bucket')
  *   .getPublicUrl('folder/avatar1.png', {
  *     download: true,
  *   })
  * ```
  *
  * @remarks
  * - The bucket needs to be set to public, either via [updateBucket()](/docs/reference/javascript/storage-updatebucket) or by going to Storage on [supabase.com/dashboard](https://supabase.com/dashboard), clicking the overflow menu on a bucket and choosing "Make public"
  * - RLS policy permissions required:
  *   - `buckets` table permissions: none
  *   - `objects` table permissions: none
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  getPublicUrl(a, e) {
    const t = this._getFinalPath(a), r = new URLSearchParams();
    e?.download && r.set("download", e.download === !0 ? "" : e.download), e?.transform && this.applyTransformOptsToQuery(r, e.transform), e?.cacheNonce != null && r.set("cacheNonce", String(e.cacheNonce));
    const n = r.toString(), i = typeof e?.transform == "object" && e.transform !== null && Object.keys(e.transform).length > 0 ? "render/image" : "object";
    return { data: { publicUrl: encodeURI(`${this.url}/${i}/public/${t}`) + (n ? `?${n}` : "") } };
  }
  /**
  * Deletes files within the same bucket
  *
  * Returns an array of FileObject entries for the deleted files. Note that deprecated
  * fields like `bucket_id` may or may not be present in the response - do not rely on them.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param paths An array of files to delete, including the path and file name. For example [`'folder/image.png'`].
  * @returns Promise with response containing array of deleted file objects or error
  *
  * @example Delete file
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .remove(['folder/avatar1.png'])
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": [],
  *   "error": null
  * }
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: none
  *   - `objects` table permissions: `delete` and `select`
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async remove(a) {
    var e = this;
    return e.handleOperation(async () => await An(e.fetch, `${e.url}/object/${e.bucketId}`, { prefixes: a }, { headers: e.headers }));
  }
  /**
  * Get file metadata
  * @param id the file id to retrieve metadata
  */
  /**
  * Update file metadata
  * @param id the file id to update metadata
  * @param meta the new file metadata
  */
  /**
  * Lists all the files and folders within a path of the bucket.
  *
  * **Important:** For folder entries, fields like `id`, `updated_at`, `created_at`,
  * `last_accessed_at`, and `metadata` will be `null`. Only files have these fields populated.
  * Additionally, deprecated fields like `bucket_id`, `owner`, and `buckets` are NOT returned
  * by this method.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param path The folder path.
  * @param options Search options including limit (defaults to 100), offset, sortBy, and search
  * @param parameters Optional fetch parameters including signal for cancellation
  * @returns Promise with response containing array of files/folders or error
  *
  * @example List files in a bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .list('folder', {
  *     limit: 100,
  *     offset: 0,
  *     sortBy: { column: 'name', order: 'asc' },
  *   })
  *
  * // Handle files vs folders
  * data?.forEach(item => {
  *   if (item.id !== null) {
  *     // It's a file
  *     console.log('File:', item.name, 'Size:', item.metadata?.size)
  *   } else {
  *     // It's a folder
  *     console.log('Folder:', item.name)
  *   }
  * })
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "avatar1.png",
  *       "id": "e668cf7f-821b-4a2f-9dce-7dfa5dd1cfd2",
  *       "updated_at": "2024-05-22T23:06:05.580Z",
  *       "created_at": "2024-05-22T23:04:34.443Z",
  *       "last_accessed_at": "2024-05-22T23:04:34.443Z",
  *       "metadata": {
  *         "eTag": "\"c5e8c553235d9af30ef4f6e280790b92\"",
  *         "size": 32175,
  *         "mimetype": "image/png",
  *         "cacheControl": "max-age=3600",
  *         "lastModified": "2024-05-22T23:06:05.574Z",
  *         "contentLength": 32175,
  *         "httpStatusCode": 200
  *       }
  *     }
  *   ],
  *   "error": null
  * }
  * ```
  *
  * @example Search files in a bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .list('folder', {
  *     limit: 100,
  *     offset: 0,
  *     sortBy: { column: 'name', order: 'asc' },
  *     search: 'jon'
  *   })
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: none
  *   - `objects` table permissions: `select`
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async list(a, e, t) {
    var r = this;
    return r.handleOperation(async () => {
      const n = H(H(H({}, wc), e), {}, { prefix: a || "" });
      return await Oe(r.fetch, `${r.url}/object/list/${r.bucketId}`, n, { headers: r.headers }, t);
    });
  }
  /**
  * Lists all the files and folders within a bucket using the V2 API with pagination support.
  *
  * **Important:** Folder entries in the `folders` array only contain `name` and optionally `key` —
  * they have no `id`, timestamps, or `metadata` fields. Full file metadata is only available
  * on entries in the `objects` array.
  *
  * @experimental this method signature might change in the future
  *
  * @category Storage
  * @subcategory File Buckets
  * @param options Search options including prefix, cursor for pagination, limit, with_delimiter
  * @param parameters Optional fetch parameters including signal for cancellation
  * @returns Promise with response containing folders/objects arrays with pagination info or error
  *
  * @example List files with pagination
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .listV2({
  *     prefix: 'folder/',
  *     limit: 100,
  *   })
  *
  * // Handle pagination
  * if (data?.hasNext) {
  *   const nextPage = await supabase
  *     .storage
  *     .from('avatars')
  *     .listV2({
  *       prefix: 'folder/',
  *       cursor: data.nextCursor,
  *     })
  * }
  *
  * // Handle files vs folders
  * data?.objects.forEach(file => {
  *   if (file.id !== null) {
  *     console.log('File:', file.name, 'Size:', file.metadata?.size)
  *   }
  * })
  * data?.folders.forEach(folder => {
  *   console.log('Folder:', folder.name)
  * })
  * ```
  */
  async listV2(a, e) {
    var t = this;
    return t.handleOperation(async () => {
      const r = H({}, a);
      return await Oe(t.fetch, `${t.url}/object/list-v2/${t.bucketId}`, r, { headers: t.headers }, e);
    });
  }
  encodeMetadata(a) {
    return JSON.stringify(a);
  }
  toBase64(a) {
    return typeof Buffer < "u" ? Buffer.from(a).toString("base64") : btoa(a);
  }
  _getFinalPath(a) {
    return `${this.bucketId}/${a.replace(/^\/+/, "")}`;
  }
  _removeEmptyFolders(a) {
    return a.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
  }
  /** Modifies the `query`, appending values the from `transform` */
  applyTransformOptsToQuery(a, e) {
    return e.width && a.set("width", e.width.toString()), e.height && a.set("height", e.height.toString()), e.resize && a.set("resize", e.resize), e.format && a.set("format", e.format), e.quality && a.set("quality", e.quality.toString()), a;
  }
};
const _c = "2.105.4", _a = { "X-Client-Info": `storage-js/${_c}` };
var kc = class extends Kt {
  constructor(a, e = {}, t, r) {
    const n = new URL(a);
    r?.useNewHostname && /supabase\.(co|in|red)$/.test(n.hostname) && !n.hostname.includes("storage.supabase.") && (n.hostname = n.hostname.replace("supabase.", "storage.supabase."));
    const i = n.href.replace(/\/$/, ""), s = H(H({}, _a), e);
    super(i, s, t, "storage");
  }
  /**
  * Retrieves the details of all Storage buckets within an existing project.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param options Query parameters for listing buckets
  * @param options.limit Maximum number of buckets to return
  * @param options.offset Number of buckets to skip
  * @param options.sortColumn Column to sort by ('id', 'name', 'created_at', 'updated_at')
  * @param options.sortOrder Sort order ('asc' or 'desc')
  * @param options.search Search term to filter bucket names
  * @returns Promise with response containing array of buckets or error
  *
  * @example List buckets
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .listBuckets()
  * ```
  *
  * @example List buckets with options
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .listBuckets({
  *     limit: 10,
  *     offset: 0,
  *     sortColumn: 'created_at',
  *     sortOrder: 'desc',
  *     search: 'prod'
  *   })
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: `select`
  *   - `objects` table permissions: none
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async listBuckets(a) {
    var e = this;
    return e.handleOperation(async () => {
      const t = e.listBucketOptionsToQueryString(a);
      return await ma(e.fetch, `${e.url}/bucket${t}`, { headers: e.headers });
    });
  }
  /**
  * Retrieves the details of an existing Storage bucket.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param id The unique identifier of the bucket you would like to retrieve.
  * @returns Promise with response containing bucket details or error
  *
  * @example Get bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .getBucket('avatars')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "id": "avatars",
  *     "name": "avatars",
  *     "owner": "",
  *     "public": false,
  *     "file_size_limit": 1024,
  *     "allowed_mime_types": [
  *       "image/png"
  *     ],
  *     "created_at": "2024-05-22T22:26:05.100Z",
  *     "updated_at": "2024-05-22T22:26:05.100Z"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: `select`
  *   - `objects` table permissions: none
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async getBucket(a) {
    var e = this;
    return e.handleOperation(async () => await ma(e.fetch, `${e.url}/bucket/${a}`, { headers: e.headers }));
  }
  /**
  * Creates a new Storage bucket
  *
  * @category Storage
  * @subcategory File Buckets
  * @param id A unique identifier for the bucket you are creating.
  * @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations. By default, buckets are private.
  * @param options.fileSizeLimit specifies the max file size in bytes that can be uploaded to this bucket.
  * The global file size limit takes precedence over this value.
  * The default value is null, which doesn't set a per bucket file size limit.
  * @param options.allowedMimeTypes specifies the allowed mime types that this bucket can accept during upload.
  * The default value is null, which allows files with all mime types to be uploaded.
  * Each mime type specified can be a wildcard, e.g. image/*, or a specific mime type, e.g. image/png.
  * @param options.type (private-beta) specifies the bucket type. see `BucketType` for more details.
  *   - default bucket type is `STANDARD`
  * @returns Promise with response containing newly created bucket name or error
  *
  * @example Create bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .createBucket('avatars', {
  *     public: false,
  *     allowedMimeTypes: ['image/png'],
  *     fileSizeLimit: 1024
  *   })
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "name": "avatars"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: `insert`
  *   - `objects` table permissions: none
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async createBucket(a, e = { public: !1 }) {
    var t = this;
    return t.handleOperation(async () => await Oe(t.fetch, `${t.url}/bucket`, {
      id: a,
      name: a,
      type: e.type,
      public: e.public,
      file_size_limit: e.fileSizeLimit,
      allowed_mime_types: e.allowedMimeTypes
    }, { headers: t.headers }));
  }
  /**
  * Updates a Storage bucket
  *
  * @category Storage
  * @subcategory File Buckets
  * @param id A unique identifier for the bucket you are updating.
  * @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations.
  * @param options.fileSizeLimit specifies the max file size in bytes that can be uploaded to this bucket.
  * The global file size limit takes precedence over this value.
  * The default value is null, which doesn't set a per bucket file size limit.
  * @param options.allowedMimeTypes specifies the allowed mime types that this bucket can accept during upload.
  * The default value is null, which allows files with all mime types to be uploaded.
  * Each mime type specified can be a wildcard, e.g. image/*, or a specific mime type, e.g. image/png.
  * @returns Promise with response containing success message or error
  *
  * @example Update bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .updateBucket('avatars', {
  *     public: false,
  *     allowedMimeTypes: ['image/png'],
  *     fileSizeLimit: 1024
  *   })
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "message": "Successfully updated"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: `select` and `update`
  *   - `objects` table permissions: none
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async updateBucket(a, e) {
    var t = this;
    return t.handleOperation(async () => await dn(t.fetch, `${t.url}/bucket/${a}`, {
      id: a,
      name: a,
      public: e.public,
      file_size_limit: e.fileSizeLimit,
      allowed_mime_types: e.allowedMimeTypes
    }, { headers: t.headers }));
  }
  /**
  * Removes all objects inside a single bucket.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param id The unique identifier of the bucket you would like to empty.
  * @returns Promise with success message or error
  *
  * @example Empty bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .emptyBucket('avatars')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "message": "Successfully emptied"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: `select`
  *   - `objects` table permissions: `select` and `delete`
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async emptyBucket(a) {
    var e = this;
    return e.handleOperation(async () => await Oe(e.fetch, `${e.url}/bucket/${a}/empty`, {}, { headers: e.headers }));
  }
  /**
  * Deletes an existing bucket. A bucket can't be deleted with existing objects inside it.
  * You must first `empty()` the bucket.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param id The unique identifier of the bucket you would like to delete.
  * @returns Promise with success message or error
  *
  * @example Delete bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .deleteBucket('avatars')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "message": "Successfully deleted"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: `select` and `delete`
  *   - `objects` table permissions: none
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async deleteBucket(a) {
    var e = this;
    return e.handleOperation(async () => await An(e.fetch, `${e.url}/bucket/${a}`, {}, { headers: e.headers }));
  }
  listBucketOptionsToQueryString(a) {
    const e = {};
    return a && ("limit" in a && (e.limit = String(a.limit)), "offset" in a && (e.offset = String(a.offset)), a.search && (e.search = a.search), a.sortColumn && (e.sortColumn = a.sortColumn), a.sortOrder && (e.sortOrder = a.sortOrder)), Object.keys(e).length > 0 ? "?" + new URLSearchParams(e).toString() : "";
  }
}, Ec = class extends Kt {
  /**
  * @alpha
  *
  * Creates a new StorageAnalyticsClient instance
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Analytics Buckets
  * @param url - The base URL for the storage API
  * @param headers - HTTP headers to include in requests
  * @param fetch - Optional custom fetch implementation
  *
  * @example Using supabase-js (recommended)
  * ```typescript
  * import { createClient } from '@supabase/supabase-js'
  *
  * const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key')
  * const { data, error } = await supabase.storage.analytics.listBuckets()
  * ```
  *
  * @example Standalone import for bundle-sensitive environments
  * ```typescript
  * import { StorageAnalyticsClient } from '@supabase/storage-js'
  *
  * const client = new StorageAnalyticsClient(url, headers)
  * ```
  */
  constructor(a, e = {}, t) {
    const r = a.replace(/\/$/, ""), n = H(H({}, _a), e);
    super(r, n, t, "storage");
  }
  /**
  * @alpha
  *
  * Creates a new analytics bucket using Iceberg tables
  * Analytics buckets are optimized for analytical queries and data processing
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Analytics Buckets
  * @param name A unique name for the bucket you are creating
  * @returns Promise with response containing newly created analytics bucket or error
  *
  * @example Create analytics bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .analytics
  *   .createBucket('analytics-data')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "name": "analytics-data",
  *     "type": "ANALYTICS",
  *     "format": "iceberg",
  *     "created_at": "2024-05-22T22:26:05.100Z",
  *     "updated_at": "2024-05-22T22:26:05.100Z"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @remarks
  * - Creates a new analytics bucket using Iceberg tables
  * - Analytics buckets are optimized for analytical queries and data processing
  */
  async createBucket(a) {
    var e = this;
    return e.handleOperation(async () => await Oe(e.fetch, `${e.url}/bucket`, { name: a }, { headers: e.headers }));
  }
  /**
  * @alpha
  *
  * Retrieves the details of all Analytics Storage buckets within an existing project
  * Only returns buckets of type 'ANALYTICS'
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Analytics Buckets
  * @param options Query parameters for listing buckets
  * @param options.limit Maximum number of buckets to return
  * @param options.offset Number of buckets to skip
  * @param options.sortColumn Column to sort by ('name', 'created_at', 'updated_at')
  * @param options.sortOrder Sort order ('asc' or 'desc')
  * @param options.search Search term to filter bucket names
  * @returns Promise with response containing array of analytics buckets or error
  *
  * @example List analytics buckets
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .analytics
  *   .listBuckets({
  *     limit: 10,
  *     offset: 0,
  *     sortColumn: 'created_at',
  *     sortOrder: 'desc'
  *   })
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "analytics-data",
  *       "type": "ANALYTICS",
  *       "format": "iceberg",
  *       "created_at": "2024-05-22T22:26:05.100Z",
  *       "updated_at": "2024-05-22T22:26:05.100Z"
  *     }
  *   ],
  *   "error": null
  * }
  * ```
  *
  * @remarks
  * - Retrieves the details of all Analytics Storage buckets within an existing project
  * - Only returns buckets of type 'ANALYTICS'
  */
  async listBuckets(a) {
    var e = this;
    return e.handleOperation(async () => {
      const t = new URLSearchParams();
      a?.limit !== void 0 && t.set("limit", a.limit.toString()), a?.offset !== void 0 && t.set("offset", a.offset.toString()), a?.sortColumn && t.set("sortColumn", a.sortColumn), a?.sortOrder && t.set("sortOrder", a.sortOrder), a?.search && t.set("search", a.search);
      const r = t.toString(), n = r ? `${e.url}/bucket?${r}` : `${e.url}/bucket`;
      return await ma(e.fetch, n, { headers: e.headers });
    });
  }
  /**
  * @alpha
  *
  * Deletes an existing analytics bucket
  * A bucket can't be deleted with existing objects inside it
  * You must first empty the bucket before deletion
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Analytics Buckets
  * @param bucketName The unique identifier of the bucket you would like to delete
  * @returns Promise with response containing success message or error
  *
  * @example Delete analytics bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .analytics
  *   .deleteBucket('analytics-data')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "message": "Successfully deleted"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @remarks
  * - Deletes an analytics bucket
  */
  async deleteBucket(a) {
    var e = this;
    return e.handleOperation(async () => await An(e.fetch, `${e.url}/bucket/${a}`, {}, { headers: e.headers }));
  }
  /**
  * @alpha
  *
  * Get an Iceberg REST Catalog client configured for a specific analytics bucket
  * Use this to perform advanced table and namespace operations within the bucket
  * The returned client provides full access to the Apache Iceberg REST Catalog API
  * with the Supabase `{ data, error }` pattern for consistent error handling on all operations.
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Analytics Buckets
  * @param bucketName - The name of the analytics bucket (warehouse) to connect to
  * @returns The wrapped Iceberg catalog client
  * @throws {StorageError} If the bucket name is invalid
  *
  * @example Get catalog and create table
  * ```js
  * // First, create an analytics bucket
  * const { data: bucket, error: bucketError } = await supabase
  *   .storage
  *   .analytics
  *   .createBucket('analytics-data')
  *
  * // Get the Iceberg catalog for that bucket
  * const catalog = supabase.storage.analytics.from('analytics-data')
  *
  * // Create a namespace
  * const { error: nsError } = await catalog.createNamespace({ namespace: ['default'] })
  *
  * // Create a table with schema
  * const { data: tableMetadata, error: tableError } = await catalog.createTable(
  *   { namespace: ['default'] },
  *   {
  *     name: 'events',
  *     schema: {
  *       type: 'struct',
  *       fields: [
  *         { id: 1, name: 'id', type: 'long', required: true },
  *         { id: 2, name: 'timestamp', type: 'timestamp', required: true },
  *         { id: 3, name: 'user_id', type: 'string', required: false }
  *       ],
  *       'schema-id': 0,
  *       'identifier-field-ids': [1]
  *     },
  *     'partition-spec': {
  *       'spec-id': 0,
  *       fields: []
  *     },
  *     'write-order': {
  *       'order-id': 0,
  *       fields: []
  *     },
  *     properties: {
  *       'write.format.default': 'parquet'
  *     }
  *   }
  * )
  * ```
  *
  * @example List tables in namespace
  * ```js
  * const catalog = supabase.storage.analytics.from('analytics-data')
  *
  * // List all tables in the default namespace
  * const { data: tables, error: listError } = await catalog.listTables({ namespace: ['default'] })
  * if (listError) {
  *   if (listError.isNotFound()) {
  *     console.log('Namespace not found')
  *   }
  *   return
  * }
  * console.log(tables) // [{ namespace: ['default'], name: 'events' }]
  * ```
  *
  * @example Working with namespaces
  * ```js
  * const catalog = supabase.storage.analytics.from('analytics-data')
  *
  * // List all namespaces
  * const { data: namespaces } = await catalog.listNamespaces()
  *
  * // Create namespace with properties
  * await catalog.createNamespace(
  *   { namespace: ['production'] },
  *   { properties: { owner: 'data-team', env: 'prod' } }
  * )
  * ```
  *
  * @example Cleanup operations
  * ```js
  * const catalog = supabase.storage.analytics.from('analytics-data')
  *
  * // Drop table with purge option (removes all data)
  * const { error: dropError } = await catalog.dropTable(
  *   { namespace: ['default'], name: 'events' },
  *   { purge: true }
  * )
  *
  * if (dropError?.isNotFound()) {
  *   console.log('Table does not exist')
  * }
  *
  * // Drop namespace (must be empty)
  * await catalog.dropNamespace({ namespace: ['default'] })
  * ```
  *
  * @remarks
  * This method provides a bridge between Supabase's bucket management and the standard
  * Apache Iceberg REST Catalog API. The bucket name maps to the Iceberg warehouse parameter.
  * All authentication and configuration is handled automatically using your Supabase credentials.
  *
  * **Error Handling**: Invalid bucket names throw immediately. All catalog
  * operations return `{ data, error }` where errors are `IcebergError` instances from iceberg-js.
  * Use helper methods like `error.isNotFound()` or check `error.status` for specific error handling.
  * Use `.throwOnError()` on the analytics client if you prefer exceptions for catalog operations.
  *
  * **Cleanup Operations**: When using `dropTable`, the `purge: true` option permanently
  * deletes all table data. Without it, the table is marked as deleted but data remains.
  *
  * **Library Dependency**: The returned catalog wraps `IcebergRestCatalog` from iceberg-js.
  * For complete API documentation and advanced usage, refer to the
  * [iceberg-js documentation](https://supabase.github.io/iceberg-js/).
  */
  from(a) {
    var e = this;
    if (!dc(a)) throw new lr("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.");
    const t = new ic({
      baseUrl: this.url,
      catalogName: a,
      auth: {
        type: "custom",
        getHeaders: async () => e.headers
      },
      fetch: this.fetch
    }), r = this.shouldThrowOnError;
    return new Proxy(t, { get(n, i) {
      const s = n[i];
      return typeof s != "function" ? s : async (...o) => {
        try {
          return {
            data: await s.apply(n, o),
            error: null
          };
        } catch (l) {
          if (r) throw l;
          return {
            data: null,
            error: l
          };
        }
      };
    } });
  }
}, Ac = class extends Kt {
  /** Creates a new VectorIndexApi instance */
  constructor(a, e = {}, t) {
    const r = a.replace(/\/$/, ""), n = H(H({}, _a), {}, { "Content-Type": "application/json" }, e);
    super(r, n, t, "vectors");
  }
  /** Creates a new vector index within a bucket */
  async createIndex(a) {
    var e = this;
    return e.handleOperation(async () => await Ee.post(e.fetch, `${e.url}/CreateIndex`, a, { headers: e.headers }) || {});
  }
  /** Retrieves metadata for a specific vector index */
  async getIndex(a, e) {
    var t = this;
    return t.handleOperation(async () => await Ee.post(t.fetch, `${t.url}/GetIndex`, {
      vectorBucketName: a,
      indexName: e
    }, { headers: t.headers }));
  }
  /** Lists vector indexes within a bucket with optional filtering and pagination */
  async listIndexes(a) {
    var e = this;
    return e.handleOperation(async () => await Ee.post(e.fetch, `${e.url}/ListIndexes`, a, { headers: e.headers }));
  }
  /** Deletes a vector index and all its data */
  async deleteIndex(a, e) {
    var t = this;
    return t.handleOperation(async () => await Ee.post(t.fetch, `${t.url}/DeleteIndex`, {
      vectorBucketName: a,
      indexName: e
    }, { headers: t.headers }) || {});
  }
}, Sc = class extends Kt {
  /** Creates a new VectorDataApi instance */
  constructor(a, e = {}, t) {
    const r = a.replace(/\/$/, ""), n = H(H({}, _a), {}, { "Content-Type": "application/json" }, e);
    super(r, n, t, "vectors");
  }
  /** Inserts or updates vectors in batch (1-500 per request) */
  async putVectors(a) {
    var e = this;
    if (a.vectors.length < 1 || a.vectors.length > 500) throw new Error("Vector batch size must be between 1 and 500 items");
    return e.handleOperation(async () => await Ee.post(e.fetch, `${e.url}/PutVectors`, a, { headers: e.headers }) || {});
  }
  /** Retrieves vectors by their keys in batch */
  async getVectors(a) {
    var e = this;
    return e.handleOperation(async () => await Ee.post(e.fetch, `${e.url}/GetVectors`, a, { headers: e.headers }));
  }
  /** Lists vectors in an index with pagination */
  async listVectors(a) {
    var e = this;
    if (a.segmentCount !== void 0) {
      if (a.segmentCount < 1 || a.segmentCount > 16) throw new Error("segmentCount must be between 1 and 16");
      if (a.segmentIndex !== void 0 && (a.segmentIndex < 0 || a.segmentIndex >= a.segmentCount))
        throw new Error(`segmentIndex must be between 0 and ${a.segmentCount - 1}`);
    }
    return e.handleOperation(async () => await Ee.post(e.fetch, `${e.url}/ListVectors`, a, { headers: e.headers }));
  }
  /** Queries for similar vectors using approximate nearest neighbor search */
  async queryVectors(a) {
    var e = this;
    return e.handleOperation(async () => await Ee.post(e.fetch, `${e.url}/QueryVectors`, a, { headers: e.headers }));
  }
  /** Deletes vectors by their keys in batch (1-500 per request) */
  async deleteVectors(a) {
    var e = this;
    if (a.keys.length < 1 || a.keys.length > 500) throw new Error("Keys batch size must be between 1 and 500 items");
    return e.handleOperation(async () => await Ee.post(e.fetch, `${e.url}/DeleteVectors`, a, { headers: e.headers }) || {});
  }
}, Tc = class extends Kt {
  /** Creates a new VectorBucketApi instance */
  constructor(a, e = {}, t) {
    const r = a.replace(/\/$/, ""), n = H(H({}, _a), {}, { "Content-Type": "application/json" }, e);
    super(r, n, t, "vectors");
  }
  /** Creates a new vector bucket */
  async createBucket(a) {
    var e = this;
    return e.handleOperation(async () => await Ee.post(e.fetch, `${e.url}/CreateVectorBucket`, { vectorBucketName: a }, { headers: e.headers }) || {});
  }
  /** Retrieves metadata for a specific vector bucket */
  async getBucket(a) {
    var e = this;
    return e.handleOperation(async () => await Ee.post(e.fetch, `${e.url}/GetVectorBucket`, { vectorBucketName: a }, { headers: e.headers }));
  }
  /** Lists vector buckets with optional filtering and pagination */
  async listBuckets(a = {}) {
    var e = this;
    return e.handleOperation(async () => await Ee.post(e.fetch, `${e.url}/ListVectorBuckets`, a, { headers: e.headers }));
  }
  /** Deletes a vector bucket (must be empty first) */
  async deleteBucket(a) {
    var e = this;
    return e.handleOperation(async () => await Ee.post(e.fetch, `${e.url}/DeleteVectorBucket`, { vectorBucketName: a }, { headers: e.headers }) || {});
  }
}, Nc = class extends Tc {
  /**
  * @alpha
  *
  * Creates a StorageVectorsClient that can manage buckets, indexes, and vectors.
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @param url - Base URL of the Storage Vectors REST API.
  * @param options.headers - Optional headers (for example `Authorization`) applied to every request.
  * @param options.fetch - Optional custom `fetch` implementation for non-browser runtimes.
  *
  * @example Using supabase-js (recommended)
  * ```typescript
  * import { createClient } from '@supabase/supabase-js'
  *
  * const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key')
  * const bucket = supabase.storage.vectors.from('embeddings-prod')
  * ```
  *
  * @example Standalone import for bundle-sensitive environments
  * ```typescript
  * import { StorageVectorsClient } from '@supabase/storage-js'
  *
  * const client = new StorageVectorsClient(url, options)
  * ```
  */
  constructor(a, e = {}) {
    super(a, e.headers || {}, e.fetch);
  }
  /**
  *
  * @alpha
  *
  * Access operations for a specific vector bucket
  * Returns a scoped client for index and vector operations within the bucket
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @param vectorBucketName - Name of the vector bucket
  * @returns Bucket-scoped client with index and vector operations
  *
  * @example Accessing a vector bucket
  * ```typescript
  * const bucket = supabase.storage.vectors.from('embeddings-prod')
  * ```
  */
  from(a) {
    return new Rc(this.url, this.headers, a, this.fetch);
  }
  /**
  *
  * @alpha
  *
  * Creates a new vector bucket
  * Vector buckets are containers for vector indexes and their data
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @param vectorBucketName - Unique name for the vector bucket
  * @returns Promise with empty response on success or error
  *
  * @example Creating a vector bucket
  * ```typescript
  * const { data, error } = await supabase
  *   .storage
  *   .vectors
  *   .createBucket('embeddings-prod')
  * ```
  */
  async createBucket(a) {
    var e = () => super.createBucket, t = this;
    return e().call(t, a);
  }
  /**
  *
  * @alpha
  *
  * Retrieves metadata for a specific vector bucket
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @param vectorBucketName - Name of the vector bucket
  * @returns Promise with bucket metadata or error
  *
  * @example Get bucket metadata
  * ```typescript
  * const { data, error } = await supabase
  *   .storage
  *   .vectors
  *   .getBucket('embeddings-prod')
  *
  * console.log('Bucket created:', data?.vectorBucket.creationTime)
  * ```
  */
  async getBucket(a) {
    var e = () => super.getBucket, t = this;
    return e().call(t, a);
  }
  /**
  *
  * @alpha
  *
  * Lists all vector buckets with optional filtering and pagination
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @param options - Optional filters (prefix, maxResults, nextToken)
  * @returns Promise with list of buckets or error
  *
  * @example List vector buckets
  * ```typescript
  * const { data, error } = await supabase
  *   .storage
  *   .vectors
  *   .listBuckets({ prefix: 'embeddings-' })
  *
  * data?.vectorBuckets.forEach(bucket => {
  *   console.log(bucket.vectorBucketName)
  * })
  * ```
  */
  async listBuckets(a = {}) {
    var e = () => super.listBuckets, t = this;
    return e().call(t, a);
  }
  /**
  *
  * @alpha
  *
  * Deletes a vector bucket (bucket must be empty)
  * All indexes must be deleted before deleting the bucket
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @param vectorBucketName - Name of the vector bucket to delete
  * @returns Promise with empty response on success or error
  *
  * @example Delete a vector bucket
  * ```typescript
  * const { data, error } = await supabase
  *   .storage
  *   .vectors
  *   .deleteBucket('embeddings-old')
  * ```
  */
  async deleteBucket(a) {
    var e = () => super.deleteBucket, t = this;
    return e().call(t, a);
  }
}, Rc = class extends Ac {
  /**
  * @alpha
  *
  * Creates a helper that automatically scopes all index operations to the provided bucket.
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @example Creating a vector bucket scope
  * ```typescript
  * const bucket = supabase.storage.vectors.from('embeddings-prod')
  * ```
  */
  constructor(a, e, t, r) {
    super(a, e, r), this.vectorBucketName = t;
  }
  /**
  *
  * @alpha
  *
  * Creates a new vector index in this bucket
  * Convenience method that automatically includes the bucket name
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @param options - Index configuration (vectorBucketName is automatically set)
  * @returns Promise with empty response on success or error
  *
  * @example Creating a vector index
  * ```typescript
  * const bucket = supabase.storage.vectors.from('embeddings-prod')
  * await bucket.createIndex({
  *   indexName: 'documents-openai',
  *   dataType: 'float32',
  *   dimension: 1536,
  *   distanceMetric: 'cosine',
  *   metadataConfiguration: {
  *     nonFilterableMetadataKeys: ['raw_text']
  *   }
  * })
  * ```
  */
  async createIndex(a) {
    var e = () => super.createIndex, t = this;
    return e().call(t, H(H({}, a), {}, { vectorBucketName: t.vectorBucketName }));
  }
  /**
  *
  * @alpha
  *
  * Lists indexes in this bucket
  * Convenience method that automatically includes the bucket name
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @param options - Listing options (vectorBucketName is automatically set)
  * @returns Promise with response containing indexes array and pagination token or error
  *
  * @example List indexes
  * ```typescript
  * const bucket = supabase.storage.vectors.from('embeddings-prod')
  * const { data } = await bucket.listIndexes({ prefix: 'documents-' })
  * ```
  */
  async listIndexes(a = {}) {
    var e = () => super.listIndexes, t = this;
    return e().call(t, H(H({}, a), {}, { vectorBucketName: t.vectorBucketName }));
  }
  /**
  *
  * @alpha
  *
  * Retrieves metadata for a specific index in this bucket
  * Convenience method that automatically includes the bucket name
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @param indexName - Name of the index to retrieve
  * @returns Promise with index metadata or error
  *
  * @example Get index metadata
  * ```typescript
  * const bucket = supabase.storage.vectors.from('embeddings-prod')
  * const { data } = await bucket.getIndex('documents-openai')
  * console.log('Dimension:', data?.index.dimension)
  * ```
  */
  async getIndex(a) {
    var e = () => super.getIndex, t = this;
    return e().call(t, t.vectorBucketName, a);
  }
  /**
  *
  * @alpha
  *
  * Deletes an index from this bucket
  * Convenience method that automatically includes the bucket name
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @param indexName - Name of the index to delete
  * @returns Promise with empty response on success or error
  *
  * @example Delete an index
  * ```typescript
  * const bucket = supabase.storage.vectors.from('embeddings-prod')
  * await bucket.deleteIndex('old-index')
  * ```
  */
  async deleteIndex(a) {
    var e = () => super.deleteIndex, t = this;
    return e().call(t, t.vectorBucketName, a);
  }
  /**
  *
  * @alpha
  *
  * Access operations for a specific index within this bucket
  * Returns a scoped client for vector data operations
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @param indexName - Name of the index
  * @returns Index-scoped client with vector data operations
  *
  * @example Accessing an index
  * ```typescript
  * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
  *
  * // Insert vectors
  * await index.putVectors({
  *   vectors: [
  *     { key: 'doc-1', data: { float32: [...] }, metadata: { title: 'Intro' } }
  *   ]
  * })
  *
  * // Query similar vectors
  * const { data } = await index.queryVectors({
  *   queryVector: { float32: [...] },
  *   topK: 5
  * })
  * ```
  */
  index(a) {
    return new Cc(this.url, this.headers, this.vectorBucketName, a, this.fetch);
  }
}, Cc = class extends Sc {
  /**
  *
  * @alpha
  *
  * Creates a helper that automatically scopes all vector operations to the provided bucket/index names.
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @example Creating a vector index scope
  * ```typescript
  * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
  * ```
  */
  constructor(a, e, t, r, n) {
    super(a, e, n), this.vectorBucketName = t, this.indexName = r;
  }
  /**
  *
  * @alpha
  *
  * Inserts or updates vectors in this index
  * Convenience method that automatically includes bucket and index names
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @param options - Vector insertion options (bucket and index names automatically set)
  * @returns Promise with empty response on success or error
  *
  * @example Insert vectors into an index
  * ```typescript
  * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
  * await index.putVectors({
  *   vectors: [
  *     {
  *       key: 'doc-1',
  *       data: { float32: [0.1, 0.2, ...] },
  *       metadata: { title: 'Introduction', page: 1 }
  *     }
  *   ]
  * })
  * ```
  */
  async putVectors(a) {
    var e = () => super.putVectors, t = this;
    return e().call(t, H(H({}, a), {}, {
      vectorBucketName: t.vectorBucketName,
      indexName: t.indexName
    }));
  }
  /**
  *
  * @alpha
  *
  * Retrieves vectors by keys from this index
  * Convenience method that automatically includes bucket and index names
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @param options - Vector retrieval options (bucket and index names automatically set)
  * @returns Promise with response containing vectors array or error
  *
  * @example Get vectors by keys
  * ```typescript
  * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
  * const { data } = await index.getVectors({
  *   keys: ['doc-1', 'doc-2'],
  *   returnMetadata: true
  * })
  * ```
  */
  async getVectors(a) {
    var e = () => super.getVectors, t = this;
    return e().call(t, H(H({}, a), {}, {
      vectorBucketName: t.vectorBucketName,
      indexName: t.indexName
    }));
  }
  /**
  *
  * @alpha
  *
  * Lists vectors in this index with pagination
  * Convenience method that automatically includes bucket and index names
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @param options - Listing options (bucket and index names automatically set)
  * @returns Promise with response containing vectors array and pagination token or error
  *
  * @example List vectors with pagination
  * ```typescript
  * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
  * const { data } = await index.listVectors({
  *   maxResults: 500,
  *   returnMetadata: true
  * })
  * ```
  */
  async listVectors(a = {}) {
    var e = () => super.listVectors, t = this;
    return e().call(t, H(H({}, a), {}, {
      vectorBucketName: t.vectorBucketName,
      indexName: t.indexName
    }));
  }
  /**
  *
  * @alpha
  *
  * Queries for similar vectors in this index
  * Convenience method that automatically includes bucket and index names
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @param options - Query options (bucket and index names automatically set)
  * @returns Promise with response containing matches array of similar vectors ordered by distance or error
  *
  * @example Query similar vectors
  * ```typescript
  * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
  * const { data } = await index.queryVectors({
  *   queryVector: { float32: [0.1, 0.2, ...] },
  *   topK: 5,
  *   filter: { category: 'technical' },
  *   returnDistance: true,
  *   returnMetadata: true
  * })
  * ```
  */
  async queryVectors(a) {
    var e = () => super.queryVectors, t = this;
    return e().call(t, H(H({}, a), {}, {
      vectorBucketName: t.vectorBucketName,
      indexName: t.indexName
    }));
  }
  /**
  *
  * @alpha
  *
  * Deletes vectors by keys from this index
  * Convenience method that automatically includes bucket and index names
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @param options - Deletion options (bucket and index names automatically set)
  * @returns Promise with empty response on success or error
  *
  * @example Delete vectors by keys
  * ```typescript
  * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
  * await index.deleteVectors({
  *   keys: ['doc-1', 'doc-2', 'doc-3']
  * })
  * ```
  */
  async deleteVectors(a) {
    var e = () => super.deleteVectors, t = this;
    return e().call(t, H(H({}, a), {}, {
      vectorBucketName: t.vectorBucketName,
      indexName: t.indexName
    }));
  }
}, xc = class extends kc {
  /**
  * Creates a client for Storage buckets, files, analytics, and vectors.
  *
  * @category Storage
  * @subcategory File Buckets
  *
  * @example Using supabase-js (recommended)
  * ```ts
  * import { createClient } from '@supabase/supabase-js'
  *
  * const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key')
  * const avatars = supabase.storage.from('avatars')
  * ```
  *
  * @example Standalone import for bundle-sensitive environments
  * ```ts
  * import { StorageClient } from '@supabase/storage-js'
  *
  * const storage = new StorageClient('https://xyzcompany.supabase.co/storage/v1', {
  *   apikey: 'your-publishable-key',
  * })
  * const avatars = storage.from('avatars')
  * ```
  */
  constructor(a, e = {}, t, r) {
    super(a, e, t, r);
  }
  /**
  * Perform file operation in a bucket.
  *
  * @category Storage
  * @subcategory File Buckets
  *
  * @param id The bucket id to operate on.
  *
  * @example Accessing a bucket
  * ```typescript
  * const avatars = supabase.storage.from('avatars')
  * ```
  */
  from(a) {
    return new vc(this.url, this.headers, a, this.fetch);
  }
  /**
  *
  * @alpha
  *
  * Access vector storage operations.
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  *
  * @returns A StorageVectorsClient instance configured with the current storage settings.
  */
  get vectors() {
    return new Nc(this.url + "/vector", {
      headers: this.headers,
      fetch: this.fetch
    });
  }
  /**
  *
  * @alpha
  *
  * Access analytics storage operations using Iceberg tables.
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Analytics Buckets
  *
  * @returns A StorageAnalyticsClient instance configured with the current storage settings.
  */
  get analytics() {
    return new Ec(this.url + "/iceberg", this.headers, this.fetch);
  }
};
const $s = "2.105.4", Lt = 30 * 1e3, fn = 3, Wr = fn * Lt, Oc = "http://localhost:9999", Dc = "supabase.auth.token", jc = { "X-Client-Info": `gotrue-js/${$s}` }, gn = "X-Supabase-Api-Version", Bs = {
  "2024-01-01": {
    timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
    name: "2024-01-01"
  }
}, Ic = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i, Pc = 600 * 1e3;
class pa extends Error {
  constructor(e, t, r) {
    super(e), this.__isAuthError = !0, this.name = "AuthError", this.status = t, this.code = r;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      code: this.code
    };
  }
}
function P(a) {
  return typeof a == "object" && a !== null && "__isAuthError" in a;
}
class Lc extends pa {
  constructor(e, t, r) {
    super(e, t, r), this.name = "AuthApiError", this.status = t, this.code = r;
  }
}
function zc(a) {
  return P(a) && a.name === "AuthApiError";
}
class Ie extends pa {
  constructor(e, t) {
    super(e), this.name = "AuthUnknownError", this.originalError = t;
  }
}
class Ge extends pa {
  constructor(e, t, r, n) {
    super(e, r, n), this.name = t, this.status = r;
  }
}
class se extends Ge {
  constructor() {
    super("Auth session missing!", "AuthSessionMissingError", 400, void 0);
  }
}
function Ha(a) {
  return P(a) && a.name === "AuthSessionMissingError";
}
class Ct extends Ge {
  constructor() {
    super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, void 0);
  }
}
class qa extends Ge {
  constructor(e) {
    super(e, "AuthInvalidCredentialsError", 400, void 0);
  }
}
class Wa extends Ge {
  constructor(e, t = null) {
    super(e, "AuthImplicitGrantRedirectError", 500, void 0), this.details = null, this.details = t;
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), { details: this.details });
  }
}
function Fc(a) {
  return P(a) && a.name === "AuthImplicitGrantRedirectError";
}
class Ii extends Ge {
  constructor(e, t = null) {
    super(e, "AuthPKCEGrantCodeExchangeError", 500, void 0), this.details = null, this.details = t;
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), { details: this.details });
  }
}
class Uc extends Ge {
  constructor() {
    super("PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.", "AuthPKCECodeVerifierMissingError", 400, "pkce_code_verifier_not_found");
  }
}
class mn extends Ge {
  constructor(e, t) {
    super(e, "AuthRetryableFetchError", t, void 0);
  }
}
function Gr(a) {
  return P(a) && a.name === "AuthRetryableFetchError";
}
class Pi extends Ge {
  constructor(e, t, r) {
    super(e, "AuthWeakPasswordError", t, "weak_password"), this.reasons = r;
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), { reasons: this.reasons });
  }
}
class pn extends Ge {
  constructor(e) {
    super(e, "AuthInvalidJwtError", 400, "invalid_jwt");
  }
}
const tr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""), Li = ` 	
\r=`.split(""), $c = (() => {
  const a = new Array(128);
  for (let e = 0; e < a.length; e += 1)
    a[e] = -1;
  for (let e = 0; e < Li.length; e += 1)
    a[Li[e].charCodeAt(0)] = -2;
  for (let e = 0; e < tr.length; e += 1)
    a[tr[e].charCodeAt(0)] = e;
  return a;
})();
function zi(a, e, t) {
  if (a !== null)
    for (e.queue = e.queue << 8 | a, e.queuedBits += 8; e.queuedBits >= 6; ) {
      const r = e.queue >> e.queuedBits - 6 & 63;
      t(tr[r]), e.queuedBits -= 6;
    }
  else if (e.queuedBits > 0)
    for (e.queue = e.queue << 6 - e.queuedBits, e.queuedBits = 6; e.queuedBits >= 6; ) {
      const r = e.queue >> e.queuedBits - 6 & 63;
      t(tr[r]), e.queuedBits -= 6;
    }
}
function Ms(a, e, t) {
  const r = $c[a];
  if (r > -1)
    for (e.queue = e.queue << 6 | r, e.queuedBits += 6; e.queuedBits >= 8; )
      t(e.queue >> e.queuedBits - 8 & 255), e.queuedBits -= 8;
  else {
    if (r === -2)
      return;
    throw new Error(`Invalid Base64-URL character "${String.fromCharCode(a)}"`);
  }
}
function Fi(a) {
  const e = [], t = (s) => {
    e.push(String.fromCodePoint(s));
  }, r = {
    utf8seq: 0,
    codepoint: 0
  }, n = { queue: 0, queuedBits: 0 }, i = (s) => {
    Hc(s, r, t);
  };
  for (let s = 0; s < a.length; s += 1)
    Ms(a.charCodeAt(s), n, i);
  return e.join("");
}
function Bc(a, e) {
  if (a <= 127) {
    e(a);
    return;
  } else if (a <= 2047) {
    e(192 | a >> 6), e(128 | a & 63);
    return;
  } else if (a <= 65535) {
    e(224 | a >> 12), e(128 | a >> 6 & 63), e(128 | a & 63);
    return;
  } else if (a <= 1114111) {
    e(240 | a >> 18), e(128 | a >> 12 & 63), e(128 | a >> 6 & 63), e(128 | a & 63);
    return;
  }
  throw new Error(`Unrecognized Unicode codepoint: ${a.toString(16)}`);
}
function Mc(a, e) {
  for (let t = 0; t < a.length; t += 1) {
    let r = a.charCodeAt(t);
    if (r > 55295 && r <= 56319) {
      const n = (r - 55296) * 1024 & 65535;
      r = (a.charCodeAt(t + 1) - 56320 & 65535 | n) + 65536, t += 1;
    }
    Bc(r, e);
  }
}
function Hc(a, e, t) {
  if (e.utf8seq === 0) {
    if (a <= 127) {
      t(a);
      return;
    }
    for (let r = 1; r < 6; r += 1)
      if ((a >> 7 - r & 1) === 0) {
        e.utf8seq = r;
        break;
      }
    if (e.utf8seq === 2)
      e.codepoint = a & 31;
    else if (e.utf8seq === 3)
      e.codepoint = a & 15;
    else if (e.utf8seq === 4)
      e.codepoint = a & 7;
    else
      throw new Error("Invalid UTF-8 sequence");
    e.utf8seq -= 1;
  } else if (e.utf8seq > 0) {
    if (a <= 127)
      throw new Error("Invalid UTF-8 sequence");
    e.codepoint = e.codepoint << 6 | a & 63, e.utf8seq -= 1, e.utf8seq === 0 && t(e.codepoint);
  }
}
function Mt(a) {
  const e = [], t = { queue: 0, queuedBits: 0 }, r = (n) => {
    e.push(n);
  };
  for (let n = 0; n < a.length; n += 1)
    Ms(a.charCodeAt(n), t, r);
  return new Uint8Array(e);
}
function qc(a) {
  const e = [];
  return Mc(a, (t) => e.push(t)), new Uint8Array(e);
}
function dt(a) {
  const e = [], t = { queue: 0, queuedBits: 0 }, r = (n) => {
    e.push(n);
  };
  return a.forEach((n) => zi(n, t, r)), zi(null, t, r), e.join("");
}
function Wc(a) {
  return Math.round(Date.now() / 1e3) + a;
}
function Gc() {
  return /* @__PURE__ */ Symbol("auth-callback");
}
const ce = () => typeof window < "u" && typeof document < "u", lt = {
  tested: !1,
  writable: !1
}, Hs = () => {
  if (!ce())
    return !1;
  try {
    if (typeof globalThis.localStorage != "object")
      return !1;
  } catch {
    return !1;
  }
  if (lt.tested)
    return lt.writable;
  const a = `lswt-${Math.random()}${Math.random()}`;
  try {
    globalThis.localStorage.setItem(a, a), globalThis.localStorage.removeItem(a), lt.tested = !0, lt.writable = !0;
  } catch {
    lt.tested = !0, lt.writable = !1;
  }
  return lt.writable;
};
function Kc(a) {
  const e = {}, t = new URL(a);
  if (t.hash && t.hash[0] === "#")
    try {
      new URLSearchParams(t.hash.substring(1)).forEach((n, i) => {
        e[i] = n;
      });
    } catch {
    }
  return t.searchParams.forEach((r, n) => {
    e[n] = r;
  }), e;
}
const qs = (a) => a ? (...e) => a(...e) : (...e) => fetch(...e), Vc = (a) => typeof a == "object" && a !== null && "status" in a && "ok" in a && "json" in a && typeof a.json == "function", zt = async (a, e, t) => {
  await a.setItem(e, JSON.stringify(t));
}, ut = async (a, e) => {
  const t = await a.getItem(e);
  if (!t)
    return null;
  try {
    return JSON.parse(t);
  } catch {
    return null;
  }
}, le = async (a, e) => {
  await a.removeItem(e);
};
class cr {
  constructor() {
    this.promise = new cr.promiseConstructor((e, t) => {
      this.resolve = e, this.reject = t;
    });
  }
}
cr.promiseConstructor = Promise;
function Ga(a) {
  const e = a.split(".");
  if (e.length !== 3)
    throw new pn("Invalid JWT structure");
  for (let r = 0; r < e.length; r++)
    if (!Ic.test(e[r]))
      throw new pn("JWT not in base64url format");
  return {
    // using base64url lib
    header: JSON.parse(Fi(e[0])),
    payload: JSON.parse(Fi(e[1])),
    signature: Mt(e[2]),
    raw: {
      header: e[0],
      payload: e[1]
    }
  };
}
async function Jc(a) {
  return await new Promise((e) => {
    setTimeout(() => e(null), a);
  });
}
function Yc(a, e) {
  return new Promise((r, n) => {
    (async () => {
      for (let i = 0; i < 1 / 0; i++)
        try {
          const s = await a(i);
          if (!e(i, null, s)) {
            r(s);
            return;
          }
        } catch (s) {
          if (!e(i, s)) {
            n(s);
            return;
          }
        }
    })();
  });
}
function Xc(a) {
  return ("0" + a.toString(16)).substr(-2);
}
function Zc() {
  const e = new Uint32Array(56);
  if (typeof crypto > "u") {
    const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~", r = t.length;
    let n = "";
    for (let i = 0; i < 56; i++)
      n += t.charAt(Math.floor(Math.random() * r));
    return n;
  }
  return crypto.getRandomValues(e), Array.from(e, Xc).join("");
}
async function Qc(a) {
  const t = new TextEncoder().encode(a), r = await crypto.subtle.digest("SHA-256", t), n = new Uint8Array(r);
  return Array.from(n).map((i) => String.fromCharCode(i)).join("");
}
async function eh(a) {
  if (!(typeof crypto < "u" && typeof crypto.subtle < "u" && typeof TextEncoder < "u"))
    return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."), a;
  const t = await Qc(a);
  return btoa(t).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function xt(a, e, t = !1) {
  const r = Zc();
  let n = r;
  t && (n += "/recovery"), await zt(a, `${e}-code-verifier`, n);
  const i = await eh(r);
  return [i, r === i ? "plain" : "s256"];
}
const th = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function ah(a) {
  const e = a.headers.get(gn);
  if (!e || !e.match(th))
    return null;
  try {
    return /* @__PURE__ */ new Date(`${e}T00:00:00.0Z`);
  } catch {
    return null;
  }
}
function rh(a) {
  if (!a)
    throw new Error("Missing exp claim");
  const e = Math.floor(Date.now() / 1e3);
  if (a <= e)
    throw new Error("JWT has expired");
}
function nh(a) {
  switch (a) {
    case "RS256":
      return {
        name: "RSASSA-PKCS1-v1_5",
        hash: { name: "SHA-256" }
      };
    case "ES256":
      return {
        name: "ECDSA",
        namedCurve: "P-256",
        hash: { name: "SHA-256" }
      };
    default:
      throw new Error("Invalid alg claim");
  }
}
const ih = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function He(a) {
  if (!ih.test(a))
    throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not");
}
function xe(a) {
  if (!a.passkey)
    throw new Error("@supabase/auth-js: the passkey API is experimental and disabled by default. Enable it by passing `auth: { experimental: { passkey: true } }` to createClient (or to the GoTrueClient constructor).");
}
function Kr() {
  const a = {};
  return new Proxy(a, {
    get: (e, t) => {
      if (t === "__isUserNotAvailableProxy")
        return !0;
      if (typeof t == "symbol") {
        const r = t.toString();
        if (r === "Symbol(Symbol.toPrimitive)" || r === "Symbol(Symbol.toStringTag)" || r === "Symbol(util.inspect.custom)")
          return;
      }
      throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${t}" property of the session object is not supported. Please use getUser() instead.`);
    },
    set: (e, t) => {
      throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`);
    },
    deleteProperty: (e, t) => {
      throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`);
    }
  });
}
function sh(a, e) {
  return new Proxy(a, {
    get: (t, r, n) => {
      if (r === "__isInsecureUserWarningProxy")
        return !0;
      if (typeof r == "symbol") {
        const i = r.toString();
        if (i === "Symbol(Symbol.toPrimitive)" || i === "Symbol(Symbol.toStringTag)" || i === "Symbol(util.inspect.custom)" || i === "Symbol(nodejs.util.inspect.custom)")
          return Reflect.get(t, r, n);
      }
      return !e.value && typeof r == "string" && (console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."), e.value = !0), Reflect.get(t, r, n);
    }
  });
}
function Ui(a) {
  return JSON.parse(JSON.stringify(a));
}
const ht = (a) => {
  if (typeof a == "object" && a !== null) {
    const e = a;
    if (typeof e.msg == "string")
      return e.msg;
    if (typeof e.message == "string")
      return e.message;
    if (typeof e.error_description == "string")
      return e.error_description;
    if (typeof e.error == "string")
      return e.error;
  }
  return JSON.stringify(a);
}, oh = [502, 503, 504, 520, 521, 522, 523, 524, 530];
async function $i(a) {
  var e;
  if (!Vc(a))
    throw new mn(ht(a), 0);
  if (oh.includes(a.status))
    throw new mn(ht(a), a.status);
  let t;
  try {
    t = await a.json();
  } catch (i) {
    throw new Ie(ht(i), i);
  }
  let r;
  const n = ah(a);
  if (n && n.getTime() >= Bs["2024-01-01"].timestamp && typeof t == "object" && t && typeof t.code == "string" ? r = t.code : typeof t == "object" && t && typeof t.error_code == "string" && (r = t.error_code), r) {
    if (r === "weak_password")
      throw new Pi(ht(t), a.status, ((e = t.weak_password) === null || e === void 0 ? void 0 : e.reasons) || []);
    if (r === "session_not_found")
      throw new se();
  } else if (typeof t == "object" && t && typeof t.weak_password == "object" && t.weak_password && Array.isArray(t.weak_password.reasons) && t.weak_password.reasons.length && t.weak_password.reasons.reduce((i, s) => i && typeof s == "string", !0))
    throw new Pi(ht(t), a.status, t.weak_password.reasons);
  throw new Lc(ht(t), a.status || 500, r);
}
const lh = (a, e, t, r) => {
  const n = { method: a, headers: e?.headers || {} };
  return a === "GET" ? n : (n.headers = Object.assign({ "Content-Type": "application/json;charset=UTF-8" }, e?.headers), n.body = JSON.stringify(r), Object.assign(Object.assign({}, n), t));
};
async function F(a, e, t, r) {
  var n;
  const i = Object.assign({}, r?.headers);
  i[gn] || (i[gn] = Bs["2024-01-01"].name), r?.jwt && (i.Authorization = `Bearer ${r.jwt}`);
  const s = (n = r?.query) !== null && n !== void 0 ? n : {};
  r?.redirectTo && (s.redirect_to = r.redirectTo);
  const o = Object.keys(s).length ? "?" + new URLSearchParams(s).toString() : "", l = await uh(a, e, t + o, {
    headers: i,
    noResolveJson: r?.noResolveJson
  }, {}, r?.body);
  return r?.xform ? r?.xform(l) : { data: Object.assign({}, l), error: null };
}
async function uh(a, e, t, r, n, i) {
  const s = lh(e, r, n, i);
  let o;
  try {
    o = await a(t, Object.assign({}, s));
  } catch (l) {
    throw console.error(l), new mn(ht(l), 0);
  }
  if (o.ok || await $i(o), r?.noResolveJson)
    return o;
  try {
    return await o.json();
  } catch (l) {
    await $i(l);
  }
}
function Ne(a) {
  var e;
  let t = null;
  dh(a) && (t = Object.assign({}, a), a.expires_at || (t.expires_at = Wc(a.expires_in)));
  const r = (e = a.user) !== null && e !== void 0 ? e : a;
  return { data: { session: t, user: r }, error: null };
}
function Bi(a) {
  const e = Ne(a);
  return !e.error && a.weak_password && typeof a.weak_password == "object" && Array.isArray(a.weak_password.reasons) && a.weak_password.reasons.length && a.weak_password.message && typeof a.weak_password.message == "string" && a.weak_password.reasons.reduce((t, r) => t && typeof r == "string", !0) && (e.data.weak_password = a.weak_password), e;
}
function et(a) {
  var e;
  return { data: { user: (e = a.user) !== null && e !== void 0 ? e : a }, error: null };
}
function ch(a) {
  return { data: a, error: null };
}
function hh(a) {
  const { action_link: e, email_otp: t, hashed_token: r, redirect_to: n, verification_type: i } = a, s = or(a, ["action_link", "email_otp", "hashed_token", "redirect_to", "verification_type"]), o = {
    action_link: e,
    email_otp: t,
    hashed_token: r,
    redirect_to: n,
    verification_type: i
  }, l = Object.assign({}, s);
  return {
    data: {
      properties: o,
      user: l
    },
    error: null
  };
}
function Mi(a) {
  return a;
}
function dh(a) {
  return !!a.access_token && !!a.refresh_token && !!a.expires_in;
}
const Vr = ["global", "local", "others"];
class fh {
  /**
   * Creates an admin API client that can be used to manage users and OAuth clients.
   *
   * @example Using supabase-js (recommended)
   * ```ts
   * import { createClient } from '@supabase/supabase-js'
   *
   * const supabase = createClient('https://xyzcompany.supabase.co', 'your-secret-key')
   * const { data, error } = await supabase.auth.admin.listUsers()
   * ```
   *
   * @example Standalone import for bundle-sensitive environments
   * ```ts
   * import { GoTrueAdminApi } from '@supabase/auth-js'
   *
   * const admin = new GoTrueAdminApi({
   *   url: 'https://xyzcompany.supabase.co/auth/v1',
   *   headers: { Authorization: `Bearer ${process.env.SUPABASE_SECRET_KEY}` },
   * })
   * ```
   */
  constructor({ url: e = "", headers: t = {}, fetch: r, experimental: n }) {
    this.url = e, this.headers = t, this.fetch = qs(r), this.experimental = n ?? {}, this.mfa = {
      listFactors: this._listFactors.bind(this),
      deleteFactor: this._deleteFactor.bind(this)
    }, this.oauth = {
      listClients: this._listOAuthClients.bind(this),
      createClient: this._createOAuthClient.bind(this),
      getClient: this._getOAuthClient.bind(this),
      updateClient: this._updateOAuthClient.bind(this),
      deleteClient: this._deleteOAuthClient.bind(this),
      regenerateClientSecret: this._regenerateOAuthClientSecret.bind(this)
    }, this.customProviders = {
      listProviders: this._listCustomProviders.bind(this),
      createProvider: this._createCustomProvider.bind(this),
      getProvider: this._getCustomProvider.bind(this),
      updateProvider: this._updateCustomProvider.bind(this),
      deleteProvider: this._deleteCustomProvider.bind(this)
    }, this.passkey = {
      listPasskeys: this._adminListPasskeys.bind(this),
      deletePasskey: this._adminDeletePasskey.bind(this)
    };
  }
  /**
   * Removes a logged-in session.
   * @param jwt A valid, logged-in JWT.
   * @param scope The logout sope.
   *
   * @category Auth
   * @subcategory Auth Admin
   */
  async signOut(e, t = Vr[0]) {
    if (Vr.indexOf(t) < 0)
      throw new Error(`@supabase/auth-js: Parameter scope must be one of ${Vr.join(", ")}`);
    try {
      return await F(this.fetch, "POST", `${this.url}/logout?scope=${t}`, {
        headers: this.headers,
        jwt: e,
        noResolveJson: !0
      }), { data: null, error: null };
    } catch (r) {
      if (P(r))
        return { data: null, error: r };
      throw r;
    }
  }
  /**
   * Sends an invite link to an email address.
   * @param email The email address of the user.
   * @param options Additional options to be included when inviting.
   *
   * @category Auth
   * @subcategory Auth Admin
   *
   * @remarks
   * - Sends an invite link to the user's email address.
   * - The `inviteUserByEmail()` method is typically used by administrators to invite users to join the application.
   * - Note that PKCE is not supported when using `inviteUserByEmail`. This is because the browser initiating the invite is often different from the browser accepting the invite which makes it difficult to provide the security guarantees required of the PKCE flow.
   *
   * @example Invite a user
   * ```js
   * const { data, error } = await supabase.auth.admin.inviteUserByEmail('email@example.com')
   * ```
   *
   * @exampleResponse Invite a user
   * ```json
   * {
   *   "data": {
   *     "user": {
   *       "id": "11111111-1111-1111-1111-111111111111",
   *       "aud": "authenticated",
   *       "role": "authenticated",
   *       "email": "example@email.com",
   *       "invited_at": "2024-01-01T00:00:00Z",
   *       "phone": "",
   *       "confirmation_sent_at": "2024-01-01T00:00:00Z",
   *       "app_metadata": {
   *         "provider": "email",
   *         "providers": [
   *           "email"
   *         ]
   *       },
   *       "user_metadata": {},
   *       "identities": [
   *         {
   *           "identity_id": "22222222-2222-2222-2222-222222222222",
   *           "id": "11111111-1111-1111-1111-111111111111",
   *           "user_id": "11111111-1111-1111-1111-111111111111",
   *           "identity_data": {
   *             "email": "example@email.com",
   *             "email_verified": false,
   *             "phone_verified": false,
   *             "sub": "11111111-1111-1111-1111-111111111111"
   *           },
   *           "provider": "email",
   *           "last_sign_in_at": "2024-01-01T00:00:00Z",
   *           "created_at": "2024-01-01T00:00:00Z",
   *           "updated_at": "2024-01-01T00:00:00Z",
   *           "email": "example@email.com"
   *         }
   *       ],
   *       "created_at": "2024-01-01T00:00:00Z",
   *       "updated_at": "2024-01-01T00:00:00Z",
   *       "is_anonymous": false
   *     }
   *   },
   *   "error": null
   * }
   * ```
   */
  async inviteUserByEmail(e, t = {}) {
    try {
      return await F(this.fetch, "POST", `${this.url}/invite`, {
        body: { email: e, data: t.data },
        headers: this.headers,
        redirectTo: t.redirectTo,
        xform: et
      });
    } catch (r) {
      if (P(r))
        return { data: { user: null }, error: r };
      throw r;
    }
  }
  /**
   * Generates email links and OTPs to be sent via a custom email provider.
   * @param email The user's email.
   * @param options.password User password. For signup only.
   * @param options.data Optional user metadata. For signup only.
   * @param options.redirectTo The redirect url which should be appended to the generated link
   *
   * @category Auth
   * @subcategory Auth Admin
   *
   * @remarks
   * - The following types can be passed into `generateLink()`: `signup`, `magiclink`, `invite`, `recovery`, `email_change_current`, `email_change_new`, `phone_change`.
   * - `generateLink()` only generates the email link for `email_change_email` if the **Secure email change** is enabled in your project's [email auth provider settings](/dashboard/project/_/auth/providers).
   * - `generateLink()` handles the creation of the user for `signup`, `invite` and `magiclink`.
   *
   * @example Generate a signup link
   * ```js
   * const { data, error } = await supabase.auth.admin.generateLink({
   *   type: 'signup',
   *   email: 'email@example.com',
   *   password: 'secret'
   * })
   * ```
   *
   * @exampleResponse Generate a signup link
   * ```json
   * {
   *   "data": {
   *     "properties": {
   *       "action_link": "<LINK_TO_SEND_TO_USER>",
   *       "email_otp": "999999",
   *       "hashed_token": "<HASHED_TOKEN",
   *       "redirect_to": "<REDIRECT_URL>",
   *       "verification_type": "signup"
   *     },
   *     "user": {
   *       "id": "11111111-1111-1111-1111-111111111111",
   *       "aud": "authenticated",
   *       "role": "authenticated",
   *       "email": "email@example.com",
   *       "phone": "",
   *       "confirmation_sent_at": "2024-01-01T00:00:00Z",
   *       "app_metadata": {
   *         "provider": "email",
   *         "providers": [
   *           "email"
   *         ]
   *       },
   *       "user_metadata": {},
   *       "identities": [
   *         {
   *           "identity_id": "22222222-2222-2222-2222-222222222222",
   *           "id": "11111111-1111-1111-1111-111111111111",
   *           "user_id": "11111111-1111-1111-1111-111111111111",
   *           "identity_data": {
   *             "email": "email@example.com",
   *             "email_verified": false,
   *             "phone_verified": false,
   *             "sub": "11111111-1111-1111-1111-111111111111"
   *           },
   *           "provider": "email",
   *           "last_sign_in_at": "2024-01-01T00:00:00Z",
   *           "created_at": "2024-01-01T00:00:00Z",
   *           "updated_at": "2024-01-01T00:00:00Z",
   *           "email": "email@example.com"
   *         }
   *       ],
   *       "created_at": "2024-01-01T00:00:00Z",
   *       "updated_at": "2024-01-01T00:00:00Z",
   *       "is_anonymous": false
   *     }
   *   },
   *   "error": null
   * }
   * ```
   *
   * @example Generate an invite link
   * ```js
   * const { data, error } = await supabase.auth.admin.generateLink({
   *   type: 'invite',
   *   email: 'email@example.com'
   * })
   * ```
   *
   * @example Generate a magic link
   * ```js
   * const { data, error } = await supabase.auth.admin.generateLink({
   *   type: 'magiclink',
   *   email: 'email@example.com'
   * })
   * ```
   *
   * @example Generate a recovery link
   * ```js
   * const { data, error } = await supabase.auth.admin.generateLink({
   *   type: 'recovery',
   *   email: 'email@example.com'
   * })
   * ```
   *
   * @example Generate links to change current email address
   * ```js
   * // generate an email change link to be sent to the current email address
   * const { data, error } = await supabase.auth.admin.generateLink({
   *   type: 'email_change_current',
   *   email: 'current.email@example.com',
   *   newEmail: 'new.email@example.com'
   * })
   *
   * // generate an email change link to be sent to the new email address
   * const { data, error } = await supabase.auth.admin.generateLink({
   *   type: 'email_change_new',
   *   email: 'current.email@example.com',
   *   newEmail: 'new.email@example.com'
   * })
   * ```
   */
  async generateLink(e) {
    try {
      const { options: t } = e, r = or(e, ["options"]), n = Object.assign(Object.assign({}, r), t);
      return "newEmail" in r && (n.new_email = r?.newEmail, delete n.newEmail), await F(this.fetch, "POST", `${this.url}/admin/generate_link`, {
        body: n,
        headers: this.headers,
        xform: hh,
        redirectTo: t?.redirectTo
      });
    } catch (t) {
      if (P(t))
        return {
          data: {
            properties: null,
            user: null
          },
          error: t
        };
      throw t;
    }
  }
  // User Admin API
  /**
   * Creates a new user.
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   *
   * @category Auth
   * @subcategory Auth Admin
   *
   * @remarks
   * - To confirm the user's email address or phone number, set `email_confirm` or `phone_confirm` to true. Both arguments default to false.
   * - `createUser()` will not send a confirmation email to the user. You can use [`inviteUserByEmail()`](/docs/reference/javascript/auth-admin-inviteuserbyemail) if you want to send them an email invite instead.
   * - If you are sure that the created user's email or phone number is legitimate and verified, you can set the `email_confirm` or `phone_confirm` param to `true`.
   *
   * @example With custom user metadata
   * ```js
   * const { data, error } = await supabase.auth.admin.createUser({
   *   email: 'user@email.com',
   *   password: 'password',
   *   user_metadata: { name: 'Yoda' }
   * })
   * ```
   *
   * @exampleResponse With custom user metadata
   * ```json
   * {
   *   data: {
   *     user: {
   *       id: '1',
   *       aud: 'authenticated',
   *       role: 'authenticated',
   *       email: 'example@email.com',
   *       email_confirmed_at: '2024-01-01T00:00:00Z',
   *       phone: '',
   *       confirmation_sent_at: '2024-01-01T00:00:00Z',
   *       confirmed_at: '2024-01-01T00:00:00Z',
   *       last_sign_in_at: '2024-01-01T00:00:00Z',
   *       app_metadata: {},
   *       user_metadata: {},
   *       identities: [
   *         {
   *           "identity_id": "22222222-2222-2222-2222-222222222222",
   *           "id": "1",
   *           "user_id": "1",
   *           "identity_data": {
   *             "email": "example@email.com",
   *             "email_verified": true,
   *             "phone_verified": false,
   *             "sub": "1"
   *           },
   *           "provider": "email",
   *           "last_sign_in_at": "2024-01-01T00:00:00Z",
   *           "created_at": "2024-01-01T00:00:00Z",
   *           "updated_at": "2024-01-01T00:00:00Z",
   *           "email": "email@example.com"
   *         },
   *       ],
   *       created_at: '2024-01-01T00:00:00Z',
   *       updated_at: '2024-01-01T00:00:00Z',
   *       is_anonymous: false,
   *     }
   *   }
   *   error: null
   * }
   * ```
   *
   * @example Auto-confirm the user's email
   * ```js
   * const { data, error } = await supabase.auth.admin.createUser({
   *   email: 'user@email.com',
   *   email_confirm: true
   * })
   * ```
   *
   * @example Auto-confirm the user's phone number
   * ```js
   * const { data, error } = await supabase.auth.admin.createUser({
   *   phone: '1234567890',
   *   phone_confirm: true
   * })
   * ```
   */
  async createUser(e) {
    try {
      return await F(this.fetch, "POST", `${this.url}/admin/users`, {
        body: e,
        headers: this.headers,
        xform: et
      });
    } catch (t) {
      if (P(t))
        return { data: { user: null }, error: t };
      throw t;
    }
  }
  /**
   * Get a list of users.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   * @param params An object which supports `page` and `perPage` as numbers, to alter the paginated results.
   *
   * @category Auth
   * @subcategory Auth Admin
   *
   * @remarks
   * - Defaults to return 50 users per page.
   *
   * @example Get a page of users
   * ```js
   * const { data: { users }, error } = await supabase.auth.admin.listUsers()
   * ```
   *
   * @example Paginated list of users
   * ```js
   * const { data: { users }, error } = await supabase.auth.admin.listUsers({
   *   page: 1,
   *   perPage: 1000
   * })
   * ```
   */
  async listUsers(e) {
    var t, r, n, i, s, o, l;
    try {
      const u = { nextPage: null, lastPage: 0, total: 0 }, f = await F(this.fetch, "GET", `${this.url}/admin/users`, {
        headers: this.headers,
        noResolveJson: !0,
        query: {
          page: (r = (t = e?.page) === null || t === void 0 ? void 0 : t.toString()) !== null && r !== void 0 ? r : "",
          per_page: (i = (n = e?.perPage) === null || n === void 0 ? void 0 : n.toString()) !== null && i !== void 0 ? i : ""
        },
        xform: Mi
      });
      if (f.error)
        throw f.error;
      const d = await f.json(), g = (s = f.headers.get("x-total-count")) !== null && s !== void 0 ? s : 0, b = (l = (o = f.headers.get("link")) === null || o === void 0 ? void 0 : o.split(",")) !== null && l !== void 0 ? l : [];
      return b.length > 0 && (b.forEach((v) => {
        const A = parseInt(v.split(";")[0].split("=")[1].substring(0, 1)), D = JSON.parse(v.split(";")[1].split("=")[1]);
        u[`${D}Page`] = A;
      }), u.total = parseInt(g)), { data: Object.assign(Object.assign({}, d), u), error: null };
    } catch (u) {
      if (P(u))
        return { data: { users: [] }, error: u };
      throw u;
    }
  }
  /**
   * Get user by id.
   *
   * @param uid The user's unique identifier
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   *
   * @category Auth
   * @subcategory Auth Admin
   *
   * @remarks
   * - Fetches the user object from the database based on the user's id.
   * - The `getUserById()` method requires the user's id which maps to the `auth.users.id` column.
   *
   * @example Fetch the user object using the access_token jwt
   * ```js
   * const { data, error } = await supabase.auth.admin.getUserById(1)
   * ```
   *
   * @exampleResponse Fetch the user object using the access_token jwt
   * ```json
   * {
   *   data: {
   *     user: {
   *       id: '1',
   *       aud: 'authenticated',
   *       role: 'authenticated',
   *       email: 'example@email.com',
   *       email_confirmed_at: '2024-01-01T00:00:00Z',
   *       phone: '',
   *       confirmation_sent_at: '2024-01-01T00:00:00Z',
   *       confirmed_at: '2024-01-01T00:00:00Z',
   *       last_sign_in_at: '2024-01-01T00:00:00Z',
   *       app_metadata: {},
   *       user_metadata: {},
   *       identities: [
   *         {
   *           "identity_id": "22222222-2222-2222-2222-222222222222",
   *           "id": "1",
   *           "user_id": "1",
   *           "identity_data": {
   *             "email": "example@email.com",
   *             "email_verified": true,
   *             "phone_verified": false,
   *             "sub": "1"
   *           },
   *           "provider": "email",
   *           "last_sign_in_at": "2024-01-01T00:00:00Z",
   *           "created_at": "2024-01-01T00:00:00Z",
   *           "updated_at": "2024-01-01T00:00:00Z",
   *           "email": "email@example.com"
   *         },
   *       ],
   *       created_at: '2024-01-01T00:00:00Z',
   *       updated_at: '2024-01-01T00:00:00Z',
   *       is_anonymous: false,
   *     }
   *   }
   *   error: null
   * }
   * ```
   */
  async getUserById(e) {
    He(e);
    try {
      return await F(this.fetch, "GET", `${this.url}/admin/users/${e}`, {
        headers: this.headers,
        xform: et
      });
    } catch (t) {
      if (P(t))
        return { data: { user: null }, error: t };
      throw t;
    }
  }
  /**
   * Updates the user data. Changes are applied directly without confirmation flows.
   *
   * @param uid The user's unique identifier
   * @param attributes The data you want to update.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   *
   * @remarks
   * **Important:** This is a server-side operation and does **not** trigger client-side
   * `onAuthStateChange` listeners. The admin API has no connection to client state.
   *
   * To sync changes to the client after calling this method:
   * 1. On the client, call `supabase.auth.refreshSession()` to fetch the updated user data
   * 2. This will trigger the `TOKEN_REFRESHED` event and notify all listeners
   *
   * @example
   * ```typescript
   * // Server-side (Edge Function)
   * const { data, error } = await supabase.auth.admin.updateUserById(
   *   userId,
   *   { user_metadata: { preferences: { theme: 'dark' } } }
   * )
   *
   * // Client-side (to sync the changes)
   * const { data, error } = await supabase.auth.refreshSession()
   * // onAuthStateChange listeners will now be notified with updated user
   * ```
   *
   * @see {@link GoTrueClient.refreshSession} for syncing admin changes to the client
   * @see {@link GoTrueClient.updateUser} for client-side user updates (triggers listeners automatically)
   *
   * @category Auth
   * @subcategory Auth Admin
   *
   * @example Updates a user's email
   * ```js
   * const { data: user, error } = await supabase.auth.admin.updateUserById(
   *   '11111111-1111-1111-1111-111111111111',
   *   { email: 'new@email.com' }
   * )
   * ```
   *
   * @exampleResponse Updates a user's email
   * ```json
   * {
   *   "data": {
   *     "user": {
   *       "id": "11111111-1111-1111-1111-111111111111",
   *       "aud": "authenticated",
   *       "role": "authenticated",
   *       "email": "new@email.com",
   *       "email_confirmed_at": "2024-01-01T00:00:00Z",
   *       "phone": "",
   *       "confirmed_at": "2024-01-01T00:00:00Z",
   *       "recovery_sent_at": "2024-01-01T00:00:00Z",
   *       "last_sign_in_at": "2024-01-01T00:00:00Z",
   *       "app_metadata": {
   *         "provider": "email",
   *         "providers": [
   *           "email"
   *         ]
   *       },
   *       "user_metadata": {
   *         "email": "example@email.com",
   *         "email_verified": false,
   *         "phone_verified": false,
   *         "sub": "11111111-1111-1111-1111-111111111111"
   *       },
   *       "identities": [
   *         {
   *           "identity_id": "22222222-2222-2222-2222-222222222222",
   *           "id": "11111111-1111-1111-1111-111111111111",
   *           "user_id": "11111111-1111-1111-1111-111111111111",
   *           "identity_data": {
   *             "email": "example@email.com",
   *             "email_verified": false,
   *             "phone_verified": false,
   *             "sub": "11111111-1111-1111-1111-111111111111"
   *           },
   *           "provider": "email",
   *           "last_sign_in_at": "2024-01-01T00:00:00Z",
   *           "created_at": "2024-01-01T00:00:00Z",
   *           "updated_at": "2024-01-01T00:00:00Z",
   *           "email": "example@email.com"
   *         }
   *       ],
   *       "created_at": "2024-01-01T00:00:00Z",
   *       "updated_at": "2024-01-01T00:00:00Z",
   *       "is_anonymous": false
   *     }
   *   },
   *   "error": null
   * }
   * ```
   *
   * @example Updates a user's password
   * ```js
   * const { data: user, error } = await supabase.auth.admin.updateUserById(
   *   '6aa5d0d4-2a9f-4483-b6c8-0cf4c6c98ac4',
   *   { password: 'new_password' }
   * )
   * ```
   *
   * @example Updates a user's metadata
   * ```js
   * const { data: user, error } = await supabase.auth.admin.updateUserById(
   *   '6aa5d0d4-2a9f-4483-b6c8-0cf4c6c98ac4',
   *   { user_metadata: { hello: 'world' } }
   * )
   * ```
   *
   * @example Updates a user's app_metadata
   * ```js
   * const { data: user, error } = await supabase.auth.admin.updateUserById(
   *   '6aa5d0d4-2a9f-4483-b6c8-0cf4c6c98ac4',
   *   { app_metadata: { plan: 'trial' } }
   * )
   * ```
   *
   * @example Confirms a user's email address
   * ```js
   * const { data: user, error } = await supabase.auth.admin.updateUserById(
   *   '6aa5d0d4-2a9f-4483-b6c8-0cf4c6c98ac4',
   *   { email_confirm: true }
   * )
   * ```
   *
   * @example Confirms a user's phone number
   * ```js
   * const { data: user, error } = await supabase.auth.admin.updateUserById(
   *   '6aa5d0d4-2a9f-4483-b6c8-0cf4c6c98ac4',
   *   { phone_confirm: true }
   * )
   * ```
   *
   * @example Ban a user for 100 years
   * ```js
   * const { data: user, error } = await supabase.auth.admin.updateUserById(
   *   '6aa5d0d4-2a9f-4483-b6c8-0cf4c6c98ac4',
   *   { ban_duration: '876000h' }
   * )
   * ```
   */
  async updateUserById(e, t) {
    He(e);
    try {
      return await F(this.fetch, "PUT", `${this.url}/admin/users/${e}`, {
        body: t,
        headers: this.headers,
        xform: et
      });
    } catch (r) {
      if (P(r))
        return { data: { user: null }, error: r };
      throw r;
    }
  }
  /**
   * Delete a user. Requires a `service_role` key.
   *
   * @param id The user id you want to remove.
   * @param shouldSoftDelete If true, then the user will be soft-deleted from the auth schema. Soft deletion allows user identification from the hashed user ID but is not reversible.
   * Defaults to false for backward compatibility.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   *
   * @category Auth
   * @subcategory Auth Admin
   *
   * @remarks
   * - The `deleteUser()` method requires the user's ID, which maps to the `auth.users.id` column.
   *
   * @example Removes a user
   * ```js
   * const { data, error } = await supabase.auth.admin.deleteUser(
   *   '715ed5db-f090-4b8c-a067-640ecee36aa0'
   * )
   * ```
   *
   * @exampleResponse Removes a user
   * ```json
   * {
   *   "data": {
   *     "user": {}
   *   },
   *   "error": null
   * }
   * ```
   */
  async deleteUser(e, t = !1) {
    He(e);
    try {
      return await F(this.fetch, "DELETE", `${this.url}/admin/users/${e}`, {
        headers: this.headers,
        body: {
          should_soft_delete: t
        },
        xform: et
      });
    } catch (r) {
      if (P(r))
        return { data: { user: null }, error: r };
      throw r;
    }
  }
  async _listFactors(e) {
    He(e.userId);
    try {
      const { data: t, error: r } = await F(this.fetch, "GET", `${this.url}/admin/users/${e.userId}/factors`, {
        headers: this.headers,
        xform: (n) => ({ data: { factors: n }, error: null })
      });
      return { data: t, error: r };
    } catch (t) {
      if (P(t))
        return { data: null, error: t };
      throw t;
    }
  }
  async _deleteFactor(e) {
    He(e.userId), He(e.id);
    try {
      return { data: await F(this.fetch, "DELETE", `${this.url}/admin/users/${e.userId}/factors/${e.id}`, {
        headers: this.headers
      }), error: null };
    } catch (t) {
      if (P(t))
        return { data: null, error: t };
      throw t;
    }
  }
  /**
   * Lists all OAuth clients with optional pagination.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _listOAuthClients(e) {
    var t, r, n, i, s, o, l;
    try {
      const u = { nextPage: null, lastPage: 0, total: 0 }, f = await F(this.fetch, "GET", `${this.url}/admin/oauth/clients`, {
        headers: this.headers,
        noResolveJson: !0,
        query: {
          page: (r = (t = e?.page) === null || t === void 0 ? void 0 : t.toString()) !== null && r !== void 0 ? r : "",
          per_page: (i = (n = e?.perPage) === null || n === void 0 ? void 0 : n.toString()) !== null && i !== void 0 ? i : ""
        },
        xform: Mi
      });
      if (f.error)
        throw f.error;
      const d = await f.json(), g = (s = f.headers.get("x-total-count")) !== null && s !== void 0 ? s : 0, b = (l = (o = f.headers.get("link")) === null || o === void 0 ? void 0 : o.split(",")) !== null && l !== void 0 ? l : [];
      return b.length > 0 && (b.forEach((v) => {
        const A = parseInt(v.split(";")[0].split("=")[1].substring(0, 1)), D = JSON.parse(v.split(";")[1].split("=")[1]);
        u[`${D}Page`] = A;
      }), u.total = parseInt(g)), { data: Object.assign(Object.assign({}, d), u), error: null };
    } catch (u) {
      if (P(u))
        return { data: { clients: [] }, error: u };
      throw u;
    }
  }
  /**
   * Creates a new OAuth client.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _createOAuthClient(e) {
    try {
      return await F(this.fetch, "POST", `${this.url}/admin/oauth/clients`, {
        body: e,
        headers: this.headers,
        xform: (t) => ({ data: t, error: null })
      });
    } catch (t) {
      if (P(t))
        return { data: null, error: t };
      throw t;
    }
  }
  /**
   * Gets details of a specific OAuth client.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _getOAuthClient(e) {
    try {
      return await F(this.fetch, "GET", `${this.url}/admin/oauth/clients/${e}`, {
        headers: this.headers,
        xform: (t) => ({ data: t, error: null })
      });
    } catch (t) {
      if (P(t))
        return { data: null, error: t };
      throw t;
    }
  }
  /**
   * Updates an existing OAuth client.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _updateOAuthClient(e, t) {
    try {
      return await F(this.fetch, "PUT", `${this.url}/admin/oauth/clients/${e}`, {
        body: t,
        headers: this.headers,
        xform: (r) => ({ data: r, error: null })
      });
    } catch (r) {
      if (P(r))
        return { data: null, error: r };
      throw r;
    }
  }
  /**
   * Deletes an OAuth client.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _deleteOAuthClient(e) {
    try {
      return await F(this.fetch, "DELETE", `${this.url}/admin/oauth/clients/${e}`, {
        headers: this.headers,
        noResolveJson: !0
      }), { data: null, error: null };
    } catch (t) {
      if (P(t))
        return { data: null, error: t };
      throw t;
    }
  }
  /**
   * Regenerates the secret for an OAuth client.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _regenerateOAuthClientSecret(e) {
    try {
      return await F(this.fetch, "POST", `${this.url}/admin/oauth/clients/${e}/regenerate_secret`, {
        headers: this.headers,
        xform: (t) => ({ data: t, error: null })
      });
    } catch (t) {
      if (P(t))
        return { data: null, error: t };
      throw t;
    }
  }
  /**
   * Lists all custom providers with optional type filter.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _listCustomProviders(e) {
    try {
      const t = {};
      return e?.type && (t.type = e.type), await F(this.fetch, "GET", `${this.url}/admin/custom-providers`, {
        headers: this.headers,
        query: t,
        xform: (r) => {
          var n;
          return { data: { providers: (n = r?.providers) !== null && n !== void 0 ? n : [] }, error: null };
        }
      });
    } catch (t) {
      if (P(t))
        return { data: { providers: [] }, error: t };
      throw t;
    }
  }
  /**
   * Creates a new custom OIDC/OAuth provider.
   *
   * For OIDC providers, the server fetches and validates the OpenID Connect discovery document
   * from the issuer's well-known endpoint (or the provided `discovery_url`) at creation time.
   * This may return a validation error (`error_code: "validation_failed"`) if the discovery
   * document is unreachable, not valid JSON, missing required fields, or if the issuer
   * in the document does not match the expected issuer.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _createCustomProvider(e) {
    try {
      return await F(this.fetch, "POST", `${this.url}/admin/custom-providers`, {
        body: e,
        headers: this.headers,
        xform: (t) => ({ data: t, error: null })
      });
    } catch (t) {
      if (P(t))
        return { data: null, error: t };
      throw t;
    }
  }
  /**
   * Gets details of a specific custom provider by identifier.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _getCustomProvider(e) {
    try {
      return await F(this.fetch, "GET", `${this.url}/admin/custom-providers/${e}`, {
        headers: this.headers,
        xform: (t) => ({ data: t, error: null })
      });
    } catch (t) {
      if (P(t))
        return { data: null, error: t };
      throw t;
    }
  }
  /**
   * Updates an existing custom provider.
   *
   * When `issuer` or `discovery_url` is changed on an OIDC provider, the server re-fetches and
   * validates the discovery document before persisting. This may return a validation error
   * (`error_code: "validation_failed"`) if the discovery document is unreachable, invalid, or
   * the issuer does not match.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _updateCustomProvider(e, t) {
    try {
      return await F(this.fetch, "PUT", `${this.url}/admin/custom-providers/${e}`, {
        body: t,
        headers: this.headers,
        xform: (r) => ({ data: r, error: null })
      });
    } catch (r) {
      if (P(r))
        return { data: null, error: r };
      throw r;
    }
  }
  /**
   * Deletes a custom provider.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _deleteCustomProvider(e) {
    try {
      return await F(this.fetch, "DELETE", `${this.url}/admin/custom-providers/${e}`, {
        headers: this.headers,
        noResolveJson: !0
      }), { data: null, error: null };
    } catch (t) {
      if (P(t))
        return { data: null, error: t };
      throw t;
    }
  }
  /**
   * Lists all passkeys for a user.
   *
   * This function should only be called on a server. Never expose your secret key in the browser.
   *
   * Requires `auth.experimental.passkey: true`.
   */
  async _adminListPasskeys(e) {
    xe(this.experimental), He(e.userId);
    try {
      return await F(this.fetch, "GET", `${this.url}/admin/users/${e.userId}/passkeys`, { headers: this.headers, xform: (t) => ({ data: t, error: null }) });
    } catch (t) {
      if (P(t))
        return { data: null, error: t };
      throw t;
    }
  }
  /**
   * Deletes a user's passkey.
   *
   * This function should only be called on a server. Never expose your secret key in the browser.
   *
   * Requires `auth.experimental.passkey: true`.
   */
  async _adminDeletePasskey(e) {
    xe(this.experimental), He(e.userId), He(e.passkeyId);
    try {
      return await F(this.fetch, "DELETE", `${this.url}/admin/users/${e.userId}/passkeys/${e.passkeyId}`, { headers: this.headers, noResolveJson: !0 }), { data: null, error: null };
    } catch (t) {
      if (P(t))
        return { data: null, error: t };
      throw t;
    }
  }
}
function Hi(a = {}) {
  return {
    getItem: (e) => a[e] || null,
    setItem: (e, t) => {
      a[e] = t;
    },
    removeItem: (e) => {
      delete a[e];
    }
  };
}
const ze = {
  /**
   * @experimental
   */
  debug: !!(globalThis && Hs() && globalThis.localStorage && globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true")
};
class Ws extends Error {
  constructor(e) {
    super(e), this.isAcquireTimeout = !0;
  }
}
class qi extends Ws {
}
async function gh(a, e, t) {
  ze.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire lock", a, e);
  const r = new globalThis.AbortController();
  let n;
  e > 0 && (n = setTimeout(() => {
    r.abort(), ze.debug && console.log("@supabase/gotrue-js: navigatorLock acquire timed out", a);
  }, e)), await Promise.resolve();
  try {
    return await globalThis.navigator.locks.request(a, e === 0 ? {
      mode: "exclusive",
      ifAvailable: !0
    } : {
      mode: "exclusive",
      signal: r.signal
    }, async (i) => {
      if (i) {
        clearTimeout(n), ze.debug && console.log("@supabase/gotrue-js: navigatorLock: acquired", a, i.name);
        try {
          return await t();
        } finally {
          ze.debug && console.log("@supabase/gotrue-js: navigatorLock: released", a, i.name);
        }
      } else {
        if (e === 0)
          throw ze.debug && console.log("@supabase/gotrue-js: navigatorLock: not immediately available", a), new qi(`Acquiring an exclusive Navigator LockManager lock "${a}" immediately failed`);
        if (ze.debug)
          try {
            const s = await globalThis.navigator.locks.query();
            console.log("@supabase/gotrue-js: Navigator LockManager state", JSON.stringify(s, null, "  "));
          } catch (s) {
            console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state", s);
          }
        return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"), clearTimeout(n), await t();
      }
    });
  } catch (i) {
    if (e > 0 && clearTimeout(n), i !== null && typeof i == "object" && "name" in i && i.name === "AbortError" && e > 0) {
      if (r.signal.aborted)
        return ze.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire timeout, recovering by stealing lock", a), console.warn(`@supabase/gotrue-js: Lock "${a}" was not released within ${e}ms. This may indicate an orphaned lock from a component unmount (e.g., React Strict Mode). Forcefully acquiring the lock to recover.`), await Promise.resolve().then(() => globalThis.navigator.locks.request(a, {
          mode: "exclusive",
          steal: !0
        }, async (s) => {
          if (s) {
            ze.debug && console.log("@supabase/gotrue-js: navigatorLock: recovered (stolen)", a, s.name);
            try {
              return await t();
            } finally {
              ze.debug && console.log("@supabase/gotrue-js: navigatorLock: released (stolen)", a, s.name);
            }
          } else
            return console.warn("@supabase/gotrue-js: Navigator LockManager returned null lock even with steal: true"), await t();
        }));
      throw ze.debug && console.log("@supabase/gotrue-js: navigatorLock: lock was stolen by another request", a), new qi(`Lock "${a}" was released because another request stole it`);
    }
    throw i;
  }
}
function mh() {
  if (typeof globalThis != "object")
    try {
      Object.defineProperty(Object.prototype, "__magic__", {
        get: function() {
          return this;
        },
        configurable: !0
      }), __magic__.globalThis = __magic__, delete Object.prototype.__magic__;
    } catch {
      typeof self < "u" && (self.globalThis = self);
    }
}
function Gs(a) {
  if (!/^0x[a-fA-F0-9]{40}$/.test(a))
    throw new Error(`@supabase/auth-js: Address "${a}" is invalid.`);
  return a.toLowerCase();
}
function ph(a) {
  return parseInt(a, 16);
}
function yh(a) {
  const e = new TextEncoder().encode(a);
  return "0x" + Array.from(e, (r) => r.toString(16).padStart(2, "0")).join("");
}
function bh(a) {
  var e;
  const { chainId: t, domain: r, expirationTime: n, issuedAt: i = /* @__PURE__ */ new Date(), nonce: s, notBefore: o, requestId: l, resources: u, scheme: f, uri: d, version: g } = a;
  {
    if (!Number.isInteger(t))
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${t}`);
    if (!r)
      throw new Error('@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.');
    if (s && s.length < 8)
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${s}`);
    if (!d)
      throw new Error('@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.');
    if (g !== "1")
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${g}`);
    if (!((e = a.statement) === null || e === void 0) && e.includes(`
`))
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${a.statement}`);
  }
  const b = Gs(a.address), v = f ? `${f}://${r}` : r, A = a.statement ? `${a.statement}
` : "", D = `${v} wants you to sign in with your Ethereum account:
${b}

${A}`;
  let x = `URI: ${d}
Version: ${g}
Chain ID: ${t}${s ? `
Nonce: ${s}` : ""}
Issued At: ${i.toISOString()}`;
  if (n && (x += `
Expiration Time: ${n.toISOString()}`), o && (x += `
Not Before: ${o.toISOString()}`), l && (x += `
Request ID: ${l}`), u) {
    let O = `
Resources:`;
    for (const _ of u) {
      if (!_ || typeof _ != "string")
        throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${_}`);
      O += `
- ${_}`;
    }
    x += O;
  }
  return `${D}
${x}`;
}
class ne extends Error {
  constructor({ message: e, code: t, cause: r, name: n }) {
    var i;
    super(e, { cause: r }), this.__isWebAuthnError = !0, this.name = (i = n ?? (r instanceof Error ? r.name : void 0)) !== null && i !== void 0 ? i : "Unknown Error", this.code = t;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      code: this.code
    };
  }
}
class ar extends ne {
  constructor(e, t) {
    super({
      code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
      cause: t,
      message: e
    }), this.name = "WebAuthnUnknownError", this.originalError = t;
  }
}
function wh({ error: a, options: e }) {
  var t, r, n;
  const { publicKey: i } = e;
  if (!i)
    throw Error("options was missing required publicKey property");
  if (a.name === "AbortError") {
    if (e.signal instanceof AbortSignal)
      return new ne({
        message: "Registration ceremony was sent an abort signal",
        code: "ERROR_CEREMONY_ABORTED",
        cause: a
      });
  } else if (a.name === "ConstraintError") {
    if (((t = i.authenticatorSelection) === null || t === void 0 ? void 0 : t.requireResidentKey) === !0)
      return new ne({
        message: "Discoverable credentials were required but no available authenticator supported it",
        code: "ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",
        cause: a
      });
    if (
      // @ts-ignore: `mediation` doesn't yet exist on CredentialCreationOptions but it's possible as of Sept 2024
      e.mediation === "conditional" && ((r = i.authenticatorSelection) === null || r === void 0 ? void 0 : r.userVerification) === "required"
    )
      return new ne({
        message: "User verification was required during automatic registration but it could not be performed",
        code: "ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",
        cause: a
      });
    if (((n = i.authenticatorSelection) === null || n === void 0 ? void 0 : n.userVerification) === "required")
      return new ne({
        message: "User verification was required but no available authenticator supported it",
        code: "ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",
        cause: a
      });
  } else {
    if (a.name === "InvalidStateError")
      return new ne({
        message: "The authenticator was previously registered",
        code: "ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",
        cause: a
      });
    if (a.name === "NotAllowedError")
      return new ne({
        message: a.message,
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: a
      });
    if (a.name === "NotSupportedError")
      return i.pubKeyCredParams.filter((o) => o.type === "public-key").length === 0 ? new ne({
        message: 'No entry in pubKeyCredParams was of type "public-key"',
        code: "ERROR_MALFORMED_PUBKEYCREDPARAMS",
        cause: a
      }) : new ne({
        message: "No available authenticator supported any of the specified pubKeyCredParams algorithms",
        code: "ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",
        cause: a
      });
    if (a.name === "SecurityError") {
      const s = window.location.hostname;
      if (Ks(s)) {
        if (i.rp.id !== s)
          return new ne({
            message: `The RP ID "${i.rp.id}" is invalid for this domain`,
            code: "ERROR_INVALID_RP_ID",
            cause: a
          });
      } else return new ne({
        message: `${window.location.hostname} is an invalid domain`,
        code: "ERROR_INVALID_DOMAIN",
        cause: a
      });
    } else if (a.name === "TypeError") {
      if (i.user.id.byteLength < 1 || i.user.id.byteLength > 64)
        return new ne({
          message: "User ID was not between 1 and 64 characters",
          code: "ERROR_INVALID_USER_ID_LENGTH",
          cause: a
        });
    } else if (a.name === "UnknownError")
      return new ne({
        message: "The authenticator was unable to process the specified options, or could not create a new credential",
        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
        cause: a
      });
  }
  return new ne({
    message: "a Non-Webauthn related error has occurred",
    code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
    cause: a
  });
}
function vh({ error: a, options: e }) {
  const { publicKey: t } = e;
  if (!t)
    throw Error("options was missing required publicKey property");
  if (a.name === "AbortError") {
    if (e.signal instanceof AbortSignal)
      return new ne({
        message: "Authentication ceremony was sent an abort signal",
        code: "ERROR_CEREMONY_ABORTED",
        cause: a
      });
  } else {
    if (a.name === "NotAllowedError")
      return new ne({
        message: a.message,
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: a
      });
    if (a.name === "SecurityError") {
      const r = window.location.hostname;
      if (Ks(r)) {
        if (t.rpId !== r)
          return new ne({
            message: `The RP ID "${t.rpId}" is invalid for this domain`,
            code: "ERROR_INVALID_RP_ID",
            cause: a
          });
      } else return new ne({
        message: `${window.location.hostname} is an invalid domain`,
        code: "ERROR_INVALID_DOMAIN",
        cause: a
      });
    } else if (a.name === "UnknownError")
      return new ne({
        message: "The authenticator was unable to process the specified options, or could not create a new assertion signature",
        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
        cause: a
      });
  }
  return new ne({
    message: "a Non-Webauthn related error has occurred",
    code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
    cause: a
  });
}
class _h {
  /**
   * Create an abort signal for a new WebAuthn operation.
   * Automatically cancels any existing operation.
   *
   * @returns {AbortSignal} Signal to pass to navigator.credentials.create() or .get()
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal MDN - AbortSignal}
   */
  createNewAbortSignal() {
    if (this.controller) {
      const t = new Error("Cancelling existing WebAuthn API call for new one");
      t.name = "AbortError", this.controller.abort(t);
    }
    const e = new AbortController();
    return this.controller = e, e.signal;
  }
  /**
   * Manually cancel the current WebAuthn operation.
   * Useful for cleaning up when user cancels or navigates away.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort MDN - AbortController.abort}
   */
  cancelCeremony() {
    if (this.controller) {
      const e = new Error("Manually cancelling existing WebAuthn API call");
      e.name = "AbortError", this.controller.abort(e), this.controller = void 0;
    }
  }
}
const yn = new _h();
function Wi(a) {
  if (!a)
    throw new Error("Credential creation options are required");
  if (typeof PublicKeyCredential < "u" && "parseCreationOptionsFromJSON" in PublicKeyCredential && typeof PublicKeyCredential.parseCreationOptionsFromJSON == "function")
    return PublicKeyCredential.parseCreationOptionsFromJSON(
      /** we assert the options here as typescript still doesn't know about future webauthn types */
      a
    );
  const { challenge: e, user: t, excludeCredentials: r } = a, n = or(
    a,
    ["challenge", "user", "excludeCredentials"]
  ), i = Mt(e).buffer, s = Object.assign(Object.assign({}, t), { id: Mt(t.id).buffer }), o = Object.assign(Object.assign({}, n), {
    challenge: i,
    user: s
  });
  if (r && r.length > 0) {
    o.excludeCredentials = new Array(r.length);
    for (let l = 0; l < r.length; l++) {
      const u = r[l];
      o.excludeCredentials[l] = Object.assign(Object.assign({}, u), {
        id: Mt(u.id).buffer,
        type: u.type || "public-key",
        // Cast transports to handle future transport types like "cable"
        transports: u.transports
      });
    }
  }
  return o;
}
function Gi(a) {
  if (!a)
    throw new Error("Credential request options are required");
  if (typeof PublicKeyCredential < "u" && "parseRequestOptionsFromJSON" in PublicKeyCredential && typeof PublicKeyCredential.parseRequestOptionsFromJSON == "function")
    return PublicKeyCredential.parseRequestOptionsFromJSON(a);
  const { challenge: e, allowCredentials: t } = a, r = or(
    a,
    ["challenge", "allowCredentials"]
  ), n = Mt(e).buffer, i = Object.assign(Object.assign({}, r), { challenge: n });
  if (t && t.length > 0) {
    i.allowCredentials = new Array(t.length);
    for (let s = 0; s < t.length; s++) {
      const o = t[s];
      i.allowCredentials[s] = Object.assign(Object.assign({}, o), {
        id: Mt(o.id).buffer,
        type: o.type || "public-key",
        // Cast transports to handle future transport types like "cable"
        transports: o.transports
      });
    }
  }
  return i;
}
function Ki(a) {
  var e;
  if ("toJSON" in a && typeof a.toJSON == "function")
    return a.toJSON();
  const t = a;
  return {
    id: a.id,
    rawId: a.id,
    response: {
      attestationObject: dt(new Uint8Array(a.response.attestationObject)),
      clientDataJSON: dt(new Uint8Array(a.response.clientDataJSON))
    },
    type: "public-key",
    clientExtensionResults: a.getClientExtensionResults(),
    // Convert null to undefined and cast to AuthenticatorAttachment type
    authenticatorAttachment: (e = t.authenticatorAttachment) !== null && e !== void 0 ? e : void 0
  };
}
function Vi(a) {
  var e;
  if ("toJSON" in a && typeof a.toJSON == "function")
    return a.toJSON();
  const t = a, r = a.getClientExtensionResults(), n = a.response;
  return {
    id: a.id,
    rawId: a.id,
    // W3C spec expects rawId to match id for JSON format
    response: {
      authenticatorData: dt(new Uint8Array(n.authenticatorData)),
      clientDataJSON: dt(new Uint8Array(n.clientDataJSON)),
      signature: dt(new Uint8Array(n.signature)),
      userHandle: n.userHandle ? dt(new Uint8Array(n.userHandle)) : void 0
    },
    type: "public-key",
    clientExtensionResults: r,
    // Convert null to undefined and cast to AuthenticatorAttachment type
    authenticatorAttachment: (e = t.authenticatorAttachment) !== null && e !== void 0 ? e : void 0
  };
}
function Ks(a) {
  return (
    // Consider localhost valid as well since it's okay wrt Secure Contexts
    a === "localhost" || /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(a)
  );
}
function rr() {
  var a, e;
  return !!(ce() && "PublicKeyCredential" in window && window.PublicKeyCredential && "credentials" in navigator && typeof ((a = navigator?.credentials) === null || a === void 0 ? void 0 : a.create) == "function" && typeof ((e = navigator?.credentials) === null || e === void 0 ? void 0 : e.get) == "function");
}
async function Vs(a) {
  try {
    const e = await navigator.credentials.create(
      /** we assert the type here until typescript types are updated */
      a
    );
    return e ? e instanceof PublicKeyCredential ? { data: e, error: null } : {
      data: null,
      error: new ar("Browser returned unexpected credential type", e)
    } : {
      data: null,
      error: new ar("Empty credential response", e)
    };
  } catch (e) {
    return {
      data: null,
      error: wh({
        error: e,
        options: a
      })
    };
  }
}
async function Js(a) {
  try {
    const e = await navigator.credentials.get(
      /** we assert the type here until typescript types are updated */
      a
    );
    return e ? e instanceof PublicKeyCredential ? { data: e, error: null } : {
      data: null,
      error: new ar("Browser returned unexpected credential type", e)
    } : {
      data: null,
      error: new ar("Empty credential response", e)
    };
  } catch (e) {
    return {
      data: null,
      error: vh({
        error: e,
        options: a
      })
    };
  }
}
const kh = {
  hints: ["security-key"],
  authenticatorSelection: {
    authenticatorAttachment: "cross-platform",
    requireResidentKey: !1,
    /** set to preferred because older yubikeys don't have PIN/Biometric */
    userVerification: "preferred",
    residentKey: "discouraged"
  },
  attestation: "direct"
}, Eh = {
  /** set to preferred because older yubikeys don't have PIN/Biometric */
  userVerification: "preferred",
  hints: ["security-key"],
  attestation: "direct"
};
function nr(...a) {
  const e = (n) => n !== null && typeof n == "object" && !Array.isArray(n), t = (n) => n instanceof ArrayBuffer || ArrayBuffer.isView(n), r = {};
  for (const n of a)
    if (n)
      for (const i in n) {
        const s = n[i];
        if (s !== void 0)
          if (Array.isArray(s))
            r[i] = s;
          else if (t(s))
            r[i] = s;
          else if (e(s)) {
            const o = r[i];
            e(o) ? r[i] = nr(o, s) : r[i] = nr(s);
          } else
            r[i] = s;
      }
  return r;
}
function Ah(a, e) {
  return nr(kh, a, e || {});
}
function Sh(a, e) {
  return nr(Eh, a, e || {});
}
class Th {
  constructor(e) {
    this.client = e, this.enroll = this._enroll.bind(this), this.challenge = this._challenge.bind(this), this.verify = this._verify.bind(this), this.authenticate = this._authenticate.bind(this), this.register = this._register.bind(this);
  }
  /**
   * Enroll a new WebAuthn factor.
   * Creates an unverified WebAuthn factor that must be verified with a credential.
   *
   * @experimental This method is experimental and may change in future releases
   * @param {Omit<MFAEnrollWebauthnParams, 'factorType'>} params - Enrollment parameters (friendlyName required)
   * @returns {Promise<AuthMFAEnrollWebauthnResponse>} Enrolled factor details or error
   * @see {@link https://w3c.github.io/webauthn/#sctn-registering-a-new-credential W3C WebAuthn Spec - Registering a New Credential}
   */
  async _enroll(e) {
    return this.client.mfa.enroll(Object.assign(Object.assign({}, e), { factorType: "webauthn" }));
  }
  /**
   * Challenge for WebAuthn credential creation or authentication.
   * Combines server challenge with browser credential operations.
   * Handles both registration (create) and authentication (request) flows.
   *
   * @experimental This method is experimental and may change in future releases
   * @param {MFAChallengeWebauthnParams & { friendlyName?: string; signal?: AbortSignal }} params - Challenge parameters including factorId
   * @param {Object} overrides - Allows you to override the parameters passed to navigator.credentials
   * @param {PublicKeyCredentialCreationOptionsFuture} overrides.create - Override options for credential creation
   * @param {PublicKeyCredentialRequestOptionsFuture} overrides.request - Override options for credential request
   * @returns {Promise<RequestResult>} Challenge response with credential or error
   * @see {@link https://w3c.github.io/webauthn/#sctn-credential-creation W3C WebAuthn Spec - Credential Creation}
   * @see {@link https://w3c.github.io/webauthn/#sctn-verifying-assertion W3C WebAuthn Spec - Verifying Assertion}
   */
  async _challenge({ factorId: e, webauthn: t, friendlyName: r, signal: n }, i) {
    var s;
    try {
      const { data: o, error: l } = await this.client.mfa.challenge({
        factorId: e,
        webauthn: t
      });
      if (!o)
        return { data: null, error: l };
      const u = n ?? yn.createNewAbortSignal();
      if (o.webauthn.type === "create") {
        const { user: f } = o.webauthn.credential_options.publicKey;
        if (!f.name) {
          const d = r;
          if (d)
            f.name = `${f.id}:${d}`;
          else {
            const b = (await this.client.getUser()).data.user, v = ((s = b?.user_metadata) === null || s === void 0 ? void 0 : s.name) || b?.email || b?.id || "User";
            f.name = `${f.id}:${v}`;
          }
        }
        f.displayName || (f.displayName = f.name);
      }
      switch (o.webauthn.type) {
        case "create": {
          const f = Ah(o.webauthn.credential_options.publicKey, i?.create), { data: d, error: g } = await Vs({
            publicKey: f,
            signal: u
          });
          return d ? {
            data: {
              factorId: e,
              challengeId: o.id,
              webauthn: {
                type: o.webauthn.type,
                credential_response: d
              }
            },
            error: null
          } : { data: null, error: g };
        }
        case "request": {
          const f = Sh(o.webauthn.credential_options.publicKey, i?.request), { data: d, error: g } = await Js(Object.assign(Object.assign({}, o.webauthn.credential_options), { publicKey: f, signal: u }));
          return d ? {
            data: {
              factorId: e,
              challengeId: o.id,
              webauthn: {
                type: o.webauthn.type,
                credential_response: d
              }
            },
            error: null
          } : { data: null, error: g };
        }
      }
    } catch (o) {
      return P(o) ? { data: null, error: o } : {
        data: null,
        error: new Ie("Unexpected error in challenge", o)
      };
    }
  }
  /**
   * Verify a WebAuthn credential with the server.
   * Completes the WebAuthn ceremony by sending the credential to the server for verification.
   *
   * @experimental This method is experimental and may change in future releases
   * @param {Object} params - Verification parameters
   * @param {string} params.challengeId - ID of the challenge being verified
   * @param {string} params.factorId - ID of the WebAuthn factor
   * @param {MFAVerifyWebauthnParams<T>['webauthn']} params.webauthn - WebAuthn credential response
   * @returns {Promise<AuthMFAVerifyResponse>} Verification result with session or error
   * @see {@link https://w3c.github.io/webauthn/#sctn-verifying-assertion W3C WebAuthn Spec - Verifying an Authentication Assertion}
   * */
  async _verify({ challengeId: e, factorId: t, webauthn: r }) {
    return this.client.mfa.verify({
      factorId: t,
      challengeId: e,
      webauthn: r
    });
  }
  /**
   * Complete WebAuthn authentication flow.
   * Performs challenge and verification in a single operation for existing credentials.
   *
   * @experimental This method is experimental and may change in future releases
   * @param {Object} params - Authentication parameters
   * @param {string} params.factorId - ID of the WebAuthn factor to authenticate with
   * @param {Object} params.webauthn - WebAuthn configuration
   * @param {string} params.webauthn.rpId - Relying Party ID (defaults to current hostname)
   * @param {string[]} params.webauthn.rpOrigins - Allowed origins (defaults to current origin)
   * @param {AbortSignal} params.webauthn.signal - Optional abort signal
   * @param {PublicKeyCredentialRequestOptionsFuture} overrides - Override options for navigator.credentials.get
   * @returns {Promise<RequestResult<AuthMFAVerifyResponseData, WebAuthnError | AuthError>>} Authentication result
   * @see {@link https://w3c.github.io/webauthn/#sctn-authentication W3C WebAuthn Spec - Authentication Ceremony}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialRequestOptions MDN - PublicKeyCredentialRequestOptions}
   */
  async _authenticate({ factorId: e, webauthn: { rpId: t = typeof window < "u" ? window.location.hostname : void 0, rpOrigins: r = typeof window < "u" ? [window.location.origin] : void 0, signal: n } = {} }, i) {
    if (!t)
      return {
        data: null,
        error: new pa("rpId is required for WebAuthn authentication")
      };
    try {
      if (!rr())
        return {
          data: null,
          error: new Ie("Browser does not support WebAuthn", null)
        };
      const { data: s, error: o } = await this.challenge({
        factorId: e,
        webauthn: { rpId: t, rpOrigins: r },
        signal: n
      }, { request: i });
      if (!s)
        return { data: null, error: o };
      const { webauthn: l } = s;
      return this._verify({
        factorId: e,
        challengeId: s.challengeId,
        webauthn: {
          type: l.type,
          rpId: t,
          rpOrigins: r,
          credential_response: l.credential_response
        }
      });
    } catch (s) {
      return P(s) ? { data: null, error: s } : {
        data: null,
        error: new Ie("Unexpected error in authenticate", s)
      };
    }
  }
  /**
   * Complete WebAuthn registration flow.
   * Performs enrollment, challenge, and verification in a single operation for new credentials.
   *
   * @experimental This method is experimental and may change in future releases
   * @param {Object} params - Registration parameters
   * @param {string} params.friendlyName - User-friendly name for the credential
   * @param {string} params.rpId - Relying Party ID (defaults to current hostname)
   * @param {string[]} params.rpOrigins - Allowed origins (defaults to current origin)
   * @param {AbortSignal} params.signal - Optional abort signal
   * @param {PublicKeyCredentialCreationOptionsFuture} overrides - Override options for navigator.credentials.create
   * @returns {Promise<RequestResult<AuthMFAVerifyResponseData, WebAuthnError | AuthError>>} Registration result
   * @see {@link https://w3c.github.io/webauthn/#sctn-registering-a-new-credential W3C WebAuthn Spec - Registration Ceremony}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialCreationOptions MDN - PublicKeyCredentialCreationOptions}
   */
  async _register({ friendlyName: e, webauthn: { rpId: t = typeof window < "u" ? window.location.hostname : void 0, rpOrigins: r = typeof window < "u" ? [window.location.origin] : void 0, signal: n } = {} }, i) {
    if (!t)
      return {
        data: null,
        error: new pa("rpId is required for WebAuthn registration")
      };
    try {
      if (!rr())
        return {
          data: null,
          error: new Ie("Browser does not support WebAuthn", null)
        };
      const { data: s, error: o } = await this._enroll({
        friendlyName: e
      });
      if (!s)
        return await this.client.mfa.listFactors().then((f) => {
          var d;
          return (d = f.data) === null || d === void 0 ? void 0 : d.all.find((g) => g.factor_type === "webauthn" && g.friendly_name === e && g.status !== "unverified");
        }).then((f) => f ? this.client.mfa.unenroll({ factorId: f?.id }) : void 0), { data: null, error: o };
      const { data: l, error: u } = await this._challenge({
        factorId: s.id,
        friendlyName: s.friendly_name,
        webauthn: { rpId: t, rpOrigins: r },
        signal: n
      }, {
        create: i
      });
      return l ? this._verify({
        factorId: s.id,
        challengeId: l.challengeId,
        webauthn: {
          rpId: t,
          rpOrigins: r,
          type: l.webauthn.type,
          credential_response: l.webauthn.credential_response
        }
      }) : { data: null, error: u };
    } catch (s) {
      return P(s) ? { data: null, error: s } : {
        data: null,
        error: new Ie("Unexpected error in register", s)
      };
    }
  }
}
mh();
const Nh = {
  url: Oc,
  storageKey: Dc,
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  headers: jc,
  flowType: "implicit",
  debug: !1,
  hasCustomAuthorizationHeader: !1,
  throwOnError: !1,
  lockAcquireTimeout: 5e3,
  // 5 seconds
  skipAutoInitialize: !1,
  experimental: {}
};
async function Ji(a, e, t) {
  return await t();
}
const Ot = {};
class ya {
  /**
   * The JWKS used for verifying asymmetric JWTs
   */
  get jwks() {
    var e, t;
    return (t = (e = Ot[this.storageKey]) === null || e === void 0 ? void 0 : e.jwks) !== null && t !== void 0 ? t : { keys: [] };
  }
  set jwks(e) {
    Ot[this.storageKey] = Object.assign(Object.assign({}, Ot[this.storageKey]), { jwks: e });
  }
  get jwks_cached_at() {
    var e, t;
    return (t = (e = Ot[this.storageKey]) === null || e === void 0 ? void 0 : e.cachedAt) !== null && t !== void 0 ? t : Number.MIN_SAFE_INTEGER;
  }
  set jwks_cached_at(e) {
    Ot[this.storageKey] = Object.assign(Object.assign({}, Ot[this.storageKey]), { cachedAt: e });
  }
  /**
   * Create a new client for use in the browser.
   *
   * @example Using supabase-js (recommended)
   * ```ts
   * import { createClient } from '@supabase/supabase-js'
   *
   * const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key')
   * const { data, error } = await supabase.auth.getUser()
   * ```
   *
   * @example Standalone import for bundle-sensitive environments
   * ```ts
   * import { GoTrueClient } from '@supabase/auth-js'
   *
   * const auth = new GoTrueClient({
   *   url: 'https://xyzcompany.supabase.co/auth/v1',
   *   headers: { apikey: 'your-publishable-key' },
   *   storageKey: 'supabase-auth',
   * })
   * ```
   */
  constructor(e) {
    var t, r, n, i;
    this.userStorage = null, this.memoryStorage = null, this.stateChangeEmitters = /* @__PURE__ */ new Map(), this.autoRefreshTicker = null, this.autoRefreshTickTimeout = null, this.visibilityChangedCallback = null, this.refreshingDeferred = null, this.initializePromise = null, this.detectSessionInUrl = !0, this.hasCustomAuthorizationHeader = !1, this.suppressGetSessionWarning = !1, this.lockAcquired = !1, this.pendingInLock = [], this.broadcastChannel = null, this.logger = console.log;
    const s = Object.assign(Object.assign({}, Nh), e);
    if (this.storageKey = s.storageKey, this.instanceID = (t = ya.nextInstanceID[this.storageKey]) !== null && t !== void 0 ? t : 0, ya.nextInstanceID[this.storageKey] = this.instanceID + 1, this.logDebugMessages = !!s.debug, typeof s.debug == "function" && (this.logger = s.debug), this.instanceID > 0 && ce()) {
      const o = `${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;
      console.warn(o), this.logDebugMessages && console.trace(o);
    }
    if (this.persistSession = s.persistSession, this.autoRefreshToken = s.autoRefreshToken, this.experimental = (r = s.experimental) !== null && r !== void 0 ? r : {}, this.admin = new fh({
      url: s.url,
      headers: s.headers,
      fetch: s.fetch,
      experimental: this.experimental
    }), this.url = s.url, this.headers = s.headers, this.fetch = qs(s.fetch), this.lock = s.lock || Ji, this.detectSessionInUrl = s.detectSessionInUrl, this.flowType = s.flowType, this.hasCustomAuthorizationHeader = s.hasCustomAuthorizationHeader, this.throwOnError = s.throwOnError, this.lockAcquireTimeout = s.lockAcquireTimeout, s.lock ? this.lock = s.lock : this.persistSession && ce() && (!((n = globalThis?.navigator) === null || n === void 0) && n.locks) ? this.lock = gh : this.lock = Ji, this.jwks || (this.jwks = { keys: [] }, this.jwks_cached_at = Number.MIN_SAFE_INTEGER), this.mfa = {
      verify: this._verify.bind(this),
      enroll: this._enroll.bind(this),
      unenroll: this._unenroll.bind(this),
      challenge: this._challenge.bind(this),
      listFactors: this._listFactors.bind(this),
      challengeAndVerify: this._challengeAndVerify.bind(this),
      getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this),
      webauthn: new Th(this)
    }, this.oauth = {
      getAuthorizationDetails: this._getAuthorizationDetails.bind(this),
      approveAuthorization: this._approveAuthorization.bind(this),
      denyAuthorization: this._denyAuthorization.bind(this),
      listGrants: this._listOAuthGrants.bind(this),
      revokeGrant: this._revokeOAuthGrant.bind(this)
    }, this.passkey = {
      startRegistration: this._startPasskeyRegistration.bind(this),
      verifyRegistration: this._verifyPasskeyRegistration.bind(this),
      startAuthentication: this._startPasskeyAuthentication.bind(this),
      verifyAuthentication: this._verifyPasskeyAuthentication.bind(this),
      list: this._listPasskeys.bind(this),
      update: this._updatePasskey.bind(this),
      delete: this._deletePasskey.bind(this)
    }, this.persistSession ? (s.storage ? this.storage = s.storage : Hs() ? this.storage = globalThis.localStorage : (this.memoryStorage = {}, this.storage = Hi(this.memoryStorage)), s.userStorage && (this.userStorage = s.userStorage)) : (this.memoryStorage = {}, this.storage = Hi(this.memoryStorage)), ce() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
      try {
        this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey);
      } catch (o) {
        console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available", o);
      }
      (i = this.broadcastChannel) === null || i === void 0 || i.addEventListener("message", async (o) => {
        this._debug("received broadcast notification from other tab or client", o);
        try {
          await this._notifyAllSubscribers(o.data.event, o.data.session, !1);
        } catch (l) {
          this._debug("#broadcastChannel", "error", l);
        }
      });
    }
    s.skipAutoInitialize || this.initialize().catch((o) => {
      this._debug("#initialize()", "error", o);
    });
  }
  /**
   * Returns whether error throwing mode is enabled for this client.
   */
  isThrowOnErrorEnabled() {
    return this.throwOnError;
  }
  /**
   * Centralizes return handling with optional error throwing. When `throwOnError` is enabled
   * and the provided result contains a non-nullish error, the error is thrown instead of
   * being returned. This ensures consistent behavior across all public API methods.
   */
  _returnResult(e) {
    if (this.throwOnError && e && e.error)
      throw e.error;
    return e;
  }
  _logPrefix() {
    return `GoTrueClient@${this.storageKey}:${this.instanceID} (${$s}) ${(/* @__PURE__ */ new Date()).toISOString()}`;
  }
  _debug(...e) {
    return this.logDebugMessages && this.logger(this._logPrefix(), ...e), this;
  }
  /**
   * Initializes the client session either from the url or from storage.
   * This method is automatically called when instantiating the client, but should also be called
   * manually when checking for an error from an auth redirect (oauth, magiclink, password recovery, etc).
   *
   * @category Auth
   */
  async initialize() {
    return this.initializePromise ? await this.initializePromise : (this.initializePromise = (async () => await this._acquireLock(this.lockAcquireTimeout, async () => await this._initialize()))(), await this.initializePromise);
  }
  /**
   * IMPORTANT:
   * 1. Never throw in this method, as it is called from the constructor
   * 2. Never return a session from this method as it would be cached over
   *    the whole lifetime of the client
   */
  async _initialize() {
    var e;
    try {
      let t = {}, r = "none";
      if (ce() && (t = Kc(window.location.href), this._isImplicitGrantCallback(t) ? r = "implicit" : await this._isPKCECallback(t) && (r = "pkce")), ce() && this.detectSessionInUrl && r !== "none") {
        const { data: n, error: i } = await this._getSessionFromURL(t, r);
        if (i) {
          if (this._debug("#_initialize()", "error detecting session from URL", i), Fc(i)) {
            const l = (e = i.details) === null || e === void 0 ? void 0 : e.code;
            if (l === "identity_already_exists" || l === "identity_not_found" || l === "single_identity_not_deletable")
              return { error: i };
          }
          return { error: i };
        }
        const { session: s, redirectType: o } = n;
        return this._debug("#_initialize()", "detected session in URL", s, "redirect type", o), await this._saveSession(s), setTimeout(async () => {
          o === "recovery" ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", s) : await this._notifyAllSubscribers("SIGNED_IN", s);
        }, 0), { error: null };
      }
      return await this._recoverAndRefresh(), { error: null };
    } catch (t) {
      return P(t) ? this._returnResult({ error: t }) : this._returnResult({
        error: new Ie("Unexpected error during initialization", t)
      });
    } finally {
      await this._handleVisibilityChange(), this._debug("#_initialize()", "end");
    }
  }
  /**
   * Creates a new anonymous user.
   *
   * @returns A session where the is_anonymous claim in the access token JWT set to true
   *
   * @category Auth
   *
   * @remarks
   * - Returns an anonymous user
   * - It is recommended to set up captcha for anonymous sign-ins to prevent abuse. You can pass in the captcha token in the `options` param.
   *
   * @example Create an anonymous user
   * ```js
   * const { data, error } = await supabase.auth.signInAnonymously({
   *   options: {
   *     captchaToken
   *   }
   * });
   * ```
   *
   * @exampleResponse Create an anonymous user
   * ```json
   * {
   *   "data": {
   *     "user": {
   *       "id": "11111111-1111-1111-1111-111111111111",
   *       "aud": "authenticated",
   *       "role": "authenticated",
   *       "email": "",
   *       "phone": "",
   *       "last_sign_in_at": "2024-01-01T00:00:00Z",
   *       "app_metadata": {},
   *       "user_metadata": {},
   *       "identities": [],
   *       "created_at": "2024-01-01T00:00:00Z",
   *       "updated_at": "2024-01-01T00:00:00Z",
   *       "is_anonymous": true
   *     },
   *     "session": {
   *       "access_token": "<ACCESS_TOKEN>",
   *       "token_type": "bearer",
   *       "expires_in": 3600,
   *       "expires_at": 1700000000,
   *       "refresh_token": "<REFRESH_TOKEN>",
   *       "user": {
   *         "id": "11111111-1111-1111-1111-111111111111",
   *         "aud": "authenticated",
   *         "role": "authenticated",
   *         "email": "",
   *         "phone": "",
   *         "last_sign_in_at": "2024-01-01T00:00:00Z",
   *         "app_metadata": {},
   *         "user_metadata": {},
   *         "identities": [],
   *         "created_at": "2024-01-01T00:00:00Z",
   *         "updated_at": "2024-01-01T00:00:00Z",
   *         "is_anonymous": true
   *       }
   *     }
   *   },
   *   "error": null
   * }
   * ```
   *
   * @example Create an anonymous user with custom user metadata
   * ```js
   * const { data, error } = await supabase.auth.signInAnonymously({
   *   options: {
   *     data
   *   }
   * })
   * ```
   */
  async signInAnonymously(e) {
    var t, r, n;
    try {
      const i = await F(this.fetch, "POST", `${this.url}/signup`, {
        headers: this.headers,
        body: {
          data: (r = (t = e?.options) === null || t === void 0 ? void 0 : t.data) !== null && r !== void 0 ? r : {},
          gotrue_meta_security: { captcha_token: (n = e?.options) === null || n === void 0 ? void 0 : n.captchaToken }
        },
        xform: Ne
      }), { data: s, error: o } = i;
      if (o || !s)
        return this._returnResult({ data: { user: null, session: null }, error: o });
      const l = s.session, u = s.user;
      return s.session && (await this._saveSession(s.session), await this._notifyAllSubscribers("SIGNED_IN", l)), this._returnResult({ data: { user: u, session: l }, error: null });
    } catch (i) {
      if (P(i))
        return this._returnResult({ data: { user: null, session: null }, error: i });
      throw i;
    }
  }
  /**
   * Creates a new user.
   *
   * Be aware that if a user account exists in the system you may get back an
   * error message that attempts to hide this information from the user.
   * This method has support for PKCE via email signups. The PKCE flow cannot be used when autoconfirm is enabled.
   *
   * @returns A logged-in session if the server has "autoconfirm" ON
   * @returns A user if the server has "autoconfirm" OFF
   *
   * @category Auth
   *
   * @remarks
   * - By default, the user needs to verify their email address before logging in. To turn this off, disable **Confirm email** in [your project](/dashboard/project/_/auth/providers).
   * - **Confirm email** determines if users need to confirm their email address after signing up.
   *   - If **Confirm email** is enabled, a `user` is returned but `session` is null.
   *   - If **Confirm email** is disabled, both a `user` and a `session` are returned.
   * - When the user confirms their email address, they are redirected to the [`SITE_URL`](/docs/guides/auth/redirect-urls#use-wildcards-in-redirect-urls) by default. You can modify your `SITE_URL` or add additional redirect URLs in [your project](/dashboard/project/_/auth/url-configuration).
   * - If signUp() is called for an existing confirmed user:
   *   - When both **Confirm email** and **Confirm phone** (even when phone provider is disabled) are enabled in [your project](/dashboard/project/_/auth/providers), an obfuscated/fake user object is returned.
   *   - When either **Confirm email** or **Confirm phone** (even when phone provider is disabled) is disabled, the error message, `User already registered` is returned.
   * - To fetch the currently logged-in user, refer to [`getUser()`](/docs/reference/javascript/auth-getuser).
   *
   * @example Sign up with an email and password
   * ```js
   * const { data, error } = await supabase.auth.signUp({
   *   email: 'example@email.com',
   *   password: 'example-password',
   * })
   * ```
   *
   * @exampleResponse Sign up with an email and password
   * ```json
   * // Some fields may be null if "confirm email" is enabled.
   * {
   *   "data": {
   *     "user": {
   *       "id": "11111111-1111-1111-1111-111111111111",
   *       "aud": "authenticated",
   *       "role": "authenticated",
   *       "email": "example@email.com",
   *       "email_confirmed_at": "2024-01-01T00:00:00Z",
   *       "phone": "",
   *       "last_sign_in_at": "2024-01-01T00:00:00Z",
   *       "app_metadata": {
   *         "provider": "email",
   *         "providers": [
   *           "email"
   *         ]
   *       },
   *       "user_metadata": {},
   *       "identities": [
   *         {
   *           "identity_id": "22222222-2222-2222-2222-222222222222",
   *           "id": "11111111-1111-1111-1111-111111111111",
   *           "user_id": "11111111-1111-1111-1111-111111111111",
   *           "identity_data": {
   *             "email": "example@email.com",
   *             "email_verified": false,
   *             "phone_verified": false,
   *             "sub": "11111111-1111-1111-1111-111111111111"
   *           },
   *           "provider": "email",
   *           "last_sign_in_at": "2024-01-01T00:00:00Z",
   *           "created_at": "2024-01-01T00:00:00Z",
   *           "updated_at": "2024-01-01T00:00:00Z",
   *           "email": "example@email.com"
   *         }
   *       ],
   *       "created_at": "2024-01-01T00:00:00Z",
   *       "updated_at": "2024-01-01T00:00:00Z"
   *     },
   *     "session": {
   *       "access_token": "<ACCESS_TOKEN>",
   *       "token_type": "bearer",
   *       "expires_in": 3600,
   *       "expires_at": 1700000000,
   *       "refresh_token": "<REFRESH_TOKEN>",
   *       "user": {
   *         "id": "11111111-1111-1111-1111-111111111111",
   *         "aud": "authenticated",
   *         "role": "authenticated",
   *         "email": "example@email.com",
   *         "email_confirmed_at": "2024-01-01T00:00:00Z",
   *         "phone": "",
   *         "last_sign_in_at": "2024-01-01T00:00:00Z",
   *         "app_metadata": {
   *           "provider": "email",
   *           "providers": [
   *             "email"
   *           ]
   *         },
   *         "user_metadata": {},
   *         "identities": [
   *           {
   *             "identity_id": "22222222-2222-2222-2222-222222222222",
   *             "id": "11111111-1111-1111-1111-111111111111",
   *             "user_id": "11111111-1111-1111-1111-111111111111",
   *             "identity_data": {
   *               "email": "example@email.com",
   *               "email_verified": false,
   *               "phone_verified": false,
   *               "sub": "11111111-1111-1111-1111-111111111111"
   *             },
   *             "provider": "email",
   *             "last_sign_in_at": "2024-01-01T00:00:00Z",
   *             "created_at": "2024-01-01T00:00:00Z",
   *             "updated_at": "2024-01-01T00:00:00Z",
   *             "email": "example@email.com"
   *           }
   *         ],
   *         "created_at": "2024-01-01T00:00:00Z",
   *         "updated_at": "2024-01-01T00:00:00Z"
   *       }
   *     }
   *   },
   *   "error": null
   * }
   * ```
   *
   * @example Sign up with a phone number and password (SMS)
   * ```js
   * const { data, error } = await supabase.auth.signUp({
   *   phone: '123456789',
   *   password: 'example-password',
   *   options: {
   *     channel: 'sms'
   *   }
   * })
   * ```
   *
   * @exampleDescription Sign up with a phone number and password (whatsapp)
   * The user will be sent a WhatsApp message which contains a OTP. By default, a given user can only request a OTP once every 60 seconds. Note that a user will need to have a valid WhatsApp account that is linked to Twilio in order to use this feature.
   *
   * @example Sign up with a phone number and password (whatsapp)
   * ```js
   * const { data, error } = await supabase.auth.signUp({
   *   phone: '123456789',
   *   password: 'example-password',
   *   options: {
   *     channel: 'whatsapp'
   *   }
   * })
   * ```
   *
   * @example Sign up with additional user metadata
   * ```js
   * const { data, error } = await supabase.auth.signUp(
   *   {
   *     email: 'example@email.com',
   *     password: 'example-password',
   *     options: {
   *       data: {
   *         first_name: 'John',
   *         age: 27,
   *       }
   *     }
   *   }
   * )
   * ```
   *
   * @exampleDescription Sign up with a redirect URL
   * - See [redirect URLs and wildcards](/docs/guides/auth/redirect-urls#use-wildcards-in-redirect-urls) to add additional redirect URLs to your project.
   *
   * @example Sign up with a redirect URL
   * ```js
   * const { data, error } = await supabase.auth.signUp(
   *   {
   *     email: 'example@email.com',
   *     password: 'example-password',
   *     options: {
   *       emailRedirectTo: 'https://example.com/welcome'
   *     }
   *   }
   * )
   * ```
   */
  async signUp(e) {
    var t, r, n;
    try {
      let i;
      if ("email" in e) {
        const { email: f, password: d, options: g } = e;
        let b = null, v = null;
        this.flowType === "pkce" && ([b, v] = await xt(this.storage, this.storageKey)), i = await F(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          redirectTo: g?.emailRedirectTo,
          body: {
            email: f,
            password: d,
            data: (t = g?.data) !== null && t !== void 0 ? t : {},
            gotrue_meta_security: { captcha_token: g?.captchaToken },
            code_challenge: b,
            code_challenge_method: v
          },
          xform: Ne
        });
      } else if ("phone" in e) {
        const { phone: f, password: d, options: g } = e;
        i = await F(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            phone: f,
            password: d,
            data: (r = g?.data) !== null && r !== void 0 ? r : {},
            channel: (n = g?.channel) !== null && n !== void 0 ? n : "sms",
            gotrue_meta_security: { captcha_token: g?.captchaToken }
          },
          xform: Ne
        });
      } else
        throw new qa("You must provide either an email or phone number and a password");
      const { data: s, error: o } = i;
      if (o || !s)
        return await le(this.storage, `${this.storageKey}-code-verifier`), this._returnResult({ data: { user: null, session: null }, error: o });
      const l = s.session, u = s.user;
      return s.session && (await this._saveSession(s.session), await this._notifyAllSubscribers("SIGNED_IN", l)), this._returnResult({ data: { user: u, session: l }, error: null });
    } catch (i) {
      if (await le(this.storage, `${this.storageKey}-code-verifier`), P(i))
        return this._returnResult({ data: { user: null, session: null }, error: i });
      throw i;
    }
  }
  /**
   * Log in an existing user with an email and password or phone and password.
   *
   * Be aware that you may get back an error message that will not distinguish
   * between the cases where the account does not exist or that the
   * email/phone and password combination is wrong or that the account can only
   * be accessed via social login.
   *
   * @category Auth
   *
   * @remarks
   * - Requires either an email and password or a phone number and password.
   *
   * @example Sign in with email and password
   * ```js
   * const { data, error } = await supabase.auth.signInWithPassword({
   *   email: 'example@email.com',
   *   password: 'example-password',
   * })
   * ```
   *
   * @exampleResponse Sign in with email and password
   * ```json
   * {
   *   "data": {
   *     "user": {
   *       "id": "11111111-1111-1111-1111-111111111111",
   *       "aud": "authenticated",
   *       "role": "authenticated",
   *       "email": "example@email.com",
   *       "email_confirmed_at": "2024-01-01T00:00:00Z",
   *       "phone": "",
   *       "last_sign_in_at": "2024-01-01T00:00:00Z",
   *       "app_metadata": {
   *         "provider": "email",
   *         "providers": [
   *           "email"
   *         ]
   *       },
   *       "user_metadata": {},
   *       "identities": [
   *         {
   *           "identity_id": "22222222-2222-2222-2222-222222222222",
   *           "id": "11111111-1111-1111-1111-111111111111",
   *           "user_id": "11111111-1111-1111-1111-111111111111",
   *           "identity_data": {
   *             "email": "example@email.com",
   *             "email_verified": false,
   *             "phone_verified": false,
   *             "sub": "11111111-1111-1111-1111-111111111111"
   *           },
   *           "provider": "email",
   *           "last_sign_in_at": "2024-01-01T00:00:00Z",
   *           "created_at": "2024-01-01T00:00:00Z",
   *           "updated_at": "2024-01-01T00:00:00Z",
   *           "email": "example@email.com"
   *         }
   *       ],
   *       "created_at": "2024-01-01T00:00:00Z",
   *       "updated_at": "2024-01-01T00:00:00Z"
   *     },
   *     "session": {
   *       "access_token": "<ACCESS_TOKEN>",
   *       "token_type": "bearer",
   *       "expires_in": 3600,
   *       "expires_at": 1700000000,
   *       "refresh_token": "<REFRESH_TOKEN>",
   *       "user": {
   *         "id": "11111111-1111-1111-1111-111111111111",
   *         "aud": "authenticated",
   *         "role": "authenticated",
   *         "email": "example@email.com",
   *         "email_confirmed_at": "2024-01-01T00:00:00Z",
   *         "phone": "",
   *         "last_sign_in_at": "2024-01-01T00:00:00Z",
   *         "app_metadata": {
   *           "provider": "email",
   *           "providers": [
   *             "email"
   *           ]
   *         },
   *         "user_metadata": {},
   *         "identities": [
   *           {
   *             "identity_id": "22222222-2222-2222-2222-222222222222",
   *             "id": "11111111-1111-1111-1111-111111111111",
   *             "user_id": "11111111-1111-1111-1111-111111111111",
   *             "identity_data": {
   *               "email": "example@email.com",
   *               "email_verified": false,
   *               "phone_verified": false,
   *               "sub": "11111111-1111-1111-1111-111111111111"
   *             },
   *             "provider": "email",
   *             "last_sign_in_at": "2024-01-01T00:00:00Z",
   *             "created_at": "2024-01-01T00:00:00Z",
   *             "updated_at": "2024-01-01T00:00:00Z",
   *             "email": "example@email.com"
   *           }
   *         ],
   *         "created_at": "2024-01-01T00:00:00Z",
   *         "updated_at": "2024-01-01T00:00:00Z"
   *       }
   *     }
   *   },
   *   "error": null
   * }
   * ```
   *
   * @example Sign in with phone and password
   * ```js
   * const { data, error } = await supabase.auth.signInWithPassword({
   *   phone: '+13334445555',
   *   password: 'some-password',
   * })
   * ```
   */
  async signInWithPassword(e) {
    try {
      let t;
      if ("email" in e) {
        const { email: i, password: s, options: o } = e;
        t = await F(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            email: i,
            password: s,
            gotrue_meta_security: { captcha_token: o?.captchaToken }
          },
          xform: Bi
        });
      } else if ("phone" in e) {
        const { phone: i, password: s, options: o } = e;
        t = await F(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            phone: i,
            password: s,
            gotrue_meta_security: { captcha_token: o?.captchaToken }
          },
          xform: Bi
        });
      } else
        throw new qa("You must provide either an email or phone number and a password");
      const { data: r, error: n } = t;
      if (n)
        return this._returnResult({ data: { user: null, session: null }, error: n });
      if (!r || !r.session || !r.user) {
        const i = new Ct();
        return this._returnResult({ data: { user: null, session: null }, error: i });
      }
      return r.session && (await this._saveSession(r.session), await this._notifyAllSubscribers("SIGNED_IN", r.session)), this._returnResult({
        data: Object.assign({ user: r.user, session: r.session }, r.weak_password ? { weakPassword: r.weak_password } : null),
        error: n
      });
    } catch (t) {
      if (P(t))
        return this._returnResult({ data: { user: null, session: null }, error: t });
      throw t;
    }
  }
  /**
   * Log in an existing user via a third-party provider.
   * This method supports the PKCE flow.
   *
   * @category Auth
   *
   * @remarks
   * - This method is used for signing in using [Social Login (OAuth) providers](/docs/guides/auth#configure-third-party-providers).
   * - It works by redirecting your application to the provider's authorization screen, before bringing back the user to your app.
   *
   * @example Sign in using a third-party provider
   * ```js
   * const { data, error } = await supabase.auth.signInWithOAuth({
   *   provider: 'github'
   * })
   * ```
   *
   * @exampleResponse Sign in using a third-party provider
   * ```json
   * {
   *   data: {
   *     provider: 'github',
   *     url: <PROVIDER_URL_TO_REDIRECT_TO>
   *   },
   *   error: null
   * }
   * ```
   *
   * @exampleDescription Sign in using a third-party provider with redirect
   * - When the OAuth provider successfully authenticates the user, they are redirected to the URL specified in the `redirectTo` parameter. This parameter defaults to the [`SITE_URL`](/docs/guides/auth/redirect-urls#use-wildcards-in-redirect-urls). It does not redirect the user immediately after invoking this method.
   * - See [redirect URLs and wildcards](/docs/guides/auth/redirect-urls#use-wildcards-in-redirect-urls) to add additional redirect URLs to your project.
   *
   * @example Sign in using a third-party provider with redirect
   * ```js
   * const { data, error } = await supabase.auth.signInWithOAuth({
   *   provider: 'github',
   *   options: {
   *     redirectTo: 'https://example.com/welcome'
   *   }
   * })
   * ```
   *
   * @exampleDescription Sign in with scopes and access provider tokens
   * If you need additional access from an OAuth provider, in order to access provider specific APIs in the name of the user, you can do this by passing in the scopes the user should authorize for your application. Note that the `scopes` option takes in **a space-separated list** of scopes.
   *
   * Because OAuth sign-in often includes redirects, you should register an `onAuthStateChange` callback immediately after you create the Supabase client. This callback will listen for the presence of `provider_token` and `provider_refresh_token` properties on the `session` object and store them in local storage. The client library will emit these values **only once** immediately after the user signs in. You can then access them by looking them up in local storage, or send them to your backend servers for further processing.
   *
   * Finally, make sure you remove them from local storage on the `SIGNED_OUT` event. If the OAuth provider supports token revocation, make sure you call those APIs either from the frontend or schedule them to be called on the backend.
   *
   * @example Sign in with scopes and access provider tokens
   * ```js
   * // Register this immediately after calling createClient!
   * // Because signInWithOAuth causes a redirect, you need to fetch the
   * // provider tokens from the callback.
   * supabase.auth.onAuthStateChange((event, session) => {
   *   if (session && session.provider_token) {
   *     window.localStorage.setItem('oauth_provider_token', session.provider_token)
   *   }
   *
   *   if (session && session.provider_refresh_token) {
   *     window.localStorage.setItem('oauth_provider_refresh_token', session.provider_refresh_token)
   *   }
   *
   *   if (event === 'SIGNED_OUT') {
   *     window.localStorage.removeItem('oauth_provider_token')
   *     window.localStorage.removeItem('oauth_provider_refresh_token')
   *   }
   * })
   *
   * // Call this on your Sign in with GitHub button to initiate OAuth
   * // with GitHub with the requested elevated scopes.
   * await supabase.auth.signInWithOAuth({
   *   provider: 'github',
   *   options: {
   *     scopes: 'repo gist notifications'
   *   }
   * })
   * ```
   */
  async signInWithOAuth(e) {
    var t, r, n, i;
    return await this._handleProviderSignIn(e.provider, {
      redirectTo: (t = e.options) === null || t === void 0 ? void 0 : t.redirectTo,
      scopes: (r = e.options) === null || r === void 0 ? void 0 : r.scopes,
      queryParams: (n = e.options) === null || n === void 0 ? void 0 : n.queryParams,
      skipBrowserRedirect: (i = e.options) === null || i === void 0 ? void 0 : i.skipBrowserRedirect
    });
  }
  /**
   * Log in an existing user by exchanging an Auth Code issued during the PKCE flow.
   *
   * @category Auth
   *
   * @remarks
   * - Used when `flowType` is set to `pkce` in client options.
   *
   * @example Exchange Auth Code
   * ```js
   * supabase.auth.exchangeCodeForSession('34e770dd-9ff9-416c-87fa-43b31d7ef225')
   * ```
   *
   * @exampleResponse Exchange Auth Code
   * ```json
   * {
   *   "data": {
   *     session: {
   *       access_token: '<ACCESS_TOKEN>',
   *       token_type: 'bearer',
   *       expires_in: 3600,
   *       expires_at: 1700000000,
   *       refresh_token: '<REFRESH_TOKEN>',
   *       user: {
   *         id: '11111111-1111-1111-1111-111111111111',
   *         aud: 'authenticated',
   *         role: 'authenticated',
   *         email: 'example@email.com'
   *         email_confirmed_at: '2024-01-01T00:00:00Z',
   *         phone: '',
   *         confirmation_sent_at: '2024-01-01T00:00:00Z',
   *         confirmed_at: '2024-01-01T00:00:00Z',
   *         last_sign_in_at: '2024-01-01T00:00:00Z',
   *         app_metadata: {
   *           "provider": "email",
   *           "providers": [
   *             "email",
   *             "<OTHER_PROVIDER>"
   *           ]
   *         },
   *         user_metadata: {
   *           email: 'email@email.com',
   *           email_verified: true,
   *           full_name: 'User Name',
   *           iss: '<ISS>',
   *           name: 'User Name',
   *           phone_verified: false,
   *           provider_id: '<PROVIDER_ID>',
   *           sub: '<SUB>'
   *         },
   *         identities: [
   *           {
   *             "identity_id": "22222222-2222-2222-2222-222222222222",
   *             "id": "11111111-1111-1111-1111-111111111111",
   *             "user_id": "11111111-1111-1111-1111-111111111111",
   *             "identity_data": {
   *               "email": "example@email.com",
   *               "email_verified": false,
   *               "phone_verified": false,
   *               "sub": "11111111-1111-1111-1111-111111111111"
   *             },
   *             "provider": "email",
   *             "last_sign_in_at": "2024-01-01T00:00:00Z",
   *             "created_at": "2024-01-01T00:00:00Z",
   *             "updated_at": "2024-01-01T00:00:00Z",
   *             "email": "email@example.com"
   *           },
   *           {
   *             "identity_id": "33333333-3333-3333-3333-333333333333",
   *             "id": "<ID>",
   *             "user_id": "<USER_ID>",
   *             "identity_data": {
   *               "email": "example@email.com",
   *               "email_verified": true,
   *               "full_name": "User Name",
   *               "iss": "<ISS>",
   *               "name": "User Name",
   *               "phone_verified": false,
   *               "provider_id": "<PROVIDER_ID>",
   *               "sub": "<SUB>"
   *             },
   *             "provider": "<PROVIDER>",
   *             "last_sign_in_at": "2024-01-01T00:00:00Z",
   *             "created_at": "2024-01-01T00:00:00Z",
   *             "updated_at": "2024-01-01T00:00:00Z",
   *             "email": "example@email.com"
   *           }
   *         ],
   *         created_at: '2024-01-01T00:00:00Z',
   *         updated_at: '2024-01-01T00:00:00Z',
   *         is_anonymous: false
   *       },
   *       provider_token: '<PROVIDER_TOKEN>',
   *       provider_refresh_token: '<PROVIDER_REFRESH_TOKEN>'
   *     },
   *     user: {
   *       id: '11111111-1111-1111-1111-111111111111',
   *       aud: 'authenticated',
   *       role: 'authenticated',
   *       email: 'example@email.com',
   *       email_confirmed_at: '2024-01-01T00:00:00Z',
   *       phone: '',
   *       confirmation_sent_at: '2024-01-01T00:00:00Z',
   *       confirmed_at: '2024-01-01T00:00:00Z',
   *       last_sign_in_at: '2024-01-01T00:00:00Z',
   *       app_metadata: {
   *         provider: 'email',
   *         providers: [
   *           "email",
   *           "<OTHER_PROVIDER>"
   *         ]
   *       },
   *       user_metadata: {
   *         email: 'email@email.com',
   *         email_verified: true,
   *         full_name: 'User Name',
   *         iss: '<ISS>',
   *         name: 'User Name',
   *         phone_verified: false,
   *         provider_id: '<PROVIDER_ID>',
   *         sub: '<SUB>'
   *       },
   *       identities: [
   *         {
   *           "identity_id": "22222222-2222-2222-2222-222222222222",
   *           "id": "11111111-1111-1111-1111-111111111111",
   *           "user_id": "11111111-1111-1111-1111-111111111111",
   *           "identity_data": {
   *             "email": "example@email.com",
   *             "email_verified": false,
   *             "phone_verified": false,
   *             "sub": "11111111-1111-1111-1111-111111111111"
   *           },
   *           "provider": "email",
   *           "last_sign_in_at": "2024-01-01T00:00:00Z",
   *           "created_at": "2024-01-01T00:00:00Z",
   *           "updated_at": "2024-01-01T00:00:00Z",
   *           "email": "email@example.com"
   *         },
   *         {
   *           "identity_id": "33333333-3333-3333-3333-333333333333",
   *           "id": "<ID>",
   *           "user_id": "<USER_ID>",
   *           "identity_data": {
   *             "email": "example@email.com",
   *             "email_verified": true,
   *             "full_name": "User Name",
   *             "iss": "<ISS>",
   *             "name": "User Name",
   *             "phone_verified": false,
   *             "provider_id": "<PROVIDER_ID>",
   *             "sub": "<SUB>"
   *           },
   *           "provider": "<PROVIDER>",
   *           "last_sign_in_at": "2024-01-01T00:00:00Z",
   *           "created_at": "2024-01-01T00:00:00Z",
   *           "updated_at": "2024-01-01T00:00:00Z",
   *           "email": "example@email.com"
   *         }
   *       ],
   *       created_at: '2024-01-01T00:00:00Z',
   *       updated_at: '2024-01-01T00:00:00Z',
   *       is_anonymous: false
   *     },
   *     redirectType: null
   *   },
   *   "error": null
   * }
   * ```
   */
  async exchangeCodeForSession(e) {
    return await this.initializePromise, this._acquireLock(this.lockAcquireTimeout, async () => this._exchangeCodeForSession(e));
  }
  /**
   * Signs in a user by verifying a message signed by the user's private key.
   * Supports Ethereum (via Sign-In-With-Ethereum) & Solana (Sign-In-With-Solana) standards,
   * both of which derive from the EIP-4361 standard
   * With slight variation on Solana's side.
   * @reference https://eips.ethereum.org/EIPS/eip-4361
   *
   * @category Auth
   *
   * @remarks
   * - Uses a Web3 (Ethereum, Solana) wallet to sign a user in.
   * - Read up on the [potential for abuse](/docs/guides/auth/auth-web3#potential-for-abuse) before using it.
   *
   * @example Sign in with Solana or Ethereum (Window API)
   * ```js
   *   // uses window.ethereum for the wallet
   *   const { data, error } = await supabase.auth.signInWithWeb3({
   *     chain: 'ethereum',
   *     statement: 'I accept the Terms of Service at https://example.com/tos'
   *   })
   *
   *   // uses window.solana for the wallet
   *   const { data, error } = await supabase.auth.signInWithWeb3({
   *     chain: 'solana',
   *     statement: 'I accept the Terms of Service at https://example.com/tos'
   *   })
   * ```
   *
   * @example Sign in with Ethereum (Message and Signature)
   * ```js
   *   const { data, error } = await supabase.auth.signInWithWeb3({
   *     chain: 'ethereum',
   *     message: '<sign in with ethereum message>',
   *     signature: '<hex of the ethereum signature over the message>',
   *   })
   * ```
   *
   * @example Sign in with Solana (Brave)
   * ```js
   *   const { data, error } = await supabase.auth.signInWithWeb3({
   *     chain: 'solana',
   *     statement: 'I accept the Terms of Service at https://example.com/tos',
   *     wallet: window.braveSolana
   *   })
   * ```
   *
   * @example Sign in with Solana (Wallet Adapter)
   * ```jsx
   *   function SignInButton() {
   *   const wallet = useWallet()
   *
   *   return (
   *     <>
   *       {wallet.connected ? (
   *         <button
   *           onClick={() => {
   *             supabase.auth.signInWithWeb3({
   *               chain: 'solana',
   *               statement: 'I accept the Terms of Service at https://example.com/tos',
   *               wallet,
   *             })
   *           }}
   *         >
   *           Sign in with Solana
   *         </button>
   *       ) : (
   *         <WalletMultiButton />
   *       )}
   *     </>
   *   )
   * }
   *
   * function App() {
   *   const endpoint = clusterApiUrl('devnet')
   *   const wallets = useMemo(() => [], [])
   *
   *   return (
   *     <ConnectionProvider endpoint={endpoint}>
   *       <WalletProvider wallets={wallets}>
   *         <WalletModalProvider>
   *           <SignInButton />
   *         </WalletModalProvider>
   *       </WalletProvider>
   *     </ConnectionProvider>
   *   )
   * }
   * ```
   */
  async signInWithWeb3(e) {
    const { chain: t } = e;
    switch (t) {
      case "ethereum":
        return await this.signInWithEthereum(e);
      case "solana":
        return await this.signInWithSolana(e);
      default:
        throw new Error(`@supabase/auth-js: Unsupported chain "${t}"`);
    }
  }
  async signInWithEthereum(e) {
    var t, r, n, i, s, o, l, u, f, d, g;
    let b, v;
    if ("message" in e)
      b = e.message, v = e.signature;
    else {
      const { chain: A, wallet: D, statement: x, options: O } = e;
      let _;
      if (ce())
        if (typeof D == "object")
          _ = D;
        else {
          const L = window;
          if ("ethereum" in L && typeof L.ethereum == "object" && "request" in L.ethereum && typeof L.ethereum.request == "function")
            _ = L.ethereum;
          else
            throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.");
        }
      else {
        if (typeof D != "object" || !O?.url)
          throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
        _ = D;
      }
      const I = new URL((t = O?.url) !== null && t !== void 0 ? t : window.location.href), j = await _.request({
        method: "eth_requestAccounts"
      }).then((L) => L).catch(() => {
        throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid");
      });
      if (!j || j.length === 0)
        throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");
      const C = Gs(j[0]);
      let S = (r = O?.signInWithEthereum) === null || r === void 0 ? void 0 : r.chainId;
      if (!S) {
        const L = await _.request({
          method: "eth_chainId"
        });
        S = ph(L);
      }
      const $ = {
        domain: I.host,
        address: C,
        statement: x,
        uri: I.href,
        version: "1",
        chainId: S,
        nonce: (n = O?.signInWithEthereum) === null || n === void 0 ? void 0 : n.nonce,
        issuedAt: (s = (i = O?.signInWithEthereum) === null || i === void 0 ? void 0 : i.issuedAt) !== null && s !== void 0 ? s : /* @__PURE__ */ new Date(),
        expirationTime: (o = O?.signInWithEthereum) === null || o === void 0 ? void 0 : o.expirationTime,
        notBefore: (l = O?.signInWithEthereum) === null || l === void 0 ? void 0 : l.notBefore,
        requestId: (u = O?.signInWithEthereum) === null || u === void 0 ? void 0 : u.requestId,
        resources: (f = O?.signInWithEthereum) === null || f === void 0 ? void 0 : f.resources
      };
      b = bh($), v = await _.request({
        method: "personal_sign",
        params: [yh(b), C]
      });
    }
    try {
      const { data: A, error: D } = await F(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
        headers: this.headers,
        body: Object.assign({
          chain: "ethereum",
          message: b,
          signature: v
        }, !((d = e.options) === null || d === void 0) && d.captchaToken ? { gotrue_meta_security: { captcha_token: (g = e.options) === null || g === void 0 ? void 0 : g.captchaToken } } : null),
        xform: Ne
      });
      if (D)
        throw D;
      if (!A || !A.session || !A.user) {
        const x = new Ct();
        return this._returnResult({ data: { user: null, session: null }, error: x });
      }
      return A.session && (await this._saveSession(A.session), await this._notifyAllSubscribers("SIGNED_IN", A.session)), this._returnResult({ data: Object.assign({}, A), error: D });
    } catch (A) {
      if (P(A))
        return this._returnResult({ data: { user: null, session: null }, error: A });
      throw A;
    }
  }
  async signInWithSolana(e) {
    var t, r, n, i, s, o, l, u, f, d, g, b;
    let v, A;
    if ("message" in e)
      v = e.message, A = e.signature;
    else {
      const { chain: D, wallet: x, statement: O, options: _ } = e;
      let I;
      if (ce())
        if (typeof x == "object")
          I = x;
        else {
          const C = window;
          if ("solana" in C && typeof C.solana == "object" && ("signIn" in C.solana && typeof C.solana.signIn == "function" || "signMessage" in C.solana && typeof C.solana.signMessage == "function"))
            I = C.solana;
          else
            throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.");
        }
      else {
        if (typeof x != "object" || !_?.url)
          throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
        I = x;
      }
      const j = new URL((t = _?.url) !== null && t !== void 0 ? t : window.location.href);
      if ("signIn" in I && I.signIn) {
        const C = await I.signIn(Object.assign(Object.assign(Object.assign({ issuedAt: (/* @__PURE__ */ new Date()).toISOString() }, _?.signInWithSolana), {
          // non-overridable properties
          version: "1",
          domain: j.host,
          uri: j.href
        }), O ? { statement: O } : null));
        let S;
        if (Array.isArray(C) && C[0] && typeof C[0] == "object")
          S = C[0];
        else if (C && typeof C == "object" && "signedMessage" in C && "signature" in C)
          S = C;
        else
          throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");
        if ("signedMessage" in S && "signature" in S && (typeof S.signedMessage == "string" || S.signedMessage instanceof Uint8Array) && S.signature instanceof Uint8Array)
          v = typeof S.signedMessage == "string" ? S.signedMessage : new TextDecoder().decode(S.signedMessage), A = S.signature;
        else
          throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields");
      } else {
        if (!("signMessage" in I) || typeof I.signMessage != "function" || !("publicKey" in I) || typeof I != "object" || !I.publicKey || !("toBase58" in I.publicKey) || typeof I.publicKey.toBase58 != "function")
          throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");
        v = [
          `${j.host} wants you to sign in with your Solana account:`,
          I.publicKey.toBase58(),
          ...O ? ["", O, ""] : [""],
          "Version: 1",
          `URI: ${j.href}`,
          `Issued At: ${(n = (r = _?.signInWithSolana) === null || r === void 0 ? void 0 : r.issuedAt) !== null && n !== void 0 ? n : (/* @__PURE__ */ new Date()).toISOString()}`,
          ...!((i = _?.signInWithSolana) === null || i === void 0) && i.notBefore ? [`Not Before: ${_.signInWithSolana.notBefore}`] : [],
          ...!((s = _?.signInWithSolana) === null || s === void 0) && s.expirationTime ? [`Expiration Time: ${_.signInWithSolana.expirationTime}`] : [],
          ...!((o = _?.signInWithSolana) === null || o === void 0) && o.chainId ? [`Chain ID: ${_.signInWithSolana.chainId}`] : [],
          ...!((l = _?.signInWithSolana) === null || l === void 0) && l.nonce ? [`Nonce: ${_.signInWithSolana.nonce}`] : [],
          ...!((u = _?.signInWithSolana) === null || u === void 0) && u.requestId ? [`Request ID: ${_.signInWithSolana.requestId}`] : [],
          ...!((d = (f = _?.signInWithSolana) === null || f === void 0 ? void 0 : f.resources) === null || d === void 0) && d.length ? [
            "Resources",
            ..._.signInWithSolana.resources.map((S) => `- ${S}`)
          ] : []
        ].join(`
`);
        const C = await I.signMessage(new TextEncoder().encode(v), "utf8");
        if (!C || !(C instanceof Uint8Array))
          throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");
        A = C;
      }
    }
    try {
      const { data: D, error: x } = await F(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
        headers: this.headers,
        body: Object.assign({ chain: "solana", message: v, signature: dt(A) }, !((g = e.options) === null || g === void 0) && g.captchaToken ? { gotrue_meta_security: { captcha_token: (b = e.options) === null || b === void 0 ? void 0 : b.captchaToken } } : null),
        xform: Ne
      });
      if (x)
        throw x;
      if (!D || !D.session || !D.user) {
        const O = new Ct();
        return this._returnResult({ data: { user: null, session: null }, error: O });
      }
      return D.session && (await this._saveSession(D.session), await this._notifyAllSubscribers("SIGNED_IN", D.session)), this._returnResult({ data: Object.assign({}, D), error: x });
    } catch (D) {
      if (P(D))
        return this._returnResult({ data: { user: null, session: null }, error: D });
      throw D;
    }
  }
  async _exchangeCodeForSession(e) {
    const t = await ut(this.storage, `${this.storageKey}-code-verifier`), [r, n] = (t ?? "").split("/");
    try {
      if (!r && this.flowType === "pkce")
        throw new Uc();
      const { data: i, error: s } = await F(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
        headers: this.headers,
        body: {
          auth_code: e,
          code_verifier: r
        },
        xform: Ne
      });
      if (await le(this.storage, `${this.storageKey}-code-verifier`), s)
        throw s;
      if (!i || !i.session || !i.user) {
        const o = new Ct();
        return this._returnResult({
          data: { user: null, session: null, redirectType: null },
          error: o
        });
      }
      return i.session && (await this._saveSession(i.session), await this._notifyAllSubscribers(n === "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", i.session)), this._returnResult({ data: Object.assign(Object.assign({}, i), { redirectType: n ?? null }), error: s });
    } catch (i) {
      if (await le(this.storage, `${this.storageKey}-code-verifier`), P(i))
        return this._returnResult({
          data: { user: null, session: null, redirectType: null },
          error: i
        });
      throw i;
    }
  }
  /**
   * Allows signing in with an OIDC ID token. The authentication provider used
   * should be enabled and configured.
   *
   * @category Auth
   *
   * @remarks
   * - Use an ID token to sign in.
   * - Especially useful when implementing sign in using native platform dialogs in mobile or desktop apps using Sign in with Apple or Sign in with Google on iOS and Android.
   * - You can also use Google's [One Tap](https://developers.google.com/identity/gsi/web/guides/display-google-one-tap) and [Automatic sign-in](https://developers.google.com/identity/gsi/web/guides/automatic-sign-in-sign-out) via this API.
   *
   * @example Sign In using ID Token
   * ```js
   * const { data, error } = await supabase.auth.signInWithIdToken({
   *   provider: 'google',
   *   token: 'your-id-token'
   * })
   * ```
   *
   * @exampleResponse Sign In using ID Token
   * ```json
   * {
   *   "data": {
   *     "user": {
   *       "id": "11111111-1111-1111-1111-111111111111",
   *       "aud": "authenticated",
   *       "role": "authenticated",
   *       "last_sign_in_at": "2024-01-01T00:00:00Z",
   *       "app_metadata": {
   *         ...
   *       },
   *       "user_metadata": {
   *         ...
   *       },
   *       "identities": [
   *         {
   *           "identity_id": "22222222-2222-2222-2222-222222222222",
   *           "provider": "google",
   *         }
   *       ],
   *       "created_at": "2024-01-01T00:00:00Z",
   *       "updated_at": "2024-01-01T00:00:00Z",
   *     },
   *     "session": {
   *       "access_token": "<ACCESS_TOKEN>",
   *       "token_type": "bearer",
   *       "expires_in": 3600,
   *       "expires_at": 1700000000,
   *       "refresh_token": "<REFRESH_TOKEN>",
   *       "user": {
   *         "id": "11111111-1111-1111-1111-111111111111",
   *         "aud": "authenticated",
   *         "role": "authenticated",
   *         "last_sign_in_at": "2024-01-01T00:00:00Z",
   *         "app_metadata": {
   *           ...
   *         },
   *         "user_metadata": {
   *           ...
   *         },
   *         "identities": [
   *           {
   *             "identity_id": "22222222-2222-2222-2222-222222222222",
   *             "provider": "google",
   *           }
   *         ],
   *         "created_at": "2024-01-01T00:00:00Z",
   *         "updated_at": "2024-01-01T00:00:00Z",
   *       }
   *     }
   *   },
   *   "error": null
   * }
   * ```
   */
  async signInWithIdToken(e) {
    try {
      const { options: t, provider: r, token: n, access_token: i, nonce: s } = e, o = await F(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
        headers: this.headers,
        body: {
          provider: r,
          id_token: n,
          access_token: i,
          nonce: s,
          gotrue_meta_security: { captcha_token: t?.captchaToken }
        },
        xform: Ne
      }), { data: l, error: u } = o;
      if (u)
        return this._returnResult({ data: { user: null, session: null }, error: u });
      if (!l || !l.session || !l.user) {
        const f = new Ct();
        return this._returnResult({ data: { user: null, session: null }, error: f });
      }
      return l.session && (await this._saveSession(l.session), await this._notifyAllSubscribers("SIGNED_IN", l.session)), this._returnResult({ data: l, error: u });
    } catch (t) {
      if (P(t))
        return this._returnResult({ data: { user: null, session: null }, error: t });
      throw t;
    }
  }
  /**
   * Log in a user using magiclink or a one-time password (OTP).
   *
   * If the `{{ .ConfirmationURL }}` variable is specified in the email template, a magiclink will be sent.
   * If the `{{ .Token }}` variable is specified in the email template, an OTP will be sent.
   * If you're using phone sign-ins, only an OTP will be sent. You won't be able to send a magiclink for phone sign-ins.
   *
   * Be aware that you may get back an error message that will not distinguish
   * between the cases where the account does not exist or, that the account
   * can only be accessed via social login.
   *
   * Do note that you will need to configure a Whatsapp sender on Twilio
   * if you are using phone sign in with the 'whatsapp' channel. The whatsapp
   * channel is not supported on other providers
   * at this time.
   * This method supports PKCE when an email is passed.
   *
   * @category Auth
   *
   * @remarks
   * - Requires either an email or phone number.
   * - This method is used for passwordless sign-ins where a OTP is sent to the user's email or phone number.
   * - If the user doesn't exist, `signInWithOtp()` will signup the user instead. To restrict this behavior, you can set `shouldCreateUser` in `SignInWithPasswordlessCredentials.options` to `false`.
   * - If you're using an email, you can configure whether you want the user to receive a magiclink or a OTP.
   * - If you're using phone, you can configure whether you want the user to receive a OTP.
   * - The magic link's destination URL is determined by the [`SITE_URL`](/docs/guides/auth/redirect-urls#use-wildcards-in-redirect-urls).
   * - See [redirect URLs and wildcards](/docs/guides/auth/redirect-urls#use-wildcards-in-redirect-urls) to add additional redirect URLs to your project.
   * - Magic links and OTPs share the same implementation. To send users a one-time code instead of a magic link, [modify the magic link email template](/dashboard/project/_/auth/templates) to include `{{ .Token }}` instead of `{{ .ConfirmationURL }}`.
   * - See our [Twilio Phone Auth Guide](/docs/guides/auth/phone-login?showSMSProvider=Twilio) for details about configuring WhatsApp sign in.
   *
   * @exampleDescription Sign in with email
   * The user will be sent an email which contains either a magiclink or a OTP or both. By default, a given user can only request a OTP once every 60 seconds.
   *
   * @example Sign in with email
   * ```js
   * const { data, error } = await supabase.auth.signInWithOtp({
   *   email: 'example@email.com',
   *   options: {
   *     emailRedirectTo: 'https://example.com/welcome'
   *   }
   * })
   * ```
   *
   * @exampleResponse Sign in with email
   * ```json
   * {
   *   "data": {
   *     "user": null,
   *     "session": null
   *   },
   *   "error": null
   * }
   * ```
   *
   * @exampleDescription Sign in with SMS OTP
   * The user will be sent a SMS which contains a OTP. By default, a given user can only request a OTP once every 60 seconds.
   *
   * @example Sign in with SMS OTP
   * ```js
   * const { data, error } = await supabase.auth.signInWithOtp({
   *   phone: '+13334445555',
   * })
   * ```
   *
   * @exampleDescription Sign in with WhatsApp OTP
   * The user will be sent a WhatsApp message which contains a OTP. By default, a given user can only request a OTP once every 60 seconds. Note that a user will need to have a valid WhatsApp account that is linked to Twilio in order to use this feature.
   *
   * @example Sign in with WhatsApp OTP
   * ```js
   * const { data, error } = await supabase.auth.signInWithOtp({
   *   phone: '+13334445555',
   *   options: {
   *     channel:'whatsapp',
   *   }
   * })
   * ```
   */
  async signInWithOtp(e) {
    var t, r, n, i, s;
    try {
      if ("email" in e) {
        const { email: o, options: l } = e;
        let u = null, f = null;
        this.flowType === "pkce" && ([u, f] = await xt(this.storage, this.storageKey));
        const { error: d } = await F(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            email: o,
            data: (t = l?.data) !== null && t !== void 0 ? t : {},
            create_user: (r = l?.shouldCreateUser) !== null && r !== void 0 ? r : !0,
            gotrue_meta_security: { captcha_token: l?.captchaToken },
            code_challenge: u,
            code_challenge_method: f
          },
          redirectTo: l?.emailRedirectTo
        });
        return this._returnResult({ data: { user: null, session: null }, error: d });
      }
      if ("phone" in e) {
        const { phone: o, options: l } = e, { data: u, error: f } = await F(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            phone: o,
            data: (n = l?.data) !== null && n !== void 0 ? n : {},
            create_user: (i = l?.shouldCreateUser) !== null && i !== void 0 ? i : !0,
            gotrue_meta_security: { captcha_token: l?.captchaToken },
            channel: (s = l?.channel) !== null && s !== void 0 ? s : "sms"
          }
        });
        return this._returnResult({
          data: { user: null, session: null, messageId: u?.message_id },
          error: f
        });
      }
      throw new qa("You must provide either an email or phone number.");
    } catch (o) {
      if (await le(this.storage, `${this.storageKey}-code-verifier`), P(o))
        return this._returnResult({ data: { user: null, session: null }, error: o });
      throw o;
    }
  }
  /**
   * Log in a user given a User supplied OTP or TokenHash received through mobile or email.
   *
   * @category Auth
   *
   * @remarks
   * - The `verifyOtp` method takes in different verification types.
   * - If a phone number is used, the type can either be:
   *   1. `sms` – Used when verifying a one-time password (OTP) sent via SMS during sign-up or sign-in.
   *   2. `phone_change` – Used when verifying an OTP sent to a new phone number during a phone number update process.
   * - If an email address is used, the type can be one of the following (note: `signup` and `magiclink` types are deprecated):
   *   1. `email` – Used when verifying an OTP sent to the user's email during sign-up or sign-in.
   *   2. `recovery` – Used when verifying an OTP sent for account recovery, typically after a password reset request.
   *   3. `invite` – Used when verifying an OTP sent as part of an invitation to join a project or organization.
   *   4. `email_change` – Used when verifying an OTP sent to a new email address during an email update process.
   * - The verification type used should be determined based on the corresponding auth method called before `verifyOtp` to sign up / sign-in a user.
   * - The `TokenHash` is contained in the [email templates](/docs/guides/auth/auth-email-templates) and can be used to sign in.  You may wish to use the hash for the PKCE flow for Server Side Auth. Read [the Password-based Auth guide](/docs/guides/auth/passwords) for more details.
   *
   * @example Verify Signup One-Time Password (OTP)
   * ```js
   * const { data, error } = await supabase.auth.verifyOtp({ email, token, type: 'email'})
   * ```
   *
   * @exampleResponse Verify Signup One-Time Password (OTP)
   * ```json
   * {
   *   "data": {
   *     "user": {
   *       "id": "11111111-1111-1111-1111-111111111111",
   *       "aud": "authenticated",
   *       "role": "authenticated",
   *       "email": "example@email.com",
   *       "email_confirmed_at": "2024-01-01T00:00:00Z",
   *       "phone": "",
   *       "confirmed_at": "2024-01-01T00:00:00Z",
   *       "recovery_sent_at": "2024-01-01T00:00:00Z",
   *       "last_sign_in_at": "2024-01-01T00:00:00Z",
   *       "app_metadata": {
   *         "provider": "email",
   *         "providers": [
   *           "email"
   *         ]
   *       },
   *       "user_metadata": {
   *         "email": "example@email.com",
   *         "email_verified": false,
   *         "phone_verified": false,
   *         "sub": "11111111-1111-1111-1111-111111111111"
   *       },
   *       "identities": [
   *         {
   *           "identity_id": "22222222-2222-2222-2222-222222222222",
   *           "id": "11111111-1111-1111-1111-111111111111",
   *           "user_id": "11111111-1111-1111-1111-111111111111",
   *           "identity_data": {
   *             "email": "example@email.com",
   *             "email_verified": false,
   *             "phone_verified": false,
   *             "sub": "11111111-1111-1111-1111-111111111111"
   *           },
   *           "provider": "email",
   *           "last_sign_in_at": "2024-01-01T00:00:00Z",
   *           "created_at": "2024-01-01T00:00:00Z",
   *           "updated_at": "2024-01-01T00:00:00Z",
   *           "email": "example@email.com"
   *         }
   *       ],
   *       "created_at": "2024-01-01T00:00:00Z",
   *       "updated_at": "2024-01-01T00:00:00Z",
   *       "is_anonymous": false
   *     },
   *     "session": {
   *       "access_token": "<ACCESS_TOKEN>",
   *       "token_type": "bearer",
   *       "expires_in": 3600,
   *       "expires_at": 1700000000,
   *       "refresh_token": "<REFRESH_TOKEN>",
   *       "user": {
   *         "id": "11111111-1111-1111-1111-111111111111",
   *         "aud": "authenticated",
   *         "role": "authenticated",
   *         "email": "example@email.com",
   *         "email_confirmed_at": "2024-01-01T00:00:00Z",
   *         "phone": "",
   *         "confirmed_at": "2024-01-01T00:00:00Z",
   *         "recovery_sent_at": "2024-01-01T00:00:00Z",
   *         "last_sign_in_at": "2024-01-01T00:00:00Z",
   *         "app_metadata": {
   *           "provider": "email",
   *           "providers": [
   *             "email"
   *           ]
   *         },
   *         "user_metadata": {
   *           "email": "example@email.com",
   *           "email_verified": false,
   *           "phone_verified": false,
   *           "sub": "11111111-1111-1111-1111-111111111111"
   *         },
   *         "identities": [
   *           {
   *             "identity_id": "22222222-2222-2222-2222-222222222222",
   *             "id": "11111111-1111-1111-1111-111111111111",
   *             "user_id": "11111111-1111-1111-1111-111111111111",
   *             "identity_data": {
   *               "email": "example@email.com",
   *               "email_verified": false,
   *               "phone_verified": false,
   *               "sub": "11111111-1111-1111-1111-111111111111"
   *             },
   *             "provider": "email",
   *             "last_sign_in_at": "2024-01-01T00:00:00Z",
   *             "created_at": "2024-01-01T00:00:00Z",
   *             "updated_at": "2024-01-01T00:00:00Z",
   *             "email": "example@email.com"
   *           }
   *         ],
   *         "created_at": "2024-01-01T00:00:00Z",
   *         "updated_at": "2024-01-01T00:00:00Z",
   *         "is_anonymous": false
   *       }
   *     }
   *   },
   *   "error": null
   * }
   * ```
   *
   * @example Verify SMS One-Time Password (OTP)
   * ```js
   * const { data, error } = await supabase.auth.verifyOtp({ phone, token, type: 'sms'})
   * ```
   *
   * @example Verify Email Auth (Token Hash)
   * ```js
   * const { data, error } = await supabase.auth.verifyOtp({ token_hash: tokenHash, type: 'email'})
   * ```
   */
  async verifyOtp(e) {
    var t, r;
    try {
      let n, i;
      "options" in e && (n = (t = e.options) === null || t === void 0 ? void 0 : t.redirectTo, i = (r = e.options) === null || r === void 0 ? void 0 : r.captchaToken);
      const { data: s, error: o } = await F(this.fetch, "POST", `${this.url}/verify`, {
        headers: this.headers,
        body: Object.assign(Object.assign({}, e), { gotrue_meta_security: { captcha_token: i } }),
        redirectTo: n,
        xform: Ne
      });
      if (o)
        throw o;
      if (!s)
        throw new Error("An error occurred on token verification.");
      const l = s.session, u = s.user;
      return l?.access_token && (await this._saveSession(l), await this._notifyAllSubscribers(e.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", l)), this._returnResult({ data: { user: u, session: l }, error: null });
    } catch (n) {
      if (P(n))
        return this._returnResult({ data: { user: null, session: null }, error: n });
      throw n;
    }
  }
  /**
   * Attempts a single-sign on using an enterprise Identity Provider. A
   * successful SSO attempt will redirect the current page to the identity
   * provider authorization page. The redirect URL is implementation and SSO
   * protocol specific.
   *
   * You can use it by providing a SSO domain. Typically you can extract this
   * domain by asking users for their email address. If this domain is
   * registered on the Auth instance the redirect will use that organization's
   * currently active SSO Identity Provider for the login.
   *
   * If you have built an organization-specific login page, you can use the
   * organization's SSO Identity Provider UUID directly instead.
   *
   * @category Auth
   *
   * @remarks
   * - Before you can call this method you need to [establish a connection](/docs/guides/auth/sso/auth-sso-saml#managing-saml-20-connections) to an identity provider. Use the [CLI commands](/docs/reference/cli/supabase-sso) to do this.
   * - If you've associated an email domain to the identity provider, you can use the `domain` property to start a sign-in flow.
   * - In case you need to use a different way to start the authentication flow with an identity provider, you can use the `providerId` property. For example:
   *     - Mapping specific user email addresses with an identity provider.
   *     - Using different hints to identity the identity provider to be used by the user, like a company-specific page, IP address or other tracking information.
   *
   * @example Sign in with email domain
   * ```js
   *   // You can extract the user's email domain and use it to trigger the
   *   // authentication flow with the correct identity provider.
   *
   *   const { data, error } = await supabase.auth.signInWithSSO({
   *     domain: 'company.com'
   *   })
   *
   *   if (data?.url) {
   *     // redirect the user to the identity provider's authentication flow
   *     window.location.href = data.url
   *   }
   * ```
   *
   * @example Sign in with provider UUID
   * ```js
   *   // Useful when you need to map a user's sign in request according
   *   // to different rules that can't use email domains.
   *
   *   const { data, error } = await supabase.auth.signInWithSSO({
   *     providerId: '21648a9d-8d5a-4555-a9d1-d6375dc14e92'
   *   })
   *
   *   if (data?.url) {
   *     // redirect the user to the identity provider's authentication flow
   *     window.location.href = data.url
   *   }
   * ```
   */
  async signInWithSSO(e) {
    var t, r, n, i, s;
    try {
      let o = null, l = null;
      this.flowType === "pkce" && ([o, l] = await xt(this.storage, this.storageKey));
      const u = await F(this.fetch, "POST", `${this.url}/sso`, {
        body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId" in e ? { provider_id: e.providerId } : null), "domain" in e ? { domain: e.domain } : null), { redirect_to: (r = (t = e.options) === null || t === void 0 ? void 0 : t.redirectTo) !== null && r !== void 0 ? r : void 0 }), !((n = e?.options) === null || n === void 0) && n.captchaToken ? { gotrue_meta_security: { captcha_token: e.options.captchaToken } } : null), { skip_http_redirect: !0, code_challenge: o, code_challenge_method: l }),
        headers: this.headers,
        xform: ch
      });
      return !((i = u.data) === null || i === void 0) && i.url && ce() && !(!((s = e.options) === null || s === void 0) && s.skipBrowserRedirect) && window.location.assign(u.data.url), this._returnResult(u);
    } catch (o) {
      if (await le(this.storage, `${this.storageKey}-code-verifier`), P(o))
        return this._returnResult({ data: null, error: o });
      throw o;
    }
  }
  /**
   * Sends a reauthentication OTP to the user's email or phone number.
   * Requires the user to be signed-in.
   *
   * @category Auth
   *
   * @remarks
   * - This method is used together with `updateUser()` when a user's password needs to be updated.
   * - If you require your user to reauthenticate before updating their password, you need to enable the **Secure password change** option in your [project's email provider settings](/dashboard/project/_/auth/providers).
   * - A user is only require to reauthenticate before updating their password if **Secure password change** is enabled and the user **hasn't recently signed in**. A user is deemed recently signed in if the session was created in the last 24 hours.
   * - This method will send a nonce to the user's email. If the user doesn't have a confirmed email address, the method will send the nonce to the user's confirmed phone number instead.
   * - After receiving the OTP, include it as the `nonce` in your `updateUser()` call to finalize the password change.
   *
   * @exampleDescription Send reauthentication nonce
   * Sends a reauthentication nonce to the user's email or phone number.
   *
   * @example Send reauthentication nonce
   * ```js
   * const { error } = await supabase.auth.reauthenticate()
   * ```
   */
  async reauthenticate() {
    return await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => await this._reauthenticate());
  }
  async _reauthenticate() {
    try {
      return await this._useSession(async (e) => {
        const { data: { session: t }, error: r } = e;
        if (r)
          throw r;
        if (!t)
          throw new se();
        const { error: n } = await F(this.fetch, "GET", `${this.url}/reauthenticate`, {
          headers: this.headers,
          jwt: t.access_token
        });
        return this._returnResult({ data: { user: null, session: null }, error: n });
      });
    } catch (e) {
      if (P(e))
        return this._returnResult({ data: { user: null, session: null }, error: e });
      throw e;
    }
  }
  /**
   * Resends an existing signup confirmation email, email change email, SMS OTP or phone change OTP.
   *
   * @category Auth
   *
   * @remarks
   * - Resends a signup confirmation, email change or phone change email to the user.
   * - Passwordless sign-ins can be resent by calling the `signInWithOtp()` method again.
   * - Password recovery emails can be resent by calling the `resetPasswordForEmail()` method again.
   * - This method will only resend an email or phone OTP to the user if there was an initial signup, email change or phone change request being made(note: For existing users signing in with OTP, you should use `signInWithOtp()` again to resend the OTP).
   * - You can specify a redirect url when you resend an email link using the `emailRedirectTo` option.
   *
   * @exampleDescription Resend an email signup confirmation
   * Resends the email signup confirmation to the user
   *
   * @example Resend an email signup confirmation
   * ```js
   * const { error } = await supabase.auth.resend({
   *   type: 'signup',
   *   email: 'email@example.com',
   *   options: {
   *     emailRedirectTo: 'https://example.com/welcome'
   *   }
   * })
   * ```
   *
   * @exampleDescription Resend a phone signup confirmation
   * Resends the phone signup confirmation email to the user
   *
   * @example Resend a phone signup confirmation
   * ```js
   * const { error } = await supabase.auth.resend({
   *   type: 'sms',
   *   phone: '1234567890'
   * })
   * ```
   *
   * @exampleDescription Resend email change email
   * Resends the email change email to the user
   *
   * @example Resend email change email
   * ```js
   * const { error } = await supabase.auth.resend({
   *   type: 'email_change',
   *   email: 'email@example.com'
   * })
   * ```
   *
   * @exampleDescription Resend phone change OTP
   * Resends the phone change OTP to the user
   *
   * @example Resend phone change OTP
   * ```js
   * const { error } = await supabase.auth.resend({
   *   type: 'phone_change',
   *   phone: '1234567890'
   * })
   * ```
   */
  async resend(e) {
    try {
      const t = `${this.url}/resend`;
      if ("email" in e) {
        const { email: r, type: n, options: i } = e, { error: s } = await F(this.fetch, "POST", t, {
          headers: this.headers,
          body: {
            email: r,
            type: n,
            gotrue_meta_security: { captcha_token: i?.captchaToken }
          },
          redirectTo: i?.emailRedirectTo
        });
        return this._returnResult({ data: { user: null, session: null }, error: s });
      } else if ("phone" in e) {
        const { phone: r, type: n, options: i } = e, { data: s, error: o } = await F(this.fetch, "POST", t, {
          headers: this.headers,
          body: {
            phone: r,
            type: n,
            gotrue_meta_security: { captcha_token: i?.captchaToken }
          }
        });
        return this._returnResult({
          data: { user: null, session: null, messageId: s?.message_id },
          error: o
        });
      }
      throw new qa("You must provide either an email or phone number and a type");
    } catch (t) {
      if (P(t))
        return this._returnResult({ data: { user: null, session: null }, error: t });
      throw t;
    }
  }
  /**
   * Returns the session, refreshing it if necessary.
   *
   * The session returned can be null if the session is not detected which can happen in the event a user is not signed-in or has logged out.
   *
   * **IMPORTANT:** This method loads values directly from the storage attached
   * to the client. If that storage is based on request cookies for example,
   * the values in it may not be authentic and therefore it's strongly advised
   * against using this method and its results in such circumstances. A warning
   * will be emitted if this is detected. Use {@link #getUser()} instead.
   *
   * @category Auth
   *
   * @remarks
   * - Since the introduction of [asymmetric JWT signing keys](/docs/guides/auth/signing-keys), this method is considered low-level and we encourage you to use `getClaims()` or `getUser()` instead.
   * - Retrieves the current [user session](/docs/guides/auth/sessions) from the storage medium (local storage, cookies).
   * - The session contains an access token (signed JWT), a refresh token and the user object.
   * - If the session's access token is expired or is about to expire, this method will use the refresh token to refresh the session.
   * - When using in a browser, or you've called `startAutoRefresh()` in your environment (React Native, etc.) this function always returns a valid access token without refreshing the session itself, as this is done in the background. This function returns very fast.
   * - **IMPORTANT SECURITY NOTICE:** If using an insecure storage medium, such as cookies or request headers, the user object returned by this function **must not be trusted**. Always verify the JWT using `getClaims()` or your own JWT verification library to securely establish the user's identity and access. You can also use `getUser()` to fetch the user object directly from the Auth server for this purpose.
   * - When using in a browser, this function is synchronized across all tabs using the [LockManager](https://developer.mozilla.org/en-US/docs/Web/API/LockManager) API. In other environments make sure you've defined a proper `lock` property, if necessary, to make sure there are no race conditions while the session is being refreshed.
   *
   * @example Get the session data
   * ```js
   * const { data, error } = await supabase.auth.getSession()
   * ```
   *
   * @exampleResponse Get the session data
   * ```json
   * {
   *   "data": {
   *     "session": {
   *       "access_token": "<ACCESS_TOKEN>",
   *       "token_type": "bearer",
   *       "expires_in": 3600,
   *       "expires_at": 1700000000,
   *       "refresh_token": "<REFRESH_TOKEN>",
   *       "user": {
   *         "id": "11111111-1111-1111-1111-111111111111",
   *         "aud": "authenticated",
   *         "role": "authenticated",
   *         "email": "example@email.com",
   *         "email_confirmed_at": "2024-01-01T00:00:00Z",
   *         "phone": "",
   *         "last_sign_in_at": "2024-01-01T00:00:00Z",
   *         "app_metadata": {
   *           "provider": "email",
   *           "providers": [
   *             "email"
   *           ]
   *         },
   *         "user_metadata": {
   *           "email": "example@email.com",
   *           "email_verified": false,
   *           "phone_verified": false,
   *           "sub": "11111111-1111-1111-1111-111111111111"
   *         },
   *         "identities": [
   *           {
   *             "identity_id": "22222222-2222-2222-2222-222222222222",
   *             "id": "11111111-1111-1111-1111-111111111111",
   *             "user_id": "11111111-1111-1111-1111-111111111111",
   *             "identity_data": {
   *               "email": "example@email.com",
   *               "email_verified": false,
   *               "phone_verified": false,
   *               "sub": "11111111-1111-1111-1111-111111111111"
   *             },
   *             "provider": "email",
   *             "last_sign_in_at": "2024-01-01T00:00:00Z",
   *             "created_at": "2024-01-01T00:00:00Z",
   *             "updated_at": "2024-01-01T00:00:00Z",
   *             "email": "example@email.com"
   *           }
   *         ],
   *         "created_at": "2024-01-01T00:00:00Z",
   *         "updated_at": "2024-01-01T00:00:00Z",
   *         "is_anonymous": false
   *       }
   *     }
   *   },
   *   "error": null
   * }
   * ```
   */
  async getSession() {
    return await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => this._useSession(async (t) => t));
  }
  /**
   * Acquires a global lock based on the storage key.
   */
  async _acquireLock(e, t) {
    this._debug("#_acquireLock", "begin", e);
    try {
      if (this.lockAcquired) {
        const r = this.pendingInLock.length ? this.pendingInLock[this.pendingInLock.length - 1] : Promise.resolve(), n = (async () => (await r, await t()))();
        return this.pendingInLock.push((async () => {
          try {
            await n;
          } catch {
          }
        })()), n;
      }
      return await this.lock(`lock:${this.storageKey}`, e, async () => {
        this._debug("#_acquireLock", "lock acquired for storage key", this.storageKey);
        try {
          this.lockAcquired = !0;
          const r = t();
          for (this.pendingInLock.push((async () => {
            try {
              await r;
            } catch {
            }
          })()), await r; this.pendingInLock.length; ) {
            const n = [...this.pendingInLock];
            await Promise.all(n), this.pendingInLock.splice(0, n.length);
          }
          return await r;
        } finally {
          this._debug("#_acquireLock", "lock released for storage key", this.storageKey), this.lockAcquired = !1;
        }
      });
    } finally {
      this._debug("#_acquireLock", "end");
    }
  }
  /**
   * Use instead of {@link #getSession} inside the library. It is
   * semantically usually what you want, as getting a session involves some
   * processing afterwards that requires only one client operating on the
   * session at once across multiple tabs or processes.
   */
  async _useSession(e) {
    this._debug("#_useSession", "begin");
    try {
      const t = await this.__loadSession();
      return await e(t);
    } finally {
      this._debug("#_useSession", "end");
    }
  }
  /**
   * NEVER USE DIRECTLY!
   *
   * Always use {@link #_useSession}.
   */
  async __loadSession() {
    this._debug("#__loadSession()", "begin"), this.lockAcquired || this._debug("#__loadSession()", "used outside of an acquired lock!", new Error().stack);
    try {
      let e = null;
      const t = await ut(this.storage, this.storageKey);
      if (this._debug("#getSession()", "session from storage", t), t !== null && (this._isValidSession(t) ? e = t : (this._debug("#getSession()", "session from storage is not valid"), await this._removeSession())), !e)
        return { data: { session: null }, error: null };
      const r = e.expires_at ? e.expires_at * 1e3 - Date.now() < Wr : !1;
      if (this._debug("#__loadSession()", `session has${r ? "" : " not"} expired`, "expires_at", e.expires_at), !r) {
        if (this.userStorage) {
          const s = await ut(this.userStorage, this.storageKey + "-user");
          s?.user ? e.user = s.user : e.user = Kr();
        }
        if (this.storage.isServer && e.user && !e.user.__isUserNotAvailableProxy) {
          const s = { value: this.suppressGetSessionWarning };
          e.user = sh(e.user, s), s.value && (this.suppressGetSessionWarning = !0);
        }
        return { data: { session: e }, error: null };
      }
      const { data: n, error: i } = await this._callRefreshToken(e.refresh_token);
      return i ? this._returnResult({ data: { session: null }, error: i }) : this._returnResult({ data: { session: n }, error: null });
    } finally {
      this._debug("#__loadSession()", "end");
    }
  }
  /**
   * Gets the current user details if there is an existing session. This method
   * performs a network request to the Supabase Auth server, so the returned
   * value is authentic and can be used to base authorization rules on.
   *
   * @param jwt Takes in an optional access token JWT. If no JWT is provided, the JWT from the current session is used.
   *
   * @category Auth
   *
   * @remarks
   * - This method fetches the user object from the database instead of local session.
   * - This method is useful for checking if the user is authorized because it validates the user's access token JWT on the server.
   * - Should always be used when checking for user authorization on the server. On the client, you can instead use `getSession().session.user` for faster results. `getSession` is insecure on the server.
   *
   * @example Get the logged in user with the current existing session
   * ```js
   * const { data: { user } } = await supabase.auth.getUser()
   * ```
   *
   * @exampleResponse Get the logged in user with the current existing session
   * ```json
   * {
   *   "data": {
   *     "user": {
   *       "id": "11111111-1111-1111-1111-111111111111",
   *       "aud": "authenticated",
   *       "role": "authenticated",
   *       "email": "example@email.com",
   *       "email_confirmed_at": "2024-01-01T00:00:00Z",
   *       "phone": "",
   *       "confirmed_at": "2024-01-01T00:00:00Z",
   *       "last_sign_in_at": "2024-01-01T00:00:00Z",
   *       "app_metadata": {
   *         "provider": "email",
   *         "providers": [
   *           "email"
   *         ]
   *       },
   *       "user_metadata": {
   *         "email": "example@email.com",
   *         "email_verified": false,
   *         "phone_verified": false,
   *         "sub": "11111111-1111-1111-1111-111111111111"
   *       },
   *       "identities": [
   *         {
   *           "identity_id": "22222222-2222-2222-2222-222222222222",
   *           "id": "11111111-1111-1111-1111-111111111111",
   *           "user_id": "11111111-1111-1111-1111-111111111111",
   *           "identity_data": {
   *             "email": "example@email.com",
   *             "email_verified": false,
   *             "phone_verified": false,
   *             "sub": "11111111-1111-1111-1111-111111111111"
   *           },
   *           "provider": "email",
   *           "last_sign_in_at": "2024-01-01T00:00:00Z",
   *           "created_at": "2024-01-01T00:00:00Z",
   *           "updated_at": "2024-01-01T00:00:00Z",
   *           "email": "example@email.com"
   *         }
   *       ],
   *       "created_at": "2024-01-01T00:00:00Z",
   *       "updated_at": "2024-01-01T00:00:00Z",
   *       "is_anonymous": false
   *     }
   *   },
   *   "error": null
   * }
   * ```
   *
   * @example Get the logged in user with a custom access token jwt
   * ```js
   * const { data: { user } } = await supabase.auth.getUser(jwt)
   * ```
   */
  async getUser(e) {
    if (e)
      return await this._getUser(e);
    await this.initializePromise;
    const t = await this._acquireLock(this.lockAcquireTimeout, async () => await this._getUser());
    return t.data.user && (this.suppressGetSessionWarning = !0), t;
  }
  async _getUser(e) {
    try {
      return e ? await F(this.fetch, "GET", `${this.url}/user`, {
        headers: this.headers,
        jwt: e,
        xform: et
      }) : await this._useSession(async (t) => {
        var r, n, i;
        const { data: s, error: o } = t;
        if (o)
          throw o;
        return !(!((r = s.session) === null || r === void 0) && r.access_token) && !this.hasCustomAuthorizationHeader ? { data: { user: null }, error: new se() } : await F(this.fetch, "GET", `${this.url}/user`, {
          headers: this.headers,
          jwt: (i = (n = s.session) === null || n === void 0 ? void 0 : n.access_token) !== null && i !== void 0 ? i : void 0,
          xform: et
        });
      });
    } catch (t) {
      if (P(t))
        return Ha(t) && (await this._removeSession(), await le(this.storage, `${this.storageKey}-code-verifier`)), this._returnResult({ data: { user: null }, error: t });
      throw t;
    }
  }
  /**
   * Updates user data for a logged in user.
   *
   * @category Auth
   *
   * @remarks
   * - In order to use the `updateUser()` method, the user needs to be signed in first.
   * - By default, email updates sends a confirmation link to both the user's current and new email.
   * To only send a confirmation link to the user's new email, disable **Secure email change** in your project's [email auth provider settings](/dashboard/project/_/auth/providers).
   *
   * @exampleDescription Update the email for an authenticated user
   * Sends a "Confirm Email Change" email to the new address. If **Secure Email Change** is enabled (default), confirmation is also required from the **old email** before the change is applied. To skip dual confirmation and apply the change after only the new email is verified, disable **Secure Email Change** in the [Email Auth Provider settings](/dashboard/project/_/auth/providers?provider=Email).
   *
   * @example Update the email for an authenticated user
   * ```js
   * const { data, error } = await supabase.auth.updateUser({
   *   email: 'new@email.com'
   * })
   * ```
   *
   * @exampleResponse Update the email for an authenticated user
   * ```json
   * {
   *   "data": {
   *     "user": {
   *       "id": "11111111-1111-1111-1111-111111111111",
   *       "aud": "authenticated",
   *       "role": "authenticated",
   *       "email": "example@email.com",
   *       "email_confirmed_at": "2024-01-01T00:00:00Z",
   *       "phone": "",
   *       "confirmed_at": "2024-01-01T00:00:00Z",
   *       "new_email": "new@email.com",
   *       "email_change_sent_at": "2024-01-01T00:00:00Z",
   *       "last_sign_in_at": "2024-01-01T00:00:00Z",
   *       "app_metadata": {
   *         "provider": "email",
   *         "providers": [
   *           "email"
   *         ]
   *       },
   *       "user_metadata": {
   *         "email": "example@email.com",
   *         "email_verified": false,
   *         "phone_verified": false,
   *         "sub": "11111111-1111-1111-1111-111111111111"
   *       },
   *       "identities": [
   *         {
   *           "identity_id": "22222222-2222-2222-2222-222222222222",
   *           "id": "11111111-1111-1111-1111-111111111111",
   *           "user_id": "11111111-1111-1111-1111-111111111111",
   *           "identity_data": {
   *             "email": "example@email.com",
   *             "email_verified": false,
   *             "phone_verified": false,
   *             "sub": "11111111-1111-1111-1111-111111111111"
   *           },
   *           "provider": "email",
   *           "last_sign_in_at": "2024-01-01T00:00:00Z",
   *           "created_at": "2024-01-01T00:00:00Z",
   *           "updated_at": "2024-01-01T00:00:00Z",
   *           "email": "example@email.com"
   *         }
   *       ],
   *       "created_at": "2024-01-01T00:00:00Z",
   *       "updated_at": "2024-01-01T00:00:00Z",
   *       "is_anonymous": false
   *     }
   *   },
   *   "error": null
   * }
   * ```
   *
   * @exampleDescription Update the phone number for an authenticated user
   * Sends a one-time password (OTP) to the new phone number.
   *
   * @example Update the phone number for an authenticated user
   * ```js
   * const { data, error } = await supabase.auth.updateUser({
   *   phone: '123456789'
   * })
   * ```
   *
   * @example Update the password for an authenticated user
   * ```js
   * const { data, error } = await supabase.auth.updateUser({
   *   password: 'new password'
   * })
   * ```
   *
   * @exampleDescription Update the user's metadata
   * Updates the user's custom metadata.
   *
   * **Note**: The `data` field maps to the `auth.users.raw_user_meta_data` column in your Supabase database. When calling `getUser()`, the data will be available as `user.user_metadata`.
   *
   * @example Update the user's metadata
   * ```js
   * const { data, error } = await supabase.auth.updateUser({
   *   data: { hello: 'world' }
   * })
   * ```
   *
   * @exampleDescription Update the user's password with a nonce
   * If **Secure password change** is enabled in your [project's email provider settings](/dashboard/project/_/auth/providers), updating the user's password would require a nonce if the user **hasn't recently signed in**. The nonce is sent to the user's email or phone number. A user is deemed recently signed in if the session was created in the last 24 hours.
   *
   * @example Update the user's password with a nonce
   * ```js
   * const { data, error } = await supabase.auth.updateUser({
   *   password: 'new password',
   *   nonce: '123456'
   * })
   * ```
   */
  async updateUser(e, t = {}) {
    return await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => await this._updateUser(e, t));
  }
  async _updateUser(e, t = {}) {
    try {
      return await this._useSession(async (r) => {
        const { data: n, error: i } = r;
        if (i)
          throw i;
        if (!n.session)
          throw new se();
        const s = n.session;
        let o = null, l = null;
        this.flowType === "pkce" && e.email != null && ([o, l] = await xt(this.storage, this.storageKey));
        const { data: u, error: f } = await F(this.fetch, "PUT", `${this.url}/user`, {
          headers: this.headers,
          redirectTo: t?.emailRedirectTo,
          body: Object.assign(Object.assign({}, e), { code_challenge: o, code_challenge_method: l }),
          jwt: s.access_token,
          xform: et
        });
        if (f)
          throw f;
        return s.user = u.user, await this._saveSession(s), await this._notifyAllSubscribers("USER_UPDATED", s), this._returnResult({ data: { user: s.user }, error: null });
      });
    } catch (r) {
      if (await le(this.storage, `${this.storageKey}-code-verifier`), P(r))
        return this._returnResult({ data: { user: null }, error: r });
      throw r;
    }
  }
  /**
   * Sets the session data from the current session. If the current session is expired, setSession will take care of refreshing it to obtain a new session.
   * If the refresh token or access token in the current session is invalid, an error will be thrown.
   * @param currentSession The current session that minimally contains an access token and refresh token.
   *
   * @category Auth
   *
   * @remarks
   * - This method sets the session using an `access_token` and `refresh_token`.
   * - If successful, a `SIGNED_IN` event is emitted.
   *
   * @exampleDescription Set the session
   * Sets the session data from an access_token and refresh_token, then returns an auth response or error.
   *
   * @example Set the session
   * ```js
   *   const { data, error } = await supabase.auth.setSession({
   *     access_token,
   *     refresh_token
   *   })
   * ```
   *
   * @exampleResponse Set the session
   * ```json
   * {
   *   "data": {
   *     "user": {
   *       "id": "11111111-1111-1111-1111-111111111111",
   *       "aud": "authenticated",
   *       "role": "authenticated",
   *       "email": "example@email.com",
   *       "email_confirmed_at": "2024-01-01T00:00:00Z",
   *       "phone": "",
   *       "confirmed_at": "2024-01-01T00:00:00Z",
   *       "last_sign_in_at": "2024-01-01T00:00:00Z",
   *       "app_metadata": {
   *         "provider": "email",
   *         "providers": [
   *           "email"
   *         ]
   *       },
   *       "user_metadata": {
   *         "email": "example@email.com",
   *         "email_verified": false,
   *         "phone_verified": false,
   *         "sub": "11111111-1111-1111-1111-111111111111"
   *       },
   *       "identities": [
   *         {
   *           "identity_id": "22222222-2222-2222-2222-222222222222",
   *           "id": "11111111-1111-1111-1111-111111111111",
   *           "user_id": "11111111-1111-1111-1111-111111111111",
   *           "identity_data": {
   *             "email": "example@email.com",
   *             "email_verified": false,
   *             "phone_verified": false,
   *             "sub": "11111111-1111-1111-1111-111111111111"
   *           },
   *           "provider": "email",
   *           "last_sign_in_at": "2024-01-01T00:00:00Z",
   *           "created_at": "2024-01-01T00:00:00Z",
   *           "updated_at": "2024-01-01T00:00:00Z",
   *           "email": "example@email.com"
   *         }
   *       ],
   *       "created_at": "2024-01-01T00:00:00Z",
   *       "updated_at": "2024-01-01T00:00:00Z",
   *       "is_anonymous": false
   *     },
   *     "session": {
   *       "access_token": "<ACCESS_TOKEN>",
   *       "refresh_token": "<REFRESH_TOKEN>",
   *       "user": {
   *         "id": "11111111-1111-1111-1111-111111111111",
   *         "aud": "authenticated",
   *         "role": "authenticated",
   *         "email": "example@email.com",
   *         "email_confirmed_at": "2024-01-01T00:00:00Z",
   *         "phone": "",
   *         "confirmed_at": "2024-01-01T00:00:00Z",
   *         "last_sign_in_at": "11111111-1111-1111-1111-111111111111",
   *         "app_metadata": {
   *           "provider": "email",
   *           "providers": [
   *             "email"
   *           ]
   *         },
   *         "user_metadata": {
   *           "email": "example@email.com",
   *           "email_verified": false,
   *           "phone_verified": false,
   *           "sub": "11111111-1111-1111-1111-111111111111"
   *         },
   *         "identities": [
   *           {
   *             "identity_id": "2024-01-01T00:00:00Z",
   *             "id": "11111111-1111-1111-1111-111111111111",
   *             "user_id": "11111111-1111-1111-1111-111111111111",
   *             "identity_data": {
   *               "email": "example@email.com",
   *               "email_verified": false,
   *               "phone_verified": false,
   *               "sub": "11111111-1111-1111-1111-111111111111"
   *             },
   *             "provider": "email",
   *             "last_sign_in_at": "2024-01-01T00:00:00Z",
   *             "created_at": "2024-01-01T00:00:00Z",
   *             "updated_at": "2024-01-01T00:00:00Z",
   *             "email": "example@email.com"
   *           }
   *         ],
   *         "created_at": "2024-01-01T00:00:00Z",
   *         "updated_at": "2024-01-01T00:00:00Z",
   *         "is_anonymous": false
   *       },
   *       "token_type": "bearer",
   *       "expires_in": 3500,
   *       "expires_at": 1700000000
   *     }
   *   },
   *   "error": null
   * }
   * ```
   */
  async setSession(e) {
    return await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => await this._setSession(e));
  }
  async _setSession(e) {
    try {
      if (!e.access_token || !e.refresh_token)
        throw new se();
      const t = Date.now() / 1e3;
      let r = t, n = !0, i = null;
      const { payload: s } = Ga(e.access_token);
      if (s.exp && (r = s.exp, n = r <= t), n) {
        const { data: o, error: l } = await this._callRefreshToken(e.refresh_token);
        if (l)
          return this._returnResult({ data: { user: null, session: null }, error: l });
        if (!o)
          return { data: { user: null, session: null }, error: null };
        i = o;
      } else {
        const { data: o, error: l } = await this._getUser(e.access_token);
        if (l)
          return this._returnResult({ data: { user: null, session: null }, error: l });
        i = {
          access_token: e.access_token,
          refresh_token: e.refresh_token,
          user: o.user,
          token_type: "bearer",
          expires_in: r - t,
          expires_at: r
        }, await this._saveSession(i), await this._notifyAllSubscribers("SIGNED_IN", i);
      }
      return this._returnResult({ data: { user: i.user, session: i }, error: null });
    } catch (t) {
      if (P(t))
        return this._returnResult({ data: { session: null, user: null }, error: t });
      throw t;
    }
  }
  /**
   * Returns a new session, regardless of expiry status.
   * Takes in an optional current session. If not passed in, then refreshSession() will attempt to retrieve it from getSession().
   * If the current session's refresh token is invalid, an error will be thrown.
   * @param currentSession The current session. If passed in, it must contain a refresh token.
   *
   * @category Auth
   *
   * @remarks
   * - This method will refresh and return a new session whether the current one is expired or not.
   *
   * @example Refresh session using the current session
   * ```js
   * const { data, error } = await supabase.auth.refreshSession()
   * const { session, user } = data
   * ```
   *
   * @exampleResponse Refresh session using the current session
   * ```json
   * {
   *   "data": {
   *     "user": {
   *       "id": "11111111-1111-1111-1111-111111111111",
   *       "aud": "authenticated",
   *       "role": "authenticated",
   *       "email": "example@email.com",
   *       "email_confirmed_at": "2024-01-01T00:00:00Z",
   *       "phone": "",
   *       "confirmed_at": "2024-01-01T00:00:00Z",
   *       "last_sign_in_at": "2024-01-01T00:00:00Z",
   *       "app_metadata": {
   *         "provider": "email",
   *         "providers": [
   *           "email"
   *         ]
   *       },
   *       "user_metadata": {
   *         "email": "example@email.com",
   *         "email_verified": false,
   *         "phone_verified": false,
   *         "sub": "11111111-1111-1111-1111-111111111111"
   *       },
   *       "identities": [
   *         {
   *           "identity_id": "22222222-2222-2222-2222-222222222222",
   *           "id": "11111111-1111-1111-1111-111111111111",
   *           "user_id": "11111111-1111-1111-1111-111111111111",
   *           "identity_data": {
   *             "email": "example@email.com",
   *             "email_verified": false,
   *             "phone_verified": false,
   *             "sub": "11111111-1111-1111-1111-111111111111"
   *           },
   *           "provider": "email",
   *           "last_sign_in_at": "2024-01-01T00:00:00Z",
   *           "created_at": "2024-01-01T00:00:00Z",
   *           "updated_at": "2024-01-01T00:00:00Z",
   *           "email": "example@email.com"
   *         }
   *       ],
   *       "created_at": "2024-01-01T00:00:00Z",
   *       "updated_at": "2024-01-01T00:00:00Z",
   *       "is_anonymous": false
   *     },
   *     "session": {
   *       "access_token": "<ACCESS_TOKEN>",
   *       "token_type": "bearer",
   *       "expires_in": 3600,
   *       "expires_at": 1700000000,
   *       "refresh_token": "<REFRESH_TOKEN>",
   *       "user": {
   *         "id": "11111111-1111-1111-1111-111111111111",
   *         "aud": "authenticated",
   *         "role": "authenticated",
   *         "email": "example@email.com",
   *         "email_confirmed_at": "2024-01-01T00:00:00Z",
   *         "phone": "",
   *         "confirmed_at": "2024-01-01T00:00:00Z",
   *         "last_sign_in_at": "2024-01-01T00:00:00Z",
   *         "app_metadata": {
   *           "provider": "email",
   *           "providers": [
   *             "email"
   *           ]
   *         },
   *         "user_metadata": {
   *           "email": "example@email.com",
   *           "email_verified": false,
   *           "phone_verified": false,
   *           "sub": "11111111-1111-1111-1111-111111111111"
   *         },
   *         "identities": [
   *           {
   *             "identity_id": "22222222-2222-2222-2222-222222222222",
   *             "id": "11111111-1111-1111-1111-111111111111",
   *             "user_id": "11111111-1111-1111-1111-111111111111",
   *             "identity_data": {
   *               "email": "example@email.com",
   *               "email_verified": false,
   *               "phone_verified": false,
   *               "sub": "11111111-1111-1111-1111-111111111111"
   *             },
   *             "provider": "email",
   *             "last_sign_in_at": "2024-01-01T00:00:00Z",
   *             "created_at": "2024-01-01T00:00:00Z",
   *             "updated_at": "2024-01-01T00:00:00Z",
   *             "email": "example@email.com"
   *           }
   *         ],
   *         "created_at": "2024-01-01T00:00:00Z",
   *         "updated_at": "2024-01-01T00:00:00Z",
   *         "is_anonymous": false
   *       }
   *     }
   *   },
   *   "error": null
   * }
   * ```
   *
   * @example Refresh session using a refresh token
   * ```js
   * const { data, error } = await supabase.auth.refreshSession({ refresh_token })
   * const { session, user } = data
   * ```
   */
  async refreshSession(e) {
    return await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => await this._refreshSession(e));
  }
  async _refreshSession(e) {
    try {
      return await this._useSession(async (t) => {
        var r;
        if (!e) {
          const { data: s, error: o } = t;
          if (o)
            throw o;
          e = (r = s.session) !== null && r !== void 0 ? r : void 0;
        }
        if (!e?.refresh_token)
          throw new se();
        const { data: n, error: i } = await this._callRefreshToken(e.refresh_token);
        return i ? this._returnResult({ data: { user: null, session: null }, error: i }) : n ? this._returnResult({ data: { user: n.user, session: n }, error: null }) : this._returnResult({ data: { user: null, session: null }, error: null });
      });
    } catch (t) {
      if (P(t))
        return this._returnResult({ data: { user: null, session: null }, error: t });
      throw t;
    }
  }
  /**
   * Gets the session data from a URL string
   */
  async _getSessionFromURL(e, t) {
    var r;
    try {
      if (!ce())
        throw new Wa("No browser detected.");
      if (e.error || e.error_description || e.error_code)
        throw new Wa(e.error_description || "Error in URL with unspecified error_description", {
          error: e.error || "unspecified_error",
          code: e.error_code || "unspecified_code"
        });
      switch (t) {
        case "implicit":
          if (this.flowType === "pkce")
            throw new Ii("Not a valid PKCE flow url.");
          break;
        case "pkce":
          if (this.flowType === "implicit")
            throw new Wa("Not a valid implicit grant flow url.");
          break;
        default:
      }
      if (t === "pkce") {
        if (this._debug("#_initialize()", "begin", "is PKCE flow", !0), !e.code)
          throw new Ii("No code detected.");
        const { data: _, error: I } = await this._exchangeCodeForSession(e.code);
        if (I)
          throw I;
        const j = new URL(window.location.href);
        return j.searchParams.delete("code"), window.history.replaceState(window.history.state, "", j.toString()), {
          data: { session: _.session, redirectType: (r = _.redirectType) !== null && r !== void 0 ? r : null },
          error: null
        };
      }
      const { provider_token: n, provider_refresh_token: i, access_token: s, refresh_token: o, expires_in: l, expires_at: u, token_type: f } = e;
      if (!s || !l || !o || !f)
        throw new Wa("No session defined in URL");
      const d = Math.round(Date.now() / 1e3), g = parseInt(l);
      let b = d + g;
      u && (b = parseInt(u));
      const v = b - d;
      v * 1e3 <= Lt && console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${v}s, should have been closer to ${g}s`);
      const A = b - g;
      d - A >= 120 ? console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", A, b, d) : d - A < 0 && console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew", A, b, d);
      const { data: D, error: x } = await this._getUser(s);
      if (x)
        throw x;
      const O = {
        provider_token: n,
        provider_refresh_token: i,
        access_token: s,
        expires_in: g,
        expires_at: b,
        refresh_token: o,
        token_type: f,
        user: D.user
      };
      return window.location.hash = "", this._debug("#_getSessionFromURL()", "clearing window.location.hash"), this._returnResult({ data: { session: O, redirectType: e.type }, error: null });
    } catch (n) {
      if (P(n))
        return this._returnResult({ data: { session: null, redirectType: null }, error: n });
      throw n;
    }
  }
  /**
   * Checks if the current URL contains parameters given by an implicit oauth grant flow (https://www.rfc-editor.org/rfc/rfc6749.html#section-4.2)
   *
   * If `detectSessionInUrl` is a function, it will be called with the URL and params to determine
   * if the URL should be processed as a Supabase auth callback. This allows users to exclude
   * URLs from other OAuth providers (e.g., Facebook Login) that also return access_token in the fragment.
   */
  _isImplicitGrantCallback(e) {
    return typeof this.detectSessionInUrl == "function" ? this.detectSessionInUrl(new URL(window.location.href), e) : !!(e.access_token || e.error_description);
  }
  /**
   * Checks if the current URL and backing storage contain parameters given by a PKCE flow
   */
  async _isPKCECallback(e) {
    const t = await ut(this.storage, `${this.storageKey}-code-verifier`);
    return !!(e.code && t);
  }
  /**
   * Inside a browser context, `signOut()` will remove the logged in user from the browser session and log them out - removing all items from localstorage and then trigger a `"SIGNED_OUT"` event.
   *
   * For server-side management, you can revoke all refresh tokens for a user by passing a user's JWT through to `auth.api.signOut(JWT: string)`.
   * There is no way to revoke a user's access token jwt until it expires. It is recommended to set a shorter expiry on the jwt for this reason.
   *
   * If using `others` scope, no `SIGNED_OUT` event is fired!
   *
   * **Warning:** the default `scope` is `'global'`. This signs the user out of
   * **every device they are currently signed in on**, not just the current
   * tab/session. If you only want to sign the user out of the current session
   * (the behavior most other auth libraries default to), pass
   * `{ scope: 'local' }` explicitly.
   *
   * @category Auth
   *
   * @remarks
   * - In order to use the `signOut()` method, the user needs to be signed in first.
   * - By default, `signOut()` uses the **global** scope, which signs out the user
   *   on every device they are signed in on (not just the current one). Pass
   *   `{ scope: 'local' }` to only sign out the current session. This is
   *   usually what apps want on a "Sign out" button, especially when users
   *   sign in from multiple devices and do not expect signing out of one to
   *   terminate the others.
   * - Since Supabase Auth uses JWTs for authentication, the access token JWT will be valid until it's expired. When the user signs out, Supabase revokes the refresh token and deletes the JWT from the client-side. This does not revoke the JWT and it will still be valid until it expires.
   *
   * @example Sign out of every device (global – default)
   * ```js
   * const { error } = await supabase.auth.signOut()
   * ```
   *
   * @example Sign out only the current session (recommended for most apps)
   * ```js
   * const { error } = await supabase.auth.signOut({ scope: 'local' })
   * ```
   *
   * @example Sign out of all other sessions, keep the current one
   * ```js
   * const { error } = await supabase.auth.signOut({ scope: 'others' })
   * ```
   */
  async signOut(e = { scope: "global" }) {
    return await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => await this._signOut(e));
  }
  async _signOut({ scope: e } = { scope: "global" }) {
    return await this._useSession(async (t) => {
      var r;
      const { data: n, error: i } = t;
      if (i && !Ha(i))
        return this._returnResult({ error: i });
      const s = (r = n.session) === null || r === void 0 ? void 0 : r.access_token;
      if (s) {
        const { error: o } = await this.admin.signOut(s, e);
        if (o && !(zc(o) && (o.status === 404 || o.status === 401 || o.status === 403) || Ha(o)))
          return this._returnResult({ error: o });
      }
      return e !== "others" && (await this._removeSession(), await le(this.storage, `${this.storageKey}-code-verifier`)), this._returnResult({ error: null });
    });
  }
  /**  *
   * @category Auth
   *
   * @remarks
   * - Subscribes to important events occurring on the user's session.
   * - Use on the frontend/client. It is less useful on the server.
   * - Events are emitted across tabs to keep your application's UI up-to-date. Some events can fire very frequently, based on the number of tabs open. Use a quick and efficient callback function, and defer or debounce as many operations as you can to be performed outside of the callback.
   * - **Important:** A callback can be an `async` function and it runs synchronously during the processing of the changes causing the event. You can easily create a dead-lock by using `await` on a call to another method of the Supabase library.
   *   - Avoid using `async` functions as callbacks.
   *   - Limit the number of `await` calls in `async` callbacks.
   *   - Do not use other Supabase functions in the callback function. If you must, dispatch the functions once the callback has finished executing. Use this as a quick way to achieve this:
   *     ```js
   *     supabase.auth.onAuthStateChange((event, session) => {
   *       setTimeout(async () => {
   *         // await on other Supabase function here
   *         // this runs right after the callback has finished
   *       }, 0)
   *     })
   *     ```
   * - Emitted events:
   *   - `INITIAL_SESSION`
   *     - Emitted right after the Supabase client is constructed and the initial session from storage is loaded.
   *   - `SIGNED_IN`
   *     - Emitted each time a user session is confirmed or re-established, including on user sign in and when refocusing a tab.
   *     - Avoid making assumptions as to when this event is fired, this may occur even when the user is already signed in. Instead, check the user object attached to the event to see if a new user has signed in and update your application's UI.
   *     - This event can fire very frequently depending on the number of tabs open in your application.
   *   - `SIGNED_OUT`
   *     - Emitted when the user signs out. This can be after:
   *       - A call to `supabase.auth.signOut()`.
   *       - After the user's session has expired for any reason:
   *         - User has signed out on another device.
   *         - The session has reached its timebox limit or inactivity timeout.
   *         - User has signed in on another device with single session per user enabled.
   *         - Check the [User Sessions](/docs/guides/auth/sessions) docs for more information.
   *     - Use this to clean up any local storage your application has associated with the user.
   *   - `TOKEN_REFRESHED`
   *     - Emitted each time a new access and refresh token are fetched for the signed in user.
   *     - It's best practice and highly recommended to extract the access token (JWT) and store it in memory for further use in your application.
   *       - Avoid frequent calls to `supabase.auth.getSession()` for the same purpose.
   *     - There is a background process that keeps track of when the session should be refreshed so you will always receive valid tokens by listening to this event.
   *     - The frequency of this event is related to the JWT expiry limit configured on your project.
   *   - `USER_UPDATED`
   *     - Emitted each time the `supabase.auth.updateUser()` method finishes successfully. Listen to it to update your application's UI based on new profile information.
   *   - `PASSWORD_RECOVERY`
   *     - Emitted instead of the `SIGNED_IN` event when the user lands on a page that includes a password recovery link in the URL.
   *     - Use it to show a UI to the user where they can [reset their password](/docs/guides/auth/passwords#resetting-a-users-password-forgot-password).
   *
   * @example Listen to auth changes
   * ```js
   * const { data } = supabase.auth.onAuthStateChange((event, session) => {
   *   console.log(event, session)
   *
   *   if (event === 'INITIAL_SESSION') {
   *     // handle initial session
   *   } else if (event === 'SIGNED_IN') {
   *     // handle sign in event
   *   } else if (event === 'SIGNED_OUT') {
   *     // handle sign out event
   *   } else if (event === 'PASSWORD_RECOVERY') {
   *     // handle password recovery event
   *   } else if (event === 'TOKEN_REFRESHED') {
   *     // handle token refreshed event
   *   } else if (event === 'USER_UPDATED') {
   *     // handle user updated event
   *   }
   * })
   *
   * // call unsubscribe to remove the callback
   * data.subscription.unsubscribe()
   * ```
   *
   * @exampleDescription Listen to sign out
   * Make sure you clear out any local data, such as local and session storage, after the client library has detected the user's sign out.
   *
   * @example Listen to sign out
   * ```js
   * supabase.auth.onAuthStateChange((event, session) => {
   *   if (event === 'SIGNED_OUT') {
   *     console.log('SIGNED_OUT', session)
   *
   *     // clear local and session storage
   *     [
   *       window.localStorage,
   *       window.sessionStorage,
   *     ].forEach((storage) => {
   *       Object.entries(storage)
   *         .forEach(([key]) => {
   *           storage.removeItem(key)
   *         })
   *     })
   *   }
   * })
   * ```
   *
   * @exampleDescription Store OAuth provider tokens on sign in
   * When using [OAuth (Social Login)](/docs/guides/auth/social-login) you sometimes wish to get access to the provider's access token and refresh token, in order to call provider APIs in the name of the user.
   *
   * For example, if you are using [Sign in with Google](/docs/guides/auth/social-login/auth-google) you may want to use the provider token to call Google APIs on behalf of the user. Supabase Auth does not keep track of the provider access and refresh token, but does return them for you once, immediately after sign in. You can use the `onAuthStateChange` method to listen for the presence of the provider tokens and store them in local storage. You can further send them to your server's APIs for use on the backend.
   *
   * Finally, make sure you remove them from local storage on the `SIGNED_OUT` event. If the OAuth provider supports token revocation, make sure you call those APIs either from the frontend or schedule them to be called on the backend.
   *
   * @example Store OAuth provider tokens on sign in
   * ```js
   * // Register this immediately after calling createClient!
   * // Because signInWithOAuth causes a redirect, you need to fetch the
   * // provider tokens from the callback.
   * supabase.auth.onAuthStateChange((event, session) => {
   *   if (session && session.provider_token) {
   *     window.localStorage.setItem('oauth_provider_token', session.provider_token)
   *   }
   *
   *   if (session && session.provider_refresh_token) {
   *     window.localStorage.setItem('oauth_provider_refresh_token', session.provider_refresh_token)
   *   }
   *
   *   if (event === 'SIGNED_OUT') {
   *     window.localStorage.removeItem('oauth_provider_token')
   *     window.localStorage.removeItem('oauth_provider_refresh_token')
   *   }
   * })
   * ```
   *
   * @exampleDescription Use React Context for the User's session
   * Instead of relying on `supabase.auth.getSession()` within your React components, you can use a [React Context](https://react.dev/reference/react/createContext) to store the latest session information from the `onAuthStateChange` callback and access it that way.
   *
   * @example Use React Context for the User's session
   * ```js
   * const SessionContext = React.createContext(null)
   *
   * function main() {
   *   const [session, setSession] = React.useState(null)
   *
   *   React.useEffect(() => {
   *     const {data: { subscription }} = supabase.auth.onAuthStateChange(
   *       (event, session) => {
   *         if (event === 'SIGNED_OUT') {
   *           setSession(null)
   *         } else if (session) {
   *           setSession(session)
   *         }
   *       })
   *
   *     return () => {
   *       subscription.unsubscribe()
   *     }
   *   }, [])
   *
   *   return (
   *     <SessionContext.Provider value={session}>
   *       <App />
   *     </SessionContext.Provider>
   *   )
   * }
   * ```
   *
   * @example Listen to password recovery events
   * ```js
   * supabase.auth.onAuthStateChange((event, session) => {
   *   if (event === 'PASSWORD_RECOVERY') {
   *     console.log('PASSWORD_RECOVERY', session)
   *     // show screen to update user's password
   *     showPasswordResetScreen(true)
   *   }
   * })
   * ```
   *
   * @example Listen to sign in
   * ```js
   * supabase.auth.onAuthStateChange((event, session) => {
   *   if (event === 'SIGNED_IN') console.log('SIGNED_IN', session)
   * })
   * ```
   *
   * @example Listen to token refresh
   * ```js
   * supabase.auth.onAuthStateChange((event, session) => {
   *   if (event === 'TOKEN_REFRESHED') console.log('TOKEN_REFRESHED', session)
   * })
   * ```
   *
   * @example Listen to user updates
   * ```js
   * supabase.auth.onAuthStateChange((event, session) => {
   *   if (event === 'USER_UPDATED') console.log('USER_UPDATED', session)
   * })
   * ```
   */
  onAuthStateChange(e) {
    const t = Gc(), r = {
      id: t,
      callback: e,
      unsubscribe: () => {
        this._debug("#unsubscribe()", "state change callback with id removed", t), this.stateChangeEmitters.delete(t);
      }
    };
    return this._debug("#onAuthStateChange()", "registered callback with id", t), this.stateChangeEmitters.set(t, r), (async () => (await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => {
      this._emitInitialSession(t);
    })))(), { data: { subscription: r } };
  }
  async _emitInitialSession(e) {
    return await this._useSession(async (t) => {
      var r, n;
      try {
        const { data: { session: i }, error: s } = t;
        if (s)
          throw s;
        await ((r = this.stateChangeEmitters.get(e)) === null || r === void 0 ? void 0 : r.callback("INITIAL_SESSION", i)), this._debug("INITIAL_SESSION", "callback id", e, "session", i);
      } catch (i) {
        await ((n = this.stateChangeEmitters.get(e)) === null || n === void 0 ? void 0 : n.callback("INITIAL_SESSION", null)), this._debug("INITIAL_SESSION", "callback id", e, "error", i), Ha(i) ? console.warn(i) : console.error(i);
      }
    });
  }
  /**
   * Sends a password reset request to an email address. This method supports the PKCE flow.
   *
   * @param email The email address of the user.
   * @param options.redirectTo The URL to send the user to after they click the password reset link.
   * @param options.captchaToken Verification token received when the user completes the captcha on the site.
   *
   * @category Auth
   *
   * @remarks
   * - The password reset flow consist of 2 broad steps: (i) Allow the user to login via the password reset link; (ii) Update the user's password.
   * - The `resetPasswordForEmail()` only sends a password reset link to the user's email.
   * To update the user's password, see [`updateUser()`](/docs/reference/javascript/auth-updateuser).
   * - A `PASSWORD_RECOVERY` event will be emitted when the password recovery link is clicked.
   * You can use [`onAuthStateChange()`](/docs/reference/javascript/auth-onauthstatechange) to listen and invoke a callback function on these events.
   * - When the user clicks the reset link in the email they are redirected back to your application.
   * You can configure the URL that the user is redirected to with the `redirectTo` parameter.
   * See [redirect URLs and wildcards](/docs/guides/auth/redirect-urls#use-wildcards-in-redirect-urls) to add additional redirect URLs to your project.
   * - After the user has been redirected successfully, prompt them for a new password and call `updateUser()`:
   * ```js
   * const { data, error } = await supabase.auth.updateUser({
   *   password: new_password
   * })
   * ```
   *
   * @example Reset password
   * ```js
   * const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
   *   redirectTo: 'https://example.com/update-password',
   * })
   * ```
   *
   * @exampleResponse Reset password
   * ```json
   * {
   *   data: {}
   *   error: null
   * }
   * ```
   *
   * @example Reset password (React)
   * ```js
   * /**
   *  * Step 1: Send the user an email to get a password reset token.
   *  * This email contains a link which sends the user back to your application.
   *  *\/
   * const { data, error } = await supabase.auth
   *   .resetPasswordForEmail('user@email.com')
   *
   * /**
   *  * Step 2: Once the user is redirected back to your application,
   *  * ask the user to reset their password.
   *  *\/
   *  useEffect(() => {
   *    supabase.auth.onAuthStateChange(async (event, session) => {
   *      if (event == "PASSWORD_RECOVERY") {
   *        const newPassword = prompt("What would you like your new password to be?");
   *        const { data, error } = await supabase.auth
   *          .updateUser({ password: newPassword })
   *
   *        if (data) alert("Password updated successfully!")
   *        if (error) alert("There was an error updating your password.")
   *      }
   *    })
   *  }, [])
   * ```
   */
  async resetPasswordForEmail(e, t = {}) {
    let r = null, n = null;
    this.flowType === "pkce" && ([r, n] = await xt(
      this.storage,
      this.storageKey,
      !0
      // isPasswordRecovery
    ));
    try {
      return await F(this.fetch, "POST", `${this.url}/recover`, {
        body: {
          email: e,
          code_challenge: r,
          code_challenge_method: n,
          gotrue_meta_security: { captcha_token: t.captchaToken }
        },
        headers: this.headers,
        redirectTo: t.redirectTo
      });
    } catch (i) {
      if (await le(this.storage, `${this.storageKey}-code-verifier`), P(i))
        return this._returnResult({ data: null, error: i });
      throw i;
    }
  }
  /**
   * Gets all the identities linked to a user.
   *
   * @category Auth
   *
   * @remarks
   * - The user needs to be signed in to call `getUserIdentities()`.
   *
   * @example Returns a list of identities linked to the user
   * ```js
   * const { data, error } = await supabase.auth.getUserIdentities()
   * ```
   *
   * @exampleResponse Returns a list of identities linked to the user
   * ```json
   * {
   *   "data": {
   *     "identities": [
   *       {
   *         "identity_id": "22222222-2222-2222-2222-222222222222",
   *         "id": "2024-01-01T00:00:00Z",
   *         "user_id": "2024-01-01T00:00:00Z",
   *         "identity_data": {
   *           "email": "example@email.com",
   *           "email_verified": false,
   *           "phone_verified": false,
   *           "sub": "11111111-1111-1111-1111-111111111111"
   *         },
   *         "provider": "email",
   *         "last_sign_in_at": "2024-01-01T00:00:00Z",
   *         "created_at": "2024-01-01T00:00:00Z",
   *         "updated_at": "2024-01-01T00:00:00Z",
   *         "email": "example@email.com"
   *       }
   *     ]
   *   },
   *   "error": null
   * }
   * ```
   */
  async getUserIdentities() {
    var e;
    try {
      const { data: t, error: r } = await this.getUser();
      if (r)
        throw r;
      return this._returnResult({ data: { identities: (e = t.user.identities) !== null && e !== void 0 ? e : [] }, error: null });
    } catch (t) {
      if (P(t))
        return this._returnResult({ data: null, error: t });
      throw t;
    }
  }
  /**  *
   * @category Auth
   *
   * @remarks
   * - The **Enable Manual Linking** option must be enabled from your [project's authentication settings](/dashboard/project/_/auth/providers).
   * - The user needs to be signed in to call `linkIdentity()`.
   * - If the candidate identity is already linked to the existing user or another user, `linkIdentity()` will fail.
   * - If `linkIdentity` is run in the browser, the user is automatically redirected to the returned URL. On the server, you should handle the redirect.
   *
   * @example Link an identity to a user
   * ```js
   * const { data, error } = await supabase.auth.linkIdentity({
   *   provider: 'github'
   * })
   * ```
   *
   * @exampleResponse Link an identity to a user
   * ```json
   * {
   *   data: {
   *     provider: 'github',
   *     url: <PROVIDER_URL_TO_REDIRECT_TO>
   *   },
   *   error: null
   * }
   * ```
   */
  async linkIdentity(e) {
    return "token" in e ? this.linkIdentityIdToken(e) : this.linkIdentityOAuth(e);
  }
  async linkIdentityOAuth(e) {
    var t;
    try {
      const { data: r, error: n } = await this._useSession(async (i) => {
        var s, o, l, u, f;
        const { data: d, error: g } = i;
        if (g)
          throw g;
        const b = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, e.provider, {
          redirectTo: (s = e.options) === null || s === void 0 ? void 0 : s.redirectTo,
          scopes: (o = e.options) === null || o === void 0 ? void 0 : o.scopes,
          queryParams: (l = e.options) === null || l === void 0 ? void 0 : l.queryParams,
          skipBrowserRedirect: !0
        });
        return await F(this.fetch, "GET", b, {
          headers: this.headers,
          jwt: (f = (u = d.session) === null || u === void 0 ? void 0 : u.access_token) !== null && f !== void 0 ? f : void 0
        });
      });
      if (n)
        throw n;
      return ce() && !(!((t = e.options) === null || t === void 0) && t.skipBrowserRedirect) && window.location.assign(r?.url), this._returnResult({
        data: { provider: e.provider, url: r?.url },
        error: null
      });
    } catch (r) {
      if (P(r))
        return this._returnResult({ data: { provider: e.provider, url: null }, error: r });
      throw r;
    }
  }
  async linkIdentityIdToken(e) {
    return await this._useSession(async (t) => {
      var r;
      try {
        const { error: n, data: { session: i } } = t;
        if (n)
          throw n;
        const { options: s, provider: o, token: l, access_token: u, nonce: f } = e, d = await F(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
          headers: this.headers,
          jwt: (r = i?.access_token) !== null && r !== void 0 ? r : void 0,
          body: {
            provider: o,
            id_token: l,
            access_token: u,
            nonce: f,
            link_identity: !0,
            gotrue_meta_security: { captcha_token: s?.captchaToken }
          },
          xform: Ne
        }), { data: g, error: b } = d;
        return b ? this._returnResult({ data: { user: null, session: null }, error: b }) : !g || !g.session || !g.user ? this._returnResult({
          data: { user: null, session: null },
          error: new Ct()
        }) : (g.session && (await this._saveSession(g.session), await this._notifyAllSubscribers("USER_UPDATED", g.session)), this._returnResult({ data: g, error: b }));
      } catch (n) {
        if (await le(this.storage, `${this.storageKey}-code-verifier`), P(n))
          return this._returnResult({ data: { user: null, session: null }, error: n });
        throw n;
      }
    });
  }
  /**
   * Unlinks an identity from a user by deleting it. The user will no longer be able to sign in with that identity once it's unlinked.
   *
   * @category Auth
   *
   * @remarks
   * - The **Enable Manual Linking** option must be enabled from your [project's authentication settings](/dashboard/project/_/auth/providers).
   * - The user needs to be signed in to call `unlinkIdentity()`.
   * - The user must have at least 2 identities in order to unlink an identity.
   * - The identity to be unlinked must belong to the user.
   *
   * @example Unlink an identity
   * ```js
   * // retrieve all identities linked to a user
   * const identities = await supabase.auth.getUserIdentities()
   *
   * // find the google identity
   * const googleIdentity = identities.find(
   *   identity => identity.provider === 'google'
   * )
   *
   * // unlink the google identity
   * const { error } = await supabase.auth.unlinkIdentity(googleIdentity)
   * ```
   */
  async unlinkIdentity(e) {
    try {
      return await this._useSession(async (t) => {
        var r, n;
        const { data: i, error: s } = t;
        if (s)
          throw s;
        return await F(this.fetch, "DELETE", `${this.url}/user/identities/${e.identity_id}`, {
          headers: this.headers,
          jwt: (n = (r = i.session) === null || r === void 0 ? void 0 : r.access_token) !== null && n !== void 0 ? n : void 0
        });
      });
    } catch (t) {
      if (P(t))
        return this._returnResult({ data: null, error: t });
      throw t;
    }
  }
  /**
   * Generates a new JWT.
   * @param refreshToken A valid refresh token that was returned on login.
   */
  async _refreshAccessToken(e) {
    const t = `#_refreshAccessToken(${e.substring(0, 5)}...)`;
    this._debug(t, "begin");
    try {
      const r = Date.now();
      return await Yc(async (n) => (n > 0 && await Jc(200 * Math.pow(2, n - 1)), this._debug(t, "refreshing attempt", n), await F(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
        body: { refresh_token: e },
        headers: this.headers,
        xform: Ne
      })), (n, i) => {
        const s = 200 * Math.pow(2, n);
        return i && Gr(i) && // retryable only if the request can be sent before the backoff overflows the tick duration
        Date.now() + s - r < Lt;
      });
    } catch (r) {
      if (this._debug(t, "error", r), P(r))
        return this._returnResult({ data: { session: null, user: null }, error: r });
      throw r;
    } finally {
      this._debug(t, "end");
    }
  }
  _isValidSession(e) {
    return typeof e == "object" && e !== null && "access_token" in e && "refresh_token" in e && "expires_at" in e;
  }
  async _handleProviderSignIn(e, t) {
    const r = await this._getUrlForProvider(`${this.url}/authorize`, e, {
      redirectTo: t.redirectTo,
      scopes: t.scopes,
      queryParams: t.queryParams
    });
    return this._debug("#_handleProviderSignIn()", "provider", e, "options", t, "url", r), ce() && !t.skipBrowserRedirect && window.location.assign(r), { data: { provider: e, url: r }, error: null };
  }
  /**
   * Recovers the session from LocalStorage and refreshes the token
   * Note: this method is async to accommodate for AsyncStorage e.g. in React native.
   */
  async _recoverAndRefresh() {
    var e, t;
    const r = "#_recoverAndRefresh()";
    this._debug(r, "begin");
    try {
      const n = await ut(this.storage, this.storageKey);
      if (n && this.userStorage) {
        let s = await ut(this.userStorage, this.storageKey + "-user");
        !this.storage.isServer && Object.is(this.storage, this.userStorage) && !s && (s = { user: n.user }, await zt(this.userStorage, this.storageKey + "-user", s)), n.user = (e = s?.user) !== null && e !== void 0 ? e : Kr();
      } else if (n && !n.user && !n.user) {
        const s = await ut(this.storage, this.storageKey + "-user");
        s && s?.user ? (n.user = s.user, await le(this.storage, this.storageKey + "-user"), await zt(this.storage, this.storageKey, n)) : n.user = Kr();
      }
      if (this._debug(r, "session from storage", n), !this._isValidSession(n)) {
        this._debug(r, "session is not valid"), n !== null && await this._removeSession();
        return;
      }
      const i = ((t = n.expires_at) !== null && t !== void 0 ? t : 1 / 0) * 1e3 - Date.now() < Wr;
      if (this._debug(r, `session has${i ? "" : " not"} expired with margin of ${Wr}s`), i) {
        if (this.autoRefreshToken && n.refresh_token) {
          const { error: s } = await this._callRefreshToken(n.refresh_token);
          s && (console.error(s), Gr(s) || (this._debug(r, "refresh failed with a non-retryable error, removing the session", s), await this._removeSession()));
        }
      } else if (n.user && n.user.__isUserNotAvailableProxy === !0)
        try {
          const { data: s, error: o } = await this._getUser(n.access_token);
          !o && s?.user ? (n.user = s.user, await this._saveSession(n), await this._notifyAllSubscribers("SIGNED_IN", n)) : this._debug(r, "could not get user data, skipping SIGNED_IN notification");
        } catch (s) {
          console.error("Error getting user data:", s), this._debug(r, "error getting user data, skipping SIGNED_IN notification", s);
        }
      else
        await this._notifyAllSubscribers("SIGNED_IN", n);
    } catch (n) {
      this._debug(r, "error", n), console.error(n);
      return;
    } finally {
      this._debug(r, "end");
    }
  }
  async _callRefreshToken(e) {
    var t, r;
    if (!e)
      throw new se();
    if (this.refreshingDeferred)
      return this.refreshingDeferred.promise;
    const n = `#_callRefreshToken(${e.substring(0, 5)}...)`;
    this._debug(n, "begin");
    try {
      this.refreshingDeferred = new cr();
      const { data: i, error: s } = await this._refreshAccessToken(e);
      if (s)
        throw s;
      if (!i.session)
        throw new se();
      await this._saveSession(i.session), await this._notifyAllSubscribers("TOKEN_REFRESHED", i.session);
      const o = { data: i.session, error: null };
      return this.refreshingDeferred.resolve(o), o;
    } catch (i) {
      if (this._debug(n, "error", i), P(i)) {
        const s = { data: null, error: i };
        return Gr(i) || await this._removeSession(), (t = this.refreshingDeferred) === null || t === void 0 || t.resolve(s), s;
      }
      throw (r = this.refreshingDeferred) === null || r === void 0 || r.reject(i), i;
    } finally {
      this.refreshingDeferred = null, this._debug(n, "end");
    }
  }
  async _notifyAllSubscribers(e, t, r = !0) {
    const n = `#_notifyAllSubscribers(${e})`;
    this._debug(n, "begin", t, `broadcast = ${r}`);
    try {
      this.broadcastChannel && r && this.broadcastChannel.postMessage({ event: e, session: t });
      const i = [], s = Array.from(this.stateChangeEmitters.values()).map(async (o) => {
        try {
          await o.callback(e, t);
        } catch (l) {
          i.push(l);
        }
      });
      if (await Promise.all(s), i.length > 0) {
        for (let o = 0; o < i.length; o += 1)
          console.error(i[o]);
        throw i[0];
      }
    } finally {
      this._debug(n, "end");
    }
  }
  /**
   * set currentSession and currentUser
   * process to _startAutoRefreshToken if possible
   */
  async _saveSession(e) {
    this._debug("#_saveSession()", e), this.suppressGetSessionWarning = !0, await le(this.storage, `${this.storageKey}-code-verifier`);
    const t = Object.assign({}, e), r = t.user && t.user.__isUserNotAvailableProxy === !0;
    if (this.userStorage) {
      !r && t.user && await zt(this.userStorage, this.storageKey + "-user", {
        user: t.user
      });
      const n = Object.assign({}, t);
      delete n.user;
      const i = Ui(n);
      await zt(this.storage, this.storageKey, i);
    } else {
      const n = Ui(t);
      await zt(this.storage, this.storageKey, n);
    }
  }
  async _removeSession() {
    this._debug("#_removeSession()"), this.suppressGetSessionWarning = !1, await le(this.storage, this.storageKey), await le(this.storage, this.storageKey + "-code-verifier"), await le(this.storage, this.storageKey + "-user"), this.userStorage && await le(this.userStorage, this.storageKey + "-user"), await this._notifyAllSubscribers("SIGNED_OUT", null);
  }
  /**
   * Removes any registered visibilitychange callback.
   *
   * {@see #startAutoRefresh}
   * {@see #stopAutoRefresh}
   */
  _removeVisibilityChangedCallback() {
    this._debug("#_removeVisibilityChangedCallback()");
    const e = this.visibilityChangedCallback;
    this.visibilityChangedCallback = null;
    try {
      e && ce() && window?.removeEventListener && window.removeEventListener("visibilitychange", e);
    } catch (t) {
      console.error("removing visibilitychange callback failed", t);
    }
  }
  /**
   * This is the private implementation of {@link #startAutoRefresh}. Use this
   * within the library.
   */
  async _startAutoRefresh() {
    await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()");
    const e = setInterval(() => this._autoRefreshTokenTick(), Lt);
    this.autoRefreshTicker = e, e && typeof e == "object" && typeof e.unref == "function" ? e.unref() : typeof Deno < "u" && typeof Deno.unrefTimer == "function" && Deno.unrefTimer(e);
    const t = setTimeout(async () => {
      await this.initializePromise, await this._autoRefreshTokenTick();
    }, 0);
    this.autoRefreshTickTimeout = t, t && typeof t == "object" && typeof t.unref == "function" ? t.unref() : typeof Deno < "u" && typeof Deno.unrefTimer == "function" && Deno.unrefTimer(t);
  }
  /**
   * This is the private implementation of {@link #stopAutoRefresh}. Use this
   * within the library.
   */
  async _stopAutoRefresh() {
    this._debug("#_stopAutoRefresh()");
    const e = this.autoRefreshTicker;
    this.autoRefreshTicker = null, e && clearInterval(e);
    const t = this.autoRefreshTickTimeout;
    this.autoRefreshTickTimeout = null, t && clearTimeout(t);
  }
  /**
   * Starts an auto-refresh process in the background. The session is checked
   * every few seconds. Close to the time of expiration a process is started to
   * refresh the session. If refreshing fails it will be retried for as long as
   * necessary.
   *
   * If you set the {@link GoTrueClientOptions#autoRefreshToken} you don't need
   * to call this function, it will be called for you.
   *
   * On browsers the refresh process works only when the tab/window is in the
   * foreground to conserve resources as well as prevent race conditions and
   * flooding auth with requests. If you call this method any managed
   * visibility change callback will be removed and you must manage visibility
   * changes on your own.
   *
   * On non-browser platforms the refresh process works *continuously* in the
   * background, which may not be desirable. You should hook into your
   * platform's foreground indication mechanism and call these methods
   * appropriately to conserve resources.
   *
   * {@see #stopAutoRefresh}
   *
   * @category Auth
   *
   * @remarks
   * - Only useful in non-browser environments such as React Native or Electron.
   * - The Supabase Auth library automatically starts and stops proactively refreshing the session when a tab is focused or not.
   * - On non-browser platforms, such as mobile or desktop apps built with web technologies, the library is not able to effectively determine whether the application is _focused_ or not.
   * - To give this hint to the application, you should be calling this method when the app is in focus and calling `supabase.auth.stopAutoRefresh()` when it's out of focus.
   *
   * @example Start and stop auto refresh in React Native
   * ```js
   * import { AppState } from 'react-native'
   *
   * // make sure you register this only once!
   * AppState.addEventListener('change', (state) => {
   *   if (state === 'active') {
   *     supabase.auth.startAutoRefresh()
   *   } else {
   *     supabase.auth.stopAutoRefresh()
   *   }
   * })
   * ```
   */
  async startAutoRefresh() {
    this._removeVisibilityChangedCallback(), await this._startAutoRefresh();
  }
  /**
   * Stops an active auto refresh process running in the background (if any).
   *
   * If you call this method any managed visibility change callback will be
   * removed and you must manage visibility changes on your own.
   *
   * See {@link #startAutoRefresh} for more details.
   *
   * @category Auth
   *
   * @remarks
   * - Only useful in non-browser environments such as React Native or Electron.
   * - The Supabase Auth library automatically starts and stops proactively refreshing the session when a tab is focused or not.
   * - On non-browser platforms, such as mobile or desktop apps built with web technologies, the library is not able to effectively determine whether the application is _focused_ or not.
   * - When your application goes in the background or out of focus, call this method to stop the proactive refreshing of the session.
   *
   * @example Start and stop auto refresh in React Native
   * ```js
   * import { AppState } from 'react-native'
   *
   * // make sure you register this only once!
   * AppState.addEventListener('change', (state) => {
   *   if (state === 'active') {
   *     supabase.auth.startAutoRefresh()
   *   } else {
   *     supabase.auth.stopAutoRefresh()
   *   }
   * })
   * ```
   */
  async stopAutoRefresh() {
    this._removeVisibilityChangedCallback(), await this._stopAutoRefresh();
  }
  /**
   * Runs the auto refresh token tick.
   */
  async _autoRefreshTokenTick() {
    this._debug("#_autoRefreshTokenTick()", "begin");
    try {
      await this._acquireLock(0, async () => {
        try {
          const e = Date.now();
          try {
            return await this._useSession(async (t) => {
              const { data: { session: r } } = t;
              if (!r || !r.refresh_token || !r.expires_at) {
                this._debug("#_autoRefreshTokenTick()", "no session");
                return;
              }
              const n = Math.floor((r.expires_at * 1e3 - e) / Lt);
              this._debug("#_autoRefreshTokenTick()", `access token expires in ${n} ticks, a tick lasts ${Lt}ms, refresh threshold is ${fn} ticks`), n <= fn && await this._callRefreshToken(r.refresh_token);
            });
          } catch (t) {
            console.error("Auto refresh tick failed with error. This is likely a transient error.", t);
          }
        } finally {
          this._debug("#_autoRefreshTokenTick()", "end");
        }
      });
    } catch (e) {
      if (e instanceof Ws)
        this._debug("auto refresh token tick lock not available");
      else
        throw e;
    }
  }
  /**
   * Registers callbacks on the browser / platform, which in-turn run
   * algorithms when the browser window/tab are in foreground. On non-browser
   * platforms it assumes always foreground.
   */
  async _handleVisibilityChange() {
    if (this._debug("#_handleVisibilityChange()"), !ce() || !window?.addEventListener)
      return this.autoRefreshToken && this.startAutoRefresh(), !1;
    try {
      this.visibilityChangedCallback = async () => {
        try {
          await this._onVisibilityChanged(!1);
        } catch (e) {
          this._debug("#visibilityChangedCallback", "error", e);
        }
      }, window?.addEventListener("visibilitychange", this.visibilityChangedCallback), await this._onVisibilityChanged(!0);
    } catch (e) {
      console.error("_handleVisibilityChange", e);
    }
  }
  /**
   * Callback registered with `window.addEventListener('visibilitychange')`.
   */
  async _onVisibilityChanged(e) {
    const t = `#_onVisibilityChanged(${e})`;
    this._debug(t, "visibilityState", document.visibilityState), document.visibilityState === "visible" ? (this.autoRefreshToken && this._startAutoRefresh(), e || (await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => {
      if (document.visibilityState !== "visible") {
        this._debug(t, "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");
        return;
      }
      await this._recoverAndRefresh();
    }))) : document.visibilityState === "hidden" && this.autoRefreshToken && this._stopAutoRefresh();
  }
  /**
   * Generates the relevant login URL for a third-party provider.
   * @param options.redirectTo A URL or mobile address to send the user to after they are confirmed.
   * @param options.scopes A space-separated list of scopes granted to the OAuth application.
   * @param options.queryParams An object of key-value pairs containing query parameters granted to the OAuth application.
   */
  async _getUrlForProvider(e, t, r) {
    const n = [`provider=${encodeURIComponent(t)}`];
    if (r?.redirectTo && n.push(`redirect_to=${encodeURIComponent(r.redirectTo)}`), r?.scopes && n.push(`scopes=${encodeURIComponent(r.scopes)}`), this.flowType === "pkce") {
      const [i, s] = await xt(this.storage, this.storageKey), o = new URLSearchParams({
        code_challenge: `${encodeURIComponent(i)}`,
        code_challenge_method: `${encodeURIComponent(s)}`
      });
      n.push(o.toString());
    }
    if (r?.queryParams) {
      const i = new URLSearchParams(r.queryParams);
      n.push(i.toString());
    }
    return r?.skipBrowserRedirect && n.push(`skip_http_redirect=${r.skipBrowserRedirect}`), `${e}?${n.join("&")}`;
  }
  async _unenroll(e) {
    try {
      return await this._useSession(async (t) => {
        var r;
        const { data: n, error: i } = t;
        return i ? this._returnResult({ data: null, error: i }) : await F(this.fetch, "DELETE", `${this.url}/factors/${e.factorId}`, {
          headers: this.headers,
          jwt: (r = n?.session) === null || r === void 0 ? void 0 : r.access_token
        });
      });
    } catch (t) {
      if (P(t))
        return this._returnResult({ data: null, error: t });
      throw t;
    }
  }
  async _enroll(e) {
    try {
      return await this._useSession(async (t) => {
        var r, n;
        const { data: i, error: s } = t;
        if (s)
          return this._returnResult({ data: null, error: s });
        const o = Object.assign({ friendly_name: e.friendlyName, factor_type: e.factorType }, e.factorType === "phone" ? { phone: e.phone } : e.factorType === "totp" ? { issuer: e.issuer } : {}), { data: l, error: u } = await F(this.fetch, "POST", `${this.url}/factors`, {
          body: o,
          headers: this.headers,
          jwt: (r = i?.session) === null || r === void 0 ? void 0 : r.access_token
        });
        return u ? this._returnResult({ data: null, error: u }) : (e.factorType === "totp" && l.type === "totp" && (!((n = l?.totp) === null || n === void 0) && n.qr_code) && (l.totp.qr_code = `data:image/svg+xml;utf-8,${l.totp.qr_code}`), this._returnResult({ data: l, error: null }));
      });
    } catch (t) {
      if (P(t))
        return this._returnResult({ data: null, error: t });
      throw t;
    }
  }
  async _verify(e) {
    return this._acquireLock(this.lockAcquireTimeout, async () => {
      try {
        return await this._useSession(async (t) => {
          var r;
          const { data: n, error: i } = t;
          if (i)
            return this._returnResult({ data: null, error: i });
          const s = Object.assign({ challenge_id: e.challengeId }, "webauthn" in e ? {
            webauthn: Object.assign(Object.assign({}, e.webauthn), { credential_response: e.webauthn.type === "create" ? Ki(e.webauthn.credential_response) : Vi(e.webauthn.credential_response) })
          } : { code: e.code }), { data: o, error: l } = await F(this.fetch, "POST", `${this.url}/factors/${e.factorId}/verify`, {
            body: s,
            headers: this.headers,
            jwt: (r = n?.session) === null || r === void 0 ? void 0 : r.access_token
          });
          return l ? this._returnResult({ data: null, error: l }) : (await this._saveSession(Object.assign({ expires_at: Math.round(Date.now() / 1e3) + o.expires_in }, o)), await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", o), this._returnResult({ data: o, error: l }));
        });
      } catch (t) {
        if (P(t))
          return this._returnResult({ data: null, error: t });
        throw t;
      }
    });
  }
  async _challenge(e) {
    return this._acquireLock(this.lockAcquireTimeout, async () => {
      try {
        return await this._useSession(async (t) => {
          var r;
          const { data: n, error: i } = t;
          if (i)
            return this._returnResult({ data: null, error: i });
          const s = await F(this.fetch, "POST", `${this.url}/factors/${e.factorId}/challenge`, {
            body: e,
            headers: this.headers,
            jwt: (r = n?.session) === null || r === void 0 ? void 0 : r.access_token
          });
          if (s.error)
            return s;
          const { data: o } = s;
          if (o.type !== "webauthn")
            return { data: o, error: null };
          switch (o.webauthn.type) {
            case "create":
              return {
                data: Object.assign(Object.assign({}, o), { webauthn: Object.assign(Object.assign({}, o.webauthn), { credential_options: Object.assign(Object.assign({}, o.webauthn.credential_options), { publicKey: Wi(o.webauthn.credential_options.publicKey) }) }) }),
                error: null
              };
            case "request":
              return {
                data: Object.assign(Object.assign({}, o), { webauthn: Object.assign(Object.assign({}, o.webauthn), { credential_options: Object.assign(Object.assign({}, o.webauthn.credential_options), { publicKey: Gi(o.webauthn.credential_options.publicKey) }) }) }),
                error: null
              };
          }
        });
      } catch (t) {
        if (P(t))
          return this._returnResult({ data: null, error: t });
        throw t;
      }
    });
  }
  /**
   * {@see GoTrueMFAApi#challengeAndVerify}
   */
  async _challengeAndVerify(e) {
    const { data: t, error: r } = await this._challenge({
      factorId: e.factorId
    });
    return r ? this._returnResult({ data: null, error: r }) : await this._verify({
      factorId: e.factorId,
      challengeId: t.id,
      code: e.code
    });
  }
  /**
   * {@see GoTrueMFAApi#listFactors}
   */
  async _listFactors() {
    var e;
    const { data: { user: t }, error: r } = await this.getUser();
    if (r)
      return { data: null, error: r };
    const n = {
      all: [],
      phone: [],
      totp: [],
      webauthn: []
    };
    for (const i of (e = t?.factors) !== null && e !== void 0 ? e : [])
      n.all.push(i), i.status === "verified" && n[i.factor_type].push(i);
    return {
      data: n,
      error: null
    };
  }
  /**
   * {@see GoTrueMFAApi#getAuthenticatorAssuranceLevel}
   */
  async _getAuthenticatorAssuranceLevel(e) {
    var t, r, n, i;
    if (e)
      try {
        const { payload: b } = Ga(e);
        let v = null;
        b.aal && (v = b.aal);
        let A = v;
        const { data: { user: D }, error: x } = await this.getUser(e);
        if (x)
          return this._returnResult({ data: null, error: x });
        ((r = (t = D?.factors) === null || t === void 0 ? void 0 : t.filter((I) => I.status === "verified")) !== null && r !== void 0 ? r : []).length > 0 && (A = "aal2");
        const _ = b.amr || [];
        return { data: { currentLevel: v, nextLevel: A, currentAuthenticationMethods: _ }, error: null };
      } catch (b) {
        if (P(b))
          return this._returnResult({ data: null, error: b });
        throw b;
      }
    const { data: { session: s }, error: o } = await this.getSession();
    if (o)
      return this._returnResult({ data: null, error: o });
    if (!s)
      return {
        data: { currentLevel: null, nextLevel: null, currentAuthenticationMethods: [] },
        error: null
      };
    const { payload: l } = Ga(s.access_token);
    let u = null;
    l.aal && (u = l.aal);
    let f = u;
    ((i = (n = s.user.factors) === null || n === void 0 ? void 0 : n.filter((b) => b.status === "verified")) !== null && i !== void 0 ? i : []).length > 0 && (f = "aal2");
    const g = l.amr || [];
    return { data: { currentLevel: u, nextLevel: f, currentAuthenticationMethods: g }, error: null };
  }
  /**
   * Retrieves details about an OAuth authorization request.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * Returns authorization details including client info, scopes, and user information.
   * If the response includes only a redirect_url field, it means consent was already given - the caller
   * should handle the redirect manually if needed.
   */
  async _getAuthorizationDetails(e) {
    try {
      return await this._useSession(async (t) => {
        const { data: { session: r }, error: n } = t;
        return n ? this._returnResult({ data: null, error: n }) : r ? await F(this.fetch, "GET", `${this.url}/oauth/authorizations/${e}`, {
          headers: this.headers,
          jwt: r.access_token,
          xform: (i) => ({ data: i, error: null })
        }) : this._returnResult({ data: null, error: new se() });
      });
    } catch (t) {
      if (P(t))
        return this._returnResult({ data: null, error: t });
      throw t;
    }
  }
  /**
   * Approves an OAuth authorization request.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   */
  async _approveAuthorization(e, t) {
    try {
      return await this._useSession(async (r) => {
        const { data: { session: n }, error: i } = r;
        if (i)
          return this._returnResult({ data: null, error: i });
        if (!n)
          return this._returnResult({ data: null, error: new se() });
        const s = await F(this.fetch, "POST", `${this.url}/oauth/authorizations/${e}/consent`, {
          headers: this.headers,
          jwt: n.access_token,
          body: { action: "approve" },
          xform: (o) => ({ data: o, error: null })
        });
        return s.data && s.data.redirect_url && ce() && !t?.skipBrowserRedirect && window.location.assign(s.data.redirect_url), s;
      });
    } catch (r) {
      if (P(r))
        return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  /**
   * Denies an OAuth authorization request.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   */
  async _denyAuthorization(e, t) {
    try {
      return await this._useSession(async (r) => {
        const { data: { session: n }, error: i } = r;
        if (i)
          return this._returnResult({ data: null, error: i });
        if (!n)
          return this._returnResult({ data: null, error: new se() });
        const s = await F(this.fetch, "POST", `${this.url}/oauth/authorizations/${e}/consent`, {
          headers: this.headers,
          jwt: n.access_token,
          body: { action: "deny" },
          xform: (o) => ({ data: o, error: null })
        });
        return s.data && s.data.redirect_url && ce() && !t?.skipBrowserRedirect && window.location.assign(s.data.redirect_url), s;
      });
    } catch (r) {
      if (P(r))
        return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  /**
   * Lists all OAuth grants that the authenticated user has authorized.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   */
  async _listOAuthGrants() {
    try {
      return await this._useSession(async (e) => {
        const { data: { session: t }, error: r } = e;
        return r ? this._returnResult({ data: null, error: r }) : t ? await F(this.fetch, "GET", `${this.url}/user/oauth/grants`, {
          headers: this.headers,
          jwt: t.access_token,
          xform: (n) => ({ data: n, error: null })
        }) : this._returnResult({ data: null, error: new se() });
      });
    } catch (e) {
      if (P(e))
        return this._returnResult({ data: null, error: e });
      throw e;
    }
  }
  /**
   * Revokes a user's OAuth grant for a specific client.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   */
  async _revokeOAuthGrant(e) {
    try {
      return await this._useSession(async (t) => {
        const { data: { session: r }, error: n } = t;
        return n ? this._returnResult({ data: null, error: n }) : r ? (await F(this.fetch, "DELETE", `${this.url}/user/oauth/grants`, {
          headers: this.headers,
          jwt: r.access_token,
          query: { client_id: e.clientId },
          noResolveJson: !0
        }), { data: {}, error: null }) : this._returnResult({ data: null, error: new se() });
      });
    } catch (t) {
      if (P(t))
        return this._returnResult({ data: null, error: t });
      throw t;
    }
  }
  async fetchJwk(e, t = { keys: [] }) {
    let r = t.keys.find((o) => o.kid === e);
    if (r)
      return r;
    const n = Date.now();
    if (r = this.jwks.keys.find((o) => o.kid === e), r && this.jwks_cached_at + Pc > n)
      return r;
    const { data: i, error: s } = await F(this.fetch, "GET", `${this.url}/.well-known/jwks.json`, {
      headers: this.headers
    });
    if (s)
      throw s;
    return !i.keys || i.keys.length === 0 || (this.jwks = i, this.jwks_cached_at = n, r = i.keys.find((o) => o.kid === e), !r) ? null : r;
  }
  /**
   * Extracts the JWT claims present in the access token by first verifying the
   * JWT against the server's JSON Web Key Set endpoint
   * `/.well-known/jwks.json` which is often cached, resulting in significantly
   * faster responses. Prefer this method over {@link #getUser} which always
   * sends a request to the Auth server for each JWT.
   *
   * If the project is not using an asymmetric JWT signing key (like ECC or
   * RSA) it always sends a request to the Auth server (similar to {@link
   * #getUser}) to verify the JWT.
   *
   * @param jwt An optional specific JWT you wish to verify, not the one you
   *            can obtain from {@link #getSession}.
   * @param options Various additional options that allow you to customize the
   *                behavior of this method.
   *
   * @category Auth
   *
   * @remarks
   * - Parses the user's [access token](/docs/guides/auth/sessions#access-token-jwt-claims) as a [JSON Web Token (JWT)](/docs/guides/auth/jwts) and returns its components if valid and not expired.
   * - If your project is using asymmetric JWT signing keys, then the verification is done locally usually without a network request using the [WebCrypto API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API).
   * - A network request is sent to your project's JWT signing key discovery endpoint `https://project-id.supabase.co/auth/v1/.well-known/jwks.json`, which is cached locally. If your environment is ephemeral, such as a Lambda function that is destroyed after every request, a network request will be sent for each new invocation. Supabase provides a network-edge cache providing fast responses for these situations.
   * - If the user's access token is about to expire when calling this function, the user's session will first be refreshed before validating the JWT.
   * - If your project is using a symmetric secret to sign the JWT, it always sends a request similar to `getUser()` to validate the JWT at the server before returning the decoded token. This is also used if the WebCrypto API is not available in the environment. Make sure you polyfill it in such situations.
   * - The returned claims can be customized per project using the [Custom Access Token Hook](/docs/guides/auth/auth-hooks/custom-access-token-hook).
   *
   * @example Get JWT claims, header and signature
   * ```js
   * const { data, error } = await supabase.auth.getClaims()
   * ```
   *
   * @exampleResponse Get JWT claims, header and signature
   * ```json
   * {
   *   "data": {
   *     "claims": {
   *       "aal": "aal1",
   *       "amr": [{
   *         "method": "email",
   *         "timestamp": 1715766000
   *       }],
   *       "app_metadata": {},
   *       "aud": "authenticated",
   *       "email": "example@email.com",
   *       "exp": 1715769600,
   *       "iat": 1715766000,
   *       "is_anonymous": false,
   *       "iss": "https://project-id.supabase.co/auth/v1",
   *       "phone": "+13334445555",
   *       "role": "authenticated",
   *       "session_id": "11111111-1111-1111-1111-111111111111",
   *       "sub": "11111111-1111-1111-1111-111111111111",
   *       "user_metadata": {}
   *     },
   *     "header": {
   *       "alg": "RS256",
   *       "typ": "JWT",
   *       "kid": "11111111-1111-1111-1111-111111111111"
   *     },
   *     "signature": [/** Uint8Array *\/],
   *   },
   *   "error": null
   * }
   * ```
   */
  async getClaims(e, t = {}) {
    try {
      let r = e;
      if (!r) {
        const { data: b, error: v } = await this.getSession();
        if (v || !b.session)
          return this._returnResult({ data: null, error: v });
        r = b.session.access_token;
      }
      const { header: n, payload: i, signature: s, raw: { header: o, payload: l } } = Ga(r);
      t?.allowExpired || rh(i.exp);
      const u = !n.alg || n.alg.startsWith("HS") || !n.kid || !("crypto" in globalThis && "subtle" in globalThis.crypto) ? null : await this.fetchJwk(n.kid, t?.keys ? { keys: t.keys } : t?.jwks);
      if (!u) {
        const { error: b } = await this.getUser(r);
        if (b)
          throw b;
        return {
          data: {
            claims: i,
            header: n,
            signature: s
          },
          error: null
        };
      }
      const f = nh(n.alg), d = await crypto.subtle.importKey("jwk", u, f, !0, [
        "verify"
      ]);
      if (!await crypto.subtle.verify(f, d, s, qc(`${o}.${l}`)))
        throw new pn("Invalid JWT signature");
      return {
        data: {
          claims: i,
          header: n,
          signature: s
        },
        error: null
      };
    } catch (r) {
      if (P(r))
        return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  // --- Passkey Methods ---
  /**
   * Sign in with a passkey. Handles the full WebAuthn ceremony:
   * 1. Fetches authentication challenge from server
   * 2. Prompts user via navigator.credentials.get()
   * 3. Verifies credential with server and creates session
   *
   * Requires `auth.experimental.passkey: true`.
   *
   * @category Auth
   */
  async signInWithPasskey(e) {
    var t, r, n;
    xe(this.experimental);
    try {
      if (!rr())
        return this._returnResult({
          data: null,
          error: new Ie("Browser does not support WebAuthn", null)
        });
      const { data: i, error: s } = await this._startPasskeyAuthentication({
        options: { captchaToken: (t = e?.options) === null || t === void 0 ? void 0 : t.captchaToken }
      });
      if (s || !i)
        return this._returnResult({ data: null, error: s });
      const o = Gi(i.options), l = (n = (r = e?.options) === null || r === void 0 ? void 0 : r.signal) !== null && n !== void 0 ? n : yn.createNewAbortSignal(), { data: u, error: f } = await Js({
        publicKey: o,
        signal: l
      });
      if (f || !u)
        return this._returnResult({
          data: null,
          error: f ?? new Ie("WebAuthn ceremony failed", null)
        });
      const d = Vi(u);
      return this._verifyPasskeyAuthentication({
        challengeId: i.challenge_id,
        credential: d
      });
    } catch (i) {
      if (P(i))
        return this._returnResult({ data: null, error: i });
      throw i;
    }
  }
  /**
   * Register a passkey for the current authenticated user. Handles the full WebAuthn ceremony:
   * 1. Fetches registration challenge from server
   * 2. Prompts user via navigator.credentials.create()
   * 3. Verifies credential with server
   *
   * Requires an active session. Requires `auth.experimental.passkey: true`.
   *
   * @category Auth
   */
  async registerPasskey(e) {
    var t, r;
    xe(this.experimental);
    try {
      if (!rr())
        return this._returnResult({
          data: null,
          error: new Ie("Browser does not support WebAuthn", null)
        });
      const { data: n, error: i } = await this._startPasskeyRegistration();
      if (i || !n)
        return this._returnResult({ data: null, error: i });
      const s = Wi(n.options), o = (r = (t = e?.options) === null || t === void 0 ? void 0 : t.signal) !== null && r !== void 0 ? r : yn.createNewAbortSignal(), { data: l, error: u } = await Vs({
        publicKey: s,
        signal: o
      });
      if (u || !l)
        return this._returnResult({
          data: null,
          error: u ?? new Ie("WebAuthn ceremony failed", null)
        });
      const f = Ki(l);
      return this._verifyPasskeyRegistration({
        challengeId: n.challenge_id,
        credential: f
      });
    } catch (n) {
      if (P(n))
        return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
  /**
   * Start passkey registration for the current authenticated user.
   * Returns WebAuthn credential creation options to pass to navigator.credentials.create().
   */
  async _startPasskeyRegistration() {
    xe(this.experimental);
    try {
      return await this._useSession(async (e) => {
        const { data: { session: t }, error: r } = e;
        if (r)
          return this._returnResult({ data: null, error: r });
        if (!t)
          return this._returnResult({ data: null, error: new se() });
        const { data: n, error: i } = await F(this.fetch, "POST", `${this.url}/passkeys/registration/options`, {
          headers: this.headers,
          jwt: t.access_token,
          body: {}
        });
        return i ? this._returnResult({ data: null, error: i }) : this._returnResult({ data: n, error: null });
      });
    } catch (e) {
      if (P(e))
        return this._returnResult({ data: null, error: e });
      throw e;
    }
  }
  /**
   * Verify passkey registration with the credential response.
   * The credentialResponse should be the serialized output of navigator.credentials.create().
   */
  async _verifyPasskeyRegistration(e) {
    xe(this.experimental);
    try {
      return await this._useSession(async (t) => {
        const { data: { session: r }, error: n } = t;
        if (n)
          return this._returnResult({ data: null, error: n });
        if (!r)
          return this._returnResult({ data: null, error: new se() });
        const { data: i, error: s } = await F(this.fetch, "POST", `${this.url}/passkeys/registration/verify`, {
          headers: this.headers,
          jwt: r.access_token,
          body: {
            challenge_id: e.challengeId,
            credential: e.credential
          }
        });
        return s ? this._returnResult({ data: null, error: s }) : this._returnResult({ data: i, error: null });
      });
    } catch (t) {
      if (P(t))
        return this._returnResult({ data: null, error: t });
      throw t;
    }
  }
  /**
   * Start passkey authentication.
   * Returns WebAuthn credential request options to pass to navigator.credentials.get().
   */
  async _startPasskeyAuthentication(e) {
    var t;
    xe(this.experimental);
    try {
      const { data: r, error: n } = await F(this.fetch, "POST", `${this.url}/passkeys/authentication/options`, {
        headers: this.headers,
        body: {
          gotrue_meta_security: { captcha_token: (t = e?.options) === null || t === void 0 ? void 0 : t.captchaToken }
        }
      });
      return n ? this._returnResult({ data: null, error: n }) : this._returnResult({ data: r, error: null });
    } catch (r) {
      if (P(r))
        return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  /**
   * Verify passkey authentication and create a session.
   * The credential should be the serialized output of navigator.credentials.get().
   */
  async _verifyPasskeyAuthentication(e) {
    xe(this.experimental);
    try {
      const { data: t, error: r } = await F(this.fetch, "POST", `${this.url}/passkeys/authentication/verify`, {
        headers: this.headers,
        body: {
          challenge_id: e.challengeId,
          credential: e.credential
        },
        xform: Ne
      });
      return r ? this._returnResult({ data: null, error: r }) : (t.session && (await this._saveSession(t.session), await this._notifyAllSubscribers("SIGNED_IN", t.session)), this._returnResult({ data: t, error: null }));
    } catch (t) {
      if (P(t))
        return this._returnResult({ data: null, error: t });
      throw t;
    }
  }
  /**
   * List all passkeys for the current user.
   */
  async _listPasskeys() {
    xe(this.experimental);
    try {
      return await this._useSession(async (e) => {
        const { data: { session: t }, error: r } = e;
        if (r)
          return this._returnResult({ data: null, error: r });
        if (!t)
          return this._returnResult({ data: null, error: new se() });
        const { data: n, error: i } = await F(this.fetch, "GET", `${this.url}/passkeys`, {
          headers: this.headers,
          jwt: t.access_token,
          xform: (s) => ({ data: s, error: null })
        });
        return i ? this._returnResult({ data: null, error: i }) : this._returnResult({ data: n, error: null });
      });
    } catch (e) {
      if (P(e))
        return this._returnResult({ data: null, error: e });
      throw e;
    }
  }
  /**
   * Update a passkey.
   */
  async _updatePasskey(e) {
    xe(this.experimental);
    try {
      return await this._useSession(async (t) => {
        const { data: { session: r }, error: n } = t;
        if (n)
          return this._returnResult({ data: null, error: n });
        if (!r)
          return this._returnResult({ data: null, error: new se() });
        const { data: i, error: s } = await F(this.fetch, "PATCH", `${this.url}/passkeys/${e.passkeyId}`, {
          headers: this.headers,
          jwt: r.access_token,
          body: { friendly_name: e.friendlyName }
        });
        return s ? this._returnResult({ data: null, error: s }) : this._returnResult({ data: i, error: null });
      });
    } catch (t) {
      if (P(t))
        return this._returnResult({ data: null, error: t });
      throw t;
    }
  }
  /**
   * Delete a passkey.
   */
  async _deletePasskey(e) {
    xe(this.experimental);
    try {
      return await this._useSession(async (t) => {
        const { data: { session: r }, error: n } = t;
        if (n)
          return this._returnResult({ data: null, error: n });
        if (!r)
          return this._returnResult({ data: null, error: new se() });
        const { error: i } = await F(this.fetch, "DELETE", `${this.url}/passkeys/${e.passkeyId}`, {
          headers: this.headers,
          jwt: r.access_token,
          noResolveJson: !0
        });
        return i ? this._returnResult({ data: null, error: i }) : this._returnResult({ data: null, error: null });
      });
    } catch (t) {
      if (P(t))
        return this._returnResult({ data: null, error: t });
      throw t;
    }
  }
}
ya.nextInstanceID = {};
const Rh = ya, Ch = "2.105.4";
let oa = "";
typeof Deno < "u" ? oa = "deno" : typeof document < "u" ? oa = "web" : typeof navigator < "u" && navigator.product === "ReactNative" ? oa = "react-native" : oa = "node";
const xh = { "X-Client-Info": `supabase-js-${oa}/${Ch}` }, Oh = { headers: xh }, Dh = { schema: "public" }, jh = {
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  flowType: "implicit"
}, Ih = {};
function ba(a) {
  "@babel/helpers - typeof";
  return ba = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ba(a);
}
function Ph(a, e) {
  if (ba(a) != "object" || !a) return a;
  var t = a[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(a, e);
    if (ba(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(a);
}
function Lh(a) {
  var e = Ph(a, "string");
  return ba(e) == "symbol" ? e : e + "";
}
function zh(a, e, t) {
  return (e = Lh(e)) in a ? Object.defineProperty(a, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : a[e] = t, a;
}
function Yi(a, e) {
  var t = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(a);
    e && (r = r.filter(function(n) {
      return Object.getOwnPropertyDescriptor(a, n).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function ee(a) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Yi(Object(t), !0).forEach(function(r) {
      zh(a, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(t)) : Yi(Object(t)).forEach(function(r) {
      Object.defineProperty(a, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return a;
}
const Fh = (a) => a ? (...e) => a(...e) : (...e) => fetch(...e), Uh = () => Headers, $h = (a, e, t) => {
  const r = Fh(t), n = Uh();
  return async (i, s) => {
    var o;
    const l = (o = await e()) !== null && o !== void 0 ? o : a;
    let u = new n(s?.headers);
    return u.has("apikey") || u.set("apikey", a), u.has("Authorization") || u.set("Authorization", `Bearer ${l}`), r(i, ee(ee({}, s), {}, { headers: u }));
  };
};
function Bh(a) {
  return a.endsWith("/") ? a : a + "/";
}
function Mh(a, e) {
  var t, r;
  const { db: n, auth: i, realtime: s, global: o } = a, { db: l, auth: u, realtime: f, global: d } = e, g = {
    db: ee(ee({}, l), n),
    auth: ee(ee({}, u), i),
    realtime: ee(ee({}, f), s),
    storage: {},
    global: ee(ee(ee({}, d), o), {}, { headers: ee(ee({}, (t = d?.headers) !== null && t !== void 0 ? t : {}), (r = o?.headers) !== null && r !== void 0 ? r : {}) }),
    accessToken: async () => ""
  };
  return a.accessToken ? g.accessToken = a.accessToken : delete g.accessToken, g;
}
function Hh(a) {
  const e = a?.trim();
  if (!e) throw new Error("supabaseUrl is required.");
  if (!e.match(/^https?:\/\//i)) throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");
  try {
    return new URL(Bh(e));
  } catch {
    throw Error("Invalid supabaseUrl: Provided URL is malformed.");
  }
}
var qh = class extends Rh {
  constructor(a) {
    super(a);
  }
}, Wh = class {
  /**
  * Create a new client for use in the browser.
  *
  * @category Initializing
  *
  * @param supabaseUrl The unique Supabase URL which is supplied when you create a new project in your project dashboard.
  * @param supabaseKey The unique Supabase Key which is supplied when you create a new project in your project dashboard.
  * @param options.db.schema You can switch in between schemas. The schema needs to be on the list of exposed schemas inside Supabase.
  * @param options.auth.autoRefreshToken Set to "true" if you want to automatically refresh the token before expiring.
  * @param options.auth.persistSession Set to "true" if you want to automatically save the user session into local storage.
  * @param options.auth.detectSessionInUrl Set to "true" if you want to automatically detects OAuth grants in the URL and signs in the user.
  * @param options.realtime Options passed along to realtime-js constructor.
  * @param options.storage Options passed along to the storage-js constructor.
  * @param options.global.fetch A custom fetch implementation.
  * @param options.global.headers Any additional headers to send with each network request.
  *
  * @example Creating a client
  * ```js
  * import { createClient } from '@supabase/supabase-js'
  *
  * // Create a single supabase client for interacting with your database
  * const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key')
  * ```
  *
  * @example With a custom domain
  * ```js
  * import { createClient } from '@supabase/supabase-js'
  *
  * // Use a custom domain as the supabase URL
  * const supabase = createClient('https://my-custom-domain.com', 'your-publishable-key')
  * ```
  *
  * @example With additional parameters
  * ```js
  * import { createClient } from '@supabase/supabase-js'
  *
  * const options = {
  *   db: {
  *     schema: 'public',
  *   },
  *   auth: {
  *     autoRefreshToken: true,
  *     persistSession: true,
  *     detectSessionInUrl: true
  *   },
  *   global: {
  *     headers: { 'x-my-custom-header': 'my-app-name' },
  *   },
  * }
  * const supabase = createClient("https://xyzcompany.supabase.co", "your-publishable-key", options)
  * ```
  *
  * @exampleDescription With custom schemas
  * By default the API server points to the `public` schema. You can enable other database schemas within the Dashboard.
  * Go to [Settings > API > Exposed schemas](/dashboard/project/_/settings/api) and add the schema which you want to expose to the API.
  *
  * Note: each client connection can only access a single schema, so the code above can access the `other_schema` schema but cannot access the `public` schema.
  *
  * @example With custom schemas
  * ```js
  * import { createClient } from '@supabase/supabase-js'
  *
  * const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key', {
  *   // Provide a custom schema. Defaults to "public".
  *   db: { schema: 'other_schema' }
  * })
  * ```
  *
  * @exampleDescription Custom fetch implementation
  * `supabase-js` uses the [`cross-fetch`](https://www.npmjs.com/package/cross-fetch) library to make HTTP requests,
  * but an alternative `fetch` implementation can be provided as an option.
  * This is most useful in environments where `cross-fetch` is not compatible (for instance Cloudflare Workers).
  *
  * @example Custom fetch implementation
  * ```js
  * import { createClient } from '@supabase/supabase-js'
  *
  * const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key', {
  *   global: { fetch: fetch.bind(globalThis) }
  * })
  * ```
  *
  * @exampleDescription React Native options with AsyncStorage
  * For React Native we recommend using `AsyncStorage` as the storage implementation for Supabase Auth.
  *
  * @example React Native options with AsyncStorage
  * ```js
  * import 'react-native-url-polyfill/auto'
  * import { createClient } from '@supabase/supabase-js'
  * import AsyncStorage from "@react-native-async-storage/async-storage";
  *
  * const supabase = createClient("https://xyzcompany.supabase.co", "your-publishable-key", {
  *   auth: {
  *     storage: AsyncStorage,
  *     autoRefreshToken: true,
  *     persistSession: true,
  *     detectSessionInUrl: false,
  *   },
  * });
  * ```
  *
  * @exampleDescription React Native options with Expo SecureStore
  * If you wish to encrypt the user's session information, you can use `aes-js` and store the encryption key in Expo SecureStore.
  * The `aes-js` library, a reputable JavaScript-only implementation of the AES encryption algorithm in CTR mode.
  * A new 256-bit encryption key is generated using the `react-native-get-random-values` library.
  * This key is stored inside Expo's SecureStore, while the value is encrypted and placed inside AsyncStorage.
  *
  * Please make sure that:
  * - You keep the `expo-secure-store`, `aes-js` and `react-native-get-random-values` libraries up-to-date.
  * - Choose the correct [`SecureStoreOptions`](https://docs.expo.dev/versions/latest/sdk/securestore/#securestoreoptions) for your app's needs.
  *   E.g. [`SecureStore.WHEN_UNLOCKED`](https://docs.expo.dev/versions/latest/sdk/securestore/#securestorewhen_unlocked) regulates when the data can be accessed.
  * - Carefully consider optimizations or other modifications to the above example, as those can lead to introducing subtle security vulnerabilities.
  *
  * @example React Native options with Expo SecureStore
  * ```ts
  * import 'react-native-url-polyfill/auto'
  * import { createClient } from '@supabase/supabase-js'
  * import AsyncStorage from '@react-native-async-storage/async-storage';
  * import * as SecureStore from 'expo-secure-store';
  * import * as aesjs from 'aes-js';
  * import 'react-native-get-random-values';
  *
  * // As Expo's SecureStore does not support values larger than 2048
  * // bytes, an AES-256 key is generated and stored in SecureStore, while
  * // it is used to encrypt/decrypt values stored in AsyncStorage.
  * class LargeSecureStore {
  *   private async _encrypt(key: string, value: string) {
  *     const encryptionKey = crypto.getRandomValues(new Uint8Array(256 / 8));
  *
  *     const cipher = new aesjs.ModeOfOperation.ctr(encryptionKey, new aesjs.Counter(1));
  *     const encryptedBytes = cipher.encrypt(aesjs.utils.utf8.toBytes(value));
  *
  *     await SecureStore.setItemAsync(key, aesjs.utils.hex.fromBytes(encryptionKey));
  *
  *     return aesjs.utils.hex.fromBytes(encryptedBytes);
  *   }
  *
  *   private async _decrypt(key: string, value: string) {
  *     const encryptionKeyHex = await SecureStore.getItemAsync(key);
  *     if (!encryptionKeyHex) {
  *       return encryptionKeyHex;
  *     }
  *
  *     const cipher = new aesjs.ModeOfOperation.ctr(aesjs.utils.hex.toBytes(encryptionKeyHex), new aesjs.Counter(1));
  *     const decryptedBytes = cipher.decrypt(aesjs.utils.hex.toBytes(value));
  *
  *     return aesjs.utils.utf8.fromBytes(decryptedBytes);
  *   }
  *
  *   async getItem(key: string) {
  *     const encrypted = await AsyncStorage.getItem(key);
  *     if (!encrypted) { return encrypted; }
  *
  *     return await this._decrypt(key, encrypted);
  *   }
  *
  *   async removeItem(key: string) {
  *     await AsyncStorage.removeItem(key);
  *     await SecureStore.deleteItemAsync(key);
  *   }
  *
  *   async setItem(key: string, value: string) {
  *     const encrypted = await this._encrypt(key, value);
  *
  *     await AsyncStorage.setItem(key, encrypted);
  *   }
  * }
  *
  * const supabase = createClient("https://xyzcompany.supabase.co", "your-publishable-key", {
  *   auth: {
  *     storage: new LargeSecureStore(),
  *     autoRefreshToken: true,
  *     persistSession: true,
  *     detectSessionInUrl: false,
  *   },
  * });
  * ```
  *
  * @example With a database query
  * ```ts
  * import { createClient } from '@supabase/supabase-js'
  *
  * const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key')
  *
  * const { data } = await supabase.from('profiles').select('*')
  * ```
  */
  constructor(a, e, t) {
    var r, n;
    this.supabaseUrl = a, this.supabaseKey = e;
    const i = Hh(a);
    if (!e) throw new Error("supabaseKey is required.");
    this.realtimeUrl = new URL("realtime/v1", i), this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace("http", "ws"), this.authUrl = new URL("auth/v1", i), this.storageUrl = new URL("storage/v1", i), this.functionsUrl = new URL("functions/v1", i);
    const s = `sb-${i.hostname.split(".")[0]}-auth-token`, o = {
      db: Dh,
      realtime: Ih,
      auth: ee(ee({}, jh), {}, { storageKey: s }),
      global: Oh
    }, l = Mh(t ?? {}, o);
    if (this.storageKey = (r = l.auth.storageKey) !== null && r !== void 0 ? r : "", this.headers = (n = l.global.headers) !== null && n !== void 0 ? n : {}, l.accessToken)
      this.accessToken = l.accessToken, this.auth = new Proxy({}, { get: (f, d) => {
        throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(d)} is not possible`);
      } });
    else {
      var u;
      this.auth = this._initSupabaseAuthClient((u = l.auth) !== null && u !== void 0 ? u : {}, this.headers, l.global.fetch);
    }
    this.fetch = $h(e, this._getAccessToken.bind(this), l.global.fetch), this.realtime = this._initRealtimeClient(ee({
      headers: this.headers,
      accessToken: this._getAccessToken.bind(this),
      fetch: this.fetch
    }, l.realtime)), this.accessToken && Promise.resolve(this.accessToken()).then((f) => this.realtime.setAuth(f)).catch((f) => console.warn("Failed to set initial Realtime auth token:", f)), this.rest = new yu(new URL("rest/v1", i).href, {
      headers: this.headers,
      schema: l.db.schema,
      fetch: this.fetch,
      timeout: l.db.timeout,
      urlLengthLimit: l.db.urlLengthLimit
    }), this.storage = new xc(this.storageUrl.href, this.headers, this.fetch, t?.storage), l.accessToken || this._listenForAuthEvents();
  }
  /**
  * Supabase Functions allows you to deploy and invoke edge functions.
  */
  get functions() {
    return new ou(this.functionsUrl.href, {
      headers: this.headers,
      customFetch: this.fetch
    });
  }
  /**
  * Perform a query on a table or a view.
  *
  * @param relation - The table or view name to query
  */
  from(a) {
    return this.rest.from(a);
  }
  /**
  * Select a schema to query or perform an function (rpc) call.
  *
  * The schema needs to be on the list of exposed schemas inside Supabase.
  *
  * @param schema - The schema to query
  */
  schema(a) {
    return this.rest.schema(a);
  }
  /**
  * Perform a function call.
  *
  * @param fn - The function name to call
  * @param args - The arguments to pass to the function call
  * @param options - Named parameters
  * @param options.head - When set to `true`, `data` will not be returned.
  * Useful if you only need the count.
  * @param options.get - When set to `true`, the function will be called with
  * read-only access mode.
  * @param options.count - Count algorithm to use to count rows returned by the
  * function. Only applicable for [set-returning
  * functions](https://www.postgresql.org/docs/current/functions-srf.html).
  *
  * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
  * hood.
  *
  * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
  * statistics under the hood.
  *
  * `"estimated"`: Uses exact count for low numbers and planned count for high
  * numbers.
  */
  rpc(a, e = {}, t = {
    head: !1,
    get: !1,
    count: void 0
  }) {
    return this.rest.rpc(a, e, t);
  }
  /**
  * Creates a Realtime channel with Broadcast, Presence, and Postgres Changes.
  *
  * @param {string} name - The name of the Realtime channel.
  * @param {Object} opts - The options to pass to the Realtime channel.
  *
  * @category Realtime
  */
  channel(a, e = { config: {} }) {
    return this.realtime.channel(a, e);
  }
  /**
  * Returns all Realtime channels.
  *
  * @category Realtime
  *
  * @example Get all channels
  * ```js
  * const channels = supabase.getChannels()
  * ```
  */
  getChannels() {
    return this.realtime.getChannels();
  }
  /**
  * Unsubscribes and removes Realtime channel from Realtime client.
  *
  * @param {RealtimeChannel} channel - The name of the Realtime channel.
  *
  *
  * @category Realtime
  *
  * @remarks
  * - Removing a channel is a great way to maintain the performance of your project's Realtime service as well as your database if you're listening to Postgres changes. Supabase will automatically handle cleanup 30 seconds after a client is disconnected, but unused channels may cause degradation as more clients are simultaneously subscribed.
  *
  * @example Removes a channel
  * ```js
  * supabase.removeChannel(myChannel)
  * ```
  */
  removeChannel(a) {
    return this.realtime.removeChannel(a);
  }
  /**
  * Unsubscribes and removes all Realtime channels from Realtime client.
  *
  * @category Realtime
  *
  * @remarks
  * - Removing channels is a great way to maintain the performance of your project's Realtime service as well as your database if you're listening to Postgres changes. Supabase will automatically handle cleanup 30 seconds after a client is disconnected, but unused channels may cause degradation as more clients are simultaneously subscribed.
  *
  * @example Remove all channels
  * ```js
  * supabase.removeAllChannels()
  * ```
  */
  removeAllChannels() {
    return this.realtime.removeAllChannels();
  }
  async _getAccessToken() {
    var a = this, e, t;
    if (a.accessToken) return await a.accessToken();
    const { data: r } = await a.auth.getSession();
    return (e = (t = r.session) === null || t === void 0 ? void 0 : t.access_token) !== null && e !== void 0 ? e : a.supabaseKey;
  }
  _initSupabaseAuthClient({ autoRefreshToken: a, persistSession: e, detectSessionInUrl: t, storage: r, userStorage: n, storageKey: i, flowType: s, lock: o, debug: l, throwOnError: u, experimental: f, lockAcquireTimeout: d, skipAutoInitialize: g }, b, v) {
    const A = {
      Authorization: `Bearer ${this.supabaseKey}`,
      apikey: `${this.supabaseKey}`
    };
    return new qh({
      url: this.authUrl.href,
      headers: ee(ee({}, A), b),
      storageKey: i,
      autoRefreshToken: a,
      persistSession: e,
      detectSessionInUrl: t,
      storage: r,
      userStorage: n,
      flowType: s,
      lock: o,
      debug: l,
      throwOnError: u,
      experimental: f,
      fetch: v,
      lockAcquireTimeout: d,
      skipAutoInitialize: g,
      hasCustomAuthorizationHeader: Object.keys(this.headers).some((D) => D.toLowerCase() === "authorization")
    });
  }
  _initRealtimeClient(a) {
    return new Qu(this.realtimeUrl.href, ee(ee({}, a), {}, { params: ee(ee({}, { apikey: this.supabaseKey }), a?.params) }));
  }
  _listenForAuthEvents() {
    return this.auth.onAuthStateChange((a, e) => {
      this._handleTokenChanged(a, "CLIENT", e?.access_token);
    });
  }
  _handleTokenChanged(a, e, t) {
    (a === "TOKEN_REFRESHED" || a === "SIGNED_IN") && this.changedAccessToken !== t ? (this.changedAccessToken = t, this.realtime.setAuth(t)) : a === "SIGNED_OUT" && (this.realtime.setAuth(), e == "STORAGE" && this.auth.signOut(), this.changedAccessToken = void 0);
  }
};
const Gh = (a, e, t) => new Wh(a, e, t);
function Kh() {
  if (typeof window < "u") return !1;
  const a = globalThis.process;
  if (!a) return !1;
  const e = a.version;
  if (e == null) return !1;
  const t = e.match(/^v(\d+)\./);
  return t ? parseInt(t[1], 10) <= 18 : !1;
}
Kh() && console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");
const Sn = () => typeof window > "u" ? void 0 : window.__READEST_RUNTIME_CONFIG, Xi = Sn()?.supabaseUrl || process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || atob(process.env.NEXT_PUBLIC_DEFAULT_SUPABASE_URL_BASE64), Vh = Sn()?.supabaseAnonKey || process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || atob(process.env.NEXT_PUBLIC_DEFAULT_SUPABASE_KEY_BASE64), Jh = [
  "readest.supabase.co",
  "vbsyxfusjjqdxkjqlysc.supabase.co",
  "auth.readest.com"
], Yh = Gh(
  Xi,
  Vh,
  Jh.includes(new URL(Xi).hostname) ? { auth: { storageKey: "sb-readest-auth-token" } } : void 0
), Xh = async () => {
  if (Zs())
    return localStorage.getItem("token") ?? null;
  const { data: a } = await Yh.auth.getSession();
  return a?.session?.access_token ?? null;
}, Zh = async (a, e) => {
  const t = await Xh();
  if (!t)
    throw new Error("Not authenticated");
  const r = {
    ...e.headers,
    Authorization: `Bearer ${t}`
  }, n = await fetch(a, { ...e, headers: r });
  if (!n.ok) {
    const i = await n.json();
    throw console.error("Error:", i.error || n.statusText), new Error(i.error || "Request failed");
  }
  return n;
};
class bn {
  capacity;
  map;
  onEvict;
  constructor(e, t) {
    if (e <= 0)
      throw new Error("LRUCache capacity must be greater than 0");
    this.capacity = e, this.map = /* @__PURE__ */ new Map(), this.onEvict = t;
  }
  get(e) {
    if (!this.map.has(e))
      return;
    const t = this.map.get(e);
    return this.map.delete(e), this.map.set(e, t), t;
  }
  set(e, t) {
    if (this.map.has(e)) {
      const r = this.map.get(e);
      this.map.delete(e), this.onEvict && this.onEvict(e, r);
    } else if (this.map.size === this.capacity) {
      const r = this.map.keys().next().value;
      if (r) {
        const n = this.map.get(r);
        this.map.delete(r), this.onEvict && this.onEvict(r, n);
      }
    }
    this.map.set(e, t);
  }
  has(e) {
    return this.map.has(e);
  }
  delete(e) {
    if (this.map.has(e)) {
      const t = this.map.get(e), r = this.map.delete(e);
      return r && this.onEvict && this.onEvict(e, t), r;
    }
    return !1;
  }
  clear() {
    if (this.onEvict)
      for (const [e, t] of this.map)
        this.onEvict(e, t);
    this.map.clear();
  }
  size() {
    return this.map.size;
  }
  entries() {
    return Array.from(this.map).reverse();
  }
}
new bn(2048);
var Zi;
(function(a) {
  a[a.Audio = 1] = "Audio", a[a.Cache = 2] = "Cache", a[a.Config = 3] = "Config", a[a.Data = 4] = "Data", a[a.LocalData = 5] = "LocalData", a[a.Document = 6] = "Document", a[a.Download = 7] = "Download", a[a.Picture = 8] = "Picture", a[a.Public = 9] = "Public", a[a.Video = 10] = "Video", a[a.Resource = 11] = "Resource", a[a.Temp = 12] = "Temp", a[a.AppConfig = 13] = "AppConfig", a[a.AppData = 14] = "AppData", a[a.AppLocalData = 15] = "AppLocalData", a[a.AppCache = 16] = "AppCache", a[a.AppLog = 17] = "AppLog", a[a.Desktop = 18] = "Desktop", a[a.Executable = 19] = "Executable", a[a.Font = 20] = "Font", a[a.Home = 21] = "Home", a[a.Runtime = 22] = "Runtime", a[a.Template = 23] = "Template";
})(Zi || (Zi = {}));
var Qi;
(function(a) {
  a[a.Start = 0] = "Start", a[a.Current = 1] = "Current", a[a.End = 2] = "End";
})(Qi || (Qi = {}));
var Ft = null;
typeof WebSocket < "u" ? Ft = WebSocket : typeof MozWebSocket < "u" ? Ft = MozWebSocket : typeof global < "u" ? Ft = global.WebSocket || global.MozWebSocket : typeof window < "u" ? Ft = window.WebSocket || window.MozWebSocket : typeof self < "u" && (Ft = self.WebSocket || self.MozWebSocket);
var es = Ft;
const Qh = () => typeof globalThis.WebSocketPair < "u", ed = "wss://api.msedgeservices.com/tts/cognitiveservices/websocket/v1", Ys = "6A5AA1D4EAFF4E9FB37E23D68491D6F4", Xs = "143.0.3650.75", ts = Xs.split(".")[0], td = {
  "af-ZA": ["af-ZA-AdriNeural", "af-ZA-WillemNeural"],
  "am-ET": ["am-ET-AmehaNeural", "am-ET-MekdesNeural"],
  "ar-AE": ["ar-AE-FatimaNeural", "ar-AE-HamdanNeural"],
  "ar-BH": ["ar-BH-AliNeural", "ar-BH-LailaNeural"],
  "ar-DZ": ["ar-DZ-AminaNeural", "ar-DZ-IsmaelNeural"],
  "ar-EG": ["ar-EG-SalmaNeural", "ar-EG-ShakirNeural"],
  "ar-IQ": ["ar-IQ-BasselNeural", "ar-IQ-RanaNeural"],
  "ar-JO": ["ar-JO-SanaNeural", "ar-JO-TaimNeural"],
  "ar-KW": ["ar-KW-FahedNeural", "ar-KW-NouraNeural"],
  "ar-LB": ["ar-LB-LaylaNeural", "ar-LB-RamiNeural"],
  "ar-LY": ["ar-LY-ImanNeural", "ar-LY-OmarNeural"],
  "ar-MA": ["ar-MA-JamalNeural", "ar-MA-MounaNeural"],
  "ar-OM": ["ar-OM-AbdullahNeural", "ar-OM-AyshaNeural"],
  "ar-QA": ["ar-QA-AmalNeural", "ar-QA-MoazNeural"],
  "ar-SA": ["ar-SA-HamedNeural", "ar-SA-ZariyahNeural"],
  "ar-SY": ["ar-SY-AmanyNeural", "ar-SY-LaithNeural"],
  "ar-TN": ["ar-TN-HediNeural", "ar-TN-ReemNeural"],
  "ar-YE": ["ar-YE-MaryamNeural", "ar-YE-SalehNeural"],
  "az-AZ": ["az-AZ-BabekNeural", "az-AZ-BanuNeural"],
  "bg-BG": ["bg-BG-BorislavNeural", "bg-BG-KalinaNeural"],
  "bn-BD": ["bn-BD-NabanitaNeural", "bn-BD-PradeepNeural"],
  "bn-IN": ["bn-IN-BashkarNeural", "bn-IN-TanishaaNeural"],
  "bs-BA": ["bs-BA-GoranNeural", "bs-BA-VesnaNeural"],
  "ca-ES": ["ca-ES-EnricNeural", "ca-ES-JoanaNeural"],
  "cs-CZ": ["cs-CZ-AntoninNeural", "cs-CZ-VlastaNeural"],
  "cy-GB": ["cy-GB-AledNeural", "cy-GB-NiaNeural"],
  "da-DK": ["da-DK-ChristelNeural", "da-DK-JeppeNeural"],
  "de-AT": ["de-AT-IngridNeural", "de-AT-JonasNeural"],
  "de-CH": ["de-CH-JanNeural", "de-CH-LeniNeural"],
  "de-DE": [
    "de-DE-AmalaNeural",
    "de-DE-ConradNeural",
    "de-DE-FlorianMultilingualNeural",
    "de-DE-KatjaNeural",
    "de-DE-KillianNeural",
    "de-DE-SeraphinaMultilingualNeural"
  ],
  "el-GR": ["el-GR-AthinaNeural", "el-GR-NestorasNeural"],
  "en-AU": ["en-AU-NatashaNeural", "en-AU-WilliamNeural"],
  "en-CA": ["en-CA-ClaraNeural", "en-CA-LiamNeural"],
  "en-GB": [
    "en-GB-LibbyNeural",
    "en-GB-MaisieNeural",
    "en-GB-RyanNeural",
    "en-GB-SoniaNeural",
    "en-GB-ThomasNeural"
  ],
  "en-HK": ["en-HK-SamNeural", "en-HK-YanNeural"],
  "en-IE": ["en-IE-ConnorNeural", "en-IE-EmilyNeural"],
  "en-IN": ["en-IN-NeerjaExpressiveNeural", "en-IN-NeerjaNeural", "en-IN-PrabhatNeural"],
  "en-KE": ["en-KE-AsiliaNeural", "en-KE-ChilembaNeural"],
  "en-NG": ["en-NG-AbeoNeural", "en-NG-EzinneNeural"],
  "en-NZ": ["en-NZ-MitchellNeural", "en-NZ-MollyNeural"],
  "en-PH": ["en-PH-JamesNeural", "en-PH-RosaNeural"],
  "en-SG": ["en-SG-LunaNeural", "en-SG-WayneNeural"],
  "en-TZ": ["en-TZ-ElimuNeural", "en-TZ-ImaniNeural"],
  "en-US": [
    "en-US-AnaNeural",
    "en-US-AndrewMultilingualNeural",
    "en-US-AndrewNeural",
    "en-US-AriaNeural",
    "en-US-AvaMultilingualNeural",
    "en-US-AvaNeural",
    "en-US-BrianMultilingualNeural",
    "en-US-BrianNeural",
    "en-US-ChristopherNeural",
    "en-US-EmmaMultilingualNeural",
    "en-US-EmmaNeural",
    "en-US-EricNeural",
    "en-US-GuyNeural",
    "en-US-JennyNeural",
    "en-US-MichelleNeural",
    "en-US-RogerNeural",
    "en-US-SteffanNeural"
  ],
  "es-AR": ["es-AR-ElenaNeural", "es-AR-TomasNeural"],
  "es-BO": ["es-BO-MarceloNeural", "es-BO-SofiaNeural"],
  "es-CL": ["es-CL-CatalinaNeural", "es-CL-LorenzoNeural"],
  "es-CO": ["es-CO-GonzaloNeural", "es-CO-SalomeNeural"],
  "es-CR": ["es-CR-JuanNeural", "es-CR-MariaNeural"],
  "es-CU": ["es-CU-BelkysNeural", "es-CU-ManuelNeural"],
  "es-DO": ["es-DO-EmilioNeural", "es-DO-RamonaNeural"],
  "es-EC": ["es-EC-AndreaNeural", "es-EC-LuisNeural"],
  "es-ES": ["es-ES-AlvaroNeural", "es-ES-ElviraNeural", "es-ES-XimenaNeural"],
  "es-US": ["es-US-AlonsoNeural", "es-US-PalomaNeural"],
  "et-EE": ["et-EE-AnuNeural", "et-EE-KertNeural"],
  "fa-IR": ["fa-IR-DilaraNeural", "fa-IR-FaridNeural"],
  "fi-FI": ["fi-FI-HarriNeural", "fi-FI-NooraNeural"],
  "fil-PH": ["fil-PH-AngeloNeural", "fil-PH-BlessicaNeural"],
  "fr-BE": ["fr-BE-CharlineNeural", "fr-BE-GerardNeural"],
  "fr-CA": ["fr-CA-AntoineNeural", "fr-CA-JeanNeural", "fr-CA-SylvieNeural", "fr-CA-ThierryNeural"],
  "fr-CH": ["fr-CH-ArianeNeural", "fr-CH-FabriceNeural"],
  "fr-FR": [
    "fr-FR-DeniseNeural",
    "fr-FR-EloiseNeural",
    "fr-FR-HenriNeural",
    "fr-FR-RemyMultilingualNeural",
    "fr-FR-VivienneMultilingualNeural"
  ],
  "ga-IE": ["ga-IE-ColmNeural", "ga-IE-OrlaNeural"],
  "gl-ES": ["gl-ES-RoiNeural", "gl-ES-SabelaNeural"],
  "gu-IN": ["gu-IN-DhwaniNeural", "gu-IN-NiranjanNeural"],
  "he-IL": ["he-IL-AvriNeural", "he-IL-HilaNeural"],
  "hi-IN": ["hi-IN-MadhurNeural", "hi-IN-SwaraNeural"],
  "hr-HR": ["hr-HR-GabrijelaNeural", "hr-HR-SreckoNeural"],
  "hu-HU": ["hu-HU-NoemiNeural", "hu-HU-TamasNeural"],
  "id-ID": ["id-ID-ArdiNeural", "id-ID-GadisNeural"],
  "is-IS": ["is-IS-GudrunNeural", "is-IS-GunnarNeural"],
  "it-IT": [
    "it-IT-DiegoNeural",
    "it-IT-ElsaNeural",
    "it-IT-GiuseppeMultilingualNeural",
    "it-IT-IsabellaNeural"
  ],
  "iu-Cans-CA": ["iu-Cans-CA-SiqiniqNeural", "iu-Cans-CA-TaqqiqNeural"],
  "iu-Latn-CA": ["iu-Latn-CA-SiqiniqNeural", "iu-Latn-CA-TaqqiqNeural"],
  "ja-JP": ["ja-JP-KeitaNeural", "ja-JP-NanamiNeural"],
  "jv-ID": ["jv-ID-DimasNeural", "jv-ID-SitiNeural"],
  "ka-GE": ["ka-GE-EkaNeural", "ka-GE-GiorgiNeural"],
  "kk-KZ": ["kk-KZ-AigulNeural", "kk-KZ-DauletNeural"],
  "km-KH": ["km-KH-PisethNeural", "km-KH-SreymomNeural"],
  "kn-IN": ["kn-IN-GaganNeural", "kn-IN-SapnaNeural"],
  "ko-KR": ["ko-KR-HyunsuMultilingualNeural", "ko-KR-InJoonNeural", "ko-KR-SunHiNeural"],
  "lo-LA": ["lo-LA-ChanthavongNeural", "lo-LA-KeomanyNeural"],
  "lt-LT": ["lt-LT-LeonasNeural", "lt-LT-OnaNeural"],
  "lv-LV": ["lv-LV-EveritaNeural", "lv-LV-NilsNeural"],
  "mk-MK": ["mk-MK-AleksandarNeural", "mk-MK-MarijaNeural"],
  "ml-IN": ["ml-IN-MidhunNeural", "ml-IN-SobhanaNeural"],
  "mn-MN": ["mn-MN-BataaNeural", "mn-MN-YesuiNeural"],
  "mr-IN": ["mr-IN-AarohiNeural", "mr-IN-ManoharNeural"],
  "ms-MY": ["ms-MY-OsmanNeural", "ms-MY-YasminNeural"],
  "mt-MT": ["mt-MT-GraceNeural", "mt-MT-JosephNeural"],
  "my-MM": ["my-MM-NilarNeural", "my-MM-ThihaNeural"],
  "nb-NO": ["nb-NO-FinnNeural", "nb-NO-PernilleNeural"],
  "ne-NP": ["ne-NP-HemkalaNeural", "ne-NP-SagarNeural"],
  "nl-BE": ["nl-BE-ArnaudNeural", "nl-BE-DenaNeural"],
  "nl-NL": ["nl-NL-ColetteNeural", "nl-NL-FennaNeural", "nl-NL-MaartenNeural"],
  "pl-PL": ["pl-PL-MarekNeural", "pl-PL-ZofiaNeural"],
  "ps-AF": ["ps-AF-GulNawazNeural", "ps-AF-LatifaNeural"],
  "pt-BR": ["pt-BR-AntonioNeural", "pt-BR-FranciscaNeural", "pt-BR-ThalitaMultilingualNeural"],
  "pt-PT": ["pt-PT-DuarteNeural", "pt-PT-RaquelNeural"],
  "ro-RO": ["ro-RO-AlinaNeural", "ro-RO-EmilNeural"],
  "ru-RU": ["ru-RU-DmitryNeural", "ru-RU-SvetlanaNeural"],
  "si-LK": ["si-LK-SameeraNeural", "si-LK-ThiliniNeural"],
  "sk-SK": ["sk-SK-LukasNeural", "sk-SK-ViktoriaNeural"],
  "sl-SI": ["sl-SI-PetraNeural", "sl-SI-RokNeural"],
  "so-SO": ["so-SO-MuuseNeural", "so-SO-UbaxNeural"],
  "sq-AL": ["sq-AL-AnilaNeural", "sq-AL-IlirNeural"],
  "sr-RS": ["sr-RS-NicholasNeural", "sr-RS-SophieNeural"],
  "su-ID": ["su-ID-JajangNeural", "su-ID-TutiNeural"],
  "sv-SE": ["sv-SE-MattiasNeural", "sv-SE-SofieNeural"],
  "sw-KE": ["sw-KE-RafikiNeural", "sw-KE-ZuriNeural"],
  "sw-TZ": ["sw-TZ-DaudiNeural", "sw-TZ-RehemaNeural"],
  "ta-IN": ["ta-IN-PallaviNeural", "ta-IN-ValluvarNeural"],
  "ta-LK": ["ta-LK-KumarNeural", "ta-LK-SaranyaNeural"],
  "ta-MY": ["ta-MY-KaniNeural", "ta-MY-SuryaNeural"],
  "ta-SG": ["ta-SG-AnbuNeural", "ta-SG-VenbaNeural"],
  "te-IN": ["te-IN-MohanNeural", "te-IN-ShrutiNeural"],
  "th-TH": ["th-TH-NiwatNeural", "th-TH-PremwadeeNeural"],
  "tr-TR": ["tr-TR-AhmetNeural", "tr-TR-EmelNeural"],
  "uk-UA": ["uk-UA-OstapNeural", "uk-UA-PolinaNeural"],
  "ur-IN": ["ur-IN-GulNeural", "ur-IN-SalmanNeural"],
  "ur-PK": ["ur-PK-AsadNeural", "ur-PK-UzmaNeural"],
  "uz-UZ": ["uz-UZ-MadinaNeural", "uz-UZ-SardorNeural"],
  "vi-VN": ["vi-VN-HoaiMyNeural", "vi-VN-NamMinhNeural"],
  "zh-CN": [
    "zh-CN-XiaoxiaoNeural",
    "zh-CN-XiaoyiNeural",
    "zh-CN-YunjianNeural",
    "zh-CN-YunxiNeural",
    "zh-CN-YunxiaNeural",
    "zh-CN-YunyangNeural",
    "zh-CN-liaoning-XiaobeiNeural",
    "zh-CN-shaanxi-XiaoniNeural"
  ],
  "zh-HK": ["zh-HK-HiuGaaiNeural", "zh-HK-HiuMaanNeural", "zh-HK-WanLungNeural"],
  "zh-TW": ["zh-TW-HsiaoChenNeural", "zh-TW-HsiaoYuNeural", "zh-TW-YunJheNeural"],
  "zu-ZA": ["zu-ZA-ThandoNeural", "zu-ZA-ThembaNeural"]
}, ad = 11644473600, rd = 1e9, nd = [
  2037411651,
  1751607666,
  1126703220,
  1766662185,
  1936683619,
  544499311,
  1886547779,
  1952543343,
  778989417,
  1819033888,
  1734963744,
  544437352,
  1702061426,
  1684371058,
  46
], as = 57, rs = (a) => Array.from(a, (e) => e.toString(16).padStart(2, "0")).join("").toUpperCase(), De = (a) => (a << 16 | a >>> 16) >>> 0, ns = (a) => {
  const e = new Uint8Array(Math.ceil(a.length / 8) * 8);
  e.set(a);
  const t = new DataView(e.buffer);
  return Array.from({ length: e.length / 4 }, (r, n) => t.getUint32(n * 4, !0));
}, id = (a, e, t) => {
  let r = 0, n = 0;
  for (let i = 0; i < a.length; i += 2) {
    const s = a[i], o = a[i + 1];
    let l = De(Math.imul(De(s), 4010109435) + Math.imul(s, e) >>> 0), u = Math.imul(l, 1995771700) >>> 0;
    r = r + Math.imul(De(u), 3287280279) + u >>> 0, l = De(Math.imul(De(o), 3273069531) + Math.imul(o, t) >>> 0), u = Math.imul(l, 411160124) >>> 0, n = Math.imul(De(u), 901586633) + u >>> 0, r = r + n >>> 0;
  }
  return [n, r];
}, sd = (a, e, t) => {
  let r = 0, n = 0;
  for (let i = 0; i < a.length; i += 2) {
    r = Math.imul(r + a[i], e) >>> 0;
    for (const o of [3482890513, 2265471903, 315537773, 629022083])
      r = Math.imul(De(r), o) >>> 0;
    let s = Math.imul(a[i + 1] + r, t) >>> 0;
    s = Math.imul(De(s), 2725517045) >>> 0, s = De(Math.imul(De(s), 3548616447) >>> 0), n = n + r >>> 0, r = Math.imul(De(Math.imul(s, 2090019721) >>> 0), 3215236969) >>> 0, n = n + r >>> 0;
  }
  return [r, n];
}, od = async (a = Date.now()) => {
  let e = Math.floor(a / 1e3);
  e += ad, e -= e % 300, e *= rd / 100;
  const t = new TextEncoder().encode(`${e.toFixed(0)}${Ys}`), r = new Uint8Array(as + t.length), n = new DataView(r.buffer);
  nd.forEach((D, x) => n.setUint32(x * 4, D, !0)), r.set(t, as);
  const i = new Uint8Array(await crypto.subtle.digest("SHA-256", r)), s = ns(r), [o, l] = ns(i), u = (o | 1) >>> 0, f = (l | 1) >>> 0, [d, g] = id(s, u, f), [b, v] = sd(s, u, f), A = new DataView(new ArrayBuffer(8));
  return A.setUint32(0, d ^ b, !0), A.setUint32(4, g ^ v, !0), `${rs(new Uint8Array(A.buffer))}-${rs(i)}`;
}, ld = () => {
  const a = new Uint8Array(16);
  return crypto.getRandomValues(a), Array.from(a).map((e) => e.toString(16).padStart(2, "0")).join("").toUpperCase();
}, ud = (a) => Object.entries(a).flatMap(([e, t]) => t.map((r) => {
  const n = r.replace(`${e}-`, "").replace("Neural", ""), i = n.match(/(Multilingual|Expressive)$/)?.[1];
  return i ? {
    name: n.slice(0, -i.length),
    id: r,
    lang: e,
    variant: i.toLowerCase()
  } : { name: n, id: r, lang: e };
})), Jr = (a) => {
  try {
    const e = JSON.parse(a), t = [];
    for (const r of e.Metadata ?? []) {
      if (r.Type !== "WordBoundary") continue;
      const n = r.Data?.Offset, i = r.Data?.text?.Text;
      typeof n != "number" || typeof i != "string" || !i || t.push({ offset: n, duration: r.Data?.Duration ?? 0, text: i });
    }
    return t;
  } catch {
    return [];
  }
}, cd = "X-TTS-Word-Boundaries", hd = (a) => {
  if (!a) return [];
  try {
    const e = JSON.parse(decodeURIComponent(a));
    return Array.isArray(e) ? e.filter(
      (t) => !!t && typeof t.offset == "number" && typeof t.duration == "number" && typeof t.text == "string"
    ) : [];
  } catch {
    return [];
  }
}, dd = (a) => {
  const e = JSON.stringify(a);
  return Rs.md5(e);
}, fd = 3e4;
class Xe {
  static voices = ud(td);
  static audioCache = new bn(200);
  static boundariesCache = new bn(200);
  // In-flight fetches keyed by payload hash. The LRU dedupes storage, not
  // requests: the playback scheduler and the preload paths race for the same
  // sentences at every paragraph start, and without this map each racer opens
  // its own WSS connection for the same audio.
  static inflight = /* @__PURE__ */ new Map();
  protocol = "wss";
  constructor(e) {
    e && (this.protocol = e);
  }
  async #t({ lang: e, text: t, voice: r, rate: n }) {
    const i = wd() + "/tts/edge", s = await Zh(i, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        input: t,
        voice: r,
        rate: n,
        lang: e
      })
    });
    if (!s.ok)
      throw new Error(`Edge TTS HTTP request failed: ${s.status} ${s.statusText}`);
    return s;
  }
  async #a({ lang: e, text: t, voice: r, rate: n }) {
    const i = tu(), s = new URLSearchParams({
      ConnectionId: i,
      "Ocp-Apim-Subscription-Key": Ys,
      "Sec-MS-GEC": await od(),
      "Sec-MS-GEC-Version": `2-${Xs}`
    }), o = `${ed}?${s.toString()}`, l = (/* @__PURE__ */ new Date()).toString(), u = {
      "User-Agent": `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${ts}.0.0.0 Safari/537.36 Edg/${ts}.0.0.0`,
      "Accept-Encoding": "gzip, deflate, br, zstd",
      "Accept-Language": "en-US,en;q=0.9",
      Pragma: "no-cache",
      "Cache-Control": "no-cache",
      Origin: "chrome-extension://jdiccldimpdaibmpdkjnbmckianbfold",
      "Sec-WebSocket-Version": "13",
      Cookie: `muid=${ld()};`
    }, f = {
      "Content-Type": "application/json; charset=utf-8",
      Path: "speech.config",
      "X-Timestamp": l
    }, d = {
      "Content-Type": "application/ssml+xml",
      Path: "ssml",
      "X-RequestId": i,
      "X-Timestamp": l
    }, g = JSON.stringify({
      context: {
        synthesis: {
          audio: {
            metadataoptions: { sentenceBoundaryEnabled: !1, wordBoundaryEnabled: !0 },
            outputFormat: "audio-24khz-48kbitrate-mono-mp3"
          }
        }
      }
    }), b = (O, _) => {
      let I = "";
      for (const j of Object.keys(O))
        I += `${j}: ${O[j]}\r
`;
      return `${I}\r
${_}`;
    }, v = (O) => {
      const _ = O.split(`
`), I = {};
      let j = "", C = 0;
      for (C = 0; C < _.length; C++) {
        const S = _[C].trim();
        if (!S) break;
        const $ = S.indexOf(":");
        if ($ === -1) continue;
        const L = S.slice(0, $).trim(), M = S.slice($ + 1).trim();
        I[L] = M;
      }
      for (C = C + 1; C < _.length; C++)
        j += _[C] + `
`;
      return { headers: I, body: j };
    }, A = au(e, t, r, n), D = b(d, A), x = b(f, g);
    return Tn() ? new Promise(async (O, _) => {
      let I = null, j = !1, C = null, S = null;
      const $ = () => {
        S !== null && clearTimeout(S), S = null, C?.(), C = null, I?.disconnect().catch(() => {
        });
      }, L = (G) => {
        j || (j = !0, $(), G());
      }, M = () => {
        S !== null && clearTimeout(S), S = setTimeout(() => {
          L(() => _(new Error("WebSocket timed out waiting for audio.")));
        }, fd);
      };
      try {
        I = await (await import("./index-CURxe-IY.js")).default.connect(o, { headers: u });
        let h = new ArrayBuffer(0);
        const p = [];
        C = I.addListener((y) => {
          if (!j) {
            if (M(), typeof y == "string")
              return L(() => _(new Error(`WebSocket error occurred: ${y}`)));
            if (y.type === "Text") {
              const { headers: m, body: z } = v(y.data);
              m.Path === "audio.metadata" ? p.push(...Jr(z.trim())) : m.Path === "turn.end" && L(() => {
                if (!h.byteLength)
                  return _(new Error("No audio data received."));
                O({ response: new Response(h), boundaries: p });
              });
            } else if (y.type === "Binary") {
              let m;
              y.data instanceof Uint8Array ? m = y.data.buffer : m = new Uint8Array(y.data).buffer;
              const N = new DataView(m).getInt16(0);
              if (m.byteLength > N + 2) {
                const R = m.slice(2 + N), U = new Uint8Array(h.byteLength + R.byteLength);
                U.set(new Uint8Array(h), 0), U.set(new Uint8Array(R), h.byteLength), h = U.buffer;
              }
            } else y.type === "Close" && L(() => _(new Error("WebSocket closed before audio completed.")));
          }
        }), M(), await I.send(x), await I.send(D);
      } catch (G) {
        L(() => _(new Error(`WebSocket error occurred: ${G}`)));
      }
    }) : Qh() ? new Promise((O, _) => {
      (async () => {
        try {
          const I = o.replace(/^wss:\/\//i, "https://"), j = await fetch(I, {
            headers: {
              ...u,
              Upgrade: "websocket"
            }
          });
          if (j.status !== 101 || !j.webSocket)
            return _(
              new Error(`WebSocket upgrade failed with status ${j.status}`)
            );
          const C = j.webSocket;
          let S = new ArrayBuffer(0);
          const $ = [];
          let L = !1, M = Promise.resolve();
          const G = (m) => {
            const N = new DataView(m).getInt16(0);
            if (m.byteLength > N + 2) {
              const R = new Uint8Array(m).slice(2 + N), U = new Uint8Array(S.byteLength + R.byteLength);
              U.set(new Uint8Array(S), 0), U.set(R, S.byteLength), S = U.buffer;
            }
          }, h = (m) => {
            M = M.then(async () => {
              if (L) return;
              const z = await m();
              L || G(z);
            });
          }, p = () => {
            L || (L = !0, S.byteLength ? O({ response: new Response(S), boundaries: $ }) : _(new Error("No audio data received.")));
          }, y = (m) => {
            if (L) return;
            const z = m.data;
            if (typeof z == "string") {
              const { headers: N, body: R } = v(z);
              if (N.Path === "audio.metadata") {
                $.push(...Jr(R.trim()));
                return;
              }
              N.Path === "turn.end" && M.then(() => {
                try {
                  C.close();
                } catch {
                }
                p();
              }).catch(() => {
                L || (L = !0, _(new Error("No audio data received.")));
              });
              return;
            }
            if (z instanceof ArrayBuffer) {
              h(() => z);
              return;
            }
            if (z instanceof Uint8Array) {
              h(
                () => z.buffer.slice(z.byteOffset, z.byteOffset + z.byteLength)
              );
              return;
            }
            if (typeof Blob < "u" && z instanceof Blob) {
              h(() => z.arrayBuffer());
              return;
            }
          };
          C.addEventListener("message", y), C.addEventListener("close", () => {
            L || M.then(() => p()).catch(() => {
              L || (L = !0, _(new Error("No audio data received.")));
            });
          }), C.addEventListener("error", () => {
            L || (L = !0, _(new Error("WebSocket error occurred.")));
          }), C.accept(), C.send(x), C.send(D);
        } catch (I) {
          _(
            new Error(
              `WebSocket error occurred: ${I instanceof Error ? I.message : String(I)}`
            )
          );
        }
      })();
    }) : new Promise((O, _) => {
      const I = typeof window > "u" ? new es(o, { headers: u }) : new es(o);
      I.binaryType = "arraybuffer";
      let j = new ArrayBuffer(0);
      const C = [];
      I.addEventListener("open", () => {
        I.send(x), I.send(D);
      }), I.addEventListener("message", (S) => {
        if (typeof S.data == "string") {
          const { headers: $, body: L } = v(S.data);
          if ($.Path === "audio.metadata")
            C.push(...Jr(L.trim()));
          else if ($.Path === "turn.end") {
            if (I.close(), !j.byteLength)
              return _(new Error("No audio data received."));
            O({ response: new Response(j), boundaries: C });
          }
        } else if (S.data instanceof ArrayBuffer) {
          const L = new DataView(S.data).getInt16(0);
          if (S.data.byteLength > L + 2) {
            const M = S.data.slice(2 + L), G = new Uint8Array(j.byteLength + M.byteLength);
            G.set(new Uint8Array(j), 0), G.set(new Uint8Array(M), j.byteLength), j = G.buffer;
          }
        }
      }), I.addEventListener("close", () => {
        j.byteLength || _(new Error("No audio data received."));
      }), I.addEventListener("error", () => {
        _(new Error("WebSocket error occurred."));
      });
    });
  }
  async #e(e) {
    if (this.protocol === "https") {
      const t = await this.#t(e);
      return {
        response: t,
        boundaries: hd(t.headers.get(cd))
      };
    } else
      return this.#a(e);
  }
  async create(e) {
    return (await this.#e(e)).response;
  }
  // Server-side helper for the /api/tts/edge route: returns the audio Response
  // together with the captured word boundaries so the route can forward them.
  async createWithBoundaries(e) {
    return this.#e(e);
  }
  // Fetch (or reuse) the audio blob + boundaries for a payload, deduplicating
  // both stored results (LRU) and in-flight requests (inflight map).
  async #r(e) {
    const t = dd(e), r = Xe.audioCache.get(t);
    if (r)
      return { blob: r, boundaries: Xe.boundariesCache.get(t) ?? [] };
    const n = Xe.inflight.get(t);
    if (n) return n;
    const i = (async () => {
      const { response: s, boundaries: o } = await this.#e(e), l = await s.arrayBuffer(), u = new Blob([l], { type: "audio/mpeg" });
      return Xe.audioCache.set(t, u), Xe.boundariesCache.set(t, o), { blob: u, boundaries: o };
    })();
    Xe.inflight.set(t, i);
    try {
      return await i;
    } finally {
      Xe.inflight.delete(t);
    }
  }
  // Audio bytes for Web Audio decoding. The cache keeps a Blob and every call
  // mints a fresh ArrayBuffer copy via blob.arrayBuffer() — WebKit's
  // decodeAudioData detaches its input, so handing out a shared buffer would
  // break replay from cache on Safari.
  async createAudioData(e) {
    const { blob: t, boundaries: r } = await this.#r(e);
    return { data: await t.arrayBuffer(), boundaries: r };
  }
}
process.env.NEXT_PUBLIC_APP_PLATFORM;
const gd = "https://web.readest.com", md = {
  en: "English",
  fr: "Français",
  de: "Deutsch",
  nl: "Nederlands",
  it: "Italiano",
  ja: "日本語",
  ko: "한국어",
  es: "Español",
  pt: "Português",
  "pt-BR": "Português (Brasil)",
  ru: "Русский",
  he: "עברית",
  ar: "العربية",
  fa: "فارسی",
  el: "Ελληνικά",
  uk: "Українська",
  pl: "Polski",
  sl: "Slovenščina",
  tr: "Türkçe",
  hi: "हिन्दी",
  id: "Indonesia",
  vi: "Tiếng Việt",
  th: "ภาษาไทย",
  ms: "Melayu",
  bo: "བོད་སྐད་",
  bn: "বাংলা",
  ta: "தமிழ்",
  si: "සිංහල",
  "zh-CN": "简体中文",
  "zh-TW": "正體中文",
  ro: "Română",
  hu: "Magyar",
  uz: "Oʻzbek",
  ka: "ქართული"
}, pd = { ...md, zh: "中文" };
Object.fromEntries(
  Object.entries(pd).map(([a, e]) => [e, a])
);
const Tn = () => process.env.NEXT_PUBLIC_APP_PLATFORM === "tauri", Zs = () => process.env.NEXT_PUBLIC_APP_PLATFORM === "web", yd = () => Sn()?.apiBaseUrl ?? process.env.API_BASE_URL ?? process.env.NEXT_PUBLIC_API_BASE_URL ?? gd, bd = () => process.env.NODE_ENV === "development" && Zs(), wd = () => bd() ? "/api" : `${yd()}/api`, vd = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36", _d = '"Chromium";v="124", "Not-A.Brand";v="99", "Google Chrome";v="124"';
function Qs(a) {
  const e = {
    "user-agent": vd,
    accept: "image/avif,image/webp,image/png,image/svg+xml,image/*,*/*;q=0.8",
    "accept-language": "en-US,en;q=0.9",
    "sec-ch-ua": _d,
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"macOS"',
    "sec-fetch-dest": "image",
    "sec-fetch-mode": "no-cors",
    "sec-fetch-site": "cross-site"
  };
  return a && (e.referer = a), e;
}
const kd = (a, e, t) => {
  if (!Tn() || a.startsWith("data:"))
    return globalThis.fetch(a, { credentials: "include", ...t });
  const r = Qs(e), n = new Headers(t?.headers);
  for (const [i, s] of Object.entries(r))
    n.has(i) || n.set(i, s);
  return Ns(a, { ...t, headers: n });
}, Ed = 5 * 1024 * 1024, is = 30 * 1024 * 1024, Ad = 8e3, Sd = 4, ss = {
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
  "image/png": "png",
  "image/gif": "gif",
  "image/webp": "webp",
  "image/svg+xml": "svg",
  "image/avif": "avif",
  "image/bmp": "bmp"
}, os = [
  "loading",
  "decoding",
  "fetchpriority",
  "crossorigin",
  "srcset",
  "data-src",
  "data-original",
  "data-lazy",
  "data-actualsrc",
  "data-srcset"
];
function wn(a) {
  let e = null, t = -1;
  for (const r of a.split(",")) {
    const n = r.trim().split(/\s+/);
    let i = n[0] || "";
    if (!i || (i.startsWith("//") && (i = `https:${i}`), !/^https?:/i.test(i) && !i.startsWith("/"))) continue;
    let s = 1;
    const o = n[1];
    if (o) {
      const l = o.match(/^(\d+(?:\.\d+)?)([wx])$/i);
      l && (s = parseFloat(l[1]));
    }
    s > t && (t = s, e = i);
  }
  return e;
}
function eo(a) {
  const e = a.getAttribute("srcset");
  if (e) {
    const i = wn(e);
    if (i) return i;
  }
  const t = a.getAttribute("data-srcset");
  if (t) {
    const i = wn(t);
    if (i) return i;
  }
  const r = a.getAttribute("data-src") || a.getAttribute("data-original") || a.getAttribute("data-lazy") || a.getAttribute("data-actualsrc");
  if (r && r.trim()) return r;
  const n = a.getAttribute("src");
  return n && n.trim() ? n : null;
}
function Td(a) {
  for (const t of a.querySelectorAll("source")) {
    const r = t.getAttribute("srcset");
    if (r) {
      const i = wn(r);
      if (i) return i;
    }
    const n = t.getAttribute("src");
    if (n) return n;
  }
  const e = a.querySelector("img");
  return e ? eo(e) : null;
}
function Dt(a) {
  a.parentNode?.removeChild(a);
}
function Nd(a, e = 16) {
  const t = new Array(e);
  for (let r = 0; r < e && r < a.length; r++)
    t[r] = a[r].toString(16).padStart(2, "0");
  return t.join("");
}
async function Rd(a) {
  const e = await crypto.subtle.digest("SHA-256", new Uint8Array(a));
  return new Uint8Array(e);
}
function Cd(a, e) {
  const t = a.split(";")[0].trim().toLowerCase();
  if (ss[t]) return ss[t];
  const r = e.match(/\.([a-z0-9]{2,5})(?:\?|#|$)/i);
  return r ? r[1].toLowerCase() : "bin";
}
function xd(a, e) {
  if (a) {
    const r = a.split(";")[0].trim().toLowerCase();
    if (r.startsWith("image/")) return r;
  }
  const t = e.match(/\.(jpe?g|png|gif|webp|svg|avif|bmp)(?:\?|#|$)/i);
  if (t) {
    const r = t[1].toLowerCase();
    return r === "jpg" || r === "jpeg" ? "image/jpeg" : r === "svg" ? "image/svg+xml" : `image/${r}`;
  }
  return "application/octet-stream";
}
function Od(a, e) {
  if (/^(https?|data):/i.test(a)) return !0;
  if (!/^file:/i.test(a)) return !1;
  let t, r;
  try {
    t = new URL(e), r = new URL(a);
  } catch {
    return !1;
  }
  if (t.protocol !== "file:" || r.protocol !== "file:") return !1;
  const n = t.pathname.slice(0, t.pathname.lastIndexOf("/") + 1);
  return n.length > 1 && r.pathname.startsWith(n);
}
async function Dd(a, e, t) {
  t?.throwIfAborted();
  const r = new AbortController(), n = () => r.abort();
  t?.addEventListener("abort", n, { once: !0 });
  const i = setTimeout(() => r.abort(), Ad);
  try {
    const s = await kd(a, e, { signal: r.signal, redirect: "follow" });
    if (!s.ok) return null;
    const o = await s.arrayBuffer();
    if (o.byteLength === 0 || o.byteLength > Ed) return null;
    const l = xd(s.headers.get("content-type"), a);
    if (!l.startsWith("image/")) return null;
    const u = await Rd(o), f = Cd(l, a), d = `images/${Nd(u, 16)}.${f}`;
    return { url: a, path: d, bytes: o, mime: l };
  } finally {
    clearTimeout(i), t?.removeEventListener("abort", n);
  }
}
async function ls(a, e, t = {}) {
  const r = Math.min(t.maxBytes ?? is, is);
  t.signal?.throwIfAborted();
  const n = new DOMParser().parseFromString(`<div id="root">${a}</div>`, "text/html"), i = n.getElementById("root");
  if (!i) return { html: a, images: [], missing: 0 };
  for (const j of Array.from(i.querySelectorAll("iframe, video, audio, embed, object")))
    Dt(j);
  const s = [];
  for (const j of Array.from(i.querySelectorAll("picture"))) {
    const C = Td(j);
    if (!C) {
      Dt(j);
      continue;
    }
    const S = n.createElement("img"), $ = j.querySelector("img")?.getAttribute("alt") ?? "";
    $ && S.setAttribute("alt", $), j.replaceWith(S);
    let L;
    try {
      L = new URL(C, e).toString();
    } catch {
      Dt(S);
      continue;
    }
    s.push({ el: S, url: L });
  }
  for (const j of Array.from(i.querySelectorAll("img"))) {
    if (s.some(($) => $.el === j)) {
      for (const $ of os) j.removeAttribute($);
      continue;
    }
    const C = eo(j);
    for (const $ of os) j.removeAttribute($);
    if (!C) {
      Dt(j);
      continue;
    }
    let S;
    try {
      S = new URL(C, e).toString();
    } catch {
      Dt(j);
      continue;
    }
    if (j.getAttribute("width") === "1" && j.getAttribute("height") === "1") {
      Dt(j);
      continue;
    }
    s.push({ el: j, url: S });
  }
  const o = /* @__PURE__ */ new Map();
  for (const { el: j, url: C } of s) {
    const S = o.get(C) ?? [];
    S.push(j), o.set(C, S);
  }
  const l = Array.from(o.keys());
  console.log("[clip/bundle] start", {
    unique_urls: l.length,
    sample: l.slice(0, 5)
  });
  const u = /* @__PURE__ */ new Map();
  let f = 0, d = 0;
  const g = new Array(l.length).fill(null), b = new Array(l.length).fill(!1);
  let v = 0, A = 0;
  const D = () => {
    for (; v < b.length && b[v]; )
      A += g[v]?.bytes.byteLength ?? 0, v++;
    return A;
  };
  let x = 0;
  const O = async () => {
    for (; x < l.length; ) {
      t.signal?.throwIfAborted();
      const j = x++, C = l[j];
      if (Od(C, e) && D() < r)
        try {
          g[j] = await Dd(C, e, t.signal);
        } catch (S) {
          console.warn("[clip/bundle] image fetch failed", {
            url: C,
            error: S instanceof Error ? S.message : String(S)
          });
        }
      b[j] = !0;
    }
  };
  await Promise.all(Array.from({ length: Sd }, O)), t.signal?.throwIfAborted();
  for (let j = 0; j < l.length; j++) {
    const C = g[j];
    if (!C || f + C.bytes.byteLength > r) {
      d++;
      continue;
    }
    u.set(l[j], C), f += C.bytes.byteLength;
  }
  console.log("[clip/bundle] done", {
    fetched: u.size,
    missing: d,
    total_bytes: f
  });
  const _ = [], I = /* @__PURE__ */ new Set();
  for (const [j, C] of o) {
    const S = u.get(j);
    if (!S) {
      for (const $ of C)
        $.removeAttribute("src");
      continue;
    }
    I.has(S.path) || (_.push({ path: S.path, bytes: S.bytes, mime: S.mime }), I.add(S.path));
    for (const $ of C)
      $.setAttribute("src", S.path);
  }
  return { html: i.innerHTML, images: _, missing: d };
}
const Re = 600, Yr = 900, Xr = 56, jd = 72, Ka = 5, us = 56, Id = 56, Pd = 100, cs = 32, Ld = 830, Ze = 540, Ja = 80, wa = Re / 2, va = Ze + Ja / 2, ft = 60, zd = 66, vn = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif", Zr = [
  { top: "#0EBAE3", bottom: "#E2F4F9" },
  // cyan
  { top: "#3E89C7", bottom: "#E5EEF6" },
  // blue
  { top: "#E27D5C", bottom: "#F7DDD0" },
  // coral
  { top: "#5D9D7E", bottom: "#DCE8E1" },
  // sage
  { top: "#9B6BAC", bottom: "#E5D9EB" },
  // lavender
  { top: "#D8A55E", bottom: "#F4E5C9" },
  // ochre
  { top: "#2A9D8F", bottom: "#D5EAE7" },
  // teal
  { top: "#7E6C6C", bottom: "#E5DDDD" },
  // mauve
  { top: "#3E5C76", bottom: "#D9DEE4" },
  // navy
  { top: "#A36677", bottom: "#E8D6DA" }
  // wine
];
function ir(a) {
  return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
function Fd(a) {
  const e = new Uint8Array(a);
  let t = "";
  const r = 32768;
  for (let n = 0; n < e.length; n += r)
    t += String.fromCharCode(...e.subarray(n, n + r));
  return btoa(t);
}
function Ud(a) {
  const e = a.trim();
  if (!e) return Zr[0];
  let t = 5381;
  for (let r = 0; r < e.length; r++)
    t = (t << 5) + t + e.charCodeAt(r) >>> 0;
  return Zr[t % Zr.length];
}
function to(a) {
  return a >= 19968 && a <= 40959 || a >= 12352 && a <= 12543 || a >= 13312 && a <= 19903 || a >= 44032 && a <= 55215 || a >= 12288 && a <= 12351 || a >= 65280 && a <= 65519;
}
function Ht(a) {
  let e = 0;
  for (const t of a)
    e += to(t.codePointAt(0) ?? 0) ? 1 : 0.55;
  return e;
}
const ao = /[、。，．：；！？”’）］〕」』〉》】〗…,.:;!?)\]—]/, ro = /[“‘（［〔「『〈《【〖([]/;
function $d(a) {
  for (const e of a) {
    const t = e.codePointAt(0) ?? 0;
    if (t >= 12352 && t <= 12543) return "ja";
    if (t >= 44032 && t <= 55215) return "ko";
    if (t >= 19968 && t <= 40959 || t >= 13312 && t <= 19903 || t >= 131072 && t <= 173791)
      return "zh";
    if (t >= 3584 && t <= 3711) return "th";
    if (t >= 6016 && t <= 6143) return "km";
    if (t >= 4096 && t <= 4255) return "my";
  }
}
function Bd(a) {
  if (typeof Intl < "u" && typeof Intl.Segmenter == "function")
    try {
      return Md(a);
    } catch {
    }
  return Hd(a);
}
function Md(a) {
  const e = $d(a), t = new Intl.Segmenter(e, { granularity: "word" }), r = [];
  let n = "", i = "";
  for (const { segment: s } of t.segment(a))
    if (s) {
      if (/^\s+$/.test(s)) {
        n = " ";
        continue;
      }
      if (ao.test(s) && r.length > 0 && !i) {
        r[r.length - 1].text += s, n = "";
        continue;
      }
      if (ro.test(s)) {
        i += s;
        continue;
      }
      r.push({ text: i + s, sep: n }), i = "", n = "";
    }
  return i && r.push({ text: i, sep: n }), r;
}
function Hd(a) {
  const e = [];
  let t = "", r = "", n = "";
  const i = () => {
    n && (e.push({ text: r + n, sep: t }), n = "", r = "", t = "");
  };
  for (const s of a) {
    if (/\s/.test(s)) {
      i(), t = t || " ";
      continue;
    }
    const o = s.codePointAt(0) ?? 0;
    if (ao.test(s) && e.length > 0 && !n) {
      e[e.length - 1].text += s, t = "";
      continue;
    }
    if (ro.test(s)) {
      i(), r += s;
      continue;
    }
    if (to(o)) {
      i(), e.push({ text: r + s, sep: t }), r = "", t = "";
      continue;
    }
    n += s;
  }
  return i(), r && e.push({ text: r, sep: t }), e;
}
const qd = 0.28;
function Wd(a, e) {
  const t = a.trim();
  if (!t) return [];
  const r = Bd(t);
  if (r.length === 0) return [];
  const n = [];
  let i = "", s = 0;
  const o = () => {
    if (!i) return !0;
    if (n.length >= Ka) {
      const l = n.pop() ?? "";
      return n.push(Ya(l, e)), i = "", s = 0, !1;
    }
    return n.push(i), i = "", s = 0, !0;
  };
  for (let l = 0; l < r.length; l++) {
    const u = r[l], f = u.sep && i ? qd : 0, d = Ht(u.text);
    if (!i)
      i = u.text, s = d;
    else if (s + f + d <= e)
      i += (u.sep ? " " : "") + u.text, s += f + d;
    else {
      if (!o()) return n;
      i = u.text, s = d;
    }
    for (; s > e; ) {
      const g = Gd(i, e);
      if (n.push(g.head), n.length >= Ka) {
        const b = n.pop() ?? "";
        return n.push(Ya(b, e)), n;
      }
      i = g.tail, s = Ht(i);
    }
  }
  if (i && n.push(i), n.length > Ka) {
    const l = n.slice(0, Ka), u = l.pop() ?? "";
    return l.push(Ya(u, e)), l;
  }
  return n;
}
function Ya(a, e) {
  const r = Ht("…");
  let n = a;
  for (; n.length > 0 && Ht(n) + r > e; )
    n = n.slice(0, -1);
  return `${n.trimEnd()}…`;
}
function Gd(a, e) {
  let t = "", r = 0;
  for (; r < a.length; ) {
    const n = t + a[r];
    if (Ht(n) > e) break;
    t = n, r++;
  }
  return { head: t || a.slice(0, 1), tail: a.slice(t.length || 1) };
}
function hs(a) {
  const e = a.title?.trim() || "Untitled", t = a.siteName?.trim() || "", r = a.author?.trim() || "", n = Ud(r || t), s = (Re - us - Id) / Xr, l = Wd(e, s).map((O, _) => {
    const I = Pd + Xr + _ * jd;
    return `<text x="${us}" y="${I}" text-anchor="start" fill="#ffffff" font-family="${vn}" font-size="${Xr}" font-weight="700" letter-spacing="0.5">${ir(O)}</text>`;
  }).join(`
  `), u = `M 0 ${Ze} C 120 ${Ze} 180 ${Ze + Ja} ${Re / 2} ${Ze + Ja} C ${Re - 180} ${Ze + Ja} ${Re - 120} ${Ze} ${Re} ${Ze} L ${Re} 0 L 0 0 Z`, f = a.authorImage ?? a.favicon ?? null, d = f ? Kd(f) : Vd(r || t), g = r || t, b = (Re - 80) / cs, v = g ? Jd(g, b) : "", A = v ? `<text x="${Re / 2}" y="${Ld}" text-anchor="middle" fill="#2b2b2b" font-family="${vn}" font-size="${cs}" font-weight="600" letter-spacing="1">${ir(v)}</text>` : "", D = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${Re} ${Yr}" width="${Re}" height="${Yr}" preserveAspectRatio="xMidYMid meet">
  <defs>
    <clipPath id="avatar-clip">
      <circle cx="${wa}" cy="${va}" r="${ft}"/>
    </clipPath>
  </defs>
  <rect width="${Re}" height="${Yr}" fill="${n.bottom}"/>
  <path d="${u}" fill="${n.top}"/>
  ${l}
  <circle cx="${wa}" cy="${va}" r="${zd}" fill="#ffffff"/>
  ${d}
  ${A}
</svg>`;
  return { path: "cover.svg", bytes: new TextEncoder().encode(D).buffer, mime: "image/svg+xml" };
}
function Kd(a) {
  const e = Fd(a.bytes), t = a.mime || "image/png", r = wa - ft, n = va - ft, i = ft * 2;
  return `<image x="${r}" y="${n}" width="${i}" height="${i}" preserveAspectRatio="xMidYMid slice" clip-path="url(#avatar-clip)" href="data:${ir(t)};base64,${e}"/>`;
}
function Vd(a) {
  const e = a.replace(/\s+/g, "").slice(0, 1) || "·", t = va + ft * 0.18;
  return `<circle cx="${wa}" cy="${va}" r="${ft}" fill="#eef0f2"/>
  <text x="${wa}" y="${t}" text-anchor="middle" fill="#3a3a3a" font-family="${vn}" font-size="${(ft * 1.1).toFixed(0)}" font-weight="700">${ir(e)}</text>`;
}
function Jd(a, e) {
  const t = a.trim();
  return !t || Ht(t) <= e ? t : Ya(t, e);
}
const Yd = 6e3, Xd = 512 * 1024, Zd = [
  "apple-touch-icon-precomposed",
  "apple-touch-icon",
  "icon",
  "shortcut icon",
  "mask-icon"
], Qd = [
  "/apple-touch-icon.png",
  "/apple-touch-icon-precomposed.png",
  "/favicon.ico"
], ef = (a, e, t) => {
  if (!Tn())
    return globalThis.fetch(a, { credentials: "include", ...t });
  const r = Qs(e), n = new Headers(t?.headers);
  for (const [i, s] of Object.entries(r))
    n.has(i) || n.set(i, s);
  return Ns(a, { ...t, headers: n });
};
function tf(a) {
  if (!a) return 0;
  if (a.toLowerCase() === "any") return 1024;
  let e = 0;
  for (const t of a.matchAll(/(\d+)\s*x\s*(\d+)/gi)) {
    const r = parseInt(t[1], 10);
    r > e && (e = r);
  }
  return e;
}
function af(a) {
  const e = a.toLowerCase();
  return e.includes("apple-touch-icon-precomposed") ? 1e3 : e.includes("apple-touch-icon") ? 900 : e.includes("mask-icon") ? 100 : e.includes("shortcut") ? 200 : e.includes("icon") ? 500 : 0;
}
function rf(a, e) {
  const t = [];
  for (const r of Array.from(a.querySelectorAll("link[rel]"))) {
    const n = r.getAttribute("rel") ?? "";
    if (!Zd.some((l) => n.toLowerCase().split(/\s+/).includes(l)))
      continue;
    const i = r.getAttribute("href");
    if (!i) continue;
    let s;
    try {
      s = new URL(i, e).toString();
    } catch {
      continue;
    }
    const o = tf(r.getAttribute("sizes"));
    t.push({ url: s, score: af(n) + o });
  }
  return t.sort((r, n) => n.score - r.score), t;
}
async function nf(a, e) {
  return no(a, e, of);
}
async function sf(a, e) {
  return no(a, e, Xd);
}
const of = 2 * 1024 * 1024;
async function no(a, e, t) {
  const r = new AbortController(), n = setTimeout(() => r.abort(), Yd);
  try {
    const i = await ef(a, e, { signal: r.signal, redirect: "follow" });
    if (!i.ok) return null;
    const s = await i.arrayBuffer();
    if (s.byteLength === 0 || s.byteLength > t) return null;
    let o = (i.headers.get("content-type") || "").split(";")[0].trim().toLowerCase();
    if (!o.startsWith("image/")) {
      const l = a.match(/\.([a-z0-9]{2,5})(?:\?|#|$)/i)?.[1]?.toLowerCase();
      if (l === "ico") o = "image/x-icon";
      else if (l === "png") o = "image/png";
      else if (l === "svg") o = "image/svg+xml";
      else if (l === "jpg" || l === "jpeg") o = "image/jpeg";
      else if (l === "webp") o = "image/webp";
      else return null;
    }
    return { bytes: s, mime: o };
  } catch {
    return null;
  } finally {
    clearTimeout(n);
  }
}
async function lf(a, e) {
  const t = rf(a, e);
  let r;
  try {
    const s = new URL(e);
    r = /^https?:$/i.test(s.protocol) ? s.origin : "";
  } catch {
    r = "";
  }
  if (r)
    for (const s of Qd)
      t.push({ url: `${r}${s}`, score: -1 });
  const n = /* @__PURE__ */ new Set(), i = t.filter((s) => !/^https?:/i.test(s.url) || n.has(s.url) ? !1 : (n.add(s.url), !0));
  for (const s of i) {
    const o = await sf(s.url, e);
    if (o) return o;
  }
  return null;
}
const uf = [
  {
    // Articles wrap the body in `<div id="js_content">` with
    // `visibility:hidden; opacity:0`, then JS reveals it. Readability mis-
    // scores the page because the recommendation rail outweighs the
    // hidden article in its heuristics.
    name: "mp.weixin.qq.com",
    match: (a) => a.hostname === "mp.weixin.qq.com",
    content: "#js_content",
    title: "#activity-name, h1.rich_media_title",
    byline: "#js_name, .rich_media_meta_nickname",
    authorImage: ".profile_avatar img, .rich_media_meta_nickname_avatar img, .weui_media_avatar img, img.identity_icon, .wx_follow_avatar img",
    strip: [
      // Inline QR codes (PC + mobile variants)
      ".qr_code_pc",
      "#js_pc_qr_code",
      // Reward / tip popups
      ".reward_area",
      ".reward_qrcode_area",
      ".reward_user_info",
      // Promotional inserts
      ".promotion_card",
      // Cross-app CTAs
      ".weui-dialog_appmsg",
      ".open_in_weixin_wrap"
    ]
  },
  {
    name: "x.com",
    match: (a) => a.hostname === "x.com" || a.hostname.endsWith(".x.com"),
    content: '[data-testid="twitterArticleReadView"]',
    title: '[data-testid="twitter-article-title"]',
    // The User-Name container holds both the display name and the @handle.
    // The handle's anchor is keyboard-hidden via `tabindex="-1"`; the
    // display-name anchor has no tabindex. Picking the non-tabindexed
    // anchor lets us grab just "mousepotato" without the "@iluciddreaming"
    // suffix. The verified-account SVG sits next to the name but
    // contributes no text content, so textContent stays clean.
    byline: '[data-testid="User-Name"] a:not([tabindex])',
    // `UserAvatar-Container-<handle>` — prefix match keeps the rule
    // handle-agnostic. The inner <img> uses `_x96` size variant; the
    // cover generator may upscale via URL rewriting.
    authorImage: '[data-testid^="UserAvatar-Container-"] img',
    strip: [
      // Reply / Repost / Like / Bookmark / Share / Views row at top.
      // aria-label is locale-specific, so match by the structural fact
      // that this group contains a "reply" button.
      '[role="group"]:has([data-testid="reply"])'
    ]
  }
], qt = {
  title: ['meta[property="og:title"]', 'meta[name="twitter:title"]', 'meta[name="title"]'],
  byline: [
    'meta[name="author"]',
    'meta[property="article:author"]',
    'meta[name="twitter:creator"]',
    'meta[property="og:site_name"]'
    // last-ditch: at least name the publication
  ],
  authorImage: [
    'meta[property="og:image"]',
    'meta[property="og:image:url"]',
    'meta[name="twitter:image"]',
    'meta[name="twitter:image:src"]'
  ]
};
function io(a) {
  try {
    const e = new URL(a);
    return uf.find((t) => t.match(e)) ?? null;
  } catch {
    return null;
  }
}
class je extends Error {
  constructor(e, t) {
    super(e), this.code = t, this.name = "ConversionError";
  }
  code;
}
function cf(a) {
  let e = 5381;
  for (let t = 0; t < a.length; t++)
    e = (e << 5) + e + a.charCodeAt(t) >>> 0;
  return `readest:${e.toString(16)}`;
}
function ha(a) {
  return a.replace(/<[^>]+>/g, " ").replace(/&[a-z]+;/gi, " ").replace(/\s+/g, " ").trim();
}
function hf(a) {
  return (a.replace(/[\\/:*?"<>|]+/g, "_").trim() || "document").slice(0, 120);
}
function ds(a) {
  return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function _n(a, e, t) {
  const r = [`<h1>${ds(a)}</h1>`], n = e.trim();
  return n && r.push(`<p>${ds(n)}</p>`), r.push(t), r.join(`
`);
}
async function $t(a, e, t, r, n = [], i) {
  const { html: s, headings: o } = Wl(a), l = Hl(s), u = ha(l);
  if (!u)
    throw new je("Document has no readable content", "empty_input");
  const f = ul(u.slice(0, 2048)) || "en", d = { title: e, html: l }, g = o.length > 0 ? o : void 0;
  g && console.log("[clip/toc] headings", {
    count: g.length,
    levels: g.map((D) => D.level)
  });
  const b = await Jl(
    [d],
    {
      title: e,
      author: t,
      language: f,
      identifier: cf(r),
      toc: g
    },
    n,
    i
  ), v = new Uint8Array(await b.arrayBuffer());
  return { file: new File([v], `${hf(e)}.epub`, {
    type: "application/epub+zip"
  }), title: e, author: t };
}
function so(a, e) {
  const t = new DOMParser().parseFromString(Gt(a), "text/html"), r = t.createElement("base");
  return r.setAttribute("href", e), t.head.insertBefore(r, t.head.firstChild), t;
}
function df(a, e) {
  const t = new DOMParser().parseFromString(Gt(a), "text/html"), r = t.querySelector(e.content);
  if (!r) return null;
  if (e.strip?.length)
    for (const l of e.strip)
      for (const u of Array.from(r.querySelectorAll(l)))
        u.parentNode?.removeChild(u);
  const n = e.title ? t.querySelector(e.title)?.textContent?.trim() ?? "" : "", i = e.byline ? t.querySelector(e.byline)?.textContent?.trim() ?? "" : "", s = n || Wt(t, qt.title) || "", o = i || Wt(t, qt.byline) || "";
  return {
    content: r.innerHTML,
    title: s || void 0,
    byline: o || void 0
  };
}
const ff = [
  "#js_content",
  "article",
  "main article",
  "main",
  '[role="article"]',
  '[itemprop="articleBody"]',
  ".post-content",
  ".entry-content",
  ".article-content",
  ".post-body",
  ".markdown-body",
  "#content"
];
function gf(a, e) {
  const t = new DOMParser().parseFromString(Gt(a), "text/html");
  let r = "", n = 0;
  for (const i of ff) {
    let s;
    try {
      s = t.querySelectorAll(i);
    } catch {
      continue;
    }
    for (const o of Array.from(s)) {
      const l = ha(o.innerHTML);
      l.length > n && (n = l.length, r = o.innerHTML);
    }
  }
  return n >= e ? r : null;
}
function Wt(a, e) {
  for (const t of e) {
    const r = a.querySelector(t)?.getAttribute("content")?.trim();
    if (r) return r;
  }
  return null;
}
function mf(a, e, t) {
  const r = Wt(a, e);
  if (!r) return null;
  try {
    return new URL(r, t).toString();
  } catch {
    return null;
  }
}
function pf(a, e) {
  const t = [
    'meta[property="og:site_name"]',
    'meta[name="og:site_name"]',
    'meta[name="application-name"]',
    'meta[name="apple-mobile-web-app-title"]',
    'meta[property="twitter:site"]'
  ];
  for (const r of t) {
    const n = a.querySelector(r)?.getAttribute("content")?.trim();
    if (n) return n;
  }
  return lo(e);
}
function oo(a) {
  try {
    const e = new URL(a).pathname.split("/").pop() ?? "";
    return decodeURIComponent(e).replace(/\.[^.]+$/, "").trim();
  } catch {
    return "";
  }
}
function fs(a) {
  try {
    if (new URL(a).protocol === "file:") return oo(a) || a;
  } catch {
  }
  return a;
}
async function kn(a, e, t, r, n) {
  let i;
  try {
    i = new DOMParser().parseFromString(Gt(a), "text/html");
  } catch {
    return hs({ title: t, author: r, siteName: lo(e) });
  }
  const s = pf(i, e);
  let o;
  const l = n?.authorImage ? yf(i, n.authorImage, e) : null, u = l ? null : mf(i, qt.authorImage, e), f = [l, u].find((g) => g && /^https?:/i.test(g));
  f && (o = await nf(f, e).catch(() => null) ?? void 0);
  const d = o ? void 0 : await lf(i, e).catch(() => null) ?? void 0;
  return hs({ title: t, author: r, siteName: s, authorImage: o, favicon: d });
}
function yf(a, e, t) {
  let r;
  try {
    r = a.querySelectorAll(e);
  } catch {
    return null;
  }
  for (const n of Array.from(r)) {
    const i = n.getAttribute("src") || n.getAttribute("data-src") || n.getAttribute("data-original") || n.getAttribute("href");
    if (i)
      try {
        return new URL(i, t).toString();
      } catch {
      }
  }
  return null;
}
function lo(a) {
  try {
    const e = new URL(a);
    return e.protocol === "file:" ? oo(a) : e.hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}
function sr(a, e) {
  try {
    const t = new DOMParser().parseFromString(Gt(a), "text/html"), r = Wt(t, qt.title);
    if (r) return r;
    const n = t.querySelector("title")?.textContent?.trim();
    if (n) return n;
    const i = t.querySelector("h1")?.textContent?.trim();
    if (i) return i;
  } catch {
  }
  return e;
}
function bf(a) {
  return a.replace(/\\'[0-9a-fA-F]{2}/g, " ").replace(/\\par[d]?/g, `
`).replace(/\\[a-zA-Z]+-?\d* ?/g, "").replace(/[{}]/g, "").replace(/\r/g, "").trim();
}
function Qr(a, e) {
  return a && a.replace(/\.[^.]+$/, "").trim() || e;
}
async function wf(a, e) {
  console.log("[clip/page] input", {
    url: e,
    html_bytes: a.length
  });
  const t = io(e);
  if (t) {
    const g = df(a, t), b = g ? ha(g.content) : "";
    if (console.log("[clip/page] site rule", {
      name: t.name,
      matched: !!g,
      text_chars: b.length,
      title: g?.title || null
    }), g && b.length >= 400) {
      const v = g.title || sr(a, fs(e)), A = g.byline || "", D = await ls(g.content, e), x = await kn(a, e, v, A, t);
      return $t(
        _n(v, A, D.html),
        v,
        A,
        e,
        D.images,
        x
      );
    }
  }
  let r;
  try {
    r = new gs.Readability(so(a, e)).parse();
  } catch (g) {
    throw console.warn("[clip/page] readability threw", {
      error: g instanceof Error ? g.message : String(g)
    }), new je(`Could not extract article: ${String(g)}`, "parse_failed");
  }
  if (!r?.content)
    throw console.warn("[clip/page] readability returned no content"), new je("No readable article found at the URL", "parse_failed");
  let n = r.content, i = ha(n);
  console.log("[clip/page] readability", {
    title: r.title || null,
    byline: r.byline || null,
    content_chars: n.length,
    text_chars: i.length
  });
  const s = 400;
  if (i.length < s && a.length > 5e4) {
    const g = gf(a, s);
    g && (n = g, i = ha(n), console.log("[clip/page] fallback selector picked up the article", {
      text_chars: i.length
    }));
  }
  if (i.length < s)
    throw new je(
      "Could not read this page — it looks like a verification screen or a login wall. Open it in a browser first.",
      "login_wall"
    );
  let o = null;
  try {
    o = new DOMParser().parseFromString(Gt(a), "text/html");
  } catch {
  }
  const l = r.title?.trim() || (o ? Wt(o, qt.title) : null) || sr(a, fs(e)), u = r.byline?.trim() || (o ? Wt(o, qt.byline) : null) || "", f = await ls(n, e), d = await kn(a, e, l, u, t);
  return $t(
    _n(l, u, f.html),
    l,
    u,
    e,
    f.images,
    d
  );
}
async function vf(a) {
  switch (a.kind) {
    case "txt": {
      const { TxtToEpubConverter: e } = await import("./txt-BlVcEMtc.js"), t = await new e().convert({ file: a.file });
      return { file: t.file, title: t.bookTitle, author: "" };
    }
    case "docx": {
      if (a.bytes.byteLength === 0)
        throw new je("Empty .docx file", "empty_input");
      let e;
      try {
        e = (await (await import("./index-3aEKvml_.js").then(function(n) {
          return n.i;
        })).default.convertToHtml({ arrayBuffer: a.bytes })).value;
      } catch (t) {
        throw new je(`Could not parse .docx: ${String(t)}`, "parse_failed");
      }
      return $t(e, Qr(a.fileName, "Document"), "", e);
    }
    case "html": {
      const e = new TextDecoder("utf-8").decode(a.bytes), t = sr(e, Qr(a.fileName, "Document"));
      return $t(e, t, "", e);
    }
    case "rtf": {
      const e = new TextDecoder("utf-8").decode(a.bytes), t = bf(e);
      if (!t)
        throw new je("Could not extract text from .rtf", "parse_failed");
      const r = t.split(/\n+/).map((n) => `<p>${n.replace(/[<>&]/g, " ").trim()}</p>`).join("");
      return $t(r, Qr(a.fileName, "Document"), "", r);
    }
    case "article": {
      let e;
      try {
        e = new gs.Readability(so(a.html, a.url)).parse();
      } catch (i) {
        throw new je(`Could not extract article: ${String(i)}`, "parse_failed");
      }
      if (!e?.content)
        throw new je("No readable article found at the URL", "parse_failed");
      const t = e.title?.trim() || sr(a.html, a.url), r = e.byline?.trim() || "", n = await kn(
        a.html,
        a.url,
        t,
        r,
        io(a.url)
      );
      return $t(
        _n(t, r, e.content),
        t,
        r,
        a.url,
        [],
        n
      );
    }
    case "page":
      return wf(a.html, a.url);
    default:
      throw new je(
        `Unsupported conversion input: ${a.kind}`,
        "unsupported_type"
      );
  }
}
const en = self;
en.onmessage = async (a) => {
  if (a.data.type === "convert")
    try {
      const e = await vf(a.data.payload), t = await e.file.arrayBuffer(), r = {
        type: "success",
        payload: {
          epubBuffer: t,
          name: e.file.name,
          title: e.title,
          author: e.author
        }
      };
      en.postMessage(r, [t]);
    } catch (e) {
      const t = {
        type: "error",
        payload: {
          message: e instanceof Error ? e.message : String(e),
          code: e instanceof je ? e.code : void 0
        }
      };
      en.postMessage(t);
    }
};
export {
  kf as C,
  xo as a,
  _f as b,
  ql as c,
  ul as d,
  Oo as g,
  Xl as i,
  Rs as m
};
