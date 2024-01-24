#++++++++++++++++++++++++++
# docker build -t test:t1 .
# docker images

# извлеките официальный базовый образ
FROM node:16.20.0-alpine

# установите рабочий каталог
WORKDIR /app

# добавьте `/app/node_modules/.bin` в $PATH
ENV PATH /app/node_modules/.bin:$PATH

# установить зависимости приложения
COPY package.json $WORKDIR
COPY package-lock.json $WORKDIR
RUN npm install --silent
# RUN npm install react-scripts -g --silent # ???

# добавить приложение
COPY . $WORKDIR

# запустить приложение
CMD ["npm", "start"]


#---------------------------------------

# # pull official base image
# # извлеките официальный базовый образ
# FROM node:16.20.0-alpine

# # set working directory
# # установите рабочий каталог
# WORKDIR /app

# # add `/app/node_modules/.bin` to $PATH
# # добавьте `/app/node_modules/.bin` в $PATH
# ENV PATH /app/node_modules/.bin:$PATH

# # install app dependencies
# # установить зависимости приложения
# COPY package.json ./
# COPY package-lock.json ./
# RUN npm install --silent
# # RUN npm install react-scripts -g --silent # ???

# # add app
# # добавить приложение
# COPY . ./


# # start app
# # запустить приложение
# CMD ["npm", "start"]

#++++++++++++++++++++++++++++++

# FROM node
# WORKDIR /web-react
# COPY build $WORKDIR
# # RUN npm install
# COPY . $WORKDIR
# ENV PORT 3000
# # VOLUME ["/app/data"]
# EXPOSE $PORT
# CMD ["index.html"]
