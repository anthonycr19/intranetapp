export class RegistroInterface {
    constructor(
        public DEPARTAMENTO : string = '',
        public PROVINCIA : string = '',
        public DISTRITO : string = '',
        public NUM_SEC : number = 0,
        public NUM_AEU : number = 0,
        public ZONA : string = '',
        public EST_CROQUIS : number = 0,
        public est_imp : number = 0,
        public num_pag : number = 0,
        public aeu_final: number = 0
    ){}
}