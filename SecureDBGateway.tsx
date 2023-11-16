import EncryptedStorage from 'react-native-encrypted-storage';

export interface IUserInfo {
  id: number;
  email: string;
  token: string;
}

const SecureDBGateway = {
  save: async (userInfo: IUserInfo) => {
    try {
      await EncryptedStorage.setItem('user_session', JSON.stringify(userInfo));
    } catch (error) {
      console.log(error);
    }
  },
  load: async () => {
    try {
      const session = await EncryptedStorage.getItem('user_session');

      if (session !== undefined && session != null) {
        let info: IUserInfo = JSON.parse(session);
        return info;
      }
      console.log(session);
    } catch (error) {
      console.log(error);
    }
  },
};

export default SecureDBGateway;
