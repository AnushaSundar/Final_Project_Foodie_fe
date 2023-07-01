import { UserService } from './../services/user.service';
import { UrlTree, Router, ActivatedRoute } from '@angular/router';
import { Cuisine } from './../models/cuisine';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-cuisine',
  templateUrl: './add-cuisine.component.html',
  styleUrls: ['./add-cuisine.component.css']
})
export class AddCuisineComponent {
  image1:any;

  constructor(private formBuilder: FormBuilder, private _snackbar:MatSnackBar, private userService:UserService,private router:Router,private activate:ActivatedRoute) { }
    cuisineForm: FormGroup | any= this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/) , Validators.min(1)]],
      type: ['', Validators.required],
      // tags: ['',[]],
      image: [null]
    });
    get name() {
      return this.cuisineForm.get('name');
    }
    get description() {
      return this.cuisineForm.get('description');
    }
    get price() {
      return this.cuisineForm.get('price');
    }
    get type() {
      return this.cuisineForm.get('type');
    }


   

  onSubmit() {
    this.activate.paramMap.subscribe(
      data => {
      let id = data.get('id') ?? 0;
      console.log(id)
      console.log(this.cuisineForm.value)
      let cuisine:Cuisine={
        price: 0,
        quantity: 0
      };
      cuisine.name=this.cuisineForm.value.name;
      cuisine.description=this.cuisineForm.value.description;
      cuisine.price=this.cuisineForm.value.price;
      cuisine.type=this.cuisineForm.value.type;
    this.userService.addCuisine(this.convert(cuisine),id)
    this._snackbar.open("Cuisine is added", "Ok",{duration:2000});

      }
    )
    console.log(this.cuisineForm.value);

    // cuisine.tags=this.cuisineForm.value.tag;
    // this.userService.addCuisine(this.convert(cuisine))
  }
  onFileSelected(event:any){
    this.image1 = event.target.files[0];
  }


  convert(cuisine:Cuisine):FormData{
    const formdata = new FormData();
    formdata.append('cuisine',
    new Blob([JSON.stringify(cuisine)],{type:'application/json'})
    );
    formdata.append('image', this.image1

        // ,this.image1.name
        );

  return formdata;
  }

}
