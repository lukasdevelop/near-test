import axios from "axios";
interface IUsers {
  id: number;
  name: string;
  imagem: string;
  site: string;
  admin: string;
}

class GetUsersByNameGithub {
  private async loadUsers(name: String): Promise<any> {

    const result = await axios.get(
      `https://api.github.com/search/users?q=${name}`
    );
    return result.data;
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
