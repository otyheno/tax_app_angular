import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../services/ItemsService';
import { itemsRepository } from '../services/itemsRepository';

@Component({
  selector: 'app-billmanager',
  templateUrl: './billmanager.component.html',
  styleUrls: ['./billmanager.component.css']
})


export class BillmanagerComponent implements OnInit {

  constructor(private ItemsService: ItemsService) { }

  ngOnInit(): void {
    this.getAllItems()
  }


  monthsList: months[] = [
    new months("January"),
    new months('February'),
    new months('March'),
    new months('April'),
    new months('May'),
    new months('June'),
    new months('July'),
    new months('August'),
    new months('September'),
    new months('October'),
    new months('November'),
    new months('December')

  ];
 

  balance = 0
  netSalary = 0
  totalBill = 0
  


  itemsRepository: any;

  public getAllItems() {
    this.totalBill = 0
    this.ItemsService.getItems().subscribe(
      (response) => {
        console.log(response)

        this.itemsRepository = response;
        this.bill(response)
      },
      (error) => {
        console.log(error)
      }, () => {
        console.log("Request completed")
      }
    )
  }

  onSubmit(netSalaryForm: any) {
    console.log(netSalaryForm.value.Netsalary);
    this.netSalary = netSalaryForm.value.Netsalary;

  }

  
  bill (items: any) {
    for (let i =0; i < items.length; i++){
      
       this.totalBill = this.totalBill + items[i].amount
    }
  }

  AddItems(addItem: any) {
    console.log(addItem.value);
    this.ItemsService.addItem(addItem.value).subscribe(
      (response) => {
        console.log(response)
        this.getAllItems()
        
      },
      (error) => {
        console.log(error)
      }, () => {
        console.log("Request Completed")
      }
    )
    
  }

  DeleteItem (id: any) {
    this.ItemsService.deleteItem(id).subscribe(
      (response) => {
        console.log(response)
        this.getAllItems()
       
      },
      (error) => {
        console.log(error)
      }, () => {
        console.log("Request Completed")
      }
    )
  }
  

}

export class months {
  
  name: string;
 
  constructor(name: string) {
    
    this.name = name;
  }
}
 
