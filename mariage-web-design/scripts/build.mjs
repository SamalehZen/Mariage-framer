import * as esbuild from "esbuild";
import fs from "node:fs";
fs.rmSync("dist",{recursive:true,force:true});
await esbuild.build({
  entryPoints:["src/main.tsx"], bundle:true, outfile:"dist/app.js",
  jsx:"automatic", minify:true, legalComments:"none", target:["chrome110"],
  define:{"process.env.NODE_ENV":'"production"'},
  loader:{".woff2":"file",".webp":"file",".jpg":"file",".png":"file",".avif":"file"},
});
fs.copyFileSync("index.html","dist/index.html");
fs.mkdirSync("dist/assets",{recursive:true});
for (const f of fs.readdirSync("assets")) fs.cpSync("assets/"+f,"dist/assets/"+f,{recursive:true});
console.log("built dist/", fs.readdirSync("dist"));