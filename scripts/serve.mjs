import http from "node:http"; import fs from "node:fs"; import path from "node:path";
const root=path.resolve("dist"); const port=process.argv[2]||8080;
const types={".html":"text/html; charset=utf-8",".css":"text/css",".js":"application/javascript",".png":"image/png",".jpg":"image/jpeg",".webp":"image/webp",".avif":"image/avif",".woff2":"font/woff2",".mp4":"video/mp4",".mp3":"audio/mpeg",".svg":"image/svg+xml"};
http.createServer((req,res)=>{
 let p=decodeURIComponent(req.url.split("?")[0]); if(p.endsWith("/"))p+="index.html";
 const f=path.join(root,p);
 fs.stat(f,(e,st)=>{ if(e||!st.isFile()){res.writeHead(404);res.end("not found");return;}
  const type=types[path.extname(f)]||"application/octet-stream";
  const range=req.headers.range;
  if(range&&/^bytes=/.test(range)){
    const [a,b]=range.replace("bytes=","").split("-");
    const start=a?parseInt(a):0; const end=b?parseInt(b):st.size-1;
    res.writeHead(206,{"Content-Type":type,"Content-Range":`bytes ${start}-${end}/${st.size}`,"Accept-Ranges":"bytes","Content-Length":end-start+1,"Cache-Control":"no-store"});
    fs.createReadStream(f,{start,end}).pipe(res);
  } else {
    res.writeHead(200,{"Content-Type":type,"Content-Length":st.size,"Accept-Ranges":"bytes","Cache-Control":"no-store"});
    fs.createReadStream(f).pipe(res);
  }
 });
}).listen(port,"127.0.0.1",()=>console.log("http://127.0.0.1:"+port));