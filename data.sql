use db_dreamvault;
INSERT INTO products (name, price, image,description) VALUES
('Rising Phoenix Scholarship', 99.99, 'https://picsum.photos/id/101/300/200', 'Funds scholarships for underserved students, helping them rise to new opportunities.'),
('Inventor''s Spark Grant', 149.99, 'https://picsum.photos/id/102/300/200', 'Supports tech innovators and creators working on sustainable solutions.'),
('Starry Voyage Travel Fund', 199.99, 'https://picsum.photos/id/103/300/200', 'Provides travel grants for students and dreamers exploring educational opportunities abroad.'),
('Blooming Garden Initiative', 179.99, 'https://picsum.photos/id/104/300/200', 'Helps fund community gardens and urban greening projects to create thriving spaces.'),
('Creative Canvas Fund', 129.99, 'https://picsum.photos/id/105/300/200', 'Supports aspiring artists in bringing their creative visions to life.'),
('Dreamer''s Library Project', 89.99, 'https://picsum.photos/id/106/300/200', 'Funds educational resources and libraries in underserved communities.');

INSERT INTO marketing_preferences (id, preference) VALUES (1, 'emailer');  -- Email Marketing
INSERT INTO marketing_preferences (id, preference) VALUES (2, 'whatsapp');   