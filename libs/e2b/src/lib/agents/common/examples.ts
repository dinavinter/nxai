import deno_proxy from "./deno_proxy.example?raw";
import notify_login from './notify_login.example?raw';

export function notify_login_deno() {
    return `task: implement a backend login",
        answer: here is how you write a deno app using gigya notify login
           \`\`\`js
              ${notify_login}
              \`\`\`
               
     
    `;
}

export function proxy_page_deno() {
    return `
        goal is "integrate with gigya oidc and saml",
        task is "write custom login proxy page"
        your answer is "here is how you write a deno app to serve a custom login (proxy) page for gigya
           \`\`\`js
              ${deno_proxy}
              \`\`\`
               
     
    `;
}