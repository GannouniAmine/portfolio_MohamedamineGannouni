# syntax=docker/dockerfile:1.6

# --- Build stage: install deps and build ---
FROM node:20-alpine AS build

# Set workdir
WORKDIR /app

# Install OS deps if needed (none for Vite default)
# Copy manifests first for better caching
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./

# Configure npm to prefer clean ci install when lockfile exists
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi

# Copy rest of source
COPY . .

# Build production assets
RUN npm run build

# --- Runtime stage: serve static using Nginx ---
FROM nginx:1.27-alpine AS runtime

# Remove default nginx site
RUN rm -f /etc/nginx/conf.d/default.conf

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/app.conf

# Copy built assets from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port
EXPOSE 80

# Healthcheck (optional)
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://localhost/ || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
