# ==========================================
# Stage 1: Build static assets with Node & Yarn Berry (Corepack)
# ==========================================
FROM node:22-alpine AS builder

WORKDIR /app

# Enable Corepack for Yarn Berry (v4)
RUN corepack enable

# Copy dependency manifests and configuration
COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn ./.yarn

# Install dependencies deterministically
RUN yarn install --immutable

# Copy project source and configuration files
COPY astro.config.mjs tailwind.config.mjs* ./
COPY public ./public
COPY src ./src

# Build static production bundle to /app/dist
RUN yarn build

# ==========================================
# Stage 2: Production Server (Caddy Alpine)
# ==========================================
FROM caddy:2-alpine AS runtime

# Copy static build from builder stage to Caddy web root
COPY --from=builder /app/dist /usr/share/caddy

# Copy custom Caddy configuration
COPY Caddyfile /etc/caddy/Caddyfile

# Expose HTTP and HTTPS ports
EXPOSE 80 443

CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]
