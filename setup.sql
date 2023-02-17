DROP TABLE images CASCADE;
DROP TABLE messages CASCADE;
DROP TABLE users CASCADE;

-- tables
CREATE TABLE users (
    uuid UUID UNIQUE,
    username VARCHAR(64) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    /* hash VARCHAR(256) NOT NULL, */
    avatar BYTEA -- probably placeholder idk where we'll keep images
);

CREATE TABLE messages (
    id SERIAL UNIQUE,
    sent TIMESTAMP default(current_timestamp), -- message sent time
    from_user UUID REFERENCES users (uuid) NOT NULL,
    to_user UUID REFERENCES users (uuid) NOT NULL,
    body TEXT, -- the message body
    read TIMESTAMP -- message read time
);

CREATE TABLE images (
    spec VARCHAR(16),
    from_user UUID REFERENCES users (uuid) NOT NULL,
    to_user UUID REFERENCES users (uuid) NOT NULL,
    image BYTEA,
    first_msg INT REFERENCES messages (id) NOT NULL
);

INSERT INTO users (uuid, username, email) VALUES ( 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', 'bob', 'bob@urmom.com');
INSERT INTO messages (from_user, to_user, body) VALUES ( 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', 'whatsupdoc');
INSERT INTO images (from_user, to_user, first_msg) VALUES ( 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', 1)
