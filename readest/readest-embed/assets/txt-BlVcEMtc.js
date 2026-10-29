import { m as L, d as v, c as D } from "./send-conversion.worker-CjAaObiI.js";
const _ = (g) => {
  const n = g.replace(/\\/g, "/").split("/").pop() || "", a = n.split(".");
  return a.length <= 1 ? n : a.slice(0, -1).join(".");
};
async function M(g) {
  const a = [];
  for (let s = -1; s <= 10; s++) {
    const c = Math.min(g.size, 1024 << 2 * s), o = Math.min(c + 1024, g.size);
    if (c >= g.size) break;
    a.push([c, o]);
  }
  const e = await Promise.all(
    a.map(([s, c]) => g.slice(s, c).arrayBuffer())
  ), r = L.md5.create();
  for (const s of e)
    r.update(new Uint8Array(s));
  return r.hex();
}
const A = (g) => {
  const t = _(g), n = t.match(/《([^》]+)》(.*)/);
  if (!n) {
    const s = k(t);
    return s ? { title: t, author: s } : { title: t };
  }
  const a = n[1].trim(), e = (n[2] ?? "").trim(), r = j(e);
  return r ? { title: a, author: r } : { title: a };
}, k = (g) => {
  const t = g.match(/作者\s*[：:\s]\s*(.+)$/);
  return t ? T(t[1]) : "";
}, j = (g) => {
  if (!g) return "";
  const t = k(g);
  if (t) return t;
  const n = g.match(/[[(（【［]\s*([^\])）】］]+?)\s*[\])）】］]/);
  return T(n ? n[1] : g);
}, T = (g) => {
  const t = g.trim();
  try {
    return t.replace(/^[\p{P}\p{S}\s]+|[\p{P}\p{S}\s]+$/gu, "");
  } catch {
    return t;
  }
}, B = (g) => g.length > 0 && g.length <= 20 && !/[:：]/.test(g) && !/\d{4,}/.test(g), E = {
  lastAccessDate: /* @__PURE__ */ new Date(0),
  lastModDate: /* @__PURE__ */ new Date(0)
}, N = 8 * 1024 * 1024, H = 1024, O = 128 * 1024, I = 64 * 1024, V = 8192, C = (g) => g ? g.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;") : "", R = "零〇一二两兩三四五六七八九十壹贰貳叁叄參肆伍陆陸柒捌玖拾0-9", X = "百千万萬佰仟", U = `${R}${X}`, G = new RegExp(`第[${U}]+(卷|本|册|部)`);
class W {
  async convert(t) {
    return t.file.size <= N ? await this.convertSmallFile(t) : await this.convertLargeFile(t);
  }
  async convertSmallFile(t) {
    const { file: n, author: a, language: e } = t;
    let r = await n.arrayBuffer();
    const s = this.detectEncoding(r) || "utf-8", c = this.resolveSupportedEncoding(s);
    let l = new TextDecoder(c).decode(r).trim();
    r = null;
    const i = A(n.name), m = i.title, d = `${m}.epub`, h = l.slice(0, 1024), p = h.match(/[【\[]?作者[】\]]?[:：\s]\s*(.+)\r?\n/) || h.match(/[【\[]?\s*(.+)\s+著\s*[】\]]?\r?\n/);
    let f = p ? p[1].trim() : "";
    try {
      f = f.replace(/^[\p{P}\p{S}]+|[\p{P}\p{S}]+$/gu, "");
    } catch {
    }
    const x = (B(f) ? f : "") || i.author || a || "", y = e || v(h), F = await M(n), b = { bookTitle: m, author: x, language: y, identifier: F }, S = 100;
    let w = this.extractChapters(l, b, {
      linesBetweenSegments: 8,
      fallbackParagraphsPerChapter: S
    });
    if (w.length === 0)
      throw new Error("No chapters detected.");
    if (w.length <= 1) {
      const P = this.probeChapterCount(l, b, {
        linesBetweenSegments: 7,
        fallbackParagraphsPerChapter: S
      });
      w = this.extractChapters(l, b, {
        linesBetweenSegments: P > 1 ? 7 : 6,
        fallbackParagraphsPerChapter: S
      });
    }
    l = null;
    const $ = await this.createEpub(w, b);
    return {
      file: new File([$], d),
      bookTitle: m,
      chapterCount: w.length,
      language: y
    };
  }
  async convertLargeFile(t) {
    const { file: n, author: a, language: e } = t, r = await this.detectEncodingFromFile(n) || "utf-8", s = this.resolveSupportedEncoding(r), c = A(n.name), o = c.title, l = `${o}.epub`, i = await this.readHeaderTextFromFile(
      n,
      s,
      H,
      O
    ), { author: m, language: d } = this.extractAuthorAndLanguage(
      i,
      c.author ?? a,
      e
    ), h = await M(n), p = { bookTitle: o, author: m, language: d, identifier: h }, f = 100;
    let u = await this.extractChaptersFromFileBySegments(
      n,
      s,
      p,
      {
        linesBetweenSegments: 8,
        fallbackParagraphsPerChapter: f
      }
    );
    if (u.length === 0)
      throw new Error("No chapters detected.");
    if (u.length <= 1) {
      const y = await this.probeChapterCountFromFileBySegments(
        n,
        s,
        p,
        {
          linesBetweenSegments: 7,
          fallbackParagraphsPerChapter: f
        }
      );
      u = await this.extractChaptersFromFileBySegments(n, s, p, {
        linesBetweenSegments: y > 1 ? 7 : 6,
        fallbackParagraphsPerChapter: f
      });
    }
    const x = await this.createEpub(u, p);
    return {
      file: new File([x], l),
      bookTitle: o,
      chapterCount: u.length,
      language: d
    };
  }
  extractChapters(t, n, a) {
    const { linesBetweenSegments: e } = a, r = this.createSegmentRegex(e), s = [], c = t.split(r);
    for (const o of c) {
      const l = this.extractChaptersFromSegment(
        o,
        n,
        a,
        s.length
      );
      this.appendSegmentChapters(s, l);
    }
    return s;
  }
  /**
   * Append a segment's chapters to the running list. The segment regex also
   * splits on dash dividers, which authors frequently use as in-chapter scene
   * breaks; the content after such a divider has no heading of its own. When a
   * heading-less chapter follows a detected chapter, merge its content into
   * that chapter instead of emitting a separate (bogus) TOC entry. See #4063.
   */
  appendSegmentChapters(t, n) {
    for (const a of n) {
      const e = t[t.length - 1];
      !a.detected && e?.detected ? e.content += a.content.replace(/^<h[1-6][^>]*>[\s\S]*?<\/h[1-6]>/, "") : t.push(a);
    }
  }
  probeChapterCount(t, n, a) {
    const { linesBetweenSegments: e } = a, r = this.createSegmentRegex(e);
    let s = 0;
    const c = t.split(r);
    for (const o of c)
      if (s += this.probeChapterCountFromSegment(o, n, a), s > 1)
        return s;
    return s;
  }
  async extractChaptersFromFileBySegments(t, n, a, e) {
    const r = [];
    for await (const s of this.iterateSegmentsFromFile(
      t,
      n,
      e.linesBetweenSegments
    )) {
      const c = this.extractChaptersFromSegment(
        s,
        a,
        e,
        r.length
      );
      this.appendSegmentChapters(r, c);
    }
    return r;
  }
  async probeChapterCountFromFileBySegments(t, n, a, e) {
    let r = 0;
    for await (const s of this.iterateSegmentsFromFile(
      t,
      n,
      e.linesBetweenSegments
    ))
      if (r += this.probeChapterCountFromSegment(s, a, e), r > 1)
        return r;
    return r;
  }
  async detectEncodingFromFile(t) {
    const n = Math.min(t.size, I), a = await t.slice(0, n).arrayBuffer(), e = new Uint8Array(a);
    try {
      if (this.assertStrictUtf8Sample(e), t.size > n * 2) {
        const o = Math.min(V, t.size - n), l = Math.floor((t.size - o) / 2), i = await t.slice(l, l + o).arrayBuffer();
        this.assertStrictUtf8Sample(new Uint8Array(i));
      }
      return "utf-8";
    } catch {
      let o = 0, l = 0;
      const i = Math.min(e.length, 1e4);
      for (let d = 0; d < i; d++)
        try {
          new TextDecoder("utf-8", { fatal: !0 }).decode(e.slice(d, d + 100)), o += 100, l += 100, d += 99;
        } catch {
          l++;
        }
      const m = l > 0 ? o / l * 100 : 0;
      if (console.log(`UTF-8 validity: ${m.toFixed(2)}%`), m > 80)
        return console.log("Treating as UTF-8 despite some invalid sequences"), "utf-8";
    }
    if (e[0] === 255 && e[1] === 254)
      return "utf-16le";
    if (e[0] === 254 && e[1] === 255)
      return "utf-16be";
    if (e[0] === 239 && e[1] === 187 && e[2] === 191)
      return "utf-8";
    const r = e.slice(0, Math.min(1024, e.length));
    let s = 0;
    for (let o = 0; o < r.length; o++)
      r[o] >= 128 && s++;
    const c = r.length > 0 ? s / r.length : 0;
    if (c > 0.3)
      return "gbk";
    if (c > 0.1) {
      let o = !1;
      for (let l = 0; l < r.length - 1; l++) {
        const i = r[l], m = r[l + 1];
        if ((i >= 129 && i <= 159 || i >= 224 && i <= 252) && (m >= 64 && m <= 126 || m >= 128 && m <= 252)) {
          o = !0;
          break;
        }
      }
      return o ? "shift-jis" : "gb18030";
    }
    return "utf-8";
  }
  async readHeaderTextFromFile(t, n, a, e) {
    const r = new TextDecoder(n), s = await t.slice(0, Math.min(t.size, e)).arrayBuffer();
    return r.decode(s).slice(0, a).trim();
  }
  async *iterateSegmentsFromFile(t, n, a) {
    const e = t.stream().getReader(), r = new TextDecoder(n), s = this.createSegmentRegex(a);
    let c = "", o = !1;
    try {
      for (; ; ) {
        const { value: i, done: m } = await e.read();
        if (m) {
          o = !0;
          break;
        }
        if (!i) continue;
        c += r.decode(i, { stream: !0 });
        const d = this.consumeCompleteSegments(c, s);
        c = d.pending;
        for (const h of d.segments)
          yield h;
      }
      c += r.decode();
      const l = this.consumeCompleteSegments(c, s);
      for (const i of l.segments)
        yield i;
      l.pending && (yield l.pending);
    } finally {
      if (!o)
        try {
          await e.cancel();
        } catch {
        }
      e.releaseLock();
    }
  }
  *iterateSegmentsFromTextChunks(t, n) {
    const a = this.createSegmentRegex(n);
    let e = "";
    for (const r of t) {
      e += r;
      const s = this.consumeCompleteSegments(e, a);
      e = s.pending;
      for (const c of s.segments)
        yield c;
    }
    e && (yield e);
  }
  consumeCompleteSegments(t, n) {
    const a = [];
    let e = n.exec(t);
    for (; e; )
      a.push(t.slice(0, e.index)), t = t.slice(e.index + e[0].length), n.lastIndex = 0, e = n.exec(t);
    return { segments: a, pending: t };
  }
  extractAuthorAndLanguage(t, n, a) {
    const e = t.match(/[【\[]?作者[】\]]?[:：\s]\s*(.+)\r?\n/) || t.match(/[【\[]?\s*(.+)\s+著\s*[】\]]?\r?\n/);
    let r = e ? e[1].trim() : "";
    try {
      r = r.replace(/^[\p{P}\p{S}]+|[\p{P}\p{S}]+$/gu, "");
    } catch {
    }
    const c = (B(r) ? r : "") || n || "", o = a || v(t);
    return { author: c, language: o };
  }
  extractChaptersFromSegment(t, n, a, e) {
    const { language: r } = n, { fallbackParagraphsPerChapter: s } = a;
    let c = t, o;
    do
      o = c, c = c.replace(/<!--.*?-->/gs, "");
    while (c !== o);
    const l = c.trim();
    if (!l) return [];
    const i = this.createChapterRegexps(r);
    let m = [];
    for (const h of i) {
      const p = l.split(h);
      if (this.isGoodMatches(p)) {
        m = this.joinAroundUndefined(p);
        break;
      }
    }
    if (m.length === 0 && s > 0) {
      const h = [], p = l.split(/\n+/), f = p.length;
      for (let u = 0; u < f; u += s) {
        const x = p.slice(u, u + s), y = this.formatSegment(x.join(`
`)), F = `${e + h.length + 1}`, b = `<h2>${F}</h2><p>${y}</p>`;
        h.push({ title: F, content: b, isVolume: !1, detected: !1 });
      }
      return h;
    }
    const d = [];
    for (let h = 1; h < m.length; h += 2) {
      const p = m[h]?.trim() || "", f = m[h + 1]?.trim() || "";
      let u = !1;
      r === "zh" ? u = G.test(p) : u = /\b(Part|Volume|Book)\b/i.test(p);
      const x = u ? `<h1>${p}</h1>` : `<h2>${p}</h2>`, y = this.formatSegment(f);
      d.push({
        title: C(p),
        content: `${x}<p>${y}</p>`,
        isVolume: u,
        detected: !0
      });
    }
    if (m[0] && m[0].trim()) {
      const h = m[0].trim(), p = h.split(`
`)[0].trim(), f = (p.length > 16 ? h.split(/[\n\s\p{P}]/u)[0].trim() : p) || h.slice(0, 16), u = this.formatSegment(h);
      d.unshift({
        title: C(f),
        content: `<h3></h3><p>${u}</p>`,
        isVolume: !1,
        detected: !1
      });
    }
    return d;
  }
  probeChapterCountFromSegment(t, n, a) {
    const { language: e } = n, { fallbackParagraphsPerChapter: r } = a;
    let s = t, c;
    do
      c = s, s = s.replace(/<!--.*?-->/gs, "");
    while (s !== c);
    const o = s.trim();
    if (!o) return 0;
    const l = this.createChapterRegexps(e);
    let i = [];
    for (const d of l) {
      const h = o.split(d);
      if (this.isGoodMatches(h)) {
        i = this.joinAroundUndefined(h);
        break;
      }
    }
    if (i.length === 0 && r > 0) {
      const d = o.split(/\n+/);
      return Math.ceil(d.length / r);
    }
    let m = Math.floor(i.length / 2);
    return i[0] && i[0].trim() && m++, m;
  }
  createSegmentRegex(t) {
    return new RegExp(`(?:\\r?\\n){${t},}|-{8,}\r?
`);
  }
  formatSegment(t) {
    return t = C(t), t.replace(/-{8,}|_{8,}/g, `
`).split(/\n+/).map((n) => n.trim()).filter((n) => n).join("</p><p>");
  }
  joinAroundUndefined(t) {
    return t.reduce((n, a, e, r) => a === void 0 && e > 0 && e < r.length - 1 && r[e - 1] !== void 0 && r[e + 1] !== void 0 ? (n[n.length - 1] += r[e + 1], n) : (a !== void 0 && (e === 0 || r[e - 1] !== void 0) && n.push(a), n), []);
  }
  isGoodMatches(t, n = 1e5) {
    const a = t.filter((r) => r && r.trim().length > 0);
    return a.length <= 1 ? !1 : !a.some((r) => r.length > n);
  }
  createChapterRegexps(t) {
    const n = [];
    if (t === "zh") {
      const d = `第[ 　${R}][ 　${U}]*`, h = String.raw`[章节回讲篇话](?:[：:、 　\(\)0-9]*[^\n-]{0,36})`, p = String.raw`[卷本册部封](?:[：:、 　\(\)][：:、 　\(\)0-9]*[^\n-]{0,36})?`, f = String.raw`${d}(?:${h}|${p})(?!\S)`, u = String.raw`(?:楔子|前言|简介|引言|序言|序章|总论|概论|后记|番外篇|番外|外传)(?:[：: 　][^\n-]{0,36})?(?!\S)`, x = String.raw`chapter[\s.]*[0-9]+(?:[：:. 　]+[^\n-]{0,50})?(?!\S)`;
      return n.push(
        new RegExp(
          String.raw`(?:^|\n)\s*(` + [f, u, x].join("|") + ")",
          "gui"
        )
      ), n.push(
        new RegExp(
          String.raw`(?:^|\n)\s*` + "(" + [
            String.raw`[一二三四五六七八九十][零〇一二三四五六七八九十百千万]?[：:、 　][^\n-]{0,36}(?=\n|$)`,
            String.raw`[0-9]+[^\n]{0,16}(?=\n|$)`
          ].join("|") + ")",
          "gu"
        )
      ), n;
    }
    const a = ["Chapter", "Part", "Section", "Book", "Volume", "Act"], e = [
      "Prologue",
      "Epilogue",
      "Introduction",
      "Foreword",
      "Preface",
      "Afterword"
    ], r = String.raw`(?:\d+|(?:[IVXLCDM]{2,}|V|X|L|C|D|M)\b)`, s = String.raw`\.\d{1,4}`, c = String.raw`[^\n]{0,50}`, o = a.map(
      (d) => String.raw`${d}\s*(?:${r}|${s})(?:[:.\-–—]?\s*${c})?`
    ).join("|"), l = e.map((d) => String.raw`${d}(?:[:.\-–—]?\s*${c})?`).join("|"), i = String.raw`(?:^|\n)(${o}|${l})(?=\s|$)`;
    n.push(new RegExp(i, "gi"));
    const m = String.raw`(?:^|\n)(\d+\.\d+(?:\.\d+)* ?[A-Z][^\n]{0,80}|\d+[A-Z][^\n]{0,80})`;
    return n.push(new RegExp(m, "g")), n;
  }
  async createEpub(t, n) {
    await D();
    const { BlobWriter: a, TextReader: e, ZipWriter: r } = await import("./index-Yg81PsPz.js"), { bookTitle: s, author: c, language: o, identifier: l } = n, i = new r(new a("application/epub+zip"), {
      extendedTimestamp: !1
    });
    await i.add("mimetype", new e("application/epub+zip"), E);
    const m = `<?xml version="1.0" encoding="UTF-8"?>
    <container xmlns="urn:oasis:names:tc:opendocument:xmlns:container" version="1.0">
      <rootfiles>
        <rootfile full-path="content.opf" media-type="application/oebps-package+xml"/>
      </rootfiles>
    </container>`.trim();
    await i.add("META-INF/container.xml", new e(m), E);
    let d = !1, h = "";
    for (let S = 0; S < t.length; S++) {
      const w = `chapter${S + 1}`, $ = S + 1;
      t[S].isVolume && d && (h += `</navPoint>
`, d = !d), h += `<navPoint id="navPoint-${w}" playOrder="${$}">
<navLabel><text>${t[S].title}</text></navLabel>
<content src="./OEBPS/${w}.xhtml" />
`, t[S].isVolume && !d ? d = !d : h += `</navPoint>
`;
    }
    d && (h += "</navPoint>");
    const p = `<?xml version="1.0" encoding="UTF-8"?>
    <ncx xmlns="http://www.daisy.org/z3986/2005/ncx/" version="2005-1">
      <head>
        <meta name="dtb:uid" content="book-id" />
        <meta name="dtb:depth" content="1" />
        <meta name="dtb:totalPageCount" content="0" />
        <meta name="dtb:maxPageNumber" content="0" />
      </head>
      <docTitle>
        <text>${C(s)}</text>
      </docTitle>
      <docAuthor>
        <text>${C(c)}</text>
      </docAuthor>
      <navMap>
        ${h}
      </navMap>
    </ncx>`.trim();
    await i.add("toc.ncx", new e(p), E);
    const f = t.map(
      (S, w) => `
      <item id="chap${w + 1}" href="OEBPS/chapter${w + 1}.xhtml" media-type="application/xhtml+xml"/>
    `
    ).join(`
`).trim(), u = t.map(
      (S, w) => `
      <itemref idref="chap${w + 1}"/>`
    ).join(`
`).trim(), x = `
      body { line-height: 1.6; font-size: 1em; font-family: 'Arial', sans-serif; text-align: justify; }
      p { text-indent: 2em; margin: 0; }
    `;
    await i.add("style.css", new e(x), E);
    for (let S = 0; S < t.length; S++) {
      const w = t[S], $ = o, P = w.content;
      w.content = "";
      const z = `<?xml version="1.0" encoding="UTF-8"?>
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml" lang="${$}" xml:lang="${$}">
          <head>
            <title>${w.title}</title>
            <link rel="stylesheet" type="text/css" href="../style.css"/>
          </head>
          <body>${P}</body>
        </html>`.trim();
      await i.add(
        `OEBPS/chapter${S + 1}.xhtml`,
        new e(z),
        E
      );
    }
    const b = `<?xml version="1.0" encoding="UTF-8"?>
      <package xmlns="http://www.idpf.org/2007/opf" unique-identifier="book-id" version="2.0">
        <metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
          <dc:title>${C(s)}</dc:title>
          <dc:language>${o}</dc:language>
          <dc:creator>${C(c)}</dc:creator>
          <dc:identifier id="book-id">${l}</dc:identifier>
        </metadata>
        <manifest>
          ${f}
          <item id="ncx" href="toc.ncx" media-type="application/x-dtbncx+xml"/>
          <item id="css" href="style.css" media-type="text/css"/>
        </manifest>
        <spine toc="ncx">
          ${u}
        </spine>
      </package>`.trim();
    return await i.add("content.opf", new e(b), E), await i.close();
  }
  detectEncoding(t) {
    const n = Math.min(t.byteLength, 65536), a = t.slice(0, n);
    try {
      if (this.assertStrictUtf8Sample(new Uint8Array(a)), t.byteLength > n * 2) {
        const o = Math.min(8192, t.byteLength - n), l = Math.floor((t.byteLength - o) / 2), i = t.slice(l, l + o);
        this.assertStrictUtf8Sample(new Uint8Array(i));
      }
      return "utf-8";
    } catch {
      const o = new Uint8Array(t);
      let l = 0, i = 0;
      const m = Math.min(o.length, 1e4);
      for (let h = 0; h < m; h++)
        try {
          new TextDecoder("utf-8", { fatal: !0 }).decode(o.slice(h, h + 100)), l += 100, i += 100, h += 99;
        } catch {
          i++;
        }
      const d = i > 0 ? l / i * 100 : 0;
      if (console.log(`UTF-8 validity: ${d.toFixed(2)}%`), d > 80)
        return console.log("Treating as UTF-8 despite some invalid sequences"), "utf-8";
    }
    const e = new Uint8Array(t.slice(0, 4));
    if (e[0] === 255 && e[1] === 254)
      return "utf-16le";
    if (e[0] === 254 && e[1] === 255)
      return "utf-16be";
    if (e[0] === 239 && e[1] === 187 && e[2] === 191)
      return "utf-8";
    const r = new Uint8Array(t.slice(0, Math.min(1024, t.byteLength)));
    let s = 0;
    for (let o = 0; o < r.length; o++)
      r[o] >= 128 && s++;
    const c = s / r.length;
    if (c > 0.3)
      return "gbk";
    if (c > 0.1) {
      let o = !1;
      for (let l = 0; l < r.length - 1; l++) {
        const i = r[l], m = r[l + 1];
        if ((i >= 129 && i <= 159 || i >= 224 && i <= 252) && (m >= 64 && m <= 126 || m >= 128 && m <= 252)) {
          o = !0;
          break;
        }
      }
      return o ? "shift-jis" : "gb18030";
    }
    return "utf-8";
  }
  assertStrictUtf8Sample(t) {
    const n = new TextDecoder("utf-8", { fatal: !0 });
    try {
      n.decode(t);
      return;
    } catch {
      const a = Math.min(3, t.length - 1);
      for (let e = 0; e <= a; e++)
        for (let r = 0; r <= a; r++) {
          if (e === 0 && r === 0) continue;
          const s = t.length - r;
          if (!(s - e < 16))
            try {
              n.decode(t.subarray(e, s));
              return;
            } catch {
            }
        }
      throw new Error("invalid utf-8 sample");
    }
  }
  isEncodingSupported(t) {
    try {
      return new TextDecoder(t), !0;
    } catch {
      return !1;
    }
  }
  resolveSupportedEncoding(t) {
    const n = t.toLowerCase(), a = [
      n,
      ...n === "gbk" ? ["gb18030", "gb2312"] : [],
      ...n === "gb18030" ? ["gbk", "gb2312"] : [],
      ...n === "shift-jis" ? ["shift_jis", "sjis"] : [],
      ...n === "utf-16" ? ["utf-16le", "utf-16be"] : [],
      "utf-8"
    ];
    for (const e of a)
      if (this.isEncodingSupported(e))
        return e;
    return "utf-8";
  }
}
export {
  W as TxtToEpubConverter,
  A as extractTxtFilenameMetadata
};
