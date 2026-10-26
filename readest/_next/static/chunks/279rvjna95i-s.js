(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,326940,e=>{"use strict";async function t(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=t.length;if(0===i)return;let n=await e.select("PRAGMA user_version");if((n[0]?.user_version??0)>=i)return;let l=a.table??"__migrations";await e.execute(`CREATE TABLE IF NOT EXISTS ${l} (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL UNIQUE,
      applied_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);let T=new Set((await e.select(`SELECT name FROM ${l}`)).map(e=>e.name));for(let a=0;a<t.length;a++){let i=t[a];if(T.has(i.name))continue;let n=i.sql.split(";").map(e=>e.trim()).filter(e=>e.length>0),s=i.name.replace(/'/g,"''");n.push(`INSERT INTO ${l} (name) VALUES ('${s}')`),n.push(`PRAGMA user_version = ${a+1}`),await e.batch(n)}}e.s(["migrate",0,t])}]);

//# sourceMappingURL=1132o03l4637n.js.map