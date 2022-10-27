import { Router } from '@angular/router';
import { Contact } from './../../models/contact.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent implements OnInit {

  constructor(private router:Router) { }
  @Input() contact!: Contact
  @Output() remove = new EventEmitter<string>()
  ngOnInit(): void {
  }

  onRemoveContact(){
    this.remove.emit(this.contact._id)
  }
  onEdit(ev:MouseEvent){
    ev.stopPropagation()
    console.log('contact._id:', this.contact._id)
    this.router.navigate(['/contact/edit', this.contact._id])
  }
}
