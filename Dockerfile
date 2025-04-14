#
# Build stage
#
FROM maven:3.6.3-jdk-24-slim AS build
COPY src /home/app/src
COPY pom.xml /home/app
RUN mvn -f /home/app/pom.xml clean package

#
# Package stage
#
FROM openjdk:24-jre-slim
COPY --from=build /home/app/target/getyourway-0.0.1-SNAPSHOT.jar /usr/local/lib/demo.jar
EXPOSE 3001
ENTRYPOINT ["java","-jar","/usr/local/lib/demo.jar"]