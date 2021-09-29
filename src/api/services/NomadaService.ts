import { nomada } from '@config';

class NomadaService {
  key: string;
  url: string;

  constructor() {
    this.url = nomada.url;
    this.key = nomada.key;
  }

  async upload(file: Blob): Promise<string> {
    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch(`${this.url}/upload`, {
      method: 'POST',
      body: formData,
      headers: {
        Nomada: this.key,
      },
    });

    const data = await res.json();

    if (data.error) throw new Error(data.error);

    return data.actorName;
  }
}

export default new NomadaService();
