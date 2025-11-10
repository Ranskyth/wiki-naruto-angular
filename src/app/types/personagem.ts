export interface IPersonagem {
  id: string | any;
  title: string;
  description: string;
  img_card: string;
  bibliografia: {
    intro: string;
    personalidade: string;
    aparencia: string;
    historia: string;
  };
  curiosidades: string[];
  caracteristicas: {
    idade: string;
    altura: string;
    peso: string;
    tiposangue: string;
    classificacao: string;
    ocupacao: string;
    cla: string;
    familia: string;
  };
}

export interface IBibliografia {
  intro: string;
  personalidade: string;
  aparencia: string;
  historia: string;
}
