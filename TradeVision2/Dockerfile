# Stage 1: Use an official Nginx image as the base.
# Nginx is a lightweight and high-performance web server.
# 'alpine' is a very small version, which keeps our image size down.
FROM nginx:alpine

# Stage 2: Copy your application's code into the web server's public directory.
# This copies the index.html file from your project folder into the
# default folder Nginx serves files from inside the container.
COPY index.html /usr/share/nginx/html

# No EXPOSE or CMD is needed, as the base Nginx image
# already configures itself to expose port 80 and start the server.