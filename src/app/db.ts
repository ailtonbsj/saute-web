import Dexie, { Table } from "dexie";
import { Instituicao } from "./instituicao/instituicao.model";
import { NivelEscolar } from "./nivel-escolar/nivel-escolar.model";
import { Professor } from "./professor/professor.model";

export class AppDB extends Dexie {
  nivelEscolar!: Table<NivelEscolar, number>;
  instituicao!: Table<Instituicao, number>;
  professor!: Table<Professor, number>;

  constructor() {
    super('saute-web');
    this.version(4).stores({
      nivelEscolar: '++id, nivelEscolar, createdAt, updatedAt',
      instituicao: ['++id', 'instituicao', 'nivelEscolarId', 'endereco', 'numero', 'bairro',
        'municipio', 'email', 'dependencia', 'entidade', 'credenciamento', 'valorCredenciamento',
        'recredenciamento', 'valorRecredenciamento', 'createdAt', 'updatedAt'].join(','),
      professor: '++id'
    });
  }
}

export const db = new AppDB();
