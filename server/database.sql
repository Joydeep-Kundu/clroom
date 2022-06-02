CREATE DATABASE classroom;
CREATE TABLE users(
    u_name VARCHAR(25),
    u_email VARCHAR(40) PRIMARY KEY,
    u_role VARCHAR(25),
    u_password VARCHAR
);
CREATE TABLE course(
    c_name VARCHAR(30),
    c_dis VARCHAR(200),
    c_id VARCHAR(50) PRIMARY KEY,
    owner_e VARCHAR(40),
    CONSTRAINT fk
    FOREIGN KEY(owner_e)
    REFERENCES users(u_email)
);
CREATE TABLE document(
    d_d date,
    d_T time,
    c_id VARCHAR,
    u_email VARCHAR,
    CONSTRAINT dk
    FOREIGN KEY (u_email)
    REFERENCES  users(u_email),
    FOREIGN KEY (c_id)
    REFERENCES course(c_id),
    PRIMARY KEY (d_t,d_d,c_id,u_email)
);
CREATE TABLE comment(
    cm_d date,
    cm VARCHAR;
    cm_t time,
    c_id VARCHAR,
    cm_email VARCHAR,
        CONSTRAINT dk
    FOREIGN KEY (cm_email)
    REFERENCES  users(u_email),
    FOREIGN KEY (c_id)
    REFERENCES course(c_id),
    PRIMARY KEY(cm_d,cm_t,c_id,cm_email)
);
