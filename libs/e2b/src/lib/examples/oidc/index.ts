import deno_proxy from "./deno-proxy.example?raw";
import next_auth from "./next-auth-single.example?raw";
import next_auth_multi from "./next-auth.example?raw";

export const proxy_page_deno= `
        proxy page implementation for oidc login in deno
            \`\`\`js
              ${deno_proxy}
              \`\`\` 
    `;




export const next_auth_oidc_provider= `
        oidc implementation with next-auth and gigya
            \`\`\`js
              ${next_auth}
              \`\`\` 
    `;

export const next_auth_oidc_provider_multi= `
        oidc implementation with next-auth and gigya; multi tenant
            \`\`\`js
              ${next_auth_multi}
              \`\`\` 
    `;