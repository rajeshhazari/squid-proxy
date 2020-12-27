import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.scss']
})
export class FileuploadComponent implements OnInit {
  uploadResponses:any;
  imgFile:any;
  public files: Set<File> = new Set();
  public progress: { [key: string]: { progress: Observable<number> } } = {};
  public uploading: boolean = false;
  public uploadSuccessful: boolean = false;
  uploadImgForm: FormGroup;
  constructor(fb: FormBuilder)  { 
    this.uploadImgForm = fb.group({
      name: ["", Validators.required]
  });
  }

  ngOnInit() {
  }

  createNewTask()
  {
      console.log(this.uploadImgForm.value)
  } 
  
}
