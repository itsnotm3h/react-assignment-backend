use db_dreamvault;

CREATE TABLE ceramics (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    imageURL VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    series VARCHAR(255) NOT NULL
);


INSERT INTO ceramics (name, price, imageURL ,description, series) VALUES  
('Wildflower Basin Vase', 65.00, '/images/RBC_wildflower.png', 'A wide, rugged vase with uneven edges and a textured finish, perfect for loose floral arrangements.', 'The Rustic Bloom Collection'),  
('Meadow Hearth Vase', 50.00, '/images/RBC_meadow.png', 'A stout, earthy vase with a raw glaze and an imperfect shape, capturing the beauty of nature’s unpredictability.', 'The Rustic Bloom Collection'),  
('Valley Drift Table Vase', 80.00, '/images/RBC_valley.png', 'A broad, shallow vase with a rugged matte glaze and asymmetrical form, a striking centerpiece for any room.', 'The Rustic Bloom Collection'),
('Ashen Sauce Jar', 40.00, '/images/EA_ashen.png', 'A hand-thrown sauce jar with a speckled grey glaze and an organic texture, ideal for serving sauces or dressings.', 'The Earth & Ash Collection'),  
('Earthen Bowl', 60.00, '/images/EA_earthen', 'A rustic bowl with a deep, earthy tone and a smooth interior, perfect for hearty meals or salads.', 'The Earth & Ash Collection'),  
('Slate Horizon Vase', 85.00, '/images/EA_slate.png', 'A tall vase with a gradient of grey tones and a raw, unglazed base, blending elegance with nature.', 'The Earth & Ash Collection');