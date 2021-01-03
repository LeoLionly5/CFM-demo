import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { AdservService } from 'src/app/services/adserv.service';
import { Addata } from '../../datamodel/addata';

@Component({
  selector: 'app-adpage',
  templateUrl: './adpage.component.html',
  styleUrls: ['./adpage.component.css']
})
export class AdpageComponent implements OnInit {
  @ViewChild('agGrid',) agGrid: AgGridAngular | undefined;

  addata: Addata = new Addata( 0, "", "", "", "", "", "", "", "", "", "", "", "");

  currentId : number = 0;

  constructor(private adservService: AdservService) {

  }

  ngOnInit(): void {
    this.searchAddata();
  }
  

  columnDefs = [
    { field: 'nom', sortable: true, filter: true, checkboxSelection: true },
    { field: 'prenom', sortable: true, filter: true },
    { field: 'date_de_naissance', sortable: true, filter: true },
    { field: 'numero_de_telephone', sortable: true, filter: true },
    { field: "type_d_adresse", sortable: true, filter: true },

    { field: "voie", sortable: true, filter: true },
    { field: "rue", sortable: true, filter: true },
    { field: "numero", sortable: true, filter: true },
    { field: "ville", sortable: true, filter: true },
    { field: "cp", sortable: true, filter: true },
    { field: "pays", sortable: true, filter: true },
    { field: "commentaire", sortable: true, filter: true }
  ];

  // rowData = [
  //     {"id": 1, Nom: 'Test', Prénom: 'Test', "Date de naissance": '01/01/2021', "Numéro de téléphone": '1111111' },
  //     {"id": 2, Nom: 'Test2', Prénom: 'Test2', "Date de naissance": '02/02/2021', "Numéro de téléphone": '222222' }
  // ];
  rowData : any;

  // editMovie(){
  //   $('#myModalLabel').text("Edit movie");
  //   $('#movieidlabel').show();
  //   $('#movieid').show();
  // }

  add(){
    $('#myModalLabel').text("Add");
  }

  save(){
    if (confirm("Vous êtes sûr de sauvegarder "+this.addata.nom+" ?")) {

      if (this.addata.id == 0){
        this.addata.id = this.currentId + 1;
        this.adservService.insertAddata(this.addata).subscribe();
        this.searchAddata();
      }
      else{
        this.adservService.changeAddata(this.addata).subscribe();
        this.searchAddata();
      }
    }
  }

  searchAddata(){
    this.adservService.getAddata().subscribe((data) =>{
      this.rowData = data;
      console.log(data);
      this.currentId = Math.max(...data.map(ads => ads.id));
      console.log(this.currentId);
    });
  }

  edit() {
    if (this.agGrid == undefined){
      alert(`undefined!!!`);
      return
    }
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    if (selectedNodes.length == 0){
      alert(`Veuillez sélectionner des données`);
      return
    }
    const selectedData = selectedNodes.map(node => node.data );
    console.log(selectedData[0]);
    this.addata = selectedData[0];
    $('#myModalLabel').text("Edit");
    ($('#myModal') as any).modal('show');
  }

  delete() {
    if (this.agGrid == undefined){
      alert(`undefined!!!`);
      return
    }
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    if (selectedNodes.length == 0){
      alert(`Veuillez sélectionner des données`);
      return
    }
    const selectedData = selectedNodes.map(node => node.data );
    console.log(selectedData[0]);

    var nom = selectedData[0].nom;

    if (confirm("Vous êtes sûr de supprimer "+nom+" ?")) {

      this.adservService.deleteAddata(selectedData[0].id).subscribe();
      this.searchAddata();
    }
  }
}
