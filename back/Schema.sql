-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema team3
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema team3
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `team3` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `team3` ;

-- -----------------------------------------------------
-- Table `team3`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `team3`.`user` (
  `UserID` INT NOT NULL AUTO_INCREMENT,
  `Password` VARCHAR(255) NULL DEFAULT NULL,
  `Email` VARCHAR(255) NULL DEFAULT NULL,
  `Role` VARCHAR(50) NULL DEFAULT NULL,
  `FirstName` VARCHAR(255) NULL DEFAULT NULL,
  `LastName` VARCHAR(255) NULL DEFAULT NULL,
  `ConfirmPassword` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`UserID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `team3`.`cart`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `team3`.`cart` (
  `CartID` INT NOT NULL AUTO_INCREMENT,
  `NameCart` VARCHAR(255) NULL DEFAULT NULL,
  `CartImage` LONGTEXT NULL DEFAULT NULL,
  `Price` INT NULL DEFAULT NULL,
  `Quantity` INT NULL DEFAULT NULL,
  `user_UserID` INT NULL DEFAULT NULL,
  PRIMARY KEY (`CartID`),
  INDEX `fk_cart_user1_idx` (`user_UserID` ASC) VISIBLE,
  CONSTRAINT `fk_cart_user1`
    FOREIGN KEY (`user_UserID`)
    REFERENCES `team3`.`user` (`UserID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `team3`.`category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `team3`.`category` (
  `CategoryID` INT NOT NULL AUTO_INCREMENT,
  `NameCategory` VARCHAR(255) NULL DEFAULT NULL,
  `CategoryImage` LONGTEXT NULL DEFAULT NULL,
  PRIMARY KEY (`CategoryID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `team3`.`product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `team3`.`product` (
  `ProductID` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(255) NULL DEFAULT NULL,
  `Description` TEXT NULL DEFAULT NULL,
  `Price` DECIMAL(10,2) NULL DEFAULT NULL,
  `Quantity` INT NULL DEFAULT NULL,
  `Rating` INT NULL DEFAULT NULL,
  `Color` VARCHAR(255) NULL DEFAULT NULL,
  `Size` VARCHAR(45) NULL DEFAULT NULL,
  `Availability` VARCHAR(45) NULL DEFAULT NULL,
  `Discount` INT NULL DEFAULT NULL,
  `ProductImage` LONGTEXT NULL DEFAULT NULL,
  `CategoryID` INT NULL DEFAULT NULL,
  `user_UserID` INT NULL DEFAULT NULL,
  `cart_CartID` INT NULL DEFAULT NULL,
  PRIMARY KEY (`ProductID`),
  INDEX `fk_product_category1_idx` (`CategoryID` ASC) VISIBLE,
  INDEX `fk_product_user1_idx` (`user_UserID` ASC) VISIBLE,
  INDEX `fk_product_cart1_idx` (`cart_CartID` ASC) VISIBLE,
  CONSTRAINT `fk_product_cart1`
    FOREIGN KEY (`cart_CartID`)
    REFERENCES `team3`.`cart` (`CartID`),
  CONSTRAINT `fk_product_category1`
    FOREIGN KEY (`CategoryID`)
    REFERENCES `team3`.`category` (`CategoryID`),
  CONSTRAINT `fk_product_user1`
    FOREIGN KEY (`user_UserID`)
    REFERENCES `team3`.`user` (`UserID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

/*Products*/

INSERT INTO Products (ProductID, Name, Description, Price, Quantity, Rating, Color, Size, Availability, Discount, ProductImage, createdAt, updatedAt, cartCartID, userUserID, categoryCategoryID)
VALUES (3, 'Men Printed T-Shirt', 'Printed Hooded Neck Cotton CELIO MEN', '56.00', NULL, NULL, NULL, NULL, 'In Stock', NULL, 'https://eveen.pk/cdn/shop/products/image_f0d1d9f9-5299-40d0-987f-5cf898bd6503.jpg?v=1669282988', '2023-12-20 13:12:05', '2023-12-20 13:12:05', NULL, NULL, NULL);

INSERT INTO Products (ProductID, Name, Description, Price, Quantity, Rating, Color, Size, Availability, Discount, ProductImage, createdAt, updatedAt, cartCartID, userUserID, categoryCategoryID)
VALUES (4, 'Bag for Women', "Sabyasachi Bag Women\'s Mandala Handbag with Wallet - Multi Checkered", '115.00', NULL, NULL, NULL, NULL, 'In Stock', NULL, 'https://www.vasangini.com/wp-content/uploads/2023/01/Sabyasachi-bag-Womens-Mandala-Handbag-with-Wallet-Multi-Checkered.webp', '2023-12-20 13:13:54', '2023-12-20 13:13:54', NULL, NULL, NULL);

INSERT INTO Products (ProductID, Name, Description, Price, Quantity, Rating, Color, Size, Availability, Discount, ProductImage, createdAt, updatedAt, cartCartID, userUserID, categoryCategoryID)
VALUES (7, 'The North Coat', 'The North Face is well known for its high-quality outdoor jackets. They offer a variety of jackets, including insulated jackets, rain jackets', '305.99', NULL, NULL, NULL, NULL, 'In Stock', '25', 'https://image.s5a.com/is/image/saks/0400013873615?wid=900', '2023-12-20 13:24:58', '2023-12-20 13:24:58', NULL, NULL, NULL);

INSERT INTO Products (ProductID, Name, Description, Price, Quantity, Rating, Color, Size, Availability, Discount, ProductImage, createdAt, updatedAt, cartCartID, userUserID, categoryCategoryID)
VALUES (6, 'Vega Téléviseur 32pouces LED HD - A32F1HB1 - Granatie 3 Ans', 'TV is today essential to our everyday lives: It represents a very practical and comfortable form of entertainment. We no longer have to make a detour to the cinema to watch a film. One can enjoy the best entertainment at home. The small screen is a hobby that requires minimal effort (as opposed to books, for example). It’s easy relaxation.', '315.50', NULL, NULL, NULL, NULL, 'In Stock', '21', 'https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/86/5146/1.jpg?7896', '2023-12-20 13:21:06', '2023-12-20 13:21:06', NULL, NULL, NULL);

INSERT INTO Products (ProductID, Name, Description, Price, Quantity, Rating, Color, Size, Availability, Discount, ProductImage, createdAt, updatedAt, cartCartID, userUserID, categoryCategoryID)
VALUES (8, 'Pouffy Pouf Poire Pacha XXL : 80cm x 130cm', 'Very Confortable Pouffy Pouf', '80.75', NULL, NULL, NULL, NULL, 'In Stock', NULL, 'https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/81/457/1.jpg?5390', '2023-12-20 13:28:16', '2023-12-20 13:28:16', NULL, NULL, NULL);

INSERT INTO Products (ProductID, Name, Description, Price, Quantity, Rating, Color, Size, Availability, Discount, ProductImage, createdAt, updatedAt, cartCartID, userUserID, categoryCategoryID)
VALUES (5, 'Laptop Bag for Women', 'Very Practical bag for worker Women', '98.50', NULL, NULL, NULL, NULL, 'In Stock', NULL, 'https://www.thegusto.in/cdn/shop/products/19-9-2022Veronica35284_1e5e9665-ffb5-4d69-ae2e-066f103dc83d.jpg?v=1667055202&width=600', '2023-12-20 13:16:24', '2023-12-20 13:16:24', NULL, NULL, NULL);

INSERT INTO Products (ProductID, Name, Description, Price, Quantity, Rating, Color, Size, Availability, Discount, ProductImage, createdAt, updatedAt, cartCartID, userUserID, categoryCategoryID)
VALUES (1, 'Laptop ASUS TUF Gaming A16', 'Windows 11 Home Up to AMD Ryzen™ 7040 Series Processor Up to AMD Radeon™ RX7700S Mobile Graphics Up to QHD 240Hz 16-inch display Arc Flow Fans™, up to 7 heatpipes Up to 2TB PCIe Gen4x4 SSD, DDR5 RAM 90Wh battery, USB-C power delivery New Sandstorm paint, MIL-STD-810H standards', '7.20', NULL, NULL, NULL, NULL, 'In Stock', '8', 'https://bestbuytunisie.tn/wp-content/uploads/2023/12/asus-tuf-gaming-a16-617-5.jpg', '2023-12-20 12:49:14', '2023-12-20 12:49:14', NULL, NULL, NULL);

INSERT INTO Products (ProductID, Name, Description, Price, Quantity, Rating, Color, Size, Availability, Discount, ProductImage, createdAt, updatedAt, cartCartID, userUserID, categoryCategoryID)
VALUES (2, 'Iphone 14 128Go Midnight APPLE', 'Écran HDR True Tone Large gamme de couleurs (P3) Haptic Touch Contraste 2 000 000:1 (standard) Luminosité maximale de 800 nits (standard) ; luminosité de pointe de 1 200 nits (HDR) Revêtement oléophobe résistant aux traces de doigts Affichage simultané de plusieurs langues et jeux de caractères', '6849.00', NULL, NULL, NULL, NULL, 'In Stock', '12', 'https://mk-media.mytek.tn/media/catalog/product/cache/8be3f98b14227a82112b46963246dfe1/0/1/010-02159-14_1726_1.jpg', '2023-12-20 13:08:12', '2023-12-20 13:08:12', NULL, NULL, NULL);


/*Categories */
INSERT INTO Categories (CategoryID, NameCategory, CategoryImage, createdAt, updatedAt)
VALUES (1, 'Phones', 'https://png.pngitem.com/pimgs/s/509-5091824_smartphone-coloring-page-smartphone-hd-png-download.png', '2023-12-20 10:47:14', '2023-12-20 10:47:14');


INSERT INTO Categories (CategoryID, NameCategory, CategoryImage, createdAt, updatedAt)
VALUES (2, 'Computers', 'https://static.vecteezy.com/ti/vecteur-libre/t1/2363076-icone-vecteur-ordinateur-vectoriel.jpg', '2023-12-20 10:47:59', '2023-12-20 10:47:59');


INSERT INTO Categories (CategoryID, NameCategory, CategoryImage, createdAt, updatedAt)
VALUES (3, 'SmartWatch', 'https://static.vecteezy.com/system/resources/thumbnails/007/081/002/small/phone-device-smart-app-business-watch-brand-cellphone-telephone-free-vector.jpg', '2023-12-20 10:56:03', '2023-12-20 10:56:03');


INSERT INTO Categories (CategoryID, NameCategory, CategoryImage, createdAt, updatedAt)
VALUES (4, 'Camera', 'https://t4.ftcdn.net/jpg/01/07/57/91/360_F_107579101_QVlTG43Fwg9Q6ggwF436MPIBTVpaKKtb.jpg', '2023-12-20 10:56:45', '2023-12-20 10:56:45');


INSERT INTO Categories (CategoryID, NameCategory, CategoryImage, createdAt, updatedAt)
VALUES (5, 'HeadPhones', 'https://images.creativemarket.com/0.1.0/ps/5988713/910/607/m1/fpnw/wm0/senza-titolo-1-.jpg?1&s=23db8eba9896e5fb5f7d048cc056a47b', '2023-12-20 11:01:13', '2023-12-20 11:01:13');
