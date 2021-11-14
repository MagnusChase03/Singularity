FROM ubuntu
RUN apt-get -y update; exit 0
RUN apt-get -y install nodejs
RUN apt-get -y install npm
RUN apt-get -y install python3
RUN apt-get -y install python3-pip
WORKDIR CODE
COPY . .
EXPOSE 3000
CMD ["npm", "start"]