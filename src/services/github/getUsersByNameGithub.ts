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
    let startUsers: Number = 0;
    let limitUsers: Number = 10;

    //Acho desnecessario essa função, pois apenas utilizando o limite de usuarios de 10, já seria o suficiente. Mas estou 
    //utilizando o total_count da API pois o enunciado do teste pede.
    (loadUsers.total_count >= limitUsers) ? limitUsers : limitUsers = loadUsers.total_count;

    return loadUsers.items.slice(startUsers, limitUsers).map((user) => {   
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
