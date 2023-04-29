import axios from "axios";
import { AppError } from "../../shared/middlewares/errors/error";

interface IUsers {
  id: number;
  name: string;
  imagem: string;
  site: string;
  admin: string;
}

class GetUsersByNameGithub {
  async loadUsers(name: String): Promise<any> {
    try {
      const result = await axios.get(
        `https://api.github.com/search/users?q=${name}`
      );
      return result.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async execute(name: String): Promise<IUsers> {
    
    const loadUsers = await this.loadUsers(name);

    return loadUsers.items.map((user) => {
      return {
        id: user.id,
        name: user.login,
        imagem: user.avatar_url,
        site: user.html_url,
        admin: user.site_admin ? "SIM" : "NÃO",
      };
    });
  }
}

export { GetUsersByNameGithub };
