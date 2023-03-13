##FROM postgres:latest
##ENV POSTGRES_USER postgres
##ENV POSTGRES_PASSWORD postgres
##ENV POSTGRES_DB ppldb
##
##ADD init.sql /docker-entrypoint-initdb.d/
##
##EXPOSE 5432
#
#FROM postgres:latest
#COPY init.sql /docker-entrypoint-initdb.d/
#ENV POSTGRES_USER postgres
#ENV POSTGRES_PASSWORD postgres
#ENV POSTGRES_DB ppldb
#ADD ./scripts/init.sql /docker-entrypoint-initdb.d/
#ENTRYPOINT ["docker-entrypoint.sh"]
#EXPOSE 5432
#CMD ["postgres"]
FROM postgres:latest

# Copy the init.sql script to the container's /docker-entrypoint-initdb.d/ directory
COPY ./init.sql /docker-entrypoint-initdb.d/

# Set the environment variables for the postgres image
ENV POSTGRES_USER postgres
ENV POSTGRES_PASSWORD postgres
ENV POSTGRES_DB ppldb

# Run the docker-entrypoint.sh script from the official postgres image
ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]

# Expose port 5432 for external connections
EXPOSE 5432

# Start the postgres service in the container
CMD ["postgres"]
