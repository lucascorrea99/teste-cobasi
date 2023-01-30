FROM node:18 as build
WORKDIR /app
ARG NODE_ENV=production
ARG REACT_APP_COBASI=true
COPY . .
RUN npm ci 
RUN npm run build

FROM nginx:latest as production
COPY --from=build /app/build /usr/share/nginx/html
#COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
