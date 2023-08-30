FROM adoptopenjdk/openjdk11:alpine-jre
WORKDIR /tmp
COPY ./target/greencommute-0.0.1-SNAPSHOT.jar  /tmp/srv.jar
EXPOSE 9003
ENTRYPOINT ["java", "-jar", "/tmp/srv.jar"]
