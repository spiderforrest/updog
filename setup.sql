

-- tables
CREATE TABLE users (
    uuid UUID NOT NULL UNIQUE,
    username VARCHAR(64) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    hash VARCHAR(256) NOT NULL,
    avatar BYTEA -- probably placeholder idk where we'll keep images
);

CREATE TABLE messages (
    id INT NOT NULL AUTO_INCREMENT,
    sent TIMESTAMP default(current_timestamp)-- message sent time
    FORIGN_KEY (from) REFERENCES users(uuid) NOT NULL,
    FORIGN_KEY (to) REFERENCES users(uuid) NOT NULL,
    body TEXT, -- the message body
    read TIMESTAMP -- message read time
);

CREATE TABLE images (
    spec VARCHAR(16),
    FORIGN_KEY (from) REFERENCES users(uuid) NOT NULL,
    FORIGN_KEY (to) REFERENCES users(uuid) NOT NULL,
    image BYTEA,
    FORIGN_KEY (first_msg) REFERENCES messages(id) NOT NULL UNIQUE
);
