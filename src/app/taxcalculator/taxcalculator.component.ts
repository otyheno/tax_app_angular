import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taxcalculator',
  templateUrl: './taxcalculator.component.html',
  styleUrls: ['./taxcalculator.component.css']
})
export class TaxcalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  nssfcontribution = 1080
  personalrelief = 2400
  insurancerelief = 210
  nhifcontribution = 1400
  taxableincome = 0
  taxbeforerelief = 0
  paye = 0
  netpay = 0


  onSubmit(grossForm: any) {
    console.log(grossForm.value.grosssalary);
    let grosssalary = grossForm.value.grosssalary;

    //PAYE is chargeable to persons of employment income of Kshs.
    // 24,000 and above per month. 
    //Taxable pay = Gross - NSSF
    //PAYE before relief is calcualted from ==> Taxable pay
    //PAYE/ payable tax = tax before relief - all reliefs
    //Net Pay = Taxable - (PAYE + NHIF)

    if (grosssalary >= 24000) {
      //var nssf = grosssalary * 0.0040 //0.4 %
     
      this.taxableincome = grosssalary - this.nssfcontribution;
      console.log(`taxableincome ${this.taxableincome}`)
  
      
  
      this.taxbeforerelief = this.PAYE(this.taxableincome)
      console.log(`taxbeforerelief ${this.taxbeforerelief}`)
  
  
      this.paye = this.taxbeforerelief - (this.personalrelief + this.insurancerelief)
      console.log(`paye ${this.paye}`)
      if(this.paye < 0) {
        this.paye = 0
      }
  
  
  
      this.netpay = this.taxableincome - (this.paye + this.nhifcontribution)
      console.log(`Netpay ${this.netpay}`)
  
      }else {
        alert(`Gross Pay of KSHs ${grosssalary} is Not Taxable`)
      }

  }

   PAYE (taxable: any) {
    var secondTaxBand = 0
    var firstTaxBand = 0
    var anyAbove = 0
    if (taxable){
        firstTaxBand = 24000 * 0.1
        console.log(`firstTaxband ${firstTaxBand}`);

        if(taxable >= 32333){
        secondTaxBand = 8333 * 0.25
        console.log(`SecondTaxBand ${secondTaxBand}`)
        }else{
            secondTaxBand = 0
        }
        if(taxable > 32333) {
        anyAbove = (taxable - 32333) * 0.3
        console.log(`anyAbove ${anyAbove}`)
        }else{
            anyAbove = 0 
        }

        var paye = firstTaxBand + secondTaxBand + anyAbove;
        console.log(`PayeBE ${paye}`)
        if(paye < 0) {
          paye = 0;
          return paye
        }else {
          return paye
        }
        

    }else {
      alert(`Gross Pay Not Taxable`)
        return taxable
    }
  }

}
