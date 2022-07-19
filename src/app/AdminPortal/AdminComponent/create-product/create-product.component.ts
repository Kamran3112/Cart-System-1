import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  productForm:any | FormGroup;

  constructor(
    private formBuilder:FormBuilder
  ) { 
    this.productFormBuilder();
  }

  ngOnInit(): void {
  }

  productFormBuilder(){
    this.productForm = this.formBuilder.group({
      Name:["",[Validators.required,Validators.minLength(4),Validators.maxLength(40),Validators.pattern(/^[A-Za-z]*$/)]],
      Email:["",[Validators.required,Validators.email]],

      _Image:['']

    })
  }
  getimage(Image:any){
   
    const _getImage = Image.target.files[0]
    console.log(_getImage);
  
    
    

  }


  getImage(getImageData:any){
//console.log(event);$event check in target.files
const _getImage = getImageData.target.files[0];
this.productForm.get("image").setValue(_getImage);
console.log(_getImage);

  };

submitProductForm(){
  console.log(this.productForm.value);
  let  MyFormValue = new FormData();
  
  MyFormValue.append('Name',this.productForm.get('Name').value)
  MyFormValue.append('Email',this.productForm.get('Email').value)
  MyFormValue.append('Image',this.productForm.get('Image').value)
  
}

}
