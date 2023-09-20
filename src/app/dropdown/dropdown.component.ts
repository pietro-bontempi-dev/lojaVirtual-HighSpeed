import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {

 

  modelos: any = [];

  marca: any = [];

  precos: any = [];

  preco: any = [];

  modelo: string = "";

  select1: any = {};

  select2: any = "Selecione";

 

  pesquisa =[

    {

      id:0,

      name: 'Selecione',

      modelos: ['Selecione'],

 

    },

    {

      id:1,

      name: 'Ferrari',

      modelos: ['La Ferrari', '458 Italia', 'Portofino', 'F8','812'],

      precos: ['R$21,6 Milhões','R$2,9 Milhões','R$2,8 Milhões', 'R$4,4 Milhões', 'R$6,4 Milhões']

    },

    {

      id:2,

      name: 'Mercedes',

      modelos: ['SLS AMG', 'GLA 200', 'AMG GT'],

      precos: ['R$1,1 Milhões','R$357 Mil', 'R$500 Mil' ]

    },

    {

      id:3,

      name: 'Lamborghini',

      modelos: ['Veneno', 'Aventador', 'Sesto Elemento','Huracan', 'Urus'],

      precos: ['R$44,5 Milhões', 'R$8 Milhões', 'R$10,5 Milhões', 'R$8 Milhões', 'R$1 Milhão']

    },

    {

      id:4,

      name: 'Koenigsegg',

      modelos: ['Gemera', 'Jesko Absolut', 'Agera RS'],

      precos: ['R$15 Milhões','R$12,9 Milhões', 'R$7 Milhões' ]

    },

    {
      id:5,

      name: 'Bugatti',

      modelos: ['Chíron', 'Veyron'],

      precos: ['R$54 Milhões', 'R$16 Milhões']
    },

    {
      id:6,

      name: 'Toyota',

      modelos: ['Supra'],

      precos: ['R$313 Mil']
    },

    {
      id:7,

      name: 'Ford',

      modelos: ['Mustang'],

      precos: ['R$566 Mil']
    },

    {
      id:8,

      name: 'Porsche',

      modelos: ['Taycan', '911', 'Cayenne', '718', 'Panamera'],

      precos: ['R$629 Mil','R$815 Mil', 'R$629 Mil', 'R$519 Mil', 'R$689 Mil']
    },

    {
      id:9,

      name: 'BMW',

      modelos: ['X5', 'Serie 3', 'X1', 'X3', 'X6'],

      precos: ['R$689,5 Mil', 'R$316 Mil', 'R$297 Mil', 'R$411 Mil', 'R$745 Mil']
    },

    {
      id:10,

      name: 'Aston Martin',

      modelos: ['Vantage'],

      precos: ['R$2,5 Milhões']
    },

    {
      id:11,

      name: 'Audi',

      modelos: ['E-Tron GT', 'RS5', 'A5','Q7','A4'],

      precos: ['R$700 Mil', 'R$759 Mil', 'R$357 Mil', 'R$563 Mil', 'R$300 Mil']
    }
    

  ];

 

  constructor(){}

  ngOnInit(){

    this.select1 = 0;

    this.modelos = this.pesquisa.filter((x) => x.id == this.select1)[0].modelos

    this.precos = this.pesquisa.find((x) => x.id == this.select1)?.precos;

   

  }

  onChange(){

    this.select2 = '';

    this.modelos = this.pesquisa.filter((x) => x.id == this.select1)[0].modelos;

    this.precos = this.pesquisa.find((x) => x.id == this.select1)?.precos; // Obtenha a lista de preços correspondente à marca selecionada

 

}

  clickButton(){

    this.marca = this.pesquisa.find((x) => x.id == this.select1)?.name

    this.modelo = this.select2;

 

    //Select de preços dos celulares

    const selectedMarca = this.pesquisa.find((x) => x.id == this.select1);

    const selectedCelular = this.select2;

 

    if (selectedMarca && selectedCelular) {

      const index = selectedMarca.modelos.indexOf(selectedCelular);

      if (index >= 0 && index < this.precos.length) {

        this.preco = this.precos[index];

      } else {

        this.preco = 0;

      }

    } else {

      this.preco = 0;

    }

 

  }


  ///////////////////////////////////////////////////////////////////////////////


  items = ['Insira os modelos desejados abaixo:'];

  valueItem = ''; //cria o valueItem que será atribuído ao ngModel

  //------------------------------COMPONENTE1----------------------------------

  //necessário import ViewChild
  @ViewChild('newItem') carros: any;
  //o newitem é no html, a referência que vai chamar aqui no TS, e aqui pode ser o mesmo nome ou um qqr comida
  //vou usar um filho que vem da interface, chamado newitem
  //cria objeto da classe viewchild

  addNewItem(value: string) {
    //value vem da interface
    this.items.push(value); //adiciona no items, que já existe, mais um item
  }

  remove() {
    //define que comida que é um elemento nativo, passa a valer o que for definido
    this.carros.nativeElement.value = ' ';
  }

  removeItens() {
    while (this.items.length > 0) {
      this.items.pop(); //remove ultimo elemento
    }
  }


}
