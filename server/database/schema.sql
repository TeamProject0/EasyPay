-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema paypal
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema paypal
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `paypal` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `paypal` ;

-- -----------------------------------------------------
-- Table `paypal`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `paypal`.`users` (
  `idusers` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(300) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `country` VARCHAR(45) NOT NULL,
  `cover` VARCHAR(256) NOT NULL,
  PRIMARY KEY (`idusers`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `paypal`.`card`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `paypal`.`card` (
  `idcard` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `cardnumber` INT NOT NULL,
  `cvv` INT NOT NULL,
  `balance` INT NOT NULL,
  `expiry` VARCHAR(45) NOT NULL,
  `brand` VARCHAR(45) NOT NULL,
  `users_idusers` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`idcard`),
  INDEX `fk_card_users_idx` (`users_idusers` ASC) VISIBLE,
  CONSTRAINT `fk_card_users`
    FOREIGN KEY (`users_idusers`)
    REFERENCES `paypal`.`users` (`idusers`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
