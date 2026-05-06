# Build stage
FROM node AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
# Production stage
FROM node 
WORKDIR /app
RUN npm i -g serve
ENV PATH="/usr/local/bin:$path"
COPY --from=build /app/dist ./dist
EXPOSE 3000
CMD ["serve", "-s", "dist","-l","3000"]