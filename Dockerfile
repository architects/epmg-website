FROM datapimp/skypager-env
COPY package.json /app/package.json
RUN yarn install
COPY . /app
CMD skypager start
EXPOSE 3000
