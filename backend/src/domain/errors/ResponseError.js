const { v4: uuidv4 } = require('uuid');

class ResponseError extends Error {
  /**
   * @param {string} message - Сообщение для клиента
   * @param {number} status - HTTP статус (по умолчанию 400)
   * @param {string} type - Тип ошибки (по умолчанию 'general')
   */
  constructor(message, status = 400, type = 'general') {
    super(message);
    this.status = status;
    this.type = type;
    this.id = uuidv4();
  }
}

module.exports = ResponseError;
