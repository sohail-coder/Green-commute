FROM adoptopenjdk/openjdk11:alpine-jre
WORKDIR /tmp
COPY ./target/service-registry-0.0.1-SNAPSHOT.jar  /tmp/srv.jar
EXPOSE 8761
ENTRYPOINT ["java", "-jar", "/tmp/srv.jar"]
