import{P as o}from"../_/plIf9CoO.js";export{c as createPostMessageChannel}from"../_/plIf9CoO.js";import{W as r}from"../_/BkDeKUcv.js";export{c as createWebSocketChannel}from"../_/BkDeKUcv.js";import{C as t}from"../_/s5JkCJv0.js";import{global as e}from"@storybook/global";import"@storybook/core-events";import"@storybook/client-logger";import"telejson";import"qs";import"tiny-invariant";var{CONFIG_TYPE:s}=e,n=t;function createBrowserChannel({page:e,extraTransports:n=[]}){let a=[new o({page:e}),...n];if(s==="DEVELOPMENT"){let o=window.location.protocol==="http:"?"ws":"wss",{hostname:t,port:e}=window.location,s=`${o}://${t}:${e}/storybook-server-channel`;a.push(new r({url:s,onError:()=>{}}))}return new t({transports:a})}export{t as Channel,o as PostMessageTransport,r as WebsocketTransport,createBrowserChannel,n as default};
