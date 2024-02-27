export interface Libro {
  Id:       number;
  ISBN:     string;
  Titulo:   string;
  Precio:   number;
  Tema:     Tema;
  Autor:    string;
  Edicion:  Edicion;
  Formato:  Formato;
  Cantidad: number;
  URL:      string;
}

export enum Edicion {
  Aniversario = "Aniversario",
  Especial = "Especial",
}

export enum Formato {
  DeBolsillo = "De bolsillo",
  Digital = "Digital",
  TapaBlanda = "Tapa Blanda",
  TapaDura = "Tapa Dura",
}

export enum Tema {
  CienciaFiccion = "Ciencia Ficcion",
  Fantasia = "Fantasia",
  Historico = "Historico",
  Misterio = "Misterio",
}
