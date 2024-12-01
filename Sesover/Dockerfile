# Use a Java base image for building the application (Maven is included)
FROM maven:3.8.6-openjdk-17-slim as build

# Set the working directory inside the container
WORKDIR /app

# Copy the Maven build file and the source code into the container
COPY ./Sesover/pom.xml ./pom.xml
COPY Sesover/src ./src

# Run Maven build to create a .jar file
RUN mvn clean package -DskipTests

# Second stage: Use a minimal Java image to run the app
FROM openjdk:17-jdk-slim

# Set the working directory inside the container for the runtime environment
WORKDIR /app

# Copy the .jar file from the build stage to the runtime stage
COPY --from=build /app/target/Sesover-0.0.1-SNAPSHOT.jar /app/Sesover.jar

# Set the command to run your application
CMD ["java", "-jar", "Sesover.jar"]

# Expose the port on which the app will run
EXPOSE 8080
