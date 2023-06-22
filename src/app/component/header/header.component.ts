import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;

  // @ts-ignore
  @Component({
    selector: 'sidebar-position-demo',
    templateUrl: './sidebar-position-demo.html'
  })
  constructor() {


  }
  homeFunction(){
    alert('HOME')
  }
  ngOnInit() {
    this.items = [
      {
        label: 'HOME',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'ABBIGLIAMENTO',
            icon: 'pi pi-fw pi-plus',
            items: [
              {
                label: 'UOMO',
                icon: 'pi pi-fw pi-bookmark'

              },

              {
                label: 'DONNA',
                icon: 'pi pi-fw pi-video'
              }
            ]
          },
          {
            label: 'ACCESSORI',
            icon: 'pi pi-fw pi-trash'
          },
          {
            separator: true
          },
          {
            label: 'ESCI',
            icon: 'pi pi-fw pi-external-link'
          }
        ]
      },
      {
        label: 'ARTICOLI',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'SCARPE',
            icon: 'pi pi-fw pi-align-left'
          },
          {
            label: 'MAGLIERIA',
            icon: 'pi pi-fw pi-align-right'
          },
          {
            label: 'ABITI',
            icon: 'pi pi-fw pi-align-center'
          },
          {
            label: 'ACCESSORI',
            icon: 'pi pi-fw pi-align-justify'
          }
        ]
      },
      {
        label: 'PROMO',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'SPECIAL',
            icon: 'pi pi-fw pi-user-plus'
          },
          {
            label: '50%',
            icon: 'pi pi-fw pi-user-minus'
          },
          {
            label: 'COUPON',
            icon: 'pi pi-fw pi-users',
            items: [
              {
                label: 'Filter',
                icon: 'pi pi-fw pi-filter',
                items: [
                  {
                    label: 'Print',
                    icon: 'pi pi-fw pi-print'
                  }
                ]
              },
              {
                icon: 'pi pi-fw pi-bars',
                label: 'List'
              }
            ]
          }
        ]
      },
      {
        label: 'CHI SIAMO',
        icon: 'pi pi-fw pi-calendar',
        items: [
          {
            label: 'DOVE SIAMO?',
            icon: 'pi pi-fw pi-pencil',
            items: [
              {
                label: 'Save',
                icon: 'pi pi-fw pi-calendar-plus'
              },
              {
                label: 'Delete',
                icon: 'pi pi-fw pi-calendar-minus'
              }
            ]
          },
          {
            label: 'Archieve',
            icon: 'pi pi-fw pi-calendar-times',
            items: [
              {
                label: 'Remove',
                icon: 'pi pi-fw pi-calendar-minus'
              }
            ]
          }
        ]
      },
      {
        label: 'CARRELLO',
        icon: 'pi pi-fw pi-power-off'
      }
    ];
  }
}

