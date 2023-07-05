CREATE TABLE IF NOT EXISTS `paypal`.`history` (
  `idhistory` INT NOT NULL AUTO_INCREMENT,
  `date` VARCHAR(45) NOT NULL,
  `type` ENUM('withdraw', 'deposit', 'transfer') NOT NULL,
  `reciver` VARCHAR(45) NOT NULL,
  `card_idcard` INT UNSIGNED NOT NULL,
  `users_idusers` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`idhistory`),
  INDEX `fk_history_card1_idx` (`card_idcard` ASC) VISIBLE,
  INDEX `fk_history_users1_idx` (`users_idusers` ASC) VISIBLE,
  CONSTRAINT `fk_history_card1`
    FOREIGN KEY (`card_idcard`)
    REFERENCES `paypal`.`card` (`idcard`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_history_users1`
    FOREIGN KEY (`users_idusers`)
    REFERENCES `paypal`.`users` (`idusers`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

module.exports = {
  getAll: function (callback) {
    const q = 'SELECT * FROM card';
    conn.query(q, function (error, results) {
      callback(error, results);
    });
  },

  add: function (callback, values, iduser) {
    const q =
      'INSERT INTO card (cardnumber,cvv,balance,expiry,brand,users_idusers) VALUES (?,?,?,?,?,?)';
    conn.query(
      q,
      [
        values.cardnumber,
        values.cvv,
        values.balance,
        values.expiry,
        values.brand,
        iduser,
      ],
      function (err, results) {
        callback(err, results);
      }
    );
  },
  delete: function (idcards, callback) {
    const q = `DELETE FROM card WHERE idcard = ${idcards}`;
    conn.query(q, function (err, results) {
      callback(err, results);
    });
  },
  update: function (values, idcard, callback) {
    const q = `UPDATE card SET balance=${values.balance} WHERE idcard =${idcard}`;
    conn.query(q, function (err, results) {
      callback(err, results);
    });
  },
};
