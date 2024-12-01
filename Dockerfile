# Use a Java base image
FROM openjdk:20-jdk-slim AS build

RUN apt-get update && apt-get install -y maven

# Set the working directory inside the container
WORKDIR /app

# Copy the Maven build file and the source code into the container
COPY Sesover/pom.xml /app/pom.xml
COPY Sesover/src /app/src


# Run Maven build to create a .jar file
RUN mvn clean package -DskipTests

# Set the command to run your application
CMD ["java", "-jar", "/app/target/Sesover-0.0.1-SNAPSHOT.jar"]

# Expose the port on which the app will run
EXPOSE 8080
