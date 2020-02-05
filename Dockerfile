# Builds a Docker to deliver dist/
FROM docker.quizofkings.com/nginx:1.13.3-alpine
COPY dist/ /usr/share/nginx/html
#  - mkdir -p node_modules/iransans-fontface/fonts/IRANSansWeb
#  - cp -a /iran-fonts/. /node_modules/iransans-fontface/fonts/IRANSansWeb/