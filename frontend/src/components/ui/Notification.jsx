import { notification } from 'antd';

export default class Notification {
  /**
   * @param {string} title
   * @param {string} description
   * @param {number} duration
   */
  static info(title, description = '', duration = 5) {
    this._openNotification('info', title, description, duration);
  }

  /**
   * @param {string} title
   * @param {string} description
   * @param {number} duration
   */
  static warning(title = 'Внимание', description = '', duration = 5) {
    this._openNotification('warning', title, description, duration);
  }

  /**
   * @param {string} title
   * @param {string} description
   * @param {number} duration
   */
  static error(title = 'Ошибка', description = '', duration = 5) {
    this._openNotification('error', title, description, duration);
  }

  /**
   * @param {('success', 'info', 'warning', 'error')} type
   * @param {string} message
   * @param {string} description
   * @param {number} duration
   */
  static _openNotification(type, message, description, duration) {
    notification[type]({ message, description, duration });
  }
}
