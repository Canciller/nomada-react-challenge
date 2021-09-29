import MovieDBService from './MovieDBService';
import NomadaService from './NomadaService';

class AppService {
  async search(fileOrQuery: Blob | string) {
    let actorName = '';

    if (fileOrQuery instanceof Blob)
      actorName = await NomadaService.upload(fileOrQuery);
    else actorName = fileOrQuery;

    return await MovieDBService.searchPerson(actorName);
  }
}

export default new AppService();
