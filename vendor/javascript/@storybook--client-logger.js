import{global as r}from"@storybook/global";var{LOGLEVEL:e}=r,o={trace:1,debug:2,info:3,warn:4,error:5,silent:10},n=e,a=o[n]||o.info,l={trace:(r,...e)=>{a<=o.trace&&console.trace(r,...e)},debug:(r,...e)=>{a<=o.debug&&console.debug(r,...e)},info:(r,...e)=>{a<=o.info&&console.info(r,...e)},warn:(r,...e)=>{a<=o.warn&&console.warn(r,...e)},error:(r,...e)=>{a<=o.error&&console.error(r,...e)},log:(r,...e)=>{a<o.silent&&console.log(r,...e)}},c=new Set,once=r=>(e,...o)=>{if(!c.has(e))return c.add(e),l[r](e,...o)};once.clear=()=>c.clear();once.trace=once("trace");once.debug=once("debug");once.info=once("info");once.warn=once("warn");once.error=once("error");once.log=once("log");var t=once("warn"),pretty=r=>(...e)=>{let o=[];if(e.length){let r,n=/<span\s+style=(['"])([^'"]*)\1\s*>/gi,a=/<\/span>/gi;for(o.push(e[0].replace(n,"%c").replace(a,"%c"));r=n.exec(e[0]);)o.push(r[2]),o.push("");for(let r=1;r<e.length;r++)o.push(e[r])}l[r].apply(l,o)};pretty.trace=pretty("trace");pretty.debug=pretty("debug");pretty.info=pretty("info");pretty.warn=pretty("warn");pretty.error=pretty("error");export{t as deprecate,l as logger,once,pretty};
