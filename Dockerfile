FROM openjdk:19-jdk-alpine
WORKDIR /app
COPY target/UserCrud-0.0.1-SNAPSHOT.jar .
EXPOSE 8080
CMD ["java", "-jar", "UserCrud-0.0.1-SNAPSHOT.jar"]
