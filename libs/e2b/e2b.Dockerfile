# You can use most Debian-based base images
FROM node:18

#install pnpm
RUN npm install -g pnpm


# Install dependencies and customize sandbox
#COPY package.json pnpm-lock.yaml /app/
#WORKDIR /app
#RUN pnpm install --frozen-lockfile --prefer-frozen-lockfile
