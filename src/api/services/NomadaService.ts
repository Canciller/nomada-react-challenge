/*
function timeout(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
*/

class NomadaService {
  key: string;
  url: string;

  constructor() {
    this.url = process.env.REACT_APP_NOMADA_URL as string;
    this.key = process.env.REACT_APP_NOMADA_KEY as string;
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
