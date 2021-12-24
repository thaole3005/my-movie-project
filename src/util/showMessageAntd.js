import { message, Button, Space } from 'antd';

export const showMessageAntd = (messageType, messageText) => {
  message[messageType](messageText);
};