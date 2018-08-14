USE burgers_db;

INSERT INTO burgers (burger_name, devoured) VALUES ("Bacon Cheeseburger", true);
INSERT INTO burgers (burger_name, devoured) VALUES ("Chicken Bacon Burger", false);
INSERT INTO burgers (burger_name, devoured) VALUES ("Fish Burger", true);
INSERT INTO burgers (burger_name, devoured) VALUES ("Chicken Tenders Burger", true);
INSERT INTO burgers (burger_name, devoured) VALUES ("Big Jack Burger", true);

SELECT * FROM burgers;