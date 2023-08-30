FROM adoptopenjdk/openjdk11:alpine-jre
WORKDIR /tmp
COPY ./target/cloud-gateway-0.0.1-SNAPSHOT.jar  /tmp/srv.jar
EXPOSE 9191
ENTRYPOINT ["java", "-jar", "/tmp/srv.jar"]

