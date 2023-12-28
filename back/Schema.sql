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
-- Table `team3`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `team3`.`users` (
  `UserID` INT NOT NULL AUTO_INCREMENT,
  `Password` VARCHAR(255) NULL DEFAULT NULL,
  `Email` VARCHAR(255) NULL DEFAULT NULL,
  `Role` VARCHAR(50) NULL DEFAULT NULL,
  `FirstName` VARCHAR(255) NULL DEFAULT NULL,
  `LastName` VARCHAR(255) NULL DEFAULT NULL,
  `ConfirmPassword` VARCHAR(255) NULL DEFAULT NULL,
  `createdAt` DATETIME NULL DEFAULT NULL,
  `updatedAt` DATETIME NULL DEFAULT NULL,
  `adress` TEXT NULL DEFAULT NULL,
  PRIMARY KEY (`UserID`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `team3`.`carts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `team3`.`carts` (
  `CartID` INT NOT NULL AUTO_INCREMENT,
  `NameCart` VARCHAR(255) NULL DEFAULT NULL,
  `CartImage` JSON NULL DEFAULT NULL,
  `Price` INT NULL DEFAULT NULL,
  `Quantity` INT NULL DEFAULT NULL,
  `userUserID` INT NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`CartID`),
  INDEX `userUserID` (`userUserID` ASC) VISIBLE,
  CONSTRAINT `carts_ibfk_1`
    FOREIGN KEY (`userUserID`)
    REFERENCES `team3`.`users` (`UserID`)
    ON DELETE SET NULL
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `team3`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `team3`.`categories` (
  `CategoryID` INT NOT NULL AUTO_INCREMENT,
  `NameCategory` VARCHAR(255) NULL DEFAULT NULL,
  `CategoryImage` VARCHAR(255) NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`CategoryID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `team3`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `team3`.`products` (
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
  `ProductImage` JSON NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `cartCartID` INT NULL DEFAULT NULL,
  `userUserID` INT NULL DEFAULT NULL,
  `categoryCategoryID` INT NULL DEFAULT NULL,
  PRIMARY KEY (`ProductID`),
  INDEX `cartCartID` (`cartCartID` ASC) VISIBLE,
  INDEX `userUserID` (`userUserID` ASC) VISIBLE,
  INDEX `categoryCategoryID` (`categoryCategoryID` ASC) VISIBLE,
  CONSTRAINT `products_ibfk_1`
    FOREIGN KEY (`cartCartID`)
    REFERENCES `team3`.`carts` (`CartID`)
    ON DELETE SET NULL
    ON UPDATE CASCADE,
  CONSTRAINT `products_ibfk_2`
    FOREIGN KEY (`userUserID`)
    REFERENCES `team3`.`users` (`UserID`)
    ON DELETE SET NULL
    ON UPDATE CASCADE,
  CONSTRAINT `products_ibfk_3`
    FOREIGN KEY (`categoryCategoryID`)
    REFERENCES `team3`.`categories` (`CategoryID`)
    ON DELETE SET NULL
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;