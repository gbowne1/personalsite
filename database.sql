CREATE DATABASE ContactsDatabase;
CREATE TABLE Contact (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    email    VARCHAR(255)    NOTNULL,
    create_date  DATETIME    NOTNULL,
    password    VARCHAR(255)    NOTNULL,
    last_name   VARCHAR(255)    NOTNULL,
    first_name  VARCHAR(255)    NOTNULL,
    street      VARCHAR(255)    NOTNULL,
    city        VARCHAR(255)    NOTNULL,
    state            CHAR(2)    NOTNULL,
    zip             CHAR(10)    NOTNULL,
    phone       VARCHAR(255)    NOTNULL,
    phone_type  VARCHAR(255)    NOTNULL,       
);

/* This should be good enough */